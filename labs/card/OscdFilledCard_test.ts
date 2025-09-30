/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// import 'jasmine'; (google3-only)

import { createTokenTests } from '../../testing/tokens.js';
import './oscd-filled-card.js';
import { OscdFilledCard } from './OscdFilledCard.js';

describe('<oscd-filled-card>', () => {
  describe('.styles', () => {
    createTokenTests(OscdFilledCard.styles);
  });
});
