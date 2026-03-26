import { fixture, html } from '@open-wc/testing';
import { OscdAceEditor } from './oscd-ace-editor.js';

export const sclXmlDocString = `<?xml version="1.0" encoding="UTF-8"?><SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:ens1="http://example.org/somePreexistingExtensionNamespace">
  <Substation ens1:foo="a" name="A1" desc="test substation"></Substation>
</SCL>`;

describe('oscd-ace-editor', () => {
  let oscdAceEditor: OscdAceEditor;

  beforeEach(async () => {
    oscdAceEditor = await fixture(html`<oscd-ace-editor></oscd-ace-editor>`);
    oscdAceEditor.value = sclXmlDocString;
  });

  afterEach(() => {
    document.getElementById('ace_settingsmenu')?.remove();
    oscdAceEditor.remove();
  });
});
