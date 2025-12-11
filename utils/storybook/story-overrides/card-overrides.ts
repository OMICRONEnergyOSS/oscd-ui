import { StorybookOverrides } from './story-overrides.js';

import { html } from 'lit';
import { getStorybookHelpers } from '../getStorybookHelpers.js';

import { OscdFilledCard } from '../../../labs/card/OscdFilledCard.js';
import { OscdElevatedCard } from '../../../labs/card/oscd-elevated-card.js';
import { OscdOutlinedCard } from '../../../labs/card/oscd-outlined-card.js';
import '../../../icon/oscd-icon.js';

function getMeta<T>(tagName: string, title: string) {
  return {
    args: {
      textContent: title,
    },
    meta: {
      render: (args: T & { textContent: string }) => {
        const { template } = getStorybookHelpers<T>(tagName);
        return html`
          <style>
            ${tagName} {
              --md-elevation-level: 3;
              display: flex;
              align-items: center;
              justify-content: center;
              box-sizing: border-box;
              width: 300px;
              height: 200px;
            }
          </style>
          ${template(args, html`<h1>${args.textContent}</h1>`)}
        `;
      },
    },
  };
}

export const cardOverrides: StorybookOverrides = {
  'oscd-elevated-card': getMeta<OscdElevatedCard>(
    'oscd-elevated-card',
    'Elevated Card',
  ),
  'oscd-filled-card': getMeta<OscdFilledCard>(
    'oscd-filled-card',
    'Filled Card',
  ),
  'oscd-outlined-card': getMeta<OscdOutlinedCard>(
    'oscd-outlined-card',
    'Outlined Card',
  ),
};
