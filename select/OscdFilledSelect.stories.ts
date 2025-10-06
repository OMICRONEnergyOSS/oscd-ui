import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-filled-select.js';
import { OscdFilledSelect } from './OscdFilledSelect.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdFilledSelect>({
  tagName: 'oscd-filled-select',
});

export default {
  title: 'Selects / Filled Select',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
