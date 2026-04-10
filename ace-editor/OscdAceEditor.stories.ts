import type { StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './oscd-ace-editor.js';
import { OscdAceEditor } from './OscdAceEditor.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdAceEditor>({
  tagName: 'oscd-ace-editor',
});

export default {
  ...meta,
  title: 'Editors / Ace Editor',
  tags: ['autodocs'],
};

export const Default: StoryObj = {
  argTypes,
  args: {
    ...args,
    value: `<?xml version="1.0" encoding="UTF-8"?>
<SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:ens1="http://example.org/somePreexistingExtensionNamespace">
  <Substation ens1:foo="a" name="A1" desc="test substation"></Substation>
</SCL>`,
    style: 'height: 400px; width: 600px;',
  },
};

export const WithValidator: StoryObj = {
  render: () => {
    const handleLoad = (e: Event) => {
      const editor = (e.target as HTMLElement).querySelector(
        'oscd-ace-editor',
      ) as OscdAceEditor;
      editor.validator = (val: string) => {
        if (!val.trim()) {
          return null;
        }
        const doc = new DOMParser().parseFromString(val, 'application/xml');
        const err = doc.querySelector('parsererror');
        return err ? (err.textContent ?? 'XML parse error') : null;
      };
    };
    return html`
      <div @slotchange=${handleLoad}>
        <oscd-ace-editor style="height: 400px; width: 600px;"></oscd-ace-editor>
      </div>
    `;
  },
};
