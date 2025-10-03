/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';

import { Card } from './internal/card.js';
import { styles as filledStyles } from './internal/filled-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdElevation } from '../../elevation/OscdElevation.js';

/**
 * @tag oscd-filled-card
 * @final
 * @suppress {visibility}
 */
export class OscdFilledCard extends ScopedElementsMixin(Card) {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];

  static get scopedElements() {
    return {
      'oscd-elevation': OscdElevation,
    };
  }
}
