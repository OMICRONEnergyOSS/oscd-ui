/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '@material/web/radio/radio.js';

import { css, html } from 'lit';
import {
  labelStyles,
  MaterialStoryInit,
} from 'utils/storybook/stories/material-collection.js';

/** Knob types for radio stories. */
export interface StoryKnobs {
  disabled: boolean;
}

const radio: MaterialStoryInit<StoryKnobs> = {
  name: 'Radios',
  render({ disabled }) {
    return html`
      <div role="radiogroup" aria-label="An example group of radio buttons">
        <oscd-radio
          aria-label="First radio"
          name="group"
          touch-target="wrapper"
          ?disabled=${disabled}
        >
        </oscd-radio>
        <oscd-radio
          aria-label="Second radio"
          name="group"
          touch-target="wrapper"
          ?disabled=${disabled}
        >
        </oscd-radio>
        <oscd-radio
          aria-label="Third radio"
          name="group"
          touch-target="wrapper"
          ?disabled=${disabled}
        >
        </oscd-radio>
      </div>
    `;
  },
};

const withLabels: MaterialStoryInit<StoryKnobs> = {
  name: 'With labels',
  styles: [
    labelStyles,
    css`
      .column {
        display: flex;
        flex-direction: column;
      }

      .radio-label {
        display: flex;
        align-items: center;
      }
    `,
  ],
  render({ disabled }) {
    return html`
      <div class="column" role="radiogroup" aria-label="Animals">
        <div class="radio-label">
          <oscd-radio
            aria-label="Birds"
            id="birds-radio"
            name="with-labels"
            touch-target="wrapper"
            ?disabled=${disabled}
          >
          </oscd-radio>
          <label for="birds-radio">Birds</label>
        </div>
        <div class="radio-label">
          <oscd-radio
            aria-label="Cats"
            id="cats-radio"
            name="with-labels"
            touch-target="wrapper"
            ?disabled=${disabled}
          >
          </oscd-radio>
          <label for="cats-radio">Cats</label>
        </div>
        <div class="radio-label">
          <oscd-radio
            aria-label="Dogs"
            id="dogs-radio"
            name="with-labels"
            touch-target="wrapper"
            ?disabled=${disabled}
          >
          </oscd-radio>
          <label for="dogs-radio">Dogs</label>
        </div>
      </div>
    `;
  },
};

/** Radio stories. */
export const stories = [radio, withLabels];
