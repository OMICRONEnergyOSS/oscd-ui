import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import { OscdMenu } from 'menu/OscdMenu';
import { OscdMenuItem } from 'menu/OscdMenuItem';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import { useArgs } from '@storybook/preview-api';
import { OscdOutlinedButton } from 'button/OscdOutlinedButton';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';
import { withActions } from '@storybook/addon-actions/decorator';
// Import necessary components and utilities
const { args, argTypes, template, events } = getStorybookHelpers('oscd-menu');

const meta: Meta<OscdMenu> = {
  title: 'Library/Menus/Menu',
  component: 'oscd-menu',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator, storybookHelperDecorator, withActions],
  argTypes,
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-menu': OscdMenu,
      'oscd-menu-item': OscdMenuItem,
      'oscd-outlined-button': OscdOutlinedButton,
    },
    actions: {
      handles: ['click', ...events],
    },
  },
  //eslint-disable-next-line
  render: argz => {
    const [_, updateArgs] = useArgs();
    return html`
      <div style="position: relative;">
        ${template(
          argz,
          html`<oscd-menu-item value="1">Option 1</oscd-menu-item>
            <oscd-menu-item value="2">Option 2</oscd-menu-item>
            <oscd-menu-item value="2">Option 3</oscd-menu-item>
            <oscd-menu-item value="2">Option 4</oscd-menu-item>
            <oscd-menu-item value="2">Option 5</oscd-menu-item>`,
        )}
        <oscd-outlined-button
          id="menu-button"
          @click=${() => updateArgs({ open: !argz.open })}
          >Open Menu</oscd-outlined-button
        >
      </div>
    `;
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    ...args,
    anchor: 'menu-button',
    open: false, // Default state of the menu
    '[@closed]': () => {
      args['open'] = false;
    }, // Close the menu when the closed event is triggered),
  },
};
