import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-sub-menu.js';
import { OscdSubMenu } from './OscdSubMenu.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSubMenu>({
  tagName: 'oscd-sub-menu',
});

export default {
  title: 'Menus / Sub Menu',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
