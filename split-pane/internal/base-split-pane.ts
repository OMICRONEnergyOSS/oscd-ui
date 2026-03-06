/* src/components/oscd-split-pane.ts */
import { LitElement, css, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { CSSResultGroup } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdIcon } from '../../icon/OscdIcon.js';
import { OscdIconButton } from '../../iconbutton/OscdIconButton.js';
import { OscdFilledTonalIconButton } from '../../iconbutton/OscdFilledTonalIconButton.js';

export type Orientation = 'horizontal' | 'vertical';

/**
 * Shared base for split panes.
 *
 * Public API:
 *  - size: number (px)  <-- persisted via localstorage in subclasses
 *  - defaultSize: number (px) default 300px
 *  - min: number (px) default 0
 *  - max?: number (px)  // optional; if omitted, computed from host size
 *
 * Events:
 *  - 'split-resize' with detail { size: number }
 *  - 'split-toggle' with detail { collapsed: boolean, size: number, source: 'icon' }
 *
 * Notes:
 *  - no global/window listeners: uses pointer capture on the divider element.
 *  - uses flexbox; left/top pane uses fixed flex-basis, right/bottom pane flex:1
 */
export abstract class SplitPaneBase extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'oscd-icon': OscdIcon,
    'oscd-icon-button': OscdIconButton,
    'oscd-filled-tonal-icon-button': OscdFilledTonalIconButton,
  };

  /** fixed orientation is defined by concrete subclasses */
  protected abstract readonly orientation: Orientation;

  /** default expanded size used by icon expand action (px) */
  @property({ type: Number, attribute: false })
  defaultSize = 300;

  /** controlled size of the primary pane (px) */
  @property({ type: Number, attribute: false })
  size = this.defaultSize;

  /** min size px */
  @property({ type: Number })
  min = 0;

  /** optional max size px (if undefined, computed from host size) */
  @property({ type: Number })
  max?: number;

  /** internal state while dragging */
  @state()
  private isDragging = false;

  private startClient = 0;
  private startSize = 0;

  override connectedCallback(): void {
    super.connectedCallback();
    this.classList.toggle('horizontal', this.orientation === 'horizontal');
    this.classList.toggle('vertical', this.orientation === 'vertical');
    this.syncStateClasses();
  }

  override updated(): void {
    this.syncStateClasses();
    this.updateDividerAria();
  }

  private isCollapsed(): boolean {
    return this.size <= this.min;
  }

  private getCollapseIconName(): string {
    return this.orientation === 'horizontal' ? 'expand_less' : 'chevron_left';
  }

  private getExpandIconName(): string {
    return this.orientation === 'horizontal' ? 'expand_more' : 'chevron_right';
  }

  private syncStateClasses(): void {
    this.classList.toggle('resizing', this.isDragging);
    this.classList.toggle('collapsed', this.isCollapsed());
    this.classList.toggle('expanded', !this.isCollapsed());
  }

  /** Helper: compute measured max if max not set */
  private measuredMax(): number {
    if (typeof this.max === 'number') {
      return this.max;
    }
    const rect = this.getBoundingClientRect();
    return this.orientation === 'vertical'
      ? Math.floor(rect.width)
      : Math.floor(rect.height);
  }

  /** pointerdown handler: begin drag using pointer capture on the divider */
  private handlePointerDown(e: PointerEvent): void {
    const divider = e.currentTarget as HTMLElement;
    divider.setPointerCapture(e.pointerId);

    this.isDragging = true;
    this.startClient = this.clientCoord(e);
    this.startSize = this.size;
    this.syncStateClasses();

    divider.addEventListener(
      'pointermove',
      this.handlePointerMove as EventListener,
    );
    divider.addEventListener(
      'pointerup',
      this.handlePointerUp as EventListener,
    );
    divider.addEventListener(
      'pointercancel',
      this.handlePointerUp as EventListener,
    );

    this.dispatchResizeEvent();
  }

  /** pointermove called via divider because of setPointerCapture */
  private handlePointerMove = (e: PointerEvent): void => {
    if (!this.isDragging) {
      return;
    }
    const current = this.clientCoord(e);
    const delta = current - this.startClient;
    const candidate = this.startSize + delta;
    this.size = this.clampSize(Math.round(candidate));
    this.updateDividerAria();
    this.dispatchResizeEvent();
  };

  /** pointerup handler: stop dragging, cleanup listeners and pointer capture */
  private handlePointerUp = (e: PointerEvent): void => {
    const divider = e.currentTarget as HTMLElement;
    try {
      divider.releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore if release fails in weird environments
    }

    divider.removeEventListener(
      'pointermove',
      this.handlePointerMove as EventListener,
    );
    divider.removeEventListener(
      'pointerup',
      this.handlePointerUp as EventListener,
    );
    divider.removeEventListener(
      'pointercancel',
      this.handlePointerUp as EventListener,
    );

    this.isDragging = false;
    this.syncStateClasses();
    this.updateDividerAria();
    this.dispatchResizeEvent({ final: true });
  };

  /** keyboard support: arrows/pg/home/end +/- */
  private handleKeyDown(e: KeyboardEvent): void {
    const step = 8;
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        this.size = this.clampSize(this.size - step);
        this.dispatchResizeEvent();
        this.updateDividerAria();
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        this.size = this.clampSize(this.size + step);
        this.dispatchResizeEvent();
        this.updateDividerAria();
        break;
      case 'Home':
        e.preventDefault();
        this.size = this.clampSize(this.min);
        this.dispatchToggleEvent();
        this.updateDividerAria();
        break;
      case 'End':
        e.preventDefault();
        this.size = this.clampSize(this.measuredMax());
        this.dispatchToggleEvent();
        this.updateDividerAria();
        break;
      case 'PageDown':
        e.preventDefault();
        this.size = this.clampSize(this.size + step * 4);
        this.dispatchResizeEvent();
        this.updateDividerAria();
        break;
      case 'PageUp':
        e.preventDefault();
        this.size = this.clampSize(this.size - step * 4);
        this.dispatchResizeEvent();
        this.updateDividerAria();
        break;
      default:
        break;
    }
  }

  /** double click resets to default size */
  private handleDividerDoubleClick(e: MouseEvent): void {
    e.stopPropagation();
    this.size = this.clampSize(this.defaultSize);
    this.dispatchResizeEvent({ final: true });
    this.syncStateClasses();
    this.updateDividerAria();
  }

  // eslint-disable-next-line class-methods-use-this
  private handleToggleIconPointerDown(e: PointerEvent): void {
    e.stopPropagation();
  }

  private handleToggleIconClick(e: MouseEvent): void {
    e.stopPropagation();

    this.size = this.isCollapsed()
      ? this.clampSize(this.defaultSize)
      : this.clampSize(this.min);
    this.syncStateClasses();
    this.updateDividerAria();
    this.dispatchResizeEvent({ final: true });
    this.dispatchToggleEvent();
  }

  private dispatchToggleEvent(): void {
    const event = new CustomEvent('split-toggle', {
      detail: {
        collapsed: this.isCollapsed(),
        size: this.size,
        source: 'icon' as const,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  /** clamp using min and max measured */
  private clampSize(raw: number): number {
    const measuredMax = this.measuredMax();
    const minValue = Math.max(0, Math.min(this.min, measuredMax));
    const maxValue = Math.max(minValue, measuredMax);
    const clamped = Math.max(minValue, Math.min(raw, maxValue));
    return clamped;
  }

  private clientCoord(e: PointerEvent): number {
    return this.orientation === 'vertical' ? e.clientX : e.clientY;
  }

  private dispatchResizeEvent(opts?: { final?: boolean }): void {
    const event = new CustomEvent('split-resize', {
      detail: { size: this.size, final: Boolean(opts?.final) },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  /** keep ARIA attributes up to date */
  private updateDividerAria(): void {
    const divider = this.renderRoot.querySelector('.divider');
    if (!divider) {
      return;
    }
    divider.setAttribute('aria-valuenow', String(this.size));
    divider.setAttribute('aria-valuemax', String(this.measuredMax()));
  }

  private renderDividerIcon() {
    const collapsed = this.isCollapsed();
    const slotName = collapsed ? 'expandIcon' : 'icon';
    const fallbackIconName = collapsed
      ? this.getExpandIconName()
      : this.getCollapseIconName();
    const label = collapsed ? 'Expand pane' : 'Collapse pane';

    return html`
      <oscd-filled-tonal-icon-button
        class="divider-button"
        aria-label="${label}"
        @pointerdown=${this.handleToggleIconPointerDown}
        @click=${this.handleToggleIconClick}
      >
        <slot name="${slotName}">
          <oscd-icon class="toggle-fallback-icon"
            >${fallbackIconName}</oscd-icon
          >
        </slot>
      </oscd-filled-tonal-icon-button>
    `;
  }

  protected renderSplit(primarySlotName: string, secondarySlotName: string) {
    const basis = `${this.size}px`;
    return html`
      <div class="pane primary" style="flex-basis: ${basis};">
        <slot name="${primarySlotName}"></slot>
      </div>

      <div
        class="divider"
        role="separator"
        tabindex="0"
        aria-orientation="${this.orientation === 'vertical'
          ? 'vertical'
          : 'horizontal'}"
        aria-valuemin="${this.min}"
        aria-valuemax="${this.measuredMax()}"
        aria-valuenow="${this.size}"
        @pointerdown=${this.handlePointerDown}
        @keydown=${this.handleKeyDown}
        @dblclick=${this.handleDividerDoubleClick}
      >
        ${this.renderDividerIcon()}
      </div>

      <div class="pane secondary">
        <slot name="${secondarySlotName}"></slot>
      </div>
    `;
  }

  static override styles: CSSResultGroup = css`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      overflow: hidden;
      --_divider-visual: var(
        --oscd-split-pane-divider-visual,
        2px
      ); /* visible line */
      --_divider-hit: var(
        --oscd-split-pane-divider-hit,
        10px
      ); /* total clickable area */
      --_divider-icon-size: var(--oscd-split-pane-divider-icon-size, 24px);
      --_divider-color: var(--oscd-split-pane-divider-color, var(--oscd-base1));
      --_divider-icon-color: var(
        --oscd-split-pane-divider-icon-color,
        var(--oscd-base1)
      );
      --_divider-hover: var(
        --oscd-split-pane-divider-hover,
        var(--oscd-primary)
      );
      --_divider-icon-hover-color: var(
        --oscd-split-pane-divider-icon-hover-color,
        var(--oscd-primary)
      );
    }

    :host(.resizing) .divider::after {
      background: var(--_divider-hover);
    }

    :host(.horizontal) {
      flex-direction: column;
    }

    .pane {
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 0;
      overflow: auto;
    }

    .primary {
      flex: 0 0 auto; /* controlled via inline style flex-basis */
    }

    .secondary {
      flex: 1 1 auto;
    }

    .divider {
      position: relative;
      flex: 0 0 auto;
      background: transparent;
      user-select: none;
      -webkit-user-select: none;
      touch-action: none;
    }

    :host(.vertical) .divider {
      flex: 0 0 var(--_divider-hit);
      width: var(--_divider-hit);
      cursor: col-resize;
    }

    :host(.horizontal) .divider {
      flex: 0 0 var(--_divider-hit);
      height: var(--_divider-hit);
      cursor: row-resize;
    }

    .divider::after {
      content: '';
      position: absolute;
      background: var(--_divider-color);
      transition: background 120ms ease;
    }

    :host(.vertical) .divider::after {
      width: var(--_divider-visual);
      height: 40%;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
    }

    :host(.horizontal) .divider::after {
      height: var(--_divider-visual);
      width: 40%;
      top: 50%;
      left: 30%;
      transform: translateY(-50%);
    }

    .divider:hover::after,
    .divider:active::after {
      background: var(--_divider-hover);
    }

    :host(.vertical) .divider:hover::after {
      height: 60%;
      top: 20%;
    }

    :host(.horizontal) .divider:hover::after {
      width: 60%;
      left: 20%;
    }

    .divider-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      display: inline-flex;
      padding: 0;
      margin: 0;
      border: 0;
      background: transparent;
      cursor: pointer;
      line-height: 1;
    }

    :host(.horizontal) .divider-button {
      height: 16px;
    }

    :host(.vertical) .divider-button {
      width: 16px;
    }

    .toggle-fallback-icon {
      --md-icon-size: var(--_divider-icon-size);
      color: var(--_divider-icon-color);
      transition: color 120ms ease;
    }

    .divider-button:hover .toggle-fallback-icon,
    .divider-button:active .toggle-fallback-icon {
      color: var(--_divider-icon-hover-color);
    }

    ::slotted(*) {
      min-width: 0;
      min-height: 0;
    }
  `;
}
