import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  // getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';
import { OscdElevatedCard } from './OscdElevatedCard.js';

// const { args, argTypes } = getStorybookHelpers('oscd-elevated-card');

const meta: Meta<OscdElevatedCard> = {
  title: 'Library/Card/Elevated Card',
  component: 'oscd-elevated-card',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-elevated-card': OscdElevatedCard,
    },
  },
  render: () => html`
    <style>
      oscd-elevated-card {
        --md-elevation-level: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 300px;
        height: 200px;
      }
    </style>
    <oscd-elevated-card> <h1>Elevated Card</h1></oscd-elevated-card>
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
