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

import { OscdRipple } from '../ripple/OscdRipple.js';
import { OscdFocusRing } from '../focus/OscdFocusRing.js';
import { OscdElevation } from '../elevation/OscdElevation.js';

import { CSSResultOrNative } from 'lit';

import { styles as elevatedStyles } from '@omicronenergy/oscd-material-web-base/chips/internal/elevated-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/chips/internal/shared-styles.js';
import { SuggestionChip } from '@omicronenergy/oscd-material-web-base/chips/internal/suggestion-chip.js';
import { styles } from '@omicronenergy/oscd-material-web-base/chips/internal/suggestion-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-suggestion-chip': OscdSuggestionChip;
  }
}

/**
 * @tagname oscd-suggestion-chip
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
export class OscdSuggestionChip extends ScopedElementsMixin(SuggestionChip) {
  static scopedElements = {
    'md-ripple': OscdRipple,
    'md-focus-ring': OscdFocusRing,
    'md-elevation': OscdElevation,
  };
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    elevatedStyles,
    styles,
  ];
}
