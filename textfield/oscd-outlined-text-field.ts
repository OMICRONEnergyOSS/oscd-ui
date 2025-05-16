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
import "../field/outlined-field.js";

import { CSSResultOrNative } from "lit";
import { customElement } from "lit/decorators.js";
import { literal } from "lit/static-html.js";

import { styles as outlinedStyles } from "@material/web/textfield/internal/outlined-styles.js";
import { OutlinedTextField } from "@material/web/textfield/internal/outlined-text-field.js";
import { styles as sharedStyles } from "@material/web/textfield/internal/shared-styles.js";

export { type TextFieldType } from "@material/web/textfield/internal/text-field.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-outlined-text-field": OscdOutlinedTextField;
  }
}

/**
 * TODO(b/228525797): Add docs
 * @final
 * @suppress {visibility}
 */
@customElement("oscd-outlined-text-field")
export class OscdOutlinedTextField extends OutlinedTextField {
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];

  protected override readonly fieldTag = literal`oscd-outlined-field`;
}
