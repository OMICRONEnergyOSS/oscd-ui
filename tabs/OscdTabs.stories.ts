import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-tabs.js';
import { OscdTabs } from './OscdTabs.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdTabs>({
  tagName: 'oscd-tabs',
});

export default {
  title: 'Tabs / Tabs',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
