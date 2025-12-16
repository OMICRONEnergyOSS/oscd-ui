import { html } from 'lit';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-action-icon.js';
import '../icon/oscd-icon.js';
import { OscdActionIcon } from './OscdActionIcon.js';

const { args, argTypes, meta, template } = getStorybookMeta<
  OscdActionIcon & { width: number; height: number }
>({
  tagName: 'oscd-action-icon',
  defaultArgs: {
    label: 'Action Icon',
    icon: 'settings',
    width: 200,
    height: 300,
  },
});

export default {
  ...meta,
  title: 'Action Controls/Action Icon',
  tags: ['autodocs'],
  argTypes: {
    ...argTypes,
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

export const DefaultPrimary: StoryObj = {
  argTypes,
  args,
  render: argz => {
    return html`<div
      style=${`width: ${argz['width']}px; height: ${argz['height']}px;`}
    >
      <div style="height:100px"></div>
      ${template(argz, html`<div></div>`)}
    </div>`;
  },
};

export const Secondary: StoryObj = {
  argTypes,
  args: {
    ...args,
    secondary: true,
  },
  render: argz => {
    return html`<div
      style=${`width: ${argz['width']}px; height: ${argz['height']}px;`}
    >
      <div style="height:100px"></div>
      ${template(argz, html`<div></div>`)}
    </div>`;
  },
};

export const Highlighted: StoryObj = {
  argTypes,
  args: {
    ...args,
    highlighted: true,
  },
  render: argz => {
    return html`<div
      style=${`width: ${argz['width']}px; height: ${argz['height']}px;`}
    >
      <div style="height:100px"></div>
      ${template(argz, html`<div></div>`)}
    </div>`;
  },
};

export const WithActionItems: StoryObj = {
  argTypes,
  args,
  render: argz => {
    return html`<div
      style=${`width: ${argz['width']}px; height: ${argz['height']}px;`}
    >
      <div style="height:100px"></div>
      ${template(
        argz,
        html` <style>
            button-fart {
              margin-top: -56px;
              margin-left: 8px;
            }
          </style>
          <button slot="action">1</button>
          <button slot="action">2</button>
          <button slot="action">3</button>
          <button slot="action">4</button>
          <button slot="action">5</button>
          <button slot="action">6</button>
          <button slot="action">7</button>
          <button slot="action">8</button>
          <div></div>`,
      )}
    </div>`;
  },
};

export const WithIconSlot: StoryObj = {
  argTypes,
  args,
  render: argz => {
    return html`<div
      style=${`width: ${argz['width']}px; height: ${argz['height']}px;`}
    >
      <div style="height:100px"></div>
      ${template(
        argz,
        html`<oscd-icon slot="icon">delete</oscd-icon>
          <div></div>`,
      )}
    </div>`;
  },
};
