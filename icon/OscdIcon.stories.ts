import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-icon.js';
import { OscdIcon } from './OscdIcon.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdIcon>({
  tagName: 'oscd-icon',
});

export default {
  title: 'Icons / Icon',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
