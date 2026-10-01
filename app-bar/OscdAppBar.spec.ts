import { expect, fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import { OscdAppBar } from './OscdAppBar.js';

if (!customElements.get('test-oscd-app-bar')) {
  customElements.define('test-oscd-app-bar', OscdAppBar);
}

describe('OscdAppBar', () => {
  let appBar: OscdAppBar;

  afterEach(() => {
    fixtureCleanup();
  });

  beforeEach(async () => {
    appBar = await fixture<OscdAppBar>(html`
      <test-oscd-app-bar>
        <span slot="alignStart">Leading action</span>
        <span slot="alignMiddle">Page title</span>
        <span slot="alignEnd">Trailing action</span>
        <div>Sub-bar content</div>
      </test-oscd-app-bar>
    `);
  });

  it('renders a 64px resting main row and retains the separate sub-bar', () => {
    const mainHeader =
      appBar.shadowRoot?.querySelector<HTMLElement>('.main-header');
    const subHeader =
      appBar.shadowRoot?.querySelector<HTMLElement>('.sub-header');
    const elevation = appBar.shadowRoot?.querySelector('oscd-elevation');
    const headline = appBar.querySelector<HTMLElement>('[slot="alignMiddle"]');

    expect(mainHeader).not.to.equal(null);
    expect(mainHeader && getComputedStyle(mainHeader).height).to.equal('64px');
    expect(mainHeader && getComputedStyle(mainHeader).backgroundColor).to.equal(
      'rgb(254, 247, 255)',
    );
    expect(headline && getComputedStyle(headline).fontSize).to.equal('22px');
    expect(subHeader?.querySelector('slot')?.assignedElements()).to.have.length(
      1,
    );
    expect(
      elevation &&
        getComputedStyle(elevation)
          .getPropertyValue('--md-elevation-level')
          .trim(),
    ).to.equal('0');
  });

  it('allows the main-row height to be customized', () => {
    appBar.style.setProperty('--oscd-app-bar-container-height', '54px');

    const mainHeader =
      appBar.shadowRoot?.querySelector<HTMLElement>('.main-header');
    expect(mainHeader && getComputedStyle(mainHeader).height).to.equal('54px');
  });

  it('reflects the consumer-set scrolled state and applies its surface and elevation', async () => {
    appBar.style.setProperty(
      '--md-sys-color-surface-container',
      'rgb(1, 2, 3)',
    );
    appBar.style.setProperty(
      '--oscd-app-bar-on-scroll-container-elevation',
      '2',
    );
    appBar.scrolled = true;
    await appBar.updateComplete;

    const mainHeader =
      appBar.shadowRoot?.querySelector<HTMLElement>('.main-header');
    const subHeader =
      appBar.shadowRoot?.querySelector<HTMLElement>('.sub-header');
    const elevation = appBar.shadowRoot?.querySelector('oscd-elevation');

    expect(appBar.hasAttribute('scrolled')).to.equal(true);
    expect(mainHeader && getComputedStyle(mainHeader).backgroundColor).to.equal(
      'rgb(1, 2, 3)',
    );
    expect(subHeader && getComputedStyle(subHeader).backgroundColor).to.equal(
      'rgb(103, 80, 164)',
    );
    expect(
      elevation &&
        getComputedStyle(elevation)
          .getPropertyValue('--md-elevation-level')
          .trim(),
    ).to.equal('2');
  });

  it('uses separate palette roles for leading and trailing icons', () => {
    appBar.style.setProperty('--md-sys-color-on-surface', 'rgb(4, 5, 6)');
    appBar.style.setProperty(
      '--md-sys-color-on-surface-variant',
      'rgb(7, 8, 9)',
    );

    const leading = appBar.querySelector<HTMLElement>('[slot="alignStart"]');
    const trailing = appBar.querySelector<HTMLElement>('[slot="alignEnd"]');

    expect(
      leading &&
        getComputedStyle(leading)
          .getPropertyValue('--md-icon-button-icon-color')
          .trim(),
    ).to.equal('rgb(4, 5, 6)');
    expect(
      trailing &&
        getComputedStyle(trailing)
          .getPropertyValue('--md-icon-button-icon-color')
          .trim(),
    ).to.equal('rgb(7, 8, 9)');
  });
});
