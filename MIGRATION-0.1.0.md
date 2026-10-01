# Migration guide: oscd-ui 0.1.0

Version `0.1.0` changes styling tokens, not existing component properties,
events, or slots. Snackbar adds optional `variantLabel` for localizing its
variant prefix. Renamed or removed CSS properties have no compatibility
aliases, so old overrides stop applying.

## Theme setup

Components consume MD3 and documented component tokens; they do not read
`--oscd-theme-*` directly. To use the OpenSCD palette, opt in to the mapper
at your Lit root (omit it if you set MD3 tokens yourself):

```ts
import { css, LitElement } from 'lit';
import { oscdMd3Mappings } from '@omicronenergy/oscd-ui/oscd-md3-mappings.js';

class PluginRoot extends LitElement {
  static override styles = [oscdMd3Mappings, css``];
}
```

The mapper is a Lit `CSSResult`, not a global stylesheet. Apply it at the
root, not `*`. See the [theming guide](./THEMING.md).

## Token migrations

### Search fields and grids

| Old token/input                               | Replacement                                                                                          |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `--oscd-outlined-text-field-container-shape`  | `--md-outlined-text-field-container-shape`                                                           |
| `--mdc-theme-text-hint-on-background`         | Use the modern MD3 role `--md-sys-color-on-surface-variant` where that semantic role is intended.    |
| `--mdc-theme-on-surface` on the filter button | Style its embedded icon button with `--md-icon-button-icon-color`, or remove the redundant override. |
| `--oscd-search-field-container-color`         | Unsupported before and after this release; use supported `--md-outlined-text-field-*` tokens.        |

Search fields now use the rounded MD3 shape (32px in lists, 28px in the grid).
Tree-grid and filter-button no longer read legacy `--mdc-*` tokens.

### Action tree

| Old token                             | Replacement                                |
| ------------------------------------- | ------------------------------------------ |
| `--action-tree-background-color`      | `--oscd-action-tree-background-color`      |
| `--action-tree-font-color`            | `--oscd-action-tree-font-color`            |
| `--action-tree-horizontal-grid-color` | `--oscd-action-tree-horizontal-grid-color` |
| `--action-tree-vertical-grid-color`   | `--oscd-action-tree-vertical-grid-color`   |
| `--action-tree-fold-duration`         | `--oscd-action-tree-fold-duration`         |

### Action pane and action icon

Replace the removed `--oscd-action-{pane,icon}-theme-*` tokens:

| Old token                             | New facet token                                                                                             |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `--oscd-action-pane-theme-surface`    | `--oscd-action-pane-container-color`                                                                        |
| `--oscd-action-pane-theme-on-primary` | `--oscd-action-pane-contrasted-container-color`                                                             |
| `--oscd-action-pane-theme-primary`    | `--oscd-action-pane-outline-color`                                                                          |
| `--oscd-action-pane-theme-secondary`  | `--oscd-action-pane-secondary-outline-color`                                                                |
| `--oscd-action-pane-theme-on-surface` | `--oscd-action-pane-headline-color`                                                                         |
| `--oscd-action-pane-theme-font`       | `--oscd-action-pane-headline-font-family`                                                                   |
| `--oscd-action-icon-theme-primary`    | `--oscd-action-icon-icon-outline-color` and `--oscd-action-icon-header-container-color`                     |
| `--oscd-action-icon-theme-secondary`  | `--oscd-action-icon-secondary-icon-outline-color` and `--oscd-action-icon-secondary-header-container-color` |
| `--oscd-action-icon-theme-on-primary` | `--oscd-action-icon-header-color`                                                                           |
| `--oscd-action-icon-theme-on-surface` | `--oscd-action-icon-icon-color`, `--oscd-action-icon-action-color`, and `--oscd-action-icon-footer-color`   |
| `--oscd-action-icon-theme-font`       | `--oscd-action-icon-header-font-family` and `--oscd-action-icon-footer-font-family`                         |

```css
oscd-action-pane {
  --oscd-action-pane-container-color: var(--md-sys-color-surface);
  --oscd-action-pane-outline-color: var(--md-sys-color-primary);
}
```

`--oscd-base2` and `--oscd-text-font` are no longer read; use MD3 tokens or
the new facets.

### Ace editor

Only the custom `ace/theme/oscd` theme is affected.

