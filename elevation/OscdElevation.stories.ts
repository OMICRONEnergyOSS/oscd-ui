import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-elevation.js';
import { OscdElevation } from './OscdElevation.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdElevation>({
  tagName: 'oscd-elevation',
});

export default {
  title: 'Elevations / Elevation',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
