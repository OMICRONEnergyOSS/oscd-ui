/* eslint-disable lit-a11y/aria-attrs */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '../icon/icon.js';
import './iconbutton/filled-icon-button.js';
import './iconbutton/filled-tonal-icon-button.js';
import './iconbutton/icon-button.js';
import './iconbutton/outlined-icon-button.js';

import { MaterialStoryInit } from 'utils/storybook/stories/material-collection';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
import { css, html } from 'lit';

/** Knob types for icon button stories. */
export interface StoryKnobs {
  icon: string;
  selectedIcon: string;
  disabled: boolean;
  softDisabled: boolean;
}

const styles = [
  typescaleStyles,
  css`
    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .row {
      display: flex;
      gap: 32px;
    }

    p {
      color: var(--oscd-sys-color-on-surface);
    }
  `,
];

const buttons: MaterialStoryInit<StoryKnobs> = {
  name: 'Icon button variants',
  styles,
  render({ icon, disabled, softDisabled }) {
    return html`
      <div class="row oscd-typescale-body-medium">
        <div class="column">
          <p>Standard</p>
          <oscd-icon-button
            aria-label="Open settings"
            ?disabled=${disabled}
            ?soft-disabled=${softDisabled}
          >
            <oscd-icon>${icon || 'settings'}</oscd-icon>
          </oscd-icon-button>
        </div>

        <div class="column">
          <p>Outlined</p>
          <oscd-outlined-icon-button
            aria-label="Search"
            ?disabled=${disabled}
            ?soft-disabled=${softDisabled}
          >
            <oscd-icon>${icon || 'search'}</oscd-icon>
          </oscd-outlined-icon-button>
        </div>

        <div class="column">
          <p>Filled</p>
          <oscd-filled-icon-button
            aria-label="Complete"
            ?disabled=${disabled}
            ?soft-disabled=${softDisabled}
          >
            <oscd-icon>${icon || 'done'}</oscd-icon>
          </oscd-filled-icon-button>
        </div>

        <div class="column">
          <p>Filled tonal</p>
          <oscd-filled-tonal-icon-button
            aria-label="Add new"
            ?disabled=${disabled}
            ?soft-disabled=${softDisabled}
          >
            <oscd-icon>${icon || 'add'}</oscd-icon>
          </oscd-filled-tonal-icon-button>
        </div>
      </div>
    `;
  },
};

const toggles: MaterialStoryInit<StoryKnobs> = {
  name: 'Toggle icon buttons',
  styles,
  render({ icon, selectedIcon, disabled, softDisabled }) {
    return html`
      <div class="row">
        <div class="column">
          <p>Standard</p>
          <oscd-icon-button
            aria-label="Show password"
            aria-label-selected="Hide password"
            toggle
            ?disabled=${disabled}
            ?soft-disabled=${softDisabled}
          >
            <oscd-icon>${icon || 'visibility'}</oscd-icon>
            <oscd-icon slot="selected">
              ${selectedIcon || 'visibility_off'}
            </oscd-icon>
          </oscd-icon-button>
        </div>

        <div class="column">
          <p>Outlined</p>
          <oscd-outlined-icon-button
            aria-label="Play"
            aria-label-selected="Pause"
            toggle
            ?disabled=${disabled}
            ?soft-disabled=${softDisabled}
          >
            <oscd-icon>${icon || 'play_arrow'}</oscd-icon>
            <oscd-icon slot="selected">${selectedIcon || 'pause'}</oscd-icon>
          </oscd-outlined-icon-button>
        </div>

        <div class="column">
          <p>Filled</p>
          <oscd-filled-icon-button
            aria-label="Show more"
            aria-label-selected="Show less"
            toggle
            ?disabled=${disabled}
            ?soft-disabled=${softDisabled}
          >
            <oscd-icon>${icon || 'expand_more'}</oscd-icon>
            <oscd-icon slot="selected"
              >${selectedIcon || 'expand_less'}</oscd-icon
            >
          </oscd-filled-icon-button>
        </div>

        <div class="column">
          <p>Filled tonal</p>
          <oscd-filled-tonal-icon-button
            aria-label="Open menu"
            aria-label-selected="Close menu"
            toggle
            ?disabled=${disabled}
            ?soft-disabled=${softDisabled}
          >
            <oscd-icon>${icon || 'menu'}</oscd-icon>
            <oscd-icon slot="selected">${selectedIcon || 'close'}</oscd-icon>
          </oscd-filled-tonal-icon-button>
        </div>
      </div>
    `;
  },
};

const links: MaterialStoryInit<StoryKnobs> = {
  name: 'Links',
  styles,
  render({ icon }) {
    return html`
      <div class="row">
        <div class="column">
          <p>Standard</p>
          <oscd-icon-button
            aria-label="Go home"
            href="https://google.com"
            target="_blank"
          >
            <oscd-icon>${icon || 'home'}</oscd-icon>
          </oscd-icon-button>
        </div>

        <div class="column">
          <p>Outlined</p>
          <oscd-outlined-icon-button
            aria-label="Open new tab"
            href="https://google.com"
            target="_blank"
          >
            <oscd-icon>${icon || 'open_in_new'}</oscd-icon>
          </oscd-outlined-icon-button>
        </div>

        <div class="column">
          <p>Filled</p>
          <oscd-filled-icon-button
            aria-label="Download Google"
            href="https://google.com"
            target="_blank"
          >
            <oscd-icon>${icon || 'download'}</oscd-icon>
          </oscd-filled-icon-button>
        </div>

        <div class="column">
          <p>Filled tonal</p>
          <oscd-filled-tonal-icon-button
            aria-label="Logout"
            href="https://google.com"
            target="_blank"
          >
            <oscd-icon>${icon || 'logout'}</oscd-icon>
          </oscd-filled-tonal-icon-button>
        </div>
      </div>
    `;
  },
};

/** Icon button stories. */
export const stories = [buttons, toggles, links];
