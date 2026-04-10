import type { StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './oscd-ace-editor.js';
import type { OscdAceEditor } from './OscdAceEditor.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdAceEditor>({
  tagName: 'oscd-ace-editor',
});

export default {
  ...meta,
  title: 'Editors / Ace Editor',
  tags: ['autodocs'],
};

const sampleXml = `<?xml version="1.0" encoding="UTF-8"?>
<SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:ens1="http://example.org/somePreexistingExtensionNamespace">
  <Substation ens1:foo="a" name="A1" desc="test substation"></Substation>
</SCL>`;

export const Default: StoryObj = {
  argTypes,
  args: {
    ...args,
    value: sampleXml,
    style: 'height: 400px; width: 600px;',
  },
};

export const WithToolbar: StoryObj = {
  argTypes,
  args: {
    ...args,
    value: sampleXml,
    toolbar: true,
    style: 'height: 400px; width: 600px;',
  },
};

export const WithValidator: StoryObj = {
  render: () => {
    function setupValidator(e: Event) {
      const editor = e.target as OscdAceEditor;
      editor.validator = (val: string) => {
        if (!val.trim()) {
          return null;
        }
        const doc = new DOMParser().parseFromString(val, 'application/xml');
        const err = doc.querySelector('parsererror');
        return err ? (err.textContent ?? 'XML parse error') : null;
      };
    }
    return html`
      <oscd-ace-editor
        @connectedCallback=${setupValidator}
        .value=${`<Valid>XML</Valid>`}
        style="height: 400px; width: 600px;"
      ></oscd-ace-editor>
    `;
  },
};
