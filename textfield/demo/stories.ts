/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '../button/outlined-button.js';
import '../button/text-button.js';
import '../icon/icon.js';
import '../iconbutton/icon-button.js';
import '../filled-text-field.js';
import '../outlined-text-field.js';

import { MaterialStoryInit } from '../../utils/storybook/stories/material-collection.js';
import { OscdFilledTextField } from '../oscd-filled-text-field.js';
import { css, html, nothing } from 'lit';

/** Knob types for Textfield stories. */
export interface StoryKnobs {
  label: string;
  placeholder: string;
  disabled: boolean;
  prefixText: string;
  suffixText: string;
  supportingText: string;
}

// Set min-height for resizable textareas
const styles = css`
  .row {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  oscd-filled-text-field,
  oscd-outlined-text-field {
    width: 200px;
  }

  [type='textarea'] {
    min-height: 56px;
  }

  [type='textarea'][supporting-text] {
    min-height: 76px;
  }
`;

const textfields: MaterialStoryInit<StoryKnobs> = {
  name: 'Text fields',
  styles,
  render(knobs) {
    return html`
      <div class="row">
        <oscd-filled-text-field
          ?disabled=${knobs.disabled}
          label=${knobs.label || nothing}
          placeholder=${knobs.placeholder || nothing}
          prefix-text=${knobs.prefixText || nothing}
          suffix-text=${knobs.suffixText || nothing}
          supporting-text=${knobs.supportingText || nothing}
        ></oscd-filled-text-field>

        <oscd-outlined-text-field
          ?disabled=${knobs.disabled}
          label=${knobs.label || nothing}
          placeholder=${knobs.placeholder || nothing}
          prefix-text=${knobs.prefixText || nothing}
          suffix-text=${knobs.suffixText || nothing}
          supporting-text=${knobs.supportingText || nothing}
        ></oscd-outlined-text-field>
      </div>
    `;
  },
};

const textareas: MaterialStoryInit<StoryKnobs> = {
  name: 'Text areas',
  styles,
  render(knobs) {
    return html`
      <div class="row">
        <oscd-filled-text-field
          type="textarea"
          ?disabled=${knobs.disabled}
          label=${knobs.label || nothing}
          placeholder=${knobs.placeholder || nothing}
          supporting-text=${knobs.supportingText || nothing}
        ></oscd-filled-text-field>

        <oscd-outlined-text-field
          type="textarea"
          ?disabled=${knobs.disabled}
          label=${knobs.label || nothing}
          placeholder=${knobs.placeholder || nothing}
          supporting-text=${knobs.supportingText || nothing}
        ></oscd-outlined-text-field>
      </div>
    `;
  },
};

const icons: MaterialStoryInit<StoryKnobs> = {
  name: 'Icons',
  styles,
  render(knobs) {
    return html`
      <div class="row">
        <oscd-filled-text-field
          ?disabled=${knobs.disabled}
          label=${knobs.label || nothing}
          placeholder=${knobs.placeholder || nothing}
          value="Value"
          prefix-text=${knobs.prefixText || nothing}
          suffix-text=${knobs.suffixText || nothing}
          supporting-text=${knobs.supportingText || nothing}
        >
          <oscd-icon slot="leading-icon">search</oscd-icon>
          <oscd-icon-button
            aria-label="Clear input"
            ?disabled=${knobs.disabled}
            slot="trailing-icon"
            @click=${clearInput}
          >
            <oscd-icon>clear</oscd-icon>
          </oscd-icon-button>
        </oscd-filled-text-field>

        <oscd-outlined-text-field
          ?disabled=${knobs.disabled}
          label=${knobs.label || nothing}
          placeholder=${knobs.placeholder || nothing}
          value="Value"
          prefix-text=${knobs.prefixText || nothing}
          suffix-text=${knobs.suffixText || nothing}
          supporting-text=${knobs.supportingText || nothing}
        >
          <oscd-icon slot="leading-icon">search</oscd-icon>
          <oscd-icon-button
            aria-label="Clear input"
            ?disabled=${knobs.disabled}
            slot="trailing-icon"
            @click=${clearInput}
          >
            <oscd-icon>clear</oscd-icon>
          </oscd-icon-button>
        </oscd-outlined-text-field>
      </div>
    `;
  },
};

const validation: MaterialStoryInit<StoryKnobs> = {
  name: 'Validation',
  styles,
  render(knobs) {
    return html`
      <div class="row">
        <oscd-outlined-text-field
          ?disabled=${knobs.disabled}
          label="Required"
          value="Value"
          required
          supporting-text="* this field is required"
          @change=${reportValidity}
        ></oscd-outlined-text-field>

        <oscd-outlined-text-field
          ?disabled=${knobs.disabled}
          type="number"
          label="Numeric"
          min="1"
          max="10"
          supporting-text="Enter a number between 1 and 10"
          @change=${reportValidity}
        ></oscd-outlined-text-field>

        <oscd-outlined-text-field
          ?disabled=${knobs.disabled}
          label="Length"
          minlength="3"
          maxlength="10"
          supporting-text="3 to 10 characters"
          @change=${reportValidity}
        ></oscd-outlined-text-field>

        <oscd-outlined-text-field
          style="text-align: end"
          ?disabled=${knobs.disabled}
          label="Pattern"
          pattern="[a-zA-Z]+"
          placeholder="username"
          suffix-text="@gmail.com"
          supporting-text="Characters only"
          @change=${reportValidity}
        ></oscd-outlined-text-field>
      </div>
    `;
  },
};

const forms: MaterialStoryInit<StoryKnobs> = {
  name: 'Forms',
  styles: [
    styles,
    css`
      .buttons {
        justify-content: flex-end;
        padding: 16px;
      }
    `,
  ],
  render(knobs) {
    return html`
      <form @submit=${alertValues}>
        <div class="row">
          <oscd-filled-text-field
            ?disabled=${knobs.disabled}
            label="First name"
            name="first-name"
            required
            no-asterisk
            autocomplete="given-name"
          ></oscd-filled-text-field>
          <oscd-filled-text-field
            ?disabled=${knobs.disabled}
            label="Last name"
            name="last-name"
            required
            no-asterisk
            autocomplete="family-name"
          ></oscd-filled-text-field>
        </div>
        <div class="row buttons">
          <oscd-text-button type="reset">Reset</oscd-text-button>
          <oscd-outlined-button type="submit">Submit</oscd-outlined-button>
        </div>
      </form>
    `;
  },
};

async function reportValidity(event: Event) {
  const textField = event.target as OscdFilledTextField;
  textField.reportValidity();
}

function clearInput(event: Event) {
  const iconButton = event.target as HTMLElement;
  const textField = iconButton.parentElement as OscdFilledTextField;
  iconButton.blur();
  textField.value = '';
  textField.focus();
}

function alertValues(event: SubmitEvent) {
  event.preventDefault();
  const data = new FormData(event.target as HTMLFormElement);
  const first = data.get('first-name') || '<empty>';
  const last = data.get('last-name') || '<empty>';
  alert(`First name: ${first}, Last name: ${last}`);
}

/** Textfield stories. */
export const stories = [textfields, textareas, icons, validation, forms];
