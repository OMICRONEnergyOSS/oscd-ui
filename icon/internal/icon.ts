/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { html } from 'lit';
import { type TemplateResult } from 'lit';

import { Icon as BaseIcon } from '@omicronenergy/oscd-material-web-base/icon/internal/icon.js';
import { SCL_ICONS } from '../../scl-icon/OscdSclIcon.js';

/**
 * Internal Icon base class that extends the Material Design Icon with
 * automatic SCL icon resolution.
 *
 * When the text content of the element matches a key in {@link SCL_ICONS},
 * the corresponding SVG is rendered instead of the default Material Symbols
 * font ligature. If no match is found the element falls through to the
 * standard `<slot></slot>` rendering from the Material base class so that
 * Material Symbols font ligatures continue to work as before.
 */
export class Icon extends BaseIcon {
  private _sclName = '';
  private _observer?: MutationObserver;

  override connectedCallback(): void {
    super.connectedCallback();
    this._updateSclName();

    this._observer = new MutationObserver(() => {
      this._updateSclName();
    });

    this._observer.observe(this, {
      characterData: true,
      subtree: true,
      childList: true,
    });
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._observer?.disconnect();
    this._observer = undefined;
  }

  private _updateSclName(): void {
    const name = (this.textContent ?? '').trim();
    if (name !== this._sclName) {
      this._sclName = name;
      this.requestUpdate();
    }
  }

  protected override render(): TemplateResult<1> {
    const sclSvg = SCL_ICONS[this._sclName];
    if (sclSvg) {
      return html`${sclSvg}`;
    }
    return super.render();
  }
}
