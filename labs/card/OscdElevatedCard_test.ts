/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// import 'jasmine'; (google3-only)

import { createTokenTests } from '../../testing/tokens.js';

import { OscdElevatedCard } from './OscdElevatedCard.js';

describe('<oscd-elevated-card>', () => {
  describe('.styles', () => {
    createTokenTests(OscdElevatedCard.styles);
  });
});
