import { html } from 'lit';
import type { StoryObj } from '@storybook/web-components-vite';
import { OscdFilledSelect } from './OscdFilledSelect.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import './oscd-filled-select.js';
import './oscd-select-option.js';

const { args, argTypes, meta, template } = getStorybookMeta<OscdFilledSelect>({
  tagName: 'oscd-filled-select',
});

export default {
  ...meta,
  title: 'Selects / Filled Select',
  tags: ['autodocs'],
  render: (argz: typeof args) =>
    template(
      argz,
      html`
        <oscd-select-option value="1">Option 1</oscd-select-option>
        <oscd-select-option value="2">Option 2</oscd-select-option>
      `,
    ),
};

export const Default: StoryObj = {
  argTypes,
  args,
};
