/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { MdRipple } from '@omicronenergy/oscd-material-web-base/ripple/MdRipple.js';
import { MdFocusRing } from '@omicronenergy/oscd-material-web-base/focus/MdFocusRing.js';
import { MdElevation } from '@omicronenergy/oscd-material-web-base/elevation/MdElevation.js';

import { CSSResultOrNative } from 'lit';

import { styles as forcedColorsStyles } from '@omicronenergy/oscd-material-web-base/slider/internal/forced-colors-styles.js';
import { Slider } from '@omicronenergy/oscd-material-web-base/slider/internal/slider.js';
import { styles } from '@omicronenergy/oscd-material-web-base/slider/internal/slider-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-slider': OscdSlider;
  }
}

/**
 * @tagname oscd-slider
 * @summary Sliders allow users to view and select a value (or range) along
 * a track.
 *
 * Changes made with sliders are immediate, allowing the user to make slider
 * adjustments while determining a selection. Sliders shouldn’t be used to
 * adjust settings with any delay in providing user feedback. Sliders reflect
 * the current state of the settings they control.
 *
 * __Example usages:__
 * - Sliders are ideal for adjusting settings such as volume and brightness, or
 * for applying image filters.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdSlider extends ScopedElementsMixin(Slider) {
  static scopedElements = {
    'md-ripple': MdRipple,
    'md-focus-ring': MdFocusRing,
    'md-elevation': MdElevation,
  };
  static override styles: CSSResultOrNative[] = [styles, forcedColorsStyles];
}
