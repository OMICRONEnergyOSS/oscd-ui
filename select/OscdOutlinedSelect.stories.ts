import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { OscdOutlinedSelect } from "select/OscdOutlinedSelect";
import { OscdSelectOption } from "select/OscdSelectOption";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from "utils/storybook/getStorybookHelpers.js";

const { args, argTypes, template, events } = getStorybookHelpers(
  "oscd-outlined-select"
);

const meta: Meta<OscdOutlinedSelect> = {
  title: "Library/Selects/Outlined Select",
  component: "oscd-outlined-select",
  tags: ["autodocs"],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-outlined-select": OscdOutlinedSelect,
      "oscd-select-option": OscdSelectOption,
    },
    actions: {
      handles: ["click", ...events],
    },
  },
  render: (argz) =>
    template(
      argz,
      html`
        <oscd-select-option value="1">Option 1</oscd-select-option>
        <oscd-select-option value="2">Option 2</oscd-select-option>
      `
    ),
  argTypes: {
    ...argTypes,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: "Select an option",
    ...args,
  },
};
