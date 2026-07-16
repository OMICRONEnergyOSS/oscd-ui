import {
  css,
  html,
  LitElement,
  nothing,
  type PropertyValues,
  type TemplateResult,
} from 'lit';
import { property, state } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { OscdCheckbox } from '../../checkbox/OscdCheckbox.js';
import { OscdFocusRing } from '../../focus/OscdFocusRing.js';
import { OscdIcon } from '../../icon/OscdIcon.js';
import { OscdRipple } from '../../ripple/OscdRipple.js';
import { OscdTreeItem } from '../OscdTreeItem.js';

/**
 * Selection behavior for `oscd-tree`.
 */
export type TreeSelectionMode = 'none' | 'single' | 'multiple';

/**
 * Placement of the expand/collapse toggle within a tree row.
 *
 * - `'leading'` renders the toggle before the row content (default).
 * - `'trailing'` renders the toggle after the row content, right-aligned so
 *   the toggles line up on the trailing edge regardless of nesting depth.
 */
export type TreeTogglePosition = 'leading' | 'trailing';

/**
 * Loaded state of a tree node's children.
 */
export type TreeChildrenState = 'unknown' | 'leaf' | 'branch';

/**
 * Minimal data contract for nodes rendered by `oscd-tree`.
 *
 * `children === undefined` means that children are unknown or not loaded yet.
 * `children === []` means that the node is known to be a leaf.
 * A non-empty `children` array means that the node is a branch.
 */
export type TreeNode = {
  /**
   * Stable node identifier. If omitted, `oscd-tree` falls back to
   * `getNodeId` and then to the node's index path.
   */
  id?: string;

  /**
   * Child nodes when known.
   */
  children?: TreeNode[];
};

/**
 * Context passed to `renderItem` for each visible tree row.
 */
export type TreeRenderContext<T extends TreeNode = TreeNode> = {
  /** The original caller-provided node. */
  node: T;

  /** Resolved node identifier used by selection, expansion, and events. */
  id: string;

  /** One-based nesting level computed by the tree. */
  level: number;

  /** Whether this node is currently expanded. */
  expanded: boolean;

  /** Whether this node is currently selected. */
  selected: boolean;

  /** Whether this row is the active keyboard row. */
  active: boolean;

  /** Current child loading/branch state. */
  childrenState: TreeChildrenState;

  /** Whether this row can be selected. */
  selectable: boolean;

  /** Whether this row is disabled. */
  disabled: boolean;
};

/**
 * Detail for node-level tree events.
 */
export type TreeNodeEventDetail<T extends TreeNode = TreeNode> = {
  /** The original caller-provided node. */
  node: T;

  /** Resolved node identifier. */
  id: string;
};

/**
 * Detail for `selected-ids-changed`.
 */
export type TreeSelectionChangeEventDetail<T extends TreeNode = TreeNode> = {
  /** Current selected node identifiers. */
  selectedIds: string[];

  /** Previous selected node identifiers. */
  previousSelectedIds: string[];

  /** Node that triggered the selection change. */
  targetNode: T;
};

type VisibleTreeNode<T extends TreeNode = TreeNode> = {
  node: T;
  id: string;
  htmlId: string;
  level: number;
  parentIds: string[];
  ariaPositionInSet: number;
  ariaSetSize: number;
};

const fallbackRenderItem = <T extends TreeNode>({
  node,
  id,
  selected,
  active,
  disabled,
}: TreeRenderContext<T>): TemplateResult =>
  html`<oscd-tree-item
    ?selected=${selected}
    ?active=${active}
    ?disabled=${disabled}
  >
    <span slot="headline">${'label' in node ? String(node.label) : id}</span>
  </oscd-tree-item>`;

const idSeparator = '/';

function childState(node: TreeNode): TreeChildrenState {
  if (node.children === undefined) {
    return 'unknown';
  }

  return node.children.length > 0 ? 'branch' : 'leaf';
}

function nextIndex(current: number, max: number): number {
  if (max < 0) {
    return -1;
  }

  return Math.min(max, Math.max(0, current));
}

