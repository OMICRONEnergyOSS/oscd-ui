import { expect, fixture, html } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';

import { SinonSpy, spy } from 'sinon';

import './oscd-outlined-search-field.js';
import type { OscdOutlinedSearchField } from './OscdOutlinedSearchField.js';

describe('OscdOutlinedSearchField', () => {
  let searchField: OscdOutlinedSearchField;

  beforeEach(async () => {
    searchField = await fixture(
      html`<oscd-outlined-search-field
        placeholder="Search"
        clearLabel="Clear search"
      ></oscd-outlined-search-field>`,
    );
  });

  it('renders a default leading search icon', async () => {
    const icon = searchField.shadowRoot!.querySelector(
      'oscd-icon[slot="leading-icon"]',
    );

    expect(icon).to.exist;
    expect(icon!.textContent).to.equal('search');
  });

  it('does not render a clear button while empty', () => {
    expect(searchField.shadowRoot!.querySelector('oscd-icon-button')).to.be
      .null;
  });

  it('renders a clear button once a value is set', async () => {
    searchField.value = 'abc';
    await searchField.updateComplete;

    const clearButton = searchField.shadowRoot!.querySelector(
      'oscd-icon-button[slot="trailing-icon"]',
    );

    expect(clearButton).to.exist;
    expect(clearButton!.getAttribute('aria-label')).to.equal('Clear search');
  });

  it('clears the value and emits input when the clear button is clicked', async () => {
    const inputSpy: SinonSpy = spy();
    searchField.addEventListener('input', inputSpy);

    searchField.value = 'abc';
    await searchField.updateComplete;

    const clearButton = searchField.shadowRoot!.querySelector(
      'oscd-icon-button[slot="trailing-icon"]',
    ) as HTMLElement;
    clearButton.click();
    await searchField.updateComplete;

    expect(searchField.value).to.equal('');
    expect(inputSpy).to.have.been.calledOnce;
  });

  it('forwards typed input to value and dispatches input events', async () => {
    searchField.focus();
    await sendKeys({ type: 'abc' });
    await searchField.updateComplete;

    expect(searchField.value).to.equal('abc');
  });

  it('hides the placeholder while focused', async () => {
    const innerField = searchField.shadowRoot!.querySelector(
      'oscd-outlined-text-field',
    )!;

    expect(innerField.getAttribute('placeholder')).to.equal('Search');

    searchField.focus();
    await searchField.updateComplete;

    expect(innerField.getAttribute('placeholder')).to.equal('');
  });

  it('restores the placeholder once focus leaves and the value is empty', async () => {
    const innerField = searchField.shadowRoot!.querySelector(
      'oscd-outlined-text-field',
    )!;

    searchField.focus();
    await searchField.updateComplete;
    innerField.dispatchEvent(new Event('blur'));
    await searchField.updateComplete;

    expect(innerField.getAttribute('placeholder')).to.equal('Search');
  });
});
