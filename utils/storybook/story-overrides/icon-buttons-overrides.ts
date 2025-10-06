import { StorybookOverrides } from './story-overrides.js';

import { html } from 'lit';
import { getStorybookHelpers } from '../getStorybookHelpers.js';
import { OscdFilledIconButton } from '@/iconbutton/OscdFilledIconButton.js';
import { OscdOutlinedIconButton } from '@/iconbutton/oscd-outlined-icon-button.js';
import { OscdFilledTonalIconButton } from '@/iconbutton/oscd-filled-tonal-icon-button.js';
import { OscdIconButton } from '@/iconbutton/oscd-icon-button.js';
import '@/icon/oscd-icon.js';

function getIconButtonMeta<T>(tagName: string) {
  return {
    argTypes: {
      textContent: {
        name: 'Material Icon Name',
        control: { type: 'text' },
        description: 'Name of the Material icon to display',
      },
    },
    args: {
      textContent: 'settings',
    },
    meta: {
      render: (args: T & { textContent: string }) => {
        const { template } = getStorybookHelpers<T>(tagName);
        return template(
          args,
          args.textContent
            ? html`<oscd-icon>${args.textContent}</oscd-icon>`
            : undefined,
        );
      },
    },
  };
}

export const iconButtonOverrides: StorybookOverrides = {
  'oscd-filled-icon-button': getIconButtonMeta<OscdFilledIconButton>(
    'oscd-filled-icon-button',
  ),
  'oscd-filled-tonal-icon-button': getIconButtonMeta<OscdFilledTonalIconButton>(
    'oscd-filled-tonal-icon-button',
  ),
  'oscd-icon-button': getIconButtonMeta<OscdIconButton>('oscd-icon-button'),
  'oscd-outlined-icon-button': getIconButtonMeta<OscdOutlinedIconButton>(
    'oscd-outlined-icon-button',
  ),
};
