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

import { MdRipple } from '@omicronenergy/oscd-material-web-base/ripple/MdRipple.js';
import { MdFocusRing } from '@omicronenergy/oscd-material-web-base/focus/MdFocusRing.js';
import { MdBadge } from '@omicronenergy/oscd-material-web-base/labs/badge/MdBadge.js';

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
    'md-ripple': MdRipple,
    'md-focus-ring': MdFocusRing,
    'md-badge': MdBadge,
  };
  static override styles: CSSResultOrNative[] = [styles];
}
