/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

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

import { Switch } from '@material/web/switch/internal/switch.js';
import { styles } from '@material/web/switch/internal/switch-styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-switch': OscdSwitch;
  }
}

/**
 * @tagname oscd-switch
 * @summary Switches toggle the state of a single item on or off.
 *
 * There's one type of switch in Material. Use this selection control when the
 * user needs to toggle a single item on or off.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdSwitch extends Switch {
  static override styles: CSSResultOrNative[] = [styles];
}
