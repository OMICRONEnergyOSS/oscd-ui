import { css, html, LitElement, TemplateResult } from 'lit';
import { property, query, state } from 'lit/decorators.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdFilledSelect } from '../select/OscdFilledSelect.js';
import { OscdSelectOption } from '../select/OscdSelectOption.js';
import { OscdSwitch } from '../switch/OscdSwitch.js';

/**
 * @tag oscd-scl-select
 * Select designed to be used for SCL element */
export class OscdSclSelect extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'oscd-switch': OscdSwitch,
    'oscd-filled-select': OscdFilledSelect,
    'oscd-select-option': OscdSelectOption,
  };

  /** Whether [[`value`]] may be set to `null` by nullSwitch */
  @property({ type: Boolean })
  nullable = false;

  @state()
  private selectValue: string = '';

  /** SCL attributes `value`, can only be `null` if [[`nullable`]]. */
  @property({ attribute: false })
  set value(value: string | null) {
    if (value === null) {
      this.null = true;
    } else {
      this.null = false;
      this.selectValue = value;
    }
  }

  get value(): string | null {
    return this.null ? null : this.selectValue;
  }

  /** Value array be be renders as selection option inside the selection input */
  @property({ type: Array })
  selectOptions: string[] = [];

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  label: string = '';

  @property({ type: Boolean })
  required: boolean = false;

  @property({ type: String })
  supportingText: string = '';

  @state()
  private isNull = false;

  private parkedValue: string | null = null;

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
      this.parkedValue = this.selectValue;
    } else {
      this.selectValue = this.parkedValue ?? '';
      this.parkedValue = null;
    }
  }

  @query('.nullswitch.element') nullSwitch?: OscdSwitch;

  @query('.input.element') private selectInput?: OscdFilledSelect;

  reportValidity(): boolean {
    return this.selectInput!.reportValidity();
  }

  setCustomValidity(message: string): void {
    this.selectInput?.setCustomValidity(message);
  }

  checkValidity(): boolean {
    return this.selectInput!.checkValidity();
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

  private renderSelectOption(selectOption: string): TemplateResult {
    return html`<oscd-select-option
      ?selected=${this.value === selectOption}
      value="${selectOption}"
      ><div slot="headline">${selectOption}</div></oscd-select-option
    >`;
  }

  override render(): TemplateResult {
    return html`
      <div class="main">
        <div class="input container">
          <oscd-filled-select
            class="input element"
            @input="${(evt: InputEvent) => {
              this.selectValue = (evt.target as OscdFilledSelect).value;
            }}"
            value="${this.selectValue}"
            ?disabled=${this.disabled || this.isNull}
            label="${this.label}"
            ?required=${this.required}
            supporting-text="${this.supportingText}"
            >${this.selectOptions.map(selectOption =>
              this.renderSelectOption(selectOption),
            )}</oscd-filled-select
          >
        </div>
        <div class="nullswitch container">${this.renderNullSwitch()}</div>
      </div>
    `;
  }

  static override styles = css`
    .main {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
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
      width: 100%;
    }
  `;
}
