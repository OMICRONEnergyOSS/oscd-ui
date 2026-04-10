/**
 * @license
 * Copyright 2026 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement, html, css } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

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
 * @summary An SCL source code editor for SCL elements.
 *
 * Wraps the OscdAceEditor (which now provides the toolbar, form
 * association, and validation infrastructure).
 *
 * Accepts either an XML `element` or a text `value` as input (whichever
 * is set last takes effect). The `element` getter attempts to parse the
 * current text back into an XML element within the original SCL namespace
 * context, returning `null` if the text has XML parse errors.
 *
 * @event {Event} input Fired on every editor content change.
 * @event {Event} change Fired when the editor loses focus.
 */
export class OscdSclEditor extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'oscd-ace-editor': OscdAceEditor,
  };

  /** Cached SCL root element for namespace context during re-parsing. */
  private sclRoot: Element | null = null;

  private _pendingValue: string = '';

  @query('oscd-ace-editor')
  private aceEditor!: OscdAceEditor;

  /** When true, shows the toolbar toggle button. */
  @property({ type: Boolean })
  toolbar = false;

  override firstUpdated(): void {
    if (this._pendingValue) {
      this.aceEditor.value = this._pendingValue;
      this._pendingValue = '';
    }
  }

  /** The current XML text content of the editor. */
  @property({ type: String })
  set value(val: string) {
    if (this.aceEditor) {
      this.aceEditor.value = val;
    } else {
      this._pendingValue = val;
    }
  }

  get value(): string {
    return (
      this.aceEditor?.editor?.getValue() ??
      this.aceEditor?.value ??
      this._pendingValue ??
      ''
    );
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

  override render() {
    return html` <oscd-ace-editor ?toolbar=${this.toolbar}></oscd-ace-editor> `;
  }

  static override styles = css`
    :host {
      display: block;
      height: 100%;
      overflow: hidden;
    }

    oscd-ace-editor {
      height: 100%;
      overflow: auto;
    }
  `;
}
