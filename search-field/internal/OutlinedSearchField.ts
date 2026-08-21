import { OutlinedTextField } from '@omicronenergy/oscd-material-web-base/textfield/internal/outlined-text-field.js';
import {
  CSSResultOrNative,
  css,
  html,
  nothing,
  PropertyValues,
  TemplateResult,
} from 'lit';
import { property } from 'lit/decorators.js';

import { styles as outlinedStyles } from '@omicronenergy/oscd-material-web-base/textfield/internal/outlined-styles.js';
import { styles as sharedStyles } from '@omicronenergy/oscd-material-web-base/textfield/internal/shared-styles.js';

function renderDefaultLeadingIcon(): TemplateResult {
  return html`<oscd-icon slot="leading-icon">search</oscd-icon>`;
}

export class OutlinedSearchField extends OutlinedTextField {
  @property({ type: String })
  clearLabel = 'Clear search';

  constructor() {
    super();

    this.addEventListener('focus', this.handleFocus.bind(this));
    this.addEventListener('blur', this.handleBlur.bind(this));
  }

  private handleFocus() {
    this.placeholder = '';
  }

  private handleBlur() {
    this.placeholder = 'Search';
  }

  override willUpdate(changedProperties: PropertyValues<this>): void {
    super.willUpdate(changedProperties);

    // The search icon is always present, either as consumer content or as the
    // default rendered by renderLeadingIcon().
    this.hasLeadingIcon = true;
    this.hasTrailingIcon =
      this.hasCustomSlot('trailing-icon') || Boolean(this.value);
  }

  private clear(): void {
    this.value = '';
    this.dispatchEvent(
      new InputEvent('input', { bubbles: true, composed: true }),
    );
    this.focus();
  }

  private renderDefaultClearFieldIconButton() {
    if (!this.value) {
      return html``;
    }

    return html`<oscd-icon-button
      class="default-clear-button"
      slot="trailing-icon"
      aria-label=${this.clearLabel}
      @click=${() => this.clear()}
      ><oscd-icon>close</oscd-icon></oscd-icon-button
    >`;
  }

  protected override renderTrailingIcon() {
    return html`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon"></slot>
        ${this.hasCustomSlot('trailing-icon')
          ? nothing
          : this.renderDefaultClearFieldIconButton()}
      </span>
    `;
  }

  protected override renderLeadingIcon() {
    return html`
      <span class="icon leading" slot="start">
        <slot name="leading-icon"></slot>
        ${this.hasCustomSlot('leading-icon')
          ? nothing
          : renderDefaultLeadingIcon()}
      </span>
    `;
  }

  private hasCustomSlot(slotName: 'leading-icon' | 'trailing-icon'): boolean {
    return this.querySelector(`[slot="${slotName}"]`) !== null;
  }

  static override styles: CSSResultOrNative[] = [
    sharedStyles,
    outlinedStyles,
    css`
      :host {
        --md-outlined-text-field-input-text-placeholder-color: var(
          --oscd-search-field-placeholder-color,
          color-mix(
            in srgb,
            var(
                --md-outlined-text-field-input-text-color,
                var(--md-sys-color-on-surface, #1d1b20)
              )
              50%,
            transparent
          )
        );
      }
    `,
  ];
}
