import { css, html, TemplateResult } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';

import { OscdMenu, Menu } from '../menu/OscdMenu.js';
import { Icon } from '@omicronenergy/oscd-material-web-base/icon/internal/icon.js';
import { OscdDivider } from '../divider/OscdDivider.js';
import { OscdIcon } from '../icon/OscdIcon.js';
import { OscdList } from '../list/OscdList.js';
import { OscdListItem } from '../list/OscdListItem.js';
import { OscdMenuItem } from '../menu/OscdMenuItem.js';
import { OscdOutlinedTextField } from '../textfield/OscdOutlinedTextField.js';

import { FilterListBase } from '../selection-list/internal/FilterListBase.js';

type Action = {
  icon: string;
  label?: string;
  callback: (item: ActionItem) => void;
};

export type ActionItem = {
  /** The main information of the list item */
  headline: string;
  /** Supporting information rendered in a second line */
  supportingText?: string;
  /** An attached XML element */
  attachedElement?: Element;
  /** An icon rendered left to the list item content */
  startingIcon?: string;
  /** An icon rendered right to the list item content */
  endingIcon?: string;
  /** Whether to add a divider at the bottom of the item  */
  divider?: boolean;
  /** Specifies additional filter terms */
  filtergroup?: string[];
  /** The action to be performed when clicking the list item */
  primaryAction?: (item: ActionItem) => void;
  /** Additional actions for the item. The first rendered is visible */
  actions?: Action[];
};

function term(item: ActionItem): string {
  return `${item.headline} ${item.supportingText ?? ''}${
    item.filtergroup?.join(' ') ?? ''
  }`;
}

/**
 * @tag oscd-action-list
 * TextField designed to be used for SCL element
 * */
export class OscdActionList extends FilterListBase {
  static scopedElements = {
    'oscd-outlined-text-field': OscdOutlinedTextField,
    'oscd-icon': OscdIcon,
    'oscd-list': OscdList,
    'oscd-list-item': OscdListItem,
    'oscd-divider': OscdDivider,
    'oscd-menu': OscdMenu,
    'oscd-menu-item': OscdMenuItem,
  };

  /** ListItems and potential */
  @property({ type: Array })
  items: ActionItem[] = [];

  /** Height of each list item */
  @property({ type: Number })
  height: number = 72;

  private renderMoreVertItem(item: ActionItem): TemplateResult {
    item.actions!.shift();
    const otherActions = item.actions!;

    return html`
      <span style="position: relative">
        <oscd-list-item
          id="more-vert-anchor"
          type="button"
          class="${classMap({
            hidden: !this.searchRegex.test(term(item)),
          })}"
          @click=${(evt: Event) => {
            const menu =
              evt.target instanceof Icon
                ? ((evt.target.parentElement as Element)
                    .nextElementSibling as Menu)
                : ((evt.target as Element).nextElementSibling as Menu);

            menu.show();
          }}
        >
          <oscd-icon slot="start">more_vert</oscd-icon>
        </oscd-list-item>
        <oscd-menu id="more-vert-menu" anchor="more-vert-anchor">
          ${otherActions.map(
            action =>
              html`<oscd-menu-item @click=${action.callback}>
                <div slot="headline">${action.label}</div>
                <oscd-icon slot="start">${action.icon}</oscd-icon>
              </oscd-menu-item>`,
          )}
        </oscd-menu> </span
      >${item.divider
        ? html`<oscd-divider
            class="${classMap({ hidden: !this.searchRegex.test(term(item)) })}"
          ></oscd-divider>`
        : html``}
    `;
  }

  private renderActionItem(item: ActionItem, index = 0): TemplateResult {
    const action = item.actions ? item.actions[index] : null;

    if (!action) {
      return html`<oscd-list-item
          class="${classMap({
            hidden: !this.searchRegex.test(term(item)),
          })}"
        ></oscd-list-item
        >${item.divider
          ? html`<oscd-divider
              class="${classMap({
                hidden: !this.searchRegex.test(term(item)),
              })}"
            ></oscd-divider>`
          : html``}`;
    }

    return html`<oscd-list-item
        type="button"
        class="${classMap({
          hidden: !this.searchRegex.test(term(item)),
        })}"
        @click=${() => action.callback(item)}
      >
        <oscd-icon slot="start">${action.icon}</oscd-icon> </oscd-list-item
      >${item.divider
        ? html`<oscd-divider
            class="${classMap({ hidden: !this.searchRegex.test(term(item)) })}"
          ></oscd-divider>`
        : html``}`;
  }

  private renderOtherActions(): TemplateResult {
    return html`<oscd-list>
      ${this.items.map(item =>
        item.actions && item.actions?.length > 2
          ? this.renderMoreVertItem(item)
          : this.renderActionItem(item, 1),
      )}</oscd-list
    >`;
  }

  private renderFirstAction(): TemplateResult {
    return html`<oscd-list>
      ${this.items.map(item => this.renderActionItem(item))}</oscd-list
    >`;
  }

  private renderActions(): TemplateResult {
    return html`
      ${this.items.some(item => item.actions && item.actions[0])
        ? this.renderFirstAction()
        : html``}
      ${this.items.some(item => item.actions && item.actions.length > 1)
        ? this.renderOtherActions()
        : html``}
    `;
  }

  private renderActionListItem(item: ActionItem): TemplateResult {
    return html`<oscd-list-item
        type="${item.primaryAction ? 'link' : 'text'}"
        class="${classMap({
          hidden: !this.searchRegex.test(term(item)),
        })}"
        title="${item.headline ?? ''}
${item.headline && item.supportingText ? '-' : ''}${item.supportingText}"
        @click=${() => item.primaryAction && item.primaryAction(item)}
      >
        <div slot="headline" class="firstLine">${item.headline}</div>
        ${item.supportingText
          ? html`<div slot="supporting-text">${item.supportingText}</div>`
          : html``}
        ${item.startingIcon
          ? html`<oscd-icon slot="start">${item.startingIcon}</oscd-icon>`
          : html``}
        ${item.endingIcon
          ? html`<oscd-icon slot="end">${item.endingIcon}</oscd-icon>`
          : html``} </oscd-list-item
      >${item.divider
        ? html`<oscd-divider
            class="${classMap({ hidden: !this.searchRegex.test(term(item)) })}"
          ></oscd-divider>`
        : html``}`;
  }

  private renderListItem(item: ActionItem): TemplateResult {
    return this.renderActionListItem(item);
  }

  override render(): TemplateResult {
    return html`<style>
        oscd-list-item {
          height: ${this.height}px;
        }
        [slot='supporting-text'] {
          max-height: ${this.height - 24}px;
        }
      </style>
      <section>
        ${this.renderSearchField()}
        <div style="display: flex;">
          <oscd-list class="listitems">
            ${this.items.map(item => this.renderListItem(item))}</oscd-list
          >
          ${this.renderActions()}
        </div>
      </section>`;
  }

  static override styles = css`
    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    oscd-outlined-text-field {
      background-color: var(--md-sys-color-surface, #fef7ff);
      --oscd-outlined-text-field-container-shape: 32px;
      padding: 8px;
    }

    [slot='headline'] {
      white-space: pre;
    }

    [slot='supporting-text'] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }

    .listitems {
      flex: auto;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .hidden {
      display: none;
    }
  `;
}
