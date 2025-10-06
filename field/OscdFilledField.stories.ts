import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-filled-field.js';
import { OscdFilledField } from './OscdFilledField.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdFilledField>({
  tagName: 'oscd-filled-field',
});

export default {
  title: 'Fields / Filled Field',
  ...meta,
};

export const Default: StoryObj = {
  argTypes: { ...argTypes },
  args: {
    ...args,
    // Placeholder for overrides
  },
};
