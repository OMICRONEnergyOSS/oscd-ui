/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

import { expect, fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import { spy, SinonSpy } from 'sinon';

describe('OscdOutlinedIconButton side-effect free', () => {
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
    const { OscdOutlinedIconButton } = await import(
      './OscdOutlinedIconButton.js'
    );

    // Instantiate the component
    const oscdOutlinedIconButton = await fixture(
      html`<oscd-outlined-icon-button></oscd-outlined-icon-button>`,
      {
        scopedElements: { 'oscd-outlined-icon-button': OscdOutlinedIconButton },
      },
    );

    // Verify it's upgraded (not just a dummy tag)
    expect(oscdOutlinedIconButton.shadowRoot).not.to.be.null;
    expect(oscdOutlinedIconButton.constructor.name).to.equal(
      'OscdOutlinedIconButton',
    );

    const globallyDefinedElements = defineSpy.args
      .filter(
        ([tagName]) => !tagName.startsWith('scoped-elements-test-wrapper'),
      )
      .map(([tagName]) => tagName);

    expect(globallyDefinedElements).to.deep.equal([]);
  });
});
