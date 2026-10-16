import { StorybookOverrides } from './story-overrides.js';

import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import '@/icon/oscd-icon.js';

const paletteOptions = [
  'base03',
  'base02',
  'base01',
  'base00',
  'base0',
  'base1',
  'base2',
  'base3',
  'primary',
  'secondary',
  'error',
  'warning',
];

export const iconOverrides: StorybookOverrides = {
  'oscd-icon': {
    argTypes: {
      textContent: {
        name: 'Icon name',
        control: { type: 'text' },
        description:
          'Material Symbols name or an SCL icon name such as gooseIcon',
      },
      '--md-icon-size': {
        control: { type: 'number', min: 1, step: 1 },
        description:
          'Icon size in pixels, including automatically rendered SVGs',
        table: { category: 'CSS Variables' },
      },
      color: {
        name: 'Foreground',
        control: { type: 'select' },
        options: ['inherit', ...paletteOptions],
        description:
          'Palette slot used for the icon foreground, or inherit its text color',
        table: { category: 'Styles' },
      },
      background: {
        name: 'Background',
        control: { type: 'select' },
        options: ['transparent', ...paletteOptions],
        description: 'Palette slot used for the icon preview background',
        table: { category: 'Styles' },
      },
    },
    args: {
      textContent: 'edit',
      '--md-icon-size': 24,
      color: 'primary',
      background: 'base3',
    },
    meta: {
      render: args => {
        return html`
          <div
            style=${styleMap({
              padding: '16px',
              display: 'inline-flex',
              backgroundColor: paletteOptions.includes(args.background)
                ? `var(--oscd-theme-${args.background})`
                : 'transparent',
            })}
          >
            <oscd-icon
              style=${styleMap({
                '--md-icon-size': `${args['--md-icon-size']}px`,
                color: paletteOptions.includes(args.color)
                  ? `var(--oscd-theme-${args.color})`
                  : 'inherit',
              })}
              >${args.textContent}</oscd-icon
            >
          </div>
        `;
      },
    },
  },
};
