import { StorybookOverrides } from './story-overrides.js';

import { OscdDivider } from '@/divider/OscdDivider.js';
import { html } from 'lit';
import { getStorybookHelpers } from '../getStorybookHelpers.js';

export const dividerOverrides: StorybookOverrides = {
  'oscd-divider': {
    meta: {
      render: args => {
        const { template } = getStorybookHelpers<OscdDivider>('oscd-divider');
        return html`<div
          style="width: 300px; background-color: var(--oscd-base3);"
        >
          <p style="padding: 16px;">Content above the divider</p>
          ${template(
            args,
            args.textContent ? html` ${args.textContent} ` : undefined,
          )}
          <p style="padding: 16px;">Content below the divider</p>
        </div>`;
      },
    },
  },
};
