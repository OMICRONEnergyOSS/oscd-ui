import { css, html, nothing, TemplateResult } from 'lit';

import { OscdSelectionList } from '../selection-list/OscdSelectionList.js';
import { OscdDialog } from '../dialog/OscdDialog.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { Dialog } from '@omicronenergy/oscd-material-web-base/dialog/internal/dialog.js';
import { property, query, queryAssignedNodes } from 'lit/decorators.js';
import { OscdOutlinedIconButton } from '../iconbutton/OscdOutlinedIconButton.js';
import { OscdFilledButton } from '../button/OscdFilledButton.js';
import { OscdIcon } from '../icon/OscdIcon.js';
import { OscdOutlinedButton } from '../button/OscdOutlinedButton.js';
import { OscdSclIcon } from '../scl-icon/OscdSclIcon.js';

/**
 * @tag oscd-filter-button
 * A Button control which opens a dialog containing a filterable list.
 *
 */
export class OscdFilterButton extends ScopedElementsMixin(OscdSelectionList) {
  static override scopedElements = {
    ...super.scopedElements,
    'oscd-dialog': OscdDialog,
    'oscd-outlined-icon-button': OscdOutlinedIconButton,
    'oscd-icon': OscdIcon,
    'oscd-scl-icon': OscdSclIcon,
    'oscd-outlined-button': OscdOutlinedButton,
    'oscd-filled-button': OscdFilledButton,
  };

  @property()
  header: TemplateResult | string = 'Filter';

  @property()
  closeButtonLabel: string = 'Apply';

  @property()
  cancelButtonLabel: string = 'Cancel';

  @property({ type: Boolean })
  disabled = false;

  @query('oscd-dialog')
  private filterDialog!: Dialog;

  @queryAssignedNodes({ slot: 'icon' })
  private _iconSlot?: NodeListOf<HTMLElement>;

  private toggleList(): void {
    this.filterDialog.show();
  }

  private onClose(): void {
    this.dispatchEvent(newFilterButtonCloseEvent(this.selectedElements));
  }

  override render() {
    return html`
      <oscd-outlined-icon-button
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot
          name="icon"
          class="filter-button-icon-slot"
          @slotchange=${() => this.requestUpdate()}
        ></slot>
        ${!this._iconSlot || this._iconSlot.length === 0
          ? html`<oscd-icon class="default-icon">filter_list</oscd-icon>`
          : nothing}
      </oscd-outlined-icon-button>
      <oscd-dialog @close="${() => this.onClose()}">
        <div slot="headline">${this.header}</div>
        <form slot="content" id="form-id" method="dialog">
          ${super.render()}
        </form>
        <div slot="actions">
          <oscd-outlined-button value="cancel" form="form-id">
            ${this.cancelButtonLabel}
          </oscd-outlined-button>
          <oscd-filled-button value="apply" form="form-id">
            ${this.closeButtonLabel}
          </oscd-filled-button>
        </div>
      </oscd-dialog>
    `;
  }

  static override styles = css`
    ${OscdSelectionList.styles}
    oscd-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    oscd-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
}

export interface FilterButtonDialogCloseDetail {
  selectedElements: Element[];
}
export type FilterButtonDialogCloseEvent =
  CustomEvent<FilterButtonDialogCloseDetail>;
function newFilterButtonCloseEvent(
  selectedElements: Element[],
  eventInitDict?: CustomEventInit<FilterButtonDialogCloseDetail>,
): FilterButtonDialogCloseEvent {
  return new CustomEvent<FilterButtonDialogCloseDetail>(
    'filter-button-dialog-close',
    {
      bubbles: true,
      composed: true,
      ...eventInitDict,
      detail: { selectedElements, ...eventInitDict?.detail },
    },
  );
}

declare global {
  interface ElementEventMap {
    ['filter-button-dialog-close']: FilterButtonDialogCloseEvent;
  }
}
