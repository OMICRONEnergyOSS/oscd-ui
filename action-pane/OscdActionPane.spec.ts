import { expect, fixture, html } from '@open-wc/testing';

import './oscd-action-pane.js';
import type { OscdActionPane } from './OscdActionPane.js';

describe('OscdActionPane', () => {
  it('renders its label, icon, actions, and body in their respective places', async () => {
    const pane = await fixture<OscdActionPane>(
      html`<oscd-action-pane label="Commands" icon="settings">
        <button slot="action">Run</button>
        <p>Details</p>
      </oscd-action-pane>`,
    );
    const heading = pane.shadowRoot?.querySelector('h1');

    expect(heading?.getAttribute('title')).to.equal('Commands');
    expect(heading?.textContent).to.contain('Commands');
    expect(heading?.querySelector('oscd-icon')?.textContent).to.equal(
      'settings',
    );
    const actionSlot = heading?.querySelector<HTMLSlotElement>(
      'nav slot[name="action"]',
    );
    expect(
      actionSlot?.assignedElements().map(element => element.textContent),
    ).to.deep.equal(['Run']);
    const bodySlot = pane.shadowRoot?.querySelector<HTMLSlotElement>(
      'section > div > slot:not([name])',
    );
    expect(
      bodySlot?.assignedElements().map(element => element.textContent?.trim()),
    ).to.deep.equal(['Details']);
  });

  it('uses a slotted icon in place of the icon property', async () => {
    const pane = await fixture<OscdActionPane>(
      html`<oscd-action-pane icon="settings">
        <span slot="icon">Custom icon</span>
      </oscd-action-pane>`,
    );
    const iconSlot =
      pane.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="icon"]');

    expect(iconSlot?.assignedElements().length).to.equal(1);
    expect(iconSlot?.assignedElements()[0]?.textContent).to.equal(
      'Custom icon',
    );
  });

  it('uses nested levels for heading rank and alternating surface', async () => {
    const outer = await fixture<OscdActionPane>(
      html`<oscd-action-pane label="First">
        <oscd-action-pane label="Second">
          <oscd-action-pane label="Third">
            <oscd-action-pane label="Fourth"></oscd-action-pane>
          </oscd-action-pane>
        </oscd-action-pane>
      </oscd-action-pane>`,
    );
    const panes = [outer];
    for (let index = 0; index < 3; index += 1) {
      const child =
        panes[index].querySelector<OscdActionPane>('oscd-action-pane');
      if (!child) {
        throw new Error('Expected nested action pane');
      }
      await child.updateComplete;
      panes.push(child);
    }

    for (const [index, pane] of panes.entries()) {
      expect(
        pane.shadowRoot?.querySelector(`h${index + 1}`)?.textContent,
      ).to.contain(['First', 'Second', 'Third', 'Fourth'][index]);
      expect(
        pane.shadowRoot
          ?.querySelector('section')
          ?.classList.contains('contrasted'),
      ).to.equal(index % 2 === 1);
    }
  });

  it('uses an explicit root level and reflects secondary and highlighted states', async () => {
    const pane = await fixture<OscdActionPane>(
      html`<oscd-action-pane label="Second" level="2" secondary highlighted>
        <oscd-action-pane label="Third"></oscd-action-pane>
      </oscd-action-pane>`,
    );
    const child = pane.querySelector<OscdActionPane>('oscd-action-pane');
    if (!child) {
      throw new Error('Expected nested action pane');
    }
    await child.updateComplete;

    expect(pane.shadowRoot?.querySelector('h2') !== null).to.equal(true);
    const section = pane.shadowRoot?.querySelector('section');
    expect(section?.classList.contains('secondary')).to.equal(true);
    expect(section?.classList.contains('highlighted')).to.equal(true);
    expect(section?.classList.contains('contrasted')).to.equal(true);
    expect(child.shadowRoot?.querySelector('h3') !== null).to.equal(true);
    expect(
      child.shadowRoot
        ?.querySelector('section')
        ?.classList.contains('contrasted'),
    ).to.equal(false);

    pane.secondary = false;
    pane.highlighted = false;
    await pane.updateComplete;

    expect(section?.classList.contains('secondary')).to.equal(false);
    expect(section?.classList.contains('highlighted')).to.equal(false);
    expect(section?.classList.contains('contrasted')).to.equal(true);
  });

  it('elevates its section while focus is within', async () => {
    const pane = await fixture<OscdActionPane>(
      html`<oscd-action-pane label="Actions"></oscd-action-pane>`,
    );
    const section = pane.shadowRoot?.querySelector('section');
    if (!section) {
      throw new Error('Expected pane section');
    }

    expect(
      section.querySelector('oscd-elevation')?.shadowRoot !== null,
    ).to.equal(true);
    expect(
      getComputedStyle(section).getPropertyValue('--md-elevation-level'),
    ).to.equal('');

    pane.focus();

    expect(
      getComputedStyle(section).getPropertyValue('--md-elevation-level').trim(),
    ).to.equal('3');
  });
});
