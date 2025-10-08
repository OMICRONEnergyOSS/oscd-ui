[![Tests](https://github.com/OMICRONEnergyOSS/oscd-ui/actions/workflows/test.yml/badge.svg)](https://github.com/OMICRONEnergyOSS/oscd-ui/actions/workflows/test.yml) ![NPM Version](https://img.shields.io/npm/v/@omicronenergy/oscd-ui)

# <img src="https://omicronenergyoss.github.io/oscd-ui/assets/oscd_logo.png" alt="Open SCD Logo" width="40" height="40" /> Open SCD UI Component Library

This library is intended to be used for OpenSCD Plugins. This library is intended to be used for OpenSCD Plugins. Currently this is a subset of the existing [@omicronenergy/oscd-material-web-base](https://github.com/material-components/material-web) components. We plan to add more and more of the [@omicronenergy/oscd-material-web-base](https://github.com/material-components/material-web) components as and when they are needed, adding our own as the need arrises.

The original [@omicronenergy/oscd-material-web-base](https://github.com/material-components/material-web) documentation can be found here:
https://material-web.dev/about/intro/

The predecessor [Material Web Components (mwc)](https://github.com/material-components/material-components-web) are officially depricated and the newer [Material Design components (md)](https://github.com/material-components/material-web) are in maintenance mode. So we plan to maintain this set of components moving forward no matter what happens to the [@omicronenergy/oscd-material-web-base](https://github.com/material-components/material-web) project.

For plugins which used the mwc-\* components, these used the older Material Icons (legacy) which were glyph-based and relatively simple but fixed to a style. @omicronenergy/oscd-ui components all use the newer Material Symbol font icons, which are variable fonts and far more flexible.
Use the following link in your html to make use Material icons with these components:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
  rel="stylesheet"
/>
```

The full set of available Material Symbol icons can be found here:
https://fonts.google.com/icons

## Scoped Web Components

All OSCD UI components are scoped web components, which means its possible to use plugins can use multiple different versions of @omicronenergy/oscd-ui without risk of conflict. More details on how to use these components in a scoped manor are below. General details on scoping web components can be found [here](https://open-wc.org/docs/development/scoped-elements/)

## Installation

```bash
npm install --save @omicronenergy/oscd-ui
```

## Usage

All components can be either be scoped or non-scoped (globally defined)

### Using the components globally (non-scoped)

To use the globally scoped version of the component, import the lower (kebab) case file.
e.g. If you want to use `<oscd-app-bar />` import `oscd-app-bar.js` and that is enough to have it registered.

```typescript
import { LitElement, html } from 'lit';
import '@omicronenergy/oscd-ui/oscd-app-bar.js';

export class NotScopedExample extends LitElement {
  render() {
    return html`
      <oscd-app-bar>
        <span slot="title">Open SCD Example App Bar</span>
      </oscd-app-bar>
    `;
  }
}
```

### Using the components scoped

To use the Scoped version of the components, your component must extend @open-wc's `ScopedElementMixin` and define the `scopedElements` like so:

you _must not_ import the kebab case version of the file. Instead import the Camel case version

```typescript
import { LitElement, html } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { OscdAppBar } from '@omicronenergy/oscd-ui/app-bar/OscdAppBar.js';
import { OscdIcon } from '@omicronenergy/oscd-ui/icon/OscdIcon.js';
import { OscdFilledIconButton } from '@omicronenergy/oscd-ui/button/OscdFilledIconButton.js';

export class ScopedExample extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'oscd-app-bar': OscdAppBar,
      'oscd-icon': OscdIcon,
      'oscd-filled-icon-button': OscdFilledIconButton,
    };
  }

  render() {
    return html`
      <oscd-app-bar>
        <oscd-filled-icon-button slot="actionStart">
          <oscd-icon>menu</oscd-icon>
        </oscd-filled-icon-button>
        <span slot="title"> Open SCD Example App Bar (Scoped) </span>
      </oscd-app-bar>
    `;
  }
}
```

_Note:_ You must not import the kebab-case version of the file. If you do, it will be registered globally, defeating the purpose of scoping. Notice the example above imports `OscdAppBar.js` and _NOT_ `oscd-app-bar.js`

# Component Library

The full set of components currently supported in oscd-ui can be found here:

[Browse the full Catalog](https://omicronenergyoss.github.io/oscd-ui/?path=/docs/open-scd-overview--docs)
