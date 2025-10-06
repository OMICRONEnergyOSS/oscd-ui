import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-secondary-tab.js';
import { OscdSecondaryTab } from './OscdSecondaryTab.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import { html, nothing } from 'lit';

const { args, argTypes, meta, template } = getStorybookMeta<OscdSecondaryTab>({
  tagName: 'oscd-secondary-tab',
});

export default {
  ...meta,
  title: 'Tabs / Secondary Tab',
  tags: ['autodocs'],
  render: ({ textContent, ...argz }: typeof args) =>
    template(
      argz,
      html`
        ${argz['has-icon']
          ? html`<oscd-icon>shop</oscd-icon>`
          : nothing}${textContent}
      `,
    ),
};

export const Default: StoryObj = {
  argTypes,
  args: {
    ...args,
    textContent: 'Secodary Tab',
  },
};
