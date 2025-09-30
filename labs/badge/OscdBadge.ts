/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';

import { Badge } from './internal/badge.js';
import { styles } from './internal/badge-styles.js';

/**
 * @final
 * @suppress {visibility}
 */
export class OscdBadge extends Badge {
  static override styles: CSSResultOrNative[] = [styles];
}
