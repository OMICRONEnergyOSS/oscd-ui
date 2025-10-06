import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-navigation-drawer-modal.js';
import { OscdNavigationDrawerModal } from './OscdNavigationDrawerModal.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdNavigationDrawerModal>({
  tagName: 'oscd-navigation-drawer-modal',
});

export default {
  title: 'Labs / Navigationdrawer / Navigation Drawer Modal',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
