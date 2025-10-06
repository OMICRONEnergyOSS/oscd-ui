import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-dialog.js';
import { OscdDialog } from './OscdDialog.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdDialog>({
  tagName: 'oscd-dialog',
});

export default {
  title: 'Dialogs / Dialog',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
