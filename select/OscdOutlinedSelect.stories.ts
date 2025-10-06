import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-outlined-select.js';
import { OscdOutlinedSelect } from './OscdOutlinedSelect.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdOutlinedSelect>({
  tagName: 'oscd-outlined-select',
});

export default {
  title: 'Selects / Outlined Select',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
