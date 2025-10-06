import { StorybookOverrides } from './story-overrides.js';

import { html } from 'lit';
import { getStorybookHelpers } from '../getStorybookHelpers.js';
import { OscdCheckbox } from '../../../checkbox/OscdCheckbox.js';

export const checkboxOverrides: StorybookOverrides = {
  'oscd-checkbox': {
    args: {
      label: 'Checkbox Label',
      'aria-label': 'I am a checkbox',
    },
    argTypes: {
      label: {
        name: 'Label Text',
        control: { type: 'text' },
        description: 'Checkbox label text',
      },
    },
    meta: {
      render: args => {
        const { template } = getStorybookHelpers<OscdCheckbox>('oscd-checkbox');
        return html`<label>
          ${template(
            args,
            args.textContent ? html` ${args.textContent} ` : undefined,
          )}
          ${args.label}
        </label>`;
      },
    },
  },
};
