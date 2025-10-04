import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { OscdAppBar } from 'app-bar/OscdAppBar';
import { OscdFilledButton } from 'button/OscdFilledButton';
import { OscdTextButton } from 'button/OscdTextButton';
import { OscdDialog } from 'dialog/OscdDialog';
import { OscdDivider } from 'divider/OscdDivider';
import { OscdFilledSelect } from 'select/OscdFilledSelect';
import { OscdOutlinedSelect } from 'select/OscdOutlinedSelect';
import { OscdSelectOption } from 'select/OscdSelectOption';
import { OscdFilledIconButton } from 'iconbutton/OscdFilledIconButton';
import { OscdFilledTonalIconButton } from 'iconbutton/OscdFilledTonalIconButton';
import { OscdIconButton } from 'iconbutton/OscdIconButton';
import { OscdIcon } from 'icon/OscdIcon';
import { OscdList } from 'list/OscdList';
import { OscdListItem } from 'list/OscdListItem';
import { CloseMenuEvent, OscdMenu } from 'menu/OscdMenu';
import { OscdMenuItem } from 'menu/OscdMenuItem';
import { OscdNavigationDrawer } from 'navigation-drawer/OscdNavigationDrawer';
import { OscdNavigationDrawerHeader } from 'navigation-drawer/OscdNavigationDrawerHeader';
import { OscdPrimaryTab } from 'tabs/OscdPrimaryTab';
import { OscdSecondaryTab } from 'tabs/OscdSecondaryTab';
import { OscdTabs } from 'tabs/OscdTabs';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import { OscdOutlinedButton } from 'button/OscdOutlinedButton';
import { OscdElevation } from 'elevation/OscdElevation';
import { useArgs } from 'storybook/preview-api';
import { action } from 'storybook/actions';

