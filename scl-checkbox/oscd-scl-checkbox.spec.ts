import { expect, fixture, html } from '@open-wc/testing';
import { sendMouse } from '@web/test-runner-commands';

import { SinonSpy, spy } from 'sinon';

import './oscd-scl-checkbox.js';
import type { OscdSclCheckbox } from './OscdSclCheckbox.js';

describe('Custom SCL related checkbox', () => {
  describe('with nullable option being activated', () => {
    describe('and value set not to null', () => {
      let sclCheckbox: OscdSclCheckbox;
      let event: SinonSpy;

      beforeEach(async () => {
        event = spy();

        sclCheckbox = await fixture(
          html`<oscd-scl-checkbox
            nullable
            .value=${'true'}
            @input="${(evt: Event) => event(evt)}"
          ></oscd-scl-checkbox>`,
        );
      });

      it('triggers input event with clicked checkbox', async () => {
        await sendMouse({ type: 'click', position: [30, 20] });

        expect(event).to.have.been.calledOnce;
        expect(event.args[0][0].target).to.equal(sclCheckbox);
        expect(event.args[0][0].target.value).to.equal('false');
      });

      it('triggers input event with clicked nullSwitch', async () => {
        await sendMouse({ type: 'click', position: [770, 20] });

        expect(event).to.have.been.calledOnce;
        expect(event.args[0][0].target).to.equal(sclCheckbox);
        expect(event.args[0][0].target.value).to.equal(null);
      });

      it('return "false" with clicked checkbox', async () => {
        expect(sclCheckbox.value).to.equal('true');

        await sendMouse({ type: 'click', position: [30, 20] });

        expect(sclCheckbox.value).to.equal('false');
      });

      it('return null with clicked nullSwitch', async () => {
        expect(sclCheckbox.value).to.equal('true');

        await sendMouse({ type: 'click', position: [770, 20] });

        expect(sclCheckbox.value).to.be.null;
      });

      it('saved the value on nulledSwitch toggle', async () => {
        expect(sclCheckbox.value).to.equal('true');

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclCheckbox.updateComplete;

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclCheckbox.updateComplete;

        expect(sclCheckbox.value).to.equal('true');
      });

      it('always return true on reportValidity', () =>
        expect(sclCheckbox.reportValidity()).to.be.true);

      it('always return true on checkValidity', () =>
        expect(sclCheckbox.checkValidity()).to.be.true);
    });

    describe('and value set to null', () => {
      let sclCheckbox: OscdSclCheckbox;
      let event: SinonSpy;

      beforeEach(async () => {
        event = spy();

        sclCheckbox = await fixture(
          html`<oscd-scl-checkbox
            nullable
            .value=${null}
            defaultValue="true"
            @input="${(evt: Event) => event(evt)}"
          ></oscd-scl-checkbox>`,
        );
      });

      it('triggers input event with clicked nullSwitch', async () => {
        await sendMouse({ type: 'click', position: [770, 20] });

        expect(event).to.have.been.calledOnce;
        expect(event.args[0][0].target.value).to.equal('false');
      });

      it('return non null value with clicked nullSwitch', async () => {
        expect(sclCheckbox.value).to.be.null;

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclCheckbox.updateComplete;

        expect(sclCheckbox.value).to.equal('false');
      });

      it('always return true on reportValidity', () =>
        expect(sclCheckbox.reportValidity()).to.be.true);

      it('always return true on checkValidity', () =>
        expect(sclCheckbox.checkValidity()).to.be.true);
    });
  });

  describe('with nullable option being deactivated', () => {
    describe('and value set not to null', () => {
      let sclCheckbox: OscdSclCheckbox;
      let event: SinonSpy;

      beforeEach(async () => {
        event = spy();

        sclCheckbox = await fixture(
          html`<oscd-scl-checkbox
            .value=${'true'}
            @input="${(evt: Event) => event(evt)}"
          ></oscd-scl-checkbox>`,
        );
      });

      it('triggers input event with clicked nullSwitch', async () => {
        await sendMouse({ type: 'click', position: [30, 20] });

        expect(event).to.have.been.calledOnce;
      });

      it('return false with un-checked checkbox', async () => {
        expect(sclCheckbox.value).to.equal('true');

        await sendMouse({ type: 'click', position: [30, 20] });

        expect(sclCheckbox.value).to.equal('false');
      });

      it('touch-target being set to flex:auto', async () => {
        expect(sclCheckbox.value).to.equal('true');

        await sendMouse({ type: 'click', position: [500, 20] });
        await sclCheckbox.updateComplete;

        expect(sclCheckbox.value).to.equal('false');
      });

      it('always return true on reportValidity', () =>
        expect(sclCheckbox.reportValidity()).to.be.true);

      it('always return true on checkValidity', () =>
        expect(sclCheckbox.checkValidity()).to.be.true);
    });

    describe('and value set to null', () => {
      let sclCheckbox: OscdSclCheckbox;
      let event: SinonSpy;

      beforeEach(async () => {
        event = spy();

        sclCheckbox = await fixture(
          html`<oscd-scl-checkbox
            .value=${null}
            defaultValue="true"
            label="label"
            supportingText="text"
            @input="${(evt: Event) => {
              event(evt);
            }}"
          ></oscd-scl-checkbox>`,
        );
      });

      it('triggers input event with clicked checkbox', async () => {
        await sendMouse({ type: 'click', position: [300, 20] });
        await sclCheckbox.updateComplete;

        expect(event).to.have.been.calledOnce;
      });

      it('return non null value with clicked nullSwitch', async () => {
        expect(sclCheckbox.value).to.equal('false');

        await sendMouse({ type: 'click', position: [700, 20] });
        await sclCheckbox.updateComplete;

        expect(sclCheckbox.value).to.equal('true');
      });

      it('always return true on reportValidity', () =>
        expect(sclCheckbox.reportValidity()).to.be.true);

      it('always return true on checkValidity', () =>
        expect(sclCheckbox.checkValidity()).to.be.true);
    });
  });
});
