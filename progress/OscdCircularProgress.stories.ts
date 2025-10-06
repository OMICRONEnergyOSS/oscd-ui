import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-circular-progress.js';
import { OscdCircularProgress } from './OscdCircularProgress.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdCircularProgress>({
  tagName: 'oscd-circular-progress',
});

export default {
  title: 'Progress / Circular Progress',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
