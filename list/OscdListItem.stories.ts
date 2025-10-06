import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-list-item.js';
import { OscdListItem } from './OscdListItem.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdListItem>({
  tagName: 'oscd-list-item',
});

export default {
  title: 'Lists / List Item',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
