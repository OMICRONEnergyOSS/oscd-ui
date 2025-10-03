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
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { literal } from 'lit/static-html.js';
import { styles as outlinedStyles } from './internal/outlined-styles.js';
import { OutlinedTextField } from './internal/outlined-text-field.js';
import { styles as sharedStyles } from './internal/shared-styles.js';

// export { type TextFieldType } from "../internal/text-field.js";

/**
 * @tag oscd-outlined-text-field
 * @summary A Material Design outlined text field component.
 * @final
 * @suppress {visibility}
 */
export class OscdOutlinedTextField extends ScopedElementsMixin(
  OutlinedTextField,
) {
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];

  protected override readonly fieldTag = literal`oscd-outlined-field`;
}
