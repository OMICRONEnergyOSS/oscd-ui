import { html } from 'lit';
import { withActions } from 'storybook/actions/decorator';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { OscdFilledButton } from 'button/OscdFilledButton';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, events, template } =
  getStorybookHelpers('oscd-filled-button');

const meta: Meta<OscdFilledButton & typeof args> = {
  title: 'Library/Buttons/Filled Button',
  component: 'oscd-filled-button',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-filled-button': OscdFilledButton,
    },
    actions: {
      handles: events,
    },
  },
  argTypes: {
    ...argTypes,
    textContent: {
      name: 'Text Content',
      control: { type: 'text' },
      description: 'Text content inside the button',
    },
  },
  render: ({ textContent, ...rest }) => template(rest, html` ${textContent} `),
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    ...args,
    textContent: 'Filled Button',
  },
};
