import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { withActions } from 'storybook/actions/decorator';
import { OscdSecondaryTab } from 'tabs/OscdSecondaryTab';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template, events } =
  getStorybookHelpers('oscd-secondary-tab');

const meta: Meta<OscdSecondaryTab & { textContent: string }> = {
  title: 'Library/Tabs/Secondary Tab',
  component: 'oscd-secondary-tab',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-secondary-tab': OscdSecondaryTab,
    },
    actions: {
      handles: ['click', ...events],
    },
  },
  render: ({ textContent, ...argz }) => template(argz, html`${textContent}`),
  argTypes: {
    textContent: {
      control: { type: 'text' },
      description: 'Tab label',
    },
    ...argTypes,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    textContent: 'Secondary Tab',
    ...args,
  },
};
