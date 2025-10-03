/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { OscdElevatedCard } from './OscdElevatedCard.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-elevated-card': OscdElevatedCard;
  }
}

/**
 *
 * @final
 * @suppress {visibility}
 */
customElements.define('oscd-elevated-card', OscdElevatedCard);
export { OscdElevatedCard };
