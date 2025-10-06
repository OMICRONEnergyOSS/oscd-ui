import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-filled-tonal-button.js';
import { OscdFilledTonalButton } from './OscdFilledTonalButton.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdFilledTonalButton>({
  tagName: 'oscd-filled-tonal-button',
});

export default {
  title: 'Buttons / Filled Tonal Button',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
