import { expect, fixture, html } from '@open-wc/testing';

import './oscd-selection-list.js';
import type { OscdSelectionList, SelectItem } from './OscdSelectionList.js';

document.body.style.width = '400px';

const gseControls = Array.from(
  new DOMParser()
    .parseFromString(
      `<SCL>
  <GSEControl name="gse0" desc="gseControl0"/>
  <GSEControl name="gse1" desc="gseControl1"/>
  <GSEControl name="gse2" />
  <GSEControl name="gse3" desc="gseControl3"/>
  <GSEControl name="gse4" desc="gseControl4"/>
  <GSEControl name="gse5" />
  <GSEControl name="gse6" desc="gseControl6"/>
  <GSEControl name="gse7" desc="gseControl7"/>
  <GSEControl name="gse8" />
  <GSEControl name="gse9" desc="gseControl9"/>
</SCL>`,
      'application/xml',
    )
    .querySelectorAll('GSEControl'),
);

const itemsList: SelectItem[] = gseControls.map(gseControl => ({
  headline: gseControl.getAttribute('name')!,
  supportingText: gseControl.getAttribute('desc') ?? undefined,
  selected: !!gseControl.getAttribute('desc'),
}));

const getAttachedItems = () =>
  gseControls.map(gseControl => ({
    headline: gseControl.getAttribute('name')!,
    supportingText: gseControl.getAttribute('desc') ?? undefined,
    attachedElement: gseControl,
    selected: gseControl.getAttribute('name') === 'gse4',
    disabled: gseControl.getAttribute('name') === 'gse1',
  }));

describe('Custom List component SelectionList', () => {
  describe('with attached elements not given', () => {
    let list: OscdSelectionList;

    beforeEach(async () => {
      list = await fixture(
        html`<oscd-selection-list .items=${itemsList}></oscd-selection-list>`,
      );
    });

    it('return empty array', async () =>
      expect(list.selectedElements.length).to.equal(0));
  });

  describe('with multi-select Selection List', () => {
    let list: OscdSelectionList;

    beforeEach(async () => {
      list = await fixture(
        html`<oscd-selection-list
          ?multiselect=${true}
          .items=${getAttachedItems()}
        ></oscd-selection-list>`,
      );
    });

    it('returns 2 selected items when an Item is clicked (items array already had 1 item pre-selected)', async () => {
      //check pre-conditions are met
      expect(list.selectedElements.length).to.equal(1);

      list.shadowRoot?.querySelectorAll('oscd-list-item')[0].click();
      await list.updateComplete;

      expect(list.selectedElements.length).to.equal(2);
      expect(list.selectedElements[0].getAttribute('name')).to.equal('gse0');
      expect(list.selectedElements[1].getAttribute('name')).to.equal('gse4');
    });
  });

  describe('with single-select Selection List', () => {
    let list: OscdSelectionList;

    beforeEach(async () => {
      list = await fixture(
        html`<oscd-selection-list
          .items=${getAttachedItems()}
        ></oscd-selection-list>`,
      );
      await list.updateComplete;
    });

    it('returns 1 selected items when radio item is clicked (items array already has 1 item pre-selected)', async () => {
      //check pre-conditions are met
      expect(list.selectedElements.length).to.equal(1);
      expect(list.selectedElements[0].getAttribute('name')).to.equal('gse4');

      list.shadowRoot?.querySelectorAll('oscd-list-item')[0].click();
      await list.updateComplete;

      expect(list.selectedElements.length).to.equal(1);
      expect(list.selectedElements[0].getAttribute('name')).to.equal('gse0');
    });
  });
});
