import { css, html, LitElement, nothing, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdElevation } from '../elevation/OscdElevation.js';
import { OscdIcon } from '../icon/OscdIcon.js';

/**
 * @tag oscd-action-icon
 * @slot action - May contain up to eight icon buttons.
 * @slot icon - If filled overrides the icon property.
 * @slot - The default slot will be rendered into the pane body in a single column.
 * @cssprop [--oscd-action-icon-icon-color=var(--md-sys-color-on-surface, #1d1b20)] - Icon color.
 * @cssprop [--oscd-action-icon-icon-outline-color=var(--md-sys-color-primary, #6750a4)] - Icon outline.
 * @cssprop [--oscd-action-icon-secondary-icon-outline-color=var(--md-sys-color-secondary, #625b71)] - Icon outline when secondary.
 * @cssprop [--oscd-action-icon-action-color=var(--md-sys-color-on-surface, #1d1b20)] - Slotted action color.
 * @cssprop [--oscd-action-icon-footer-color=var(--md-sys-color-on-surface, #1d1b20)] - Footer label color.
 * @cssprop [--oscd-action-icon-footer-font-family=var(--md-ref-typeface-plain, Roboto)] - Footer label font.
 * @cssprop [--oscd-action-icon-header-color=var(--md-sys-color-on-primary, #fff)] - Hover label color.
 * @cssprop [--oscd-action-icon-header-container-color=var(--md-sys-color-primary, #6750a4)] - Hover label background.
 * @cssprop [--oscd-action-icon-secondary-header-container-color=var(--md-sys-color-secondary, #625b71)] - Hover label background when secondary.
 * @cssprop [--oscd-action-icon-header-font-family=var(--md-ref-typeface-plain, Roboto)] - Hover label font.
 *
 * @summary A responsive container rendering actions in a header.
 * @tag oscd-action-icon
 */
export class OscdActionIcon extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'oscd-elevation': OscdElevation,
    'oscd-icon': OscdIcon,
  };

  /** caption text, displayed in the header */
  @property({ type: String })
  label?: string;

  /** icon name, displayed unless the "icon" slot is filled */
  @property({ type: String })
  icon?: string;

  /** color header with secondary theme color while focus is within */
  @property({ type: Boolean })
  secondary = false;

  /** highlight pane with dotted outline */
  @property({ type: Boolean })
  highlighted = false;

  /** disables CSS adoption to action buttons */
  @property({ type: Boolean })
  hideActions = false;

  override async firstUpdated(): Promise<void> {
    this.tabIndex = 0;
  }

  private renderIcon(): TemplateResult {
    return html`<span class="icon-container">
      <oscd-elevation></oscd-elevation>
      <slot name="icon"
        >${
          this.icon ? html`<oscd-icon>${this.icon}</oscd-icon>` : nothing
        }</slot
      ></span
    > `;
  }

  override render() {
    const label = this.label
      ? html`<header><oscd-elevation></oscd-elevation>${this.label}</header>`
      : nothing;

    return html`${label}
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      ${this.label ? html`<footer>${this.label}</footer>` : nothing}`;
  }

  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      outline: none;
    }

    section {
      align-self: center;
    }

    .icon-container {
      display: block;
      position: relative;
      transition: transform 150ms linear;
    }

    ::slotted([slot='icon']),
    oscd-icon {
      display: block;
      color: var(
        --oscd-action-icon-icon-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      outline-color: var(
        --oscd-action-icon-icon-outline-color,
        var(--md-sys-color-primary, #6750a4)
      );
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      width: 64px;
      height: 64px;
      --md-icon-size: 64px;
    }

    :host([secondary]) ::slotted([slot='icon']),
    :host([secondary]) oscd-icon {
      outline-color: var(
        --oscd-action-icon-secondary-icon-outline-color,
        var(--md-sys-color-secondary, #625b71)
      );
    }

    :host([highlighted]) ::slotted([slot='icon']),
    :host([highlighted]) oscd-icon {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) ::slotted([slot='icon']),
    :host(:focus-within) oscd-icon {
      outline-style: solid;
      outline-width: 4px;
    }

    :host(:focus-within:not([hideActions])) .icon-container {
      --md-elevation-level: 3;
      transform: scale(0.8);
      transition: transform 250ms linear;
    }

    ::slotted([slot='icon']:hover),
    oscd-icon:hover {
      outline-style: dashed;
      outline-width: 2px;
    }

    ::slotted([slot='action']) {
      color: var(
        --oscd-action-icon-action-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      transition:
        transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
      position: absolute;
      pointer-events: none;
      z-index: 1;
      opacity: 0;
      width: 48px;
      height: 48px;
      margin-top: -56px;
      margin-left: 8px;
    }

    :host(:focus-within) ::slotted([slot='action']) {
      transition:
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
      pointer-events: auto;
      opacity: 1;
    }

    :host(:focus-within) ::slotted([slot='action']:nth-of-type(1)) {
      transform: translate(0px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(2)) {
      transform: translate(0px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(3)) {
      transform: translate(52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(4)) {
      transform: translate(-52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(5)) {
      transform: translate(52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(6)) {
      transform: translate(-52px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(7)) {
      transform: translate(-52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(8)) {
      transform: translate(52px, 52px);
    }

    footer {
      color: var(
        --oscd-action-icon-footer-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      font-family: var(
        --oscd-action-icon-footer-font-family,
        var(--md-ref-typeface-plain, Roboto)
      );
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      text-align: center;
      align-self: center;
      max-width: 100%;
      direction: rtl;
    }

    :host(:focus-within) footer {
      display: none;
    }

    header {
      color: var(
        --oscd-action-icon-header-color,
        var(--md-sys-color-on-primary, #fff)
      );
      background-color: var(
        --oscd-action-icon-header-container-color,
        var(--md-sys-color-primary, #6750a4)
      );
      font-family: var(
        --oscd-action-icon-header-font-family,
        var(--md-ref-typeface-plain, Roboto)
      );
      font-weight: 500;
      font-size: 1.2em;
      position: absolute;
      text-align: center;
      align-self: center;
      max-width: 100vw;
      padding: 4px 8px;
      border-radius: 4px;
      opacity: 0;
      transition:
        transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
    }

    :host([secondary]) header {
      background-color: var(
        --oscd-action-icon-secondary-header-container-color,
        var(--md-sys-color-secondary, #625b71)
      );
    }

    :host(:hover) header {
      position: absolute;
      opacity: 1;
      transform: translate(0, -40px);
      --md-elevation-level: 3;
      transition:
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within) header {
      position: absolute;
      opacity: 1;
      --md-elevation-level: 3;
      transition:
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within:not([hideActions])) header {
      transform: translate(0, -80px);
    }

    :host(:focus-within[hideActions]) header {
      transform: translate(0, -40px);
    }
  `;
}
