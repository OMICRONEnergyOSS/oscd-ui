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

import { CSSResultOrNative } from 'lit';

import { IconButton } from '@material/web/iconbutton/internal/icon-button.js';
import { styles } from '@material/web/iconbutton/internal/outlined-styles.js';
import { styles as sharedStyles } from '@material/web/iconbutton/internal/shared-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-outlined-icon-button': OscdOutlinedIconButton;
  }
}

/**
 * @tagname oscd-outlined-icon-button
 * @summary Icon buttons help people take supplementary actions with a single
 * tap.
 *
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence.
 *
 * __Rationale:__ The most compact and unobtrusive type of button, icon buttons
 * are used for optional supplementary actions such as "Bookmark" or "Star."
 *
 * __Example usages:__
 * - Add to Favorites
 * - Print
 *
 * @final
 * @suppress {visibility}
 */
export class OscdOutlinedIconButton extends IconButton {
  static override styles: CSSResultOrNative[] = [sharedStyles, styles];

  protected override getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      outlined: true,
    };
  }
}
