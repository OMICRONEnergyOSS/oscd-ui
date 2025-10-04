import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { OscdNavigationDrawerHeader } from 'navigation-drawer/OscdNavigationDrawerHeader';
import { OscdElevation } from 'elevation/OscdElevation';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template } = getStorybookHelpers(
  'oscd-navigation-drawer-header',
);

const meta: Meta<OscdNavigationDrawerHeader & { textContent: string }> = {
  title: 'Library/Navigation Drawer/Navigation Drawer Header',
  component: 'oscd-navigation-drawer-header',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-navigation-drawer-header': OscdNavigationDrawerHeader,
      'oscd-elevation': OscdElevation,
    },
  },

  render: ({ textContent, ...argz }) => html`
    <div style="position: relative;--md-elevation-level: 2;">
      ${template(argz, html`${textContent}`)}
      <oscd-elevation></oscd-elevation>
    </div>
  `,
  argTypes: {
    ...argTypes,
    textContent: {
      control: { type: 'text' },
      name: 'Text Content',
      description: 'Header label',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    ...args,
    textContent: 'Navigation Header',
  },
};
