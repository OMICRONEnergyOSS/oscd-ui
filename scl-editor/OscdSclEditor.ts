/**
 * @license
 * Copyright 2026 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { property } from 'lit/decorators.js';

import { OscdAceEditor } from '../ace-editor/OscdAceEditor.js';
import {
  createNamespaceContext,
  parseInXmlnsContext,
  serializeWithoutXmlnsContext,
  XmlParseError,
} from './internal/namespace-utils.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-scl-editor': OscdSclEditor;
  }
}

/**
 * @tagname oscd-scl-editor
 * @summary Edit one XML element with its SCL namespace context.
 *
 * Inherits the text editor, optional toolbar, form support and input/change
 * events. Set `element` to capture namespace context and load serialized XML;
 * read it to parse a new element without mutating the original document.
 * Empty or malformed text returns null. Only XML well-formedness is checked,
 * not IEC 61850 schema validity. Text-only input uses the standard SCL namespace.
 */
export class OscdSclEditor extends OscdAceEditor {
  private namespaceContext = createNamespaceContext();

  constructor() {
    super();
    this.validator = text => {
      if (text.trim() === '') {
        return null;
      }
      try {
        parseInXmlnsContext(text, this.namespaceContext);
        return null;
      } catch (error) {
        if (error instanceof XmlParseError) {
          return error.message;
        }
        throw error;
      }
    };
  }

  @property({ attribute: false, noAccessor: true })
  set element(element: Element | null) {
    this.namespaceContext = createNamespaceContext(element ?? undefined);
    this.value = element === null ? '' : serializeWithoutXmlnsContext(element);
  }

  get element(): Element | null {
    if (this.value.trim() === '') {
      return null;
    }
    try {
      return parseInXmlnsContext(this.value, this.namespaceContext);
    } catch (error) {
      if (error instanceof XmlParseError) {
        return null;
      }
      throw error;
    }
  }
}
