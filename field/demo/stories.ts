/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import './oscd-filled-field.js';
import './oscd-outlined-field.js';
import '../icon/icon.js';

import { MaterialStoryInit } from '../../utils/storybook/stories/material-collection.js';
import { css, html, nothing } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

/** Knob types for field stories. */
export interface StoryKnobs {
  label: string;
  'Supporting text': string;
  'Error text': string;
  disabled: boolean;
  error: boolean;
  focused: boolean;
  populated: boolean;
  required: boolean;
  noAsterisk: boolean;
  'Leading icon': boolean;
  'Trailing icon': boolean;
  resizable: boolean;
  count: number;
  max: number;
}

const START_CONTENT = html`<oscd-icon slot="start">search</oscd-icon>`;
const END_CONTENT = html`<oscd-icon slot="end">event</oscd-icon>`;

const styles = css`
  oscd-filled-field,
  oscd-outlined-field {
    width: 256px;
  }
`;

const filled: MaterialStoryInit<StoryKnobs> = {
  name: 'Filled',
  styles,
  render(knobs) {
    const {
      label,
      disabled,
      error,
      focused,
      noAsterisk,
      populated,
      required,
      resizable,
      count,
      max,
    } = knobs;
    const supportingText = knobs['Supporting text'];
    const errorText = knobs['Error text'];
    const hasStart = knobs['Leading icon'];
    const hasEnd = knobs['Trailing icon'];

    const content = resizable
      ? html`<textarea rows="1" ?disabled=${disabled}></textarea>`
      : html`<input ?disabled=${disabled} />`;

    const styles = { resize: resizable ? 'both' : null };
    return html`
      <oscd-filled-field
        style=${styleMap(styles)}
        .label=${label}
        ?disabled=${disabled}
        .error=${error}
        .focused=${focused}
        .hasStart=${hasStart}
        .hasEnd=${hasEnd}
        .noAsterisk=${noAsterisk}
        .populated=${populated}
        .required=${required}
        supporting-text=${supportingText}
        error-text=${errorText}
        count=${count}
        max=${max}
      >
        ${hasStart ? START_CONTENT : nothing} ${content}
        ${hasEnd ? END_CONTENT : nothing}
      </oscd-filled-field>
    `;
  },
};

const outlined: MaterialStoryInit<StoryKnobs> = {
  name: 'Outlined',
  styles,
  render(knobs) {
    const {
      label,
      disabled,
      error,
      focused,
      noAsterisk,
      populated,
      required,
      resizable,
      count,
      max,
    } = knobs;
    const supportingText = knobs['Supporting text'];
    const errorText = knobs['Error text'];
    const hasStart = knobs['Leading icon'];
    const hasEnd = knobs['Trailing icon'];
    const content = resizable
      ? html`<textarea
          rows="1"
          ?disabled=${disabled}
          aria-describedby="description"
        ></textarea>`
      : html`<input ?disabled=${disabled} aria-describedby="description" />`;

    const styles = { resize: resizable ? 'both' : null };
    return html`
      <oscd-outlined-field
        style=${styleMap(styles)}
        .label=${label}
        ?disabled=${disabled}
        .error=${error}
        .focused=${focused}
        .hasStart=${hasStart}
        .hasEnd=${hasEnd}
        .noAsterisk=${noAsterisk}
        .populated=${populated}
        .required=${required}
        supporting-text=${supportingText}
        error-text=${errorText}
        count=${count}
        max=${max}
      >
        <div id="description" slot="aria-describedby" hidden></div>
        ${hasStart ? START_CONTENT : nothing} ${content}
        ${hasEnd ? END_CONTENT : nothing}
      </oscd-outlined-field>
    `;
  },
};

/** Field stories. */
export const stories = [filled, outlined];
