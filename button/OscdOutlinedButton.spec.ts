/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

import { expect, fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import { spy, SinonSpy } from 'sinon';

describe('OscdOutlinedButton side-effect free', () => {
  let defineSpy: SinonSpy;
  // let harness: ScopingTestHarness;

  beforeEach(async () => {
    // Spy on customElements.define before dynamic import
    defineSpy = spy(window.customElements, 'define');
  });

  afterEach(() => {
    // Restore the spy
    defineSpy.restore();
    // Clean up DOM
    fixtureCleanup();
  });

  it('should not call customElements.define as a side effect during import/instantiation', async () => {
    // Dynamically import the component
    const { OscdOutlinedButton } = await import('./OscdOutlinedButton.js');

    // Instantiate the component
    const oscdOutlinedButton = await fixture(
      html`<oscd-outlined-button></oscd-outlined-button>`,
      { scopedElements: { 'oscd-outlined-button': OscdOutlinedButton } },
    );

    // Verify it's upgraded (not just a dummy tag)
    expect(oscdOutlinedButton.shadowRoot).not.to.be.null;
    expect(oscdOutlinedButton.constructor.name).to.equal('OscdOutlinedButton');

    const globallyDefinedElements = defineSpy.args
      .filter(
        ([tagName]) => !tagName.startsWith('scoped-elements-test-wrapper'),
      )
      .map(([tagName]) => tagName);

    expect(globallyDefinedElements).to.deep.equal([]);
  });
});
