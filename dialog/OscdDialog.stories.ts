import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { withActions } from '@storybook/addon-actions/decorator';

import { OscdDialog } from 'dialog/OscdDialog';
import { OscdFilledButton } from 'button/OscdFilledButton';
import { scopedWcDecorator } from 'utils/storybook/scopedWcDecorator.js';
import { useArgs } from '@storybook/preview-api';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';
import { action } from '@storybook/addon-actions';

const { args, argTypes, events } = getStorybookHelpers('oscd-dialog');

const { open: openArgType, ...otherArgTypes } = argTypes;

// It isn't possible to use the storybookHelper template function,because
// the open attribute is unfortunately not being typed correclty in the manifest.
const meta: Meta<OscdDialog> = {
  title: 'Library/Dialog',
  component: 'oscd-dialog',
  tags: ['autodocs'],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-dialog': OscdDialog,
      'oscd-filled-button': OscdFilledButton,
    },
    actions: {
      handles: events,
    },
  },
  //eslint-disable-next-line
  render: argz => {
    const [_, updateArgs] = useArgs();
    return html`
      <oscd-filled-button
        @click=${() => {
          updateArgs({ open: true });
        }}
        >Open Dialog</oscd-filled-button
      >
      
        <oscd-dialog ?open=${argz.open}
            @closed=${(event: CustomEvent) => {
              action('dialog closed')({ event });
              updateArgs({ open: false });
            }}>
          <div slot="headline">Confirm Action</div>
          <div slot="content">
            Are you sure you want to proceed with this operation? This action
            cannot be undone.
          </div>
          <div slot="actions">
            <oscd-filled-button @click=${() => updateArgs({ open: false })}
              >Cancel</oscd-filled-button
            >
            <oscd-filled-button @click=${() => updateArgs({ open: false })}
              >Confirm</oscd-filled-button
            >
          </div>
        </oscd-dialog>
      </div>
    `;
  },
  argTypes: {
    ...otherArgTypes,
    open: {
      ...openArgType,
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    open: false,
    ...args,
  },
};
