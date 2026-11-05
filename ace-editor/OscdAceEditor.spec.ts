import {
  defineCE,
  expect,
  fixture,
  nextFrame,
  waitUntil,
} from '@open-wc/testing';

import { OscdAceEditor } from './OscdAceEditor.js';

const tagName = defineCE(OscdAceEditor);

export const sclXmlDocString = `<?xml version="1.0" encoding="UTF-8"?><SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:ens1="http://example.org/somePreexistingExtensionNamespace">
  <Substation ens1:foo="a" name="A1" desc="test substation"></Substation>
</SCL>`;

describe('oscd-ace-editor', () => {
  let oscdAceEditor: OscdAceEditor;

  beforeEach(async () => {
    oscdAceEditor = await fixture<OscdAceEditor>(`<${tagName}></${tagName}>`);
    oscdAceEditor.value = sclXmlDocString;
    await waitUntil(() => oscdAceEditor.editor?.getValue() === sclXmlDocString);
  });

  afterEach(() => {
    document.getElementById('ace_settingsmenu')?.remove();
    oscdAceEditor.remove();
  });

  it('starts programmatic replacements at the beginning without selecting text', async () => {
    const editor = oscdAceEditor.editor!;
    expect(editor.selection.isEmpty()).to.equal(true);
    expect(editor.getCursorPosition()).to.deep.equal({ row: 0, column: 0 });

    editor.moveCursorTo(1, 2);
    oscdAceEditor.value = '<replacement/>';
    await waitUntil(() => editor.getValue() === '<replacement/>');
    expect(editor.selection.isEmpty()).to.equal(true);
    expect(editor.getCursorPosition()).to.deep.equal({ row: 0, column: 0 });
  });

  it('keeps the cursor when input is echoed through the value property', async () => {
    const editor = oscdAceEditor.editor!;
    editor.moveCursorTo(1, 2);
    editor.insert('input');
    const position = editor.getCursorPosition();
    oscdAceEditor.value = editor.getValue();
    await oscdAceEditor.updateComplete;
    await nextFrame();
    await nextFrame();
    expect(editor.getCursorPosition()).to.deep.equal(position);
  });

  it('keeps the latest value assigned before readiness, then applies external writes synchronously', async () => {
    const element = document.createElement(tagName);
    if (!(element instanceof OscdAceEditor)) {
      throw new Error('Editor did not upgrade');
    }
    element.value = 'first';
    element.value = 'latest';
    document.body.appendChild(element);
    try {
      await waitUntil(() => element.editor?.getValue() === 'latest');
      element.value = 'replacement';
      expect(element.editor!.getValue()).to.equal('replacement');
    } finally {
      element.remove();
    }
  });

  it('supports real form values, validator changes and persistent custom validity', async () => {
    const form = await fixture<HTMLFormElement>(
      `<form><${tagName} name="xml"></${tagName}></form>`,
    );
    const element = form.firstElementChild;
    if (!(element instanceof OscdAceEditor)) {
      throw new Error('Editor did not upgrade');
    }
    element.value = 'submitted';
    expect(new FormData(form).get('xml')).to.equal('submitted');
    element.validator = value => (value === 'submitted' ? null : 'Wrong text');
    expect(form.checkValidity()).to.equal(true);
    element.value = 'invalid';
    expect(element.checkValidity()).to.equal(false);
    expect(form.checkValidity()).to.equal(false);
    element.validator = null;
    element.setCustomValidity('Custom failure');
    expect(element.checkValidity()).to.equal(false);
    element.value = 'another value';
    expect(element.checkValidity()).to.equal(false);
    element.setCustomValidity('');
    expect(element.checkValidity()).to.equal(true);
    form.reset();
    expect(element.value).to.equal('');
    expect(new FormData(form).get('xml')).to.equal('');
  });

  it('emits compatible text changes and input for edits, not programmatic writes', async () => {
    let changes = 0;
    let inputs = 0;
    let text = '';
    oscdAceEditor.addEventListener('change', event => {
      changes += 1;
      if (event instanceof CustomEvent) {
        text = event.detail;
      }
    });
    oscdAceEditor.addEventListener('input', () => {
      inputs += 1;
    });
    oscdAceEditor.value = '<programmatic/>';
    await nextFrame();
    expect(changes).to.equal(0);
    oscdAceEditor.editor!.insert('typed');
    await waitUntil(() => changes === 1);
    expect(inputs).to.equal(1);
    expect(text).to.equal(oscdAceEditor.value);
  });

  it('retains the value attribute API without scheduling text resets', () => {
    oscdAceEditor.setAttribute('value', 'attribute text');
    expect(oscdAceEditor.editor!.getValue()).to.equal('attribute text');
    oscdAceEditor.removeAttribute('value');
    expect(oscdAceEditor.value).to.equal('');
  });

  it('shows a working toolbar that formats input and notifies the consumer', async () => {
    oscdAceEditor.toolbar = true;
    await oscdAceEditor.updateComplete;
    const toggle =
      oscdAceEditor.shadowRoot!.querySelector<HTMLElement>('.toolbar-toggle')!;
    toggle.click();
    await oscdAceEditor.updateComplete;
    oscdAceEditor.value = '<example><item/></example>';
    let changes = 0;
    oscdAceEditor.addEventListener('change', () => {
      changes += 1;
    });
    const actions = oscdAceEditor.shadowRoot!.querySelectorAll<HTMLElement>(
      '.toolbar oscd-outlined-icon-button',
    );
    expect(actions.length).to.equal(7);
    await waitUntil(
      () =>
        actions[5].shadowRoot
          ?.querySelector('button')
          ?.getAttribute('aria-label') === 'Format XML',
    );
    actions[5].click();
    expect(oscdAceEditor.value.includes('\n\t<item/>')).to.equal(true);
    expect(changes).to.equal(1);
  });
});
