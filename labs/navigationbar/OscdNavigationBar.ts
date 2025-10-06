/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';

import { NavigationBar } from '@material/web/labs/navigationbar/internal/navigation-bar.js';
import { styles } from '@material/web/labs/navigationbar/internal/navigation-bar-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-navigation-bar': OscdNavigationBar;
  }
}

/**
 * @tagname oscd-navigation-bar
 * @final
 * @suppress {visibility}
 */
export class OscdNavigationBar extends NavigationBar {
  static override styles: CSSResultOrNative[] = [styles];
}
