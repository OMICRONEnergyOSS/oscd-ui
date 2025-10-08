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

import { LinearProgress } from '@omicronenergy/oscd-material-web-base/progress/internal/linear-progress.js';
import { styles } from '@omicronenergy/oscd-material-web-base/progress/internal/linear-progress-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-linear-progress': OscdLinearProgress;
  }
}

/**
 * @tagname oscd-linear-progress
 * @summary Linear progress indicators display progress by animating along the
 * length of a fixed, visible track.
 *
 * Progress indicators inform users about the status of ongoing processes.
 * - Determinate indicators display how long a process will take.
 * - Indeterminate indicators express an unspecified amount of wait time.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdLinearProgress extends LinearProgress {
  static override styles: CSSResultOrNative[] = [styles];
}
