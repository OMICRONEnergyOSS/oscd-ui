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

import { NavigationDrawerModal } from '@material/web/labs/navigationdrawer/internal/navigation-drawer-modal.js';
import { styles } from '@material/web/labs/navigationdrawer/internal/navigation-drawer-modal-styles.js';
import { styles as sharedStyles } from '@material/web/labs/navigationdrawer/internal/shared-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-navigation-drawer-modal': OscdNavigationDrawerModal;
  }
}

/**
 * @tagname oscd-navigation-drawer-modal
 * @final
 * @suppress {visibility}
 */
export class OscdNavigationDrawerModal extends NavigationDrawerModal {
  static override readonly styles = [sharedStyles, styles];
}
