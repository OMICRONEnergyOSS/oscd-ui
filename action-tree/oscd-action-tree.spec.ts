import { expect, fixture, html } from '@open-wc/testing';

import { type SinonSpy, spy } from 'sinon';

import './oscd-action-tree.js';
import type { OscdActionTree, TreeNode } from './OscdActionTree.js';

function timeout(ms: number) {
  return new Promise(res => {
    setTimeout(res, ms * 1);
  });
}
mocha.timeout(4000 * 1);

const editCallbackSpy = spy();

const testTree: TreeNode = {
  name: 'IED1',
  children: [
    {
      name: 'LD1',
      children: [
        {
          name: 'LLN0',
          children: [
            {
              name: 'Beh',
              leaf: [{ val: 0 }, { edit: editCallbackSpy, val: 1 }, { val: 4 }],
            },
          ],
        },
        {
          name: 'MMXU1',
          children: [
            {
              name: 'A',
              children: [
                {
                  name: 'phsA',
                  leaf: [
                    { val: 33.44 },
                    { edit: editCallbackSpy, val: 55.44 },
                    { val: 66.44 },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'LD2',
      children: [
        {
          name: 'LLN0',
          children: [
            {
              name: 'Beh',
              leaf: [{ val: 0 }],
            },
            {
              name: 'EmptyNode',
              children: [], // Node with NO leaf and empty children - should fire unfold event
            },
          ],
        },
      ],
    },
    {
      name: 'LD3',
      children: [], // Empty children - should fire unfold event
    },
  ],
};

describe('ActionTree Component', () => {
  describe('custom events', () => {
    let tree: OscdActionTree;
    let unfoldEventSpy: SinonSpy;

    beforeEach(async () => {
      tree = await fixture(
        html`<oscd-action-tree .data=${testTree}></oscd-action-tree>`,
      );

      unfoldEventSpy = spy();
      tree.addEventListener('unfold', unfoldEventSpy);
      editCallbackSpy.resetHistory();
      await timeout(200);
    });

    it('fires unfold event when expanding empty children array', async () => {
      // Find the fold icon for LD3 which has empty children array
      const ld3FoldIcon = tree.shadowRoot?.querySelector(
        '.tree-row:last-child .tree-fold',
      );

      expect(ld3FoldIcon).to.exist;

      // Click to unfold the empty children
      ld3FoldIcon?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await timeout(100);

      expect(unfoldEventSpy).to.have.been.calledOnce;
      expect(unfoldEventSpy.firstCall.args[0].detail.name).to.equal('LD3');
    });

    it('does not fire unfold event when expanding nodes with actual children', async () => {
      unfoldEventSpy.resetHistory();

      // Click on LD1 which has actual children (not empty array)
      const ld1FoldIcon = tree.shadowRoot?.querySelectorAll('.tree-fold')[1]; // LD1 fold icon
      ld1FoldIcon?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await timeout(100);

      // Should not fire unfold event since LD1 has actual children

      expect(unfoldEventSpy).to.not.have.been.called;
    });

    it('event detail contains the correct node information', async () => {
      // Click on LD3 which has empty children
      const ld3FoldIcon = tree.shadowRoot?.querySelector(
        '.tree-row:last-child .tree-fold',
      );
      ld3FoldIcon?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await timeout(100);

      const eventDetail = unfoldEventSpy.firstCall.args[0].detail;
      expect(eventDetail.name).to.equal('LD3');
      expect(eventDetail.children).to.deep.equal([]);

      expect(eventDetail.leaf).to.be.undefined;
    });
  });

  describe('edit callbacks', () => {
    let tree: OscdActionTree;

    beforeEach(async () => {
      tree = await fixture(
        html`<oscd-action-tree .data=${testTree}></oscd-action-tree>`,
      );

      editCallbackSpy.resetHistory();
      await timeout(200);
    });

    it('triggers edit callback when edit button is clicked', async () => {
      // First expand to make edit buttons visible
      // Expand LD1
      const ld1FoldIcon = tree.shadowRoot?.querySelectorAll('.tree-fold')[1];
      ld1FoldIcon?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await timeout(100);

      // Expand LLN0 under LD1
      const lln0FoldIcon = tree.shadowRoot?.querySelectorAll('.tree-fold')[2];
      lln0FoldIcon?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await timeout(100);

      // Find and click the edit button for Beh's second value
      const editButton = tree.shadowRoot?.querySelector('icon-button');

      expect(editButton).to.exist;

      editButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await timeout(100);

      expect(editCallbackSpy).to.have.been.calledOnce;
    });

    it('edit callbacks are called independently for different values', async () => {
      // Expand LD1 -> LLN0 to access Beh
      const ld1FoldIcon = tree.shadowRoot?.querySelectorAll('.tree-fold')[1];
      ld1FoldIcon?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await timeout(100);

      const lln0FoldIcon = tree.shadowRoot?.querySelectorAll('.tree-fold')[2];
      lln0FoldIcon?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await timeout(100);

      // Expand MMXU1 -> A to access phsA
      const mmxu1FoldIcon = tree.shadowRoot?.querySelectorAll('.tree-fold')[4]; // MMXU1 under LD1
      mmxu1FoldIcon?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await timeout(100);

      const aFoldIcon = tree.shadowRoot?.querySelectorAll('.tree-fold')[5]; // A under MMXU1
      aFoldIcon?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await timeout(100);

      // Find all edit buttons
      const editButtons = tree.shadowRoot?.querySelectorAll('icon-button');
      expect(editButtons?.length).to.be.greaterThan(1);

      // Click first edit button
      editButtons?.[0]?.dispatchEvent(
        new MouseEvent('click', { bubbles: true }),
      );
      await timeout(50);

      // Click second edit button
      editButtons?.[1]?.dispatchEvent(
        new MouseEvent('click', { bubbles: true }),
      );
      await timeout(50);

      // Both callbacks should have been called
      expect(editCallbackSpy.callCount).to.equal(2);
    });
  });
});
