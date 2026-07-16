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
 * ## Leading icon alignment
 *
 * When only some rows carry a leading icon (e.g. top-level rows have icons but
 * their children do not), you usually want the icon-less children's text to sit
 * directly under their iconed parent's text. This works automatically: a
 * leading icon occupies exactly one indent step, so an icon-less child —
 * indented one step by the tree — aligns its text with the parent's, at any
 * depth, with no per-row configuration.
 *
 * The leading icon column and the per-level indentation are both driven by the
 * single `--oscd-tree-indent-step` custom property (default `24px`), so they can
 * never drift out of alignment. Set it large enough to comfortably hold your
 * icon — e.g. `--oscd-tree-indent-step: 40px` — which also widens the gap
 * between the icon and the text (the gap is `step - icon size`). The rarely
 * needed `--oscd-tree-item-leading-size` can decouple just the column width, but
 * keeping it equal to the indent step is what preserves the alignment.
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
