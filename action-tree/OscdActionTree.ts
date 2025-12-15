import { css, html, LitElement, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdIconButton } from '../iconbutton/OscdIconButton.js';

type Value = {
  edit?: () => void;
  val: string | number | boolean | null;
};

type Leaf = Value[];

// Compute the maximum number of values found in any leaf array
function getMaxLeafCount(node: TreeNode | null): number {
  let max = 0;
  const walk = (n: TreeNode | null) => {
    if (!n) {
      return;
    }
    if (n.leaf && n.leaf.length) {
      max = Math.max(max, n.leaf.length);
    }
    n.children?.forEach(walk);
  };
  walk(node);
  return max;
}

export type TreeNode = {
  name: string;
  icon?: SVGElement | string; // web-standard: SVGElement or Material Symbols name string
  info?: string;
  leaf?: Leaf;
  children?: TreeNode[];
};

/**
 * @tag oscd-action-tree
 *
 * A tree component to display hierarchical data with action capabilities.
 *
 * ## Details
 *
 * - Displays data in a tree structure with expandable/collapsible nodes.
 * - Each node can have an optional icon, info text, leaf values, and child nodes.
 * - Leaf values can have associated edit actions.
 * - Automatically folds new nodes when data is updated.
 */
export class OscdActionTree extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'oscd-icon-button': OscdIconButton,
  };

  @property({ type: Object }) data: TreeNode | null = null;

  @state()
  private folded: Set<string> = new Set();

  // Track known paths to detect when new nodes are added
  @state()
  private knownPaths: Set<string> = new Set();

  // Track how many leaf columns to render
  @state()
  private maxLeafCols = 0;

  // eslint-disable-next-line class-methods-use-this
  private pathKey(path: (string | number)[]) {
    return path.join('.') || 'root';
  }

  protected override willUpdate(_changed: Map<string, unknown>) {
    if (this.data) {
      // Collect all current paths in the tree
      const allCurrentPaths = new Set<string>();
      const collectPaths = (
        node: TreeNode | null,
        path: (string | number)[] = [],
      ) => {
        if (!node) {
          return;
        }
        if (path.length > 0 && node.children !== undefined) {
          const pathKey = this.pathKey(path);
          allCurrentPaths.add(pathKey);
        }
        node.children?.forEach((child, i) =>
          collectPaths(child, [...path, 'children', i]),
        );
      };
      collectPaths(this.data, []);

      // Find new paths that weren't known before
      const updatedFolded = new Set(this.folded);

      allCurrentPaths.forEach(pathKey => {
        if (!this.knownPaths.has(pathKey)) {
          // This is a new node, fold it
          updatedFolded.add(pathKey);
        }
      });

      // Remove fold state for paths that no longer exist
      const cleanedFolded = new Set<string>();
      updatedFolded.forEach(path => {
        if (allCurrentPaths.has(path)) {
          cleanedFolded.add(path);
        }
      });

      // Update our state
      this.folded = cleanedFolded;
      this.knownPaths = allCurrentPaths;

      // compute max number of leaf values across the tree
      this.maxLeafCols = getMaxLeafCount(this.data);
    }
  }

  private toggleFold(path: (string | number)[], node?: TreeNode) {
    const k = this.pathKey(path);
    const s = new Set(this.folded);
    const isUnfolding = s.has(k); // currently folded, will be unfolded
    if (s.has(k)) {
      s.delete(k);
    } else {
      s.add(k);
    }
    this.folded = s;

    // Trigger re-render and height update
    this.requestUpdate();

    // Fire 'unfold' only when leaf is not defined and children are defined but an empty array
    if (
      isUnfolding &&
      node &&
      node.leaf === undefined &&
      Array.isArray(node.children) &&
      node.children.length === 0
    ) {
      this.dispatchEvent(
        new CustomEvent('unfold', {
          detail: node,
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private renderLeadingIcon(node: TreeNode): TemplateResult {
    if (node.icon instanceof SVGElement) {
      return html`<span class="leading-icon">${node.icon}</span>`;
    }
    if (typeof node.icon === 'string') {
      return html`<span class="leading-icon ms">${node.icon}</span>`;
    }
    return html``; // no icon
  }

  private renderRows(
    node: TreeNode | null,
    path: (string | number)[] = [],
    level = 0,
    parentFolded = false,
  ): ReturnType<typeof html>[] {
    if (!node) {
      return [];
    }
    const rows: ReturnType<typeof html>[] = [];

    // Show a fold toggle if the node declares a children property (even if empty)
    const hasToggle = node.children !== undefined;
    // Only render children rows when there are actual children
    const hasChildren = !!(node.children && node.children.length > 0);
    const key = this.pathKey(path);
    const isFolded = this.folded.has(key);

    const leaf = node.leaf ?? [];

    rows.push(html`
      <tr class="tree-row ${parentFolded ? 'child-hidden' : ''}">
        <td class="guideline" style="padding-left:${level * 1.5}em;">
          <div class="row-inner">
            <span class="row-left">
              ${hasToggle
                ? html`
                    <span
                      class="tree-fold ${isFolded ? 'folded' : ''}"
                      @click=${() => this.toggleFold(path, node)}
                      @keydown=${(e: KeyboardEvent) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          this.toggleFold(path, node);
                        }
                      }}
                      tabindex="0"
                      role="button"
                      aria-label="Toggle fold"
                    >
                      ⌃
                    </span>
                  `
                : html`<span class="tree-fold"></span>`}
              ${this.renderLeadingIcon(node)}
              <span class="tree-key">${node.name}</span>
            </span>
          </div>
        </td>
        ${Array.from({ length: this.maxLeafCols }, (_, i) => {
          const cell = leaf[i];
          return html`<td class="val-cell">
            ${cell
              ? html`
                  <div class="val-inner">
                    ${cell.edit
                      ? html`
                          <icon-button
                            aria-label="Edit value ${i + 1}"
                            @click=${cell.edit}
                          >
                            <span class="ms">edit</span>
                          </icon-button>
                        `
                      : ''}
                    <span class="val-text">${cell.val ?? ''}</span>
                  </div>
                `
              : ''}
          </td>`;
        })}
      </tr>
    `);

    // Always render children, but mark them as hidden if parent is folded
    if (hasChildren) {
      node.children!.forEach((child, i) => {
        const childRows = this.renderRows(
          child,
          [...path, 'children', i],
          level + 1,
          parentFolded || isFolded,
        );
        rows.push(...childRows);
      });
    }

    return rows;
  }

  override render() {
    if (!this.data) {
      return html`<div class="no-data">No data provided</div>`;
    }
    return html`
      <table class="tree-grid">
        <tbody>
          ${this.renderRows(this.data, [], 0)}
        </tbody>
      </table>
    `;
  }

  static override styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0');
    :host {
      font-family:
        'Roboto',
        system-ui,
        -apple-system,
        'Segoe UI',
        Arial,
        sans-serif;
      font-weight: 400;
      color: var(--action-tree-font-color, #000000);
      --md-icon-button-icon-size: 20px;
      --md-sys-color-on-surface-variant: var(--action-tree-font-color, #000000);
    }
    .tree-grid {
      width: auto; /* don't stretch to 100% */
      border-collapse: collapse;
      color: inherit;
    }
    .tree-grid th,
    .tree-grid td {
      border-bottom: 1px solid var(--action-tree-horizontal-grid-color, #eee);
      padding: 0.3em 0.5em;
      vertical-align: middle; /* center content vertically */
      font-weight: 400;
      color: inherit;
    }
    /* ensure some room between text and right-side icons */
    .tree-grid td:first-child,
    .tree-grid th:first-child {
      min-width: 360px;
      padding-right: 12px;
      border-right: 1px solid var(--action-tree-vertical-grid-color, #ddd); /* vertical separator */
      text-align: left;
    }
    .val-col,
    .val-cell {
      text-align: right;
      white-space: nowrap;
      color: inherit;
    }
    /* vertical separator after each value column */
    .val-cell {
      border-right: 1px solid var(--action-tree-vertical-grid-color, #ddd);
    }
    /* Remove border from last column */
    .val-cell:last-child {
      border-right: none;
    }
    /* Remove border from last row */
    .tree-row:last-child td {
      border-bottom: none;
    }
    /* layout inside value cell: icon on left, value aligned right */
    .val-inner {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .val-text {
      margin-left: auto;
      text-align: right;
      display: inline-block;
      min-width: 0;
      color: inherit;
    }
    /* remove extra spacing on icon-button in value cells */
    .val-cell icon-button {
      margin-right: 0;
      width: 24px;
      height: 24px;
    }
    /* row height for easier icon buttons */
    .tree-row {
      min-height: 34px;
      transition: all 400ms ease-in-out;
      max-height: 50px; /* smaller max-height for better animation */
      opacity: 1;
      overflow: hidden;
    }
    .tree-row.child-hidden {
      max-height: 0px;
      min-height: 0px;
      opacity: 0;
      padding: 0;
      margin: 0;
      border: none;
    }
    /* Hide content inside cells when row is hidden */
    .tree-row.child-hidden td {
      padding: 0;
      border: none;
      height: 0;
      line-height: 0;
    }
    .tree-row.child-hidden .row-inner,
    .tree-row.child-hidden .val-inner {
      display: none;
    }

    /* Uniform background for all rows */
    .tree-row:not(.child-hidden) {
      background-color: var(--action-tree-background-color, transparent);
    }

    /* Smooth transition for fold icon */
    .tree-fold {
      transition: transform var(--action-tree-fold-duration, 200ms) ease-in-out;
      transform: rotate(180deg); /* Default: point down when expanded */
    }
    .tree-fold.folded {
      transform: rotate(90deg); /* Point right when folded */
    }

    .row-inner {
      display: flex;
      align-items: center;
      gap: 0.4em;
      color: inherit;
    }
    .row-left {
      display: inline-flex;
      align-items: center;
      gap: 0.3em;
      min-width: 0;
      color: inherit;
    }
    .row-right {
      margin-left: auto; /* push actions to the right side of the first column */
      display: inline-flex;
      gap: 0.6em; /* a bit more space between action icons */
      color: inherit;
      font-weight: 400;
    }
    .tree-key {
      font-weight: 400;
      color: inherit;
      user-select: none;
      white-space: pre;
    }
    .tree-fold {
      cursor: pointer;
      margin-right: 0.1em;
      color: inherit;
      font-weight: 400;
      user-select: none;
      display: inline-block;
      width: 0.8em;
      text-align: center;
      font-size: 12px;
    }
    /* Material Symbols icon style */
    .ms {
      font-family: 'Material Symbols Outlined';
      font-weight: 400;
      font-style: normal;
      font-size: 18px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
      font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 20;
      color: inherit;
    }
    .leading-icon {
      color: inherit;
      width: 18px;
      height: 18px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .icon-btn {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border: 1px solid #999;
      border-radius: 50%;
      background: #fff;
      font-size: 12px;
      line-height: 1;
      padding: 0;
      font-weight: 400;
    }
    .guideline {
      position: relative;
    }
    .info-row td {
      background: transparent; /* no highlight */
      padding-top: 4px;
      padding-bottom: 6px;
    }
    .info-box {
      color: inherit;
      font-size: 0.9em;
      white-space: pre-wrap;
      font-weight: 300;
      margin-top: 4px;
    }
    /* explicit styling for no data message */
    .no-data {
      font-family:
        'Roboto',
        system-ui,
        -apple-system,
        'Segoe UI',
        Arial,
        sans-serif;
      font-weight: 400;
      color: inherit;
      padding: 8px 12px;
    }
  `;
}
