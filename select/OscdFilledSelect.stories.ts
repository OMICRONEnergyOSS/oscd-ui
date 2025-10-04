import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { withActions } from 'storybook/actions/decorator';
import { OscdFilledSelect } from 'select/OscdFilledSelect';
import { OscdSelectOption } from 'select/OscdSelectOption';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template, events } =
  getStorybookHelpers('oscd-filled-select');

const meta: Meta<OscdFilledSelect> = {
  title: 'Library/Selects/Filled Select',
  component: 'oscd-filled-select',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-filled-select': OscdFilledSelect,
      'oscd-select-option': OscdSelectOption,
    },
    actions: {
      handles: ['click', ...events],
    },
  },
  render: argz =>
    template(
      argz,
      html`
        <oscd-select-option value="1">Option 1</oscd-select-option>
        <oscd-select-option value="2">Option 2</oscd-select-option>
      `,
    ),
  argTypes: {
    ...argTypes,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Select an option',
    ...args,
  },
};
