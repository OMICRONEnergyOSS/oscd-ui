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
function defaultSclRoot(): Element {
  return new DOMParser().parseFromString(defaultSclXml, 'application/xml')
    .documentElement;
}

/**
 * Collects namespace declarations explicitly present on the root element
 * of the current element tree.
 */
function getRootNamespaces(element: Element): Map<string, string> {
  let root = element;
  while (root.parentElement) {
    root = root.parentElement;
  }

  const rootNamespaces = new Map<string, string>();
  for (const attr of Array.from(root.attributes)) {
    if (attr.name === 'xmlns' || attr.name.startsWith('xmlns:')) {
      rootNamespaces.set(attr.name, attr.value);
    }
  }

  return rootNamespaces;
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
 * XMLSerializer adds because they were inherited from the root element.
 *
 * Namespace declarations that are explicitly present on the element itself
 * in its original document are preserved.
 */
export function serializeWithoutXmlnsContext(element: Element): string {
  const ownNsAttrs = getOwnNamespaceAttrs(element);
  const rootNs = getRootNamespaces(element);

  let serialized = xmlSerializer.serializeToString(element);

  // Remove xmlns declarations that were inherited (added by XMLSerializer)
  // but not explicitly present on the element itself.
  for (const [attrName, attrValue] of rootNs) {
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
 * Returns the parsed child element.
 * Throws if the text is empty or contains XML parse errors.
 */
export function parseInXmlnsContext(
  text: string,
  sclRoot: Element | null = null,
): Element {
  const root = sclRoot ?? defaultSclRoot();
  const openTag = reconstructOpeningTag(root);
  const closeTag = `</${root.tagName}>`;
  const wrappedXml = `<?xml version="1.0" encoding="UTF-8"?>${openTag}${text}${closeTag}`;

  const parser = new DOMParser();
  const doc = parser.parseFromString(wrappedXml, 'application/xml');

  const parseError = doc.querySelector('parsererror');
  if (parseError) {
    throw new Error(parseError.textContent ?? 'Unknown XML parsing error');
  }

  const rootEl = doc.documentElement;
  if (!rootEl.firstElementChild) {
    throw new Error('No element found in parsed XML');
  }

  return rootEl.firstElementChild;
}
