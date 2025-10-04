import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { OscdTextButton } from 'button/OscdTextButton';
import { withActions } from 'storybook/actions/decorator';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, events, template } =
  getStorybookHelpers('oscd-text-button');

const meta: Meta<OscdTextButton & typeof args> = {
  title: 'Library/Buttons/Text Button',
  component: 'oscd-text-button',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-text-button': OscdTextButton,
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
    textContent: 'Text Button',
  },
};
