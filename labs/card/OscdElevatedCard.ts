/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

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
import { styles as elevatedStyles } from '@material/web/labs/card/internal/elevated-styles.js';
import { styles as sharedStyles } from '@material/web/labs/card/internal/shared-styles.js';

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
export class OscdElevatedCard extends Card {
  static override styles: CSSResultOrNative[] = [sharedStyles, elevatedStyles];
}
