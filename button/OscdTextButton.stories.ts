import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-text-button.js';
import { OscdTextButton } from './OscdTextButton.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdTextButton>({
  tagName: 'oscd-text-button',
});

export default {
  title: 'Buttons / Text Button',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
