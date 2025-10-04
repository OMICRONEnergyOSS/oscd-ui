import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { withActions } from 'storybook/actions/decorator';
import { OscdSelectOption } from 'select/OscdSelectOption';
import { OscdElevation } from 'elevation/OscdElevation';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

const { args, argTypes, template, events } =
  getStorybookHelpers('oscd-select-option');

const meta: Meta<OscdSelectOption & { textContent: string }> = {
  title: 'Library/Selects/Select Option',
  component: 'oscd-select-option',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-select-option': OscdSelectOption,
      'oscd-elevation': OscdElevation,
    },
    actions: {
      handles: ['click', ...events],
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
      name: 'Text Content',
      control: { type: 'text' },
      description: 'Option label',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    ...args,
    textContent: 'Select option',
  },
};
