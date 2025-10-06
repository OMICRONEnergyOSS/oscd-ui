import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-filled-card.js';
import { OscdFilledCard } from './OscdFilledCard.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdFilledCard>({
  tagName: 'oscd-filled-card',
});

export default {
  title: 'Labs / Card / Filled Card',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
