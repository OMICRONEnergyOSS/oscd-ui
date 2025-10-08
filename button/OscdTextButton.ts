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

import { CSSResultOrNative } from 'lit';

import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/button/internal/shared-styles.js';
import { TextButton } from '@omicronenergy/oscd-material-web-base/button/internal/text-button.js';
import { styles as textStyles } from '@omicronenergy/oscd-material-web-base/button/internal/text-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-text-button': OscdTextButton;
  }
}

/**
 * @tagname oscd-text-button
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence
 *
 * __Rationale:__ Text buttons have less visual prominence, so should be used
 * for low emphasis actions, such as an alternative option.
 *
 * __Example usages:__
 * - Learn more
 * - View all
 * - Change account
 * - Turn on
 *
 * @final
 * @suppress {visibility}
 */
export class OscdTextButton extends ScopedElementsMixin(TextButton) {
  static scopedElements = {
    'md-ripple': MdRipple,
    'md-focus-ring': MdFocusRing,
  };
  static override styles: CSSResultOrNative[] = [sharedStyles, textStyles];
}
