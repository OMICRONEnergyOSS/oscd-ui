import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { withActions } from 'storybook/actions/decorator';
import { OscdOutlinedTextField } from 'textfield/OscdOutlinedTextField.js';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template, events } = getStorybookHelpers(
  'oscd-outlined-text-field',
);

const meta: Meta<OscdOutlinedTextField> = {
  title: 'Library/Text Fields/Outlined Text Field',
  component: 'oscd-outlined-text-field',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-outlined-text-field': OscdOutlinedTextField,
    },
    actions: {
      handles: events,
    },
  },
  render: argz => template(argz),
  argTypes,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    ...args,
    label: 'Enter text',
    placeholder: 'Type here...',
    value: 'Value',
  },
};
