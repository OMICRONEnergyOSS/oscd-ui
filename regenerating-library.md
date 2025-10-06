# Regenerating this library from @material/web

This library is generated from a [Material Web](https://github.com/material-components/material-web) repository (@omicronenergy/oscd-material-web-base). It was not intended to regenerate from the Original source, but a modified fork of Material Web.

## Motivation

Material web is in maintenance mode. Changes are coming slowly and we want to keep our library up to date with the latest changes. However, we also want our component set to be fully Scoped. This creates a potential for confusion if we use the same Material Web name space (MdComponent + md-component). To solve this, we create a thin wrapper around the Material Web components, changing the names to be prefixed with oscd instead of md. Unfortunately some md components reference others. Where they do that, they register that component by calling the global customElement.define, breaking our scoping. Meaning, we need to modify our fork of Material Web to avoid this.
If we copy the material web code in its entirety, we will have a hard time keeping up with changes. Therefore, we split this into two separate repositories.

1. A fork of Material Web, where we apply any fixes we need and add special scope handling (where needed). No name changes, making it easy to pull in changes from the original Material Web as they come.
2. This repository, where we create thin wrappers around the components in our fork of Material Web, changing the names to be oscd instead of md.

## Regenerating the library

### Prerequisites

1. Local clone of the Material Web fork (`oscd-material-web-base`) repository.
2. Matching version of the Material Web repository installed as a dependency in this repository (needed for the custom-elements.json which is missing from the repo + no tooling to generate it).

### Steps

1. Currently the path to the local clone of the Material Web repository is hardcoded in the `./utils/generateOscdComponents.ts` script to `../material-web-base`. Change this path if needed.
2. Build this project (so scripts are transpiled): `npm run build`
3. Run `npm run generate-oscd` to generate the components.

### Publishing library

This library has a hard dependency on a specific version of the Material Web (fork) repository. When publishing a new version of this library, make sure the version of `oscd-material-web-base` this library is generated from, is already published and available on npm.

## Overriding

As with anything generated, there will be exceptions were you need to do things by hand. There are a few options.

### Prevent generation of specific components

Each component has a "Generated" comment at the top. If you remove this comment, the generation script will skip this file and not overwrite it.
