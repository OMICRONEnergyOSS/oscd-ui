/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { OscdOutlinedButton } from './OscdOutlinedButton.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-outlined-button': OscdOutlinedButton;
  }
}

customElements.define('oscd-outlined-button', OscdOutlinedButton);
export { OscdOutlinedButton };
