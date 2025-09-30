/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// import 'jasmine'; (google3-only)

import { createTokenTests } from '../../testing/tokens.js';

import { OscdOutlinedCard } from './OscdOutlinedCard.js';

describe('<oscd-outlined-card>', () => {
  describe('.styles', () => {
    createTokenTests(OscdOutlinedCard.styles);
  });
});
