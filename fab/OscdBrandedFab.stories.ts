import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-branded-fab.js';
import { OscdBrandedFab } from './OscdBrandedFab.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdBrandedFab>({
  tagName: 'oscd-branded-fab',
});

export default {
  title: 'Fabs / Branded Fab',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
