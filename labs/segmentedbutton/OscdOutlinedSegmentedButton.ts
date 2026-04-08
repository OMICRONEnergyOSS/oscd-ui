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
import { OscdRipple } from '../../ripple/OscdRipple.js';
import { OscdFocusRing } from '../../focus/OscdFocusRing.js';

import { CSSResultOrNative, PropertyValues } from 'lit';

import { OutlinedSegmentedButton } from '@omicronenergy/oscd-material-web-base/labs/segmentedbutton/internal/outlined-segmented-button.js';
import { styles as outlinedStyles } from '@omicronenergy/oscd-material-web-base/labs/segmentedbutton/internal/outlined-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/labs/segmentedbutton/internal/shared-styles.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { noCheckmarkFixStyles } from './internal/no-checkmark-styles-fix.js';
declare global {
  interface HTMLElementTagNameMap {
    'oscd-outlined-segmented-button': OscdOutlinedSegmentedButton;
  }
}

/**
 * @tagname oscd-outlined-segmented-button
 * OscdOutlinedSegmentedButton is the custom element for the Material
 * Design outlined segmented button component.
 * @final
 * @suppress {visibility}
 */
export class OscdOutlinedSegmentedButton extends ScopedElementsMixin(
  OutlinedSegmentedButton,
) {
  static scopedElements = {
    'md-ripple': OscdRipple,
    'md-focus-ring': OscdFocusRing,
  };

  private computeHasIcon(): boolean {
    return this.querySelector('[slot="icon"]') !== null;
  }

  protected override willUpdate(changedProperties: PropertyValues<this>): void {
    this.hasIcon = this.computeHasIcon();
    super.willUpdate(changedProperties);
  }

  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    outlinedStyles,
    noCheckmarkFixStyles,
  ];
}
