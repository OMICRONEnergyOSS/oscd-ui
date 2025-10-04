import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { withActions } from 'storybook/actions/decorator';
import { OscdList } from 'list/OscdList';
import { OscdListItem } from 'list/OscdListItem';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template } = getStorybookHelpers('oscd-list');

const meta: Meta<OscdList> = {
  title: 'Library/List/List',
  component: 'oscd-list',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-list': OscdList,
      'oscd-list-item': OscdListItem,
    },
  },
  render: argz =>
    template(
      argz,
      html`
        <oscd-list-item>Item 1</oscd-list-item>
        <oscd-list-item>Item 2</oscd-list-item>
        <oscd-list-item>Item 3</oscd-list-item>
      `,
    ),
  argTypes,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args,
};
