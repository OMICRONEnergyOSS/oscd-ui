/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

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

import { PrimaryTab } from '@material/web/tabs/internal/primary-tab.js';
import { styles as primaryStyles } from '@material/web/tabs/internal/primary-tab-styles.js';
import { styles as sharedStyles } from '@material/web/tabs/internal/tab-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-primary-tab': OscdPrimaryTab;
  }
}

// TODO(b/267336507): add docs
/**
 * @tagname oscd-primary-tab
 * @summary Tab allow users to display a tab within a Tabs.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdPrimaryTab extends PrimaryTab {
  static override styles: CSSResultOrNative[] = [sharedStyles, primaryStyles];
}
