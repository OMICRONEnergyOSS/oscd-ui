import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-select-option.js';
import { OscdSelectOption } from './OscdSelectOption.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import { html } from 'lit';

const { args, argTypes, meta, template } = getStorybookMeta<OscdSelectOption>({
  tagName: 'oscd-select-option',
});

export default {
  ...meta,
  title: 'Selects / Select Option',
  tags: ['autodocs'],
  render: ({ textContent, ...argz }: typeof args) => html`
    <div style="position: relative;--md-elevation-level: 2;">
      ${template(argz, html`${textContent}`)}
      <oscd-elevation></oscd-elevation>
    </div>
  `,
};

export const Default: StoryObj = {
  argTypes,
  args: { ...args, textContent: 'My List Option' },
};
