import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-filter-chip.js';
import { OscdFilterChip } from './OscdFilterChip.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdFilterChip>({
  tagName: 'oscd-filter-chip',
});

export default {
  title: 'Chips / Filter Chip',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
