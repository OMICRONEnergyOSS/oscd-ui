/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative } from 'lit';
import { Tabs } from './internal/tabs.js';
import { styles } from './internal/tabs-styles.js';

/**
 * @tag oscd-tabs
 * @summary Tabs displays a list of selectable tabs.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdTabs extends Tabs {
  static override styles: CSSResultOrNative[] = [styles];
}
