import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-fab.js';
import { OscdFab } from './OscdFab.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdFab>({
  tagName: 'oscd-fab',
});

export default {
  title: 'Fabs / Fab',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
