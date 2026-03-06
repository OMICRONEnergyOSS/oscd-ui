import { LitElement } from 'lit';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { spy } from 'sinon';
import { OscdSplitPaneHorizontal } from './OscdSplitPaneHorizontal.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdIconButton } from '@/iconbutton/OscdIconButton.js';

/* Why??
 * @open-wc/testing's fixture has bugs in its support for scoped elements. Creating our own wrapper
 * is infintely easier than trying to work around them.
 */
class TestHost extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'oscd-split-pane-horizontal': OscdSplitPaneHorizontal,
  };

  paneTemplate?: ReturnType<typeof html>;

  override render() {
    return this.paneTemplate ?? html``;
  }
}

customElements.define('test-host', TestHost);
function nextTick(): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, 0));
}

async function getPane(template = html``): Promise<OscdSplitPaneHorizontal> {
  const defineSpy = spy(window.customElements, 'define');
  const globallyDefinedElements = defineSpy.args;
  const paneTemplate = html`<oscd-split-pane-horizontal
    id="split-pane-test"
    style="width: 600px; height: 300px;"
  >
    <div slot="top">top</div>
    <div slot="bottom">bottom</div>
    ${template}
  </oscd-split-pane-horizontal>`;
  const testHost = await fixture<TestHost>(
    html`<test-host .paneTemplate=${paneTemplate}> </test-host>`,
  );
  const pane = testHost.shadowRoot?.querySelector<OscdSplitPaneHorizontal>(
    'oscd-split-pane-horizontal',
  );
  expect(pane, 'Failed to create a scoped <oscd-split-pane-horizontal>').to
    .exist;
  await pane?.updateComplete;
  await nextTick();

  // Probably overkill to check this in every test, but it safeguards against our
  // tests accidentally adding non-scoped components!!
  expect(
    globallyDefinedElements,
    'No global elements should be defined',
  ).to.deep.equal([]);
  defineSpy.restore();
  return pane!;
}

describe('OscdSplitPaneHorizontal interactions', () => {
  beforeEach(() => {
    // Spy on customElements.define before dynamic import

    localStorage.clear();
  });

  afterEach(() => {
    // Restore the spy

    localStorage.clear();
  });

  it('does not toggle when clicking non-icon divider area', async () => {
    const pane = await getPane();
    pane.size = 260;
    await pane.updateComplete;

    const divider = pane.shadowRoot?.querySelector<HTMLElement>('.divider');
    expect(divider).to.exist;

    divider!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await pane.updateComplete;

    expect(pane.size).to.equal(260);
  });

  it('collapses to min and expands to defaultSize through toggle icon click', async () => {
    const pane = await getPane();
    pane.size = 240;
    await pane.updateComplete;

    const toggle =
      pane.shadowRoot?.querySelector<OscdIconButton>('.divider-button');
    expect(toggle).to.exist;

    toggle!.click();
    await pane.updateComplete;
    expect(pane.size).to.equal(pane.min);

    toggle!.click();
    await pane.updateComplete;
    expect(pane.size).to.equal(pane.defaultSize);
  });

  it('fires split-toggle event with correct detail on icon toggle', async () => {
    const pane = await getPane();
    pane.size = 220;
    await pane.updateComplete;

    const toggle =
      pane.shadowRoot?.querySelector<OscdIconButton>('.divider-button');
    expect(toggle).to.exist;

    const eventPromise = oneEvent(pane, 'split-toggle');
    toggle!.click();
    const event = (await eventPromise) as CustomEvent;

    expect(event.detail).to.deep.equal({
      collapsed: true,
      size: pane.min,
      source: 'icon',
    });
  });

  it('updates expanded/collapsed classes when icon toggles', async () => {
    const pane = await getPane();
    pane.size = 200;
    await pane.updateComplete;

    expect(pane.classList.contains('expanded')).to.equal(true);
    expect(pane.classList.contains('collapsed')).to.equal(false);

    const toggle =
      pane.shadowRoot?.querySelector<OscdIconButton>('.divider-button');
    toggle!.click();
    await pane.updateComplete;

    expect(pane.classList.contains('expanded')).to.equal(false);
    expect(pane.classList.contains('collapsed')).to.equal(true);
  });

  it('keeps keyboard resizing behavior on divider', async () => {
    const pane = await getPane();
    pane.size = 100;
    await pane.updateComplete;

    const divider = pane.shadowRoot?.querySelector<HTMLElement>('.divider');
    expect(divider).to.exist;

    divider!.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }),
    );

    await pane.updateComplete;
    expect(pane.size).to.equal(108);
  });

  it('sets and clears resizing class during pointer drag cycle', async () => {
    const pane = await getPane();
    const divider = pane.shadowRoot?.querySelector<HTMLElement>('.divider');
    expect(divider).to.exist;

    if (!divider!.setPointerCapture) {
      Object.defineProperty(divider!, 'setPointerCapture', {
        value: () => undefined,
      });
    }
    if (!divider!.releasePointerCapture) {
      Object.defineProperty(divider!, 'releasePointerCapture', {
        value: () => undefined,
      });
    }

    divider!.dispatchEvent(
      new PointerEvent('pointerdown', {
        pointerId: 1,
        clientX: 100,
        bubbles: true,
      }),
    );
    await pane.updateComplete;

    expect(pane.classList.contains('resizing')).to.equal(true);

    divider!.dispatchEvent(
      new PointerEvent('pointerup', {
        pointerId: 1,
        bubbles: true,
      }),
    );
    await pane.updateComplete;

    expect(pane.classList.contains('resizing')).to.equal(false);
  });

  it('uses icon and expandIcon slots in respective states', async () => {
    const pane = await getPane(html`
      <span slot="icon" id="custom-collapse">C</span>
      <span slot="expandIcon" id="custom-expand">E</span>
    `);

    const expandedSlot =
      pane.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="icon"]');
    expect(expandedSlot?.assignedElements()[0]?.id).to.equal('custom-collapse');

    const toggle =
      pane.shadowRoot?.querySelector<OscdIconButton>('.divider-button');
    toggle!.click();
    await pane.updateComplete;

    const collapsedSlot = pane.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="expandIcon"]',
    );
    expect(collapsedSlot?.assignedElements()[0]?.id).to.equal('custom-expand');
  });
});