/**
 * Internal base class for `oscd-tree`.
 */
export class Tree<T extends TreeNode = TreeNode> extends ScopedElementsMixin(
  LitElement,
) {
  static scopedElements = {
    'oscd-checkbox': OscdCheckbox,
    'oscd-focus-ring': OscdFocusRing,
    'oscd-icon': OscdIcon,
    'oscd-ripple': OscdRipple,
    'oscd-tree-item': OscdTreeItem,
  };

  /**
   * Structured tree data to render.
   */
  @property({ attribute: false })
  data: T[] = [];

  /**
   * Selected node identifiers.
   *
   * This state is controlled by the caller and may be persisted outside the
   * tree, but it must be scoped to the data set/context that produced the IDs.
   * Reset or re-key persisted selected IDs when `data` changes to a different
   * logical tree, otherwise unrelated nodes with matching IDs may appear
   * selected.
   */
  @property({ attribute: false })
  selectedIds: string[] = [];

  /**
   * Expanded node identifiers.
   *
   * This state is controlled by the caller and may be persisted outside the
   * tree, but it must be scoped to the data set/context that produced the IDs.
   * Reset or re-key persisted expanded IDs when `data` changes to a different
   * logical tree, otherwise unrelated nodes with matching IDs may appear
   * expanded.
   */
  @property({ attribute: false })
  expandedIds: string[] = [];

  /**
   * Renders caller-provided content for a tree row.
   *
   * The tree owns the row frame, indentation, toggle affordance, selection
   * affordance, keyboard handling, and ARIA attributes. This callback renders
   * the content inside that frame.
   */
  @property({ attribute: false })
  renderItem?: (context: TreeRenderContext<T>) => TemplateResult;

  /**
   * Renders an interactive accessory into the toggle column of a **leaf** row.
   *
   * Leaf rows have no expand/collapse toggle, so this callback can supply
   * trailing content (for example a pin/unpin button) that lines up exactly
   * with the chevrons of expandable rows, following `togglePosition`.
   *
   * Return `nothing` (or a falsy value) to leave the leaf's toggle column
   * empty. The tree isolates pointer and `Enter`/`Space` interaction on the
   * accessory so activating it does not select or toggle the row; arrow-key
   * navigation still works. Any returned interactive element (such as a
   * `<button>`) is keyboard-focusable and therefore adds a tab stop per row.
   * Provide an accessible label and `aria-pressed` for toggle semantics.
   */
  @property({ attribute: false })
  renderLeafAccessory?: (context: TreeRenderContext<T>) => unknown;

  /**
   * Resolves a stable node identifier when `node.id` is not provided.
   *
   * If neither `node.id` nor this callback is available, the tree falls back to
   * an index-path ID. Index-path IDs are convenient for static examples but are
   * not stable when rows are inserted, removed, sorted, filtered, or lazily
   * loaded, and should not be persisted.
   */
  @property({ attribute: false })
  getNodeId?: (node: T, indexPath: number[]) => string;

  /**
   * Resolves the accessible label for a node row.
   *
   * If omitted, the tree uses `node.label` when present, then the resolved node
   * ID. This label is applied to the row frame that owns `role="treeitem"`.
   */
  @property({ attribute: false })
  getNodeLabel?: (node: T, id: string) => string;

  /**
   * Returns whether a node can be selected.
   */
  @property({ attribute: false })
  isSelectable?: (node: T) => boolean;

  /**
   * Returns whether a node is disabled.
   */
  @property({ attribute: false })
  isDisabled?: (node: T) => boolean;

  /**
   * Selection behavior.
   */
  @property()
  selectionMode: TreeSelectionMode = 'none';

  /**
   * Icon shown on the expand/collapse toggle when a branch is collapsed.
   *
   * Any icon name understood by `oscd-icon` (a Material Symbol name or a
   * registered SCL icon) may be used. Defaults to `chevron_right`.
   */
  @property({ attribute: 'collapse-icon' })
  collapseIcon = 'chevron_right';

  /**
   * Icon shown on the expand/collapse toggle when a branch is expanded.
   *
   * Any icon name understood by `oscd-icon` (a Material Symbol name or a
   * registered SCL icon) may be used. Defaults to `expand_more`.
   */
  @property({ attribute: 'expand-icon' })
  expandIcon = 'expand_more';

  /**
   * Placement of the expand/collapse toggle within each row.
   *
   * `'leading'` (default) renders the toggle before the row content.
   * `'trailing'` renders it after the content, right-aligned so the toggles
   * line up on the trailing edge regardless of nesting depth. Keyboard
   * expansion (`ArrowRight`/`ArrowLeft`) is unaffected by this option.
   */
  @property({ reflect: true, attribute: 'toggle-position' })
  togglePosition: TreeTogglePosition = 'leading';

  @state()
  private activeId?: string;

  protected override willUpdate(changedProperties: PropertyValues<this>): void {
    if (
      changedProperties.has('data') ||
      changedProperties.has('expandedIds') ||
      changedProperties.has('selectedIds')
    ) {
      const rows = this.visibleRows();
      if (!rows.length) {
        this.activeId = undefined;
        return;
      }

      if (!this.activeId || !rows.some(row => row.id === this.activeId)) {
        this.activeId = rows[0].id;
      }
    }
  }

  /**
   * Expands a node by ID.
   */
  public expand(id: string): void {
    if (!this.expandedIds.includes(id)) {
      this.setExpandedIds([...this.expandedIds, id]);
    }
  }

  /**
   * Collapses a node by ID.
   */
  public collapse(id: string): void {
    if (this.expandedIds.includes(id)) {
      this.setExpandedIds(
        this.expandedIds.filter(expandedId => expandedId !== id),
      );
    }
  }

  /**
   * Toggles a node expansion state by ID.
   */
  public toggle(id: string): void {
    const row = this.visibleRows().find(candidate => candidate.id === id);
    if (!row) {
      return;
    }

    this.toggleExpansion(row);
  }

  private rowId(node: T, indexPath: number[]): string {
    return (
      node.id ??
      this.getNodeId?.(node, indexPath) ??
      indexPath.join(idSeparator)
    );
  }

  private visibleRows(): VisibleTreeNode<T>[] {
    const expandedIds = new Set(this.expandedIds);
    const rows: VisibleTreeNode<T>[] = [];

    const walk = (
      nodes: T[] | undefined,
      level: number,
      parentIds: string[],
      indexPath: number[],
    ) => {
      if (!nodes) {
        return;
      }

      const ariaSetSize = nodes.length;
      nodes.forEach((node, index) => {
        const childIndexPath = [...indexPath, index];
        const id = this.rowId(node, childIndexPath);
        rows.push({
          node,
          id,
          htmlId: `tree-row-${rows.length}`,
          level,
          parentIds,
          ariaPositionInSet: index + 1,
          ariaSetSize,
        });

        if (expandedIds.has(id) && node.children) {
          walk(
            node.children as T[],
            level + 1,
            [...parentIds, id],
            childIndexPath,
          );
        }
      });
    };

    walk(this.data, 1, [], []);

    return rows;
  }

  private renderContext(row: VisibleTreeNode<T>): TreeRenderContext<T> {
    const selected = this.selectedIds.includes(row.id);

    return {
      node: row.node,
      id: row.id,
      level: row.level,
      expanded: this.expandedIds.includes(row.id),
      selected,
      active: this.activeId === row.id,
      childrenState: childState(row.node),
      selectable: this.selectionMode !== 'none' && this.isRowSelectable(row),
      disabled: this.isRowDisabled(row),
    };
  }

  private accessibleLabel(row: VisibleTreeNode<T>): string {
    if (this.getNodeLabel) {
      return this.getNodeLabel(row.node, row.id);
    }

    if ('label' in row.node && row.node.label !== undefined) {
      return String(row.node.label);
    }

    return row.id;
  }

  private isRowSelectable(row: VisibleTreeNode<T>): boolean {
    return this.isSelectable ? this.isSelectable(row.node) : true;
  }

  private isRowDisabled(row: VisibleTreeNode<T>): boolean {
    return this.isDisabled ? this.isDisabled(row.node) : false;
  }

  private setExpandedIds(expandedIds: string[]): void {
    this.expandedIds = expandedIds;
    this.dispatchEvent(
      new CustomEvent('expanded-ids-changed', {
        detail: { expandedIds },
      }),
    );
  }

  private setSelectedIds(selectedIds: string[], targetNode: T): void {
    const previousSelectedIds = this.selectedIds;
    this.selectedIds = selectedIds;
    this.dispatchEvent(
      new CustomEvent<TreeSelectionChangeEventDetail<T>>(
        'selected-ids-changed',
        {
          detail: {
            selectedIds,
            previousSelectedIds,
            targetNode,
          },
        },
      ),
    );
  }

  private fireNodeEvent(
    name: string,
    row: VisibleTreeNode<T>,
    options?: { cancelable?: boolean },
  ): boolean {
    const event = new CustomEvent<TreeNodeEventDetail<T>>(name, {
      bubbles: true,
      cancelable: options?.cancelable ?? false,
      detail: {
        node: row.node,
        id: row.id,
      },
    });

    return this.dispatchEvent(event);
  }

  private toggleExpansion(row: VisibleTreeNode<T>): void {
    if (this.isRowDisabled(row) || childState(row.node) === 'leaf') {
      return;
    }

    const expanded = this.expandedIds.includes(row.id);
    if (expanded) {
      this.setExpandedIds(
        this.expandedIds.filter(expandedId => expandedId !== row.id),
      );
      this.fireNodeEvent('node-collapse', row);
      this.fireNodeEvent('node-toggle', row);
      return;
    }

    if (!this.fireNodeEvent('node-expand', row, { cancelable: true })) {
      return;
    }

    this.setExpandedIds([...this.expandedIds, row.id]);
    this.fireNodeEvent('node-toggle', row);
  }

  private toggleSelection(row: VisibleTreeNode<T>): void {
    if (
      this.selectionMode === 'none' ||
      this.isRowDisabled(row) ||
      !this.isRowSelectable(row)
    ) {
      return;
    }

    if (this.selectionMode === 'single') {
      this.setSelectedIds([row.id], row.node);
      return;
    }

    const selected = this.selectedIds.includes(row.id);
    this.setSelectedIds(
      selected
        ? this.selectedIds.filter(selectedId => selectedId !== row.id)
        : [...this.selectedIds, row.id],
      row.node,
    );
  }

  private activateRow(row: VisibleTreeNode<T>): void {
    this.activeId = row.id;
    this.fireNodeEvent('node-click', row);
  }

  private handleRowClick(row: VisibleTreeNode<T>, event: MouseEvent): void {
    if (this.isRowDisabled(row)) {
      event.preventDefault();
      return;
    }

    this.activateRow(row);

    if (childState(row.node) !== 'leaf') {
      this.toggleExpansion(row);
      return;
    }

    this.toggleSelection(row);
  }

  private handleToggleClick(row: VisibleTreeNode<T>, event: MouseEvent): void {
    event.stopPropagation();
    this.activeId = row.id;
    this.toggleExpansion(row);
  }

  private handleKeyDown(row: VisibleTreeNode<T>, event: KeyboardEvent): void {
    const rows = this.visibleRows();
    const rowIndex = rows.findIndex(candidate => candidate.id === row.id);
    const lastIndex = rows.length - 1;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.activeId = rows[nextIndex(rowIndex + 1, lastIndex)]?.id;
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.activeId = rows[nextIndex(rowIndex - 1, lastIndex)]?.id;
        break;
      case 'Home':
        event.preventDefault();
        this.activeId = rows[0]?.id;
        break;
      case 'End':
        event.preventDefault();
        this.activeId = rows[lastIndex]?.id;
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.stepIn(row, rows, rowIndex);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.stepOut(row);
        break;
      case 'Enter':
        event.preventDefault();
        this.activateRow(row);
        this.fireNodeEvent('node-activate', row);
        this.toggleSelection(row);
        break;
      case ' ':
        event.preventDefault();
        this.toggleSelection(row);
        break;
      default:
        break;
    }
  }

  private stepIn(
    row: VisibleTreeNode<T>,
    rows: VisibleTreeNode<T>[],
    rowIndex: number,
  ): void {
    const state = childState(row.node);
    if (state === 'leaf') {
      return;
    }

    if (!this.expandedIds.includes(row.id)) {
      this.toggleExpansion(row);
      return;
    }

    const nextRow = rows[rowIndex + 1];
    if (nextRow?.parentIds[nextRow.parentIds.length - 1] === row.id) {
      this.activeId = nextRow.id;
    }
  }

  private stepOut(row: VisibleTreeNode<T>): void {
    if (this.expandedIds.includes(row.id)) {
      this.toggleExpansion(row);
      return;
    }

    const parentId = row.parentIds[row.parentIds.length - 1];
    if (parentId) {
      this.activeId = parentId;
    }
  }

  private renderSelection(
    row: VisibleTreeNode<T>,
  ): TemplateResult | typeof nothing {
    if (this.selectionMode !== 'multiple' || !this.isRowSelectable(row)) {
      return nothing;
    }

    const selected = this.selectedIds.includes(row.id);
    return html`<span
      part="selection"
      class="selection"
      aria-hidden="true"
      data-selected=${selected ? 'true' : 'false'}
      ><oscd-checkbox
        tabindex="-1"
        ?checked=${selected}
        ?disabled=${this.isRowDisabled(row)}
      ></oscd-checkbox
    ></span>`;
  }

  private renderToggle(
    row: VisibleTreeNode<T>,
    context: TreeRenderContext<T>,
  ): TemplateResult {
    const expandable = context.childrenState !== 'leaf';
    const expanded = context.expanded;

    if (!expandable && this.renderLeafAccessory) {
      const accessory = this.renderLeafAccessory(context);
      if (accessory !== nothing && accessory != null && accessory !== false) {
        return html`<div
          part="accessory"
          class="accessory"
          @click=${(event: Event) => event.stopPropagation()}
          @keydown=${(event: KeyboardEvent) =>
            this.handleAccessoryKeydown(event)}
        >
          ${accessory}
        </div>`;
      }
    }

    return html`<button
      part="toggle"
      class="toggle"
      ?disabled=${!expandable || context.disabled}
      aria-label=${expanded ? 'Collapse' : 'Expand'}
      tabindex="-1"
      @click=${(event: MouseEvent) => this.handleToggleClick(row, event)}
    >
      ${expandable
        ? html`<oscd-icon
            >${expanded ? this.expandIcon : this.collapseIcon}</oscd-icon
          >`
        : nothing}
    </button>`;
  }

  // Keep Enter/Space activations of a leaf accessory (e.g. a pin button) from
  // bubbling to the row's keyboard handler; arrow keys still bubble so tree
  // navigation continues to work while an accessory is focused.
  // eslint-disable-next-line class-methods-use-this
  private handleAccessoryKeydown(event: KeyboardEvent): void {
    if (
      event.key === 'Enter' ||
      event.key === ' ' ||
      event.key === 'Spacebar'
    ) {
      event.stopPropagation();
    }
  }

  private renderRow(row: VisibleTreeNode<T>): TemplateResult {
    const context = this.renderContext(row);
    const state = context.childrenState;
    const selected = context.selected;
    const disabled = context.disabled;
    const active = context.active;

    return html`<div
      id=${row.htmlId}
      part="row"
      class="row"
      role="treeitem"
      tabindex=${active ? '0' : '-1'}
      aria-level=${row.level}
      aria-posinset=${row.ariaPositionInSet}
      aria-setsize=${row.ariaSetSize}
      aria-label=${this.accessibleLabel(row)}
      aria-expanded=${state === 'leaf' ? nothing : context.expanded}
      aria-selected=${context.selectable ? selected : nothing}
      aria-disabled=${disabled ? 'true' : nothing}
      data-active=${active ? 'true' : 'false'}
      data-selected=${selected ? 'true' : 'false'}
      data-selection-mode=${this.selectionMode}
      data-disabled=${disabled ? 'true' : 'false'}
      style=${`--oscd-tree-row-level: ${row.level};`}
      @click=${(event: MouseEvent) => this.handleRowClick(row, event)}
      @keydown=${(event: KeyboardEvent) => this.handleKeyDown(row, event)}
    >
      <oscd-ripple for=${row.htmlId} ?disabled=${disabled}></oscd-ripple>
      <oscd-focus-ring for=${row.htmlId} inward></oscd-focus-ring>
      <span part="indent" class="indent" aria-hidden="true"></span>
      ${this.togglePosition === 'leading'
        ? this.renderToggle(row, context)
        : nothing}
      ${this.renderSelection(row)}
      <span part="content" class="content"
        >${(this.renderItem ?? fallbackRenderItem)(context)}</span
      >
      ${this.togglePosition === 'trailing'
        ? this.renderToggle(row, context)
        : nothing}
    </div>`;
  }

  override updated(): void {
    const focusedAccessory =
      this.renderRoot instanceof ShadowRoot
        ? this.renderRoot.activeElement?.closest('.accessory')
        : null;
    if (focusedAccessory) {
      return;
    }

    const activeRow = this.renderRoot.querySelector<HTMLElement>(
      '.row[data-active="true"]',
    );
    if (activeRow && this.matches(':focus-within')) {
      activeRow.focus();
    }
  }

  override render(): TemplateResult {
    const rows = this.visibleRows();

    return html`<div part="tree" class="tree" role="tree">
      ${rows.map(row => this.renderRow(row))}
    </div>`;
  }

  static override styles = css`
    :host {
      display: block;
      /*
       * Allow the tree to shrink below its content's intrinsic (max-content)
       * width when placed in a flex or grid container. Without this, a single
       * long row label leaks its max-content width up the layout chain and
       * sizes every row to it, pushing trailing toggles/accessories out of a
       * width-constrained parent and defeating the per-row ellipsis. Keeping
       * this on the host makes the tree a well-behaved flex/grid child by
       * default for every consumer.
       */
      min-width: 0;
      color: var(--oscd-tree-color, var(--md-sys-color-on-surface, #1d1b20));
      font-family: var(
        --oscd-tree-font-family,
        var(--oscd-text-font, sans-serif)
      );
      outline: none;
      /*
       * Drives both the per-level indentation and the leading icon column width
       * of each row (see OscdTreeItem). Keeping these fused means a leading icon
       * occupies exactly one indent step, so icon-less descendants align their
       * text under an iconed ancestor's text automatically. Set it large enough
       * to hold your leading icon comfortably (e.g. 40px) when using icons.
       */
      --oscd-tree-indent-step: 24px;
      --oscd-tree-toggle-size: 32px;
      --oscd-tree-toggle-icon-size: 24px;
      --oscd-tree-row-height: 44px;
      --oscd-tree-row-shape: var(--md-sys-shape-corner-small, 4px);
      --md-ripple-hover-color: var(
        --oscd-tree-row-hover-state-layer-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      --md-ripple-hover-opacity: var(
        --oscd-tree-row-hover-state-layer-opacity,
        0.08
      );
      --md-ripple-pressed-color: var(
        --oscd-tree-row-pressed-state-layer-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      --md-ripple-pressed-opacity: var(
        --oscd-tree-row-pressed-state-layer-opacity,
        0.12
      );
    }

    .tree {
      display: flex;
      flex-direction: column;
      min-width: 0;
      gap: var(--oscd-tree-row-gap, 0);
    }

    .row {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-width: 0;
      min-height: var(--oscd-tree-row-height);
      border-radius: var(--oscd-tree-row-shape);
      color: inherit;
      cursor: default;
      outline: none;
      padding-inline-start: var(--oscd-tree-row-padding-start, 16px);
      padding-inline-end: var(--oscd-tree-row-padding-end, 8px);
      user-select: none;
    }

    oscd-ripple,
    oscd-focus-ring {
      border-radius: var(--oscd-tree-row-shape);
    }

    oscd-focus-ring {
      z-index: 1;
      --md-focus-ring-shape: var(--oscd-tree-row-shape);
      --md-focus-ring-color: var(
        --oscd-tree-row-focus-ring-color,
        var(--md-sys-color-primary, #6750a4)
      );
      --md-focus-ring-width: var(--oscd-tree-row-focus-ring-width, 2px);
      --md-focus-ring-duration: var(--oscd-tree-row-focus-ring-duration, 0ms);
    }

    .row[data-disabled='true'] {
      cursor: default;
    }

    .row[data-selection-mode='single'][data-selected='true'] {
      color: var(--oscd-tree-row-selected-text-color, var(--oscd-base3, #fff));
      background: var(
        --oscd-tree-row-selected-color,
        var(--oscd-primary, #0b335b)
      );
    }

    .row[data-selection-mode='single'][data-selected='true']:hover:not(
        [data-disabled='true']
      ) {
      background: var(
        --oscd-tree-row-selected-hover-color,
        var(--oscd-tree-row-selected-color, var(--oscd-primary, #0b335b))
      );
    }

    .indent {
      flex: 0 0
        calc(
          max(0, var(--oscd-tree-row-level) - 1) * var(--oscd-tree-indent-step)
        );
      inline-size: calc(
        max(0, var(--oscd-tree-row-level) - 1) * var(--oscd-tree-indent-step)
      );
    }

    .toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 var(--oscd-tree-toggle-size);
      inline-size: var(--oscd-tree-toggle-size);
      block-size: var(--oscd-tree-toggle-size);
      border: 0;
      border-radius: 50%;
      padding: 0;
      color: inherit;
      background: transparent;
      cursor: pointer;
    }

    .toggle:disabled {
      cursor: default;
      opacity: 0;
    }

    :host([toggle-position='trailing']) .toggle {
      margin-inline-start: var(--oscd-tree-trailing-toggle-gap, 4px);
    }

    .toggle oscd-icon {
      --md-icon-size: var(--oscd-tree-toggle-icon-size, 24px);
    }

    .accessory {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 var(--oscd-tree-toggle-size);
      inline-size: var(--oscd-tree-toggle-size);
      block-size: var(--oscd-tree-toggle-size);
      /*
       * Accessory visibility at rest. Defaults to fully opaque so accessories
       * are always shown; consumers can set --oscd-tree-accessory-rest-opacity
       * to 0 for a reveal-on-interaction pattern. Row hover and keyboard focus
       * within the accessory always force it fully visible so it stays
       * discoverable and keyboard-accessible.
       */
      opacity: var(--oscd-tree-accessory-rest-opacity, 1);
      transition: opacity 0.1s ease-in-out;
    }

    .row:hover .accessory,
    .accessory:focus-within {
      opacity: 1;
    }

    :host([toggle-position='trailing']) .accessory {
      margin-inline-start: var(--oscd-tree-trailing-toggle-gap, 4px);
    }

    .accessory oscd-icon {
      --md-icon-size: var(
        --oscd-tree-accessory-icon-size,
        var(--oscd-tree-toggle-icon-size, 24px)
      );
    }

    .accessory button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--oscd-tree-toggle-size);
      block-size: var(--oscd-tree-toggle-size);
      border: 0;
      border-radius: 50%;
      padding: 0;
      color: inherit;
      background: transparent;
      cursor: pointer;
    }

    .selection {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 var(--oscd-tree-selection-size, 48px);
      inline-size: var(--oscd-tree-selection-size, 48px);
      pointer-events: none;
    }

    .selection oscd-checkbox {
      pointer-events: none;
      --md-focus-ring-width: 0;
      --md-ripple-hover-opacity: 0;
      --md-ripple-pressed-opacity: 0;
      --md-checkbox-container-size: var(
        --oscd-tree-selection-checkbox-size,
        18px
      );
      --md-checkbox-icon-size: var(
        --oscd-tree-selection-checkbox-icon-size,
        18px
      );
    }

    .content {
      display: block;
      flex: 1 1 auto;
      min-width: 0;
    }
  `;
}
