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
import { FilledField } from './internal/filled-field.js';
import { styles as filledStyles } from './internal/filled-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';

/**
 * @tag oscd-filled-field
 * @summary A Material Design filled field component.
 * @final
 * @suppress {visibility}
 */
export class OscdFilledField extends FilledField {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];
}
