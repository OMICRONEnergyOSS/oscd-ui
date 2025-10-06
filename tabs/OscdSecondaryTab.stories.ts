import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-secondary-tab.js';
import { OscdSecondaryTab } from './OscdSecondaryTab.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSecondaryTab>({
  tagName: 'oscd-secondary-tab',
});

export default {
  title: 'Tabs / Secondary Tab',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
