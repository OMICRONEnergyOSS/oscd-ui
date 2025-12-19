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

import { FilledSelect } from '@omicronenergy/oscd-material-web-base/select/internal/filled-select.js';
import { styles } from '@omicronenergy/oscd-material-web-base/select/internal/filled-select-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/select/internal/shared-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdElevation } from '../elevation/OscdElevation.js';
import { OscdFilledField } from '../field/OscdFilledField.js';
import { OscdMenu } from '../menu/OscdMenu.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-select': OscdFilledSelect;
  }
}

class InternalFilledSelect extends FilledSelect {
  static override styles: CSSResultOrNative[] = [sharedStyles, styles];
}

/**
 * @tagname oscd-filled-select
 * @summary
 * Select menus display a list of choices on temporary surfaces and display the
 * currently selected menu item above the menu.
 *
 * The select component allows users to choose a value from a fixed list of
 * available options. Composed of an interactive anchor button and a menu, it is
 * analogous to the native HTML `<select>` element. This is the "filled"
 * variant.
 *
 * @example
 * ```html
 * <oscd-filled-select label="fruits">
 *   <!-- An empty selected option will give select an "un-filled" state -->
 *   <md-select-option selected></md-select-option>
 *   <md-select-option value="apple" headline="Apple"></md-select-option>
 *   <md-select-option value="banana" headline="Banana"></md-select-option>
 *   <md-select-option value="kiwi" headline="Kiwi"></md-select-option>
 *   <md-select-option value="orange" headline="Orange"></md-select-option>
 *   <md-select-option value="tomato" headline="Tomato"></md-select-option>
 * </oscd-filled-select>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
export class OscdFilledSelect extends ScopedElementsMixin(
  InternalFilledSelect,
) {
  static scopedElements = {
    'md-menu': OscdMenu,
    'md-elevation': OscdElevation,
    'md-filled-field': OscdFilledField,
  };
  static override styles: CSSResultOrNative[] = [sharedStyles, styles];
}
