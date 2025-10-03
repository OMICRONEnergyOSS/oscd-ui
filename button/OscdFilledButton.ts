/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { FilledButton } from './internal/filled-button.js';
import { styles as filledStyles } from './internal/filled-styles.js';
import { styles as sharedElevationStyles } from './internal/shared-elevation-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';
import { CSSResult } from '@lit/reactive-element';

/**
 * @tag oscd-filled-button
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @event click Fired when the user clicks the button.
 *
 * @final
 * @suppress {visibility}
 *
 */
export class OscdFilledButton extends FilledButton {
  static override styles: CSSResult[] = [
    sharedStyles,
    sharedElevationStyles,
    filledStyles,
  ];
}
