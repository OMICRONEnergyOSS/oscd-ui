import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-badge.js';
import { OscdBadge } from './OscdBadge.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdBadge>({
  tagName: 'oscd-badge',
});

export default {
  title: 'Labs / Badge / Badge',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
