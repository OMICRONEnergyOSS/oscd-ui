/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

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

import { CSSResultOrNative } from 'lit';

import { Fab, FabVariant } from '@material/web/fab/internal/fab.js';
import { styles } from '@material/web/fab/internal/fab-branded-styles.js';
import { styles as forcedColors } from '@material/web/fab/internal/forced-colors-styles.js';
import { styles as sharedStyles } from '@material/web/fab/internal/shared-styles.js';

export { type FabSize } from '@material/web/fab/internal/shared.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-branded-fab': OscdBrandedFab;
  }
}

/**
 * @tagname oscd-branded-fab
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
 * It’s often used on larger screens where a FAB would seem too small. Branded
 * FABs are used to specifically call attention to branded logo icons.
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
export class OscdBrandedFab extends Fab {
  /**
   * Branded FABs have no variants
   */
  declare variant: FabVariant;

  override getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      primary: false,
      secondary: false,
      tertiary: false,
      small: false,
    };
  }
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    styles,
    forcedColors,
  ];
}
