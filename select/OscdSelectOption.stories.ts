import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-select-option.js';
import { OscdSelectOption } from './OscdSelectOption.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSelectOption>({
  tagName: 'oscd-select-option',
});

export default {
  title: 'Selects / Select Option',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
