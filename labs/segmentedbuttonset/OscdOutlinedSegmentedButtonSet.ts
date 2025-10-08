/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

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

import { CSSResultOrNative } from 'lit';

import { OutlinedSegmentedButtonSet } from '@omicronenergy/oscd-material-web-base/labs/segmentedbuttonset/internal/outlined-segmented-button-set.js';
import { styles as outlinedStyles } from '@omicronenergy/oscd-material-web-base/labs/segmentedbuttonset/internal/outlined-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/labs/segmentedbuttonset/internal/shared-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-outlined-segmented-button-set': OscdOutlinedSegmentedButtonSet;
  }
}

/**
 * @tagname oscd-outlined-segmented-button-set
 * OscdOutlinedSegmentedButtonSet is the custom element for the Material
 * Design outlined segmented button set component.
 * @final
 * @suppress {visibility}
 */
export class OscdOutlinedSegmentedButtonSet extends OutlinedSegmentedButtonSet {
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];
}
