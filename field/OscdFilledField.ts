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

import { FilledField } from '@omicronenergy/oscd-material-web-base/field/internal/filled-field.js';
import { styles as filledStyles } from '@omicronenergy/oscd-material-web-base/field/internal/filled-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/field/internal/shared-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-field': OscdFilledField;
  }
}

/**
 * @tagname oscd-filled-field
 * TODO(b/228525797): add docs
 * @final
 * @suppress {visibility}
 */
export class OscdFilledField extends FilledField {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];
}
