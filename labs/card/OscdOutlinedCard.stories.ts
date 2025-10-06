import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-outlined-card.js';
import { OscdOutlinedCard } from './OscdOutlinedCard.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdOutlinedCard>({
  tagName: 'oscd-outlined-card',
});

export default {
  title: 'Labs / Card / Outlined Card',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
