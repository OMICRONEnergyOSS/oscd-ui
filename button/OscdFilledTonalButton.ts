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

import { CSSResultOrNative } from 'lit';

import { FilledTonalButton } from '@material/web/button/internal/filled-tonal-button.js';
import { styles as tonalStyles } from '@material/web/button/internal/filled-tonal-styles.js';
import { styles as sharedElevationStyles } from '@material/web/button/internal/shared-elevation-styles.js';
import { styles as sharedStyles } from '@material/web/button/internal/shared-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-tonal-button': OscdFilledTonalButton;
  }
}

/**
 * @tagname oscd-filled-tonal-button
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Filled tonal buttons have a lighter background color and
 * darker label color, making them less visually prominent than a regular,
 * filled button. They’re still used for final or unblocking actions in a flow,
 * but do so with less emphasis.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
export class OscdFilledTonalButton extends FilledTonalButton {
  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    sharedElevationStyles,
    tonalStyles,
  ];
}
