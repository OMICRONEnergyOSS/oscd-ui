/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement, html, css } from 'lit';
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
 * @slot actionStart - Slot for action icons at the start of the app bar.
 * @slot title - Slot for the title of the app bar.
 * @slot actionEnd - Slot for action icons at the end of the app bar.
 * @slot Default - Slot for additional content which will appear immediately under the main app bar.
 *
 * @cssprop --oscd-app-bar-elevation - The elevation level of the app bar.
 * @cssprop --oscd-app-bar-shadow-color - The shadow color of the app bar.
 * @cssprop --oscd-app-bar-color - The color of the app bar.
 * @cssprop --oscd-app-bar-background-color - The background color of the app bar.
 * @cssprop --oscd-app-bar-title-font-family - The font family of the app bar title.
 * @cssprop --oscd-app-bar-title-font-size - The font size of the app bar title.
 * @cssprop --oscd-app-bar-title-line-height - The line height of the app bar title.
 * @cssprop --oscd-app-bar-title-font-weight - The font weight of the app bar title.
 * @cssprop --md-icon-button-icon-color - The color of the icon button in the app bar.
 *
 */
export class OscdAppBar extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'oscd-elevation': OscdElevation,
    };
  }

  static override styles = css`
    :host {
      --md-elevation-level: var(--oscd-app-bar-elevation, 3);
      --md-elevation-shadow-color: var(
        --oscd-app-bar-shadow-color,
        var(--md-sys-color-shadow, #000)
      );
      --app-bar-color: var(
        --oscd-app-bar-color,
        var(--md-sys-color-on-primary, #1d1b20)
      );
      --app-bar-background-color: var(
        --oscd-app-bar-background-color,
        var(--md-sys-color-primary, #fff)
      );
      --app-bar-title-font-family: var(
        --oscd-app-bar-title-font-family,
        var(
          --md-sys-typescale-body-large-font,
          var(--md-ref-typeface-plain, Roboto)
        )
      );
      --app-bar-title-font-size: var(
        --oscd-app-bar-title-font-size,
        var(--md-sys-typescale-body-large-size, 1.25rem)
      );
      --app-bar-title-line-height: var(
        --oscd-app-bar-title-line-height,
        var(--md-sys-typescale-body-large-line-height, 2rem)
      );
      --app-bar-title-font-weight: var(
        --oscd-app-bar-title-font-weight,
        var(
          --md-sys-typescale-body-large-weight,
          var(--md-ref-typeface-weight-regular, 500)
        )
      );
      --md-icon-button-icon-color: var(--app-bar-color);
    }

    header {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      position: sticky;
      top: 0;
      z-index: 4;
      color: var(--app-bar-color);
      background-color: var(--app-bar-background-color);
    }

    .main-header {
      padding: 0 12px;
      display: flex;
      flex-grow: 1;
      align-items: center;
      height: 64px;
    }

    @media (max-width: 599px) {
      .main-header {
        height: 56px;
      }
    }

    ::slotted([slot='title']) {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: 16px;
      font-family: var(--app-bar-title-font-family);
      font-size: var(--app-bar-title-font-size);
      font-weight: var(--app-bar-title-font-weight);
      line-height: var(--app-bar-title-line-height);
    }

    .sub-header {
      display: flex;
      width: 100%;
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
            <slot name="actionStart"></slot>
            <slot name="title"></slot>
            <span class="spacer"></span>
            <slot name="actionEnd"></slot>
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
