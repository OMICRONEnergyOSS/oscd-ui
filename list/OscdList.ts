/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { css, CSSResultOrNative } from 'lit';
import { List } from './internal/list.js';
import { styles } from './internal/list-styles.js';

const overrideStyles = css`
  :host {
    --md-list-container-color: var(
      --oscd-list-container-color,
      var(--md-sys-color-surface-container, #fef7ff)
    );
  }
`;

/**
 * @tag oscd-list
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
  static override styles: CSSResultOrNative[] = [styles, overrideStyles];
}
