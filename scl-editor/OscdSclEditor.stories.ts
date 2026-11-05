import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

import './oscd-scl-editor.js';
import { sampleScl } from '../ace-editor/sample-scl.js';
import { getStorybookMeta } from '../utils/storybook/getStorybookMeta.js';

type EditorArgs = {
  toolbar: boolean;
};

const {
  args,
  argTypes,
  meta: editorMeta,
} = getStorybookMeta<EditorArgs>({
  tagName: 'oscd-scl-editor',
  defaultArgs: { toolbar: false },
  options: { omitTextContent: true },
});

function sampleDocument(): XMLDocument {
  return new DOMParser().parseFromString(sampleScl, 'application/xml');
}

function sampleElement(): Element {
  const element = sampleDocument().querySelector('IED[name="PUB_A"]');
  if (element === null) {
    throw new Error('The shared SCL demo must contain the PUB_A IED');
  }
  return element;
}

const meta: Meta<EditorArgs> = {
  ...editorMeta,
  title: 'Editors / SCL Editor',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Element-in/Element-out editor built on the Ace Editor. Setting element captures in-scope namespaces; reading element parses a new Element, or returns null for empty/invalid text. The original document is never modified. The inherited value exposes text. Validation checks one well-formed element, not SCL schema conformance. Empty input is allowed.',
      },
    },
  },
  args,
  argTypes: { ...argTypes, toolbar: { control: 'boolean' } },
  render: args => html`
    <oscd-scl-editor
      .element=${sampleElement()}
      .toolbar=${args.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  `,
};

export default meta;
type Story = StoryObj<EditorArgs>;

export const FullSclDocument: Story = {
  name: 'Full SCL Document',
  parameters: {
    docs: {
      description: {
        story:
          'Parse the shared SCL file and pass document.documentElement through .element to edit the entire SCL tree. This uses the root Element, not the XMLDocument object; the XML declaration and document-level nodes are not included.',
      },
    },
  },
  render: args => html`
    <oscd-scl-editor
      .element=${sampleDocument().documentElement}
      .toolbar=${args.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  `,
};
export const SclElement: Story = {
  name: 'SCL Element',
  parameters: {
    docs: {
      description: {
        story:
          'Parse the same shared SCL file, select its PUB_A IED Element, and pass it through .element. The editor displays only that element, not the whole document.',
      },
    },
  },
};
export const WithToolbar: Story = { args: { toolbar: true } };
export const InvalidXml: Story = {
  render: args => html`
    <oscd-scl-editor
      .value=${'<Substation name="A1"'}
      .toolbar=${args.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  `,
};
export const Empty: Story = {
  render: args => html`
    <oscd-scl-editor
      .toolbar=${args.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  `,
};
