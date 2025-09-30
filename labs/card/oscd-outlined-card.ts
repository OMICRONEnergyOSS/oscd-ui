/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Card } from './internal/card.js';
import { styles as outlinedStyles } from './internal/outlined-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
import '../../elevation/elevation.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-outlined-card': OscdOutlinedCard;
  }
}

/**
 * @final
 * @suppress {visibility}
 */
@customElement('oscd-outlined-card')
export class OscdOutlinedCard extends Card {
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];
}
