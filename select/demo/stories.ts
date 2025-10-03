/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '../icon/icon.js';
import '../select/filled-select.js';
import '../select/outlined-select.js';
import '../select/select-option.js';

import { MaterialStoryInit } from '../../utils/storybook/stories/material-collection.js';
import { html, nothing } from 'lit';

/** Knob types for select stories. */
export interface StoryKnobs {
  'oscd-select': void;
  label: string;
  typeaheadDelay: number;
  quick: boolean;
  required: boolean;
  noAsterisk: boolean;
  disabled: boolean;
  errorText: string;
  supportingText: string;
  error: boolean;
  clampMenuWidth: boolean;
  menuAlign: 'start' | 'end' | undefined;
  menuPositioning: 'absolute' | 'fixed' | 'popover' | undefined;

  'oscd-select Slots': void;
  'slot=leading-icon': string;
  'slot=trailing-icon': string;
}

const selects: MaterialStoryInit<StoryKnobs> = {
  name: 'Selects',
  render(knobs) {
    return html`
      <div style="display: flex; gap: 16px;">
        <oscd-filled-select
          .label=${knobs.label}
          .quick=${knobs.quick}
          .required=${knobs.required}
          .noAsterisk=${knobs.noAsterisk}
          .disabled=${knobs.disabled}
          .errorText=${knobs.errorText}
          .supportingText=${knobs.supportingText}
          .clampMenuWidth=${knobs.clampMenuWidth}
          .menuAlign=${knobs.menuAlign!}
          .menuPositioning=${knobs.menuPositioning!}
          .typeaheadDelay=${knobs.typeaheadDelay}
          .error=${knobs.error}
        >
          ${renderIcon(knobs['slot=leading-icon'], 'leading-icon')}
          ${renderIcon(knobs['slot=trailing-icon'], 'trailing-icon')}
          ${renderItems()}
        </oscd-filled-select>

        <oscd-outlined-select
          .label=${knobs.label}
          .quick=${knobs.quick}
          .required=${knobs.required}
          .noAsterisk=${knobs.noAsterisk}
          .disabled=${knobs.disabled}
          .errorText=${knobs.errorText}
          .supportingText=${knobs.supportingText}
          .clampMenuWidth=${knobs.clampMenuWidth}
          .menuAlign=${knobs.menuAlign!}
          .menuPositioning=${knobs.menuPositioning!}
          .typeaheadDelay=${knobs.typeaheadDelay}
          .error=${knobs.error}
        >
          ${renderIcon(knobs['slot=leading-icon'], 'leading-icon')}
          ${renderIcon(knobs['slot=trailing-icon'], 'trailing-icon')}
          ${renderItems()}
        </oscd-outlined-select>
      </div>
    `;
  },
};

function renderIcon(iconName: string, slot: 'leading-icon' | 'trailing-icon') {
  return iconName
    ? html`<oscd-icon slot=${slot}><span>${iconName}</span></oscd-icon>`
    : nothing;
}

function renderItems() {
  return html` <oscd-select-option
      aria-label="blank"
      value=""
    ></oscd-select-option>
    <oscd-select-option selected value="apple">
      <div slot="headline">Apple</div>
    </oscd-select-option>
    <oscd-select-option value="apricot">
      <div slot="headline">Apricot</div>
    </oscd-select-option>
    <oscd-select-option value="apricot">
      <div slot="headline">Apricots</div>
    </oscd-select-option>
    <oscd-select-option value="avocado">
      <div slot="headline">Avocado</div>
    </oscd-select-option>
    <oscd-select-option value="green_apple">
      <div slot="headline">Green Apple</div>
    </oscd-select-option>
    <oscd-select-option value="green_grapes">
      <div slot="headline">Green Grapes</div>
    </oscd-select-option>
    <oscd-select-option value="olive">
      <div slot="headline">Olive</div>
    </oscd-select-option>
    <oscd-select-option value="orange">
      <div slot="headline">Orange</div>
    </oscd-select-option>`;
}

/** Select stories. */
export const stories = [selects];
