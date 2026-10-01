import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { scopedWcDecorator } from '@/utils/storybook/scopedWcDecorator.js';
import { OscdFilledButton } from '../../button/OscdFilledButton.js';
import { OscdWarnDialog } from './OscdWarnDialog.js';

const meta: Meta = {
  title: 'Dialogs / Warning Dialog',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-filled-button': OscdFilledButton,
      'oscd-warn-dialog': OscdWarnDialog,
    },
  },
  render: () => html`
    <oscd-filled-button
      @click=${(event: Event) => {
        const button = event.currentTarget;
        if (!(button instanceof HTMLElement)) {
          return;
        }

        const root = button.getRootNode();
        if (!(root instanceof ShadowRoot)) {
          return;
        }

        const dialog = root.querySelector('oscd-warn-dialog');
        if (dialog instanceof OscdWarnDialog) {
          dialog.warning({
            heading: 'Unsaved changes',
            message: 'This is an example warning dialog.',
            onOk: () => {},
          });
        }
      }}
      >Show warning</oscd-filled-button
    >
    <oscd-warn-dialog></oscd-warn-dialog>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
