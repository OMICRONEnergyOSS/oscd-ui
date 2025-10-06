import { html, nothing } from 'lit';
import { StorybookOverrides } from './story-overrides.js';
import { getStorybookHelpers } from '../getStorybookHelpers.js';
import { OscdOutlinedField } from '@/field/OscdOutlinedField.js';
import { OscdFilledField } from '@/field/oscd-filled-field.js';
import '../../../icon/oscd-icon.js';

const START_CONTENT = html`<oscd-icon slot="start">search</oscd-icon>`;
const END_CONTENT = html`<oscd-icon slot="end">event</oscd-icon>`;

export const textfieldOverrides: StorybookOverrides = {
  'oscd-outlined-field': {
    args: {
      label: 'Outlined Field',
      placeholder: 'Enter text',
    },
    meta: {
      render: argz => {
        const { template } = getStorybookHelpers<OscdOutlinedField>(
          'oscd-outlined-field',
        );
        const content = argz.resizable
          ? html`<textarea rows="1" ?disabled=${argz.disabled}></textarea>`
          : html`<input ?disabled=${argz.disabled} geebag />`;
        return template(
          argz,
          html` ${argz.hasStart ? START_CONTENT : nothing} ${content}
          ${argz.hasEnd ? END_CONTENT : nothing}`,
        );
      },
    },
  },
  'oscd-filled-field': {
    args: {
      label: 'Filled Field',
      placeholder: 'Enter text',
    },
    meta: {
      render: argz => {
        const { template } =
          getStorybookHelpers<OscdFilledField>('oscd-filled-field');
        const content = argz.resizable
          ? html`<textarea rows="1" ?disabled=${argz.disabled}></textarea>`
          : html`<input ?disabled=${argz.disabled} />`;
        return template(
          argz,
          html` ${argz.hasStart ? START_CONTENT : nothing} ${content}
          ${argz.hasEnd ? END_CONTENT : nothing}`,
        );
      },
    },
  },

  'oscd-outlined-text-field': {
    args: {
      label: 'Outlined Text Field',
      placeholder: 'Enter text',
    },
    argTypes: {
      type: {
        options: ['text', 'email', 'password', 'tel', 'url'],
        control: { type: 'select' },
      },
    },
  },
};
