import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-navigation-bar.js';
import { OscdNavigationBar } from './OscdNavigationBar.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdNavigationBar>({
  tagName: 'oscd-navigation-bar',
});

export default {
  title: 'Labs / Navigationbar / Navigation Bar',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
