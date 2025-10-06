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

import { styles as elevatedStyles } from '@material/web/chips/internal/elevated-styles.js';
import { styles as sharedStyles } from '@material/web/chips/internal/shared-styles.js';
import { SuggestionChip } from '@material/web/chips/internal/suggestion-chip.js';
import { styles } from '@material/web/chips/internal/suggestion-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-suggestion-chip': OscdSuggestionChip;
  }
}

/**
 * @tagname oscd-suggestion-chip
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
export class OscdSuggestionChip extends SuggestionChip {
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    elevatedStyles,
    styles,
  ];
}
