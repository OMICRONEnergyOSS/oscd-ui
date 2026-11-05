import { LitElement, html, css } from 'lit';
import * as AceGlobal from 'ace-builds';
import { query } from 'lit/decorators.js';

import './ace.config.js';

import AceEditorBase from './ace-editor-base/AceEditorBase.js';

type AceSettingsMenuModule = {
  init: () => void;
};

type AceEditorWithSettingsMenu = AceGlobal.Ace.Editor & {
  showSettingsMenu?: () => void;
};

export { AceGlobal };
export type { AceSettingsMenuModule, AceEditorWithSettingsMenu };

const ACE_DEFAULT_OPTIONS = {
  fontSize: '17',
  theme: 'ace/theme/oscd',
  mode: 'ace/mode/xml',
};

const storageKey = 'oscd:ace-options';

const getStoredAceOptions = (): Omit<
  Partial<AceGlobal.Ace.EditorOptions>,
  'theme' | 'mode'
> &
  Pick<AceGlobal.Ace.EditorOptions, 'theme' | 'mode'> => {
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      return {
        ...ACE_DEFAULT_OPTIONS,
        ...JSON.parse(stored),
      };
    }
  } catch (error) {
    console.warn('Failed to retrieve Ace options from storage:', error);
  }
  return ACE_DEFAULT_OPTIONS;
};

let aceOptions = getStoredAceOptions();
let isSettingsMenuInitialized = false;

function manageAceOptionChange(editor: AceGlobal.Ace.Editor) {
  editor.setOptions(aceOptions);

  const originalSetOption = editor.setOption.bind(editor);
  const originalSetOptions = editor.setOptions.bind(editor);
  const persistOptions = () => {
    try {
      aceOptions = {
        ...ACE_DEFAULT_OPTIONS,
        ...editor.getOptions(),
      };
      localStorage.setItem(storageKey, JSON.stringify(aceOptions));
    } catch (error) {
      console.warn('Failed to store Ace options:', error);
    }
  };

  editor.setOption = (name: string, value: unknown) => {
    originalSetOption(
      name as keyof AceGlobal.Ace.EditorOptions,
      value as never,
    );
    persistOptions();
  };

  editor.setOptions = (options: Partial<AceGlobal.Ace.EditorOptions>) => {
    originalSetOptions(options);
    persistOptions();
  };
}

export class AceEditor extends LitElement {
  private pendingValue: string | undefined;

  set value(value: string | undefined) {
    const editor = this.editor;
    if (editor === undefined) {
      this.pendingValue = value ?? '';
    } else if (editor.getValue() !== (value ?? '')) {
      this.aceEditorBase.value = value ?? '';
    }
  }

  get value(): string {
    return this.editor?.getValue() ?? this.pendingValue ?? '';
  }

  @query('ace-editor-base')
  aceEditorBase!: AceEditorBase;

  public get editor(): AceGlobal.Ace.Editor | undefined {
    return this.aceEditorBase?.editor;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    window.ace?.config?.addEventListener?.('editor', manageAceOptionChange);

    if (!isSettingsMenuInitialized) {
      const settingsMenu = window.ace?.require?.('ace/ext/settings_menu') as
        AceSettingsMenuModule | undefined;
      settingsMenu?.init();
      isSettingsMenuInitialized = true;
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    window.ace?.config?.removeEventListener?.('editor', manageAceOptionChange);
  }

  private handleReady(): void {
    const editor = this.editor;
    if (editor !== undefined && this.pendingValue !== undefined) {
      if (editor.getValue() !== this.pendingValue) {
        this.aceEditorBase.value = this.pendingValue;
      }
      this.pendingValue = undefined;
    }
  }

  override render() {
    return html`
      <ace-editor-base
        .valueUpdateMode=${'start'}
        .mode=${aceOptions.mode}
        .theme=${aceOptions.theme}
        @ready=${this.handleReady}
      ></ace-editor-base>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }

    ace-editor-base {
      display: inherit;
      height: inherit;
      width: inherit;
    }
  `;
}
