import type { StoryObj } from '@storybook/web-components-vite';
import { OscdSclSelect } from './OscdSclSelect.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import './oscd-scl-select.js';
import '../select/oscd-select-option.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSclSelect>({
  tagName: 'oscd-scl-select',
  options: { omitTextContent: true },
});

export default {
  ...meta,
  title: 'Scl Inputs / Select',
  tags: ['autodocs'],
};

export const NullableAndNull: StoryObj = {
  argTypes,
  args: {
    ...args,
    label: 'SCL Select',
    nullable: true,
    ['.selectOptions']: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export const NullableWithValue: StoryObj = {
  argTypes,
  args: {
    ...args,
    label: 'SCL Select',
    nullable: true,
    ['.selectOptions']: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 2',
  },
};

export const InErrorState: StoryObj = {
  argTypes,
  args: {
    ...args,
    label: 'SCL Select',
    nullable: true,
    ['.selectOptions']: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 2',
    error: true,
    supportingText: 'the error-state hides this text',
    errorText: 'There is an error',
  },
};
