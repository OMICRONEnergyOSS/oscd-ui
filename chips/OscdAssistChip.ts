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

import { AssistChip } from '@omicronenergy/oscd-material-web-base/chips/internal/assist-chip.js';
import { styles } from '@omicronenergy/oscd-material-web-base/chips/internal/assist-styles.js';
import { styles as elevatedStyles } from '@omicronenergy/oscd-material-web-base/chips/internal/elevated-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/chips/internal/shared-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-assist-chip': OscdAssistChip;
  }
}

/**
 * @tagname oscd-assist-chip
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
export class OscdAssistChip extends ScopedElementsMixin(AssistChip) {
  static scopedElements = {
    'md-ripple': MdRipple,
    'md-focus-ring': MdFocusRing,
  };
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    elevatedStyles,
    styles,
  ];
}
