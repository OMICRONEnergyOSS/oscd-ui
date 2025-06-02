import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdMenu } from "menu/OscdMenu";
import { OscdMenuItem } from "menu/OscdMenuItem";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";
import { useArgs } from "@storybook/preview-api";
import { OscdOutlinedButton } from "button/OscdOutlinedButton";
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from "utils/storybook/getStorybookHelpers.js";

const { args, argTypes } = getStorybookHelpers("oscd-menu");

const meta: Meta<OscdMenu> = {
  title: "Open SCD/Menus/Menu",
  component: "oscd-menu",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator, storybookHelperDecorator],
  args,
  argTypes,
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-menu": OscdMenu,
      "oscd-menu-item": OscdMenuItem,
      "oscd-outlined-button": OscdOutlinedButton,
    },
  },
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return html`
      <div style="position: relative;">
        <oscd-outlined-button
          id="menu-button"
          @click=${() => updateArgs({ open: !args["open"] })}
          >Open Menu</oscd-outlined-button
        >
        <oscd-menu
          ?open=${args["open"]}
          id="menu"
          anchor="menu-button"
          surfaceCorner="end-end"
          anchorCorner="start-start"
          @closed=${() => updateArgs({ open: false })}
        >
          <oscd-menu-item value="1">Option 1</oscd-menu-item>
          <oscd-menu-item value="2">Option 2</oscd-menu-item>
          <oscd-menu-item value="2">Option 3</oscd-menu-item>
          <oscd-menu-item value="2">Option 4</oscd-menu-item>
          <oscd-menu-item value="2">Option 5</oscd-menu-item>
        </oscd-menu>
      </div>
    `;
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
