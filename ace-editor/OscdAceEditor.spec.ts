import { expect } from '@open-wc/testing';
import './oscd-ace-editor.js';
import type { OscdAceEditor } from './OscdAceEditor.js';

export const sclXmlDocString = `<?xml version="1.0" encoding="UTF-8"?><SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL" xmlns:ens1="http://example.org/somePreexistingExtensionNamespace">
  <Substation ens1:foo="a" name="A1" desc="test substation"></Substation>
</SCL>`;

describe('oscd-ace-editor', () => {
  let oscdAceEditor: OscdAceEditor;

  beforeEach(() => {
    oscdAceEditor = document.createElement('oscd-ace-editor') as OscdAceEditor;
    document.body.appendChild(oscdAceEditor);
    oscdAceEditor.value = sclXmlDocString;
  });

  afterEach(() => {
    document.getElementById('ace_settingsmenu')?.remove();
    oscdAceEditor.remove();
  });

  describe('value property', () => {
    it('round-trips a text value', () => {
      const text = '<Test name="A1"></Test>';
      oscdAceEditor.value = text;
      expect(oscdAceEditor.value).to.equal(text);
    });

    it('returns empty string when value is undefined', () => {
      oscdAceEditor.value = undefined;
      expect(oscdAceEditor.value).to.equal('');
    });
  });

  describe('validator property', () => {
    it('defaults to null', () => {
      expect(oscdAceEditor.validator).to.be.null;
    });

    it('can be set to a callback', () => {
      const fn = () => null;
      oscdAceEditor.validator = fn;
      expect(oscdAceEditor.validator).to.equal(fn);
    });
  });

  describe('checkValidity', () => {
    it('returns true when no validator is set', () => {
      expect(oscdAceEditor.checkValidity()).to.be.true;
    });

    it('returns true when the validator returns null', () => {
      oscdAceEditor.validator = () => null;
      expect(oscdAceEditor.checkValidity()).to.be.true;
    });

    it('returns false when the validator returns an error', () => {
      oscdAceEditor.validator = () => 'invalid';
      expect(oscdAceEditor.checkValidity()).to.be.false;
    });

    it('passes the current value to the validator', () => {
      const values: string[] = [];
      oscdAceEditor.validator = val => {
        values.push(val);
        return null;
      };
      oscdAceEditor.value = 'test content';
      oscdAceEditor.checkValidity();
      expect(values[values.length - 1]).to.equal('test content');
    });
  });

  describe('reportValidity', () => {
    it('returns true when no validator is set', () => {
      expect(oscdAceEditor.reportValidity()).to.be.true;
    });

    it('returns true when the validator returns null', () => {
      oscdAceEditor.validator = () => null;
      expect(oscdAceEditor.reportValidity()).to.be.true;
    });

    it('returns false when the validator returns an error', () => {
      oscdAceEditor.validator = () => 'bad input';
      expect(oscdAceEditor.reportValidity()).to.be.false;
    });
  });

  describe('setCustomValidity', () => {
    it('makes checkValidity unaffected (validator still used)', () => {
      oscdAceEditor.setCustomValidity('forced error');
      expect(oscdAceEditor.checkValidity()).to.be.true;
    });

    it('clears custom validity with empty string', () => {
      oscdAceEditor.setCustomValidity('forced error');
      oscdAceEditor.setCustomValidity('');
      expect(oscdAceEditor.checkValidity()).to.be.true;
    });
  });

  describe('formResetCallback', () => {
    it('clears the editor value', () => {
      oscdAceEditor.value = 'some content';
      oscdAceEditor.formResetCallback();
      expect(oscdAceEditor.value).to.equal('');
    });
  });
});
