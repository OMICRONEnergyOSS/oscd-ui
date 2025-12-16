/** @type { import('@storybook/html').Preview } */

import '@webcomponents/scoped-custom-element-registry';
import { setCustomElementsManifest } from '@storybook/web-components-vite';
import { setStorybookHelpersConfig } from '@wc-toolkit/storybook-helpers';
import manifest from '../custom-elements.json' with { type: 'json' };

setStorybookHelpersConfig({
  /** hides the `arg ref` label on each control */
  hideArgRef: false,
  /** sets the custom type reference in the Custom Elements Manifest */
  typeRef: 'expandedType',
  /** Adds a <script> tag where a `component` variable will reference the story's component */
  setComponentVariable: true,
  /** renders default values for attributes and CSS properties */
  renderDefaultValues: false,
});

setCustomElementsManifest(manifest);

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
        order: ['Open SCD'],
      },
    },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow', // default icon
      items: [
        { value: 'light', icon: 'moon', title: 'Light Mode' },
        { value: 'dark', icon: 'sun', title: 'Dark Mode' },
      ],
      showName: false,
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;
    document.documentElement.setAttribute('data-theme', theme);
    return Story();
  },
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
