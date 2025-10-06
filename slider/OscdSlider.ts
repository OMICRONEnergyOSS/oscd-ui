/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

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

import { CSSResultOrNative } from 'lit';

import { styles as forcedColorsStyles } from '@material/web/slider/internal/forced-colors-styles.js';
import { Slider } from '@material/web/slider/internal/slider.js';
import { styles } from '@material/web/slider/internal/slider-styles.js';

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
export class OscdSlider extends Slider {
  static override styles: CSSResultOrNative[] = [styles, forcedColorsStyles];
}
