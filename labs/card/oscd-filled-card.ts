/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Card } from './internal/card.js';
import { styles as filledStyles } from './internal/filled-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';

import '../../elevation/elevation.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-card': OscdFilledCard;
  }
}

/**
 * @tag oscd-filled-card
 * @class OscdFilledCard
 * @summary A card component with a filled background.
 *
 * `oscd-filled-card` is a card component with a filled background. It can be used to group related content and actions.
 * @final
 * @suppress {visibility}
 */
@customElement('oscd-filled-card')
export class OscdFilledCard extends Card {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];
}
