import { html } from 'lit';
import type { ArgTypes, StoryObj } from '@storybook/web-components-vite';
import { OscdSplitPaneHorizontal } from './OscdSplitPaneHorizontal.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import '../icon/oscd-icon.js';
import './oscd-split-pane-horizontal.js';

const { args, argTypes, meta, template } =
  getStorybookMeta<OscdSplitPaneHorizontal>({
    tagName: 'oscd-split-pane-horizontal',
    defaultArgs: {
      id: 'storybook-horizontal-pane',
      defaultSize: 130,
      size: 160,
    },
  });

const cssVarArgTypes = {
  '--oscd-divider-visual': {
    control: { type: 'text' },
    table: { category: 'CSS Variables' },
    description: 'Visible divider line thickness (e.g. 2px).',
  },
  '--oscd-divider-hit': {
    control: { type: 'text' },
    table: { category: 'CSS Variables' },
    description: 'Interactive divider hit area size (e.g. 10px).',
  },
  '--oscd-divider-color': {
    control: { type: 'color' },
    table: { category: 'CSS Variables' },
    description: 'Divider base color.',
  },
  '--oscd-divider-hover': {
    control: { type: 'color' },
    table: { category: 'CSS Variables' },
    description: 'Divider hover/active color.',
  },
  '--oscd-divider-icon-color': {
    control: { type: 'color' },
    table: { category: 'CSS Variables' },
    description: 'Fallback divider icon color.',
  },
  '--oscd-divider-icon-hover-color': {
    control: { type: 'color' },
    table: { category: 'CSS Variables' },
    description: 'Fallback divider icon hover color.',
  },
};

const storyArgs = {
  ...args,
  '--oscd-divider-visual': '2px',
  '--oscd-divider-hit': '10px',
  '--oscd-divider-color': '#d0d0d0',
  '--oscd-divider-hover': '#a8a8a8',
  '--oscd-divider-icon-color': '#9aa0a6',
  '--oscd-divider-icon-hover-color': '#5f6368',
};

const storyArgTypes = {
  ...argTypes,
  ...cssVarArgTypes,
};

function renderPane(argz: typeof args, iconSlots = html``) {
  return html` <style>
      oscd-split-pane-horizontal {
        width: 600px;
        height: 300px;
      }

      .top-pane,
      .bottom-pane {
        flex: 1 1 auto;
        min-width: 0;
        min-height: 0;
        overflow: auto;
      }

      h2 {
        color: white;
        margin: 0;
      }

      .top-pane {
        background-color: red;
      }

      .bottom-pane {
        background-color: green;
      }
    </style>
    ${template(
      { ...argz },
      html`
        <div slot="top" class="top-pane">
          <h2>What goes up...</h2>
        </div>
        <div slot="bottom" class="bottom-pane">
          <h2>Must come down</h2>
        </div>
        ${iconSlots}
      `,
    )}`;
}

export default {
  ...meta,
  title: 'Layout / Split Pane Horizontal',
  tags: ['autodocs'],
  parameters: {
    ...meta.parameters,
    docs: {
      ...(meta.parameters?.['docs'] ?? {}),
      description: {
        component:
          'Persistence requires an `id` on the component. Stored key format is `<namespace>:<id>:<field>`.',
      },
    },
  },
  render: (argz: typeof args) => renderPane(argz),
};

export const Default: StoryObj = {
  argTypes: storyArgTypes as ArgTypes,
  args: storyArgs,
};

export const CustomIcon: StoryObj = {
  argTypes: storyArgTypes as ArgTypes,
  args: { ...storyArgs, id: 'storybook-horizontal-pane-custom' },
  render: (argz: typeof args) =>
    renderPane(
      { ...argz, id: 'storybook-horizontal-pane-custom' },
      html`<oscd-icon slot="icon">unfold_more</oscd-icon>`,
    ),
};

export const CustomExpandIcon: StoryObj = {
  argTypes: storyArgTypes as ArgTypes,
  args: { ...storyArgs, id: 'storybook-horizontal-pane-expand-icon' },
  render: (argz: typeof args) =>
    renderPane(
      { ...argz, id: 'storybook-horizontal-pane-expand-icon' },
      html`
        <oscd-icon style="color:blue;" slot="expandIcon"
          >mobiledata_arrows</oscd-icon
        >
        <oscd-icon style="color:purple;" slot="icon">top_panel_open</oscd-icon>
      `,
    ),
};
