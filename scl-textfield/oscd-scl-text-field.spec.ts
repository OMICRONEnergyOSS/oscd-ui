import { expect, fixture, html } from '@open-wc/testing';
import { sendKeys, sendMouse } from '@web/test-runner-commands';

import { SinonSpy, spy } from 'sinon';

import './oscd-scl-text-field.js';
import type { OscdSclTextField } from './OscdSclTextField.js';

function timeout(ms: number) {
  return new Promise(res => {
    setTimeout(res, ms);
  });
}

describe('Custom SCL related TextField', () => {
  describe('with nullable option being activated', () => {
    describe('and value set not to null', () => {
      let sclTextField: OscdSclTextField;
      let event: SinonSpy;

      beforeEach(async () => {
        event = spy();

        sclTextField = await fixture(
          html`<oscd-scl-text-field
            nullable
            pattern="[A-Z]+"
            .value="${'ASD'}"
            @input="${(evt: Event) => event(evt)}"
          ></oscd-scl-text-field>`,
        );
      });

      it('triggers input event with clicked nullSwitch', async () => {
        await sendMouse({ type: 'click', position: [770, 20] });

        expect(event).to.have.been.calledOnce;
      });

      it('return null with clicked nullSwitch', async () => {
        expect(sclTextField.value).to.equal('ASD');

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclTextField.updateComplete;

        expect(sclTextField.value).to.be.null;
      });

      it('saved the value on nulledSwitch toggle', async () => {
        expect(sclTextField.value).to.equal('ASD');

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclTextField.updateComplete;

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclTextField.updateComplete;

        expect(sclTextField.value).to.equal('ASD');
      });
    });

    describe('and value set to null', () => {
      let sclTextField: OscdSclTextField;
      let event: SinonSpy;

      beforeEach(async () => {
        event = spy();

        sclTextField = await fixture(
          html`<oscd-scl-text-field
            nullable
            pattern="[A-Z]+"
            .value=${null}
            @input="${(evt: Event) => event(evt)}"
          ></oscd-scl-text-field>`,
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

  describe('with unit and multiplier set', () => {
    let sclTextField: OscdSclTextField;
    let event: SinonSpy;

    beforeEach(async () => {
      event = spy();

      sclTextField = await fixture(
        html`<oscd-scl-text-field
          pattern="[A-Z]+"
          .value="${'ASD'}"
          unit="s"
          .multipliers=${[null, '', 'n', 'u', 'm']}
          .multiplier=${'m'}
          @input="${(evt: Event) => event(evt)}"
        ></oscd-scl-text-field>`,
      );

      await sclTextField.updateComplete;
    });

    it('returns both unchanged', async () => {
      expect(sclTextField.unit).to.equal('s');
      expect(sclTextField.multiplier).to.equal('m');
    });

    it('changes multiplier to null', async () => {
      await sendMouse({ type: 'click', position: [770, 20] });
      await timeout(200); // fully render menu

      await sendMouse({ type: 'click', position: [770, 80] }); // select option 1

      expect(sclTextField.unit).to.equal('s');
      expect(sclTextField.multiplier).to.equal(null);
    });

    it('changes multiplier to empty string', async () => {
      await sendMouse({ type: 'click', position: [770, 20] });
      await timeout(200); // fully render menu

      await sendMouse({ type: 'click', position: [770, 130] }); // select option 1

      expect(sclTextField.unit).to.equal('s');
      expect(sclTextField.multiplier).to.equal('');
    });

    it('changes multiplier to empty string', async () => {
      await sendMouse({ type: 'click', position: [770, 20] });
      await timeout(200); // fully render menu

      await sendMouse({ type: 'click', position: [770, 190] }); // select option 1

      expect(sclTextField.unit).to.equal('s');
      expect(sclTextField.multiplier).to.equal('n');
    });
  });

  describe('with multiplier(s) set', () => {
    let sclTextField: OscdSclTextField;
    let event: SinonSpy;

    beforeEach(async () => {
      event = spy();
      sclTextField = await fixture(
        html`<oscd-scl-text-field
          pattern="[A-Z]+"
          .value="${'ASD'}"
          .multipliers=${[null, '', 'n', 'u', 'm']}
          .multiplier=${'m'}
          @input="${(evt: Event) => event(evt)}"
        ></oscd-scl-text-field>`,
      );
    });

    it('return multiplier null', async () => {
      expect(sclTextField.multiplier).to.equal(null);
    });
  });

  describe('with valid value', () => {
    let sclTextField: OscdSclTextField;
    let event: SinonSpy;

    beforeEach(async () => {
      sclTextField = await fixture(
        html`<oscd-scl-text-field
          pattern="[A-Z]+"
          value="ASD"
        ></oscd-scl-text-field>`,
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
      await sendMouse({ type: 'click', position: [10, 10] }); // focus input
      await sendKeys({ type: '4' }); // trigger input event

      expect(event).to.have.been.calledOnce;
    });
  });

  describe('with invalid value', () => {
    let sclTextField: OscdSclTextField;
    let event: SinonSpy;

    beforeEach(async () => {
      sclTextField = await fixture(
        html`<oscd-scl-text-field
          pattern="[A-Z+]"
          value="1234"
        ></oscd-scl-text-field>`,
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
      await sendMouse({ type: 'click', position: [10, 10] }); // focus input
      await sendKeys({ type: '4' }); // trigger input event

      expect(event).to.have.been.calledOnce;
    });
  });
});
