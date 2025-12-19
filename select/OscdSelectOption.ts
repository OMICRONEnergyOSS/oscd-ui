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

import { OscdRipple } from '../ripple/OscdRipple.js';
import { OscdItem } from '../labs/item/OscdItem.js';
import { OscdFocusRing } from '../focus/OscdFocusRing.js';

import { CSSResultOrNative } from 'lit';

import { styles } from '@omicronenergy/oscd-material-web-base/menu/internal/menuitem/menu-item-styles.js';

import { SelectOptionEl } from '@omicronenergy/oscd-material-web-base/select/internal/selectoption/select-option.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
export { type SelectOption } from '@omicronenergy/oscd-material-web-base/select/internal/selectoption/select-option.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-select-option': OscdSelectOption;
  }
}

/**
 * @tagname oscd-select-option
 * @summary
 * Select menus display a list of choices on temporary surfaces and display the
 * currently selected menu item above the menu.
 *
 * The select component allows users to choose a value from a fixed list of
 * available options. Composed of an interactive anchor button and a menu, it is
 * analogous to the native HTML `<select>` element. This is the option that
 * can be placed inside of an md-select.
 *
 * This component is a subclass of `md-menu-item` and can accept the same slots,
 * properties, and events as `md-menu-item`.
 *
 * @example
 * ```html
 * <md-outlined-select label="fruits">
 *   <!-- An empty selected option will give select an "un-filled" state -->
 *   <oscd-select-option selected></oscd-select-option>
 *   <oscd-select-option value="apple" headline="Apple"></oscd-select-option>
 *   <oscd-select-option value="banana" headline="Banana"></oscd-select-option>
 *   <oscd-select-option value="kiwi" headline="Kiwi"></oscd-select-option>
 *   <oscd-select-option value="orange" headline="Orange"></oscd-select-option>
 *   <oscd-select-option value="tomato" headline="Tomato"></oscd-select-option>
 * </md-outlined-select>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
export class OscdSelectOption extends ScopedElementsMixin(SelectOptionEl) {
  static scopedElements = {
    'md-ripple': OscdRipple,
    'md-focus-ring': OscdFocusRing,
    'md-item': OscdItem,
  };
  static override styles: CSSResultOrNative[] = [styles];
}
