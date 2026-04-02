/**
 * @license
 * Copyright 2026 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { LitElement, html, css } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { OscdAceEditor } from '../ace-editor/OscdAceEditor.js';
import type { AceEditorWithSettingsMenu } from '../ace-editor/OscdAceEditor.js';
import { OscdOutlinedIconButton } from '../iconbutton/OscdOutlinedIconButton.js';
import { OscdFilledIconButton } from '../iconbutton/OscdFilledIconButton.js';
import { OscdIcon } from '../icon/OscdIcon.js';
import {
  serializeWithoutInheritedXmlns,
  parseInSclContext,
  isWellFormedXml,
  getXmlParseError,
  defaultSclRoot,
} from './internal/namespace-utils.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-xml-editor': OscdXmlEditor;
  }
}

/**x
 * @tagname oscd-xml-editor
 * @summary A form-associated XML source code editor for SCL elements.
 *
 * Wraps the OscdAceEditor with a toolbar providing undo/redo,
 * collapse/expand, search, pretty-print, and settings buttons.
 *
 * Accepts either an XML `element` or a text `value` as input (whichever
 * is set last takes effect). The `element` getter attempts to parse the
 * current text back into an XML element within the original SCL namespace
 * context, returning `null` if the text has XML parse errors.
 *
 * Participates in the HTML form API via `ElementInternals`, including
 * `checkValidity()`, `reportValidity()`, and form submission.
 *
 * @event {Event} input Fired on every editor content change.
 * @event {Event} change Fired when the editor loses focus.
 */
