import { html } from 'lit';
import { StorybookOverrides } from './story-overrides.js';
import { getStorybookHelpers } from '../getStorybookHelpers.js';
import { OscdChipSet } from '../../../chips/OscdChipSet.js';

import '../../../chips/oscd-assist-chip.js';

export const chipOverrides: StorybookOverrides = {
  'oscd-assist-chip': {
    args: {
      textContent: 'Assist Chip',
    },
  },
  'oscd-chip-set': {
    meta: {
      render: args => {
        const { template } = getStorybookHelpers<OscdChipSet>('oscd-chip-set');
        return template(
          args,
          html` <oscd-chip-set aria-label="Assist chips">
            <oscd-assist-chip> 'Assist chip' </oscd-assist-chip>
            <oscd-assist-chip> 'Assist chip' </oscd-assist-chip>
            <oscd-assist-chip> 'Assist chip' </oscd-assist-chip>
          </oscd-chip-set>`,
        );
      },
    },
  },
  'oscd-filter-chip': {
    args: {
      textContent: 'Filter Chip',
      selected: true,
    },
  },
  'oscd-input-chip': {
    args: {
      textContent: 'Input Chip',
      selected: true,
    },
  },
  'oscd-suggestion-chip': {
    args: {
      textContent: 'Suggestion Chip',
      selected: true,
    },
  },
};