| Old palette input                                                                | Replacement                                                                                                                                                                                         |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--oscd-base00`, `--oscd-base01`, `--oscd-base1`, `--oscd-base2`, `--oscd-base3` | Set the relevant editor or syntax facet: `--oscd-ace-editor-container-color`, `-text-color`, `-gutter-color`, `-gutter-text-color`, `-active-line-color`, `-selection-color`, or `-syntax-*-color`. |
| `--oscd-primary`, `--oscd-secondary`, `--oscd-error`, `--oscd-warning`           | Set the syntax facet you intend to change, such as `--oscd-ace-editor-syntax-keyword-color` or `--oscd-ace-editor-syntax-invalid-color`.                                                            |
| `--oscd-text-font-mono`                                                          | `--oscd-ace-editor-font-family`                                                                                                                                                                     |

Choose facets by what they style; palette colors have no one-to-one
replacement. See the [component manifest](./custom-elements.json).

### App bar

| Old token/input                                                   | Replacement                                                                                                                      |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `--app-bar-background-color`, `--oscd-app-bar-background-color`   | `--oscd-app-bar-container-color`                                                                                                 |
| `--app-bar-color`, `--oscd-app-bar-color`                         | Set `--oscd-app-bar-headline-color`, `--oscd-app-bar-leading-icon-color`, and/or `--oscd-app-bar-trailing-icon-color` as needed. |
| `--oscd-app-bar-elevation`                                        | `--oscd-app-bar-container-elevation`                                                                                             |
| `--oscd-app-bar-shadow-color`                                     | `--oscd-app-bar-container-shadow-color`                                                                                          |
| `--app-bar-title-font-family`, `--oscd-app-bar-title-font-family` | `--oscd-app-bar-headline-font`                                                                                                   |
| `--app-bar-title-font-size`, `--oscd-app-bar-title-font-size`     | `--oscd-app-bar-headline-size`                                                                                                   |
| `--app-bar-title-font-weight`, `--oscd-app-bar-title-font-weight` | `--oscd-app-bar-headline-weight`                                                                                                 |
| `--app-bar-title-line-height`, `--oscd-app-bar-title-line-height` | `--oscd-app-bar-headline-line-height`                                                                                            |
| `--app-bar-height`                                                | `--oscd-app-bar-container-height` (defaults to `64px`)                                                                           |
| `--app-bar-small-height`                                          | `--oscd-app-bar-container-small-height` (defaults to `64px`)                                                                     |

The main row defaults to the MD3 small app bar (64px, surface, level-0).
Both height tokens apply at desktop and at viewport widths up to 599px
respectively. Shells with established non-MD3 heights should bridge their
public tokens to these facets to preserve their existing layout.
Set `scrolled` for surface-container and level-2; the sub-bar is unchanged.

### Tree and tree item

The row-level value is now private `--_level`; do not set
`--oscd-tree-row-level`. The tree calculates indentation from its data and
`--oscd-tree-indent-step`.

In the table, braces list token-name alternatives; for example,
`--oscd-tree-item-headline-{color,font}` means both literal names.

| Removed alias                                                                                                        | Replacement                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `--oscd-tree-row-level`                                                                                              | No replacement; row depth is private tree state. Use `--oscd-tree-indent-step` to control indentation globally.              |
| `--oscd-tree-item-headline-{color,font,size,weight,line-height}`                                                     | Corresponding `--md-list-item-label-text-*` tokens                                                                           |
| `--oscd-tree-item-supporting-text-{color,font,size,weight,line-height}`                                              | Corresponding `--md-list-item-supporting-text-*` tokens                                                                      |
| `--oscd-tree-item-font-family`, `--oscd-tree-item-font-size`                                                         | Set the relevant `--md-list-item-label-text-*` and `--md-list-item-supporting-text-*` typography tokens.                     |
| `--oscd-tree-item-min-height`                                                                                        | `--md-list-item-one-line-container-height`                                                                                   |
| `--oscd-tree-item-disabled-opacity`                                                                                  | `--md-list-item-disabled-opacity`                                                                                            |
| `--oscd-tree-item-leading-icon-color`, `--oscd-tree-item-trailing-icon-color`                                        | `--md-list-item-leading-icon-color`, `--md-list-item-trailing-icon-color`                                                    |
| `--oscd-tree-row-focus-ring-{color,width,duration}`                                                                  | `--md-focus-ring-color`, `--md-focus-ring-width`, `--md-focus-ring-duration`                                                 |
| `--oscd-tree-row-{hover,pressed}-state-layer-{color,opacity}`                                                        | Corresponding `--md-ripple-hover-*` and `--md-ripple-pressed-*` tokens                                                       |
| `--oscd-tree-accessory-icon-size`, `--oscd-tree-selection-checkbox-{icon-size,size}`, `--oscd-tree-toggle-icon-size` | No one-to-one tree token remains; customize the accessory, checkbox, or icon through its own supported component API/tokens. |

Other documented tree facets remain supported. Set MD list-item tokens on
`oscd-tree-item` or an ancestor; custom properties inherit into its shadow
tree.

### Snackbar

| Old token                                                      | Replacement or change                                                                                            |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `--oscd-snackbar-elevation-level`                              | `--oscd-snackbar-container-elevation`                                                                            |
| `--oscd-snackbar-text-color`                                   | `--oscd-snackbar-supporting-text-color`                                                                          |
| `--oscd-snackbar-{info,success,warning,error}-text-color`      | `--oscd-snackbar-{info,success,warning,error}-supporting-text-color`                                             |
| Existing per-variant `container-color` and `icon-color` tokens | Names remain; defaults and variant behavior changed as described below.                                          |
| Per-variant action-label and close-icon overrides              | New `--oscd-snackbar-<variant>-action-label-text-color` and `--oscd-snackbar-<variant>-close-icon-color` tokens. |

Info, success, and warning default to inverse-surface; error uses MD3
error-container roles. Each variant exposes container, text, icon, action,
and close-icon colors. Set all five for a colored container. `variantLabel`
localizes the hidden prefix; error remains an alert, others status messages.

Example colors (consumer choices, not palette slots or MD3 roles):

```html
<div
  style="
    --oscd-snackbar-info-container-color: #1f74b0;
    --oscd-snackbar-info-supporting-text-color: #fdf6e3;
    --oscd-snackbar-info-icon-color: #fdf6e3;
    --oscd-snackbar-info-action-label-text-color: #fdf6e3;
    --oscd-snackbar-info-close-icon-color: #fdf6e3;
    --oscd-snackbar-warning-container-color: #b58900;
    --oscd-snackbar-warning-supporting-text-color: #002b36;
    --oscd-snackbar-warning-icon-color: #002b36;
    --oscd-snackbar-warning-action-label-text-color: #002b36;
    --oscd-snackbar-warning-close-icon-color: #002b36;
    --oscd-snackbar-success-container-color: #859900;
    --oscd-snackbar-success-supporting-text-color: #002b36;
    --oscd-snackbar-success-icon-color: #002b36;
    --oscd-snackbar-success-action-label-text-color: #002b36;
    --oscd-snackbar-success-close-icon-color: #002b36;
  "
