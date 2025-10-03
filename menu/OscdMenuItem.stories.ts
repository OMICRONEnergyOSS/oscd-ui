import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';
import { OscdMenuItem } from 'menu/OscdMenuItem.js';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import { OscdElevation } from 'elevation/OscdElevation.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template, events } =
  getStorybookHelpers('oscd-menu-item');

const meta: Meta<OscdMenuItem & { textContent: string }> = {
  title: 'Library/Menus/Menu Item',
  component: 'oscd-menu-item',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-menu-item': OscdMenuItem,
      'oscd-elevation': OscdElevation,
    },
    actions: {
      handles: ['click', ...events],
    },
  },
  render: ({ textContent, ...argz }) => html`
    <div style="position: relative;--md-elevation-level: 2;">
      ${template(argz, html`${textContent}`)}
      <oscd-elevation></oscd-elevation>
    </div>
  `,
  argTypes: {
    ...argTypes,
    textContent: {
      name: 'Text Content',
      control: { type: 'text' },
      description: 'Menu item label',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    textContent: 'Menu Item',
    ...args,
  },
};
