import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { useArgs } from 'storybook/preview-api';
import { action } from 'storybook/actions';

import './oscd-menu.js';
import './oscd-menu-item.js';
import './oscd-sub-menu.js';
import '../icon/oscd-icon.js';
import '../button/oscd-filled-button.js';

import { OscdMenu } from './OscdMenu.js';
import { OscdMenuItem } from './OscdMenuItem.js';
import { OscdSubMenu } from './OscdSubMenu.js';
import { OscdIcon } from '../icon/OscdIcon.js';
import { OscdFilledButton } from '../button/OscdFilledButton.js';
import { scopedWcDecorator } from '@/utils/storybook/scopedWcDecorator.js';

const meta: Meta = {
  title: 'Menus / Sub Menu',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-menu': OscdMenu,
      'oscd-menu-item': OscdMenuItem,
      'oscd-sub-menu': OscdSubMenu,
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
 * Logs lifecycle events fired by an `oscd-menu` (opening / opened / closing /
 * closed) to the Storybook actions panel.
 */
const onMenuEvent = (event: Event) => action(`menu: ${event.type}`)(event);

/**
 * Logs the events fired (and bubbled) by an `oscd-sub-menu` to the Storybook
 * actions panel. These events are `composed` and `bubbling`, so listening on
 * the outer menu is enough to capture them for every nesting level.
 */
const onSubMenuEvent = (event: Event) =>
  action(`sub-menu: ${event.type}`)(event);

/**
 * Decodes a `close-menu` event into a readable "selection" action. Menu items
 * do not fire a dedicated selection event: activating a leaf item dispatches a
 * bubbling + composed `close-menu` CustomEvent whose `detail` carries the
 * selected `initiator` item and the `reason` it closed
 * (`click-selection` or `keydown`).
 */
const onCloseMenu = (event: Event) => {
  const detail = (event as CustomEvent).detail ?? {};
  const initiator = detail.initiator as HTMLElement | undefined;
  const label = initiator?.textContent?.trim() || 'unknown';
  action('menu: selection (close-menu)')({
    selected: label,
    reason: detail.reason,
  });
};

/**
 * A menu containing a sub-menu. Open the menu, then hover (or focus and press
 * the right arrow key on) "More options" to reveal the nested sub-menu.
 *
 * The containing `oscd-menu` sets `has-overflow` so the sub-menu can extend
 * beyond the parent menu's bounds. A `min-width` keeps the item labels on a
 * single line. Menu and sub-menu events are logged to the Actions panel.
 */
export const Default: Story = {
  args: { open: false },
  render: argz => {
    const [_, updateArgs] = useArgs();

    return html`
      <div style="position: relative;">
        <oscd-filled-button
          id="submenu-anchor"
          @click=${() => updateArgs({ open: !argz['open'] })}
        >
          Open Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="submenu-anchor"
          has-overflow
          style="min-width: 16rem;"
          ?open=${argz['open']}
          @opening=${onMenuEvent}
          @opened=${onMenuEvent}
          @closing=${onMenuEvent}
          @closed=${(event: Event) => {
            onMenuEvent(event);
            updateArgs({ open: false });
          }}
          @deactivate-items=${onSubMenuEvent}
          @request-activation=${onSubMenuEvent}
          @deactivate-typeahead=${onSubMenuEvent}
          @activate-typeahead=${onSubMenuEvent}
          @close-menu=${onCloseMenu}
        >
          <oscd-menu-item>
            <div slot="headline">Option 1</div>
          </oscd-menu-item>
          <oscd-menu-item>
            <div slot="headline">Option 2</div>
          </oscd-menu-item>

          <oscd-sub-menu>
            <oscd-menu-item slot="item">
              <div slot="headline">More options</div>
              <oscd-icon slot="end">arrow_right</oscd-icon>
            </oscd-menu-item>
            <oscd-menu slot="menu" style="min-width: 16rem;">
              <oscd-menu-item>
                <div slot="headline">Sub option A</div>
              </oscd-menu-item>
              <oscd-menu-item>
                <div slot="headline">Sub option B</div>
              </oscd-menu-item>
            </oscd-menu>
          </oscd-sub-menu>
        </oscd-menu>
      </div>
    `;
  },
};

/**
 * Sub-menus can be nested arbitrarily deep. Hover "More options", then
 * "Even more options" to open a third level of nesting. Every level's events
 * are logged to the Actions panel.
 */
export const NestedSubMenus: Story = {
  args: { open: false },
  render: argz => {
    const [_, updateArgs] = useArgs();

    return html`
      <div style="position: relative;">
        <oscd-filled-button
          id="nested-submenu-anchor"
          @click=${() => updateArgs({ open: !argz['open'] })}
        >
          Open Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="nested-submenu-anchor"
          has-overflow
          style="min-width: 16rem;"
          ?open=${argz['open']}
          @opening=${onMenuEvent}
          @opened=${onMenuEvent}
          @closing=${onMenuEvent}
          @closed=${(event: Event) => {
            onMenuEvent(event);
            updateArgs({ open: false });
          }}
          @deactivate-items=${onSubMenuEvent}
          @request-activation=${onSubMenuEvent}
          @deactivate-typeahead=${onSubMenuEvent}
          @activate-typeahead=${onSubMenuEvent}
          @close-menu=${onCloseMenu}
        >
          <oscd-menu-item>
            <div slot="headline">Option 1</div>
          </oscd-menu-item>

          <oscd-sub-menu>
            <oscd-menu-item slot="item">
              <div slot="headline">More options</div>
              <oscd-icon slot="end">arrow_right</oscd-icon>
            </oscd-menu-item>
            <oscd-menu slot="menu" has-overflow style="min-width: 16rem;">
              <oscd-menu-item>
                <div slot="headline">Sub option A</div>
              </oscd-menu-item>

              <oscd-sub-menu>
                <oscd-menu-item slot="item">
                  <div slot="headline">Even more options</div>
                  <oscd-icon slot="end">arrow_right</oscd-icon>
                </oscd-menu-item>
                <oscd-menu slot="menu" style="min-width: 16rem;">
                  <oscd-menu-item>
                    <div slot="headline">Deep option X</div>
                  </oscd-menu-item>
                  <oscd-menu-item>
                    <div slot="headline">Deep option Y</div>
                  </oscd-menu-item>
                </oscd-menu>
              </oscd-sub-menu>
            </oscd-menu>
          </oscd-sub-menu>
        </oscd-menu>
      </div>
    `;
  },
};
