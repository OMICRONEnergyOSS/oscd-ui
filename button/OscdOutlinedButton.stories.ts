import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-outlined-button.js';
import { OscdOutlinedButton } from './OscdOutlinedButton.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdOutlinedButton>({
  tagName: 'oscd-outlined-button',
});

export default {
  title: 'Buttons / Outlined Button',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
