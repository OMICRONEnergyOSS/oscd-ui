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

import { OscdRipple } from '../ripple/OscdRipple.js';
import { OscdFocusRing } from '../focus/OscdFocusRing.js';

import { CSSResultOrNative } from 'lit';

import { Switch } from '@omicronenergy/oscd-material-web-base/switch/internal/switch.js';
import { styles } from '@omicronenergy/oscd-material-web-base/switch/internal/switch-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
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
export class OscdSwitch extends ScopedElementsMixin(Switch) {
  static scopedElements = {
    'md-ripple': OscdRipple,
    'md-focus-ring': OscdFocusRing,
  };
  static override styles: CSSResultOrNative[] = [styles];
}