export class OscdXmlEditor extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'oscd-ace-editor': OscdAceEditor,
    'oscd-outlined-icon-button': OscdOutlinedIconButton,
    'oscd-filled-icon-button': OscdFilledIconButton,
    'oscd-icon': OscdIcon,
  };

  static formAssociated = true;

  private internals: ElementInternals;

  /** Cached SCL root element for namespace context during re-parsing. */
  private sclRoot: Element | null = null;

  /**
   * Stores the initial value before the ace editor is available in the DOM.
   * After first render, the ace editor instance is the single source of truth.
   */
  private _pendingValue: string = '';

  @query('oscd-ace-editor')
  private aceEditor!: OscdAceEditor;

  @state()
  private _toolbarOpen = false;

  /** When true, shows the toolbar toggle button. */
  @property({ type: Boolean })
  toolbar = false;

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  override firstUpdated(): void {
    if (this._pendingValue) {
      this.setAceText(this._pendingValue);
    }
  }

  /**
   * Writes text into the ace editor (or the pending buffer before first
   * render) and updates form validity/value.  Both `value` and `element`
   * setters funnel through here so that the ace editor instance is always
   * the single source of truth.
   */
  private setAceText(text: string): void {
    if (this.aceEditor) {
      this.aceEditor.value = text;
    } else {
      this._pendingValue = text;
    }
    this.updateFormState(text);
  }

  /** The current XML text content of the editor. */
  @property({ type: String })
  set value(val: string) {
    this.setAceText(val);
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
      this.setAceText('');
      return;
    }

    this.sclRoot = el.ownerDocument.documentElement;
    this.setAceText(serializeWithoutInheritedXmlns(el));
  }

  get element(): Element | null {
    const text = this.value;
    if (!text.trim()) {
      return null;
    }

    return parseInSclContext(text, this.sclRoot ?? defaultSclRoot());
  }

  checkValidity(): boolean {
    return isWellFormedXml(this.value);
  }

  reportValidity(): boolean {
    const valid = this.checkValidity();
    if (!valid) {
      const msg = getXmlParseError(this.value) ?? 'Invalid XML';
      this.internals.setValidity({ customError: true }, msg);
      this.internals.reportValidity();
    } else {
      this.internals.setValidity({});
    }
    return valid;
  }

  setCustomValidity(message: string): void {
    if (message) {
      this.internals.setValidity({ customError: true }, message);
    } else {
      this.internals.setValidity({});
    }
  }

  /** Called by the browser when the parent form is reset. */
  formResetCallback(): void {
    this.setAceText('');
  }

  private updateFormState(text?: string): void {
    const val = text ?? this.value;
    this.internals.setFormValue(val);
    if (isWellFormedXml(val)) {
      this.internals.setValidity({});
    } else {
      const msg = getXmlParseError(val) ?? 'Invalid XML';
      this.internals.setValidity({ customError: true }, msg);
    }
  }

  private handleAceChange(e: CustomEvent<string>): void {
    if (typeof e.detail !== 'string') {
      return;
    }
    this.updateFormState(e.detail);
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  }

  private handleAceBlur(): void {
    this.dispatchEvent(new Event('change', { bubbles: true }));
  }

  private undo(): void {
    this.aceEditor?.editor?.execCommand('undo');
  }

  private redo(): void {
    this.aceEditor?.editor?.execCommand('redo');
  }

  private collapseAll(): void {
    this.aceEditor?.editor?.session.foldAll(1);
  }

  private expandAll(): void {
    this.aceEditor?.editor?.session.unfold();
  }

  private search(): void {
    this.aceEditor?.editor?.execCommand('find');
  }

  private formatXml(): void {
    const editor = this.aceEditor?.editor;
    if (!editor) {
      return;
    }

    const rawXml = editor.getSelectedText() || this.value;
    if (!rawXml) {
      return;
    }

    const xml = rawXml.trim();
    let initialIndent = '';

    if (editor.getSelectedText()) {
      const range = editor.getSelectionRange();
      const startLine = range.start.row;
      const lineContent = editor.session.getLine(startLine);
      initialIndent = lineContent.match(/^(\s*)/)?.[1] || '';
    }

    let formatted = '';
    let indent = '';
    const tab = '\t';
    const nodes = xml.split(/>\s*</);

    nodes.forEach((node, index) => {
      if (index === 0) {
        node = node.replace(/^\s*</, '');
      }
      if (index === nodes.length - 1) {
        node = node.replace(/>\s*$/, '');
      }

      if (node.match(/^\/\w/)) {
        indent = indent.substring(tab.length);
      }
      formatted += initialIndent + indent + '<' + node + '>\r\n';
      if (node.match(/^<?\w[^>]*[^/]$/)) {
        indent += tab;
      }
    });

    if (editor.getSelectedText()) {
      const range = editor.getSelectionRange();
      editor.session.replace(
        range,
        formatted.substring(0, formatted.length - 2),
      );
    } else {
      this.setAceText(formatted);
    }
  }

  private openSettings(): void {
    const editor = this.aceEditor?.editor as
      | AceEditorWithSettingsMenu
      | undefined;
    if (!editor) {
      return;
    }
    editor.showSettingsMenu?.();
  }

  private toggleToolbar(): void {
    this._toolbarOpen = !this._toolbarOpen;
  }

  override render() {
    return html`
      <div class="editor-container">
        ${this.toolbar
          ? html`
              <oscd-filled-icon-button
                class="toolbar-toggle"
                title=${this._toolbarOpen ? 'Hide toolbar' : 'Show toolbar'}
                @click=${this.toggleToolbar}
              >
                <oscd-icon
                  >${this._toolbarOpen ? 'close' : 'more_vert'}</oscd-icon
                >
              </oscd-filled-icon-button>
              ${this._toolbarOpen
                ? html`
                    <div class="toolbar">
                      <oscd-outlined-icon-button
                        title="Undo"
                        @click=${this.undo}
                      >
                        <oscd-icon>undo</oscd-icon>
                      </oscd-outlined-icon-button>
                      <oscd-outlined-icon-button
                        title="Redo"
                        @click=${this.redo}
                      >
                        <oscd-icon>redo</oscd-icon>
                      </oscd-outlined-icon-button>
                      <oscd-outlined-icon-button
                        title="Collapse all"
                        @click=${this.collapseAll}
                      >
                        <oscd-icon>collapse_all</oscd-icon>
                      </oscd-outlined-icon-button>
                      <oscd-outlined-icon-button
                        title="Expand all"
                        @click=${this.expandAll}
                      >
                        <oscd-icon>expand_all</oscd-icon>
                      </oscd-outlined-icon-button>
                      <oscd-outlined-icon-button
                        title="Search"
                        @click=${this.search}
                      >
                        <oscd-icon>search</oscd-icon>
                      </oscd-outlined-icon-button>
                      <oscd-outlined-icon-button
                        title="Format XML"
                        @click=${this.formatXml}
                      >
                        <oscd-icon>format_indent_increase</oscd-icon>
                      </oscd-outlined-icon-button>
                      <oscd-outlined-icon-button
                        title="Settings"
                        @click=${this.openSettings}
                      >
                        <oscd-icon>settings</oscd-icon>
                      </oscd-outlined-icon-button>
                    </div>
                  `
                : ''}
            `
          : ''}
        <oscd-ace-editor
          @change=${this.handleAceChange}
          @blur=${this.handleAceBlur}
        ></oscd-ace-editor>
      </div>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      height: 100%;
      overflow: hidden;
    }

    .editor-container {
      position: relative;
      height: 100%;
    }

    .toolbar-toggle {
      position: absolute;
      top: 4px;
      right: 20px;
      z-index: 2;
    }

    .toolbar {
      position: absolute;
      top: 48px;
      right: 16px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      padding: 4px;
      border-radius: var(--md-sys-radius-medium, 8px);
      background: var(--md-sys-color-surface-container, #f3edf7);
      box-shadow: var(
        --md-sys-elevation-level2,
        0 1px 2px 0 rgba(0, 0, 0, 0.3),
        0 2px 6px 2px rgba(0, 0, 0, 0.15)
      );
    }

    oscd-ace-editor {
      height: 100%;
      overflow: auto;
    }
  `;
}
