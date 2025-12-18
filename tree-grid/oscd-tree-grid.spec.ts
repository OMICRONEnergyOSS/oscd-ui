import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';

import './oscd-tree-grid.js';
import type { OscdTreeGrid } from './OscdTreeGrid.js';
import { OscdListItem } from '../list/OscdListItem.js';

const tree = {
  a: {
    children: {
      aa: {},
      ab: {
        children: {
          abb: {
            children: {
              abba: { text: 'ABBA!', mandatory: true },
              abbb: {},
              abbc: {},
            },
            mandatory: true,
          },
          abc: {},
        },
      },
      ac: {},
    },
  },
  b: { children: { bb: { children: { bba: {}, bbc: {} } }, bc: {} } },
  c: { children: { ca: {}, cb: { children: { cba: {}, cbb: {}, cbc: {} } } } },
};

describe('oscd-tree-grid', () => {
  it('preselects provided `paths`', async () => {
    const el = await fixture<OscdTreeGrid>(
      html`<oscd-tree-grid
        .tree=${tree}
        .paths=${[
          ['a', 'ab', 'abc'],
          ['b', 'bb', 'bbc'],
          ['nonsense', 'path'],
        ]}
      ></oscd-tree-grid>`,
    );
    expect(el.paths).to.deep.equal([
      ['a', 'ab', 'abc'],
      ['a', 'ab', 'abb', 'abba'],
      ['b', 'bb', 'bbc'],
      ['nonsense', 'path'],
    ]);

    expect(el.selection).to.deep.equal({
      a: { ab: { abc: {}, abb: { abba: {} } } },
      b: { bb: { bbc: {} } },
      nonsense: { path: {} },
    });
  });

  it('filters rows given a `filter` attribute', async () => {
    const el = await fixture<OscdTreeGrid>(
      html`<oscd-tree-grid filter="[bc]" .tree=${tree}></oscd-tree-grid>`,
    );

    /* should display these rows:
     * 1 extra row for "selectAll" buttons
     * 2 b
     * 3 c
     */
    expect(
      el.shadowRoot?.querySelector('oscd-list'),
    ).to.exist.and.to.have.property('childElementCount', 3);

    el.filter = 'a';
    await el.updateComplete;

    /* should display these rows:
     * 1 extra row for "selectAll" buttons
     * 2 a
     */
    expect(el.shadowRoot?.querySelector('oscd-list')).to.have.property(
      'childElementCount',
      2,
    );
  });

  it('filters rows on typing into the filter field', async () => {
    const el = await fixture<OscdTreeGrid>(
      html`<oscd-tree-grid .tree=${tree}></oscd-tree-grid>`,
    );

    // simulate typing
    el.filterUI!.value = '[bc]';
    el.filterUI!.dispatchEvent(new Event('input'));

    await new Promise(res => {
      setTimeout(res, 260);
    });

    /* should display these rows:
     * 1 extra row for "selectAll" buttons
     * 2 b
     * 3 c
     */
    expect(
      el.shadowRoot?.querySelector('oscd-list'),
    ).to.exist.and.to.have.property('childElementCount', 3);
  });

  it('collapses rows on collapse button click', async () => {
    const el = await fixture<OscdTreeGrid>(
      html`<oscd-tree-grid
        .tree=${tree}
        paths='[["a", "ab", "abc"],["b", "bb", "bbc"]]'
      ></oscd-tree-grid>`,
    );

    /* should display these rows, (X) indicating selected items:
     *  1 extra row for "selectAll" buttons
     *  2 a aa
     *  3 a ab abb ABBA! (X)
     *  4 a ab abb abbb
     *  5 a ab abb abbc
     *  6 a ab abc (X)
     *  7 a ac
     *  8 b bb bba
     *  9 b bb bbc (X)
     * 10 b bc
     * 11 c
     */
    expect(
      el.shadowRoot?.querySelector('oscd-list'),
    ).to.exist.and.to.have.property('childElementCount', 11);

    // collapse ABBA
    el.shadowRoot
      ?.querySelectorAll<OscdListItem>('.collapse > .filter')[1]
      ?.click();
    await el.updateComplete;

    /* should display these rows, (C) indicating collapsed items:
     * 1 extra row for "selectAll" buttons
     * 2 a aa
     * 3 a ab abb (X) (C)
     * 4 a ab abc (X)
     * 5 a ac
     * 6 b bb bba
     * 7 b bb bbc (X)
     * 8 b bc
     * 9 c
     */
    expect(el.shadowRoot?.querySelector('oscd-list')).to.have.property(
      'childElementCount',
      9,
    );

    // collapse aa
    el.shadowRoot?.querySelector<OscdListItem>('.collapse > .filter')?.click();
    await el.updateComplete;

    /* should display these rows:
     * 1 extra row for "selectAll" buttons
     * 2 a (X) (C)
     * 3 b bb bba
     * 4 b bb bbc (X)
     * 5 b bc
     * 6 c
     */
    expect(el.shadowRoot?.querySelector('oscd-list')).to.have.property(
      'childElementCount',
      6,
    );
  });

  it('expands rows on expand button click', async () => {
    const el = await fixture<OscdTreeGrid>(
      html`<oscd-tree-grid
        .tree=${tree}
        paths='[["a", "ab", "abc"],["b", "bb", "bbc"]]'
      ></oscd-tree-grid>`,
    );

    // collapse ABBA
    el.shadowRoot
      ?.querySelectorAll<OscdListItem>('.collapse > .filter')[1]
      ?.click();
    // collapse aa
    el.shadowRoot?.querySelector<OscdListItem>('.collapse > .filter')?.click();
    await el.updateComplete;

    /* should display these rows:
     * 1 extra row for "selectAll" buttons
     * 2 a (X) (C)
     * 3 b bb bba
     * 4 b bb bbc (X)
     * 5 b bc
     * 6 c
     */
    expect(el.shadowRoot?.querySelector('oscd-list')).to.have.property(
      'childElementCount',
      6,
    );

    // expand a
    el.shadowRoot?.querySelector<OscdListItem>('.expand > .filter')?.click();
    await el.updateComplete;

    /* should display these rows, (C) indicating collapsed items:
     * 1 extra row for "selectAll" buttons
     * 2 a aa
     * 3 a ab abb (X) (C)
     * 4 a ab abc (X)
     * 5 a ac
     * 6 b bb bba
     * 7 b bb bbc (X)
     * 8 b bc
     * 9 c
     */
    expect(el.shadowRoot?.querySelector('oscd-list')).to.have.property(
      'childElementCount',
      9,
    );
  });

  it('selects a row on unselected list item click', async () => {
    const el = await fixture<OscdTreeGrid>(
      html`<oscd-tree-grid .tree=${tree}></oscd-tree-grid>`,
    );

    expect(
      el.shadowRoot?.querySelector('oscd-list'),
    ).to.exist.and.to.have.property('childElementCount', 4);

    el.shadowRoot?.querySelector<OscdListItem>('[value="a"]')?.click();
    await el.updateComplete;

    /* should display these rows:
     * 1 extra row for "selectAll" buttons
     * 2 a aa
     * 3 a ab
     * 4 a ac
     * 5 b
     * 6 c
     */
    expect(
      el.shadowRoot?.querySelector('oscd-list'),
    ).to.exist.and.to.have.property('childElementCount', 6);
  });

  it('deselects a row on selected list item click', async () => {
    const el = await fixture<OscdTreeGrid>(
      html`<oscd-tree-grid paths='[["a"]]' .tree=${tree}></oscd-tree-grid>`,
    );

    expect(
      el.shadowRoot?.querySelector('oscd-list'),
    ).to.exist.and.to.have.property('childElementCount', 6);

    el.shadowRoot?.querySelector<OscdListItem>('[value="a"]')?.click();
    await el.updateComplete;

    /* should display these rows:
     * 1 extra row for "selectAll" buttons
     * 2 a
     * 3 b
     * 4 c
     */
    expect(
      el.shadowRoot?.querySelector('oscd-list'),
    ).to.exist.and.to.have.property('childElementCount', 4);
  });

  it('selects any unselected rows in a column on "selectAll" item click', async () => {
    const el = await fixture<OscdTreeGrid>(
      html`<oscd-tree-grid .paths=${[['a']]} .tree=${tree}></oscd-tree-grid>`,
    );

    el.shadowRoot
      ?.querySelector<OscdListItem>('oscd-list:not(.collapse) > oscd-list-item')
      ?.click();
    await el.updateComplete;

    /* should display these rows:
     * 1 extra row for "selectAll" buttons
     * 2 a aa
     * 3 a ab
     * 4 a ac
     * 5 b bb
     * 6 b bc
     * 7 c ca
     * 8 c cb
     */
    expect(
      el.shadowRoot?.querySelector('oscd-list'),
    ).to.exist.and.to.have.property('childElementCount', 8);
  });

  it('deselects all rows in a fully selected column on "selectAll" click', async () => {
    const el = await fixture<OscdTreeGrid>(
      html`<oscd-tree-grid
        paths='[["a"], ["b"], ["c"]]'
        .tree=${tree}
      ></oscd-tree-grid>`,
    );

    el.shadowRoot
      ?.querySelector<OscdListItem>('oscd-list:not(.collapse) > oscd-list-item')
      ?.click();
    await el.updateComplete;

    /* should display these rows:
     * 1 extra row for "selectAll" buttons
     * 2 a
     * 3 b
     * 4 c
     */
    expect(
      el.shadowRoot?.querySelector('oscd-list'),
    ).to.exist.and.to.have.property('childElementCount', 4);
  });
});
