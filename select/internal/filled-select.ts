/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { OscdFilledField } from '../../field/OscdFilledField.js';

import { literal } from 'lit/static-html.js';

import { Select } from './select.js';

// tslint:disable-next-line:enforce-comments-on-exported-symbols
export abstract class FilledSelect extends Select {
  static scopedElements = {
    'oscd-filled-field': OscdFilledField,
  };

  protected readonly fieldTag = literal`oscd-filled-field`;
}
