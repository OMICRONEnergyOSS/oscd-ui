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

import { SecondaryTab } from '@material/web/tabs/internal/secondary-tab.js';
import { styles as secondaryStyles } from '@material/web/tabs/internal/secondary-tab-styles.js';
import { styles as sharedStyles } from '@material/web/tabs/internal/tab-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-secondary-tab': OscdSecondaryTab;
  }
}

// TODO(b/267336507): add docs
/**
 * @tagname oscd-secondary-tab
 * @summary Tab allow users to display a tab within a Tabs.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdSecondaryTab extends SecondaryTab {
  static override styles: CSSResultOrNative[] = [sharedStyles, secondaryStyles];
}
