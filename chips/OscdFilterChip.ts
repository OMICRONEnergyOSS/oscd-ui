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
import { FilterChip } from '@omicronenergy/oscd-material-web-base/chips/internal/filter-chip.js';
import { styles } from '@omicronenergy/oscd-material-web-base/chips/internal/filter-styles.js';
import { styles as selectableStyles } from '@omicronenergy/oscd-material-web-base/chips/internal/selectable-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/chips/internal/shared-styles.js';
import { styles as trailingIconStyles } from '@omicronenergy/oscd-material-web-base/chips/internal/trailing-icon-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-filter-chip': OscdFilterChip;
  }
}

/**
 * @tagname oscd-filter-chip
 * TODO(b/243982145): add docs
 *
 * @final
 * @suppress {visibility}
 */
export class OscdFilterChip extends ScopedElementsMixin(FilterChip) {
  static scopedElements = {
    'md-ripple': OscdRipple,
    'md-focus-ring': OscdFocusRing,
    'md-elevation': OscdElevation,
  };
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    elevatedStyles,
    trailingIconStyles,
    selectableStyles,
    styles,
  ];
}
