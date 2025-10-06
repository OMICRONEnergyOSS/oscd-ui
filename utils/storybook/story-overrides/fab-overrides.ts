import { html } from 'lit';
import { getStorybookHelpers } from '../getStorybookHelpers.js';
import { StorybookOverrides } from './story-overrides.js';

import { OscdFab } from '@/fab/OscdFab.js';
import { OscdBrandedFab } from '@/fab/OscdBrandedFab.js';
import '../../../icon/oscd-icon.js';

export const fabOverrides: StorybookOverrides = {
  'oscd-branded-fab': {
    argTypes: {
      label: {
        name: 'Label Text',
        control: { type: 'text' },
        description: 'Label text shown next to the FAB',
      },
      variant: {
        options: ['surface', 'primary', 'secondary', 'tertiary'],
        control: { type: 'select' },
      },
      icon: {
        name: 'Icon Name',
        control: { type: 'text' },
        description: 'Material Icon name',
      },
    },
    args: {
      label: 'Branded Fab Button',
      icon: 'edit',
      variant: 'primary',
    },
    meta: {
      render: ({ label, icon, ...argz }) => {
        const { template } =
          getStorybookHelpers<OscdBrandedFab>('oscd-branded-fab');
        return html`
          <style>
            label {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 16px;
            }
          </style>
          <label>
            <span aria-hidden="true">${label}</span>
            ${template(argz, html`<oscd-icon slot="icon">${icon}</oscd-icon>`)}
          </label>
        `;
      },
    },
  },

  'oscd-fab': {
    argTypes: {
      label: {
        name: 'Label Text',
        control: { type: 'text' },
        description: 'Label text shown next to the FAB',
      },
      variant: {
        options: ['surface', 'primary', 'secondary', 'tertiary'],
        control: { type: 'select' },
      },
      icon: {
        name: 'Icon Name',
        control: { type: 'text' },
        description: 'Material Icon name',
      },
    },
    args: {
      label: 'Fab Button',
      icon: 'edit',
      variant: 'primary',
    },
    meta: {
      render: ({ label, icon, ...argz }) => {
        const { template } = getStorybookHelpers<OscdFab>('oscd-fab');
        return html`
          <style>
            label {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 16px;
            }
          </style>
          <label>
            <span aria-hidden="true">${label}</span>
            ${template(argz, html`<oscd-icon slot="icon">${icon}</oscd-icon>`)}
          </label>
        `;
      },
    },
  },
};
