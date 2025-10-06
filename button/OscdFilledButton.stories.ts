import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-filled-button.js';
import { OscdFilledButton } from './OscdFilledButton.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdFilledButton>({
  tagName: 'oscd-filled-button',
});

export default {
  title: 'Buttons / Filled Button',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
