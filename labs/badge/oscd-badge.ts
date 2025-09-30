/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Badge } from './internal/badge.js';
import { styles } from './internal/badge-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-badge': OscdBadge;
  }
}

/**
 * @final
 * @suppress {visibility}
 */
@customElement('oscd-badge')
export class OscdBadge extends Badge {
  static override styles: CSSResultOrNative[] = [styles];
}
