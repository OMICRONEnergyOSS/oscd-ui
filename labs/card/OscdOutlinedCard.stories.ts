import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  // getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';
import { OscdOutlinedCard } from './OscdOutlinedCard.js';

// const { args, argTypes } = getStorybookHelpers('oscd-outlined-card');

const meta: Meta<OscdOutlinedCard> = {
  title: 'Library/Card/Outlined Card',
  component: 'oscd-outlined-card',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-outlined-card': OscdOutlinedCard,
    },
  },
  render: () => html`
    <style>
      oscd-outlined-card {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 300px;
        height: 200px;
        padding: 16px;
      }
    </style>
    <oscd-outlined-card style="width: 300px; height: 200px; padding: 16px;">
      <h1>Outlined Card</h1></oscd-outlined-card
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
