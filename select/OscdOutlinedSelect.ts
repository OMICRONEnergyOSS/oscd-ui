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
import { CSSResultOrNative } from 'lit';
import { OutlinedSelect } from './internal/outlined-select.js';
import { styles } from './internal/outlined-select-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';

/**
 * @tag oscd-outlined-select
 * @summary
 * Select menus display a list of choices on temporary surfaces and display the
 * currently selected menu item above the menu.
 *
 * The select component allows users to choose a value from a fixed list of
 * available options. Composed of an interactive anchor button and a menu, it is
 * analogous to the native HTML `<select>` element. This is the "outlined"
 * variant.
 *
 * @example
 * ```html
 * <oscd-outlined-select label="fruits">
 *   <!-- An empty selected option will give select an "un-filled" state -->
 *   <oscd-select-option selected></oscd-select-option>
 *   <oscd-select-option value="apple" headline="Apple"></oscd-select-option>
 *   <oscd-select-option value="banana" headline="Banana"></oscd-select-option>
 *   <oscd-select-option value="kiwi" headline="Kiwi"></oscd-select-option>
 *   <oscd-select-option value="orange" headline="Orange"></oscd-select-option>
 *   <oscd-select-option value="tomato" headline="Tomato"></oscd-select-option>
 * </oscd-outlined-select>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
export class OscdOutlinedSelect extends OutlinedSelect {
  static override styles: CSSResultOrNative[] = [sharedStyles, styles];
}
