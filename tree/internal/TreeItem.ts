import { css, html, LitElement, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Internal base class for `oscd-tree-item`.
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

  // eslint-disable-next-line class-methods-use-this
  override render(): TemplateResult {
    return html`<div part="content" class="content">
      <slot name="start"></slot>
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
      gap: var(--oscd-tree-item-gap, 16px);
      min-width: 0;
      min-height: var(
        --oscd-tree-item-min-height,
        var(--md-list-item-one-line-container-height, 56px)
      );
      width: 100%;
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
