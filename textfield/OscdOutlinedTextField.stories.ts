import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-outlined-text-field.js';
import { OscdOutlinedTextField } from './OscdOutlinedTextField.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdOutlinedTextField>({
  tagName: 'oscd-outlined-text-field',
});

export default {
  title: 'Textfields / Outlined Text Field',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
