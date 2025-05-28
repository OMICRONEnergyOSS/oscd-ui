import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdNavigationDrawer } from "navigation-drawer/OscdNavigationDrawer";
import { OscdList } from "list/OscdList";
import { OscdListItem } from "list/OscdListItem";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";
import { useArgs } from "@storybook/preview-api";
import { OscdIcon } from "icon/OscdIcon";
import { OscdNavigationDrawerHeader } from "./OscdNavigationDrawerHeader";
import { OscdAppBar } from "app-bar/OscdAppBar";
import { OscdFilledIconButton } from "iconbutton/OscdFilledIconButton";

const meta: Meta = {
  title: "Open SCD/Navigation Drawer/Navigation Drawer",
  component: "oscd-navigation-drawer",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "fullscreen",
    scopedElements: {
      "oscd-navigation-drawer": OscdNavigationDrawer,
      "oscd-navigation-drawer-header": OscdNavigationDrawerHeader,
      "oscd-app-bar": OscdAppBar,
      "oscd-list": OscdList,
      "oscd-list-item": OscdListItem,
      "oscd-filled-icon-button": OscdFilledIconButton,
      "oscd-icon": OscdIcon,
    },
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Navigation drawer Header label",
    },
    opened: {
      control: { type: "boolean" },
      description: "Menu opened state",
    },
  },
  render: ({ label, opened }) => {
    const [_, updateArgs] = useArgs();

    return html`
      <style>
        oscd-app-bar {
          --oscd-app-bar-background-color: #6c71c4;
          --oscd-app-bar-color: #073642;
        }
      </style>

      <oscd-navigation-drawer
        ?opened=${opened}
        @navigation-drawer-changed=${({ detail }: CustomEvent) => {
          console.log("nav drawer changed", detail);
          if (!detail.opened) {
            updateArgs({ opened: false });
          }
        }}
      >
        <oscd-navigation-drawer-header>
          <div slot="headline">${label}</div>
          <div slot="supporting-text">sample.scd</div>
        </oscd-navigation-drawer-header>
        <oscd-list>
          <oscd-list-item type="button"
            ><div slot="headline">Home</div></oscd-list-item
          >
          <oscd-list-item type="button"
            ><div slot="headline">Profile</div></oscd-list-item
          >
          <oscd-list-item type="button"
            ><div slot="headline">Settings</div></oscd-list-item
          >
        </oscd-list>
      </oscd-navigation-drawer>
      <oscd-app-bar>
        <oscd-filled-icon-button
          slot="actionStart"
          aria-label="Menu"
          @click=${() => updateArgs({ opened: true })}
        >
          <oscd-icon>menu</oscd-icon></oscd-filled-icon-button
        >
        <div slot="title">Navigation Drawer Demo</div>
      </oscd-app-bar>

      <section>
        <p>This is the main content area.</p>
      </section>
    `;
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: "Menu",
    opened: false,
  },
};
