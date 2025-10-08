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

import { CircularProgress } from '@omicronenergy/oscd-material-web-base/progress/internal/circular-progress.js';
import { styles } from '@omicronenergy/oscd-material-web-base/progress/internal/circular-progress-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-circular-progress': OscdCircularProgress;
  }
}

/**
 * @tagname oscd-circular-progress
 * @summary Circular progress indicators display progress by animating along an
 * invisible circular track in a clockwise direction. They can be applied
 * directly to a surface, such as a button or card.
 *
 * Progress indicators inform users about the status of ongoing processes.
 * - Determinate indicators display how long a process will take.
 * - Indeterminate indicators express an unspecified amount of wait time.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdCircularProgress extends CircularProgress {
  static override styles: CSSResultOrNative[] = [styles];
}
