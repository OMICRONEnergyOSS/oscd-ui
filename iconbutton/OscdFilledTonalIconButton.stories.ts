import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { withActions } from 'storybook/actions/decorator';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import { OscdIcon } from 'icon/OscdIcon';
import { OscdFilledTonalIconButton } from 'iconbutton/OscdFilledTonalIconButton';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template, events } = getStorybookHelpers(
  'oscd-filled-tonal-icon-button',
);

const meta: Meta<
  OscdFilledTonalIconButton & {
    icon: string;
    selectedIcon: string;
    label: string;
  }
> = {
  title: 'Library/Icon Buttons/Filled Tonal Icon Button',
  component: 'oscd-filled-tonal-icon-button',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-filled-tonal-icon-button': OscdFilledTonalIconButton,
      'oscd-icon': OscdIcon,
    },
    actions: {
      handles: ['click', ...events],
    },
  },
  render: ({ icon, selectedIcon, ...argz }) =>
    template(
      argz,
      html`
        <oscd-icon>${icon}</oscd-icon>
        <oscd-icon slot="selected">${selectedIcon}</oscd-icon>
      `,
    ),

  argTypes: {
    ...argTypes,
    icon: {
      control: { type: 'text' },
      description: 'Icon name',
    },
    selectedIcon: {
      control: { type: 'text' },
      description: 'Icon name',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    ...args,
    icon: 'light_mode',
    selectedIcon: 'dark_mode',
  },
};
