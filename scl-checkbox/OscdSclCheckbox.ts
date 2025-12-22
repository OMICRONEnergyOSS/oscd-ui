import { css, html, LitElement, TemplateResult } from 'lit';
import { property, query, state } from 'lit/decorators.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdCheckbox } from '../checkbox/oscd-checkbox.js';
import { OscdSwitch } from '../switch/oscd-switch.js';

/**
 * @tag oscd-scl-checkbox
 * TextField designed to be used for SCL element */
export class OscdSclCheckbox extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'oscd-switch': OscdSwitch,
    'oscd-checkbox': OscdCheckbox,
  };

  /** Whether [[`value`]] may be set to `null` by nullSwitch */
  @property({ type: Boolean })
  nullable = false;

  /** The default value defined by the XSD attribute default */
  @property({ type: String })
  defaultValue?: 'true' | 'false';

  @state()
  private checkboxValue: 'true' | 'false' = 'false';

  /** SCL attributes `value`, can only be `null` if [[`nullable`]]. */
  @property({ attribute: false })
  set value(value: 'true' | 'false' | null) {
    if (value === null) {
      this.null = true;
    } else {
      this.null = false;
      this.checkboxValue = value;
    }
  }

  get value(): 'true' | 'false' | null {
    return this.null ? null : this.checkboxValue;
  }

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  label: string = '';

  @property({ type: String })
  supportingText: string = '';

  @state()
  private get userText(): string {
    return `${this.label}${
      this.supportingText !== '' ? ` (${this.supportingText})` : ''
    }`;
  }

  @state()
  private isNull = false;

  private parkedValue: 'true' | 'false' | null = null;

  @state()
  private get null(): boolean {
    return this.nullable && this.isNull;
  }

  private set null(value: boolean) {
    if (!this.nullable || value === this.isNull) {
      return;
    }

    this.isNull = value;
    if (this.isNull) {
      this.parkedValue = this.checkboxValue;
      if (this.defaultValue) {
        this.checkboxValue = this.defaultValue;
      }
    } else {
      this.checkboxValue = this.parkedValue!;
      this.parkedValue = null;
    }
  }

  @query('.nullswitch.element') nullSwitch?: OscdSwitch;

  // TODO (jakob-vogelsang): only make sense with the introduction of fixed value
  // eslint-disable-next-line class-methods-use-this
  reportValidity(): boolean {
    return true;
  }

  // TODO (jakob-vogelsang): only make sense with the introduction of fixed value
  // eslint-disable-next-line class-methods-use-this
  checkValidity(): boolean {
    return true;
  }

  private renderNullSwitch(): TemplateResult {
    if (this.nullable) {
      return html`<oscd-switch
        class="nullswitch element"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @input="${async (evt: Event) => {
          /** TODO(jakob-vogelsang): change when
           * https://github.com/material-components/material-web/issues/5486
           * is fixed */
          evt.stopPropagation();
        }}"
        @change="${async (evt: Event) => {
          this.null = !(evt.target as OscdSwitch).selected;
          await this.updateComplete;
          this.dispatchEvent(new Event('input'));
        }}"
      ></oscd-switch>`;
    }
    return html``;
  }

  override render(): TemplateResult {
    return html`
      <div style="display: flex; flex-direction: row;">
        <div class="input container">
          <label
            class="input element"
            style="${this.disabled || this.isNull
              ? `color:rgba(0, 0, 0, 0.38)`
              : ``}"
          >
            <oscd-checkbox
              touch-target="wrapper"
              ?checked=${this.checkboxValue === 'true'}
              ?disabled=${this.disabled || this.isNull}
              @input="${async (evt: Event) => {
                this.checkboxValue =
                  (evt.target as OscdCheckbox).checked === true
                    ? 'true'
                    : 'false';
                await this.updateComplete; // we want the changes of the value to be certain
              }}"
            ></oscd-checkbox>
            ${this.userText}
          </label>
        </div>
        <div class="nullswitch container">${this.renderNullSwitch()}</div>
      </div>
    `;
  }

  static override styles = css`
    .nullswitch.element {
      margin-left: 12px;
    }

    .nullswitch.container {
      display: flex;
      align-items: center;
      height: 56px;
    }

    .input.container {
      flex: auto;
    }

    .input.element {
      display: flex;
      align-items: center;
      height: 100%;
    }
  `;
}
