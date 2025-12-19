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
import { OscdElevation } from '../elevation/OscdElevation.js';
import { OscdFocusRing } from '../focus/OscdFocusRing.js';
import { OscdRipple } from '../ripple/OscdRipple.js';

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
    'md-ripple': OscdRipple,
    'md-focus-ring': OscdFocusRing,
    'md-elevation': OscdElevation,
  };
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    sharedElevationStyles,
    tonalStyles,
  ];
}
