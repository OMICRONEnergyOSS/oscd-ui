/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2026 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { html, LitElement } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { OscdIcon } from '../icon/OscdIcon.js';
import { toSVG } from './internal/scl-icons.js';

export {
  dataTypeTemplateIcons,
  iconColors,
  pathToSvg,
  SCL_ICONS,
  toSVG,
} from './internal/scl-icons.js';
export type { iconProperty, iconType } from './internal/scl-icons.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-scl-icon': OscdSclIcon;
  }
}

/**
 * @tagname oscd-scl-icon
 * @summary SCL icon component.
 * @final
 * @suppress {visibility}
 */
export class OscdSclIcon extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'oscd-icon': OscdIcon,
    };
  }

  private _name = '';
  private _observer?: MutationObserver;

  // Read the text node (ligature-like API)
  override connectedCallback() {
    super.connectedCallback();
    this._updateName();

    // Observe changes to text content
    this._observer = new MutationObserver(() => {
      this._updateName();
    });

    this._observer.observe(this, {
      characterData: true,
      subtree: true,
      childList: true,
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._observer?.disconnect();
  }

  private _updateName() {
    const newName = (this.textContent || '').trim();
    if (newName !== this._name) {
      this._name = newName;
      this.requestUpdate();
    }
  }

  override render() {
    const svg = toSVG(this._name);
    if (!svg) {
      // Fallback: render the name for debugging (or a default icon)
      return html`<span>${this._name}</span>`;
    }
    return html`<oscd-icon>${svg}</oscd-icon>`;
  }
}
