import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-divider.js';
import { OscdDivider } from './OscdDivider.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdDivider>({
  tagName: 'oscd-divider',
});

export default {
  title: 'Dividers / Divider',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
