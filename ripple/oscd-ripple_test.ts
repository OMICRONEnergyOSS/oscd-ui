/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// import 'jasmine'; (google3-only)

import { createTokenTests } from '../testing/tokens.js';

import { OscdRipple } from './OscdRipple.js';

describe('<oscd-ripple>', () => {
  describe('.styles', () => {
    createTokenTests(OscdRipple.styles);
  });
});
