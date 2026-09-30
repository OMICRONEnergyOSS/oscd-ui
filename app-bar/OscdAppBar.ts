/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * Copyright 2025 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdElevation } from '../elevation/OscdElevation.js';

/**
 * @tag oscd-app-bar
 * @class OscdAppBar
 * @extends ScopedElementsMixin(LitElement)
 * @summary A component that renders an app bar.
 *
 * The app bar is a top-level navigation component that displays information and actions relating to the current screen.
 * It can contain a title, navigation icons, and action icons.
 * The app bar is typically used in conjunction with a navigation drawer or bottom navigation.
 *
 * The main row follows the MD3 small top-app-bar defaults. Set `scrolled` when
 * the consumer determines that the page has scrolled. The sub-bar keeps its
 * primary-colored appearance in either state.
 *
 * @slot alignStart - Slot for action icons at the start of the app bar.
 * @slot alignMiddle - Slot for the headline content.
 * @slot alignEnd - Slot for action icons at the end of the app bar.
 * @slot Default - Slot for additional content which will appear immediately under the main app bar.
 *
 * @cssprop [--oscd-app-bar-container-color=var(--md-sys-color-surface, #fef7ff)] - Main-row container color at rest.
 * @cssprop [--oscd-app-bar-container-elevation=0] - Main-row elevation at rest.
 * @cssprop [--oscd-app-bar-container-shadow-color=var(--md-sys-color-shadow, #000)] - Main-row shadow color.
 * @cssprop [--oscd-app-bar-headline-color=var(--md-sys-color-on-surface, #1d1b20)] - Headline color.
 * @cssprop [--oscd-app-bar-headline-font=var(--md-sys-typescale-title-large-font, var(--md-ref-typeface-brand, Roboto))] - Headline font family.
 * @cssprop [--oscd-app-bar-headline-size=var(--md-sys-typescale-title-large-size, 1.375rem)] - Headline font size.
 * @cssprop [--oscd-app-bar-headline-line-height=var(--md-sys-typescale-title-large-line-height, 1.75rem)] - Headline line height.
 * @cssprop [--oscd-app-bar-headline-weight=var(--md-sys-typescale-title-large-weight, 400)] - Headline font weight.
 * @cssprop [--oscd-app-bar-leading-icon-color=var(--md-sys-color-on-surface, #1d1b20)] - Leading icon color.
 * @cssprop [--oscd-app-bar-trailing-icon-color=var(--md-sys-color-on-surface-variant, #49454f)] - Trailing icon color.
 * @cssprop [--oscd-app-bar-on-scroll-container-color=var(--md-sys-color-surface-container, #f3edf7)] - Main-row container color when `scrolled` is true.
 * @cssprop [--oscd-app-bar-on-scroll-container-elevation=2] - Main-row elevation when `scrolled` is true.
 */
export class OscdAppBar extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'oscd-elevation': OscdElevation,
    };
  }

  @property({ type: Boolean, reflect: true })
  scrolled = false;

  static override styles = css`
    header {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      position: sticky;
      top: 0;
      z-index: 4;
    }

    .main-header {
      padding: 0 12px;
      display: flex;
      flex-grow: 1;
      align-items: center;
      height: 64px;
      color: var(--md-sys-color-on-surface, #1d1b20);
      background-color: var(
        --oscd-app-bar-container-color,
        var(--md-sys-color-surface, #fef7ff)
      );
    }

    :host([scrolled]) .main-header {
      background-color: var(
        --oscd-app-bar-on-scroll-container-color,
        var(--md-sys-color-surface-container, #f3edf7)
      );
    }

    oscd-elevation {
      --md-elevation-level: var(--oscd-app-bar-container-elevation, 0);
      --md-elevation-shadow-color: var(
        --oscd-app-bar-container-shadow-color,
        var(--md-sys-color-shadow, #000)
      );
    }

    :host([scrolled]) oscd-elevation {
      --md-elevation-level: var(
        --oscd-app-bar-on-scroll-container-elevation,
        2
      );
    }

    ::slotted([slot='title']),
    ::slotted([slot='alignMiddle']) {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: 16px;
      color: var(
        --oscd-app-bar-headline-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      font-family: var(
        --oscd-app-bar-headline-font,
        var(
          --md-sys-typescale-title-large-font,
          var(--md-ref-typeface-brand, Roboto)
        )
      );
      font-size: var(
        --oscd-app-bar-headline-size,
        var(--md-sys-typescale-title-large-size, 1.375rem)
      );
      font-weight: var(
        --oscd-app-bar-headline-weight,
        var(--md-sys-typescale-title-large-weight, 400)
      );
      line-height: var(
        --oscd-app-bar-headline-line-height,
        var(--md-sys-typescale-title-large-line-height, 1.75rem)
      );
    }

    ::slotted([slot='alignStart']) {
      --md-icon-button-icon-color: var(
        --oscd-app-bar-leading-icon-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
    }

    ::slotted([slot='alignEnd']) {
      --md-icon-button-icon-color: var(
        --oscd-app-bar-trailing-icon-color,
        var(--md-sys-color-on-surface-variant, #49454f)
      );
    }

    .sub-header {
      display: flex;
      width: 100%;
      color: var(--md-sys-color-on-primary, #fff);
      background-color: var(--md-sys-color-primary, #6750a4);
    }

    .spacer {
      flex: 1;
    }
  `;

  // eslint-disable-next-line class-methods-use-this
  override render() {
    return html`
      <header>
        <div>
          <div class="main-header">
            <slot name="alignStart"></slot>
            <span class="spacer"></span>
            <slot name="alignMiddle"></slot>
            <span class="spacer"></span>
            <slot name="alignEnd"></slot>
          </div>
          <div class="sub-header">
            <slot></slot>
          </div>
        </div>
        <oscd-elevation part="elevation"></oscd-elevation>
      </header>
    `;
  }
}
