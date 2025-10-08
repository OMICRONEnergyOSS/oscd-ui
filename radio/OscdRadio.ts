/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdRipple } from '@omicronenergy/oscd-material-web-base/ripple/MdRipple.js';
import { MdFocusRing } from '@omicronenergy/oscd-material-web-base/focus/MdFocusRing.js';

import { CSSResultOrNative } from 'lit';

import { Radio } from '@omicronenergy/oscd-material-web-base/radio/internal/radio.js';
import { styles } from '@omicronenergy/oscd-material-web-base/radio/internal/radio-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-radio': OscdRadio;
  }
}

/**
 * @tagname oscd-radio
 * @summary Radio buttons allow users to select one option from a set.
 *
 * Radio buttons are the recommended way to allow users to make a single
 * selection from a list of options.
 *
 * Only one radio button can be selected at a time.
 *
 * Use radio buttons to:
 * - Select a single option from a set
 * - Expose all available options
 *
 * @final
 * @suppress {visibility}
 */
export class OscdRadio extends ScopedElementsMixin(Radio) {
  static scopedElements = {
    'md-ripple': MdRipple,
    'md-focus-ring': MdFocusRing,
  };
  static override styles: CSSResultOrNative[] = [styles];
}
