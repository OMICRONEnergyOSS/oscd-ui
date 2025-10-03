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
import { styles as sharedStyles } from './internal/shared-styles.js';
import { TextButton } from './internal/text-button.js';
import { styles as textStyles } from './internal/text-styles.js';

/**
 * @tag "oscd-text-button"
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence
 *
 * __Rationale:__ Text buttons have less visual prominence, so should be used
 * for low emphasis actions, such as an alternative option.
 *
 * __Example usages:__
 * - Learn more
 * - View all
 * - Change account
 * - Turn on
 *
 * @event click Fired when the user clicks the button.
 *
 * @final
 * @suppress {visibility}
 *
 */
export class OscdTextButton extends TextButton {
  static override styles: CSSResultOrNative[] = [sharedStyles, textStyles];
}
