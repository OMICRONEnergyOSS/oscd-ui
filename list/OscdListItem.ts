/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSResultOrNative } from 'lit';

import { ListItemEl as ListItem } from '@material/web/list/internal/listitem/list-item.js';
import { styles } from '@material/web/list/internal/listitem/list-item-styles.js';

export { type ListItemType } from '@material/web/list/internal/listitem/list-item.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-list-item': OscdListItem;
  }
}

/**
 * @tagname oscd-list-item
 * @summary
 * Lists are continuous, vertical indexes of text or images. Items are placed
 * inside the list.
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
 * Acceptable slot child variants are:
 *
 * - `img[slot=end]`
 * - `img[slot=start]`
 *
 *  @example
 * ```html
 * <oscd-list-item
 *     headline="User Name"
 *     supportingText="user@name.com">
 *   <md-icon slot="start">account_circle</md-icon>
 *   <md-icon slot="end">check</md-icon>
 * </oscd-list-item>
 * ```
 *
 * @example
 *
 * @final
 * @suppress {visibility}
 */
export class OscdListItem extends ListItem {
  static override styles: CSSResultOrNative[] = [styles];
}
