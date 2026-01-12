import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-scl-text-field.js';
import { OscdSclTextField } from './OscdSclTextField.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSclTextField>({
  tagName: 'oscd-scl-text-field',
  options: { omitTextContent: true },
});

export default {
  title: 'Scl Inputs / Text Field',
  tags: ['autodocs'],
  ...meta,
};

export const NullableAndNull: StoryObj = {
  argTypes,
  args: {
    ...args,
    label: 'Text Field',
    placeholder: 'Enter text here',
    nullable: true,
  },
};

export const NullableWithValue: StoryObj = {
  argTypes,
  args: {
    ...args,
    label: 'Text Field',
    placeholder: 'Enter text here',
    nullable: true,
    value: 'Some text',
  },
};

export const InErrorState: StoryObj = {
  argTypes,
  args: {
    ...args,
    label: 'Text Field',
    placeholder: 'Enter text here',
    nullable: true,
    value: 'Some text',
    error: true,
    errorText: 'There is an error',
  },
};
