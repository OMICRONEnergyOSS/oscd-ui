import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-scl-text-field.js';
import { OscdSclTextField } from './OscdSclTextField.js';
import { getStorybookMeta } from '../utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSclTextField>({
  tagName: 'oscd-scl-text-field',
});

export default {
  title: 'Nulable/Text Field',
  tags: ['autodocs'],
  ...meta,
};

delete args['nullSwitch'];

export const Default: StoryObj = {
  argTypes,
  args,
};

export const WithMultipliers: StoryObj = {
  argTypes,
  args: {
    ...args,
    ['.multipliers']: [null, 'n', 'u', 'm'],
    multiplier: 'u',
    unit: 'V',
  },
};
