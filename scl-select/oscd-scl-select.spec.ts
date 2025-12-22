import { expect, fixture, html } from '@open-wc/testing';
import { sendMouse } from '@web/test-runner-commands';

import { SinonSpy, spy } from 'sinon';

import './oscd-scl-select.js';
import type { OscdSclSelect } from './OscdSclSelect.js';

function timeout(ms: number) {
  return new Promise(res => {
    setTimeout(res, ms);
  });
}
mocha.timeout(4000);

describe('Custom SCL related select', () => {
  describe('with nullable option being activated', () => {
    describe('and value set not to null', () => {
      let sclTextField: OscdSclSelect;
      let event: SinonSpy;

      beforeEach(async () => {
        event = spy();
        sclTextField = await fixture(
          html`<oscd-scl-select
            nullable
            .value="${'Option1'}"
            .selectOptions=${['Option1', 'Option2']}
            @input="${(evt: Event) => event(evt)}"
          ></oscd-scl-select>`,
        );
      });

      it('triggers input event with clicked nullSwitch', async () => {
        await sendMouse({ type: 'click', position: [770, 20] });

        expect(event).to.have.been.calledOnce;
      });

      it('return null with clicked nullSwitch', async () => {
        expect(sclTextField.value).to.equal('Option1');

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclTextField.updateComplete;

        expect(sclTextField.value).to.be.null;
      });

      it('saved the value on nulledSwitch toggle', async () => {
        expect(sclTextField.value).to.equal('Option1');

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclTextField.updateComplete;

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclTextField.updateComplete;

        expect(sclTextField.value).to.equal('Option1');
      });
    });

    describe('and value set to null', () => {
      let sclTextField: OscdSclSelect;
      let event: SinonSpy;

      beforeEach(async () => {
        event = spy();
        sclTextField = await fixture(
          html`<oscd-scl-select
            nullable
            .value=${null}
            .selectOptions=${['Option1', 'Option2']}
            @input="${(evt: Event) => event(evt)}"
          ></oscd-scl-select>`,
        );
      });

      it('triggers input event with clicked nullSwitch', async () => {
        await sendMouse({ type: 'click', position: [770, 20] });

        expect(event).to.have.been.calledOnce;
      });

      it('return non null value with clicked nullSwitch', async () => {
        expect(sclTextField.value).to.be.null;

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclTextField.updateComplete;

        expect(sclTextField.value).to.equal('');
      });
    });
  });

  describe('with valid value', () => {
    let sclTextField: OscdSclSelect;
    let event: SinonSpy;

    beforeEach(async () => {
      sclTextField = await fixture(
        html`<oscd-scl-select
          .value=${'Option1'}
          .selectOptions=${['Option1', 'Option2']}
        ></oscd-scl-select>`,
      );

      event = spy();
      window.addEventListener('invalid', event);
      window.addEventListener('valid', event);
      window.addEventListener('input', event);
    });

    it('returns true on reportValidity', () =>
      expect(sclTextField.reportValidity()).to.be.true);

    it('does not compose valid event', () => {
      sclTextField.reportValidity();

      expect(event).to.not.have.been.called;
    });

    it('returns true on checkValidity', () =>
      expect(sclTextField.checkValidity()).to.be.true);

    it('triggers input event when value changes', async () => {
      expect(sclTextField.value).to.equal('Option1');
      await sendMouse({ type: 'click', position: [30, 10] }); // focus input
      await timeout(200);

      await sendMouse({ type: 'click', position: [30, 130] }); // focus input

      expect(event).to.have.been.calledOnce;
      expect(event.args[0][0].target.value).to.equal('Option2');
    });
  });

  describe('with invalid value', () => {
    let sclTextField: OscdSclSelect;
    let event: SinonSpy;

    beforeEach(async () => {
      sclTextField = await fixture(
        html`<oscd-scl-select
          required
          value="1234"
          .selectOptions=${['Option1', 'Option2']}
        ></oscd-scl-select>`,
      );

      event = spy();
      window.addEventListener('invalid', event);
      window.addEventListener('valid', event);
      window.addEventListener('input', event);
    });

    it('returns false on reportValidity', () =>
      expect(sclTextField.reportValidity()).to.be.false);

    it('do not compose invalid event', () => {
      sclTextField.reportValidity();

      expect(event).to.not.have.been.called;
    });

    it('returns false on checkValidity', () =>
      expect(sclTextField.checkValidity()).to.be.false);

    it('triggers input event when value changes', async () => {
      await sendMouse({ type: 'click', position: [30, 10] }); // focus input
      await timeout(200);

      await sendMouse({ type: 'click', position: [30, 100] }); // focus input

      expect(event).to.have.been.calledOnce;
    });
  });
});
