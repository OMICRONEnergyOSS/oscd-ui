/**
 * @license
 * Copyright 2026 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { AceEditor, AceGlobal } from './internal/AceEditor.js';
import type {
  AceEditorWithSettingsMenu,
  AceSettingsMenuModule,
} from './internal/AceEditor.js';
import AceEditorBase from './internal/ace-editor-base/AceEditorBase.js';

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
}
