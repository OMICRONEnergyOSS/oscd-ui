/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { OscdSubMenu } from './OscdSubMenu.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-sub-menu': OscdSubMenu;
  }
}

customElements.define('oscd-sub-menu', OscdSubMenu);
export { OscdSubMenu };
