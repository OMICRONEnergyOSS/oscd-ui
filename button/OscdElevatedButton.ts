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

import { ElevatedButton } from '@omicronenergy/oscd-material-web-base/button/internal/elevated-button.js';
import { styles as elevatedStyles } from '@omicronenergy/oscd-material-web-base/button/internal/elevated-styles.js';
import { styles as sharedElevationStyles } from '@omicronenergy/oscd-material-web-base/button/internal/shared-elevation-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/button/internal/shared-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-elevated-button': OscdElevatedButton;
  }
}

/**
 * @tagname oscd-elevated-button
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Elevated buttons are essentially filled buttons with a lighter
 * background color and a shadow. To prevent shadow creep, only use them when
 * absolutely necessary, such as when the button requires visual separation from
 * a patterned background.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @final
 * @suppress {visibility}
 */
export class OscdElevatedButton extends ScopedElementsMixin(ElevatedButton) {
  static scopedElements = {
    'md-ripple': OscdRipple,
    'md-focus-ring': OscdFocusRing,
    'md-elevation': OscdElevation,
  };
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    sharedElevationStyles,
    elevatedStyles,
  ];
}
