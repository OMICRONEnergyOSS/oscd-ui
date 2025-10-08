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

import { InputChip } from '@omicronenergy/oscd-material-web-base/chips/internal/input-chip.js';
import { styles } from '@omicronenergy/oscd-material-web-base/chips/internal/input-styles.js';
import { styles as selectableStyles } from '@omicronenergy/oscd-material-web-base/chips/internal/selectable-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/chips/internal/shared-styles.js';
import { styles as trailingIconStyles } from '@omicronenergy/oscd-material-web-base/chips/internal/trailing-icon-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-input-chip': OscdInputChip;
  }
}

/**
 * @tagname oscd-input-chip
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
export class OscdInputChip extends ScopedElementsMixin(InputChip) {
  static scopedElements = {
    'md-ripple': MdRipple,
    'md-focus-ring': MdFocusRing,
  };
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    trailingIconStyles,
    selectableStyles,
    styles,
  ];
}
