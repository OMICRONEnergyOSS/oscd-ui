import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { withActions } from '@storybook/addon-actions/decorator';
import { OscdIconButton } from 'iconbutton/OscdIconButton';
import { OscdIcon } from 'icon/OscdIcon';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import { OscdOutlinedIconButton } from 'iconbutton/OscdOutlinedIconButton.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template, events } = getStorybookHelpers(
  'oscd-outlined-icon-button',
);

const meta: Meta<
  OscdIconButton & { icon: string; selectedIcon: string; label: string }
> = {
  title: 'Library/Icon Buttons/Outlined Icon Button',
  component: 'oscd-outlined-icon-button',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-outlined-icon-button': OscdOutlinedIconButton,
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
