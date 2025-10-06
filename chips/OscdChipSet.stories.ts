import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-chip-set.js';
import { OscdChipSet } from './OscdChipSet.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdChipSet>({
  tagName: 'oscd-chip-set',
});

export default {
  title: 'Chips / Chip Set',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
