/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '../../divider/divider.js';
import '../../icon/icon.js';
import '../oscd-list.js';
import '../list-item.js';

import { css, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { MaterialStoryInit } from 'utils/storybook/stories/material-collection';

/** Knob types for list stories. */
export interface StoryKnobs {
  disabled: boolean;
  overline: string;
  trailingSupportingText: string;
  leadingIcon: boolean;
  trailingIcon: boolean;
}

const styles = css`
  oscd-list {
    border-radius: 8px;
    outline: 1px solid var(--md-sys-color-outline);
    max-width: 360px;
    overflow: hidden;
    width: 100%;
  }
`;

const standard: MaterialStoryInit<StoryKnobs> = {
  name: 'List',
  styles,
  render(knobs) {
    return html`
      <oscd-list aria-label="Static example">
        <oscd-list-item ?disabled=${knobs.disabled}>
          Single line item ${getKnobContent(knobs)}
        </oscd-list-item>

        <oscd-list-item ?disabled=${knobs.disabled}>
          Two line item
          <div slot="supporting-text">Supporting text</div>
          ${getKnobContent(knobs)}
        </oscd-list-item>

        <oscd-list-item ?disabled=${knobs.disabled}>
          Three line item
          <div slot="supporting-text">
            <div>Second line text</div>
            <div>Third line text</div>
          </div>
          ${getKnobContent(knobs, /* threeLines */ true)}
        </oscd-list-item>
      </oscd-list>
    `;
  },
};

const interactive: MaterialStoryInit<StoryKnobs> = {
  name: 'Interactive list',
  styles,
  render(knobs) {
    const knobsNoTrailing = { ...knobs, trailingIcon: false };
    return html`
      <oscd-list aria-label="Interactive example">
        <oscd-list-item
          ?disabled=${knobs.disabled}
          type="link"
          href="https://google.com"
          target="_blank"
        >
          Link item
          <oscd-icon slot="end">link</oscd-icon>
          ${getKnobContent(knobsNoTrailing)}
        </oscd-list-item>

        <oscd-list-item type="button" ?disabled=${knobs.disabled}>
          Button item ${getKnobContent(knobs)}
        </oscd-list-item>

        <oscd-list-item ?disabled=${knobs.disabled}>
          Non-interactive item ${knobs.disabled ? '(disabled)' : nothing}
          ${getKnobContent(knobs)}
        </oscd-list-item>
      </oscd-list>
    `;
  },
};

function getKnobContent(knobs: StoryKnobs, threeLines = false) {
  const overline = knobs.overline
    ? html`<div slot="overline">${knobs.overline}</div>`
    : nothing;

  const classes = {
    'align-start': threeLines,
  };

  const trailingText = knobs.trailingSupportingText
    ? html`<div class=${classMap(classes)} slot="trailing-supporting-text">
        ${knobs.trailingSupportingText}
      </div>`
    : nothing;

  const leadingIcon = knobs.leadingIcon
    ? html`<oscd-icon class=${classMap(classes)} slot="start">event</oscd-icon>`
    : nothing;

  const trailingIcon = knobs.trailingIcon
    ? html`<oscd-icon class=${classMap(classes)} slot="end">star</oscd-icon>`
    : nothing;

  return [overline, trailingText, leadingIcon, trailingIcon];
}

/** List stories. */
export const stories = [standard, interactive];
