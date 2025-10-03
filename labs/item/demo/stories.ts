/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '../../icon/oscd-icon.js';
import '../oscd-item.js';

import { MaterialStoryInit } from 'utils/storybook/stories/material-collection.js';
import { css, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

/** Knob types for item stories. */
export interface StoryKnobs {
  overline: string;
  trailingSupportingText: string;
  leadingIcon: boolean;
  trailingIcon: boolean;
}

const styles = css`
  /* Use this CSS to prevent lines from wrapping */
  .nowrap {
    white-space: nowrap;
  }

  /* Use this CSS on items to limit the number of wrapping lines */
  .clamp-lines {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  /* Use this on start/end content when the item requires it,
    typically 3+ line height items) */
  .align-start {
    align-self: flex-start;
    /* Optional, some items line icons and text should visually appear 16px from
       the top. Others, like interactive controls, should hug the top at 12px */
    padding-top: 4px;
  }

  .container {
    align-items: flex-start;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }

  oscd-item {
    border-radius: 16px;
    outline: 1px solid var(--oscd-sys-color-outline);
    width: 300px;
  }
`;

const LOREM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum rhoncus est volutpat venenatis.';

const items: MaterialStoryInit<StoryKnobs> = {
  name: 'Items',
  styles,
  render(knobs) {
    return html`
      <div class="container">
        <oscd-item> Single line item ${getKnobContent(knobs)} </oscd-item>

        <oscd-item>
          Two line item
          <div slot="supporting-text">Supporting text</div>
          ${getKnobContent(knobs)}
        </oscd-item>

        <oscd-item>
          Three line item
          <div slot="supporting-text">
            <div>Second line text</div>
            <div>Third line text</div>
          </div>
          ${getKnobContent(knobs, /* threeLines */ true)}
        </oscd-item>
      </div>
    `;
  },
};

const longText: MaterialStoryInit<StoryKnobs> = {
  name: 'Items with long text',
  styles,
  render(knobs) {
    return html`
      <div class="container">
        <oscd-item class="nowrap">
          Item with a truncated headline and supporting text.
          <div slot="supporting-text">Supporting text. ${LOREM_IPSUM}</div>
          ${getKnobContent(knobs)}
        </oscd-item>

        <oscd-item>
          Item with clamped lines
          <div slot="supporting-text" class="clamp-lines">
            Supporting text that wraps up to two lines. ${LOREM_IPSUM}
          </div>
          ${getKnobContent(knobs, /* threeLines */ true)}
        </oscd-item>

        <oscd-item>
          Item that always shows long wrapping text.
          <div slot="supporting-text">Supporting text. ${LOREM_IPSUM}</div>
          ${getKnobContent(knobs, /* threeLines */ true)}
        </oscd-item>
      </div>
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

/** Item stories. */
export const stories = [items, longText];
