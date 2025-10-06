import { StorybookOverrides } from './story-overrides.js';
import { html } from 'lit';
import { getStorybookHelpers } from '../getStorybookHelpers.js';
import { OscdElevation } from '@/elevation/OscdElevation.js';

import '../../../button/oscd-filled-button.js';
import '../../../list/oscd-list.js';
import '../../../list/oscd-list-item.js';

export const elevationOverrides: StorybookOverrides = {
  'oscd-elevation': {
    argTypes: {
      level: {
        name: 'Elevation Level',
        control: { type: 'number', min: 0, max: 5, step: 1 },
        description: 'Elevation level (0-5)',
      },
    },
    args: {
      level: 4,
    },
    meta: {
      render: ({ level, ...argz }) => {
        const { template } =
          getStorybookHelpers<OscdElevation>('oscd-elevation');
        return html`
          <style>
            * {
              --md-elevation-level: ${level};
            }
          </style>
          <oscd-list>
            <oscd-list-item>Item 1</oscd-list-item>
            <oscd-list-item>Item 2</oscd-list-item>
            <oscd-list-item>Item 3</oscd-list-item>
            ${template(argz)}
          </oscd-list>
        `;
      },
    },
  },
};
