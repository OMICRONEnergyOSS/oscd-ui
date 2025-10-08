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
import { literal } from 'lit/static-html.js';

import { styles as outlinedStyles } from '@omicronenergy/oscd-material-web-base/textfield/internal/outlined-styles.js';
import { OutlinedTextField } from '@omicronenergy/oscd-material-web-base/textfield/internal/outlined-text-field.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/textfield/internal/shared-styles.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdOutlinedField } from '../field/OscdOutlinedField.js';

export { type TextFieldType as OscdTextFieldType } from '@omicronenergy/oscd-material-web-base/textfield/internal/text-field.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-outlined-text-field': OscdOutlinedTextField;
  }
}

/**
 * @tag oscd-outlined-text-field
 * @summary A Material Design outlined text field component.
 * This component is a wrapper around the `OutlinedTextField` from Material Web Components,
 * providing a scoped element that uses the `OscdOutlinedField` as its field.
 * @final
 * @suppress {visibility}
 */
export class OscdOutlinedTextField extends ScopedElementsMixin(
  OutlinedTextField,
) {
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];

  static scopedElements = {
    'oscd-outlined-field': OscdOutlinedField,
  };

  protected override readonly fieldTag = literal`oscd-outlined-field`;
}
