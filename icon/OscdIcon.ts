/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2026 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';

import { Icon } from './internal/icon.js';
import { styles } from '@omicronenergy/oscd-material-web-base/icon/internal/icon-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-icon': OscdIcon;
  }
}

/**
 * Icon component that renders SCL domain icons by name or falls back to
 * Material Symbols font ligatures.
 *
 * @example
 * ```html
 * <!-- SCL icon by name -->
 * <oscd-icon>gooseIcon</oscd-icon>
 *
 * <!-- Material Symbols ligature (unchanged) -->
 * <oscd-icon>edit</oscd-icon>
 * ```
 *
 * @tagname oscd-icon
 * @final
 * @suppress {visibility}
 */
export class OscdIcon extends Icon {
  /** @nocollapse */
  static override styles: CSSResultOrNative[] = [styles];
}
