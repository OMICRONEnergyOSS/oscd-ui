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

import { OutlinedSelect } from '@material/web/select/internal/outlined-select.js';
import { styles } from '@material/web/select/internal/outlined-select-styles.js';
import { styles as sharedStyles } from '@material/web/select/internal/shared-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-outlined-select': OscdOutlinedSelect;
  }
}

/**
 * @tagname oscd-outlined-select
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
 *   <md-select-option selected></md-select-option>
 *   <md-select-option value="apple" headline="Apple"></md-select-option>
 *   <md-select-option value="banana" headline="Banana"></md-select-option>
 *   <md-select-option value="kiwi" headline="Kiwi"></md-select-option>
 *   <md-select-option value="orange" headline="Orange"></md-select-option>
 *   <md-select-option value="tomato" headline="Tomato"></md-select-option>
 * </oscd-outlined-select>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
export class OscdOutlinedSelect extends OutlinedSelect {
  static override styles: CSSResultOrNative[] = [sharedStyles, styles];
}
