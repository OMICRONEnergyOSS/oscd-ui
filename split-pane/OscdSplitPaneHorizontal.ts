import { localstorage } from '../decorators/localstorage.js';
import { property } from 'lit/decorators.js';
import { SplitPaneBase, Orientation } from './internal/base-split-pane.js';

/**
 * @tagname oscd-split-pane-horizontal
 * @summary
 * Splits a container into a top and bottom section with a draggable divider in between the two sections.
 * The divider can be dragged to resize the sections. Divider also has a toggle button to collapse/expand the top section.
 *
 * NOTE: Although not enforced, setting an ID on this component is recommended to ensure unique local storage keys for persisted sizes.
 * It is also recommended to set the defaultSize, so that the toggle button can restore to a reasonable size when toggling back from collapsed state.
 *
 * @example
 * ```html
 * <oscd-split-pane-horizontal>
 *   <div slot="top">Top Content</div>
 *   <div slot="bottom">Bottom Content</div>
 * </oscd-split-pane-horizontal>
 * ```
 *
 * @final
 * @suppress {visibility}
 */
export class OscdSplitPaneHorizontal extends SplitPaneBase {
  protected override readonly orientation: Orientation = 'horizontal';

  // persisted size in localstorage using elements ID + field as key; default 300px if nothing in storage
  @localstorage<number>()
  @property({ type: Number, attribute: false })
  override size: number = 300;

  @property({ type: Number })
  override max?: number;

  override render() {
    return this.renderSplit('top', 'bottom');
  }
}
