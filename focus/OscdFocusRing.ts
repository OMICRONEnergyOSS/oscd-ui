import { CSSResultOrNative } from 'lit';

import { FocusRing } from './internal/focus-ring.js';
import { styles } from './internal/focus-ring-styles.js';

export class OscdFocusRing extends FocusRing {
  static override styles: CSSResultOrNative[] = [styles];
}
