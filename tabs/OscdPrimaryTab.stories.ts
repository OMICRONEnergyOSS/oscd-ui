import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { withActions } from 'storybook/actions/decorator';
import { OscdPrimaryTab } from 'tabs/OscdPrimaryTab';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template, events } =
  getStorybookHelpers('oscd-primary-tab');

const meta: Meta<OscdPrimaryTab & { textContent: string }> = {
  title: 'Library/Tabs/Primary Tab',
  component: 'oscd-primary-tab',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-primary-tab': OscdPrimaryTab,
    },
    actions: {
      handles: ['click', ...events],
    },
  },
  render: ({ textContent, ...argz }) => template(argz, html`${textContent}`),
  argTypes: {
    ...argTypes,
    textContent: {
      control: { type: 'text' },
      description: 'Tab label',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    ...args,
    textContent: 'Primary Tab',
  },
};
