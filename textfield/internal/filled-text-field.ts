/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { OscdFilledField } from '../../field/OscdFilledField.js';

import { literal } from 'lit/static-html.js';

import { TextField } from './text-field.js';

/**
 * A filled text field component.
 */
export class FilledTextField extends TextField {
  protected readonly fieldTag = literal`oscd-filled-field`;

  static scopedElements = {
    'oscd-filled-field': OscdFilledField,
  };
}
