/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';

import { Checkbox } from '@material/web/checkbox/internal/checkbox.js';
import { styles } from '@material/web/checkbox/internal/checkbox-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-checkbox': OscdCheckbox;
  }
}

/**
 * @tagname oscd-checkbox
 * @summary Checkboxes allow users to select one or more items from a set.
 * Checkboxes can turn an option on or off.
 *
 * Use checkboxes to:
 * - Select one or more options from a list
 * - Present a list containing sub-selections
 * - Turn an item on or off in a desktop environment
 *
 * @final
 * @suppress {visibility}
 */
export class OscdCheckbox extends Checkbox {
  static override styles: CSSResultOrNative[] = [styles];
}
