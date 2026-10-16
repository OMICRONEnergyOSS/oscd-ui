import { expect, fixture, html, waitUntil } from '@open-wc/testing';

import { OscdIcon } from './OscdIcon.js';
import { OscdSclIcon } from '../scl-icon/OscdSclIcon.js';
import { SCL_ICONS, toSVG } from '../scl-icon/internal/scl-icons.js';

customElements.define('oscd-icon-rendering-test', class extends OscdIcon {});
customElements.define(
  'oscd-scl-icon-rendering-test',
  class extends OscdSclIcon {},
);

describe('OscdIcon rendering', () => {
  for (const name of ['gooseIcon', 'serverIcon', 'scl-warning']) {
    for (const size of [16, 32, 48]) {
      it(`sizes the rendered ${name} SVG to ${size}px`, async () => {
        const icon = await fixture<OscdIcon>(
          html`<oscd-icon-rendering-test
            style=${`--md-icon-size: ${size}px; color: rgb(180, 120, 0)`}
            >${name}</oscd-icon-rendering-test
          >`,
        );
        const svg = icon.shadowRoot!.querySelector('svg')!;
        expect(svg !== null).to.equal(true);
        expect(svg.getBoundingClientRect().width).to.equal(size);
        expect(svg.getBoundingClientRect().height).to.equal(size);
        expect(getComputedStyle(svg).fill).to.equal('rgb(180, 120, 0)');
        icon.style.setProperty('--md-icon-size', '40px');
        expect(svg.getBoundingClientRect().width).to.equal(40);
        expect(svg.getBoundingClientRect().height).to.equal(40);
      });
    }
  }

  it('uses the stock Material warning and keeps the legacy SVG under scl-warning', async () => {
    const icon = await fixture<OscdIcon>(
      html`<oscd-icon-rendering-test style="--md-icon-size: 32px"
        >warning</oscd-icon-rendering-test
      >`,
    );
    expect(icon.shadowRoot!.querySelector('svg') === null).to.equal(true);
    expect(icon.shadowRoot!.querySelector('slot') !== null).to.equal(true);
    expect(getComputedStyle(icon).fontSize).to.equal('32px');
    expect(SCL_ICONS['warning']).to.equal(undefined);
    expect(toSVG('scl-warning')).not.to.equal(undefined);
    icon.textContent = 'scl-warning';
    await waitUntil(() => icon.shadowRoot!.querySelector('svg') !== null);
    const svg = icon.shadowRoot!.querySelector('svg')!;
    expect(svg.getBoundingClientRect().width).to.equal(32);
    icon.textContent = 'warning';
    await waitUntil(() => icon.shadowRoot!.querySelector('svg') === null);
  });

  it('keeps explicitly slotted SVG sizing intact', async () => {
    const icon = await fixture<OscdIcon>(
      html`<oscd-icon-rendering-test
        style="--md-icon-size: 48px; color: rgb(180, 120, 0)"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z"></path>
        </svg>
      </oscd-icon-rendering-test>`,
    );
    const svg = icon.querySelector('svg')!;
    expect(svg.getBoundingClientRect().width).to.equal(48);
    expect(svg.getBoundingClientRect().height).to.equal(48);
    expect(getComputedStyle(svg).fill).to.equal('rgb(180, 120, 0)');
  });

  it('retains access to the renamed warning through oscd-scl-icon', async () => {
    const icon = await fixture<OscdSclIcon>(
      html`<oscd-scl-icon-rendering-test
        >scl-warning</oscd-scl-icon-rendering-test
      >`,
    );
    const inner = icon.shadowRoot!.querySelector('oscd-icon')!;
    await inner.updateComplete;
    expect(inner.querySelector('svg') !== null).to.equal(true);
  });
});
