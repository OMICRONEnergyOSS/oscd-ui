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

import { CSSResultOrNative } from 'lit';

import { OutlinedSegmentedButton } from '@material/web/labs/segmentedbutton/internal/outlined-segmented-button.js';
import { styles as outlinedStyles } from '@material/web/labs/segmentedbutton/internal/outlined-styles.js';
import { styles as sharedStyles } from '@material/web/labs/segmentedbutton/internal/shared-styles.js';

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
export class OscdOutlinedSegmentedButton extends OutlinedSegmentedButton {
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];
}
