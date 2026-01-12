import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-scl-checkbox.js';
import { OscdSclCheckbox } from './OscdSclCheckbox.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSclCheckbox>({
  tagName: 'oscd-scl-checkbox',
  options: { omitTextContent: true },
});

export default {
  ...meta,
  title: 'Scl Inputs / Checkbox',
  tags: ['autodocs'],
};

export const Default: StoryObj = {
  argTypes,
  args: {
    ...args,
    label: 'SCL Checkbox',
    supportingText: 'this is supporting text',
    nullable: true,
    value: 'true',
  },
};
