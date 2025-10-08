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

import { Item } from '@omicronenergy/oscd-material-web-base/labs/item/internal/item.js';
import { styles } from '@omicronenergy/oscd-material-web-base/labs/item/internal/item-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-item': OscdItem;
  }
}

/**
 * @tagname oscd-item
 * An item layout component that can be used inside list items to give them
 * their customizable structure.
 *
 * `<oscd-item>` does not have any functionality, which must be added by the
 * component using it.
 *
 * All text will wrap unless `white-space: nowrap` is set on the item or any of
 * its children.
 *
 * Slots available:
 * - `<default>`: The headline, or custom content.
 * - `headline`: The first line.
 * - `supporting-text`: Supporting text lines underneath the headline.
 * - `trailing-supporting-text`: A small text snippet at the end of the item.
 * - `start`: Any leading content, such as icons, avatars, or checkboxes.
 * - `end`: Any trailing content, such as icons and buttons.
 * - `container`: Background container content, intended for adding additional
 *     styles, such as ripples or focus rings.
 *
 * @example
 * ```html
 * <oscd-item>Single line</oscd-item>
 *
 * <oscd-item>
 *   <div class="custom-content">...</div>
 * </oscd-item>
 *
 * <!-- Classic 1 to 3+ line list items -->
 * <oscd-item>
 *   <md-icon slot="start">image</md-icon>
 *   <div slot="overline">Overline</div>
 *   <div slot="headline">Headline</div>
 *   <div="supporting-text">Supporting text</div>
 *   <div="trailing-supporting-text">Trailing</div>
 *   <md-icon slot="end">image</md-icon>
 * </oscd-item>
 * ```
 *
 * When wrapping `<oscd-item>`, forward the available slots to use the same slot
 * structure for the wrapping component (this is what `<md-list-item>` does).
 *
 * @example
 * ```html
 * <oscd-item>
 *   <slot></slot>
 *   <slot name="overline" slot="overline"></slot>
 *   <slot name="headline" slot="headline"></slot>
 *   <slot name="supporting-text" slot="supporting-text"></slot>
 *   <slot name="trailing-supporting-text"
 *       slot="trailing-supporting-text"></slot>
 *   <slot name="start" slot="start"></slot>
 *   <slot name="end" slot="end"></slot>
 * </oscd-item>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
export class OscdItem extends Item {
  static override styles: CSSResultOrNative[] = [styles];
}
