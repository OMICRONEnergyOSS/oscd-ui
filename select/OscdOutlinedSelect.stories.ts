import { html } from 'lit';
import type { StoryObj } from '@storybook/web-components-vite';
import { OscdOutlinedSelect } from './OscdOutlinedSelect.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import './oscd-outlined-select.js';
import './oscd-select-option.js';

const { args, argTypes, meta, template } = getStorybookMeta<OscdOutlinedSelect>(
  {
    tagName: 'oscd-outlined-select',
  },
);

export default {
  ...meta,
  title: 'Selects / Outlined Select',
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
