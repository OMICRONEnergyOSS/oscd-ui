/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';

import { List } from '@omicronenergy/oscd-material-web-base/list/internal/list.js';
import { styles } from '@omicronenergy/oscd-material-web-base/list/internal/list-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-list': OscdList;
  }
}

/**
 * @tagname oscd-list
 * @summary Lists are continuous, vertical indexes of text or images.
 *
 * Lists consist of one or more list items, and can contain actions represented
 * by icons and text. List items come in three sizes: one-line, two-line, and
 * three-line.
 *
 * __Takeaways:__
 *
 * - Lists should be sorted in logical ways that make content easy to scan, such
 *   as alphabetical, numerical, chronological, or by user preference.
 * - Lists present content in a way that makes it easy to identify a specific
 *   item in a collection and act on it.
 * - Lists should present icons, text, and actions in a consistent format.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdList extends List {
  static override styles: CSSResultOrNative[] = [styles];
}
