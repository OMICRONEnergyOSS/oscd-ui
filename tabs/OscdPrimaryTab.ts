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
import { PrimaryTab } from './internal/primary-tab.js';
import { styles as primaryStyles } from './internal/primary-tab-styles.js';
import { styles as sharedStyles } from './internal/tab-styles.js';

/**
 * @tag oscd-primary-tab
 * @summary Tab allow users to display a tab within a Tabs.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdPrimaryTab extends PrimaryTab {
  static override styles: CSSResultOrNative[] = [sharedStyles, primaryStyles];
}
