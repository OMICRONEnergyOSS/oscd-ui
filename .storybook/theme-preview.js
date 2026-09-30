import { LitElement, css, html } from 'lit';
import { oscdMd3Mappings } from '../oscd-md3-mappings.js';

export class OscdStorybookTheme extends LitElement {
  static styles = [
    oscdMd3Mappings,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        font-family: var(--oscd-theme-text-font, 'Roboto'), sans-serif;
      }
    `,
  ];

  render() {
    return html`<slot></slot>`;
  }
}

if (!customElements.get('oscd-storybook-theme')) {
  customElements.define('oscd-storybook-theme', OscdStorybookTheme);
}
