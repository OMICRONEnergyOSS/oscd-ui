import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { withActions } from 'storybook/actions/decorator';
import { OscdOutlinedButton } from 'button/OscdOutlinedButton';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, events, template } = getStorybookHelpers(
  'oscd-outlined-button',
);

const meta: Meta<OscdOutlinedButton & typeof args> = {
  title: 'Library/Buttons/Outlined Button',
  component: 'oscd-outlined-button',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-outlined-button': OscdOutlinedButton,
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
    textContent: 'Outlined Button',
  },
};
