/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { html, LitElement } from 'lit';

/**
 * A card component.
 */
export class Card extends LitElement {
  // eslint-disable-next-line class-methods-use-this
  protected override render() {
    return html`
      <oscd-elevation part="elevation"></oscd-elevation>
      <div class="background"></div>
      <slot></slot>
      <div class="outline"></div>
    `;
  }
}
