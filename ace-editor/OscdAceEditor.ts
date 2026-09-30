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
 * @summary Wraps the Ace editor for XML editing in OpenSCD.
 *
 * Provides syntax highlighting, code folding, and persisted editor settings.
 * The custom `ace/theme/oscd` theme uses the `--oscd-ace-editor-*` tokens
 * below; they have no effect when another Ace theme is selected.
 *
 * The OpenSCD theme appears in both Ace's light and dark theme lists. This is
 * intentional: Ace separates themes by category, while the OpenSCD theme uses
 * the same theme definition in both modes and adapts through CSS variables.
 * Import `oscdPaletteComponentMappings` to seed syntax colors from the existing
 * `--oscd-theme-*` palette without adding palette slots.
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
 * @event {CustomEvent<string>} change Fired when the editor content changes.
 * `detail` contains the current editor content.
 * @final
 * @suppress {visibility}
 */
export class OscdAceEditor extends ScopedElementsMixin(AceEditor) {
  static scopedElements = {
    'ace-editor': AceEditor,
    'ace-editor-base': AceEditorBase,
  };
}
