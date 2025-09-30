/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';

import { Card } from './internal/card.js';
import { styles as outlinedStyles } from './internal/outlined-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
import { OscdElevation } from '../../elevation/OscdElevation.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

/**
 * @final
 * @suppress {visibility}
 */
export class OscdOutlinedCard extends ScopedElementsMixin(Card) {
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];

  static get scopedElements() {
    return {
      'oscd-elevation': OscdElevation,
    };
  }
}
