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
import { literal } from 'lit/static-html.js';
import { styles as filledStyles } from './internal/filled-styles.js';
import { FilledTextField } from './internal/filled-text-field.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

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

  protected override readonly fieldTag = literal`oscd-filled-field`;
}
