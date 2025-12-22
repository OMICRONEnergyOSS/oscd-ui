import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-scl-select.js';
import { OscdSclSelect } from './OscdSclSelect.js';
import { getStorybookMeta } from '../utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSclSelect>({
  tagName: 'oscd-scl-select',
});

export default {
  title: 'Nulable/Select',
  tags: ['autodocs'],
  ...meta,
};

delete args['nullSwitch'];

export const Default: StoryObj = {
  argTypes,
  args: { ...args, ['.selectOptions']: ['Option 1', 'Option 2', 'Option 3'] },
};
