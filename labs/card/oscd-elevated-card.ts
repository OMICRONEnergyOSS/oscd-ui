/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Card } from './internal/card.js';
import { styles as elevatedStyles } from './internal/elevated-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-elevated-card': OscdElevatedCard;
  }
}

/**
 * @tag oscd-elevated-card
 * @final
 * @suppress {visibility}
 */
@customElement('oscd-elevated-card')
export class OscdElevatedCard extends Card {
  static override styles: CSSResultOrNative[] = [sharedStyles, elevatedStyles];
}
