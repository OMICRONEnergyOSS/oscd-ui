import { expect } from '@open-wc/testing';

import {
  createNamespaceContext,
  parseInXmlnsContext,
  serializeWithoutXmlnsContext,
} from './namespace-utils.js';

const sclNamespace = 'http://www.iec.ch/61850/2003/SCL';
const extensionNamespace = 'urn:extension';

describe('SCL editor namespace context', () => {
  it('round-trips inherited and locally rebound namespaces without mutating input', () => {
    const doc = new DOMParser().parseFromString(
      `<SCL xmlns="${sclNamespace}" xmlns:ext="urn:root">
        <Substation name="A" xmlns:ext="${extensionNamespace}">
          <VoltageLevel name="V" ext:label="qualified" label="decoy">
            <Private type="example" xmlns:own="urn:own"><own:Item/></Private>
          </VoltageLevel>
        </Substation>
      </SCL>`,
      'application/xml',
    );
    const original = new XMLSerializer().serializeToString(doc);
    const element = doc.querySelector('VoltageLevel')!;
    const text = serializeWithoutXmlnsContext(element);
    const result = parseInXmlnsContext(text, createNamespaceContext(element));
    expect(text.includes(`xmlns="${sclNamespace}"`)).to.equal(false);
    expect(text.includes(`xmlns:ext="${extensionNamespace}"`)).to.equal(false);
    expect(result.namespaceURI).to.equal(sclNamespace);
    expect(result.getAttributeNS(extensionNamespace, 'label')).to.equal(
      'qualified',
    );
    expect(result.getAttribute('label')).to.equal('decoy');
    expect(result.querySelector('Item')?.namespaceURI).to.equal('urn:own');
    expect(new XMLSerializer().serializeToString(doc)).to.equal(original);
  });

  it('preserves explicit namespace declarations and resets', () => {
    const doc = new DOMParser().parseFromString(
      `<SCL xmlns="${sclNamespace}"><Private type="example" xmlns:ext="${extensionNamespace}">
        <ext:Item/><Item xmlns=""/>
      </Private></SCL>`,
      'application/xml',
    );
    const element = doc.querySelector('Private')!;
    const text = serializeWithoutXmlnsContext(element);
    const result = parseInXmlnsContext(text, createNamespaceContext(element));
    expect(text.includes(`xmlns:ext="${extensionNamespace}"`)).to.equal(true);
    expect(result.firstElementChild?.namespaceURI).to.equal(extensionNamespace);
    expect(result.lastElementChild?.namespaceURI).to.equal(null);
  });

  it('handles escaped namespace URIs and ancestor attributes without string interpolation', () => {
    const doc = new DOMParser().parseFromString(
      `<SCL xmlns="${sclNamespace}" desc="A &quot;quote&quot; &amp; B" xmlns:ext="urn:example?a=1&amp;b=2">
        <Private type="example" ext:label="value"/>
      </SCL>`,
      'application/xml',
    );
    const element = doc.querySelector('Private')!;
    const result = parseInXmlnsContext(
      serializeWithoutXmlnsContext(element),
      createNamespaceContext(element),
    );
    expect(result.getAttributeNS('urn:example?a=1&b=2', 'label')).to.equal(
      'value',
    );
  });

  it('uses the standard SCL context for text input', () => {
    expect(parseInXmlnsContext('<Substation name="A"/>').namespaceURI).to.equal(
      sclNamespace,
    );
  });

  it('accepts parsererror-named extension elements and marker-like comments', () => {
    const result = parseInXmlnsContext(
      '<Private type="example"><parsererror xmlns="http://www.w3.org/1999/xhtml">User content</parsererror><!--oscd-editor-content--></Private>',
    );
    expect(result.firstElementChild?.localName).to.equal('parsererror');
    expect(result.firstElementChild?.textContent).to.equal('User content');
  });

  for (const text of [
    '',
    '<Substation',
    '<A/><B/>',
    'text<A/>',
    '<A/><![CDATA[extra text]]>',
    '<unknown:A/>',
    '<A/><!--oscd-editor-content--><unknown:B/>',
  ]) {
    it(`rejects invalid single-element input: ${JSON.stringify(text)}`, () => {
      expect(() => parseInXmlnsContext(text)).to.throw();
    });
  }
});
