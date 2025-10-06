import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-radio.js';
import { OscdRadio } from './OscdRadio.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import { html } from 'lit';

const { args, argTypes, meta, template } = getStorybookMeta<OscdRadio>({
  tagName: 'oscd-radio',
});

export default {
  ...meta,
  title: 'Radios / Radio',
  tags: ['autodocs'],
  render: (argz: typeof args) => {
    return html`
      <style>
        fieldset {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px;
        }

        fieldset > div {
          display: flex;
          flex-direction: row;
          gap: 16px;
        }
      </style>
      <fieldset role="radiogroup" aria-labelledby="group-title">
        <legend>Make your choice:</legend>
        <div>
          ${template({ ...argz, 'aria-label': 'First radio', value: '1' })}
          <label for="first-radio">Have your cake</label>
        </div>
        <div>
          ${template({ ...argz, 'aria-label': 'Second radio', value: '2' })}
          <label for="second-radio">Or eat it</label>
        </div>
      </fieldset>
    `;
  },
};

export const Default: StoryObj = {
  argTypes,
  args: { ...args, name: 'example', value: 'option1' },
};
