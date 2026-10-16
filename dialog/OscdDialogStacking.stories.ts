import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { scopedWcDecorator } from '@/utils/storybook/scopedWcDecorator.js';
import { OscdFilledButton } from '../button/OscdFilledButton.js';
import { OscdTextButton } from '../button/OscdTextButton.js';
import { OscdDialog } from './OscdDialog.js';

function getDialog(event: Event, id: string): OscdDialog {
  const button = event.currentTarget;
  if (!(button instanceof HTMLElement)) {
    throw new Error('Missing dialog action');
  }
  const root = button.getRootNode();
  if (!(root instanceof ShadowRoot)) {
    throw new Error('Missing scoped story root');
  }
  const dialog = root.querySelector(`#${id}`);
  if (!(dialog instanceof OscdDialog)) {
    throw new Error(`Missing dialog: ${id}`);
  }
  return dialog;
}

const meta: Meta = {
  title: 'Dialogs / Stacked dialogs',
  tags: ['autodocs'],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: 'centered',
    scopedElements: {
      'oscd-dialog': OscdDialog,
      'oscd-filled-button': OscdFilledButton,
      'oscd-text-button': OscdTextButton,
    },
    docs: {
      description: {
        component:
          'Open one dialog above another dialog. The upper scrim should shade the entire underlying dialog without shading its own surface. Back, Escape, and clicking outside the upper dialog should return to the still-open previous dialog and restore focus. Tab navigation should stay in the upper dialog.',
      },
    },
  },
  render: () => html`
    <oscd-filled-button
      type="button"
      @click=${(event: Event) => getDialog(event, 'selection').show()}
    >
      Open first dialog
    </oscd-filled-button>
    <oscd-dialog
      id="selection"
      style="width: 680px; height: 680px; max-width: calc(100vw - 48px); max-height: calc(100dvh - 48px)"
    >
      <div slot="headline">Main Dialog</div>
      <div slot="content">
        <p>
          This larger dialog should remain open underneath the confirmation
          dialog.
        </p>
        <label>
          <input type="checkbox" checked />
          Example selection
        </label>
        <p>
          Clicking Submit opens a second "Confirm" dialog over this one. Its
          scrim should shade this content, including the headline and actions.
          The selection must remain unchanged when you return.
        </p>
      </div>
      <div slot="actions">
        <oscd-text-button
          type="button"
          @click=${(event: Event) => getDialog(event, 'selection').close()}
        >
          Cancel
        </oscd-text-button>
        <oscd-filled-button
          type="button"
          @click=${(event: Event) => getDialog(event, 'confirmation').show()}
        >
          Submit
        </oscd-filled-button>
      </div>
    </oscd-dialog>
    <oscd-dialog id="confirmation">
      <div slot="headline">Confirmation Dialog</div>
      <div slot="content">
        <p>Confirm something important</p>
        <p>
          Back returns to the still-open dialog. Confirm closes both dialogs.
        </p>
      </div>
      <div slot="actions">
        <oscd-text-button
          type="button"
          @click=${(event: Event) => getDialog(event, 'confirmation').close()}
        >
          Back
        </oscd-text-button>
        <oscd-filled-button
          type="button"
          @click=${async (event: Event) => {
            const confirmation = getDialog(event, 'confirmation');
            const selection = getDialog(event, 'selection');
            await confirmation.close();
            await selection.close();
          }}
        >
          Confirm
        </oscd-filled-button>
      </div>
    </oscd-dialog>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
