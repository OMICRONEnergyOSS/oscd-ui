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
import { styles } from '../menu/internal/menuitem/menu-item-styles.js';

import { SelectOptionEl } from './internal/selectoption/select-option.js';

export { type SelectOption } from './internal/selectoption/select-option.js';

/**
 * @tag oscd-select-option
 * @summary
 * Select menus display a list of choices on temporary surfaces and display the
 * currently selected menu item above the menu.
 *
 * The select component allows users to choose a value from a fixed list of
 * available options. Composed of an interactive anchor button and a menu, it is
 * analogous to the native HTML `<select>` element. This is the option that
 * can be placed inside of an oscd-select.
 *
 * This component is a subclass of `oscd-menu-item` and can accept the same slots,
 * properties, and events as `oscd-menu-item`.
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
export class OscdSelectOption extends SelectOptionEl {
  static override styles: CSSResultOrNative[] = [styles];
}
