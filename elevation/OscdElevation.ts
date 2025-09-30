/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative } from 'lit';

import { Elevation } from './internal/elevation.js';
import { styles } from './internal/elevation-styles.js';

/**
 * @summary The `<oscd-elevation>` custom element with default styles.
 *
 * Elevation is the relative distance between two surfaces along the z-axis.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdElevation extends Elevation {
  static override styles: CSSResultOrNative[] = [styles];
}
