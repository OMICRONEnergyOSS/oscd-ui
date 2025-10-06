import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-navigation-tab.js';
import { OscdNavigationTab } from './OscdNavigationTab.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdNavigationTab>({
  tagName: 'oscd-navigation-tab',
});

export default {
  title: 'Labs / Navigationtab / Navigation Tab',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
