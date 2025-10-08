/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { css, CSSResultOrNative } from 'lit';
import { ListItemEl as ListItem } from '@omicronenergy/oscd-material-web-base/list/internal/listitem/list-item.js';
import { styles } from '@omicronenergy/oscd-material-web-base/list/internal/listitem/list-item-styles.js';

const overrideStyles = css`
  :host {
    --navigation-drawer-header-color: var(
      --oscd-navigation-drawer-header-color,
      var(--md-sys-color-on-primary, #1d1b20)
    );
    --navigation-drawer-header-background-color: var(
      --oscd-navigation-drawer-header-background-color,
      var(--md-sys-color-primary, #fff)
    );

    --md-list-item-label-text-font: var(
      --oscd-navigation-drawer-header-text-font,
      Roboto
    );
    --md-list-item-label-text-size: var(
      --oscd-navigation-drawer-header-text-size,
      1.25rem
    );
    --md-list-item-label-text-line-height: var(
      --oscd-navigation-drawer-header-text-line-height,
      1.5rem
    );
    --md-list-item-label-text-weight: var(
      --oscd-navigation-drawer-header-text-weight,
      500
    );

    --md-list-item-supporting-text-font: var(
      --oscd-navigation-drawer-header-supporting-text-font,
      var(--md-sys-typescale-body-medium-font, Roboto)
    );
    --md-list-item-supporting-text-size: var(
      --oscd-navigation-drawer-header-supporting-text-size,
      0.875rem
    );
    --md-list-item-supporting-text-line-height: var(
      --oscd-navigation-drawer-header-supporting-text-line-height,
      1.25rem
    );
    --md-list-item-supporting-text-weight: var(
      --oscd-navigation-drawer-header-supporting-text-weight,
      400
    );
  }
`;

/**
 * @tag oscd-navigation-drawer-header
 * @summary A header for the navigation drawer.
 *
 */
export class OscdNavigationDrawerHeader extends ListItem {
  static override readonly styles: CSSResultOrNative[] = [
    styles,
    overrideStyles,
  ];
}
