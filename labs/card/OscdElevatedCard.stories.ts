import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-elevated-card.js';
import { OscdElevatedCard } from './OscdElevatedCard.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdElevatedCard>({
  tagName: 'oscd-elevated-card',
});

export default {
  title: 'Labs / Card / Elevated Card',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
