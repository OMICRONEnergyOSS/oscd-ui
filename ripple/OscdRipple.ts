import { CSSResultOrNative } from 'lit';

import { Ripple } from './internal/ripple.js';
import { styles } from './internal/ripple-styles.js';

export class OscdRipple extends Ripple {
  static override styles: CSSResultOrNative[] = [styles];
}
