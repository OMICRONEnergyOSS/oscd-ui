import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { scopedWcDecorator } from '@/utils/storybook/scopedWcDecorator.js';
import { OscdTreeItem } from './OscdTreeItem.js';

const meta: Meta = {
  title: 'Tree / Tree Item',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-tree-item': OscdTreeItem,
    },
  },
  render: () => html`
    <oscd-tree-item>
      <span slot="headline">IED1</span>
      <span slot="supporting-text">Bay1/VoltageLevel1</span>
    </oscd-tree-item>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
