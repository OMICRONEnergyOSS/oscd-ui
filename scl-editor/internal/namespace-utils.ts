/**
 * @license
 * Copyright 2026 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

const sclNamespace = 'http://www.iec.ch/61850/2003/SCL';
const xmlnsNamespace = 'http://www.w3.org/2000/xmlns/';

export class XmlParseError extends Error {}

/** Snapshot all in-scope namespaces, including declarations below the SCL root. */
export function createNamespaceContext(element?: Element): Element {
  const namespace =
    element === undefined ? sclNamespace : element.lookupNamespaceURI(null);
  const document = window.document.implementation.createDocument(
    namespace,
    'SCL',
  );
  const context = document.documentElement;
  context.setAttributeNS(xmlnsNamespace, 'xmlns', namespace ?? '');
  if (element === undefined) {
    context.setAttributeNS(
      xmlnsNamespace,
      'xmlns:xsi',
      'http://www.w3.org/2001/XMLSchema-instance',
    );
    return context;
  }
  const declarations = new Map<string, string>();
  for (
    let ancestor: Element | null = element;
    ancestor !== null;
    ancestor = ancestor.parentElement
  ) {
    for (const attribute of Array.from(ancestor.attributes)) {
      if (
        attribute.namespaceURI === xmlnsNamespace &&
        !declarations.has(attribute.name)
      ) {
        declarations.set(attribute.name, attribute.value);
      }
    }
  }
  for (const [name, value] of declarations) {
    context.setAttributeNS(xmlnsNamespace, name, value);
  }
  return context;
}

/** Serialize without redundant inherited declarations; retain explicit ones. */
export function serializeWithoutXmlnsContext(element: Element): string {
  const serializer = new XMLSerializer();
  const serialized = serializer.serializeToString(element);
  const parsed = new DOMParser().parseFromString(
    serialized,
    'application/xml',
  ).documentElement;
  const context = createNamespaceContext(element);
  // Restrict removal to the opening tag, never declarations on descendants.
  const openingTag = serialized.match(/^<(?:[^>"']|"[^"]*"|'[^']*')*>/)?.[0];
  if (openingTag === undefined) {
    throw new XmlParseError('Unable to serialize XML element');
  }
  const opening = openingTag.replace(
    /\s+(xmlns(?::[^\s=]+)?)="[^"]*"/g,
    (attribute, name: string) => {
      if (
        !element.hasAttribute(name) &&
        parsed.getAttribute(name) === context.getAttribute(name)
      ) {
        return '';
      }
      return attribute;
    },
  );
  return opening + serialized.slice(openingTag.length);
}

/** Parse exactly one element in the captured namespace context, not an XSD check. */
export function parseInXmlnsContext(
  text: string,
  context: Element = createNamespaceContext(),
): Element {
  const wrapper = context.cloneNode(false);
  if (!(wrapper instanceof Element)) {
    throw new TypeError('Expected an Element namespace context');
  }
  let marker = 'oscd-editor-content';
  while (text.includes(marker)) {
    marker += '.';
  }
  wrapper.appendChild(wrapper.ownerDocument.createComment(marker));
  const serialized = new XMLSerializer().serializeToString(wrapper);
  const source = serialized.replace(
    `<!--${marker}-->`,
    () => `${text}<!--${marker}-->`,
  );
  const document = new DOMParser().parseFromString(source, 'application/xml');
  const root = document.documentElement;
  const end = root.lastChild;
  // A unique trailing comment proves parsing finished, even with parsererror elements in user XML.
  if (end?.nodeType !== Node.COMMENT_NODE || end.textContent !== marker) {
    const error = document.getElementsByTagNameNS('*', 'parsererror')[0];
    throw new XmlParseError(error?.textContent ?? 'Invalid XML');
  }
  root.removeChild(end);
  if (
    root.children.length !== 1 ||
    Array.from(root.childNodes).some(
      node =>
        (node.nodeType === Node.TEXT_NODE ||
          node.nodeType === Node.CDATA_SECTION_NODE) &&
        (node.textContent ?? '').trim() !== '',
    )
  ) {
    throw new XmlParseError('Expected exactly one XML element');
  }
  return root.firstElementChild!;
}
