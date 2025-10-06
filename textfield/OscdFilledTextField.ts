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

import '../field/filled-field.js';

import { CSSResultOrNative } from 'lit';
import { literal } from 'lit/static-html.js';

import { styles as filledStyles } from '@material/web/textfield/internal/filled-styles.js';
import { FilledTextField } from '@material/web/textfield/internal/filled-text-field.js';
import { styles as sharedStyles } from '@material/web/textfield/internal/shared-styles.js';

export { type TextFieldType } from '@material/web/textfield/internal/text-field.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-text-field': OscdFilledTextField;
  }
}

/**
 * @tagname oscd-filled-text-field
 * TODO(b/228525797): Add docs
 * @final
 * @suppress {visibility}
 */
export class OscdFilledTextField extends FilledTextField {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];

  protected override readonly fieldTag = literal`md-filled-field`;
}
