import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';

import './oscd-tree.js';
import './oscd-tree-item.js';
import '../icon/oscd-icon.js';
import type { OscdTree } from './OscdTree.js';
import type { TreeNode, TreeRenderContext } from './OscdTree.js';

type Node = TreeNode & { label: string; children?: Node[] };

const data: Node[] = [
  {
    id: 'a',
    label: 'A',
    children: [{ id: 'a/a', label: 'A/A', children: [] }],
  },
];

const rowToggleIcon = (el: OscdTree): string | undefined => {
  const icon = el.renderRoot.querySelector(
    '.row .toggle oscd-icon',
  ) as HTMLElement | null;
  return icon?.textContent?.trim();
};

describe('oscd-tree toggle customization', () => {
  it('uses the default expand/collapse icons', async () => {
    const collapsed = await fixture<OscdTree>(
      html`<oscd-tree .data=${data}></oscd-tree>`,
    );
    expect(rowToggleIcon(collapsed)).to.equal('chevron_right');

    const expanded = await fixture<OscdTree>(
      html`<oscd-tree .data=${data} .expandedIds=${['a']}></oscd-tree>`,
    );
    expect(rowToggleIcon(expanded)).to.equal('expand_more');
  });

  it('honors overridden expand/collapse icons', async () => {
    const collapsed = await fixture<OscdTree>(
      html`<oscd-tree
        .data=${data}
        collapse-icon="add"
        expand-icon="remove"
      ></oscd-tree>`,
    );
    expect(rowToggleIcon(collapsed)).to.equal('add');

    const expanded = await fixture<OscdTree>(
      html`<oscd-tree
        .data=${data}
        .expandedIds=${['a']}
        collapse-icon="add"
        expand-icon="remove"
      ></oscd-tree>`,
    );
    expect(rowToggleIcon(expanded)).to.equal('remove');
  });

  it('renders the toggle before the content by default', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree .data=${data}></oscd-tree>`,
    );
    expect(el.togglePosition).to.equal('leading');

    const row = el.renderRoot.querySelector('.row') as HTMLElement;
    const children = Array.from(row.children);
    const toggleIndex = children.findIndex(child =>
      child.classList.contains('toggle'),
    );
    const contentIndex = children.findIndex(child =>
      child.classList.contains('content'),
    );
    expect(toggleIndex).to.be.lessThan(contentIndex);
  });

  it('renders the toggle after the content when trailing', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree .data=${data} toggle-position="trailing"></oscd-tree>`,
    );
    expect(el.togglePosition).to.equal('trailing');
    expect(el.getAttribute('toggle-position')).to.equal('trailing');

    const row = el.renderRoot.querySelector('.row') as HTMLElement;
    const children = Array.from(row.children);
    const toggleIndex = children.findIndex(child =>
      child.classList.contains('toggle'),
    );
    const contentIndex = children.findIndex(child =>
      child.classList.contains('content'),
    );
    expect(toggleIndex).to.be.greaterThan(contentIndex);
  });
});

describe('oscd-tree leaf accessory', () => {
  it('renders no accessory by default on leaf rows', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree .data=${data} .expandedIds=${['a']}></oscd-tree>`,
    );
    const leafRow = el.renderRoot.querySelectorAll('.row')[1] as HTMLElement;
    expect(leafRow.querySelector('.accessory')).to.be.null;
    expect(leafRow.querySelector('.toggle')).to.not.be.null;
  });

  it('renders the accessory in the toggle column of leaf rows only', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree
        .data=${data}
        .expandedIds=${['a']}
        .renderLeafAccessory=${() =>
          html`<button class="pin"><oscd-icon>keep</oscd-icon></button>`}
      ></oscd-tree>`,
    );

    const rows = el.renderRoot.querySelectorAll('.row');
    const branchRow = rows[0] as HTMLElement;
    const leafRow = rows[1] as HTMLElement;

    // Branch keeps its toggle, no accessory.
    expect(branchRow.querySelector('.accessory')).to.be.null;
    expect(branchRow.querySelector('.toggle')).to.not.be.null;

    // Leaf renders the accessory instead of the empty toggle button.
    const accessory = leafRow.querySelector('.accessory');
    expect(accessory).to.not.be.null;
    expect(leafRow.querySelector('.toggle')).to.be.null;
    expect(accessory?.querySelector('button.pin')).to.not.be.null;
  });

  it('does not select the row when the accessory is clicked', async () => {
    let selectionChanged = false;
    const el = await fixture<OscdTree>(
      html`<oscd-tree
        .data=${data}
        .expandedIds=${['a']}
        selectionMode="single"
        .renderLeafAccessory=${() =>
          html`<button class="pin"><oscd-icon>keep</oscd-icon></button>`}
        @selected-ids-changed=${() => {
          selectionChanged = true;
        }}
      ></oscd-tree>`,
    );

    const button = el.renderRoot.querySelector(
      '.accessory button.pin',
    ) as HTMLButtonElement;
    button.click();

    expect(selectionChanged).to.be.false;
    expect(el.selectedIds).to.deep.equal([]);
  });
});

describe('oscd-tree-item leading alignment', () => {
  const renderMixed = ({ node }: TreeRenderContext<Node>) =>
    html`<oscd-tree-item>
      ${node.id === 'a' ? html`<oscd-icon slot="start">dns</oscd-icon>` : ''}
      <span slot="headline">${node.label}</span>
    </oscd-tree-item>`;

  const items = (el: OscdTree): NodeListOf<Element> =>
    el.renderRoot.querySelectorAll('oscd-tree-item');

  const textLeft = (item: Element): number => {
    const root = (item as HTMLElement & { shadowRoot: ShadowRoot }).shadowRoot;
    const text = root.querySelector('.text') as HTMLElement;
    return text.getBoundingClientRect().left;
  };

  const leadingWidth = (item: Element): number => {
    const root = (item as HTMLElement & { shadowRoot: ShadowRoot }).shadowRoot;
    const leading = root.querySelector('.leading') as HTMLElement;
    return leading.getBoundingClientRect().width;
  };

  it('collapses the leading column on icon-less rows and reserves one indent step on iconed rows', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree
        style="--oscd-tree-indent-step: 40px;"
        .data=${data}
        .expandedIds=${['a']}
        .renderItem=${renderMixed}
      ></oscd-tree>`,
    );
    const [parent, child] = items(el);
    // Iconed parent reserves exactly one indent step; icon-less child collapses.
    expect(leadingWidth(parent)).to.equal(40);
    expect(leadingWidth(child)).to.equal(0);
  });

  it('aligns an icon-less child under its iconed parent at any indent step', async () => {
    for (const step of ['24px', '40px', '56px']) {
      const el = await fixture<OscdTree>(
        html`<oscd-tree
          style="--oscd-tree-indent-step: ${step};"
          .data=${data}
          .expandedIds=${['a']}
          .renderItem=${renderMixed}
        ></oscd-tree>`,
      );
      const [parent, child] = items(el);
      // A leading icon occupies one indent step, so the child (indented one
      // step) lands its text exactly under the parent's text.
      expect(Math.abs(textLeft(child) - textLeft(parent))).to.be.lessThan(1);
    }
  });
});
