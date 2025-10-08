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
import { MdElevation } from '@omicronenergy/oscd-material-web-base/elevation/MdElevation.js';

import { CSSResultOrNative } from 'lit';

import { FilledButton } from '@omicronenergy/oscd-material-web-base/button/internal/filled-button.js';
import { styles as filledStyles } from '@omicronenergy/oscd-material-web-base/button/internal/filled-styles.js';
import { styles as sharedElevationStyles } from '@omicronenergy/oscd-material-web-base/button/internal/shared-elevation-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/button/internal/shared-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-button': OscdFilledButton;
  }
}

/**
 * @tagname oscd-filled-button
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
export class OscdFilledButton extends ScopedElementsMixin(FilledButton) {
  static scopedElements = {
    'md-ripple': MdRipple,
    'md-focus-ring': MdFocusRing,
    'md-elevation': MdElevation,
  };
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    sharedElevationStyles,
    filledStyles,
  ];
}
