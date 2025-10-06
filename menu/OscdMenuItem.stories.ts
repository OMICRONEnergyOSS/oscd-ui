import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-menu-item.js';
import { OscdMenuItem } from './OscdMenuItem.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdMenuItem>({
  tagName: 'oscd-menu-item',
});

export default {
  title: 'Menus / Menu Item',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