const meta: Meta = {
  title: 'Open SCD/All Components',
  decorators: [scopedWcDecorator],
  parameters: {
    layout: 'fullscreen',
    scopedElements: {
      'oscd-app-bar': OscdAppBar,
      'oscd-filled-button': OscdFilledButton,
      'oscd-outlined-button': OscdOutlinedButton,
      'oscd-text-button': OscdTextButton,
      'oscd-dialog': OscdDialog,
      'oscd-divider': OscdDivider,
      'oscd-filled-select': OscdFilledSelect,
      'oscd-outlined-select': OscdOutlinedSelect,
      'oscd-select-option': OscdSelectOption,
      'oscd-filled-icon-button': OscdFilledIconButton,
      'oscd-filled-tonal-icon-button': OscdFilledTonalIconButton,
      'oscd-icon-button': OscdIconButton,
      'oscd-icon': OscdIcon,
      'oscd-list': OscdList,
      'oscd-list-item': OscdListItem,
      'oscd-menu': OscdMenu,
      'oscd-menu-item': OscdMenuItem,
      'oscd-navigation-drawer': OscdNavigationDrawer,
      'oscd-navigation-drawer-header': OscdNavigationDrawerHeader,
      'oscd-primary-tab': OscdPrimaryTab,
      'oscd-secondary-tab': OscdSecondaryTab,
      'oscd-tabs': OscdTabs,
      'oscd-elevation': OscdElevation,
    },
  },
  argTypes: {
    navOpened: {
      control: { type: 'boolean' },
      description: 'Navigation drawer opened state',
    },
    menuOpened: {
      control: { type: 'boolean' },
      description: 'Menu opened state',
    },
    tabCount: {
      control: { type: 'number' },
      description: 'Number of tabs in App Bar',
    },
  },
  render: ({ dialogOpen, navOpened, tabCount, menuOpened }) => {
    const [_, updateArgs] = useArgs();
    return html`
      <style>
        main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 16px;
        }

        section {
          position: relative;
          --md-elevation-level: 2;
          padding-inline: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }
        section > div {
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: start;
          margin: 16px;
        }
      </style>
      <oscd-app-bar>
        <div slot="title">All Components</div>
        <div slot="actionStart" style="position: relative">
          <oscd-filled-icon-button
            @click=${() => updateArgs({ navOpened: true })}
            ><oscd-icon>menu</oscd-icon></oscd-filled-icon-button
          >

          <oscd-filled-icon-button
            id="appBarMenuButton"
            @click=${() => updateArgs({ menuOpened: true })}
            ><oscd-icon>settings</oscd-icon></oscd-filled-icon-button
          >
          <oscd-menu
            ?open=${menuOpened}
            id="appBarMenu"
            anchor="appBarMenuButton"
            surfaceCorner="end-end"
            anchorCorner="start-start"
            @closed=${() => updateArgs({ menuOpened: false })}
          >
            <oscd-menu-item>Option A</oscd-menu-item>
            <oscd-menu-item>Option B</oscd-menu-item>
          </oscd-menu>
        </div>
        <div slot="actionEnd">
          <oscd-filled-icon-button
            ><oscd-icon>edit</oscd-icon></oscd-filled-icon-button
          >
          <oscd-filled-tonal-icon-button
            ><oscd-icon>star</oscd-icon></oscd-filled-tonal-icon-button
          >
        </div>
        <oscd-tabs style="width: 100%">
          ${new Array(tabCount || 2)
            .fill(null)
            .map(
              (__, index) =>
                html`<oscd-secondary-tab>Tab ${index}</oscd-secondary-tab>`,
            )}
        </oscd-tabs>
      </oscd-app-bar>
      <oscd-navigation-drawer
        ?opened=${navOpened}
        @navigation-drawer-changed=${({ detail }: CustomEvent) => {
          if (!detail.opened) {
            updateArgs({ navOpened: false });
          }
        }}
      >
        <oscd-navigation-drawer-header>
          <span slot="headline">Headline</span>
          <span slot="supporting-text">supporting-text</span>
        </oscd-navigation-drawer-header>
        <oscd-divider></oscd-divider>
        <oscd-list>
          <oscd-list-item>Nav 1</oscd-list-item>
          <oscd-list-item>Nav 2</oscd-list-item>
        </oscd-list>
      </oscd-navigation-drawer>

      <main>
        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Buttons</h3>
          <div>
            <oscd-filled-button>Filled</oscd-filled-button>
            <oscd-outlined-button>Outlined</oscd-outlined-button>
            <oscd-text-button>Text</oscd-text-button>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Icon Buttons</h3>
          <div>
            <oscd-filled-icon-button
              ><oscd-icon>edit</oscd-icon></oscd-filled-icon-button
            >
            <oscd-filled-tonal-icon-button
              ><oscd-icon>star</oscd-icon></oscd-filled-tonal-icon-button
            >
            <oscd-icon-button><oscd-icon>menu</oscd-icon></oscd-icon-button>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Tabs</h3>
          <div>
            <oscd-tabs style="width: 100%">
              <oscd-secondary-tab>Tab 1</oscd-secondary-tab>
              <oscd-secondary-tab>Tab 2</oscd-secondary-tab>
            </oscd-tabs>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Selects</h3>
          <div>
            <oscd-filled-select label="Filled">
              <oscd-select-option value="1">One</oscd-select-option>
              <oscd-select-option value="2">Two</oscd-select-option>
            </oscd-filled-select>
            <oscd-outlined-select label="Outlined">
              <oscd-select-option value="1">One</oscd-select-option>
              <oscd-select-option value="2">Two</oscd-select-option>
            </oscd-outlined-select>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>List</h3>
          <div>
            <oscd-list>
              <oscd-list-item>Item A</oscd-list-item>
              <oscd-list-item>Item B</oscd-list-item>
            </oscd-list>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Menu</h3>
          <div>
            <div style="position:absolute;">
              <oscd-filled-button
                id="menu-button"
                @click=${(event: Event) => {
                  const menu = (
                    event.target as Element
                  )?.parentElement?.querySelector('#menu') as OscdMenu;
                  if (menu) {
                    menu.open = !menu.open;
                    action('menu click')({ menu_open: menu.open, event });
                  }
                }}
                >Open Menu</oscd-filled-button
              >
              <oscd-menu
                id="menu"
                position="relative"
                anchor="menu-button"
                @close-menu=${({ detail }: CloseMenuEvent) => {
                  action('menu closed')({ detail });
                }}
              >
                <oscd-menu-item>Option A</oscd-menu-item>
                <oscd-menu-item>Option B</oscd-menu-item>
              </oscd-menu>
            </div>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Dialog</h3>
          <div>
            <oscd-filled-button
              @click=${() => {
                updateArgs({ dialogOpen: true });
              }}
              >Open Dialog</oscd-filled-button
            >
            <oscd-dialog
              ?open=${dialogOpen}
              @closed=${(event: CustomEvent) => {
                action('dialog closed')({ event });
                updateArgs({ dialogOpen: false });
              }}
            >
              <div slot="headline">Confirm Action</div>
              <div slot="content">
                Are you sure you want to proceed with this operation? This
                action cannot be undone.
              </div>
              <div slot="actions">
                <oscd-filled-button
                  @click=${() => updateArgs({ dialogOpen: false })}
                  >Cancel</oscd-filled-button
                >
                <oscd-filled-button
                  @click=${() => updateArgs({ dialogOpen: false })}
                  >Confirm</oscd-filled-button
                >
              </div>
            </oscd-dialog>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Divider</h3>
          <oscd-divider></oscd-divider>
        </section>
      </main>
    `;
  },
};

export default meta;
type Story = StoryObj;

export const AllComponents: Story = {
  args: {
    navOpened: false,
    menuOpened: false,
    tabCount: 5,
  },
};
