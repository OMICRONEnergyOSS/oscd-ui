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
import { CSSResultOrNative } from 'lit';

import { OutlinedButton } from './internal/outlined-button.js';
import { styles as outlinedStyles } from './internal/outlined-styles.js';
import { styles as sharedStyles } from './internal/shared-styles.js';

/**
 * @tag "oscd-outlined-button"
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * __Emphasis:__ Medium emphasis – For important actions that don’t distract
 * from other onscreen elements.
 *
 * __Rationale:__ Use an outlined button for actions that need attention but
 * aren’t the primary action, such as “See all” or “Add to cart.” This is also
 * the button to use for giving someone the opportunity to change their mind or
 * escape a flow.
 *
 * __Example usages:__
 * - Reply
 * - View all
 * - Add to cart
 * - Take out of trash
 *
 * @event click Fired when the user clicks the button.
 *
 * @final
 * @suppress {visibility}
 *
 */
export class OscdOutlinedButton extends OutlinedButton {
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];
}
