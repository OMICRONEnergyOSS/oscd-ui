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

import { OscdRipple } from '../../ripple/OscdRipple.js';
import { OscdFocusRing } from '../../focus/OscdFocusRing.js';
import { OscdBadge } from '../badge/OscdBadge.js';

import { CSSResultOrNative } from 'lit';

import { NavigationTab } from '@omicronenergy/oscd-material-web-base/labs/navigationtab/internal/navigation-tab.js';
import { styles } from '@omicronenergy/oscd-material-web-base/labs/navigationtab/internal/navigation-tab-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-navigation-tab': OscdNavigationTab;
  }
}

/**
 * @tagname oscd-navigation-tab
 * @final
 * @suppress {visibility}
 */
export class OscdNavigationTab extends ScopedElementsMixin(NavigationTab) {
  static scopedElements = {
    'md-ripple': OscdRipple,
    'md-focus-ring': OscdFocusRing,
    'md-badge': OscdBadge,
  };
  static override styles: CSSResultOrNative[] = [styles];
}
