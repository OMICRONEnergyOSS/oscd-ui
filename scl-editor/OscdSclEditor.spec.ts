import {
  defineCE,
  expect,
  fixture,
  oneEvent,
  waitUntil,
} from '@open-wc/testing';

import { OscdSclEditor } from './OscdSclEditor.js';

const tagName = defineCE(OscdSclEditor);
const sclNamespace = 'http://www.iec.ch/61850/2003/SCL';

describe('oscd-scl-editor', () => {
  let element: OscdSclEditor;

  beforeEach(async () => {
    element = await fixture<OscdSclEditor>(`<${tagName}></${tagName}>`);
    const doc = new DOMParser().parseFromString(
      `<SCL xmlns="${sclNamespace}" xmlns:ext="urn:extension">
        <Substation name="A" ext:label="original"/>
      </SCL>`,
      'application/xml',
    );
    element.element = doc.querySelector('Substation');
    await waitUntil(
      () => element.editor?.getValue().includes('name="A"') === true,
    );
  });

  it('round-trips an element without changing its original document', () => {
    const original = new DOMParser().parseFromString(
      `<SCL xmlns="${sclNamespace}"><Substation name="Original"/></SCL>`,
      'application/xml',
    );
    element.element = original.querySelector('Substation');
    element.value = '<Substation name="Edited"/>';
    expect(element.element?.getAttribute('name')).to.equal('Edited');
    expect(element.element?.namespaceURI).to.equal(sclNamespace);
    expect(original.querySelector('Substation')?.getAttribute('name')).to.equal(
      'Original',
    );
  });

  it('validates single-element well-formedness, not schema conformance', () => {
    element.value = '<Substation';
    expect(element.checkValidity()).to.equal(false);
    expect(element.element === null).to.equal(true);
    element.value = '<A/><B/>';
    expect(element.checkValidity()).to.equal(false);
    element.value = '<NotAnSclElement/>';
    expect(element.checkValidity()).to.equal(true);
    element.element = null;
    expect(element.value).to.equal('');
    expect(element.element === null).to.equal(true);
    expect(element.checkValidity()).to.equal(true);
  });

  it('retains shared input fixes, events and context after reconnecting', async () => {
    const editor = element.editor!;
    let changes = 0;
    element.addEventListener('change', () => {
      changes += 1;
    });
    editor.find('original');
    editor.insert('edited');
    await waitUntil(() => changes > 0);
    const position = editor.getCursorPosition();
    const text = element.value;
    element.value = text;
    await element.updateComplete;
    expect(editor.getCursorPosition()).to.deep.equal(position);
    expect(element.element?.getAttributeNS('urn:extension', 'label')).to.equal(
      'edited',
    );
    element.remove();
    const ready = oneEvent(element, 'ready');
    document.body.appendChild(element);
    await ready;
    expect(element.value.includes('edited')).to.equal(true);
    editor.insert('more');
    await waitUntil(() => changes > 1);
    expect(element.value.includes('more')).to.equal(true);
  });
});
