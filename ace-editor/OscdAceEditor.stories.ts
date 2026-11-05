import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import './oscd-ace-editor.js';
import { sampleScl } from './sample-scl.js';
import { getStorybookMeta } from '../utils/storybook/getStorybookMeta.js';

type EditorArgs = {
  value: string;
  toolbar: boolean;
};

const {
  args,
  argTypes,
  meta: editorMeta,
} = getStorybookMeta<EditorArgs>({
  tagName: 'oscd-ace-editor',
  defaultArgs: { value: sampleScl, toolbar: false },
  options: { omitTextContent: true },
});

const meta: Meta<EditorArgs> = {
  ...editorMeta,
  title: 'Editors / Ace Editor',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Text-in/text-out editor. The live value is a string; optional validation is application-defined, not SCL schema validation. User edits emit input and a compatible CustomEvent<string> change. Programmatic writes emit neither. The SCL Editor adds namespace-aware Element conversion.',
      },
    },
  },
  args,
  argTypes: {
    ...argTypes,
    value: { control: 'text' },
    toolbar: { control: 'boolean' },
  },
  render: args => html`
    <oscd-ace-editor
      .value=${args.value}
      .toolbar=${args.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-ace-editor>
  `,
};

export default meta;
type Story = StoryObj<EditorArgs>;

export const FullSclDocument: Story = {
  name: 'SCL Doc as text',
  parameters: {
    docs: {
      description: {
        story:
          'Pass the complete shared SCL file as a string through .value. The editor displays the whole document.',
      },
    },
  },
};
export const WithToolbar: Story = { args: { toolbar: true } };

const validateExample = (text: string): string | null => {
  const document = new DOMParser().parseFromString(text, 'application/xml');
  return document.querySelector('parsererror') === null
    ? null
    : 'Enter one well-formed XML document';
};

export const WithValidator: Story = {
  name: 'Custom validation callback',
  parameters: {
    docs: {
      description: {
        story:
          'Supply an application-defined .validator callback that returns an error message or null. This example checks only XML well-formedness, not SCL schema validity. It starts with malformed <example>; click Check XML to display the form validation error, then change the text to <example/> to make it valid.',
      },
    },
  },
  args: { value: '<example>', toolbar: true },
  render: args => html`
    <form style="display: flex; flex-direction: column; height: 100vh;">
      <oscd-ace-editor
        name="xml"
        .validator=${validateExample}
        .value=${args.value}
        .toolbar=${args.toolbar}
        style="flex: 1; min-height: 0; height: auto; width: 100%;"
      ></oscd-ace-editor>
      <button
        type="button"
        style="flex-shrink: 0;"
        @click=${(event: Event) => {
          const target = event.currentTarget;
          if (target instanceof HTMLButtonElement) {
            target.form?.reportValidity();
          }
        }}
      >
        Check XML
      </button>
    </form>
  `,
};
