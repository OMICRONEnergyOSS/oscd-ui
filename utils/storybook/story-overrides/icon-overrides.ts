import { StorybookOverrides } from './story-overrides.js';

import { html } from 'lit';
import { getStorybookHelpers } from '../getStorybookHelpers.js';
import { OscdIcon } from '@/icon/oscd-icon.js';

export const iconOverrides: StorybookOverrides = {
  'oscd-icon': {
    argTypes: {
      textContent: {
        name: 'Material Icon Name',
        control: { type: 'text' },
        description: 'Name of the Material icon to display',
      },
    },
    args: {
      textContent: 'edit',
    },
    meta: {
      render: args => {
        const { template } = getStorybookHelpers<OscdIcon>('oscd-icon');
        return template(
          args,
          args.textContent ? html` ${args.textContent} ` : undefined,
        );
      },
    },
  },
};
