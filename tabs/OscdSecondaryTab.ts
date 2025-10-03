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
import { SecondaryTab } from './internal/secondary-tab.js';
import { styles as secondaryStyles } from './internal/secondary-tab-styles.js';
import { styles as sharedStyles } from './internal/tab-styles.js';

/**
 * @tag oscd-secondary-tab
 * @summary Tab allow users to display a tab within a Tabs.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdSecondaryTab extends SecondaryTab {
  static override styles: CSSResultOrNative[] = [sharedStyles, secondaryStyles];
}
