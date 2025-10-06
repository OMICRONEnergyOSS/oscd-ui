import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-circular-progress.js';
import { OscdCircularProgress } from './OscdCircularProgress.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdCircularProgress>({
  tagName: 'oscd-circular-progress',
});

export default {
  ...meta,
  title: 'Progress / Circular Progress',
  tags: ['autodocs'],
};

export const Default: StoryObj = {
  argTypes,
  args: { ...args, indeterminate: true, value: 5, max: 10, 'four-color': true },
};
