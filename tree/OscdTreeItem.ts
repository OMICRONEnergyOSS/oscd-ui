import { TreeItem } from './internal/TreeItem.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-tree-item': OscdTreeItem;
  }
}

/**
 * Default content component for rows rendered inside `oscd-tree`.
 *
 * `oscd-tree-item` is intended to be returned from an `oscd-tree` `renderItem`
 * callback. It renders the caller-visible row content only. The parent
 * `oscd-tree` owns the tree row frame, indentation, expand/collapse affordance,
 * selection affordance, keyboard handling, and ARIA attributes.
 *
 * Use the `headline` slot for the primary label, `supporting-text` for
 * secondary/path text, `start` for an optional leading icon, and `end` for
 * optional trailing status or actions.
 *
 * @example
 * ```ts
 * const renderItem = ({ node, selected, active, disabled }) => html`
 *   <oscd-tree-item
 *     ?selected=${selected}
 *     ?active=${active}
 *     ?disabled=${disabled}
 *   >
 *     <oscd-icon slot="start">lan</oscd-icon>
 *     <span slot="headline">${node.label}</span>
 *     <span slot="supporting-text">${node.path}</span>
 *     ${selected ? html`<oscd-icon slot="end">check</oscd-icon>` : ''}
 *   </oscd-tree-item>
 * `;
 * ```
 *
 * @slot start - Optional leading content such as an icon.
 * @slot headline - Primary row text.
 * @slot supporting-text - Secondary row text.
 * @slot end - Optional trailing content such as status or actions.
 *
 * @tagname oscd-tree-item
 */
export class OscdTreeItem extends TreeItem {}
