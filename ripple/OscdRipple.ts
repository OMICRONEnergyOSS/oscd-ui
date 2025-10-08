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

import { Ripple } from '@omicronenergy/oscd-material-web-base/ripple/internal/ripple.js';
import { styles } from '@omicronenergy/oscd-material-web-base/ripple/internal/ripple-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-ripple': OscdRipple;
  }
}

/**
 * @tagname oscd-ripple
 * @summary Ripples, also known as state layers, are visual indicators used to
 * communicate the status of a component or interactive element.
 *
 * indicates its state. State layers provide a systematic approach to
 * visualizing states by using opacity. A layer can be applied to an entire
 * element or in a circular shape and only one state layer can be applied at a
 * given time.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdRipple extends Ripple {
  static override styles: CSSResultOrNative[] = [styles];
}
