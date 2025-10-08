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

import { CSSResultOrNative } from 'lit';

import { styles } from '@omicronenergy/oscd-material-web-base/iconbutton/internal/filled-tonal-styles.js';
import { IconButton } from '@omicronenergy/oscd-material-web-base/iconbutton/internal/icon-button.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/iconbutton/internal/shared-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-tonal-icon-button': OscdFilledTonalIconButton;
  }
}

/**
 * @tagname oscd-filled-tonal-icon-button
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 *
 * @final
 * @suppress {visibility}
 */
export class OscdFilledTonalIconButton extends ScopedElementsMixin(IconButton) {
  static scopedElements = {
    'md-ripple': MdRipple,
    'md-focus-ring': MdFocusRing,
  };
  static override styles: CSSResultOrNative[] = [sharedStyles, styles];

  protected override getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      'filled-tonal': true,
      'toggle-filled-tonal': this.toggle,
    };
  }
}
