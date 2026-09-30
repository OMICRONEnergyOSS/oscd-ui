/** @type { import('@storybook/html').Preview } */

import '@webcomponents/scoped-custom-element-registry';
import { setCustomElementsManifest } from '@storybook/web-components-vite';
import { setStorybookHelpersConfig } from '@wc-toolkit/storybook-helpers';
import { addons } from 'storybook/preview-api';
import { GLOBALS_UPDATED } from 'storybook/internal/core-events';
import { html } from 'lit';
import manifest from '../custom-elements.json' with { type: 'json' };
import './palettes/solarized-light.css';
import './palettes/solarized-dark.css';
import './palettes/omicron.css';
import './theme-preview.js';

setStorybookHelpersConfig({
  /** hides the `arg ref` label on each control */
  hideArgRef: false,
  /** sets the custom type reference in the Custom Elements Manifest */
  typeRef: 'expandedType',
  /** Adds a <script> tag where a `component` variable will reference the story's component */
  setComponentVariable: false,
  /** renders default values for attributes and CSS properties */
  renderDefaultValues: false,
});

setCustomElementsManifest(manifest);

addons.getChannel().on(GLOBALS_UPDATED, ({ globals }) => {
  document.documentElement.setAttribute('data-palette', globals.palette);
});

const _customElementsDefine = window.customElements.define;
window.customElements.define = (name, cl, conf) => {
  if (name.startsWith('md-')) {
    console.trace(`Defining ${name}...`);
  }
  if (!customElements.get(name)) {
    try {
      _customElementsDefine.call(window.customElements, name, cl, conf);
    } catch (e) {
      console.warn(e);
    }
  }
};

export const parameters = {
  controls: {
    expanded: true,
  },
  options: {
    storySort: {
      order: ['Open SCD', 'Foundations'],
    },
  },
};

export const globalTypes = {
  palette: {
    name: 'Palette',
    description: 'Preview palette',
    defaultValue: 'solarized-light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'solarized-light', title: 'Solarized light' },
        { value: 'solarized-dark', title: 'Solarized dark' },
        { value: 'omicron', title: 'Omicron' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  Story => html`
    <style>
      :root {
        --md-sys-color-surface: var(--oscd-theme-base3, #fef7ff);
      }

      #storybook-root, .docs-story {
        background-color: var(--md-sys-color-surface);
      }
    </style>
    <oscd-storybook-theme>${Story()}</oscd-storybook-theme>
  `,
];

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
