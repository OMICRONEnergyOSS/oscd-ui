import { StorybookOverrides } from './story-overrides.js';
import { html } from 'lit';
import { getStorybookHelpers } from '../getStorybookHelpers.js';

import { OscdListItem } from '../../../list/OscdListItem.js';
import { OscdList } from '../../../list/OscdList.js';

import '../../../elevation/oscd-elevation.js';

export const listOverrides: StorybookOverrides = {
  'oscd-list': {
    meta: {
      render: args => {
        const { template } = getStorybookHelpers<OscdList>('oscd-list');
        return html`
          <style>
            oscd-list {
              --md-elevation-level: 3;
            }
          </style>
          ${template(
            args,
            html` <oscd-elevation></oscd-elevation>
              <oscd-list-item>Item 1</oscd-list-item>
              <oscd-list-item>Item 2</oscd-list-item>
              <oscd-list-item>Item 3</oscd-list-item>`,
          )}
        `;
      },
    },
  },

  'oscd-list-item': {
    args: {
      textContent: 'List Item',
    },
    meta: {
      render: ({ textContent, ...argz }) => {
        const { template } =
          getStorybookHelpers<OscdListItem>('oscd-list-item');
        return html`
          <style>
            oscd-list-item {
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
};
