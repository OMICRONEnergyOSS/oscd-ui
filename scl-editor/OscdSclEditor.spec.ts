import { expect } from '@open-wc/testing';
import './oscd-scl-editor.js';
import type { OscdSclEditor } from './OscdSclEditor.js';

const sclNs = 'http://www.iec.ch/61850/2003/SCL';

function parseSclDoc(xml: string): XMLDocument {
  return new DOMParser().parseFromString(xml, 'application/xml');
}

const sclDocString = `<?xml version="1.0" encoding="UTF-8"?><SCL version="2007" revision="B" xmlns="${sclNs}" xmlns:ens1="http://example.org/somePreexistingExtensionNamespace">
  <Substation ens1:foo="a" name="A1" desc="test substation">
    <VoltageLevel name="V1" desc="110kV">
      <Voltage unit="V" multiplier="k">110</Voltage>
    </VoltageLevel>
  </Substation>
</SCL>`;

describe('oscd-scl-editor', () => {
  describe('value property', () => {
    it('round-trips text value', async () => {
      const el = document.createElement('oscd-scl-editor') as OscdSclEditor;
      document.body.appendChild(el);
      const xmlText = '<Substation name="A1"></Substation>';
      el.value = xmlText;
      expect(el.value).to.equal(xmlText);
      el.remove();
    });
  });

  describe('element property', () => {
    it('serializes element to value without inherited xmlns', async () => {
      const doc = parseSclDoc(sclDocString);
      const substation = doc.querySelector('Substation')!;

      const el = document.createElement('oscd-scl-editor') as OscdSclEditor;
      document.body.appendChild(el);
      el.element = substation;

      expect(el.value).to.contain('name="A1"');
      expect(el.value).to.not.contain(`xmlns="${sclNs}"`);
      el.remove();
    });

    it('parses value back to element with correct namespace', async () => {
      const doc = parseSclDoc(sclDocString);
      const substation = doc.querySelector('Substation')!;

      const el = document.createElement('oscd-scl-editor') as OscdSclEditor;
      document.body.appendChild(el);
      el.element = substation;

      const parsed = el.element;
      expect(parsed).to.not.be.null;
      expect(parsed!.localName).to.equal('Substation');
      expect(parsed!.namespaceURI).to.equal(sclNs);
      el.remove();
    });

    it('returns null when value is invalid XML', async () => {
      const doc = parseSclDoc(sclDocString);
      const substation = doc.querySelector('Substation')!;

      const el = document.createElement('oscd-scl-editor') as OscdSclEditor;
      document.body.appendChild(el);
      el.element = substation;
      el.value = '<Substation name="A1"'; // broken

      expect(el.element).to.be.null;
      el.remove();
    });

    it('parses element using default SCL context when no element was set', async () => {
      const el = document.createElement('oscd-scl-editor') as OscdSclEditor;
      document.body.appendChild(el);
      el.value = '<Substation name="A1"></Substation>';

      const parsed = el.element;
      expect(parsed).to.not.be.null;
      expect(parsed!.localName).to.equal('Substation');
      expect(parsed!.namespaceURI).to.equal(sclNs);
      el.remove();
    });
  });

  describe('validity', () => {
    it('checkValidity returns true for valid XML', async () => {
      const el = document.createElement('oscd-scl-editor') as OscdSclEditor;
      document.body.appendChild(el);
      el.value = '<Substation name="A1"></Substation>';

      expect(el.checkValidity()).to.be.true;
      el.remove();
    });

    it('checkValidity returns false for malformed XML', async () => {
      const el = document.createElement('oscd-scl-editor') as OscdSclEditor;
      document.body.appendChild(el);
      el.value = '<Substation name="A1"';

      expect(el.checkValidity()).to.be.false;
      el.remove();
    });

    it('checkValidity returns true for empty value', async () => {
      const el = document.createElement('oscd-scl-editor') as OscdSclEditor;
      document.body.appendChild(el);

      expect(el.checkValidity()).to.be.true;
      el.remove();
    });

    it('reportValidity returns false and reports for invalid XML', async () => {
      const el = document.createElement('oscd-scl-editor') as OscdSclEditor;
      document.body.appendChild(el);
      el.value = '<Substation name="A1"';

      expect(el.reportValidity()).to.be.false;
      el.remove();
    });
  });
});
