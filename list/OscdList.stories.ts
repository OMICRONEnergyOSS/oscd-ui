import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-list.js';
import { OscdList } from './OscdList.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdList>({
  tagName: 'oscd-list',
});

export default {
  title: 'Lists / List',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
