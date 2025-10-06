import { fabOverrides } from './fab-overrides.js';
import { chipOverrides } from './chip-overrides.js';

import { Meta } from '@storybook/web-components-vite';
import { buttonOverrides } from './button-overrides.js';
import { checkboxOverrides } from './checkbox-overrides.js';
import { dividerOverrides } from './divider-overrides.js';
import { elevationOverrides } from './elevation-overrides.js';
import { dialogOverrides } from './dialog-overrides.js';
import { textfieldOverrides } from './text-field-overrides.js';
import { iconOverrides } from './icon-overrides.js';
import { iconButtonOverrides } from './icon-buttons-overrides.js';
import { cardOverrides } from './card-overrides.js';
import { listOverrides } from './list-overrides.js';
import { menuOverrides } from './menu-overrides.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type StorybookOverrides = {
  [key: string]: {
    args?: Partial<Record<string, any>>;
    argTypes?: Partial<Record<keyof Meta<any>['argTypes'], any>>;
    meta?: Partial<Meta<any>>;
  };
};

export const storybookOverrides: StorybookOverrides = {
  ...buttonOverrides,
  ...checkboxOverrides,
  ...chipOverrides,
  ...dialogOverrides,
  ...dividerOverrides,
  ...elevationOverrides,
  ...fabOverrides,
  ...textfieldOverrides,
  ...iconOverrides,
  ...iconButtonOverrides,
  ...cardOverrides,
  ...listOverrides,
  ...menuOverrides,
};
