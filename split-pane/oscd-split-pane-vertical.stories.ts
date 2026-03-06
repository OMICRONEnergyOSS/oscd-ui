import { html } from 'lit';
import type { ArgTypes, StoryObj } from '@storybook/web-components-vite';
import { OscdSplitPaneVertical } from './OscdSplitPaneVertical.js';
import { getStorybookMeta } from '../utils/storybook/getStorybookMeta.js';
import '../icon/oscd-icon.js';
import './oscd-split-pane-vertical.js';

const { args, argTypes, meta, template } =
  getStorybookMeta<OscdSplitPaneVertical>({
    tagName: 'oscd-split-pane-vertical',
    defaultArgs: {
      id: 'storybook-vertical-pane',
      defaultSize: 300,
      size: 500,
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

const componentArgTypes = {
  defaultSize: {
    control: { type: 'number' },
    description: 'Default size (px) used when expanding from collapsed state.',
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
  defaultSize: 300,
  size: 300, // ordinarily you wouldn't need to set size, but if storybook doesn't get a value, it set will default to 0
};

const storyArgTypes = {
  ...argTypes,
  ...componentArgTypes,
  ...cssVarArgTypes,
};

function renderPane(
  argz: typeof args,
  iconSlots = html``,
  paneId = 'storybook-vertical-pane',
) {
  console.log('renderPane with args', argz);
  return html` <style>
      oscd-split-pane-vertical {
        width: 600px;
        height: 300px;
      }

      .left-pane,
      .right-pane {
        flex: 1 1 auto;
        min-width: 0;
        min-height: 0;
        overflow: auto;
      }

      h2 {
        color: white;
        margin: 0;
      }

      .left-pane {
        background-color: red;
      }

      .right-pane {
        background-color: green;
      }
    </style>
    ${template(
      { ...argz, id: paneId },
      html`
        <div slot="left" class="left-pane">
          <h2>Put your Left leg in</h2>
        </div>
        <div slot="right" class="right-pane">
          <h2>Put your right leg out</h2>
        </div>
        ${iconSlots}
      `,
    )}`;
}

export default {
  ...meta,
  title: 'Layout / Split Pane Vertical',
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
  args: { ...storyArgs, size: 400 },
};

export const CustomIcon: StoryObj = {
  argTypes: storyArgTypes as ArgTypes,
  args: { ...storyArgs, id: 'storybook-vertical-pane-custom' },
  render: (argz: typeof args) =>
    renderPane(
      argz,
      html`<oscd-icon slot="icon">unfold_more</oscd-icon>`,
      'storybook-vertical-pane-custom',
    ),
};

export const CustomExpandIcon: StoryObj = {
  argTypes: storyArgTypes as ArgTypes,
  args: { ...storyArgs, id: 'storybook-vertical-pane-expand-icon' },
  render: (argz: typeof args) =>
    renderPane(
      argz,
      html`
        <oscd-icon slot="icon">first_page</oscd-icon>
        <oscd-icon slot="expandIcon">last_page</oscd-icon>
      `,
      'storybook-vertical-pane-expand-icon',
    ),
};
