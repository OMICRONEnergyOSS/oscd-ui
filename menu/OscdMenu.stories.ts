import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-menu.js';
import { OscdMenu } from './OscdMenu.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdMenu>({
  tagName: 'oscd-menu',
});

export default {
  title: 'Menus / Menu',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
