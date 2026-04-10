/**
 * @license
 * Copyright 2026 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { AceEditor, AceGlobal } from './internal/AceEditor.js';
import type {
  AceEditorWithSettingsMenu,
  AceSettingsMenuModule,
} from './internal/AceEditor.js';
import AceEditorBase from './internal/ace-editor-base/AceEditorBase.js';
import { OscdOutlinedIconButton } from '../iconbutton/OscdOutlinedIconButton.js';
import { OscdFilledIconButton } from '../iconbutton/OscdFilledIconButton.js';
import { OscdIcon } from '../icon/OscdIcon.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-ace-editor': OscdAceEditor;
  }
}

export { AceGlobal };
export type { AceSettingsMenuModule, AceEditorWithSettingsMenu };

/**
 * @tagname oscd-ace-editor
 * @summary A form-associated Ace code editor for XML editing in OpenSCD.
 *
 * Provides syntax highlighting, code folding, and persisted editor settings.
 * Includes the OpenSCD Ace theme, which derives its colors from `--oscd-theme*`
 * CSS variables.
 *
 * Participates in the HTML form API via `ElementInternals`, including
 * `checkValidity()`, `reportValidity()`, and form submission.
 *
 * Supports programmatic validation via an optional `validator` callback
 * that returns `null` for valid input or an error message string.
 *
 * @event {Event} input Fired on every editor content change.
 * @event {Event} change Fired when the editor loses focus.
 */
export class OscdAceEditor extends ScopedElementsMixin(AceEditor) {
  static scopedElements = {
    'ace-editor': AceEditor,
    'ace-editor-base': AceEditorBase,
    'oscd-outlined-icon-button': OscdOutlinedIconButton,
    'oscd-filled-icon-button': OscdFilledIconButton,
    'oscd-icon': OscdIcon,
  };

  static formAssociated = true;

  /**
   * Optional validation callback. Return `null` when the value is valid,
   * or an error message string when invalid.
   */
  validator!: ((value: string) => string | null) | null;

  private internals!: ElementInternals | null;

  override connectedCallback(): void {
    if (this.validator === undefined) {
      this.validator = null;
    }
    if (this.internals === undefined) {
      try {
        this.internals = this.attachInternals();
      } catch {
        this.internals = null;
      }
    }
    super.connectedCallback();
  }

  override set value(val: string | undefined) {
    super.value = val;
    this.updateFormState();
  }

  override get value(): string {
    return super.value ?? '';
  }

  override firstUpdated(): void {
    super.firstUpdated();

    this.renderRoot.addEventListener('change', (e: Event) => {
      e.stopPropagation();
      this.updateFormState();
      this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
    });

    this.addEventListener('focusout', (e: FocusEvent) => {
      if (!this.contains(e.relatedTarget as Node | null)) {
        this.dispatchEvent(
          new Event('change', { bubbles: true, composed: true }),
        );
      }
    });
  }

  checkValidity(): boolean {
    if (!this.validator) {
      return true;
    }
    return this.validator(this.value) === null;
  }

  reportValidity(): boolean {
    if (!this.validator) {
      this.internals?.setValidity({});
      return true;
    }
    const error = this.validator(this.value);
    if (error === null) {
      this.internals?.setValidity({});
      return true;
    }
    this.internals?.setValidity({ customError: true }, error);
    this.internals?.reportValidity();
    return false;
  }

  setCustomValidity(message: string): void {
    if (message) {
      this.internals?.setValidity({ customError: true }, message);
    } else {
      this.internals?.setValidity({});
    }
  }

  /** Called by the browser when the parent form is reset. */
  formResetCallback(): void {
    this.value = '';
  }

  protected updateFormState(): void {
    const val = this.value;
    this.internals?.setFormValue(val);

    if (!this.validator) {
      this.internals?.setValidity({});
      return;
    }

    const error = this.validator(val);
    if (error === null) {
      this.internals?.setValidity({});
    } else {
      this.internals?.setValidity({ customError: true }, error);
    }
  }

  /** When true, shows the toolbar toggle button. */
  @property({ type: Boolean })
  toolbar!: boolean;

  @state()
  private _toolbarOpen!: boolean;

  private undo(): void {
    this.editor?.execCommand('undo');
  }

  private redo(): void {
    this.editor?.execCommand('redo');
  }

  private collapseAll(): void {
    this.editor?.session.foldAll(1);
  }

  private expandAll(): void {
    this.editor?.session.unfold();
  }

  private search(): void {
    this.editor?.execCommand('find');
  }

  private formatXml(): void {
    const editor = this.editor;
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
      this.value = formatted;
    }
  }

  private openSettings(): void {
    const editor = this.editor as AceEditorWithSettingsMenu | undefined;
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
        ${super.render()}
      </div>
    `;
  }

  static override styles = css`
    ${AceEditor.styles ?? css``}

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

    ace-editor-base {
      height: 100%;
      width: 100%;
    }
  `;
}
