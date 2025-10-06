import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-icon-button.js';
import { OscdIconButton } from './OscdIconButton.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdIconButton>({
  tagName: 'oscd-icon-button',
});

export default {
  title: 'Iconbuttons / Icon Button',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
