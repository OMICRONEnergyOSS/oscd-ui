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

import { FilledTonalButton } from '@omicronenergy/oscd-material-web-base/button/internal/filled-tonal-button.js';
import { styles as tonalStyles } from '@omicronenergy/oscd-material-web-base/button/internal/filled-tonal-styles.js';
import { styles as sharedElevationStyles } from '@omicronenergy/oscd-material-web-base/button/internal/shared-elevation-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/button/internal/shared-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-tonal-button': OscdFilledTonalButton;
  }
}

/**
 * @tagname oscd-filled-tonal-button
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Filled tonal buttons have a lighter background color and
 * darker label color, making them less visually prominent than a regular,
 * filled button. They’re still used for final or unblocking actions in a flow,
 * but do so with less emphasis.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
export class OscdFilledTonalButton extends ScopedElementsMixin(
  FilledTonalButton,
) {
  static scopedElements = {
    'md-ripple': MdRipple,
    'md-focus-ring': MdFocusRing,
    'md-elevation': MdElevation,
  };
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    sharedElevationStyles,
    tonalStyles,
  ];
}
