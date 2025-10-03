/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative } from 'lit';
import { OutlinedField } from './internal/outlined-field.js';
import { styles as outlinedStyles } from './internal/outlined-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';

/**
 * @tag oscd-outlined-field
 * @summary A Material Design outlined field component.
 * This component is a wrapper around the `OutlinedField` from Material Web Components,
 * providing a scoped element that uses the `OscdOutlinedField` as its field.
 * @final
 * @suppress {visibility}
 */
export class OscdOutlinedField extends OutlinedField {
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];
}
