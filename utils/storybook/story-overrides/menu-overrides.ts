import { StorybookOverrides } from './story-overrides.js';
import { html } from 'lit';
import { getStorybookHelpers } from '../getStorybookHelpers.js';

import '../../../menu/oscd-menu-item.js';
import { OscdMenuItem } from '../../../menu/oscd-menu-item.js';
import { OscdSubMenu } from '@/menu/OscdSubMenu.js';

export const menuOverrides: StorybookOverrides = {
  'oscd-menu-item': {
    args: {
      textContent: 'Menu Item',
    },
    meta: {
      render: ({ textContent, ...argz }) => {
        const { template } =
          getStorybookHelpers<OscdMenuItem>('oscd-menu-item');
        return html`
          <style>
            oscd-menu-item {
              --md-elevation-level: 3;
            }
          </style>

          ${template(
            argz,
            html`${textContent}<oscd-elevation></oscd-elevation>`,
          )}
        `;
      },
    },
  },

  'oscd-sub-menu': {
    args: {
      textContent: 'Sub Menu',
    },
    meta: {
      render: ({ textContent, ...argz }) => {
        const { template } = getStorybookHelpers<OscdSubMenu>('oscd-sub-menu');
        return html`
          ${template(
            argz,
            html`<oscd-menu-item value="1">Option 1</oscd-menu-item>
              <oscd-menu-item value="2">Option 2</oscd-menu-item>`,
          )}
        `;
      },
    },
  },
};
