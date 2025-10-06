import { html, nothing } from 'lit';
import type { StoryObj } from '@storybook/web-components-vite';
import { OscdPrimaryTab } from './OscdPrimaryTab.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import './oscd-primary-tab.js';
import '../icon/oscd-icon.js';

const { args, argTypes, meta, template } = getStorybookMeta<OscdPrimaryTab>({
  tagName: 'oscd-primary-tab',
});

export default {
  ...meta,
  title: 'Tabs / Primary Tab',
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
    textContent: 'Primary Tab',
  },
};
