import { html } from 'lit';
import type { StoryObj } from '@storybook/web-components-vite';
import { OscdTabs } from './OscdTabs.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import './oscd-tabs.js';
import './oscd-primary-tab.js';
import './oscd-secondary-tab.js';
import '../icon/oscd-icon.js';

const { args, argTypes, meta, template } = getStorybookMeta<OscdTabs>({
  tagName: 'oscd-tabs',
});

export default {
  title: 'Tabs / Tabs',
  tags: ['autodocs'],
  ...meta,
};

export const WithPrimaryTabs: StoryObj = {
  argTypes,
  args,
  render: argz =>
    template(
      argz,
      html`
        <oscd-primary-tab has-icon
          ><oscd-icon>edit</oscd-icon>Tab 1</oscd-primary-tab
        >
        <oscd-primary-tab has-icon
          ><oscd-icon>settings</oscd-icon>Tab 2</oscd-primary-tab
        >
      `,
    ),
};
export const WithSecondaryTabs: StoryObj = {
  argTypes,
  args,
  render: argz =>
    template(
      argz,
      html`
        <oscd-secondary-tab has-icon
          ><oscd-icon>edit</oscd-icon>Tab 1</oscd-secondary-tab
        >
        <oscd-secondary-tab has-icon
          ><oscd-icon>settings</oscd-icon>Tab 2</oscd-secondary-tab
        >
      `,
    ),
};
