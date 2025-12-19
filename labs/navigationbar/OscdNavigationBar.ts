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

import { OscdElevation } from '../../elevation/OscdElevation.js';

import { CSSResultOrNative } from 'lit';

import { NavigationBar } from '@omicronenergy/oscd-material-web-base/labs/navigationbar/internal/navigation-bar.js';
import { styles } from '@omicronenergy/oscd-material-web-base/labs/navigationbar/internal/navigation-bar-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
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
export class OscdNavigationBar extends ScopedElementsMixin(NavigationBar) {
  static scopedElements = {
    'md-elevation': OscdElevation,
  };
  static override styles: CSSResultOrNative[] = [styles];
}
