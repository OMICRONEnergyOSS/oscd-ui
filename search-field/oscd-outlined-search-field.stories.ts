import type { StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { action } from 'storybook/actions';

import '../icon/oscd-icon.js';
import '../iconbutton/oscd-icon-button.js';
import './oscd-outlined-search-field.js';
import { OscdOutlinedSearchField } from './OscdOutlinedSearchField.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdOutlinedSearchField>({
  tagName: 'oscd-outlined-search-field',
  options: { omitTextContent: true },
});

export default {
  title: 'Inputs / Outlined Search Field',
  tags: ['autodocs'],
  ...meta,
};

export const Empty: StoryObj = {
  argTypes,
  args: {
    ...args,
    placeholder: 'Search',
    clearLabel: 'Clear search',
  },
};

export const WithValue: StoryObj = {
  argTypes,
  args: {
    ...args,
    placeholder: 'Search',
    clearLabel: 'Clear search',
    value: 'Some text',
  },
};

export const Disabled: StoryObj = {
  argTypes,
  args: {
    ...args,
    placeholder: 'Search',
    clearLabel: 'Clear search',
    disabled: true,
  },
};

export const CustomLeadingSlot: StoryObj = {
  argTypes,
  args: {
    ...args,
    placeholder: 'Search files',
  },
  render: ({ placeholder }) => html`
    <oscd-outlined-search-field .placeholder=${placeholder}>
      <oscd-icon-button
        slot="leading-icon"
        aria-label="Search files"
        @click=${() => action('leading search button')('clicked')}
      >
        <oscd-icon>folder</oscd-icon>
      </oscd-icon-button>
    </oscd-outlined-search-field>
  `,
};

export const CustomLeadingAndTrailingSlots: StoryObj = {
  argTypes,
  args: {
    ...args,
    placeholder: 'Search',
  },
  render: ({ placeholder }) => html`
    <oscd-outlined-search-field .placeholder=${placeholder} value="Some text">
      <oscd-icon-button
        slot="leading-icon"
        aria-label="Search files"
        @click=${() => action('leading search button')('clicked')}
      >
        <oscd-icon>folder</oscd-icon>
      </oscd-icon-button>
      <oscd-icon-button
        slot="trailing-icon"
        aria-label="Search"
        @click=${() => action('trailing search button')('clicked')}
      >
        <oscd-icon>search</oscd-icon>
      </oscd-icon-button>
    </oscd-outlined-search-field>
  `,
};
