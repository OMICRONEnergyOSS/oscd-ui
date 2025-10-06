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

import { AssistChip } from '@material/web/chips/internal/assist-chip.js';
import { styles } from '@material/web/chips/internal/assist-styles.js';
import { styles as elevatedStyles } from '@material/web/chips/internal/elevated-styles.js';
import { styles as sharedStyles } from '@material/web/chips/internal/shared-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-assist-chip': OscdAssistChip;
  }
}

/**
 * @tagname oscd-assist-chip
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
export class OscdAssistChip extends AssistChip {
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    elevatedStyles,
    styles,
  ];
}
