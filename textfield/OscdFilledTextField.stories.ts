import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { withActions } from 'storybook/actions/decorator';
import { OscdFilledTextField } from 'textfield/OscdFilledTextField';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template, events } = getStorybookHelpers(
  'oscd-filled-text-field',
);

const meta: Meta<OscdFilledTextField> = {
  title: 'Library/Text Fields/Filled Text Field',
  component: 'oscd-filled-text-field',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-filled-text-field': OscdFilledTextField,
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
  args,
};
