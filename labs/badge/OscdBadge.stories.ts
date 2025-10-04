import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  // getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';
import { OscdBadge } from './OscdBadge.js';
import { OscdIconButton } from '../../iconbutton/OscdIconButton.js';
import { OscdIcon } from '../../icon/OscdIcon.js';

// const { args, argTypes } = getStorybookHelpers('oscd-badge');

const meta: Meta<OscdBadge> = {
  title: 'Library/Badge/Badge',
  component: 'oscd-badge',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-badge': OscdBadge,
      'oscd-icon-button': OscdIconButton,
      'oscd-icon': OscdIcon,
    },
  },
  render: () => html`
    <style></style>
    <oscd-icon-button>
      <oscd-icon>mail</oscd-icon>
      <oscd-badge value="4"></oscd-badge>
    </oscd-icon-button>
  `,
  argTypes: {
    // ...argTypes,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    // ...args,
  },
};
