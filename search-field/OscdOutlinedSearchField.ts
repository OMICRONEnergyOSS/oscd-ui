import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { OscdIcon } from '../icon/OscdIcon.js';
import { OscdIconButton } from '../iconbutton/OscdIconButton.js';
import { OutlinedSearchField } from './internal/OutlinedSearchField.js';
import { OscdOutlinedField } from '../field/OscdOutlinedField.js';
import { literal } from 'lit/static-html.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-outlined-search-field': OscdOutlinedSearchField;
  }
}

/**
 * @tag oscd-outlined-search-field
 * @summary An `oscd-outlined-text-field` specialized for search input.
 *
 * Behaves like a standard outlined text field, but comes by default with a
 * leading search icon and a trailing "clear" button (shown once
 * [[`value`]] is non-empty), a placeholder rendered at 50% opacity (relative
 * to the input text color) that is hidden while the field has focus.
 *
 * The default leading/trailing icons can be overridden by slotting content
 * into the `leading-icon`/`trailing-icon` slots, exactly as with
 * `oscd-outlined-text-field`. The placeholder color can be overridden via
 * `--oscd-search-field-placeholder-color`.
 *
 * Like the outlined text field it wraps, the container has no background by
 * default; consumers can set one via `--oscd-search-field-container-color`.
 * */
export class OscdOutlinedSearchField extends ScopedElementsMixin(
  OutlinedSearchField,
) {
  static scopedElements = {
    'oscd-outlined-field': OscdOutlinedField,
    'oscd-icon': OscdIcon,
    'oscd-icon-button': OscdIconButton,
  };

  protected override readonly fieldTag = literal`oscd-outlined-field`;
}
