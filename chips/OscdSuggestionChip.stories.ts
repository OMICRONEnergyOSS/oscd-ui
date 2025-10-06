import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-suggestion-chip.js';
import { OscdSuggestionChip } from './OscdSuggestionChip.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSuggestionChip>({
  tagName: 'oscd-suggestion-chip',
});

export default {
  title: 'Chips / Suggestion Chip',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
