import { Tree } from './internal/Tree.js';
export type {
  TreeChildrenState,
  TreeNode,
  TreeNodeEventDetail,
  TreeRenderContext,
  TreeSelectionChangeEventDetail,
  TreeSelectionMode,
} from './internal/Tree.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-tree': OscdTree;
  }
}

/**
 * Displays hierarchical data as an accessible, keyboard-navigable tree.
 *
 * `oscd-tree` is data-driven: callers provide nested node data through `data`,
 * and the tree manages expansion, selection, active-row navigation, row
 * indentation, and ARIA attributes. Row content stays flexible through the
 * `renderItem` callback.
 *
 * The tree owns the row frame. This includes indentation, expand/collapse
 * affordances, selection affordances, keyboard handling, focus handling, and
 * accessibility attributes. `renderItem` only supplies the content rendered
 * inside each row frame.
 *
 * Every node may provide a stable `id`. If no ID is supplied, the tree uses
 * `getNodeId` when provided, then falls back to an index-path ID such as
 * `0/1/2`. Index-path IDs are convenient for static demos but are not stable
 * when nodes are inserted, removed, sorted, filtered, or lazily loaded, and
 * should not be persisted.
 *
 * `selectedIds` and `expandedIds` are controlled state. They can be persisted
 * by the caller, but persisted IDs must be scoped to the data set/context that
 * produced them. Reset or re-key those arrays when `data` changes to a
 * different logical tree, otherwise unrelated nodes with matching IDs may
 * appear selected or expanded.
 *
 * `children` has three meanings:
 *
 * - `children === undefined`: children are unknown or not loaded yet.
 * - `children === []`: children are known and the node is a leaf.
 * - `children.length > 0`: children are known and the node is a branch.
 *
 * Expansion of nodes with unknown children can be intercepted with the
 * cancelable `node-expand` event.
 *
 * @example
 * ```ts
 * type Node = TreeNode & {
 *   label: string;
 *   children?: Node[];
 * };
 *
 * const data: Node[] = [
 *   {
 *     id: 'ied:PUB_A',
 *     label: 'PUB_A',
 *     children: [{ id: 'ln:TCTR1', label: 'TCTR1', children: [] }],
 *   },
 * ];
 *
 * html`
 *   <oscd-tree
 *     .data=${data}
 *     .expandedIds=${['ied:PUB_A']}
 *     .renderItem=${({ node }) => html`
 *       <oscd-tree-item>
 *         <span slot="headline">${node.label}</span>
 *       </oscd-tree-item>
 *     `}
 *   ></oscd-tree>
 * `;
 * ```
 *
 * @fires selected-ids-changed - Fired when user interaction changes selected IDs.
 * @fires expanded-ids-changed - Fired when expansion state changes.
 * @fires node-click - Fired when a row is clicked.
 * @fires node-activate - Fired when a row is activated with the keyboard.
 * @fires node-expand - Cancelable event fired before a row expands.
 * @fires node-collapse - Fired after a row collapses.
 * @fires node-toggle - Fired after a row expansion state toggles.
 *
 * @tagname oscd-tree
 */
export class OscdTree extends Tree {}
