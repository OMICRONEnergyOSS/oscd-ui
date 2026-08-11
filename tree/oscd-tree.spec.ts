import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import sinon from 'sinon';

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
  it('exposes and renders the controlled active row', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree .data=${data} .activeId=${'a'}></oscd-tree>`,
    );

    const activeRow = el.renderRoot.querySelector(
      '.row[data-active="true"]',
    ) as HTMLElement;
    expect(el.activeId).to.equal('a');
    expect(activeRow).to.exist;
  });

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

describe('oscd-tree active navigation', () => {
  const navigationData: Node[] = [
    { id: 'one', label: 'One', children: [] },
    { id: 'disabled', label: 'Disabled', children: [] },
    { id: 'two', label: 'Two', children: [] },
  ];

  const keydown = (target: EventTarget, key: string): void => {
    target.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
  };

  it('does not assign an active row on focus or initial render', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree .data=${navigationData}></oscd-tree>`,
    );

    el.focus();
    expect(el.activeId).to.equal(null);
  });

  it('scrolls the active row into view after keyboard focus moves', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree .data=${navigationData}></oscd-tree>`,
    );
    el.focus();
    el.activeId = 'one';
    await el.updateComplete;

    const scrollIntoView = Array.from(
      el.renderRoot.querySelectorAll<HTMLElement>('.row'),
    ).map(row => sinon.stub(row, 'scrollIntoView'));
    el.activeId = 'two';
    await el.updateComplete;

    const calls = scrollIntoView.filter(stub => stub.called);
    expect(calls.length).to.equal(1);
    expect(calls[0].firstCall.args[0]).to.deep.equal({
      block: 'nearest',
      inline: 'nearest',
    });
    scrollIntoView.forEach(stub => stub.restore());
  });

  it('navigates from the tree host when no active row exists', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree .data=${navigationData}></oscd-tree>`,
    );
    el.isDisabled = node => node.id === 'disabled';
    await el.updateComplete;

    const activeIds: string[] = [];
    el.addEventListener('active-changed', (event: Event) => {
      activeIds.push(
        (event as CustomEvent<{ activeId: string }>).detail.activeId,
      );
    });

    el.focus();
    keydown(el, 'ArrowDown');
    await el.updateComplete;
    keydown(el, 'ArrowDown');
    await el.updateComplete;

    expect(el.activeId).to.equal('two');
    expect(activeIds).to.deep.equal(['one', 'two']);
  });

  it('dispatches a boundary event without changing the active ID', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree .data=${navigationData} .activeId=${'two'}></oscd-tree>`,
    );
    const directions: string[] = [];
    el.addEventListener('navigation-boundary', (event: Event) => {
      directions.push(
        (event as CustomEvent<{ direction: string }>).detail.direction,
      );
    });

    el.focus();
    keydown(el, 'ArrowDown');
    await el.updateComplete;

    expect(el.activeId).to.equal('two');
    expect(directions).to.deep.equal(['last']);
  });

  it('hands off at a boundary without skipping the target tree first row', async () => {
    const container = await fixture<HTMLDivElement>(
      html`<div>
        <oscd-tree
          .data=${[{ id: 'a', label: 'A', children: [] }]}
          .activeId=${'a'}
        ></oscd-tree>
        <oscd-tree
          .data=${[
            { id: 'b1', label: 'B1', children: [] },
            { id: 'b2', label: 'B2', children: [] },
          ]}
        ></oscd-tree>
      </div>`,
    );
    const trees = Array.from(container.querySelectorAll('oscd-tree'));
    const [first, second] = trees;
    first.addEventListener('navigation-boundary', () => {
      second.activeId = second.getFirstNodeId();
      second.focus();
    });

    first.focus();
    keydown(first, 'ArrowDown');
    await Promise.all([first.updateComplete, second.updateComplete]);

    expect(first.activeId).to.equal('a');
    expect(second.activeId).to.equal('b1');
    expect(second.matches(':focus-within')).to.be.true;

    keydown(second, 'ArrowDown');
    await second.updateComplete;
    expect(second.activeId).to.equal('b2');
  });

  it('returns enabled edge IDs and null for an empty navigable tree', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree .data=${navigationData}></oscd-tree>`,
    );
    el.isDisabled = node => node.id === 'disabled';
    await el.updateComplete;

    expect(el.getFirstNodeId()).to.equal('one');
    expect(el.getLastNodeId()).to.equal('two');

    el.data = [];
    await el.updateComplete;
    expect(el.getFirstNodeId()).to.equal(null);
    expect(el.getLastNodeId()).to.equal(null);
  });

  it('ignores an invalid active ID and warns', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree .data=${navigationData} .activeId=${'one'}></oscd-tree>`,
    );
    const warning = sinon.stub(console, 'warn');

    try {
      el.activeId = 'missing';
      await el.updateComplete;
      expect(el.activeId).to.equal('one');
      expect(warning.calledOnce).to.be.true;
    } finally {
      warning.restore();
    }
  });

  it('selects a branch with Enter without dispatching a second activation event', async () => {
    const el = await fixture<OscdTree>(
      html`<oscd-tree
        .data=${[{ id: 'branch', label: 'Branch', children: [] }]}
        selectionMode="single"
        .activeId=${'branch'}
      ></oscd-tree>`,
    );
    let selectionEvents = 0;
    let activationEvents = 0;
    el.addEventListener('selected-ids-changed', () => selectionEvents++);
    el.addEventListener('node-activate', () => activationEvents++);

    el.focus();
    keydown(el, 'Enter');
    await el.updateComplete;

    expect(el.activeId).to.equal('branch');
    expect(el.selectedIds).to.deep.equal(['branch']);
    expect(selectionEvents).to.equal(1);
    expect(activationEvents).to.equal(0);
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
