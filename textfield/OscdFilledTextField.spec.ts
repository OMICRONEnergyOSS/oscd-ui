/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

import { expect, fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import { spy, SinonSpy } from 'sinon';

describe('OscdFilledTextField side-effect free', () => {
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
    const { OscdFilledTextField } = await import('./OscdFilledTextField.js');

    // Instantiate the component
    const oscdFilledTextField = await fixture(
      html`<oscd-filled-text-field></oscd-filled-text-field>`,
      { scopedElements: { 'oscd-filled-text-field': OscdFilledTextField } },
    );

    // Verify it's upgraded (not just a dummy tag)
    expect(oscdFilledTextField.shadowRoot).not.to.be.null;
    expect(oscdFilledTextField.constructor.name).to.equal(
      'OscdFilledTextField',
    );

    const globallyDefinedElements = defineSpy.args
      .filter(
        ([tagName]) => !tagName.startsWith('scoped-elements-test-wrapper'),
      )
      .map(([tagName]) => tagName);

    expect(globallyDefinedElements).to.deep.equal([]);
  });
});
