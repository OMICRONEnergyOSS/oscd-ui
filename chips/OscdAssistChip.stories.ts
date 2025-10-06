import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-assist-chip.js';
import { OscdAssistChip } from './OscdAssistChip.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdAssistChip>({
  tagName: 'oscd-assist-chip',
});

export default {
  title: 'Chips / Assist Chip',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
