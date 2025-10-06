/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';

import { Icon } from '@material/web/icon/internal/icon.js';
import { styles } from '@material/web/icon/internal/icon-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-icon': OscdIcon;
  }
}

/**
 * @tagname oscd-icon
 * @final
 * @suppress {visibility}
 */
export class OscdIcon extends Icon {
  /** @nocollapse */
  static override styles: CSSResultOrNative[] = [styles];
}
