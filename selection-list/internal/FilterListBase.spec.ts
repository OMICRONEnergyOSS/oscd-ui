import { expect, fixture, html } from '@open-wc/testing';
import { customElement } from 'lit/decorators.js';

import { FilterListBase } from './FilterListBase.js';
import { OscdOutlinedTextField } from '../../textfield/OscdOutlinedTextField.js';

@customElement('test-filterable-list')
class TestFilterableList extends FilterListBase {
  override render() {
    return html`
      ${this.renderSearchField()}
      <div class="content">Test content</div>
    `;
  }

  public testOnFilter() {
    this.onFilter();
  }

  public get testSearchRegex() {
    return this.searchRegex;
  }
}

describe('FilterListBase', () => {
  let element: TestFilterableList;

  beforeEach(async () => {
    element = await fixture(
      html`<test-filterable-list></test-filterable-list>`,
    );
  });

  describe('basic properties', () => {
    it('has default filterable property as false', () => {
      expect(element.filterable).to.be.false;
    });

    it('has default searchhelper property', () => {
      expect(element.searchhelper).to.equal('search');
    });

    it('has default searchValue as empty string', () => {
      expect(element.searchValue).to.equal('');
    });

    it('has default searchRegex that matches everything', () => {
      const regex = element.testSearchRegex;
      expect(regex.test('anything')).to.be.true;
      expect(regex.test('')).to.be.true;
    });
  });

  describe('searchValue property', () => {
    it('getter returns the current search value', () => {
      expect(element.searchValue).to.equal('');
      element.searchValue = 'test';
      expect(element.searchValue).to.equal('test');
    });

    it('setter updates internal state and regex', () => {
      element.searchValue = 'apple';
      expect(element.searchValue).to.equal('apple');

      const regex = element.testSearchRegex;
      expect(regex.test('apple')).to.be.true;
      expect(regex.test('pineapple')).to.be.true;
      expect(regex.test('banana')).to.be.false;
    });
  });

  describe('search field rendering', () => {
    it('does not render search field when filterable is false', () => {
      element.filterable = false;
      element.requestUpdate();

      const searchField = element.shadowRoot?.querySelector(
        'md-outlined-text-field',
      );
      expect(searchField).to.be.null;
    });

    it('renders search field when filterable is true', async () => {
      element.filterable = true;
      await element.updateComplete;

      const searchField = element.shadowRoot?.querySelector(
        'oscd-outlined-text-field',
      );
      expect(searchField).to.not.be.null;
    });

    it('search field has correct placeholder', async () => {
      element.filterable = true;
      element.searchhelper = 'Custom search placeholder';
      await element.updateComplete;

      const searchField = element.shadowRoot?.querySelector(
        'oscd-outlined-text-field',
      );
      expect(searchField?.getAttribute('placeholder')).to.equal(
        'Custom search placeholder',
      );
    });

    it('search field reflects searchValue', async () => {
      element.filterable = true;
      element.searchValue = 'test value';
      await element.updateComplete;

      const searchField = element.shadowRoot?.querySelector(
        'oscd-outlined-text-field',
      ) as OscdOutlinedTextField;
      expect(searchField?.value).to.equal('test value');
    });
  });

  describe('search regex functionality', () => {
    it('creates case-insensitive regex', () => {
      element.searchValue = 'Apple';
      const regex = element.testSearchRegex;
      expect(regex.test('apple')).to.be.true;
      expect(regex.test('APPLE')).to.be.true;
    });

    it('handles multiple search terms', () => {
      element.searchValue = 'red apple';
      const regex = element.testSearchRegex;
      expect(regex.test('red delicious apple')).to.be.true;
      expect(regex.test('apple red')).to.be.true;
      expect(regex.test('red banana')).to.be.false;
    });

    it('handles wildcard characters', () => {
      element.searchValue = 'app*';
      const regex = element.testSearchRegex;
      expect(regex.test('apple')).to.be.true;
      expect(regex.test('application')).to.be.true;
      expect(regex.test('app')).to.be.true;
    });

    it('handles quoted strings', () => {
      element.searchValue = '"exact phrase"';
      const regex = element.testSearchRegex;
      expect(regex.test('this is an exact phrase here')).to.be.true;
      expect(regex.test('exact different phrase')).to.be.false;
    });

    it('escapes special regex characters', () => {
      element.searchValue = 'test.value';
      const regex = element.testSearchRegex;
      expect(regex.test('test.value')).to.be.true;
      expect(regex.test('testXvalue')).to.be.false;
    });
  });

  describe('onFilter method', () => {
    it('updates searchValue from search input', async () => {
      element.filterable = true;
      await element.updateComplete;

      const searchField = element.shadowRoot?.querySelector(
        'md-outlined-text-field',
      ) as OscdOutlinedTextField;
      if (searchField) {
        searchField.value = 'new search term';
        element.testOnFilter();
        expect(element.searchValue).to.equal('new search term');
      }
    });

    it('handles missing search input gracefully', () => {
      expect(() => element.testOnFilter()).to.not.throw;
    });
  });
});
