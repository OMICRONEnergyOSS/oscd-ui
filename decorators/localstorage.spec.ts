import { expect, fixture, html } from '@open-wc/testing';
import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { spy } from 'sinon';

import { localstorage } from './localstorage.js';

/*
 * fixture() can involve wrapper/upgrade timing where this decorator’s connect-time hydration runs before the final
 * host id is reliably present on the upgraded instance in test harness flow. That’s why we use:
 * createElement -> set id -> fixture(element)
 * it guarantees id exists early enough (pre-connect).
 */
async function fixtureWithSeededId<T extends LitElement>(
  tagName: string,
  id: string,
): Promise<T> {
  const seeded = document.createElement(tagName) as T;
  seeded.id = id;
  const el = await fixture<T>(seeded);
  // updateComplete can be too early if no update was scheduled yet when awaited, so also wait a microtask to
  // ensure any hydration logic has run before tests read properties.
  await tick();
  await el.updateComplete;
  return el;
}

class LocalstorageTestElement extends LitElement {
  @localstorage<number>({ namespace: 'oscd:test', default: 42 })
  @property({ type: Number })
  value = 0;

  @localstorage<string>({ namespace: 'oscd:test', default: 'fallback' })
  @property({ type: String })
  other = '';
}

class LocalstorageSerializerErrorElement extends LitElement {
  @localstorage<{ a: number }>({
    namespace: 'oscd:test:serialize',
    serializer: () => {
      throw new Error('serialize failed');
    },
  })
  @property({ attribute: false })
  payload = { a: 1 };
}

if (!customElements.get('test-localstorage-element')) {
  customElements.define('test-localstorage-element', LocalstorageTestElement);
}

if (!customElements.get('test-localstorage-serializer-element')) {
  customElements.define(
    'test-localstorage-serializer-element',
    LocalstorageSerializerErrorElement,
  );
}

function tick(): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, 0));
}

describe('localstorage decorator', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    //just in case these tests abort early - cleanup anyway.
    localStorage.clear();
  });

  it('loads from storage when id exists before first read', async () => {
    localStorage.setItem('oscd:test:alpha:value', JSON.stringify(7));

    const el = await fixtureWithSeededId<LocalstorageTestElement>(
      'test-localstorage-element',
      'alpha',
    );

    await el.updateComplete;
    expect(el.value).to.equal(7);
  });

  it('uses default when no stored value and id exists', async () => {
    const el = await fixtureWithSeededId<LocalstorageTestElement>(
      'test-localstorage-element',
      'beta',
    );

    await el.updateComplete;
    expect(el.value).to.equal(42);
  });

  it('warns once and does not persist when id is missing', async () => {
    const warn = spy(console, 'warn');

    const el = await fixture<LocalstorageTestElement>(
      html`<test-localstorage-element></test-localstorage-element>`,
    );

    el.value = 9;
    el.value = 10;
    await el.updateComplete;

    expect(warn.callCount).to.equal(2);
    expect(localStorage.length).to.equal(0);

    warn.restore();
  });

  it('does not hydrate after id is assigned later', async () => {
    localStorage.setItem('oscd:test:late:value', JSON.stringify(15));

    const el = await fixture<LocalstorageTestElement>(
      html`<test-localstorage-element></test-localstorage-element>`,
    );

    expect(el.value).to.equal(0);

    el.setAttribute('id', 'late');
    await tick();
    await el.updateComplete;

    expect(el.value).to.equal(0);
  });

  it('writes under namespaced keys', async () => {
    const el = await fixture<LocalstorageTestElement>(
      html`<test-localstorage-element id="gamma"></test-localstorage-element>`,
    );

    el.value = 31;
    await el.updateComplete;
    await tick();

    expect(localStorage.getItem('oscd:test:gamma:value')).to.equal(
      JSON.stringify(31),
    );
  });

  it('supports multiple decorated fields on the same host', async () => {
    const el = await fixture<LocalstorageTestElement>(
      html`<test-localstorage-element id="multi"></test-localstorage-element>`,
    );

    el.value = 1;
    el.other = 'two';
    await el.updateComplete;
    await tick();

    expect(localStorage.getItem('oscd:test:multi:value')).to.equal(
      JSON.stringify(1),
    );
    expect(localStorage.getItem('oscd:test:multi:other')).to.equal(
      JSON.stringify('two'),
    );
  });

  it('does not throw on parse and serialization errors', async () => {
    localStorage.setItem('oscd:test:bad:value', '{broken-json');

    const parseEl = await fixture<LocalstorageTestElement>(
      html`<test-localstorage-element id="bad"></test-localstorage-element>`,
    );

    await parseEl.updateComplete;
    expect(() => parseEl.value).not.to.throw();

    const serializerEl = await fixture<LocalstorageSerializerErrorElement>(
      html`<test-localstorage-serializer-element
        id="ser"
      ></test-localstorage-serializer-element>`,
    );

    expect(() => {
      serializerEl.payload = { a: 2 };
    }).not.to.throw();
  });

  it('calls requestUpdate with old value on set', async () => {
    const el = await fixture<LocalstorageTestElement>(
      html`<test-localstorage-element id="delta"></test-localstorage-element>`,
    );

    await el.updateComplete;
    const previous = el.value;

    const requestUpdateSpy = spy(el, 'requestUpdate');
    el.value = 99;

    expect(requestUpdateSpy.calledWith('value', previous)).to.equal(true);
    requestUpdateSpy.restore();
  });
});
