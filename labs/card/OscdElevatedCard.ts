/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { OscdElevation } from '../../elevation/OscdElevation.js';

import { CSSResultOrNative } from 'lit';

import { Card } from '@omicronenergy/oscd-material-web-base/labs/card/internal/card.js';
import { styles as elevatedStyles } from '@omicronenergy/oscd-material-web-base/labs/card/internal/elevated-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/labs/card/internal/shared-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-elevated-card': OscdElevatedCard;
  }
}

/**
 * @tagname oscd-elevated-card
 * @final
 * @suppress {visibility}
 */
export class OscdElevatedCard extends ScopedElementsMixin(Card) {
  static scopedElements = {
    'md-elevation': OscdElevation,
  };
  static override styles: CSSResultOrNative[] = [sharedStyles, elevatedStyles];
}
