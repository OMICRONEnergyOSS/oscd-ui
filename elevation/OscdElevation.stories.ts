import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { OscdElevation } from 'elevation/OscdElevation';
import { OscdList } from 'list/OscdList';
import { OscdListItem } from 'list/OscdListItem';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template } = getStorybookHelpers('oscd-elevation');

const meta: Meta<OscdElevation & { level: number }> = {
  title: 'Library/Elevation',
  component: 'oscd-elevation',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-elevation': OscdElevation,
      'oscd-list': OscdList,
      'oscd-list-item': OscdListItem,
    },
  },
  render: ({ level, ...argz }) => html`
    <style>
      * {
        --md-elevation-level: ${level};
      }
    </style>
    <oscd-list>
      <oscd-list-item>Item 1</oscd-list-item>
      <oscd-list-item>Item 2</oscd-list-item>
      <oscd-list-item>Item 3</oscd-list-item>
      ${template(argz)}
    </oscd-list>
  `,
  argTypes: {
    level: {
      name: 'Elevation Level',
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'Elevation level (0-5)',
    },
    ...argTypes,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    ...args,
    level: 2, // Default elevation level
  },
};
