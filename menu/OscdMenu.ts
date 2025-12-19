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

import { OscdFocusRing } from '../focus/OscdFocusRing.js';
import { OscdElevation } from '../elevation/OscdElevation.js';

import { CSSResultOrNative } from 'lit';

import { Menu } from '@omicronenergy/oscd-material-web-base/menu/internal/menu.js';
import { styles } from '@omicronenergy/oscd-material-web-base/menu/internal/menu-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
export { type ListItem } from '@omicronenergy/oscd-material-web-base/list/internal/list-navigation-helpers.js';
export { type MenuItem } from '@omicronenergy/oscd-material-web-base/menu/internal/controllers/menuItemController.js';
export {
  CloseReason,
  FocusState,
  type CloseMenuEvent,
  type Menu,
} from '@omicronenergy/oscd-material-web-base/menu/internal/controllers/shared.js';
export { Corner } from '@omicronenergy/oscd-material-web-base/menu/internal/menu.js';

class InternalMenu extends Menu {
  static override styles: CSSResultOrNative[] = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'oscd-menu': OscdMenu;
  }
}

/**
 * @tagname oscd-menu
 * @summary Menus display a list of choices on a temporary surface.
 *
 * Menus appear when users interact with a button, action, or other control.
 *
 * They can be opened from a variety of elements, most commonly icon buttons,
 * buttons, and text fields.
 *
 * oscd-menu listens for the `close-menu` and `deselect-items` events.
 *
 * - `close-menu` closes the menu when dispatched from a child element.
 * - `deselect-items` deselects all of its immediate menu-item children.
 *
 * @example
 * ```html
 * <div style="position:relative;">
 *   <button
 *       id="anchor"
 *       @click=${() => this.menuRef.value.show()}>
 *     Click to open menu
 *   </button>
 *   <!--
 *     `has-overflow` is required when using a submenu which overflows the
 *     menu's contents.
 *
 *     Additionally, `anchor` ingests an idref which do not pass through shadow
 *     roots. You can also set `.anchorElement` to an element reference if
 *     necessary.
 *   -->
 *   <oscd-menu anchor="anchor" has-overflow ${ref(menuRef)}>
 *     <oscd-menu-item headline="This is a headline"></oscd-menu-item>
 *     <md-sub-menu>
 *       <oscd-menu-item
 *           slot="item"
 *           headline="this is a submenu item">
 *       </oscd-menu-item>
 *       <oscd-menu slot="menu">
 *         <oscd-menu-item headline="This is an item inside a submenu">
 *         </oscd-menu-item>
 *       </oscd-menu>
 *     </md-sub-menu>
 *   </oscd-menu>
 * </div>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
export class OscdMenu extends ScopedElementsMixin(InternalMenu) {
  static scopedElements = {
    'md-focus-ring': OscdFocusRing,
    'md-elevation': OscdElevation,
  };
  static override styles: CSSResultOrNative[] = [styles];
}
