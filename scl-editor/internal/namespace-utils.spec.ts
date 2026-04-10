import { expect } from '@open-wc/testing';
import {
  serializeWithoutXmlnsContext,
  parseInXmlnsContext,
} from './namespace-utils.js';

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
  describe('serializeWithoutXmlnsContext', () => {
    it('strips root xmlns from a child element', () => {
      const doc = parseSclDoc(sclDocString);
      const substation = doc.querySelector('Substation')!;
      const serialized = serializeWithoutXmlnsContext(substation);

      expect(serialized).to.not.contain(`xmlns="${sclNs}"`);
      expect(serialized).to.not.contain(`xmlns:ens1="${extNs}"`);
      expect(serialized).to.contain('name="A1"');
      expect(serialized).to.contain('ens1:foo="a"');
    });

    it('preserves xmlns attributes directly on the element', () => {
      const xml = `<SCL xmlns="${sclNs}"><Substation xmlns:myns="http://my.ns" myns:bar="x" name="B1"></Substation></SCL>`;
      const doc = parseSclDoc(xml);
      const substation = doc.querySelector('Substation')!;
      const serialized = serializeWithoutXmlnsContext(substation);

      expect(serialized).to.contain('xmlns:myns="http://my.ns"');
      expect(serialized).to.not.contain(`xmlns="${sclNs}"`);
    });

    it('handles root element (all xmlns are its own)', () => {
      const doc = parseSclDoc(sclDocString);
      const root = doc.documentElement;
      const serialized = serializeWithoutXmlnsContext(root);

      expect(serialized).to.contain(`xmlns="${sclNs}"`);
      expect(serialized).to.contain(`xmlns:ens1="${extNs}"`);
    });
  });

  describe('parseInXmlnsContext', () => {
    it('parses an element in the SCL namespace context', () => {
      const doc = parseSclDoc(sclDocString);
      const text = '<Substation name="A1" desc="test substation"></Substation>';
      const el = parseInXmlnsContext(text, doc.documentElement);

      expect(el.localName).to.equal('Substation');
      expect(el.namespaceURI).to.equal(sclNs);
      expect(el.getAttribute('name')).to.equal('A1');
    });

    it('throws for malformed XML', () => {
      const doc = parseSclDoc(sclDocString);
      expect(() =>
        parseInXmlnsContext('<Substation name="A1"', doc.documentElement),
      ).to.throw();
    });

    it('includes the parsererror text in the thrown error', () => {
      const doc = parseSclDoc(sclDocString);
      try {
        parseInXmlnsContext('<Substation name="A1"', doc.documentElement);
        expect.fail('should have thrown');
      } catch (e) {
        expect(e).to.be.instanceOf(Error);
        expect((e as Error).message.length).to.be.greaterThan(0);
      }
    });

    it('throws for empty text', () => {
      expect(() => parseInXmlnsContext('')).to.throw(
        'No element found in parsed XML',
      );
    });

    it('preserves extension namespace attributes', () => {
      const doc = parseSclDoc(sclDocString);
      const text = '<Substation ens1:foo="a" name="A1"></Substation>';
      const el = parseInXmlnsContext(text, doc.documentElement);

      expect(el.getAttributeNS(extNs, 'foo')).to.equal('a');
    });

    it('uses default SCL context when no root is provided', () => {
      const el = parseInXmlnsContext('<Substation name="A1"></Substation>');
      expect(el.localName).to.equal('Substation');
      expect(el.namespaceURI).to.equal(sclNs);
    });

    it('uses default SCL context when null root is provided', () => {
      const el = parseInXmlnsContext(
        '<Substation name="A1"></Substation>',
        null,
      );
      expect(el.localName).to.equal('Substation');
      expect(el.namespaceURI).to.equal(sclNs);
    });
  });

  describe('roundtrip', () => {
    it('serialize then parse preserves the element', () => {
      const doc = parseSclDoc(sclDocString);
      const substation = doc.querySelector('Substation')!;
      const serialized = serializeWithoutXmlnsContext(substation);
      const parsed = parseInXmlnsContext(serialized, doc.documentElement);

      expect(parsed.localName).to.equal('Substation');
      expect(parsed.namespaceURI).to.equal(sclNs);
      expect(parsed.getAttribute('name')).to.equal('A1');
      expect(parsed.getAttribute('desc')).to.equal('test substation');
      expect(parsed.getAttributeNS(extNs, 'foo')).to.equal('a');
    });

    it('serialize then parse preserves nested children', () => {
      const doc = parseSclDoc(sclDocString);
      const substation = doc.querySelector('Substation')!;
      const serialized = serializeWithoutXmlnsContext(substation);
      const parsed = parseInXmlnsContext(serialized, doc.documentElement);

      const voltageLevel = parsed.querySelector('VoltageLevel');
      expect(voltageLevel).to.not.be.null;
      expect(voltageLevel!.getAttribute('name')).to.equal('V1');
      expect(voltageLevel!.namespaceURI).to.equal(sclNs);
    });

    it('roundtrips an element with its own xmlns declaration', () => {
      const xml = `<SCL xmlns="${sclNs}"><Substation xmlns:myns="http://my.ns" myns:bar="x" name="B1"></Substation></SCL>`;
      const doc = parseSclDoc(xml);
      const substation = doc.querySelector('Substation')!;
      const serialized = serializeWithoutXmlnsContext(substation);
      const parsed = parseInXmlnsContext(serialized, doc.documentElement);

      expect(parsed.localName).to.equal('Substation');
      expect(parsed.getAttribute('name')).to.equal('B1');
      expect(parsed.getAttributeNS('http://my.ns', 'bar')).to.equal('x');
    });
  });
});
