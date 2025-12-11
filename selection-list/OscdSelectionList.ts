import { css, html, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';

import { OscdCheckbox } from '../checkbox/OscdCheckbox.js';
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
  /** Whether an icon is selected */
  selected: boolean;
  /** wether an item shall be display but disabled */
  disabled?: boolean;
};

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
  };

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

  private renderCheckboxListItem(item: SelectItem): TemplateResult {
    return html`<oscd-list-item
      type="link"
      @click=${() => {
        item.selected = !item.selected;
        this.requestUpdate();
      }}
      class="${classMap({
        hidden: !this.searchRegex?.test(
          `${item.headline} ${item.supportingText ?? ''}`,
        ),
      })}"
    >
      <div slot="headline">${item.headline}</div>
      ${item.supportingText
        ? html`<div slot="supporting-text">${item.supportingText}</div>`
        : html``}
      <oscd-checkbox
        slot="end"
        ?checked=${item.selected}
        ?disabled=${item.disabled}
      ></oscd-checkbox>
    </oscd-list-item>`;
  }

  private renderListItem(item: SelectItem): TemplateResult {
    return this.renderCheckboxListItem(item);
  }

  override render(): TemplateResult {
    return html`<section>
      ${this.renderSearchField()}
      <div style="display: flex;">
        <oscd-list class="listitems">
          ${this.items.map(item => this.renderListItem(item))}</oscd-list
        >
      </div>
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

    .hidden {
      display: none;
    }
  `;
}
