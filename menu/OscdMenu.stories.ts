import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { useArgs } from 'storybook/preview-api';
import { action } from 'storybook/actions';

import './oscd-menu.js';
import './oscd-menu-item.js';
import '../list/oscd-list-item.js';
import '../icon/oscd-icon.js';
import '../button/oscd-filled-button.js';

import { OscdMenu } from './OscdMenu.js';
import { OscdMenuItem } from './OscdMenuItem.js';
import { OscdListItem } from '../list/OscdListItem.js';
import { OscdIcon } from '../icon/OscdIcon.js';
import { OscdFilledButton } from '../button/OscdFilledButton.js';
import { scopedWcDecorator } from '@/utils/storybook/scopedWcDecorator.js';

const meta: Meta = {
  title: 'Menus / Menu',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-menu': OscdMenu,
      'oscd-menu-item': OscdMenuItem,
      'oscd-list-item': OscdListItem,
      'oscd-icon': OscdIcon,
      'oscd-filled-button': OscdFilledButton,
    },
  },
  argTypes: {
    open: { control: { type: 'boolean' } },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Default menu with interactive items and a button anchor.
 */
export const Default: Story = {
  args: { open: false },
  render: argz => {
    const [_, updateArgs] = useArgs();

    return html`
      <div style="position: relative;">
        <oscd-filled-button
          id="menu-button"
          @click=${() => updateArgs({ open: !argz['open'] })}
        >
          Open Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="menu-button"
          ?open=${argz['open']}
          @closed=${() => updateArgs({ open: false })}
        >
          <oscd-menu-item>Option 1</oscd-menu-item>
          <oscd-menu-item>Option 2</oscd-menu-item>
          <oscd-menu-item>Option 3</oscd-menu-item>
          <oscd-menu-item>Option 4</oscd-menu-item>
          <oscd-menu-item>Option 5</oscd-menu-item>
        </oscd-menu>
      </div>
    `;
  },
};

/**
 * Menu consisting of oscd-list-items (non-interactive items which serve as group
 * headings) and standards oscd-menu-items.
 */
export const MenuWithMixedItems: Story = {
  args: { open: false },
  render: argz => {
    const [_, updateArgs] = useArgs();

    return html`
      <div style="position: relative;">
        <oscd-filled-button
          id="ctx-anchor-1"
          @click=${() => updateArgs({ open: !argz['open'] })}
        >
          Open Context Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="ctx-anchor-1"
          ?open=${argz['open']}
          @closed=${() => updateArgs({ open: false })}
        >
          <oscd-list-item type="text">
            <oscd-icon slot="start">developer_board</oscd-icon>
            <div slot="headline">Headline</div>
            <div slot="supporting-text">non-interactive Item</div>
          </oscd-list-item>

          <li divider role="separator"></li>

          <oscd-menu-item @click=${() => action('rotate')('clicked')}>
            <oscd-icon slot="start">rotate_right</oscd-icon>
            <div slot="headline">Menu Item 1</div>
          </oscd-menu-item>

          <oscd-menu-item @click=${() => action('flip')('clicked')}>
            <oscd-icon slot="start">flip</oscd-icon>
            <div slot="headline">Menu Item 2</div>
          </oscd-menu-item>

          <oscd-menu-item @click=${() => action('delete')('clicked')}>
            <oscd-icon slot="start">delete</oscd-icon>
            <div slot="headline">Menu Item 3</div>
          </oscd-menu-item>
        </oscd-menu>
      </div>
    `;
  },
};