>
  <oscd-snackbar></oscd-snackbar>
</div>
```

### Navigation drawer header

Replace the removed header aliases with embedded list-item tokens:

| Removed alias                                                                    | Replacement                                                                                                                                   |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `--oscd-navigation-drawer-header-background-color`                               | No replacement token: the old alias was not forwarded to a supported list-item token. Style a surrounding drawer surface/container if needed. |
| `--oscd-navigation-drawer-header-color`                                          | `--md-list-item-label-text-color`                                                                                                             |
| `--oscd-navigation-drawer-header-text-{font,size,weight,line-height}`            | Corresponding `--md-list-item-label-text-*` tokens                                                                                            |
| `--oscd-navigation-drawer-header-supporting-text-{font,size,weight,line-height}` | Corresponding `--md-list-item-supporting-text-*` tokens                                                                                       |

Other visual changes: corrected MD3 fallbacks; action pane/icon elevation now
uses `oscd-elevation`; tree and drawer header styling follows embedded MD
component tokens.

## Coming from `@openenergytools/oscd-action-pane` or `-icon`

Use the action pane/icon mappings above for the shared `-theme-*` tokens.
Replace the unsupported `--oscd-action-icon-theme-surface` with the relevant
documented facet or remove it.

See the [theming guide](./THEMING.md) and
[component manifest](./custom-elements.json) for supported tokens.
