/**
 * @license
 * Copyright 2026 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { OscdAceEditor } from '../ace-editor/OscdAceEditor.js';
import {
  serializeWithoutXmlnsContext,
  parseInXmlnsContext,
} from './internal/namespace-utils.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-scl-editor': OscdSclEditor;
  }
}

/**
 * @tagname oscd-scl-editor
 * @summary A form-associated SCL source code editor for SCL elements.
 *
 * Extends OscdAceEditor with an `element` property that converts between
 * XML elements and their serialized text, handling SCL namespace context.
 *
 * Validation is automatically configured: the editor content is valid
 * when it can be parsed as well-formed XML in the current SCL namespace
 * context.
 *
 * @event {Event} input Fired on every editor content change.
 * @event {Event} change Fired when the editor loses focus.
 */
export class OscdSclEditor extends OscdAceEditor {
  /** Cached SCL root element for namespace context during re-parsing. */
  private sclRoot!: Element | null;

  override connectedCallback(): void {
    if (this.sclRoot === undefined) {
      this.sclRoot = null;
    }
    if (!this.validator) {
      this.validator = (text: string): string | null => {
        if (!text.trim()) {
          return null;
        }
        try {
          parseInXmlnsContext(text, this.sclRoot);
          return null;
        } catch (e) {
          return e instanceof Error ? e.message : 'Invalid XML';
        }
      };
    }
    super.connectedCallback();
  }

  /**
   * Sets the editor content from an XML element, serializing it without
   * inherited xmlns attributes. Caches the element's owner document root
   * for later re-parsing.
   *
   * The getter attempts to parse the current text back into an element
   * within the original SCL namespace context. Returns `null` if the text
   * has XML parse errors or if no SCL root context is available.
   */
  set element(el: Element | null) {
    if (el !== null && !(el instanceof Element)) {
      return;
    }

    if (!el) {
      this.sclRoot = null;
      this.value = '';
      return;
    }

    this.sclRoot = el.ownerDocument.documentElement;
    this.value = serializeWithoutXmlnsContext(el);
  }

  get element(): Element | null {
    const text = this.value;
    if (!text.trim()) {
      return null;
    }

    try {
      return parseInXmlnsContext(text, this.sclRoot);
    } catch {
      return null;
    }
  }
}
