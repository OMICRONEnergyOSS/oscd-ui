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
import { FilterChip } from '@material/web/chips/internal/filter-chip.js';
import { styles } from '@material/web/chips/internal/filter-styles.js';
import { styles as selectableStyles } from '@material/web/chips/internal/selectable-styles.js';
import { styles as sharedStyles } from '@material/web/chips/internal/shared-styles.js';
import { styles as trailingIconStyles } from '@material/web/chips/internal/trailing-icon-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-filter-chip': OscdFilterChip;
  }
}

/**
 * @tagname oscd-filter-chip
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
export class OscdFilterChip extends FilterChip {
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    elevatedStyles,
    trailingIconStyles,
    selectableStyles,
    styles,
  ];
}
