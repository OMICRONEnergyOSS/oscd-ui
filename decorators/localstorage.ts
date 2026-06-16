import type { ReactiveElement } from 'lit';

type LitHost = ReactiveElement & Record<PropertyKey, unknown>;

type PersistOptions<T> = {
  namespace?: string;
  default?: T;
  serializer?: (value: T) => string;
  deserializer?: (raw: string) => T;
};

type PersistEntry = {
  propName: PropertyKey;
  propKey: string;
  hydratedSymbol: symbol;
  disabledSymbol: symbol;
  warnedMissingIdSymbol: symbol;
  hydrateIfNeeded: (host: LitHost) => void;
  persistIfPossible: (host: LitHost) => void;
};

function hasLocalStorage(): boolean {
  try {
    return typeof window !== 'undefined' && !!window.localStorage;
  } catch {
    return false;
  }
}

function resolveKey(
  host: LitHost,
  propKey: string,
  namespace?: string,
): string | undefined {
  const hostId = (host as unknown as HTMLElement).id;
  if (!hostId) {
    return undefined;
  }

  return namespace
    ? `${namespace}:${hostId}:${propKey}`
    : `${hostId}:${propKey}`;
}

const localstorageEntries = Symbol('localstorage:entries');
const localstorageLifecycleWrapped = Symbol('localstorage:lifecycleWrapped');

function installLifecycleWrappers(target: Record<PropertyKey, unknown>): void {
  if (target[localstorageLifecycleWrapped]) {
    return;
  }
  target[localstorageLifecycleWrapped] = true;

  const connected = target['connectedCallback'] as
    | ((this: LitHost) => void)
    | undefined;
  target['connectedCallback'] = function connectedCallback(
    this: LitHost,
  ): void {
    connected?.call(this);

    const entries = target[localstorageEntries] as PersistEntry[] | undefined;
    entries?.forEach(entry => entry.hydrateIfNeeded(this));
  };

  const requestUpdate = target['requestUpdate'] as
    | ((
        this: LitHost,
        name?: PropertyKey,
        oldValue?: unknown,
        options?: unknown,
      ) => unknown)
    | undefined;
  target['requestUpdate'] = function requestUpdateCallback(
    this: LitHost,
    name?: PropertyKey,
    oldValue?: unknown,
    options?: unknown,
  ): unknown {
    const result = requestUpdate?.call(this, name, oldValue, options);
    if (name === undefined) {
      return result;
    }

    const entries = target[localstorageEntries] as PersistEntry[] | undefined;
    entries
      ?.filter(entry => entry.propName === name)
      .forEach(entry => entry.persistIfPossible(this));

    return result;
  };
}

export function localstorage<T = unknown>(
  opts: PersistOptions<T> = {},
): PropertyDecorator {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (target: any, propName: string | symbol) => {
    const propKey = String(propName);
    const hydratedSymbol = Symbol(`${propKey}:hydrated`);
    const disabledSymbol = Symbol(`${propKey}:disabled`);
    const warnedMissingIdSymbol = Symbol(`${propKey}:warnedMissingId`);

    const warnMissingId = (host: LitHost): void => {
      if (host[warnedMissingIdSymbol]) {
        return;
      }
      console.warn(
        `[localstorage] ${propKey} requires a static host id for persistence. Dynamic IDs are not supported.`,
      );
      host[warnedMissingIdSymbol] = true;
    };

    const hydrateIfNeeded = (host: LitHost): void => {
      if (host[hydratedSymbol] || host[disabledSymbol]) {
        return;
      }

      if (!hasLocalStorage()) {
        if ('default' in opts) {
          host[propName] = opts.default as T;
        }
        host[hydratedSymbol] = true;
        return;
      }

      const storageKey = resolveKey(host, propKey, opts.namespace);
      if (!storageKey) {
        if (!(host as unknown as HTMLElement).isConnected) {
          return;
        }
        warnMissingId(host);
        host[disabledSymbol] = true;
        return;
      }

      const raw = localStorage.getItem(storageKey);
      if (raw != null) {
        try {
          host[propName] = opts.deserializer
            ? opts.deserializer(raw)
            : (JSON.parse(raw) as T);
        } catch {
          if ('default' in opts) {
            host[propName] = opts.default as T;
          }
        }
      } else if ('default' in opts) {
        host[propName] = opts.default as T;
      }

      host[hydratedSymbol] = true;
    };

    const persistIfPossible = (host: LitHost): void => {
      if (host[disabledSymbol]) {
        return;
      }

      const storageKey = resolveKey(host, propKey, opts.namespace);
      if (!storageKey || !hasLocalStorage()) {
        if (!storageKey) {
          if (!(host as unknown as HTMLElement).isConnected) {
            return;
          }
          warnMissingId(host);
          host[disabledSymbol] = true;
        }
        return;
      }

      try {
        const raw = opts.serializer
          ? opts.serializer(host[propName] as T)
          : JSON.stringify(host[propName] as T);
        localStorage.setItem(storageKey, raw);
      } catch {
        // ignore quota/serialization errors
      }
    };

    installLifecycleWrappers(target);
    if (!target[localstorageEntries]) {
      target[localstorageEntries] = [];
    }
    (target[localstorageEntries] as PersistEntry[]).push({
      propName,
      propKey,
      hydratedSymbol,
      disabledSymbol,
      warnedMissingIdSymbol,
      hydrateIfNeeded,
      persistIfPossible,
    });
  };
}
