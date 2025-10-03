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
import { Icon } from './internal/icon.js';
import { styles } from './internal/icon-styles.js';

/**
 * @tag oscd-icon
 * @summary An icon is a graphical representation of an object, action, or concept.
 * Icons can be used to represent actions, such as "add" or "delete", or to
 * represent objects, such as "folder" or "file".
 * @final
 * @suppress {visibility}
 */
export class OscdIcon extends Icon {
  /** @nocollapse */
  static override styles: CSSResultOrNative[] = [styles];
}
