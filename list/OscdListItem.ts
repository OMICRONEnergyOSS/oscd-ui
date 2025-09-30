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
import { css, CSSResultOrNative } from 'lit';
import { ListItemEl as ListItem } from '@material/web/list/internal/listitem/list-item.js';
import { styles } from '@material/web/list/internal/listitem/list-item-styles.js';
import { property } from 'lit/decorators.js';

export { type ListItemType } from '@material/web/list/internal/listitem/list-item.js';

const styleOverrides = css`
  :host([activated]) {
    --md-list-item-label-text-color: var(
      --oscd-list-item-activated-color,
      var(--md-sys-color-primary, #6750a4)
    );

    background-color: var(
      --oscd-list-item-activated-background-color,
      var(--md-sys-color-surface-bright, #eaddff)
    );
  }
  [slot='start'] {
    color: var(
      --md-list-item-leading-icon-color,
      var(--md-sys-color-on-surface, #49454f)
    );
  }
  [slot='end'] {
    color: var(
      --md-list-item-trailing-icon-color,
      var(--md-sys-color-on-surface, #49454f)
    );
  }
`;

/**
 * @tag oscd-list-item
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
 *   <oscd-icon slot="start">account_circle</oscd-icon>
 *   <oscd-icon slot="end">check</oscd-icon>
 * </oscd-list-item>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
export class OscdListItem extends ListItem {
  /**
   * Boolean indicating whether the item is activated.
   */
  @property({ type: Boolean, reflect: true })
  activated = false;

  static override styles: CSSResultOrNative[] = [styles, styleOverrides];
}
