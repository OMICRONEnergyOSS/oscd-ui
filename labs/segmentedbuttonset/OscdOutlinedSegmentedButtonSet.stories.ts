import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-outlined-segmented-button-set.js';
import { OscdOutlinedSegmentedButtonSet } from './OscdOutlinedSegmentedButtonSet.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } =
  getStorybookMeta<OscdOutlinedSegmentedButtonSet>({
    tagName: 'oscd-outlined-segmented-button-set',
  });

export default {
  title: 'Labs / Segmentedbuttonset / Outlined Segmented Button Set',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
