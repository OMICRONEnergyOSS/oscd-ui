import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-filled-icon-button.js';
import { OscdFilledIconButton } from './OscdFilledIconButton.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdFilledIconButton>({
  tagName: 'oscd-filled-icon-button',
});

export default {
  title: 'Iconbuttons / Filled Icon Button',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
