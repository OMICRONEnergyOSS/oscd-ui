/* eslint-disable class-methods-use-this */

import {
  NotifyAttribute,
  NotifyBooleanAttribute,
  NotifyNumericAttribute,
} from './property-decorators.js';

import { Ace } from 'ace-builds';
import { debounce } from './debounce.js';
import type * as AceGlobal from 'ace-builds';

declare global {
  interface Window {
    ace: typeof AceGlobal;
  }
}

/**
 * Custom element Ace code editor
 */
class AceEditorBase extends HTMLElement {
  private static _observedAttributes: string[] = [];

  private _editor?: Ace.Editor;
  get editor(): Ace.Editor | undefined {
    return this._editor;
  }

  /**
   * True while `handleChange` syncs the editor's content to the value
   * attribute.  Prevents `attributeChangedCallback` from scheduling a
   * redundant (and racy) `initializeEditor` call.
   */
  private _syncingFromEditor = false;

  get version(): { [key: string]: string } {
    return {
      ace: window.ace?.version || 'unknown',
    };
  }

  @NotifyAttribute()
  value?: string;

  @NotifyAttribute()
  mode?: string;

  @NotifyAttribute()
  theme?: string;

  @NotifyNumericAttribute()
  tabSize?: number;

  @NotifyBooleanAttribute()
  readonly?: boolean;

  @NotifyBooleanAttribute()
  softTabs?: boolean;

  @NotifyBooleanAttribute()
  wrap?: boolean;

  @NotifyAttribute()
  valueUpdateMode?: string;

  @NotifyBooleanAttribute()
  hideActiveLineHighlight?: boolean;

  @NotifyBooleanAttribute()
  hideGutter?: boolean;

  @NotifyBooleanAttribute()
  hideGutterLineHighlight?: boolean;

  @NotifyBooleanAttribute()
  hidePrintMargin?: boolean;

  @NotifyAttribute()
  basePath?: string;

  static get observedAttributes(): string[] {
    return AceEditorBase._observedAttributes;
  }

  /**
   * Registers an attribute to be observed.
   *
   * @param name Attribute name to observe.
   * @internal
   */
  addObservedAttribute(name: string): void {
    AceEditorBase._observedAttributes.push(name);
  }

  private dispatch<T>(type: string, detail: T): void {
    this.dispatchEvent(
      new CustomEvent(type, {
        bubbles: true,
        composed: true,
        cancelable: false,
        detail,
      }),
    );
  }

  private initializeEditor = debounce(() => {
    if (this.basePath) {
      window.ace.config.set('basePath', this.basePath);
    }

    const editor = this._editor || window.ace.edit(this);

    this.appendStyles();

    editor.session.setMode(this.mode || 'ace/mode/xml');
    editor.setTheme(this.theme || 'ace/theme/oscd');

    const text = editor.getValue() || '';
    if (text !== this.value) {
      editor.setValue(this.value || '', -1);
    }

    editor.getSession().setTabSize(this.tabSize || 2);
    editor.getSession().setUseSoftTabs(!!this.softTabs);

    editor.renderer.setShowGutter(!this.hideGutter);
    editor.renderer.setShowPrintMargin(!this.hidePrintMargin);
    editor.setHighlightActiveLine(!this.hideActiveLineHighlight);
    editor.setHighlightGutterLine(!this.hideGutterLineHighlight);

    editor.setReadOnly(!!this.readonly);
    if (this.readonly) {
      editor.setHighlightActiveLine(!this.readonly);
      editor.setHighlightGutterLine(!this.readonly);
    }

    editor.getSession().setUseWrapMode(!!this.wrap);

    editor.off('change', this.handleChange);
    editor.on('change', this.handleChange);
    editor.off('blur', this.handleBlur);
    editor.on('blur', this.handleBlur);

    this.resize();

    this._editor = editor;
  });

  private appendStyles() {
    const rootNode = this.getRootNode() as Document | ShadowRoot | undefined;
    const aceStyleId = `ace_editor.css`;
    const customStyleId = `ace-custom-element-style`;

    // initialize styles if rendering on the client:
    if (rootNode) {
      if (!rootNode.getElementById?.(customStyleId)) {
        const style = document.createElement('style');
        style.id = customStyleId;
        style.type = 'text/css';
        style.innerHTML = `
        ace-editor {
          display: block;
          width: 100%;
          height: 250px;
        }
        `;

        if (rootNode instanceof Document && rootNode.head) {
          rootNode.head.appendChild(style);
        } else {
          rootNode.appendChild(style);
        }
      }

      if (!rootNode.getElementById?.(aceStyleId)) {
        const editorStyle = document.getElementById(aceStyleId);
        if (editorStyle) {
          if (rootNode instanceof Document && rootNode.head) {
            rootNode.head.appendChild(editorStyle.cloneNode(true));
          } else {
            rootNode.appendChild(editorStyle.cloneNode(true));
          }
        }
      }
    }
  }

  connectedCallback(): void {
    this.initializeEditor().then(() => {
      this.dispatch('ready', {
        editor: this.editor,
      });
    });
  }

  disconnectedCallback(): void {
    if (!this._editor) {
      return;
    }

    this._editor.off('change', this.handleChange);
    this._editor.off('blur', this.handleBlur);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attributeChangedCallback(name: string): void {
    if (!this._syncingFromEditor) {
      this.initializeEditor();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  notifyPropertyChanged(name: string): void {
    this.initializeEditor();
  }

  resize(): void {
    this._editor?.resize();
  }

  private handleChange = debounce(() => {
    const text = this._editor?.getValue() || '';
    if (text !== this.value) {
      this._syncingFromEditor = true;
      if (text) {
        this.setAttribute('value', text);
      } else {
        this.removeAttribute('value');
      }
      this._syncingFromEditor = false;

      this.dispatch('change', text);
    }
  });

  private handleBlur = () => {
    this.dispatchEvent(new FocusEvent('blur'));
  };
}

export default AceEditorBase;
