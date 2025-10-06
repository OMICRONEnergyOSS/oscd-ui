import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-elevated-button.js';
import { OscdElevatedButton } from './OscdElevatedButton.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdElevatedButton>({
  tagName: 'oscd-elevated-button',
});

export default {
  title: 'Buttons / Elevated Button',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
