/**
 * @license
 * Copyright 2025 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { OscdAppBar } from './OscdAppBar.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-app-bar': OscdAppBar;
  }
}

window.customElements.define('oscd-app-bar', OscdAppBar);
export { OscdAppBar };
