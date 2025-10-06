import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-ripple.js';
import { OscdRipple } from './OscdRipple.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdRipple>({
  tagName: 'oscd-ripple',
});

export default {
  title: 'Ripples / Ripple',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
