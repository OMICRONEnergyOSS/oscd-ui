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
 * Includes the OpenSCD Ace theme, which derives its colors from `--oscd-theme*`
 * CSS variables.
 *
 * The OpenSCD theme appears in both Ace's light and dark theme lists. This is
 * intentional: Ace separates themes by category, while the OpenSCD theme uses
 * the same theme definition in both modes and adapts through CSS variables.
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
