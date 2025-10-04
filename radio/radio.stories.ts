import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { withActions } from 'storybook/actions/decorator';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

import { OscdRadio } from 'radio/OscdRadio.js';

const { args, argTypes, template, events } = getStorybookHelpers('oscd-radio');

const meta: Meta<OscdRadio> = {
  title: 'Library/Radio/Radio Buttons',
  component: 'oscd-radio',
  tags: ['autodocs'],
  decorators: [withActions, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click', ...events],
    },
  },
  render: argz => html`<label>${template(argz)}Choose Me</label>`,

  argTypes,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args,
  name: 'Single Radio',
};

export const RadioButtons: Story = {
  args,
  render: () => html`
    <h3 id="group-title">Decide</h3>
    <div
      role="radiogroup"
      aria-labelledby="group-title"
      style="display: flex; gap: 1rem; flex-direction: column;"
    >
      <div>
        <oscd-radio
          id="first-radio"
          name="group"
          value="1"
          aria-label="First"
        ></oscd-radio>
        <label for="first-radio">Red Pill</label>
      </div>
      <div>
        <oscd-radio
          id="second-radio"
          name="group"
          value="2"
          aria-label="Second"
        ></oscd-radio>
        <label for="second-radio">Blue Pill</label>
      </div>
    </div>
  `,
};
