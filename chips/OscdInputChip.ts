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

import { InputChip } from '@material/web/chips/internal/input-chip.js';
import { styles } from '@material/web/chips/internal/input-styles.js';
import { styles as selectableStyles } from '@material/web/chips/internal/selectable-styles.js';
import { styles as sharedStyles } from '@material/web/chips/internal/shared-styles.js';
import { styles as trailingIconStyles } from '@material/web/chips/internal/trailing-icon-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-input-chip': OscdInputChip;
  }
}

/**
 * @tagname oscd-input-chip
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
export class OscdInputChip extends InputChip {
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    trailingIconStyles,
    selectableStyles,
    styles,
  ];
}
