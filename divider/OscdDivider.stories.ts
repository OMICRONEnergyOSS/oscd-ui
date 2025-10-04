import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { OscdDivider } from 'divider/OscdDivider';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template } = getStorybookHelpers('oscd-divider');

const meta: Meta<OscdDivider> = {
  title: 'Library/Divider',
  component: 'oscd-divider',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-divider': OscdDivider,
    },
  },
  render: argz => html`
    <div>
      <p>Above the divider</p>
      ${template(argz)}
      <p>Below the divider</p>
    </div>
  `,
  argTypes,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args,
};
