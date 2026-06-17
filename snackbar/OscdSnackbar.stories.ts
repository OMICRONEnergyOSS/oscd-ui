import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';

import '../button/oscd-filled-button.js';
import '../button/oscd-text-button.js';
import '../dialog/oscd-dialog.js';
import '../select/oscd-outlined-select.js';
import '../select/oscd-select-option.js';
import '../textfield/oscd-outlined-text-field.js';
import './oscd-snackbar.js';
import type { OscdDialog } from '../dialog/OscdDialog.js';
import type { OscdSnackbar } from './OscdSnackbar.js';
import type {
  SnackbarAutoDismiss,
  SnackbarMode,
  SnackbarVariant,
} from './OscdSnackbar.js';

type StoryArgs = {
  message: string;
  variant: SnackbarVariant;
  autoDismiss: string;
  mode: SnackbarMode;
  maxVisible: number;
  dismissible: boolean;
};

type ValueElement = HTMLElement & {
  value: string;
};

const meta: Meta<StoryArgs> = {
  title: 'Feedback / Snackbar',
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    autoDismiss: { control: 'text' },
    mode: {
      control: 'select',
      options: ['replace', 'stack'],
    },
    maxVisible: { control: 'number' },
    dismissible: { control: 'boolean' },
  },
  args: {
    message:
      'This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.',
    variant: 'info',
    autoDismiss: 'false',
    mode: 'stack',
    maxVisible: 3,
    dismissible: true,
  },
};

export default meta;

function parseAutoDismiss(value: string): SnackbarAutoDismiss | undefined {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return undefined;
  }

  if (trimmedValue === 'true') {
    return true;
  }

  if (trimmedValue === 'false') {
    return false;
  }

  const numericValue = Number(trimmedValue);

  return Number.isNaN(numericValue) ? undefined : numericValue;
}

export const Playground: StoryObj<StoryArgs> = {
  render: args => {
    const snackbarRef = createRef<OscdSnackbar>();
    const messageRef = createRef<ValueElement>();
    const variantRef = createRef<ValueElement>();
    const autoDismissRef = createRef<ValueElement>();
    const modeRef = createRef<ValueElement>();
    const maxVisibleRef = createRef<ValueElement>();

    const showSnackbar = () => {
      const snackbar = snackbarRef.value;

      if (!snackbar) {
        return;
      }

      snackbar.mode = (modeRef.value?.value as SnackbarMode) ?? args.mode;
      snackbar.maxVisible =
        Number(maxVisibleRef.value?.value) || args.maxVisible;
      snackbar.show({
        message: messageRef.value?.value ?? args.message,
        variant:
          (variantRef.value?.value as SnackbarVariant | undefined) ??
          args.variant,
        autoDismiss: parseAutoDismiss(
          autoDismissRef.value?.value ?? args.autoDismiss,
        ),
        dismissible: args.dismissible,
      });
    };

    return html`<div
      style="display: grid; gap: 16px; padding-block-start: 8px;"
    >
      <div
        style="
          display: grid;
          grid-template-columns:
            minmax(360px, 1fr)
            minmax(160px, 180px)
            minmax(160px, 180px)
            minmax(160px, 180px)
            minmax(120px, 140px)
            auto;
          gap: 16px;
          align-items: end;
        "
      >
        <oscd-outlined-text-field
          ${ref(messageRef)}
          label="Message"
          style="width: 100%; min-width: 0;"
          .value=${args.message}
        ></oscd-outlined-text-field>
        <oscd-outlined-select
          ${ref(variantRef)}
          label="Variant"
          style="width: 100%; min-width: 0;"
          .value=${args.variant}
        >
          <oscd-select-option value="info">info</oscd-select-option>
          <oscd-select-option value="success">success</oscd-select-option>
          <oscd-select-option value="warning">warning</oscd-select-option>
          <oscd-select-option value="error">error</oscd-select-option>
        </oscd-outlined-select>
        <oscd-outlined-text-field
          ${ref(autoDismissRef)}
          label="Auto dismiss"
          style="width: 100%; min-width: 0;"
          .value=${args.autoDismiss}
        ></oscd-outlined-text-field>
        <oscd-outlined-select
          ${ref(modeRef)}
          label="Mode"
          style="width: 100%; min-width: 0;"
          .value=${args.mode}
        >
          <oscd-select-option value="replace">replace</oscd-select-option>
          <oscd-select-option value="stack">stack</oscd-select-option>
        </oscd-outlined-select>
        <oscd-outlined-text-field
          ${ref(maxVisibleRef)}
          label="Max"
          type="number"
          min="1"
          style="width: 100%; min-width: 0;"
          .value=${String(args.maxVisible)}
        ></oscd-outlined-text-field>
        <oscd-filled-button style="white-space: nowrap;" @click=${showSnackbar}>
          Open
        </oscd-filled-button>
      </div>
      <oscd-snackbar ${ref(snackbarRef)}></oscd-snackbar>
    </div>`;
  },
};

export const Variants: StoryObj = {
  render: () => {
    const snackbarRef = createRef<OscdSnackbar>();

    queueMicrotask(() => {
      const snackbar = snackbarRef.value;

      if (!snackbar) {
        return;
      }

      snackbar.mode = 'stack';
      snackbar.maxVisible = 3;
      snackbar.show({
        message:
          'This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.',
        variant: 'warning',
        autoDismiss: false,
        action: {
          label: 'See More',
          onClick: () => undefined,
        },
      });
      snackbar.show({
        message: 'Upload was successful!',
        variant: 'success',
        autoDismiss: false,
        action: {
          label: 'See More',
          onClick: () => undefined,
        },
      });
      snackbar.show({
        message:
          'This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.',
        variant: 'error',
        autoDismiss: false,
        action: {
          label: 'See More',
          onClick: () => undefined,
        },
      });
    });

    return html`<oscd-snackbar ${ref(snackbarRef)}></oscd-snackbar>`;
  },
};

const longValidationMessage = `This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipment, {http://www.iec.ch/61850/2003/SCL}EqFunction, {http://www.iec.ch/61850/2003/SCL}Function, {http://www.iec.ch/61850/2003/SCL}LNode, {http://www.iec.ch/61850/2003/SCL}GeneralEquipment). Found {http://www.iec.ch/61850/2003/SCL}HzRtg at path /SCL/Substation/VoltageLevel/Bay/ConductingEquipment/Terminal.`;

export const LongMessageWithDetails: StoryObj = {
  render: () => {
    const snackbarRef = createRef<OscdSnackbar>();
    const dialogRef = createRef<OscdDialog>();

    queueMicrotask(() => {
      snackbarRef.value?.show({
        message: longValidationMessage,
        variant: 'warning',
        autoDismiss: false,
        action: {
          label: 'Details',
          onClick: () => {
            dialogRef.value?.show();
          },
        },
      });
    });

    return html`<oscd-snackbar ${ref(snackbarRef)}></oscd-snackbar>
      <oscd-dialog ${ref(dialogRef)}>
        <div slot="headline">Validation details</div>
        <div slot="content" style="white-space: pre-wrap;">
          ${longValidationMessage}
        </div>
        <oscd-text-button
          slot="actions"
          @click=${() => dialogRef.value?.close()}
        >
          Close
        </oscd-text-button>
      </oscd-dialog>`;
  },
};
