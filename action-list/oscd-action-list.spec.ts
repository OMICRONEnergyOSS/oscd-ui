import { expect, fixture, html } from '@open-wc/testing';

import { spy } from 'sinon';

import './oscd-action-list.js';
import type { OscdActionList } from './OscdActionList.js';
import { OscdListItem } from '../list/OscdListItem.js';

function timeout(ms: number) {
  return new Promise(res => {
    setTimeout(res, ms * 1);
  });
}
mocha.timeout(4000 * 1);

describe('Custom List component ActionList', () => {
  describe('allows to define primary action on list item', () => {
    let list: OscdActionList;

    const primaryActionSpy = spy();
    const firstActionSpy = spy();
    const secondActionSpy = spy();
    const thirdActionSpy = spy();

    beforeEach(async () => {
      list = await fixture(
        html`<oscd-action-list
          .items=${[
            {
              headline: 'item',
              primaryAction: primaryActionSpy,
              actions: [
                { icon: 'edit', callback: firstActionSpy },
                {
                  icon: 'delete',
                  label: 'secondAction',
                  callback: secondActionSpy,
                },
                { icon: 'add', label: 'thirdAction', callback: thirdActionSpy },
              ],
            },
          ]}
        ></oscd-action-list>`,
      );

      await timeout(200);
    });

    it('triggers primaryAction callback on list item click', async () => {
      (
        list.shadowRoot?.querySelectorAll(
          'oscd-list:nth-of-type(1) > oscd-list-item',
        )[0] as OscdListItem
      ).click();
      await list.updateComplete;
      expect(primaryActionSpy).to.have.been.calledOnce;
    });

    it('triggers first actions callback callback on first actions icon click', async () => {
      (
        list.shadowRoot?.querySelectorAll(
          'oscd-list:nth-of-type(2) > oscd-list-item',
        )[0] as OscdListItem
      ).click();

      expect(firstActionSpy).to.have.been.calledOnce;
    });

    it('triggers second action callback on list item click', async () => {
      const firstMenuItem = list.shadowRoot?.querySelectorAll(
        'oscd-list:nth-of-type(3) oscd-menu-item:nth-of-type(1)',
      )[0] as OscdListItem;

      expect(firstMenuItem).to.exist;
      firstMenuItem.click();
      await list.updateComplete;

      expect(secondActionSpy).to.have.been.calledOnce;
    });

    it('triggers third action callback on list menu item click', async () => {
      const secondMenuItem = list.shadowRoot?.querySelectorAll(
        'oscd-list:nth-of-type(3) oscd-menu-item:nth-of-type(2)',
      )[0] as OscdListItem;

      expect(secondMenuItem).to.exist;
      secondMenuItem.click();
      await list.updateComplete;

      expect(thirdActionSpy).to.have.been.calledOnce;
    });
  });
});
