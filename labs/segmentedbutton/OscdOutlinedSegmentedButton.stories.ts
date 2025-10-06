import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-outlined-segmented-button.js';
import { OscdOutlinedSegmentedButton } from './OscdOutlinedSegmentedButton.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdOutlinedSegmentedButton>({
  tagName: 'oscd-outlined-segmented-button',
});

export default {
  title: 'Labs / Segmentedbutton / Outlined Segmented Button',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
