import { expect } from '@open-wc/testing';
import {
  serializeWithoutInheritedXmlns,
  parseInSclContext,
  isWellFormedXml,
  getXmlParseError,
  defaultSclRoot,
} from './internal/namespace-utils.js';
import type { OscdSclEditor } from './OscdSclEditor.js';

const sclNs = 'http://www.iec.ch/61850/2003/SCL';
const extNs = 'http://example.org/somePreexistingExtensionNamespace';

function parseSclDoc(xml: string): XMLDocument {
  return new DOMParser().parseFromString(xml, 'application/xml');
}

const sclDocString = `<?xml version="1.0" encoding="UTF-8"?><SCL version="2007" revision="B" xmlns="${sclNs}" xmlns:ens1="${extNs}">
  <Substation ens1:foo="a" name="A1" desc="test substation">
    <VoltageLevel name="V1" desc="110kV">
      <Voltage unit="V" multiplier="k">110</Voltage>
    </VoltageLevel>
  </Substation>
</SCL>`;

describe('namespace-utils', () => {
  describe('serializeWithoutInheritedXmlns', () => {
    it('strips inherited xmlns from a child element', () => {
      const doc = parseSclDoc(sclDocString);
      const substation = doc.querySelector('Substation')!;
      const serialized = serializeWithoutInheritedXmlns(substation);

      // Should not contain the SCL default namespace (inherited from <SCL>)
      expect(serialized).to.not.contain(`xmlns="${sclNs}"`);
      // Should not contain the extension namespace prefix (inherited from <SCL>)
      expect(serialized).to.not.contain(`xmlns:ens1="${extNs}"`);
      // Should still have the element's own content
      expect(serialized).to.contain('name="A1"');
      expect(serialized).to.contain('ens1:foo="a"');
    });

    it('preserves xmlns attributes that are directly on the element', () => {
      const xml = `<SCL xmlns="${sclNs}"><Substation xmlns:myns="http://my.ns" myns:bar="x" name="B1"></Substation></SCL>`;
      const doc = parseSclDoc(xml);
      const substation = doc.querySelector('Substation')!;
      const serialized = serializeWithoutInheritedXmlns(substation);

      expect(serialized).to.contain('xmlns:myns="http://my.ns"');
      expect(serialized).to.not.contain(`xmlns="${sclNs}"`);
    });

    it('handles root element (no inherited ns)', () => {
      const doc = parseSclDoc(sclDocString);
      const root = doc.documentElement;
      const serialized = serializeWithoutInheritedXmlns(root);

      // Root has no parent, so all xmlns are its own
      expect(serialized).to.contain(`xmlns="${sclNs}"`);
      expect(serialized).to.contain(`xmlns:ens1="${extNs}"`);
    });
  });

  describe('parseInSclContext', () => {
    it('parses a Substation element in SCL context', () => {
      const doc = parseSclDoc(sclDocString);
      const sclRoot = doc.documentElement;
      const text = '<Substation name="A1" desc="test substation"></Substation>';
      const el = parseInSclContext(text, sclRoot);

      expect(el).to.not.be.null;
      expect(el!.localName).to.equal('Substation');
      expect(el!.namespaceURI).to.equal(sclNs);
      expect(el!.getAttribute('name')).to.equal('A1');
    });

    it('returns null for malformed XML', () => {
      const doc = parseSclDoc(sclDocString);
      const sclRoot = doc.documentElement;
      const el = parseInSclContext('<Substation name="A1"', sclRoot);

      expect(el).to.be.null;
    });

    it('returns null for empty text', () => {
      const doc = parseSclDoc(sclDocString);
      const sclRoot = doc.documentElement;
      const el = parseInSclContext('', sclRoot);

      expect(el).to.be.null;
    });

    it('preserves extension namespace attributes', () => {
      const doc = parseSclDoc(sclDocString);
      const sclRoot = doc.documentElement;
      const text = '<Substation ens1:foo="a" name="A1"></Substation>';
      const el = parseInSclContext(text, sclRoot);

      expect(el).to.not.be.null;
      expect(el!.getAttributeNS(extNs, 'foo')).to.equal('a');
    });
  });

  describe('defaultSclRoot', () => {
    it('returns an SCL element with SCL namespace', () => {
      const root = defaultSclRoot();
      expect(root.tagName).to.equal('SCL');
      expect(root.namespaceURI).to.equal(sclNs);
    });

    it('can be used as context for parseInSclContext', () => {
      const root = defaultSclRoot();
      const el = parseInSclContext('<Substation name="A1"></Substation>', root);
      expect(el).to.not.be.null;
      expect(el!.localName).to.equal('Substation');
      expect(el!.namespaceURI).to.equal(sclNs);
    });
  });

  describe('isWellFormedXml', () => {
    it('returns true for valid XML', () => {
      expect(isWellFormedXml('<Substation name="A1"></Substation>')).to.be.true;
    });

    it('returns true for empty/whitespace text', () => {
      expect(isWellFormedXml('')).to.be.true;
      expect(isWellFormedXml('  ')).to.be.true;
    });

    it('returns false for malformed XML', () => {
      expect(isWellFormedXml('<Substation name="A1"')).to.be.false;
    });
  });

  describe('getXmlParseError', () => {
    it('returns null for valid XML', () => {
      expect(getXmlParseError('<Substation name="A1"></Substation>')).to.be
        .null;
    });

    it('returns error message for malformed XML', () => {
      const error = getXmlParseError('<Substation name="A1"');
      expect(error).to.be.a('string');
      expect(error!.length).to.be.greaterThan(0);
    });

    it('returns null for empty text', () => {
      expect(getXmlParseError('')).to.be.null;
    });
  });
});

describe('oscd-scl-editor', () => {
  before(async () => {
    await import('./oscd-scl-editor.js');
  });

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
