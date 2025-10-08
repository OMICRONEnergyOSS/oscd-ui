/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdRipple } from '@omicronenergy/oscd-material-web-base/ripple/MdRipple.js';
import { MdFocusRing } from '@omicronenergy/oscd-material-web-base/focus/MdFocusRing.js';
import { MdElevation } from '@omicronenergy/oscd-material-web-base/elevation/MdElevation.js';

import { CSSResultOrNative } from 'lit';

import { SecondaryTab } from '@omicronenergy/oscd-material-web-base/tabs/internal/secondary-tab.js';
import { styles as secondaryStyles } from '@omicronenergy/oscd-material-web-base/tabs/internal/secondary-tab-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/tabs/internal/tab-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-secondary-tab': OscdSecondaryTab;
  }
}

// TODO(b/267336507): add docs
/**
 * @tagname oscd-secondary-tab
 * @summary Tab allow users to display a tab within a Tabs.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdSecondaryTab extends ScopedElementsMixin(SecondaryTab) {
  static scopedElements = {
    'md-ripple': MdRipple,
    'md-focus-ring': MdFocusRing,
    'md-elevation': MdElevation,
  };
  static override styles: CSSResultOrNative[] = [sharedStyles, secondaryStyles];
}
