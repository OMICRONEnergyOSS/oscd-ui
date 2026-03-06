/* ---------- Vertical Split ---------- */

import { localstorage } from '../decorators/localstorage.js';
import { property } from 'lit/decorators.js';
import { SplitPaneBase, Orientation } from './internal/base-split-pane.js';

/**
 * @tagname oscd-split-pane-vertical
 * @summary
 * Splits a container into a left and right section with a draggable divider in between the two sections.
 * The divider can be dragged to resize the sections. Divider also has a toggle button to collapse/expand the left section.
 *
 * NOTE: Although not enforced, setting an ID on this component is recommended to ensure unique local storage keys for persisted sizes.
 * It is also recommended to set the defaultSize, so that the toggle button can restore to a reasonable size when toggling back from collapsed state.
 *
 * @example
 * ```html
 * <oscd-split-pane-vertical>
 *   <div slot="left">Left Content</div>
 *   <div slot="right">Right Content</div>
 * </oscd-split-pane-vertical>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
export class OscdSplitPaneVertical extends SplitPaneBase {
  protected override readonly orientation: Orientation = 'vertical';

  @localstorage<number>()
  @property({ type: Number, attribute: false })
  override size!: number;

  @property({ type: Number })
  override max?: number;

  override render() {
    return this.renderSplit('left', 'right');
  }
}
