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

import { styles as filledStyles } from '@omicronenergy/oscd-material-web-base/textfield/internal/filled-styles.js';
import { FilledTextField } from '@omicronenergy/oscd-material-web-base/textfield/internal/filled-text-field.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/textfield/internal/shared-styles.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdFilledField } from '../field/OscdFilledField.js';

export { type TextFieldType as OscdTextFieldType } from '@omicronenergy/oscd-material-web-base/textfield/internal/text-field.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-text-field': OscdFilledTextField;
  }
}

/**
 * @tag oscd-filled-text-field
 * @summary A Material Design filled text field component.
 * This component is a wrapper around the `FilledTextField` from Material Web Components,
 * providing a scoped element that uses the `OscdFilledField` as its field.
 * @final
 * @suppress {visibility}
 */
export class OscdFilledTextField extends ScopedElementsMixin(FilledTextField) {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];

  static scopedElements = {
    'oscd-filled-field': OscdFilledField,
  };

  protected override readonly fieldTag = literal`oscd-filled-field`;
}
