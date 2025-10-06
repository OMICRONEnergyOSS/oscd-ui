import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-primary-tab.js';
import { OscdPrimaryTab } from './OscdPrimaryTab.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdPrimaryTab>({
  tagName: 'oscd-primary-tab',
});

export default {
  title: 'Tabs / Primary Tab',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
