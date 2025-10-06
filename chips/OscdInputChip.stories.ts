import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-input-chip.js';
import { OscdInputChip } from './OscdInputChip.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdInputChip>({
  tagName: 'oscd-input-chip',
});

export default {
  title: 'Chips / Input Chip',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
