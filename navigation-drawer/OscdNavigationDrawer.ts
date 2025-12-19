/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { OscdElevation } from '../elevation/OscdElevation.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { css, CSSResult, CSSResultOrNative } from 'lit';
import { NavigationDrawerModal } from '@omicronenergy/oscd-material-web-base/labs/navigationdrawer/internal/navigation-drawer-modal.js';
import { styles } from '@omicronenergy/oscd-material-web-base/labs/navigationdrawer/internal/navigation-drawer-modal-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/labs/navigationdrawer/internal/shared-styles.js';

const overrideStyles = css`
  :host {
    --md-navigation-drawer-modal-scrim-color: var(--md-sys-color-scrim, #000);
    --md-navigation-drawer-modal-scrim-opacity: 0.32;
    --md-navigation-drawer-modal-container-color: var(
      --md-sys-color-surface-container
    );
  }
  .md3-navigation-drawer-modal--opened {
    z-index: 6;
  }
  .md3-navigation-drawer-modal__scrim {
    z-index: 5;
  }
`;

/**
 * @tag oscd-navigation-drawer
 * @summary Navigation drawers are temporary surfaces that display a list of
 * choices.
 *
 */
export class OscdNavigationDrawer extends ScopedElementsMixin(
  NavigationDrawerModal,
) {
  static scopedElements = {
    'md-elevation': OscdElevation,
  };

  static override readonly styles: CSSResultOrNative[] = [
    sharedStyles as unknown as CSSResult,
    styles as unknown as CSSResult,
    overrideStyles as unknown as CSSResult,
  ];
}
