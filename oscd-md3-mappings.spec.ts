import { expect, fixture } from '@open-wc/testing';
import { css, html, LitElement } from 'lit';
import { oscdMd3Mappings } from './oscd-md3-mappings.js';

class MappedHost extends LitElement {
  static override styles = [
    oscdMd3Mappings,
    css`
      :host {
        display: block;
      }
    `,
  ];
}

customElements.define('test-oscd-md3-mappings-host', MappedHost);

describe('opt-in MD3 mappings', () => {
  async function mappedHost(): Promise<MappedHost> {
    return fixture<MappedHost>(
      html`<test-oscd-md3-mappings-host></test-oscd-md3-mappings-host>`,
    );
  }

  it('declares only the 27 roles used by this component library', () => {
    const roles = [
      ...oscdMd3Mappings.cssText.matchAll(/--md-sys-color-([a-z-]+):/g),
    ].map(match => match[1]);
    expect(roles).to.have.length(27);
    expect(roles).to.include('error-container');
    expect(roles).not.to.include('on-secondary');
  });

  it('uses MD3 baseline values without palette slots', async () => {
    const host = await mappedHost();
    const style = getComputedStyle(host);
    expect(style.getPropertyValue('--md-sys-color-primary').trim()).to.equal(
      '#6750a4',
    );
    expect(
      style.getPropertyValue('--md-sys-color-error-container').trim(),
    ).to.equal('#f9dedc');
  });

  it('maps palette slots and allows descendant overrides', async () => {
    const host = await mappedHost();
    host.style.setProperty('--oscd-theme-primary', '#2aa198');
    host.style.setProperty('--oscd-theme-base3', '#fdf6e3');
    const style = getComputedStyle(host);
    expect(style.getPropertyValue('--oscd-theme-primary').trim()).to.equal(
      '#2aa198',
    );
    expect(style.getPropertyValue('--md-sys-color-primary').trim()).to.equal(
      '#2aa198',
    );
    expect(style.getPropertyValue('--md-sys-color-on-primary').trim()).to.equal(
      '#fdf6e3',
    );

    const child = document.createElement('span');
    host.shadowRoot?.append(child);
    child.style.setProperty('--md-sys-color-primary', '#123456');
    expect(
      getComputedStyle(child).getPropertyValue('--md-sys-color-primary').trim(),
    ).to.equal('#123456');
  });

  it('reads palette slots inherited from a parent', async () => {
    const parent = await fixture<HTMLDivElement>(html`
      <div style="--oscd-theme-primary: #2aa198">
        <test-oscd-md3-mappings-host></test-oscd-md3-mappings-host>
      </div>
    `);
    const host = parent.querySelector('test-oscd-md3-mappings-host');
    if (!host) {
      throw new Error('Fixture did not render the mapped host');
    }
    expect(
      getComputedStyle(host).getPropertyValue('--md-sys-color-primary').trim(),
    ).to.equal('#2aa198');
  });

  it('keeps shadow and scrim black with a dark palette', async () => {
    const host = await mappedHost();
    host.style.setProperty('--oscd-theme-base03', '#fdf6e3');
    const style = getComputedStyle(host);
    expect(style.getPropertyValue('--md-sys-color-shadow').trim()).to.equal(
      '#000',
    );
    expect(style.getPropertyValue('--md-sys-color-scrim').trim()).to.equal(
      '#000',
    );
  });
});
