import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { withActions } from 'storybook/actions/decorator';
import { OscdTabs } from './OscdTabs.js';
import { OscdPrimaryTab } from './OscdPrimaryTab.js';
import { OscdSecondaryTab } from './OscdSecondaryTab.js';
import { scopedWcDecorator } from '../utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template, events } = getStorybookHelpers('oscd-tabs');

const meta: Meta<OscdTabs> = {
  title: 'Library/Tabs/Tabs',
  component: 'oscd-tabs',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-tabs': OscdTabs,
      'oscd-primary-tab': OscdPrimaryTab,
      'oscd-secondary-tab': OscdSecondaryTab,
    },
    actions: {
      handles: ['click', ...events],
    },
  },
  argTypes,
};

export default meta;
type Story = StoryObj;

export const WithPrimaryTabs: Story = {
  args,
  render: argz =>
    template(
      argz,
      html`
        <oscd-primary-tab>Tab 1</oscd-primary-tab>
        <oscd-primary-tab>Tab 2</oscd-primary-tab>
      `,
    ),
};
export const WithSecondaryTabs: Story = {
  args,
  render: argz =>
    template(
      argz,
      html`
        <oscd-secondary-tab>Tab 1</oscd-secondary-tab>
        <oscd-secondary-tab>Tab 2</oscd-secondary-tab>
      `,
    ),
};
