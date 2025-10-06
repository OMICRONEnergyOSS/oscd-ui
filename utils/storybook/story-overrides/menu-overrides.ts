import { StorybookOverrides } from './story-overrides.js';
import { html } from 'lit';
import { getStorybookHelpers } from '../getStorybookHelpers.js';

import { useArgs } from 'storybook/preview-api';

import '../../../menu/oscd-menu-item.js';
import '../../../button/oscd-filled-button.js';
import { OscdMenu } from '@/menu/OscdMenu.js';
import { OscdMenuItem } from '../../../menu/oscd-menu-item.js';
import { OscdSubMenu } from '@/menu/OscdSubMenu.js';

export const menuOverrides: StorybookOverrides = {
  'oscd-menu': {
    args: {
      anchor: 'menu-button',
      //explicitly set to undefined to avoid empty space being set (which breaks the menu)
      'anchor-corner': undefined,
      'menu-corner': undefined,
      open: false, // Default state of the menu
    },
    meta: {
      render: argz => {
        const [_, updateArgs] = useArgs();
        const { template } = getStorybookHelpers<OscdMenu>('oscd-menu');
        return html`
          <div style="position: relative;">
            ${template(
              {
                ...argz,
                '[@closed]': () => {
                  argz['open'] = false;
                },
              },
              html`<oscd-menu-item value="1">Option 1</oscd-menu-item>
                <oscd-menu-item value="2">Option 2</oscd-menu-item>
                <oscd-menu-item value="2">Option 3</oscd-menu-item>
                <oscd-menu-item value="2">Option 4</oscd-menu-item>
                <oscd-menu-item value="2">Option 5</oscd-menu-item>`,
            )}
            <oscd-filled-button
              id="menu-button"
              @click=${() => updateArgs({ open: !argz.open })}
              >Open Menu</oscd-filled-button
            >
          </div>
        `;
      },
    },
  },

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
