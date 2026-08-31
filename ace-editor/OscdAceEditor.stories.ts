import type { StoryObj } from '@storybook/web-components-vite';
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
