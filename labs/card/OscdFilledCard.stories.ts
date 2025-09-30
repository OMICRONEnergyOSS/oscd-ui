import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  // getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';
import { OscdFilledCard } from './OscdFilledCard.js';

// const { args, argTypes } = getStorybookHelpers('oscd-filled-card');

const meta: Meta<OscdFilledCard> = {
  title: 'Library/Card/Filled Card',
  component: 'oscd-filled-card',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-filled-card': OscdFilledCard,
    },
  },
  render: () => html`
    <style>
      oscd-filled-card {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 300px;
        height: 200px;
        padding: 16px;
      }
    </style>
    <oscd-filled-card style="width: 300px; height: 200px; padding: 16px;">
      <h1>Filled Card</h1></oscd-filled-card
    >
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
