import { expect, fixture, html } from '@open-wc/testing';

import './oscd-action-icon.js';
import type { OscdActionIcon } from './OscdActionIcon.js';

describe('OscdActionIcon', () => {
  it('renders its label, icon, and action slot', async () => {
    const icon = await fixture<OscdActionIcon>(
      html`<oscd-action-icon label="Settings" icon="tune">
        <button slot="action">Edit</button>
      </oscd-action-icon>`,
    );
    const actionSlot = icon.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="action"]',
    );

    expect(icon.tabIndex).to.equal(0);
    expect(icon.shadowRoot?.querySelector('header')?.textContent).to.contain(
      'Settings',
    );
    expect(icon.shadowRoot?.querySelector('footer')?.textContent).to.equal(
      'Settings',
    );
    expect(icon.shadowRoot?.querySelector('oscd-icon')?.textContent).to.equal(
      'tune',
    );
    expect(
      actionSlot?.assignedElements().map(element => element.textContent),
    ).to.deep.equal(['Edit']);
  });

  it('uses a slotted icon instead of the icon property', async () => {
    const icon = await fixture<OscdActionIcon>(
      html`<oscd-action-icon icon="tune">
        <span slot="icon">Custom icon</span>
      </oscd-action-icon>`,
    );
    const iconSlot =
      icon.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="icon"]');

    expect(iconSlot?.assignedElements().length).to.equal(1);
    expect(iconSlot?.assignedElements()[0]?.textContent).to.equal(
      'Custom icon',
    );
    expect(icon.shadowRoot?.querySelector('header') === null).to.equal(true);
    expect(icon.shadowRoot?.querySelector('footer') === null).to.equal(true);
  });

  it('reveals and positions actions on focus', async () => {
    const icon = await fixture<OscdActionIcon>(
      html`<oscd-action-icon label="Actions" icon="edit">
        <button slot="action">First</button>
        <button slot="action">Second</button>
      </oscd-action-icon>`,
    );
    const actions = icon.querySelectorAll<HTMLButtonElement>('[slot="action"]');
    const footer = icon.shadowRoot?.querySelector('footer');
    if (!footer) {
      throw new Error('Expected action icon footer');
    }

    expect(getComputedStyle(actions[0]).opacity).to.equal('0');
    expect(getComputedStyle(actions[0]).pointerEvents).to.equal('none');
    icon.focus();
    expect(getComputedStyle(actions[0]).pointerEvents).to.equal('auto');
    expect(getComputedStyle(actions[0]).transform).not.to.equal('none');
    expect(getComputedStyle(actions[1]).transform).not.to.equal('none');
    expect(getComputedStyle(footer).display).to.equal('none');
  });

  it('applies secondary and highlighted styles and respects hideActions on focus', async () => {
    const icon = await fixture<OscdActionIcon>(
      html`<oscd-action-icon
        label="Actions"
        icon="edit"
        secondary
        highlighted
        hideActions
        style="--md-sys-color-secondary: rgb(10, 20, 30)"
      ></oscd-action-icon>`,
    );
    const symbol = icon.shadowRoot?.querySelector('oscd-icon');
    const wrapper = icon.shadowRoot?.querySelector('.icon-container');
    const label = icon.shadowRoot?.querySelector('header');
    if (!symbol || !wrapper || !label) {
      throw new Error('Expected icon, wrapper, and label');
    }

    expect(getComputedStyle(symbol).outlineStyle).to.equal('dotted');
    expect(getComputedStyle(symbol).outlineColor).to.equal('rgb(10, 20, 30)');
    expect(getComputedStyle(label).backgroundColor).to.equal('rgb(10, 20, 30)');

    icon.focus();
    expect(getComputedStyle(symbol).outlineStyle).to.equal('solid');
    expect(getComputedStyle(wrapper).transform).to.equal('none');
    expect(
      getComputedStyle(wrapper).getPropertyValue('--md-elevation-level'),
    ).to.equal('');
  });

  it('elevates its icon and label on focus', async () => {
    const icon = await fixture<OscdActionIcon>(
      html`<oscd-action-icon label="Actions" icon="edit"></oscd-action-icon>`,
    );
    const wrapper = icon.shadowRoot?.querySelector('.icon-container');
    const label = icon.shadowRoot?.querySelector('header');
    if (!wrapper || !label) {
      throw new Error('Expected icon wrapper and label');
    }

    expect(!!wrapper.querySelector('oscd-elevation')?.shadowRoot).to.equal(
      true,
    );
    expect(!!label.querySelector('oscd-elevation')?.shadowRoot).to.equal(true);
    expect(
      getComputedStyle(wrapper).getPropertyValue('--md-elevation-level'),
    ).to.equal('');

    icon.focus();

    expect(
      getComputedStyle(wrapper).getPropertyValue('--md-elevation-level').trim(),
    ).to.equal('3');
    expect(
      getComputedStyle(label).getPropertyValue('--md-elevation-level').trim(),
    ).to.equal('3');
  });
});
