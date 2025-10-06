import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-item.js';
import { OscdItem } from './OscdItem.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdItem>({
  tagName: 'oscd-item',
});

export default {
  title: 'Labs / Item / Item',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
