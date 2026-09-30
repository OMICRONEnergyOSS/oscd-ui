/**
 * @license
 * Copyright 2025 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative } from 'lit';
import { ListItemEl as ListItem } from '@omicronenergy/oscd-material-web-base/list/internal/listitem/list-item.js';
import { styles } from '@omicronenergy/oscd-material-web-base/list/internal/listitem/list-item-styles.js';

/**
 * @tag oscd-navigation-drawer-header
 * @summary A header for the navigation drawer.
 * @cssprop [--md-list-item-label-text-color=var(--md-sys-color-on-surface, #1d1b20)] - Embedded list-item headline color.
 * @cssprop [--md-list-item-label-text-font=var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto))] - Embedded list-item headline font.
 * @cssprop [--md-list-item-label-text-size=var(--md-sys-typescale-body-large-size, 1rem)] - Embedded list-item headline size.
 * @cssprop [--md-list-item-label-text-line-height=var(--md-sys-typescale-body-large-line-height, 1.5rem)] - Embedded list-item headline line height.
 * @cssprop [--md-list-item-label-text-weight=var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400))] - Embedded list-item headline weight.
 * @cssprop [--md-list-item-supporting-text-color=var(--md-sys-color-on-surface-variant, #49454f)] - Embedded list-item supporting text color.
 * @cssprop [--md-list-item-supporting-text-font=var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto))] - Embedded list-item supporting text font.
 * @cssprop [--md-list-item-supporting-text-size=var(--md-sys-typescale-body-medium-size, 0.875rem)] - Embedded list-item supporting text size.
 * @cssprop [--md-list-item-supporting-text-line-height=var(--md-sys-typescale-body-medium-line-height, 1.25rem)] - Embedded list-item supporting text line height.
 * @cssprop [--md-list-item-supporting-text-weight=var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400))] - Embedded list-item supporting text weight.
 */
export class OscdNavigationDrawerHeader extends ListItem {
  static override readonly styles: CSSResultOrNative[] = [styles];
}
