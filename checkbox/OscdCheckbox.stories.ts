import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-checkbox.js';
import { OscdCheckbox } from './OscdCheckbox.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdCheckbox>({
  tagName: 'oscd-checkbox',
});

export default {
  title: 'Checkboxs / Checkbox',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
