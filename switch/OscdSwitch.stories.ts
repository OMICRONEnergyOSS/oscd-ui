import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-switch.js';
import { OscdSwitch } from './OscdSwitch.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSwitch>({
  tagName: 'oscd-switch',
});

export default {
  title: 'Switchs / Switch',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
