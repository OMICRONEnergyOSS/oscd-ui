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

import { OscdDivider } from '../divider/OscdDivider.js';

import { CSSResultOrNative } from 'lit';

import { Tabs } from '@omicronenergy/oscd-material-web-base/tabs/internal/tabs.js';
import { styles } from '@omicronenergy/oscd-material-web-base/tabs/internal/tabs-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
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
export class OscdTabs extends ScopedElementsMixin(Tabs) {
  static scopedElements = {
    'md-divider': OscdDivider,
  };
  static override styles: CSSResultOrNative[] = [styles];
}
