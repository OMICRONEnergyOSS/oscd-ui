import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-scl-checkbox.js';
import { OscdSclCheckbox } from './OscdSclCheckbox.js';
import { getStorybookMeta } from '../utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSclCheckbox>({
  tagName: 'oscd-scl-checkbox',
});

export default {
  ...meta,
  title: 'Nulable/Checkbox',
  tags: ['autodocs'],
};

delete args['nullSwitch'];

export const Default: StoryObj = {
  argTypes,
  args: { ...args, label: 'My Nulable Checkbox' },
};
