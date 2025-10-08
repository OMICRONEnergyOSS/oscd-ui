import { expect, fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import { spy, SinonSpy } from 'sinon';
import { OscdNavigationTab } from '../navigationtab/OscdNavigationTab.js';

describe('OscdNavigationBar side-effect free', () => {
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
    const { OscdNavigationBar } = await import('./OscdNavigationBar.js');

    // Instantiate the component
    const oscdNavigationBar = await fixture(
      html`<oscd-test-navigation-bar>
        <oscd-test-navigation-bar-tab
          label="One"
        ></oscd-test-navigation-bar-tab>
        <oscd-test-navigation-bar-tab
          label="Two"
        ></oscd-test-navigation-bar-tab>
      </oscd-test-navigation-bar>`,
      {
        scopedElements: {
          'oscd-test-navigation-bar': OscdNavigationBar,
          'oscd-test-navigation-bar-tab': OscdNavigationTab,
        },
      },
    );

    // Verify it's upgraded (not just a dummy tag)
    expect(oscdNavigationBar.shadowRoot).not.to.be.null;
    expect(oscdNavigationBar.constructor.name).to.equal('OscdNavigationBar');

    const globallyDefinedElements = defineSpy.args
      .filter(
        ([tagName]) => !tagName.startsWith('scoped-elements-test-wrapper'),
      )
      .map(([tagName]) => tagName);

    expect(globallyDefinedElements).to.deep.equal([]);
  });
});
