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

import { OscdRipple } from '../ripple/OscdRipple.js';
import { OscdItem } from '../labs/item/OscdItem.js';
import { OscdFocusRing } from '../focus/OscdFocusRing.js';

import { CSSResultOrNative } from 'lit';

import { MenuItemEl } from '@omicronenergy/oscd-material-web-base/menu/internal/menuitem/menu-item.js';
import { styles } from '@omicronenergy/oscd-material-web-base/menu/internal/menuitem/menu-item-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
export { type MenuItem } from '@omicronenergy/oscd-material-web-base/menu/internal/controllers/menuItemController.js';
export { type CloseMenuEvent } from '@omicronenergy/oscd-material-web-base/menu/internal/controllers/shared.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-menu-item': OscdMenuItem;
  }
}

/**
 * @tagname oscd-menu-item
 * @summary Menus display a list of choices on a temporary surface.
 *
 * Menu items are the selectable choices within the menu. Menu items must
 * implement the `MenuItem` interface and also have the `oscd-menu-item`
 * attribute. Additionally menu items are list items so they must also have the
 * `md-list-item` attribute.
 *
 * Menu items can control a menu by selectively firing the `close-menu` and
 * `deselect-items` events.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdMenuItem extends ScopedElementsMixin(MenuItemEl) {
  static scopedElements = {
    'md-ripple': OscdRipple,
    'md-item': OscdItem,
    'md-focus-ring': OscdFocusRing,
  };
  static override styles: CSSResultOrNative[] = [styles];
}
