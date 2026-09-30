import { expect, fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';

import { OscdNavigationDrawerHeader } from './OscdNavigationDrawerHeader.js';

if (!customElements.get('test-oscd-navigation-drawer-header')) {
  customElements.define(
    'test-oscd-navigation-drawer-header',
    OscdNavigationDrawerHeader,
  );
}

describe('OscdNavigationDrawerHeader', () => {
  afterEach(() => {
    fixtureCleanup();
  });

  it('inherits MD list-item styling overrides from its parent', async () => {
    const container = await fixture(html`
      <div
        style="
          --md-list-item-label-text-color: rgb(1, 2, 3);
          --md-list-item-label-text-size: 22px;
          --md-list-item-supporting-text-color: rgb(4, 5, 6);
        "
      >
        <test-oscd-navigation-drawer-header>
          <span slot="headline">Header</span>
          <span slot="supporting-text">Supporting text</span>
        </test-oscd-navigation-drawer-header>
      </div>
    `);
    const header = container.querySelector<HTMLElement>(
      'test-oscd-navigation-drawer-header',
    );
    const listItem = header?.shadowRoot?.querySelector<HTMLElement>('md-item');
    const supportingTextSlot = header?.shadowRoot?.querySelector<HTMLElement>(
      'slot[name="supporting-text"]',
    );

    expect(header).not.to.equal(null);
    expect(listItem ? getComputedStyle(listItem).color : '').to.equal(
      'rgb(1, 2, 3)',
    );
    expect(listItem ? getComputedStyle(listItem).fontSize : '').to.equal(
      '22px',
    );
    expect(
      supportingTextSlot ? getComputedStyle(supportingTextSlot).color : '',
    ).to.equal('rgb(4, 5, 6)');
    expect(
      header &&
        getComputedStyle(header)
          .getPropertyValue('--md-list-item-label-text-color')
          .trim(),
    ).to.equal('rgb(1, 2, 3)');
    expect(
      header &&
        getComputedStyle(header)
          .getPropertyValue('--md-list-item-label-text-size')
          .trim(),
    ).to.equal('22px');
    expect(
      header &&
        getComputedStyle(header)
          .getPropertyValue('--md-list-item-supporting-text-color')
          .trim(),
    ).to.equal('rgb(4, 5, 6)');
    expect(
      header &&
        getComputedStyle(header)
          .getPropertyValue('--oscd-navigation-drawer-header-text-size')
          .trim(),
    ).to.equal('');
  });
});
