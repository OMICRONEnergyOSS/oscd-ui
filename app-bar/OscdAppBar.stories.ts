import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { OscdList } from 'list/OscdList.js';
import { OscdListItem } from 'list/OscdListItem.js';
import { OscdIcon } from 'icon/OscdIcon.js';
import { OscdTabs } from 'tabs/OscdTabs.js';
import { OscdSecondaryTab } from 'tabs/OscdSecondaryTab.js';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import { OscdFilledIconButton } from 'iconbutton/OscdFilledIconButton.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';
import { action } from 'storybook/actions';
import { OscdDivider } from '../divider/OscdDivider.js';
import { OscdAppBar } from './OscdAppBar.js';

const { args, argTypes, template } = getStorybookHelpers('oscd-app-bar', {
  excludeCategories: ['slots'],
});

const meta: Meta<OscdAppBar & typeof args> = {
  title: 'App Bar/App Bar',
  component: 'oscd-app-bar',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator, storybookHelperDecorator],

  args,
  parameters: {
    layout: 'fullscreen',
    scopedElements: {
      'oscd-app-bar': OscdAppBar,
      'oscd-divider': OscdDivider,
      'oscd-filled-icon-button': OscdFilledIconButton,
      'oscd-icon': OscdIcon,
      'oscd-list': OscdList,
      'oscd-list-item': OscdListItem,
      'oscd-tabs': OscdTabs,
      'oscd-secondary-tab': OscdSecondaryTab,
    },
  },
  render: ({ title, subHeader, ...rest }) =>
    html` ${template(
      rest,
      html`<oscd-filled-icon-button
          slot="alignStart"
          aria-label="Menu"
          @click=${(event: Event) => {
            action('actionStart clicked')({ event });
          }}
        >
          <oscd-icon>menu</oscd-icon></oscd-filled-icon-button
        >
        <div slot="alignMiddle">${title}</div>
        <oscd-filled-icon-button
          slot="alignEnd"
          aria-label="Menu"
          @click=${(event: Event) => {
            action('alignEnd clicked')({ event });
          }}
        >
          <oscd-icon>more_vert</oscd-icon></oscd-filled-icon-button
        >
        ${subHeader && subHeader()}
      </oscd-app-bar>
    `,
    )}`,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'App Bar Title',
    },
    ...argTypes,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'My App Bar',
  },
};

export const WithSubHeader: Story = {
  args: {
    title: 'My App Bar (with subheader)',
    subHeader: () => html`
      <oscd-tabs style="width:100%;">
        <oscd-secondary-tab>Video</oscd-secondary-tab>
        <oscd-secondary-tab>Photos</oscd-secondary-tab>
        <oscd-secondary-tab>Audio</oscd-secondary-tab>
      </oscd-tabs>
    `,
  },
};
