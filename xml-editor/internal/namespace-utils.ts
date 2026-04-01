/**
 * @license
 * Copyright 2026 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

const xmlSerializer = new XMLSerializer();

const SCL_NAMESPACE = 'http://www.iec.ch/61850/2003/SCL';
const XSI_NAMESPACE = 'http://www.w3.org/2001/XMLSchema-instance';

const defaultSclXml = `<SCL xmlns="${SCL_NAMESPACE}" xmlns:xsi="${XSI_NAMESPACE}"></SCL>`;

/**
 * Returns a default SCL root element with the standard SCL and
 * XML Schema Instance namespace declarations.
 * Used as fallback when no owner document context is available.
 */
export function defaultSclRoot(): Element {
  return new DOMParser().parseFromString(defaultSclXml, 'application/xml')
    .documentElement;
}

/**
 * Collects all namespace declarations (xmlns and xmlns:prefix) that are
 * in scope for the given element from its ancestors.
 */
function getInheritedNamespaces(element: Element): Map<string, string> {
  const inherited = new Map<string, string>();
  let current = element.parentElement;
  while (current) {
    for (const attr of Array.from(current.attributes)) {
      if (
        (attr.name === 'xmlns' || attr.name.startsWith('xmlns:')) &&
        !inherited.has(attr.name)
      ) {
        inherited.set(attr.name, attr.value);
      }
    }
    current = current.parentElement;
  }
  return inherited;
}

/**
 * Collects namespace declarations explicitly present on the element
 * in its original document context (before XMLSerializer adds inherited ones).
 */
function getOwnNamespaceAttrs(element: Element): Set<string> {
  const own = new Set<string>();
  for (const attr of Array.from(element.attributes)) {
    if (attr.name === 'xmlns' || attr.name.startsWith('xmlns:')) {
      own.add(attr.name);
    }
  }
  return own;
}

/**
 * Serializes an element to XML text, stripping namespace declarations that
 * XMLSerializer adds because they were inherited from ancestor elements.
 *
 * Namespace declarations that are explicitly present on the element itself
 * in its original document are preserved.
 */
export function serializeWithoutInheritedXmlns(element: Element): string {
  const ownNsAttrs = getOwnNamespaceAttrs(element);
  const inheritedNs = getInheritedNamespaces(element);

  let serialized = xmlSerializer.serializeToString(element);

  // Remove xmlns declarations that were inherited (added by XMLSerializer)
  // but not explicitly present on the element itself.
  for (const [attrName, attrValue] of inheritedNs) {
    if (!ownNsAttrs.has(attrName)) {
      // Match the exact xmlns attribute as it would appear in the serialized output
      const escaped = attrValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = new RegExp(
        `\\s${attrName.replace(':', '\\:')}="${escaped}"`,
      );
      serialized = serialized.replace(pattern, '');
    }
  }

  return serialized;
}

/**
 * Reconstructs the opening tag of an SCL root element, preserving all its
 * attributes (including namespace declarations) so that child elements
 * can be parsed in the correct namespace context.
 */
function reconstructOpeningTag(rootElement: Element): string {
  const tagName = rootElement.tagName;
  const attrs: string[] = [];
  for (const attr of Array.from(rootElement.attributes)) {
    attrs.push(`${attr.name}="${attr.value}"`);
  }
  return `<${tagName}${attrs.length ? ' ' + attrs.join(' ') : ''}>`;
}

/**
 * Parses XML text in the namespace context of an SCL document by wrapping
 * the text in the root element's opening and closing tags.
 *
 * Returns the parsed child element or `null` if there is any XML parsing error.
 */
export function parseInSclContext(
  text: string,
  sclRoot: Element,
): Element | null {
  const openTag = reconstructOpeningTag(sclRoot);
  const closeTag = `</${sclRoot.tagName}>`;
  const wrappedXml = `<?xml version="1.0" encoding="UTF-8"?>${openTag}${text}${closeTag}`;

  const parser = new DOMParser();
  const doc = parser.parseFromString(wrappedXml, 'application/xml');

  if (doc.querySelector('parsererror')) {
    return null;
  }

  const rootEl = doc.documentElement;
  if (!rootEl.firstElementChild) {
    return null;
  }

  return rootEl.firstElementChild;
}

/**
 * Attempts to parse XML text as standalone well-formed XML.
 * Returns `true` if the text parses without errors, `false` otherwise.
 */
export function isWellFormedXml(text: string): boolean {
  if (!text.trim()) {
    return true;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'application/xml');
  return !doc.querySelector('parsererror');
}

/**
 * Extracts the parse error message from a failed XML parse, or `null`
 * if the text is well-formed.
 */
export function getXmlParseError(text: string): string | null {
  if (!text.trim()) {
    return null;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'application/xml');
  const parseError = doc.querySelector('parsererror');
  if (!parseError) {
    return null;
  }

  return (
    parseError.querySelector('div')?.textContent ??
    parseError.textContent ??
    'Unknown XML parsing error'
  );
}
