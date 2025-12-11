/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, LitElement, TemplateResult } from 'lit';
import { property, query, state } from 'lit/decorators.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { OscdOutlinedTextField } from '../../textfield/OscdOutlinedTextField.js';

const DEFAULT_REGEX = /.*/i;

function searchRegex(filter?: string): RegExp {
  if (!filter) {
    return /.*/i;
  }

  const terms: string[] =
    filter
      .replace(/[.+^${}()|[\]\\]/g, '\\$&')
      .trim()
      .match(/(?:[^\s"']+|['"][^'"]*["'])+/g) ?? [];

  const expandedTerms = terms.map(term =>
    term.replace(/\*/g, '.*').replace(/\?/g, '.{1}').replace(/"|'/g, ''),
  );

  const regexString = expandedTerms.map(term => `(?=.*${term})`);

  return new RegExp(`${regexString.join('')}.*`, 'i');
}

function debounce(callback: any, delay = 100) {
  let timeout: any;

  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// Base class for all filterable list components
export class FilterListBase extends ScopedElementsMixin(LitElement) {
  /** Whether list items can be filtered on `headline` and `supportingText` */
  @property({ type: Boolean })
  filterable = false;

  /** Placeholder for search input field */
  @property({ type: String })
  searchhelper = 'search';

  @query('oscd-outlined-text-field')
  protected searchInput?: OscdOutlinedTextField;

  @state()
  protected _searchValue = '';

  private _cachedRegex: RegExp = DEFAULT_REGEX;

  /** Current search filter value. Updates search regex when changed. */
  @property({ type: String })
  set searchValue(value: string) {
    const oldVal = this._searchValue;
    if (oldVal === value) {
      return;
    }
    this._searchValue = value ?? '';
    this.searchRegex = searchRegex(value);
  }

  get searchValue(): string {
    return this._searchValue;
  }

  protected get searchRegex(): RegExp {
    return this._cachedRegex;
  }

  protected set searchRegex(value: RegExp) {
    if (value && value instanceof RegExp) {
      this._cachedRegex = value;
    } else {
      this._cachedRegex = DEFAULT_REGEX;
    }
  }

  protected onFilter(): void {
    if (!this.searchInput) {
      return;
    }
    this.searchValue = this.searchInput.value;
  }

  protected renderSearchField(): TemplateResult {
    return this.filterable
      ? html`<oscd-outlined-text-field
          .value=${this._searchValue}
          placeholder="${this.searchhelper}"
          @input="${debounce(() => this.onFilter())}"
        >
          <oscd-icon slot="leading-icon">search</oscd-icon>
        </oscd-outlined-text-field>`
      : html``;
  }
}
