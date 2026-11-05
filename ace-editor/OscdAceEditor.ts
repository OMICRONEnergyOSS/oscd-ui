/**
 * @license
 * Copyright 2026 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { css, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';

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
 * @summary A text editor with optional toolbar, validation and form association.
 *
 * Provides syntax highlighting, code folding, and persisted editor settings.
 * The custom `ace/theme/oscd` theme uses the `--oscd-ace-editor-*` tokens
 * below; they have no effect when another Ace theme is selected.
 *
 * The OpenSCD theme appears in both Ace's light and dark theme lists. This is
 * intentional: Ace separates themes by category, while the OpenSCD theme uses
 * the same theme definition in both modes and adapts through CSS variables.
 * Import `oscdPaletteComponentMappings` to seed syntax colors from an OpenSCD
 * palette without adding palette slots.
 *
 * @cssprop [--oscd-ace-editor-container-color=var(--md-sys-color-surface, #fef7ff)] - Editor background for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-text-color=var(--md-sys-color-on-surface, #1d1b20)] - Default editor text for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-gutter-color=var(--md-sys-color-surface-container-low, #f7f2fa)] - Gutter background for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-gutter-text-color=var(--md-sys-color-on-surface-variant, #49454f)] - Gutter text for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-active-line-color=var(--md-sys-color-surface-container, #f3edf7)] - Active line background for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-selection-color=var(--md-sys-color-primary, #6750a4)] - Selection background for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-cursor-color=var(--md-sys-color-primary, #6750a4)] - Cursor color for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-font-family=monospace] - Editor font for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-syntax-keyword-color=var(--md-sys-color-secondary, #625b71)] - Keyword color for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-syntax-string-color=var(--md-sys-color-on-surface, #1d1b20)] - String color for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-syntax-tag-color=var(--md-sys-color-secondary, #625b71)] - Tag color for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-syntax-attribute-name-color=var(--md-sys-color-primary, #6750a4)] - Attribute name color for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-syntax-comment-color=var(--md-sys-color-on-surface-variant, #49454f)] - Comment color for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-syntax-number-color=var(--md-sys-color-on-surface, #1d1b20)] - Number color for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-syntax-invalid-color=var(--md-sys-color-error, #b3261e)] - Invalid syntax text color for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-syntax-storage-color=var(--md-sys-color-primary, #6750a4)] - Storage and support symbol color for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-syntax-operator-color=var(--md-sys-color-on-surface-variant, #49454f)] - Operator and XML punctuation color for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-syntax-parameter-color=var(--md-sys-color-secondary, #625b71)] - Parameter color for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-syntax-regex-color=var(--md-sys-color-error, #b3261e)] - Regular expression color for `ace/theme/oscd` only.
 * @cssprop [--oscd-ace-editor-step-color=var(--md-sys-color-secondary, #625b71)] - Debug execution-step marker color for `ace/theme/oscd` only.
 *
 * `value` reads the live text; programmatic writes do not emit input events.
 * `validator` optionally returns an error message or null. No SCL/schema
 * validation is performed by default. `toolbar` enables the floating toolbar.
 *
 * @event {CustomEvent<string>} change Fired on user edits, with text in detail.
 * Retained for compatibility; this is not a blur event.
 * @event {InputEvent} input Fired on user edits.
 * @suppress {visibility}
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

  @property({ type: Boolean })
  toolbar = false;

  @state()
  private toolbarOpen = false;

  private internals?: ElementInternals;
  private validationCallback: ((value: string) => string | null) | null = null;
  private customValidationMessage = '';

  @property({ attribute: false, noAccessor: true })
  set validator(callback: ((value: string) => string | null) | null) {
    this.validationCallback = callback;
    this.updateFormState();
  }

  get validator(): ((value: string) => string | null) | null {
    return this.validationCallback;
  }

  @property({ type: String, noAccessor: true })
  override set value(value: string | undefined) {
    super.value = value;
    this.updateFormState();
  }

  override get value(): string {
    return super.value;
  }

  override connectedCallback(): void {
    this.internals ??= this.attachInternals();
    super.connectedCallback();
    this.updateFormState();
  }

  checkValidity(): boolean {
    this.updateFormState();
    return (
      this.internals?.checkValidity() ?? this.getValidationMessage() === ''
    );
  }

  reportValidity(): boolean {
    this.updateFormState();
    return (
      this.internals?.reportValidity() ?? this.getValidationMessage() === ''
    );
  }

  setCustomValidity(message: string): void {
    this.customValidationMessage = message;
    this.updateFormState();
  }

  formResetCallback(): void {
    this.value = '';
  }

  private handleAceChange(event: CustomEvent<string>): void {
    if (typeof event.detail !== 'string') {
      return;
    }
    event.stopPropagation();
    this.notifyInput();
  }

  private handleToggleToolbar(): void {
    this.toolbarOpen = !this.toolbarOpen;
  }

  private handleUndo(): void {
    this.editor?.execCommand('undo');
  }

  private handleRedo(): void {
    this.editor?.execCommand('redo');
  }

  private handleCollapse(): void {
    this.editor?.session.foldAll(1);
  }

  private handleExpand(): void {
    this.editor?.session.unfold();
  }

  private handleSearch(): void {
    this.editor?.execCommand('find');
  }

  private handleSettings(): void {
    const editor: AceEditorWithSettingsMenu | undefined = this.editor;
    editor?.showSettingsMenu?.();
  }

  private handleFormat(): void {
    const editor = this.editor;
    if (editor === undefined || this.value.trim() === '') {
      return;
    }
    const selection = editor.getSelectedText();
    const source = selection || this.value;
    const range = editor.getSelectionRange();
    const initialIndent = selection
      ? (editor.session.getLine(range.start.row).match(/^\s*/)?.[0] ?? '')
      : '';
    let indent = '';
    const nodes = source
      .trim()
      .replace(/^</, '')
      .replace(/>$/, '')
      .split(/>\s*</);
    const formatted = nodes
      .map(node => {
        if (/^\/\w/.test(node)) {
          indent = indent.slice(1);
        }
        const line = `${initialIndent}${indent}<${node}>`;
        if (/^<?\w[^>]*[^/]$/.test(node)) {
          indent += '\t';
        }
        return line;
      })
      .join('\n');
    if (selection) {
      editor.session.replace(range, formatted);
    } else {
      this.value = formatted + '\n';
      this.notifyInput();
    }
  }

  private notifyInput(): void {
    this.updateFormState();
    this.dispatchEvent(
      new InputEvent('input', { bubbles: true, composed: true }),
    );
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: this.value,
        bubbles: true,
        composed: true,
      }),
    );
  }

  private getValidationMessage(): string {
    return this.customValidationMessage || this.validator?.(this.value) || '';
  }

  protected updateFormState(): void {
    const message = this.getValidationMessage();
    this.internals?.setFormValue(this.value);
    this.internals?.setValidity(message ? { customError: true } : {}, message);
  }

  private renderToolbar() {
    return html`
      <oscd-filled-icon-button
        class="toolbar-toggle"
        .ariaLabel=${this.toolbarOpen ? 'Hide toolbar' : 'Show toolbar'}
        @click=${this.handleToggleToolbar}
      >
        <oscd-icon>${this.toolbarOpen ? 'close' : 'more_vert'}</oscd-icon>
      </oscd-filled-icon-button>
      ${
        this.toolbarOpen
          ? html`
              <div class="toolbar" role="group" aria-label="Editor actions">
                <oscd-outlined-icon-button
                  .ariaLabel=${'Undo'}
                  @click=${this.handleUndo}
                >
                  <oscd-icon>undo</oscd-icon>
                </oscd-outlined-icon-button>
                <oscd-outlined-icon-button
                  .ariaLabel=${'Redo'}
                  @click=${this.handleRedo}
                >
                  <oscd-icon>redo</oscd-icon>
                </oscd-outlined-icon-button>
                <oscd-outlined-icon-button
                  .ariaLabel=${'Collapse all'}
                  @click=${this.handleCollapse}
                >
                  <oscd-icon>collapse_all</oscd-icon>
                </oscd-outlined-icon-button>
                <oscd-outlined-icon-button
                  .ariaLabel=${'Expand all'}
                  @click=${this.handleExpand}
                >
                  <oscd-icon>expand_all</oscd-icon>
                </oscd-outlined-icon-button>
                <oscd-outlined-icon-button
                  .ariaLabel=${'Search'}
                  @click=${this.handleSearch}
                >
                  <oscd-icon>search</oscd-icon>
                </oscd-outlined-icon-button>
                <oscd-outlined-icon-button
                  .ariaLabel=${'Format XML'}
                  @click=${this.handleFormat}
                >
                  <oscd-icon>format_indent_increase</oscd-icon>
                </oscd-outlined-icon-button>
                <oscd-outlined-icon-button
                  .ariaLabel=${'Settings'}
                  @click=${this.handleSettings}
                >
                  <oscd-icon>settings</oscd-icon>
                </oscd-outlined-icon-button>
              </div>
            `
          : nothing
      }
    `;
  }

  override render() {
    return html`
      <div class="editor-container" @change=${this.handleAceChange}>
        ${this.toolbar ? this.renderToolbar() : nothing} ${super.render()}
      </div>
    `;
  }

  static override styles = css`
    ${AceEditor.styles}
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
      gap: 4px;
      padding: 4px;
      border-radius: var(--md-sys-shape-corner-medium, 8px);
      background: var(--md-sys-color-surface-container, #f3edf7);
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
    }
  `;
}
