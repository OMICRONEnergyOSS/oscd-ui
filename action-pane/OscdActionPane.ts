import { css, html, LitElement, nothing, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdElevation } from '../elevation/OscdElevation.js';
import { OscdIcon } from '../icon/OscdIcon.js';

function closestTo<E extends Element>(node: Node, selector: string): E | null {
  const closest =
    node.nodeType === Node.ELEMENT_NODE
      ? (<Element>node).closest<E>(selector)
      : null;

  if (closest) {
    return closest;
  }

  const root = <Document | DocumentFragment>node.getRootNode();

  if (root instanceof ShadowRoot) {
    return closestTo(root.host, selector);
  }

  return null;
}

/**
 * @tag oscd-action-pane
 * @slot action - Places element in <nav/> section.
 * @slot icon - Action Pane Icon.
 * @slot - The default slot will be rendered into the pane body in a single column.
 * @cssprop [--oscd-action-pane-container-color=var(--md-sys-color-surface, #fef7ff)] - Pane background.
 * @cssprop [--oscd-action-pane-contrasted-container-color=var(--md-sys-color-on-primary, #fff)] - Background on even nesting levels.
 * @cssprop [--oscd-action-pane-outline-color=var(--md-sys-color-primary, #6750a4)] - Pane outline.
 * @cssprop [--oscd-action-pane-secondary-outline-color=var(--md-sys-color-secondary, #625b71)] - Outline when secondary.
 * @cssprop [--oscd-action-pane-headline-color=var(--md-sys-color-on-surface, #1d1b20)] - Heading text color.
 * @cssprop [--oscd-action-pane-headline-font-family=var(--md-ref-typeface-plain, Roboto)] - Heading font.
 *
 * @summary A responsive container rendering actions in a header.
 * @tag oscd-action-pane
 */
export class OscdActionPane extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'oscd-elevation': OscdElevation,
    'oscd-icon': OscdIcon,
  };

  /** caption text, displayed in the header */
  @property({ type: String })
  label?: string;

  /** icon name, displayed unless the "icon" slot is filled */
  @property({ type: String })
  icon?: string;

  /** color header with secondary theme color while focus is within */
  @property({ type: Boolean })
  secondary = false;

  /** highlight pane with dotted outline */
  @property({ type: Boolean })
  highlighted = false;

  /** nesting level, default (closest pane ancestor's level) + 1 */
  @property({ type: Number })
  level = 1;

  private parentPane?: OscdActionPane;

  override connectedCallback(): void {
    super.connectedCallback();
    this.tabIndex = 0;
    this.parentPane =
      closestTo<OscdActionPane>(this.parentNode!, 'oscd-action-pane') ??
      undefined;
  }

  private get resolvedLevel(): number {
    const base = this.parentPane
      ? this.parentPane.resolvedLevel + 1
      : this.level;

    return Math.floor(base);
  }

  private renderHeader(): TemplateResult {
    const content = html`<span class="icon"
        ><slot name="icon"
          >${
            this.icon ? html`<oscd-icon>${this.icon}</oscd-icon>` : nothing
          }</slot
        ></span
      ><span class="label">${this.label ?? nothing}</span>
      <nav><slot name="action"></slot></nav>`;

    const headingLevel = Math.floor(Math.max(this.resolvedLevel, 1));
    // Sometimes a TemplateResult is passed in as Label, not a string. So only when it's a string show a title.
    const title = this.label ?? '';
    switch (headingLevel) {
      case 1:
        return html`<h1 title="${title}">${content}</h1>`;
      case 2:
        return html`<h2 title="${title}">${content}</h2>`;
      case 3:
        return html`<h3 title="${title}">${content}</h3>`;
      default:
        return html`<h4 title="${title}">${content}</h4>`;
    }
  }

  override render() {
    return html`<section
      class="${classMap({
        secondary: this.secondary,
        highlighted: this.highlighted,
        contrasted: this.resolvedLevel % 2 === 0,
      })}"
    >
      <oscd-elevation></oscd-elevation>
      ${this.renderHeader()}
      <div><slot></slot></div>
    </section>`;
  }

  static override styles = css`
    :host {
      outline: none;
    }

    :host(:focus-within) section {
      --md-elevation-level: 3;
      outline-width: 1px;
      transition: all 250ms linear;
    }

    section {
      position: relative;
      background-color: var(
        --oscd-action-pane-container-color,
        var(--md-sys-color-surface, #fef7ff)
      );
      transition: all 200ms linear;
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      outline-color: var(
        --oscd-action-pane-outline-color,
        var(--md-sys-color-primary, #6750a4)
      );
    }

    section.secondary {
      outline-color: var(
        --oscd-action-pane-secondary-outline-color,
        var(--md-sys-color-secondary, #625b71)
      );
    }

    section > div {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 8px 12px 16px;
      clear: right;
    }

    .highlighted {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) .highlighted {
      outline-style: solid;
    }

    .contrasted {
      background-color: var(
        --oscd-action-pane-contrasted-container-color,
        var(--md-sys-color-on-primary, #fff)
      );
    }

    h1,
    h2,
    h3,
    h4 {
      color: var(
        --oscd-action-pane-headline-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      font-family: var(
        --oscd-action-pane-headline-font-family,
        var(--md-ref-typeface-plain, Roboto)
      );
      font-weight: 300;
      overflow: clip visible;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 52px;
      padding-left: 0.3em;
      display: flex;
      align-items: center;
      column-gap: 8px;
    }

    .icon {
      display: flex;
      align-items: center;
      flex: none;
    }

    .label {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    nav {
      flex: none;
      margin-left: auto;
      margin-right: 4px;
    }

    ::slotted([slot='icon']) {
      display: flex;
      align-items: center;
      line-height: var(--md-icon-size, 24px);
    }
  `;
}
