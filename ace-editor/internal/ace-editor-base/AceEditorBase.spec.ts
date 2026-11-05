import { defineCE, expect, fixture, waitUntil } from '@open-wc/testing';

import '../ace.config.js';
import AceEditorBase from './AceEditorBase.js';

const tagName = defineCE(AceEditorBase);

describe('AceEditorBase value synchronization', () => {
  let element: AceEditorBase;

  beforeEach(async () => {
    element = await fixture<AceEditorBase>(`<${tagName}></${tagName}>`);
    element.value = '<root/>';
    await waitUntil(() => element.editor?.getValue() === '<root/>');
  });

  for (const firstValue of ['<root>first</root>', '']) {
    it(`preserves subsequent input after notifying ${firstValue || 'an empty buffer'}`, async () => {
      const editor = element.editor!;
      element.addEventListener(
        'change',
        () => {
          editor.insert('later');
        },
        { once: true },
      );

      editor.setValue(firstValue, -1);
      const expected = 'later' + firstValue;
      await waitUntil(
        () => element.value === expected,
        'The next input was overwritten by a stale value notification',
      );
      expect(editor.getValue()).to.equal(expected);
    });
  }

  it('still applies external property and attribute changes', async () => {
    element.value = '<property/>';
    await waitUntil(() => element.editor?.getValue() === '<property/>');
    element.setAttribute('value', '<attribute/>');
    await waitUntil(() => element.editor?.getValue() === '<attribute/>');
    element.removeAttribute('value');
    await waitUntil(() => element.editor?.getValue() === '');
  });
});
