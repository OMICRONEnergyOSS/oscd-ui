import { css, html, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';

import { OscdCheckbox } from '../checkbox/OscdCheckbox.js';
import { OscdRadio } from '../radio/OscdRadio.js';
import { OscdIcon } from '../icon/OscdIcon.js';
import { OscdList } from '../list/OscdList.js';
import { OscdListItem } from '../list/OscdListItem.js';
import { OscdOutlinedTextField } from '../textfield/OscdOutlinedTextField.js';

import { FilterListBase } from './internal/FilterListBase.js';

export type SelectItem = {
  /** The main information of the list item */
  headline: string;
  /** Supporting information rendered in a second line */
  supportingText?: string;
  /** An attached XML element */
  attachedElement?: Element;
  /** An icon rendered left to the list item content */
  startingIcon?: string;
  /** Whether this item is selected or not */
  selected: boolean;
  /** wether an item shall be display but disabled */
  disabled?: boolean;
};

function renderListItemCheckbox(item: SelectItem) {
  return html`<oscd-checkbox
    slot="start"
    ?checked=${item.selected}
    ?disabled=${item.disabled}
  ></oscd-checkbox>`;
}
function renderListItemRadioButton(item: SelectItem, name: string) {
  return html`<oscd-radio
    slot="start"
    name=${name}
    ?checked=${item.selected}
    ?disabled=${item.disabled}
  ></oscd-radio>`;
}

/**
 * @tag oscd-selection-list
 *  List component to select from a set of options
 * */
export class OscdSelectionList extends FilterListBase {
  static scopedElements = {
    'oscd-outlined-text-field': OscdOutlinedTextField,
    'oscd-icon': OscdIcon,
    'oscd-list': OscdList,
    'oscd-list-item': OscdListItem,
    'oscd-checkbox': OscdCheckbox,
    'oscd-radio': OscdRadio,
  };

  @property({ type: Boolean })
  multiselect: boolean = false;

  // @property({ type: String })
  // name: string =
  //   `oscd-selection-list-${Math.random().toString(36).substr(2, 9)}`;

  @property({ type: Array })
  items: SelectItem[] = [];

  @property({ type: Array })
  get selectedElements(): Element[] {
    const elements: Element[] = [];

    this.items.forEach(item => {
      if (item.selected && item.attachedElement) {
        elements.push(item.attachedElement);
      }
    });

    return elements;
  }

  private renderListItem(item: SelectItem): TemplateResult {
    return html`<oscd-list-item
      type="button"
      @click=${() => {
        item.selected = !item.selected;
        if (!this.multiselect) {
          this.items.forEach(i => {
            if (i !== item) {
              i.selected = false;
            }
          });
        }
        this.dispatchEvent(newSelectionListChangeEvent(this.selectedElements));
        this.requestUpdate('items');
      }}
      class="${classMap({
        hidden: !this.searchRegex?.test(
          `${item.headline} ${item.supportingText ?? ''}`,
        ),
      })}"
    >
      ${this.multiselect
        ? renderListItemCheckbox(item)
        : renderListItemRadioButton(item, 'radio-group')}

      <div slot="headline">${item.headline}</div>
      ${item.supportingText
        ? html`<div slot="supporting-text">${item.supportingText}</div>`
        : html``}
    </oscd-list-item>`;
  }

  override render(): TemplateResult {
    return html`<section>
      ${this.renderSearchField()}
      <oscd-list class="listitems">
        ${this.items.map(item => this.renderListItem(item))}</oscd-list
      >
    </section>`;
  }

  static override styles = css`
    section {
      display: flex;
      flex-direction: column;
    }

    oscd-outlined-text-field {
      background-color: var(--md-sys-color-surface, #fef7ff);
      --oscd-outlined-text-field-container-shape: 32px;
      padding: 8px;
    }

    .listitems {
      flex: auto;
    }

    oscd-radio {
      --md-radio-hover-state-layer-opacity: 0;
      --md-radio-pressed-state-layer-opacity: 0;
      --md-radio-selected-hover-state-layer-opacity: 0;
      --md-radio-selected-pressed-state-layer-opacity: 0;
    }

    oscd-checkbox {
      --md-checkbox-hover-state-layer-opacity: 0;
      --md-checkbox-pressed-state-layer-opacity: 0;
      --md-checkbox-selected-hover-state-layer-opacity: 0;
      --md-checkbox-selected-pressed-state-layer-opacity: 0;
    }

    .hidden {
      display: none;
    }
  `;
}

export interface SelectionListChangeDetail {
  selectedElements: Element[];
}
export type SelectionListChangeEvent = CustomEvent<SelectionListChangeDetail>;
function newSelectionListChangeEvent(
  selectedElements: Element[],
  eventInitDict?: CustomEventInit<SelectionListChangeDetail>,
): SelectionListChangeEvent {
  return new CustomEvent<SelectionListChangeDetail>('selection-list-change', {
    bubbles: true,
    composed: true,
    ...eventInitDict,
    detail: { selectedElements, ...eventInitDict?.detail },
  });
}

declare global {
  interface ElementEventMap {
    ['selection-list-change']: SelectionListChangeEvent;
  }
}
