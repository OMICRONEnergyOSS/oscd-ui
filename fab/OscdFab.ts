/**
 * @license
 * Copyright 2022 Google LLC
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

import { Fab } from '@omicronenergy/oscd-material-web-base/fab/internal/fab.js';
import { styles } from '@omicronenergy/oscd-material-web-base/fab/internal/fab-styles.js';
import { styles as forcedColors } from '@omicronenergy/oscd-material-web-base/fab/internal/forced-colors-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/fab/internal/shared-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
export { type FabVariant } from '@omicronenergy/oscd-material-web-base/fab/internal/fab.js';
export { type FabSize } from '@omicronenergy/oscd-material-web-base/fab/internal/shared.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-fab': OscdFab;
  }
}

/**
 * @tagname oscd-fab
 * @summary Floating action buttons (FABs) help people take primary actions.
 * They’re used to represent the most important action on a screen, such as
 * Create or Reply.
 *
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The FAB remains the default component for a screen’s primary
 * action. It comes in three sizes: small FAB, FAB, and large FAB. The extended
 * FAB’s wider format and text label give it more visual prominence than a  FAB.
 * It’s often used on larger screens where a FAB would seem too small.
 *
 * __Example usages:__
 * - FAB
 *   - Create
 *   - Compose
 * - Extended FAB
 *   - Create
 *   - Compose
 *   - New Thread
 *   - New File
 *
 * @final
 * @suppress {visibility}
 */
export class OscdFab extends ScopedElementsMixin(Fab) {
  static scopedElements = {
    'md-ripple': OscdRipple,
    'md-focus-ring': OscdFocusRing,
    'md-elevation': OscdElevation,
  };
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    styles,
    forcedColors,
  ];
}
