/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// import 'jasmine'; (google3-only)

import { createTokenTests } from '../../testing/tokens.js';

import { OscdBadge } from './OscdBadge.js';

describe('<oscd-badge>', () => {
  describe('.styles', () => {
    createTokenTests(OscdBadge.styles);
  });
});
