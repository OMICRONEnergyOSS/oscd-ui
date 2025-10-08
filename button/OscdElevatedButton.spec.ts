/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

import { expect, fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import { spy, SinonSpy } from 'sinon';

describe('OscdElevatedButton side-effect free', () => {
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
    const { OscdElevatedButton } = await import('./OscdElevatedButton.js');

    // Instantiate the component
    const oscdElevatedButton = await fixture(
      html`<oscd-elevated-button></oscd-elevated-button>`,
      { scopedElements: { 'oscd-elevated-button': OscdElevatedButton } },
    );

    // Verify it's upgraded (not just a dummy tag)
    expect(oscdElevatedButton.shadowRoot).not.to.be.null;
    expect(oscdElevatedButton.constructor.name).to.equal('OscdElevatedButton');

    const globallyDefinedElements = defineSpy.args
      .filter(
        ([tagName]) => !tagName.startsWith('scoped-elements-test-wrapper'),
      )
      .map(([tagName]) => tagName);

    expect(globallyDefinedElements).to.deep.equal([]);
  });
});
