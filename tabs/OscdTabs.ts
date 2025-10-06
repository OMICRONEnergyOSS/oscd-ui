/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';

import { Tabs } from '@material/web/tabs/internal/tabs.js';
import { styles } from '@material/web/tabs/internal/tabs-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-tabs': OscdTabs;
  }
}

// TODO(b/267336507): add docs
/**
 * @tagname oscd-tabs
 * @summary Tabs displays a list of selectable tabs.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdTabs extends Tabs {
  static override styles: CSSResultOrNative[] = [styles];
}
