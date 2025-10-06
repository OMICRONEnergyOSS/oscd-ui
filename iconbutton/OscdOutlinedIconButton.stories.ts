import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-outlined-icon-button.js';
import { OscdOutlinedIconButton } from './OscdOutlinedIconButton.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdOutlinedIconButton>({
  tagName: 'oscd-outlined-icon-button',
});

export default {
  title: 'Iconbuttons / Outlined Icon Button',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
