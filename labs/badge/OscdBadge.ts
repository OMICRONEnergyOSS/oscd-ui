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

import { Badge } from '@material/web/labs/badge/internal/badge.js';
import { styles } from '@material/web/labs/badge/internal/badge-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-badge': OscdBadge;
  }
}

/**
 * @tagname oscd-badge
 * @final
 * @suppress {visibility}
 */
export class OscdBadge extends Badge {
  static override styles: CSSResultOrNative[] = [styles];
}
