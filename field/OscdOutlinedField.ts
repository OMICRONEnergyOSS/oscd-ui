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

import { OutlinedField } from '@material/web/field/internal/outlined-field.js';
import { styles as outlinedStyles } from '@material/web/field/internal/outlined-styles.js';
import { styles as sharedStyles } from '@material/web/field/internal/shared-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-outlined-field': OscdOutlinedField;
  }
}

/**
 * @tagname oscd-outlined-field
 * TODO(b/228525797): add docs
 * @final
 * @suppress {visibility}
 */
export class OscdOutlinedField extends OutlinedField {
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];
}
