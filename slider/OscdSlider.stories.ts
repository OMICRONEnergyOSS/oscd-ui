import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-slider.js';
import { OscdSlider } from './OscdSlider.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSlider>({
  tagName: 'oscd-slider',
});

export default {
  title: 'Sliders / Slider',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
