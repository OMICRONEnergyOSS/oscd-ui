import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-radio.js';
import { OscdRadio } from './OscdRadio.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdRadio>({
  tagName: 'oscd-radio',
});

export default {
  title: 'Radios / Radio',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
