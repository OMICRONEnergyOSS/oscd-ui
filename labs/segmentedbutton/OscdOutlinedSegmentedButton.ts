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

import { OutlinedSegmentedButton } from '@omicronenergy/oscd-material-web-base/labs/segmentedbutton/internal/outlined-segmented-button.js';
import { styles as outlinedStyles } from '@omicronenergy/oscd-material-web-base/labs/segmentedbutton/internal/outlined-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/labs/segmentedbutton/internal/shared-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-outlined-segmented-button': OscdOutlinedSegmentedButton;
  }
}

/**
 * @tagname oscd-outlined-segmented-button
 * OscdOutlinedSegmentedButton is the custom element for the Material
 * Design outlined segmented button component.
 * @final
 * @suppress {visibility}
 */
export class OscdOutlinedSegmentedButton extends ScopedElementsMixin(
  OutlinedSegmentedButton,
) {
  static scopedElements = {
    'md-ripple': MdRipple,
    'md-focus-ring': MdFocusRing,
  };
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];
}
