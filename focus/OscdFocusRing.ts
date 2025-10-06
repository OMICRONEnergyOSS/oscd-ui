/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

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

import { FocusRing } from '@material/web/focus/internal/focus-ring.js';
import { styles } from '@material/web/focus/internal/focus-ring-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-focus-ring': OscdFocusRing;
  }
}

/**
 * @tagname oscd-focus-ring
 * TODO(b/267336424): add docs
 *
 * @final
 * @suppress {visibility}
 */
export class OscdFocusRing extends FocusRing {
  static override styles: CSSResultOrNative[] = [styles];
}
