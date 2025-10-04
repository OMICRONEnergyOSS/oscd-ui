import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { OscdIcon } from 'icon/OscdIcon';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes } = getStorybookHelpers('oscd-icon');

const meta: Meta<OscdIcon & typeof args> = {
  title: 'Library/Icon',
  component: 'oscd-icon',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-icon': OscdIcon,
    },
  },
  render: ({ icon, iconSize, color }) => html`
    <oscd-icon style="--md-icon-size:${iconSize ?? '40'}px; color:${color}">
      ${icon}</oscd-icon
    >
  `,
  argTypes: {
    ...argTypes,
    icon: {
      name: 'Material icon name',
      control: { type: 'text' },
      description: 'Icon name',
    },
    iconSize: {
      name: 'Icon Size',
      control: { type: 'number' },
      description: 'Icon Size',
    },
    color: {
      control: { type: 'color' },
      description: 'Icon Color',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    ...args,
    icon: 'menu',
    iconSize: 40,
    color: 'var(--md-sys-primary)',
  },
};
