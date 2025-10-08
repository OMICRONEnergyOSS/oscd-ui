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

import { MdElevation } from '@omicronenergy/oscd-material-web-base/elevation/MdElevation.js';

import { CSSResultOrNative } from 'lit';

import { Card } from '@omicronenergy/oscd-material-web-base/labs/card/internal/card.js';
import { styles as filledStyles } from '@omicronenergy/oscd-material-web-base/labs/card/internal/filled-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/labs/card/internal/shared-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-card': OscdFilledCard;
  }
}

/**
 * @tagname oscd-filled-card
 * @final
 * @suppress {visibility}
 */
export class OscdFilledCard extends ScopedElementsMixin(Card) {
  static scopedElements = {
    'md-elevation': MdElevation,
  };
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];
}
