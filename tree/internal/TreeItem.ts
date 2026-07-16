import { css, html, LitElement, type TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';

/**
 * Internal base class for `oscd-tree-item`.
 *
 * ## Leading icon alignment
 *
 * A leading icon (the `start` slot) is rendered inside a fixed-width leading
 * column whose size defaults to the tree's `--oscd-tree-indent-step`. This is
 * deliberate: it makes a leading icon occupy **exactly one indent step**, so an
 * icon-less descendant — which the tree indents by one step per level — lands
 * its text precisely under its iconed ancestor's text, at any depth, with no
 * per-row tuning. Rows without a leading icon collapse the column to zero and
 * rely on the tree's indentation instead.
 *
 * Because the leading column and the indent step are fused, a single knob
 * (`--oscd-tree-indent-step`) controls both per-level indentation and the
 * leading icon column, and the two can never drift out of alignment. Set it
 * large enough to comfortably hold the icon (e.g. `40px`); the visual gap
 * between the icon and the text is the leftover space, `step - icon size`.
 *
 * @slot start - Optional leading content such as an icon.
 * @slot headline - Primary row text.
 * @slot supporting-text - Secondary row text.
 * @slot end - Optional trailing content such as status or actions.
 */
export class TreeItem extends LitElement {
  /**
   * Whether the row content should render selected styling.
   */
  @property({ type: Boolean, reflect: true })
  selected = false;

  /**
   * Whether the row content represents the active tree row.
   */
  @property({ type: Boolean, reflect: true })
  active = false;

  /**
   * Whether the row content should render disabled styling.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Whether the `start` slot currently holds a leading icon. Drives the
   * fixed-width leading column so icon-less rows collapse it to zero.
   */
  @state()
  private hasLeadingContent = false;

  private handleStartSlotChange(event: Event): void {
    this.hasLeadingContent =
      (event.target as HTMLSlotElement).assignedElements({ flatten: true })
        .length > 0;
  }

  override render(): TemplateResult {
    return html`<div part="content" class="content">
      <span
        part="leading"
        class="leading ${this.hasLeadingContent ? 'has-leading' : ''}"
      >
        <slot name="start" @slotchange=${this.handleStartSlotChange}></slot>
      </span>
      <span part="text" class="text">
        <span part="headline" class="headline"
          ><slot name="headline"></slot
        ></span>
        <span part="supporting-text" class="supporting-text"
          ><slot name="supporting-text"></slot
        ></span>
      </span>
      <slot name="end"></slot>
    </div>`;
  }

  static override styles = css`
    :host {
      box-sizing: border-box;
      display: block;
      min-width: 0;
      color: inherit;
      font-family: var(
        --oscd-tree-item-font-family,
        var(
          --md-list-item-label-text-font,
          var(
            --md-sys-typescale-body-large-font,
            var(--oscd-text-font, sans-serif)
          )
        )
      );
      font-size: var(
        --oscd-tree-item-font-size,
        var(--md-list-item-label-text-size, 1rem)
      );
    }

    :host([disabled]) {
      opacity: var(
        --oscd-tree-item-disabled-opacity,
        var(--md-list-item-disabled-opacity, 0.3)
      );
    }

    :host([selected]) .headline {
      color: var(
        --oscd-tree-item-selected-headline-color,
        var(
          --md-list-item-label-text-color,
          var(--md-sys-color-on-surface, #1d1b20)
        )
      );
      font-weight: var(
        --oscd-tree-item-selected-headline-weight,
        var(--md-sys-typescale-body-large-weight-prominent, 500)
      );
    }

    .content {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-width: 0;
      min-height: var(
        --oscd-tree-item-min-height,
        var(--md-list-item-one-line-container-height, 56px)
      );
      width: 100%;
    }

    /*
     * Leading icon column. A leading icon occupies exactly one indent step so
     * that icon-less descendants (indented one step per level by the tree)
     * align their text under an iconed ancestor's text at any depth. Rows
     * without a leading icon collapse this column to zero and rely on the
     * tree's indentation instead. Override --oscd-tree-item-leading-size only
     * if you must decouple it from --oscd-tree-indent-step; keeping them equal
     * is what preserves the alignment.
     */
    .leading {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 0 0 auto;
      inline-size: 0;
    }

    .leading.has-leading {
      inline-size: var(
        --oscd-tree-item-leading-size,
        var(--oscd-tree-indent-step, 24px)
      );
    }

    .text {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      justify-content: center;
      min-width: 0;
    }

    .headline,
    .supporting-text {
      display: block;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .headline {
      color: var(
        --oscd-tree-item-headline-color,
        var(--md-list-item-label-text-color, currentColor)
      );
      font-family: var(
        --oscd-tree-item-headline-font,
        var(--md-list-item-label-text-font, inherit)
      );
      font-size: var(
        --oscd-tree-item-headline-size,
        var(--md-list-item-label-text-size, 1rem)
      );
      font-weight: var(
        --oscd-tree-item-headline-weight,
        var(--md-list-item-label-text-weight, 400)
      );
      line-height: var(
        --oscd-tree-item-headline-line-height,
        var(--md-list-item-label-text-line-height, 1.5rem)
      );
    }

    .supporting-text {
      color: var(
        --oscd-tree-item-supporting-text-color,
        var(
          --md-list-item-supporting-text-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        )
      );
      font-family: var(
        --oscd-tree-item-supporting-text-font,
        var(--md-list-item-supporting-text-font, inherit)
      );
      font-size: var(
        --oscd-tree-item-supporting-text-size,
        var(--md-list-item-supporting-text-size, 0.875rem)
      );
      font-weight: var(
        --oscd-tree-item-supporting-text-weight,
        var(--md-list-item-supporting-text-weight, 400)
      );
      line-height: var(
        --oscd-tree-item-supporting-text-line-height,
        var(--md-list-item-supporting-text-line-height, 1.25rem)
      );
    }

    ::slotted([slot='start']),
    ::slotted([slot='end']) {
      flex: 0 0 auto;
    }

    ::slotted([slot='start']) {
      color: var(
        --oscd-tree-item-leading-icon-color,
        var(
          --md-list-item-leading-icon-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        )
      );
    }

    ::slotted([slot='end']) {
      margin-inline-start: var(--oscd-tree-item-gap, 16px);
      color: var(
        --oscd-tree-item-trailing-icon-color,
        var(
          --md-list-item-trailing-icon-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        )
      );
    }
  `;
}
