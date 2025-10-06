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

import { CSSResultOrNative } from 'lit';

import { Card } from '@material/web/labs/card/internal/card.js';
import { styles as filledStyles } from '@material/web/labs/card/internal/filled-styles.js';
import { styles as sharedStyles } from '@material/web/labs/card/internal/shared-styles.js';

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
export class OscdFilledCard extends Card {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];
}
