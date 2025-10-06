import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-linear-progress.js';
import { OscdLinearProgress } from './OscdLinearProgress.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdLinearProgress>({
  tagName: 'oscd-linear-progress',
});

export default {
  title: 'Progress / Linear Progress',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
