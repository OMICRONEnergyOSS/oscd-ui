# Design Token & Theming Refactoring

Worklog for straightening out theming in `@omicronenergy/oscd-ui`. It records
the agreed principles, the current state (findings), and the action plan.
Update it as work lands.

## Context

`oscd-ui` is, for all intents and purposes, Material Web (MD3) with scoping
added (via the `@omicronenergy/oscd-material-web-base` fork), plus a handful of
home-grown components. Over time these home-grown components and the Storybook
setup accumulated:

- the Omicron Academy palette as the de-facto default,
- a mix of `--md-*`, invented `--oscd-*`, legacy `--mdc-*` and unprefixed
  private tokens,
- an `--oscd-theme-*` → `--oscd-*` → `--md-sys-*` mapping that is duplicated
  (and incomplete) in several places.

`oscd-shell` has since been cleaned up (Solarized by default, layered tokens,
`:host`-only mapping, see `stee-re/oscd-shell/THEMING.md`). This document
applies the same discipline to `oscd-ui`, adjusted for the fact that `oscd-ui`
is a _component library_, not an application.

## Principles (agreed)

### P0 — MD3 is the system; Solarized slots are the public palette contract

`oscd-ui` is an MD3 component library. MD3 defines the semantic meaning of
roles and component defaults, and recommends contrast levels for role pairs.
The established Solarized-named `--oscd-theme-*` tokens remain the public
OpenSCD palette contract: no new general palette slots are invented.

- A Solarized palette file holds private reference values such as
  `--_solarized-base00` and `--_solarized-base0`. Light and dark modes assign
  those references to the same public `--oscd-theme-*` slots according to
  their documented purpose. For example, `--oscd-theme-base00` always means
  the normal readable foreground; it may refer to Solarized `base00` in light
  mode and Solarized `base0` in dark mode.
- The public slot's purpose is stable even when its underlying Solarized
  reference changes. Consumers use only `--oscd-theme-*`; the private
  `--_solarized-*` references are implementation details explained by the
  palette file's comments.
- The MD3 mapper is a pure, mode-independent translation from those public
  slots to `--md-sys-*` roles. It contains neither palette values nor colour
  derivation. The active palette supplies the correct public values first.
- Solarized is the reference implementation palette, not the only valid
  palette and not a guarantee that every use meets MD3 contrast
  recommendations. Review its resolved role pairs and flag where they do
  not meet the relevant recommendation; this review informs consumers but
  does not gate palettes or require changing the shared Solarized values.
- Distros may use the reference palette as-is, adjust it, or supply their own.
  oscd-ui does not validate or enforce contrast for consumer palettes.
  Consumers are responsible for the accessibility of palettes they choose.

### P1 — `--md-*` is the currency; mapping is the consumer's job

A consumer who knows MD3 must be able to use `oscd-ui` as a drop-in
replacement. Swapping `@material/web` for `oscd-ui` (ignoring our extra
components) must not change the appearance.

- Components read **only** `--md-sys-*`/`--md-ref-*` system tokens, their own
  component tokens, and the component tokens of the MD3 components they embed.
- Components **never** read `--oscd-theme-*` or the palette layer
  (`--oscd-primary`, `--oscd-base*`, `--oscd-text-font`, …). Capturing a
  distro palette and mapping it onto `--md-sys-*` belongs to the consumer
  (shell, distro, plugin root, or our own Storybook).
- `oscd-ui` does not automatically apply a palette or mapping. It exports
  **opt-in Lit MD3 mappings** that map the established `--oscd-theme-*`
  palette onto the `--md-sys-*` roles its components use. oscd-ui ships
  palettes only for **its Storybook** (see P6), not as part of its library API.
- **Who maps (ecosystem, decided 2026-09-30):** `oscd-api` remains
  framework-neutral and documents only the canonical `--oscd-theme-*` palette
  contract — what each slot means, no Material Web concept. `oscd-ui` owns
  the normative Material/MD3 adapter table (each `--md-sys-color-*` role
  oscd-ui's components actually read, the established palette slot it maps
  from, its MD3 baseline fallback, and relevant foreground/background notes)
  and the Solarized reference appendix, since both are Material-Web-specific
  detail with no place in a framework-neutral document.   `oscd-ui` owns
  optional Lit mappings that directly implement that table, scoped to the
  roles its components actually read (27 today: 26 from imported styles plus
  the snackbar's `error-container`, see F-A8/F-D3), not the full MD3
  scheme. Shells and plugins that use oscd-ui may import the adapter at their
  root rather than maintaining copies. The distro API remains
  `--oscd-theme-*`; setting only `--md-sys-*` on the shell is unsupported
  when a plugin opts into the mapper, because it would otherwise overwrite
  those values.

### P2 — The token ladder for every styleable property

Walk down the ladder; stop at the first rung that fits.

1. **MD3 system token** — `--md-sys-color-*`, `-typescale-*`, `-shape-*`,
   `-elevation-*`, `-motion-*`, `-state-*`. The first choice for semantic
   colour, typography, shape, elevation and motion.
2. **Embedded MD3 component token** — if our component embeds an MD3 element
   (ripple, focus ring, list item, outlined text field, checkbox), consumers
   style it with that element's own `--md-<comp>-*` tokens. Don't re-wrap them
   in an `--oscd-*` alias.
3. **`--oscd-<component>-*`** — our own token, for anything rungs 1–2 don't
   cover: every facet of a home-grown component that isn't an embedded MD3
   element. The prefix makes it obvious the token is ours, not MD3's. Follow
   the MD3 pattern: **one token per facet**. Default to the closest MD3 system
   token when it expresses the same decision; otherwise use the relevant MD3
   spec or literal component default. This keeps per-component overrides
   possible, as MD3 users expect, and every token is documented with
   `@cssprop`. A rung-3 token must
   **never** be an alias of an embedded MD3 component's token (that's two
   public names for one facet). It also must never re-alias a system role
   without a component-specific facet behind it (like
   `--oscd-action-pane-theme-primary`).
   - We **don't** adopt `--md-*` names that Material Web never implemented.
     The `--md-*` namespace stays exactly what Material Web ships (decided
     2026-09-28).
   - Where the MD3 spec defines tokens for an equivalent component (shipped
     in `@omicronenergy/oscd-material-web-base/tokens/versions/v0_192/`:
     `snackbar`, `top-app-bar-*`, `search-bar`), borrow its **facet names**
     and use its defaults as the reference. For example, the spec's
     `md.comp.snackbar.container-color` becomes `--oscd-snackbar-container-color`,
     defaulting to a sys role. Facets the spec lacks (tree indent step, line
     clamp, z-index, success/warning variants) follow the same
     `<element>-<state>-<property>` shape.

### P3 — Naming

- Public component tokens: `--md-<comp>-<facet>` (rung 2, only as shipped by
  Material Web) or `--oscd-<component>-<facet>` (rung 3). Never insert `-theme-` into a
  component token (`--oscd-action-pane-theme-primary`), because it collides
  with the distro `--oscd-theme-*` namespace.
- Private (internal) tokens: `--_<facet>`, which is the convention MD3 itself
  uses (`--_container-color`). Never use unprefixed private names like
  `--app-bar-height`: they leak across shadow boundaries and couple to
  whatever an ancestor happens to declare (see F-C3).
- Per-instance values set inline by the component (e.g. a row's level) are
  private: `--_level`, not `--oscd-tree-row-level`.

### P4 — Fallbacks

- The last fallback of every system-token read is the **MD3 baseline value**
  (e.g. `var(--md-sys-color-primary, #6750a4)`). Never use a brand colour.
  Without a mapping, oscd-ui looks exactly like stock Material.
- The literal fallback is the MD3 baseline value **of the same token being
  read**: `var(--md-sys-color-on-primary, #fff)`, not `#1d1b20` (which is
  on-surface's baseline). Mismatched fallbacks produce unreadable
  foreground/background pairs under a partial mapping (e.g. a consumer sets
  only `primary`), see F-D1.
- Don't hand-roll shadows (`rgba(0,0,0,.14)…`); use `oscd-elevation` or
  `--md-sys-elevation-*`.

### P5 — Where tokens are declared

- A component's defaults for its **own public** tokens are applied at the
  point of use (`var(--oscd-tree-indent-step, 24px)`), not by declaring the
  public token on `:host`. A declaration on `:host` takes precedence over an
  inherited value; a consumer must then target the component element itself
  to override it. Point-of-use fallbacks preserve ordinary inheritance.
- Never declare tokens on `*`.
- Re-theming a subtree means setting system colours on the element being
  styled (as in the shell's `THEMING.md`), never on an element whose own
  tokens derive from the system token being set (reference cycle → the value
  becomes invalid → Material purple).

### P6 — Storybook consumes the optional MD3 mapper

Storybook is a consumer like any other. It ships a set of palettes
(Solarized light as the default, Solarized dark, Omicron) as
`--oscd-theme-*` values on `:root`, switchable from the toolbar. Its Lit
preview host includes the oscd-ui mappings first in `static styles`, producing
the 27 roles oscd-ui actually reads for that host and its descendants.

### P7 — Document supported component overrides in TSDoc

A component's TSDoc documents the public component-level overrides it supports,
as `@cssprop`, so they land in `custom-elements.json`, Storybook and IDE
tooling. It is not an inventory of all inherited MD3 roles used internally.

- Rung 3 (`--oscd-<component>-*`): every supported public token, with its default
  (`@cssprop [--oscd-x-y=var(--md-sys-color-surface)] – description`).
- Rung 2 (embedded MD3 component tokens the component deliberately
  re-exposes as a customization point, e.g. `--md-icon-button-icon-color`):
  listed, with a note that they belong to the embedded component.
- Rung 1 (`--md-sys-*` roles) and private `--_*` values are not repeated per
  component. The MD3 documentation is their contract; A-04/A-15 describe the
  mapper's role coverage.
- Nothing is documented unless it is a supported public override (F-C7).
  Removed tokens leave the docs in the same change (no deprecation window, Q3).

## Findings

IDs are referenced by the action items below.

### A. Storybook wiring

| ID   | Finding                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Where                                                                                                             |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| F-A1 | The Omicron palette + full `--oscd-theme-*`→`--oscd-*`→`--md-sys-*`/`--mdc-*` mapping is hard-coded on `*` in the preview head. The `*` re-declares every token on every element, so no story or subtree can override it by inheritance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `.storybook/preview-head.html:13`                                                                                 |
| F-A2 | `--oscd-theme-error: var(--oscd-theme-error, …)` is a self-reference. On `*` it makes `--oscd-theme-error` guaranteed-invalid on every element, so a distro value can never take effect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `.storybook/preview-head.html:72`, `.storybook/theming.css:60`                                                    |
| F-A3 | `.storybook/theming.css` duplicates the head block and isn't referenced anywhere.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `.storybook/theming.css`                                                                                          |
| F-A4 | `themingDecorator`, `themingArgs` and `themingArgTypes` aren't used by any story. They also describe a third mapping (e.g. `outline-variant`→`base0`, `on-surface-variant`→`base3`) that disagrees with the head block. Every arg is described as "App Bar Text Color".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `utils/storybook/themingDecorator.ts`                                                                             |
| F-A5 | The light/dark toolbar toggle sets `data-theme` on `<html>`, but nothing reads it. The icons are swapped (light→moon).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `.storybook/preview.js:53-66`                                                                                     |
| F-A6 | Duplicate declarations and stray tokens in the head block: `--secondary`; `--oscd-text-font`/`-icon-font`/`-mono` declared twice; `--oscd-icon-font: 'Material Icons'`, although the library uses Material Symbols.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `.storybook/preview-head.html:71,83,139`                                                                          |
| F-A7 | Stories reach into the palette layer: `var(--oscd-base3)`, `var(--oscd-theme-primary)`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `utils/storybook/story-overrides/divider-overrides.ts:13`, `navigation-drawer/OscdNavigationDrawer.stories.ts:48` |
| F-A8 | The component styles oscd-ui imports from oscd-material-web-base@2.4.2 read **26** distinct `--md-sys-color-*` roles. oscd-ui's own snackbar also reads `error-container`, bringing the adapter target to **27** distinct roles. The shell mapping sets 17 roles, but only 14 of the imported 26: it also sets `on-secondary`, `surface-variant` and `surface-bright`, which the base doesn't read. That leaves **12 imported-style roles unmapped**, falling back to baseline purple/grey: `on-secondary-container` (85 reads), `on-error-container` (18), `outline` (17), `shadow` (14), `on-primary-container` (14), `on-tertiary-container` (10), `surface-container-low` (7), `primary-container` (6), `inverse-on-surface` (6), `tertiary-container` (3), `tertiary` (2), `inverse-surface` (1). The full MD3 scheme defines 47 roles (all appear in the package's token sources); 20 of those are unused by today's imported and own styles. | `oscd-material-web-base/**/*-styles.js` (imported ones); `snackbar/OscdSnackbar.ts`; `stee-re/oscd-shell/src/oscd-shell-design-tokens.ts` |
| F-A9 | Existing mappings bend roles: `outline-variant`→`primary` (outline-variant is for dividers), `surface-variant`→`surface`, every `surface-container-*`→`base3` (so there's no tonal separation).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | shell tokens, preview head                                                                                        |

### B. Components reading the palette layer or legacy tokens (violates P1)

| ID   | Component                               | Finding                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| F-B1 | `ace-editor/internal/ace-theme-oscd.ts` | ~48 reads of `--oscd-base*`, `--oscd-primary/secondary/error/warning`, `--oscd-text-font-mono`, with Omicron hex fallbacks. The primary/secondary fallbacks are swapped relative to the Omicron palette (`--oscd-secondary, #0b335b`; `--oscd-primary, #2485e5`), and one is `--oscd-base00, white`. The JSDoc claims colours come from `--oscd-theme*` (`OscdAceEditor.ts:28`). Without a consumer mapping the editor is Omicron-branded. |
| F-B2 | `action-pane/OscdActionPane.ts`         | `on-primary` falls back to `--oscd-base2` (not `--md-sys-color-on-primary`); font falls back to `--oscd-text-font`; hand-rolled shadow.                                                                                                                                                                                                                                                                                                    |
| F-B3 | `action-icon/OscdActionIcon.ts`         | Font falls back to `--oscd-text-font`; the `@cssprop` docs cite a non-existent `--md-sys-color-font`; three hand-rolled shadows.                                                                                                                                                                                                                                                                                                           |
| F-B4 | `tree-grid/OscdTreeGrid.ts:528`         | Reads the legacy MWC token `--mdc-theme-text-hint-on-background`.                                                                                                                                                                                                                                                                                                                                                                          |
| F-B5 | `action-tree/OscdActionTree.ts:281-314` | Undocumented `--action-tree-*` tokens with `#000000`/`#eee`/`#ddd` fallbacks, so it breaks in dark palettes. It sets `--md-sys-color-on-surface-variant` from `--action-tree-font-color` on `:host` (no cycle today, but it's fragile).                                                                                                                                                                                                    |
| F-B6 | `filter-button/OscdFilterButton.ts:93`  | `oscd-icon-button { color: var(--mdc-theme-on-surface) }` reads a legacy MWC token with no fallback. It's also ineffective: the icon button's shadow `.standard` rule sets `color: var(--_icon-color)` (from `--md-icon-button-icon-color`, default `on-surface-variant`), which overrides the inherited host `color`.                                                                                                                     |

### C. Token naming, dead tokens and leaks (violates P3/P5)

| ID   | Finding                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Where                                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| F-C1 | `--oscd-action-pane-theme-*` / `--oscd-action-icon-theme-*` collide with the distro `--oscd-theme-*` namespace, and just re-alias `--md-sys-color-*` roles (rung 1 already covers them).                                                                                                                                                                                                                                                                                                                                                                               | `OscdActionPane.ts:32-37`, `OscdActionIcon.ts:12-16`                                                            |
| F-C2 | `--oscd-outlined-text-field-container-shape` is set in three places and read nowhere. The real token is `--md-outlined-text-field-container-shape`, so the rounded search fields don't work.                                                                                                                                                                                                                                                                                                                                                                           | `action-list/OscdActionList.ts:251`, `selection-list/OscdSelectionList.ts:135`, `tree-grid/OscdTreeGrid.ts:496` |
| F-C3 | `oscd-app-bar` reads `--app-bar-height`/`--app-bar-small-height` without declaring them, so they're effectively public but unprefixed. oscd-shell _also_ declares `--app-bar-height` on its `:host` for its own use, and oscd-app-bar silently inherits that. It's accidental coupling, which shell's THEMING.md documents as "54px (oscd-ui default)".                                                                                                                                                                                                                | `app-bar/OscdAppBar.ts:105,110`; `oscd-shell/src/oscd-shell-design-tokens.ts:138-139`                           |
| F-C4 | Private tokens without `--_`: `--app-bar-*`, `--navigation-drawer-header-*`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `OscdAppBar.ts:56-86`, `OscdNavigationDrawerHeader.ts:12-19`                                                    |
| F-C5 | `oscd-tree` declares its own public tokens (`--oscd-tree-indent-step`, `-toggle-size`, `-toggle-icon-size`, `-row-height`, `-row-shape`) on `:host`, so they can't be inherited from an ancestor/theme root. The inline per-row `--oscd-tree-row-level` leaks a private value into the public namespace.                                                                                                                                                                                                                                                               | `tree/internal/Tree.ts:825,903-907`                                                                             |
| F-C6 | Tree token aliasing: of its ~50 `--oscd-tree-*` tokens, many are pure aliases of embedded MD3 tokens (`--oscd-tree-item-headline-*` → `--md-list-item-label-text-*`, `--oscd-tree-row-focus-ring-*` → `--md-focus-ring-*`, `--oscd-tree-row-*-state-layer-*` → `--md-ripple-*`), so there are two public names per facet. The count itself isn't the issue.                                                                                                                                                                                                            | `tree/internal/Tree.ts`, `tree/internal/TreeItem.ts`                                                            |
| F-C7 | Resolved: the wrapper TSDoc had promised unsupported `--oscd-search-field-container-color`; that promise is removed. Separately, consumers set `--oscd-action-icon-theme-surface`, which doesn't exist.                                                                                                                                                                                                                                                                                                                                                              | `search-field/OscdOutlinedSearchField.ts`; `oscd-editor-communication`                                         |
| F-C8 | Supported public component tokens are read but not documented as `@cssprop`, so they are missing from `custom-elements.json`, Storybook and IDE tooling. Counted from source on 2026-09-29: `oscd-tree` 53 of 53 undocumented; `oscd-navigation-drawer-header` 10 of 10; `oscd-app-bar` 8 of 16 (the `--app-bar-*` aliases); `oscd-action-tree` 5 of 5; `oscd-search-field` 1 of 1. Snackbar, action-pane and action-icon are complete but document the tokens this plan renames. Wrapped MD3 components document an MD3 component token only when they deliberately support it as an override. | per-component `@cssprop` blocks; `custom-elements.json`                                                         |

### D. Wrong fallbacks and semantics (violates P4 / spec reference)

| ID   | Finding                                                                                                                                                                                                                                                                                           | Where                                                         |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| F-D1 | Fallbacks are inverted/mismatched: `var(--md-sys-color-on-primary, #1d1b20)` and `var(--md-sys-color-primary, #fff)` (baseline is `#fff` / `#6750a4`).                                                                                                                                            | `OscdAppBar.ts:56-62`, `OscdNavigationDrawerHeader.ts:12-19`  |
| F-D2 | App bar: the title uses `body-large` typescale, where the MD3 top-app-bar uses `title-large`. Elevation is 3, where spec small top-app-bar is level 0. The container is `primary`, where spec is `surface`. Primary is the _OpenSCD_ look, which, per P1, a consumer should set, not the library. | `OscdAppBar.ts:51-86`; spec `_md-comp-top-app-bar-small.scss` |
| F-D3 | Snackbar semantics hijack MD3 roles: _warning_ → `error-container`, _success_ → `tertiary-container`, _info_ → `secondary-container`. The MD3 spec snackbar is `inverse-surface` / `inverse-on-surface` / action `inverse-primary`, `corner-extra-small`, level 3.                                | `snackbar/OscdSnackbar.ts:470-540`                            |
| F-D4 | The snackbar `@cssprop` defaults (`#233042`, `#d8f8bd`, `#5ba300`, `#fff584`, …) don't match the code's fallback chains. `custom-elements.json` and Storybook docs are therefore wrong.                                                                                                           | `snackbar/OscdSnackbar.ts:61-91` vs `:440-540`                |
| F-D5 | `oscd-navigation-drawer-header` hard-codes `Roboto`/sizes instead of reading `--md-sys-typescale-*`.                                                                                                                                                                                              | `OscdNavigationDrawerHeader.ts:21-52`                         |
| F-D6 | Hand-rolled Material-2 shadows instead of `oscd-elevation`.                                                                                                                                                                                                                                       | `OscdActionIcon.ts:124,246,258`, `OscdActionPane.ts:134`      |

### E. Cross-repo

| ID   | Finding                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| F-E1 | `oscd-api/docs/theming.md` recommends declaring the palette and the `--md-sys-*` mapping on `*`. That blocks container-level overrides (every descendant re-declares the token) and contradicts oscd-shell's `:host`-only rule; our Storybook preview head is a near-verbatim copy of it (F-A1, F-A2). It also doesn't separate plugin code, which may read its own `--oscd-*` palette, from library components, which read only `--md-*` (P1). So oscd-ui components followed plugin guidance.                                                        |
| F-E2 | Downstream consumers of tokens that this plan renames or removes (local scan, see "Migration impact"): `oscd-shell` (`--oscd-app-bar-*`, ~20 `--oscd-tree-*`, `--app-bar-height`), `oscd-editor-ied` (`--oscd-action-pane-theme-on-primary`), and externally `meinberg-sync/mbg-open-scd` (`--oscd-app-bar-*`, `--oscd-navigation-drawer-header-*`). `oscd-editor-communication` sets `--oscd-action-{icon,pane}-theme-*`, but on `@openenergytools/oscd-action-{icon,pane}`, not oscd-ui. Those `-theme-` names are inherited from that upstream API. |
| F-E3 | No test in oscd-ui guards token discipline. Shell has `theming.spec.ts`; nothing here would catch a regression back to `--oscd-base*`.                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Not theming, noted for later

- Stale untracked `*/internal/*-styles.{ts,css}` files (Oct 2025) exist in some
  working copies. They're git-ignored and unused (the wrappers import styles
  from the base package), but they pollute greps. Delete locally.
- Many wrappers (e.g. `button/OscdFilledButton.ts`) have lost their
  `GENERATED SOURCE FILE` marker, so regeneration no longer covers them. Worth
  a separate audit of generator drift.

## Component audit (target state)

| Component                                         | Today                                                                           | Target                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Generated MD3 wrappers                            | Pure, `--md-*` only                                                             | No change                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `oscd-navigation-drawer`                          | Sets `--md-navigation-drawer-*` defaults from sys roles                         | No change (rung 2)                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `oscd-app-bar`                                    | `--oscd-app-bar-*` → `--app-bar-*`; inverted fallbacks; leaked height           | MD3 small top app bar: the main row is 64px high, excluding the separate sub-bar; at rest `surface`, level-0 elevation, `title-large` headline, `on-surface` headline/leading icon and `on-surface-variant` trailing icon. Consumer-controlled `scrolled` state switches container to `surface-container` and elevation to level 2. Expose facet tokens as `--oscd-app-bar-*`, with private `--_*` defaults at point of use. Sub-bar remains unchanged and is not part of this refactor                                                                                                                                                                                    |
| `oscd-navigation-drawer-header`                   | `--oscd-navigation-drawer-header-*` (10)                                        | Use the inherited MD3 list item's `--md-list-item-*` tokens for supported styling; remove redundant `--oscd-navigation-drawer-header-*` aliases and use MD3 system roles/typescale for defaults                                                                                                                                                                                                                                                                                                                                 |
| `oscd-snackbar`                                   | ~45 `--oscd-snackbar-*`, hijacked roles                                         | Rung 3 `--oscd-snackbar-*` using spec snackbar facet names for the base look (`container-color`, `supporting-text-*`, `action-label-text-color`, `icon-color`, `container-shape`, `container-elevation`). Per variant: `--oscd-snackbar-{info,success,warning,error}-{container-color,supporting-text-color,icon-color,action-label-text-color,close-icon-color}`, defaults per Q1. Layout tokens (z-index, bottom, gap, line-clamp, durations) stay as they are |
| `oscd-tree` / `oscd-tree-item`                    | ~50 `--oscd-tree-*`, many aliases                                               | The count isn't the problem. Remove the aliases of `--md-list-item-*`, `--md-focus-ring-*`, `--md-ripple-*` (rung 2 covers them); keep one rung-3 token per genuine tree facet (indent step, toggle sizes, row height/gap/padding/shape, selection and active-row colours), defaulting to sys tokens at point of use; `--_level` private                                                                                                                         |
| `oscd-tree-grid`                                  | Legacy `--mdc-*`; dead shape token                                              | Sys roles; `--md-outlined-text-field-container-shape`                                                                                                                                                                                                                                                                                                                                                                                                            |
| `oscd-action-list`, `oscd-selection-list`         | Dead shape token                                                                | `--md-outlined-text-field-container-shape`                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `oscd-outlined-search-field`                      | `--oscd-search-field-placeholder-color`; TSDoc formerly promised unsupported container token | Rung 2: `--md-outlined-text-field-*`; no container-color token is supported                                                                                                                                                                                                                                                                                                                                                                      |
| `oscd-action-pane`                                | `--oscd-action-pane-theme-*` (6), `--oscd-base2`, `--oscd-text-font`            | Sys roles directly (rung 1); any genuine extras as `--oscd-action-pane-*`; `oscd-elevation`                                                                                                                                                                                                                                                                                                                                                                      |
| `oscd-action-icon`                                | `--oscd-action-icon-theme-*` (5), `--oscd-text-font`                            | Same as action-pane                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `oscd-action-tree`                                | `--action-tree-*`, black/grey fallbacks                                         | `--oscd-action-tree-*` (documented) defaulting to sys roles (`on-surface`, `outline-variant`)                                                                                                                                                                                                                                                                                                                                                                    |
| `oscd-ace-editor` theme                           | `--oscd-base*` palette layer, Omicron fallbacks                                 | Rung 3, `ace/theme/oscd` only: `--oscd-ace-editor-*` chrome + font-family, `--oscd-ace-editor-syntax-*-color`, all defaulting to sys roles (Q4). Other Ace themes are untouched                                                                                                                                                                                                                                                                                  |
| `oscd-filter-button`                              | Legacy `--mdc-theme-on-surface` on the icon button, ineffective (F-B6)          | Rung 2: `--md-icon-button-icon-color: var(--md-sys-color-on-surface, #1d1b20)` if on-surface is the intended colour; otherwise delete the rule and keep the MD3 default (`on-surface-variant`)                                                                                                                                                                                                                                                                   |
| `oscd-scl-*`, `oscd-warn-dialog`, `oscd-scl-icon` | No palette reads found                                                          | Verify with the guard (A-01)                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Action items

Status: `[ ]` open, `[~]` in progress, `[x]` done.

### Phase 0 — Theming contract and mapper

- [x] **A-40** In `oscd-api/docs/theming.md`, correct the palette table from
      `--oscd-*` to `--oscd-theme-*` and change the example `* {` selectors
      to `:host {`. Preserve the rest of the existing guide; any further
      rewriting or links require separate agreement. (F-E1, Q6)
- [x] **A-02** Write `THEMING.md` for oscd-ui: P1–P5, the ladder with
      examples, and how a consumer maps a palette. Include P0's Solarized
      reference → public slot → MD3 mapper model and its mode-independent
      mapper rule. Own the normative Material/MD3 adapter table (each
      `--md-sys-color-*` role oscd-ui's components actually read — 27 today,
      see F-A8, not the full MD3 scheme — the `--oscd-theme-*` slot it maps
      from, its MD3 baseline fallback, and relevant foreground/background
      notes) and a Solarized-reference appendix showing the light/dark
      `--_solarized-*` assignment: both are Material-Web-specific detail with
      no place in the framework-neutral `oscd-api` guide. Link to `oscd-api`
      only for the raw `--oscd-theme-*` contract; do not duplicate it. Link
      to the generated component documentation for each component's complete
      rung-3 (`--oscd-<component>-*`) token list. Link it from README and the
      Storybook overview. (F-E1)
- [x] **A-03** Review the resolved foreground/background pairs in the
      reference Solarized light and dark palettes, including Ace syntax text
      on its editor surface, against MD3's relevant contrast recommendations.
      Record the pairs and flag any deviations and their applicable
      recommendations; this is an informative review, not a pass/fail gate
      for palettes. It is sequenced after A-02 so it reviews actual mapped
      pairs, not defines the mapping. Do not validate or constrain palettes
      supplied by consumers. (P0)
- [x] **A-04** Export opt-in oscd-ui Lit MD3 mappings as a direct
      implementation of the normative table in oscd-ui's `THEMING.md` (A-02).
      It maps the established `--oscd-theme-*` palette to the
      `--md-sys-color-*` roles oscd-ui's components actually read (27 today,
      see F-A8, not the full MD3 scheme), using the table's slots and MD3
      baseline fallbacks without adding palette values or colour derivation.
      It is applied only in the `static styles` array of a Lit shell/plugin
      root, after A-02 defines that table. Publish
      `oscd-md3-mappings.js` as a package entry point exporting
      `oscdMd3Mappings` (a Lit `CSSResult`), with a `:host` selector. (P1, Q6)

### Phase 1 — Storybook palettes and selector

- [x] **A-10** Replace the `*` block in `preview-head.html` with palette files
      `.storybook/palettes/{solarized-light,solarized-dark,omicron}.css`. The
      Solarized files define private `--_solarized-*` references and alias them
      to the established `--oscd-theme-*` slots for each mode; A-03 documents
      any contrast-recommendation deviations without blocking a palette.
      Each is scoped as `:root[data-palette='<id>'] { … }`. Apply the A-04
      Lit mappings on the global Lit preview host, not on `:root`. Style the
      canvas on that host; document `body` stays neutral because it cannot
      inherit the host's system roles. The mappings cover the roles
      oscd-ui's components actually read (27 today, see F-A8). (F-A1, F-A2,
      F-A6, F-A8, F-A9)
- [x] **A-11** Delete `.storybook/theming.css` and
      `utils/storybook/themingDecorator.ts`. (F-A3, F-A4)
- [x] **A-12** Use `globalTypes.palette` for the three options (default:
      Solarized light). Sync `data-palette` on `<html>` from Storybook's
      globals-updated event, including docs-only pages that do not run story
      decorators. No additional addon needed; see Phase 5 for user palettes.
      (F-A5)
- [x] **A-13** Fix stories that read the palette layer. (F-A7)
- [x] **A-14** Add a "Palette" docs page that renders every sys role as a
      swatch for the active palette. It makes missing or bent roles visible and
      is the visual check for every later phase. Keep the docs table on
      Storybook's neutral background; only its swatches change with the palette.
- [x] **A-15** Add a docs-only Storybook page, `Foundations/Theming`, for the
      A-04 mapper. Show its root-level import/use snippet, a few illustrative
      `--oscd-theme-*` → `--md-sys-*` rows, and a live before/after example:
      palette values alone use Material fallbacks; the same oscd-ui component
      with the mapper has the selected palette. Link to the complete normative
      mapping table in oscd-ui's `THEMING.md` (A-02); do not duplicate it
      here. (Q6)

Palette-slot sketch only. The normative role-to-slot, fallback and pairing
table belongs in oscd-ui's `THEMING.md` (A-02); A-03 reviews the resolved
Solarized pairs against its contrast recommendations.

| Stable public slot purpose                        | Light reference       | Dark reference        |
| ------------------------------------------------- | --------------------- | --------------------- |
| `--oscd-theme-base3`: main surface                | `--_solarized-base3`  | `--_solarized-base03` |
| `--oscd-theme-base2`: raised/highlighted surface  | `--_solarized-base2`  | `--_solarized-base02` |
| `--oscd-theme-base00`: normal readable foreground | `--_solarized-base00` | `--_solarized-base0`  |

The mapper always reads the stable public slot. It does not need to know
whether the active palette is light or dark.

The Omicron palette moves out of the preview head and into
`palettes/omicron.css`, unchanged in its intent.

### Phase 2 — Non-breaking component fixes

- [ ] **A-20** Fix inverted fallbacks in app bar and navigation drawer header.
      (F-D1)
- [ ] **A-21** Replace `--oscd-outlined-text-field-container-shape` with
      `--md-outlined-text-field-container-shape`. This is a _visible_ change:
      the fields become rounded, as originally intended. (F-C2)
- [ ] **A-25** Replace hand-rolled shadows with `oscd-elevation`. (F-D6)
- [ ] **A-26** Snackbar: make the `@cssprop` docs match the code (a stopgap
      until A-33). (F-D4)

### Phase 3 — Token renames and removals (one breaking release, see Q3)

All public-token renames and removals land together in `0.1.0`. Old names are
simply gone: no `var(--new, var(--old, …))` fallbacks, no runtime shims. The
A-36 guide is the migration path.

- [x] **A-27** Removed the unsupported
      `--oscd-search-field-container-color` documentation; use the embedded
      `--md-outlined-text-field-*` tokens for supported customization.
      (F-C7)
- [ ] **A-23** Remove the legacy `--mdc-*` reads: in tree-grid, replace
      `--mdc-theme-text-hint-on-background` with a sys-role equivalent (F-B4).
      In filter-button, replace `color: var(--mdc-theme-on-surface)` with
      `--md-icon-button-icon-color` (or delete it, see the audit) (F-B6).
      Grep-verified: these are the only two `--mdc-*` reads in component
      source. This removes legacy styling inputs and ships in 0.1.0.
- [ ] **A-22** Action-pane/action-icon: remove the `--oscd-base2` /
      `--oscd-text-font` fallback reads in favour of
      `--md-sys-color-on-primary` / `--md-ref-typeface-plain`. Fix the
      `@cssprop` docs. Since this removes existing styling inputs, include it
      in the 0.1.0 breaking batch. (F-B2, F-B3)
- [ ] **A-24** Ace theme (`ace/theme/oscd` only): replace every palette-layer
      read with the Q4 token set, each defaulting to a sys role with its MD3
      baseline fallback. Map Ace's internal selectors onto those concepts.
      Document the tokens as `@cssprop` on `oscd-ace-editor`, stating they only
      apply while `ace/theme/oscd` is active (P7). Fix the TSDoc that says the
      theme derives from `--oscd-theme*` (P1). This public-token change ships
      in 0.1.0. (F-B1)
- [ ] **A-28** Action-tree: rename its tokens to `--oscd-action-tree-*`
      and default them to sys roles. Remove the old names without fallbacks;
      this is part of the 0.1.0 batch (Q3). (F-B5)
- [ ] **A-30** Action-pane/action-icon: drop `--oscd-*-theme-*` in favour of
      sys roles (rung 1). (F-C1)
- [ ] **A-31** Align the app bar's main row to the MD3 small top-app-bar
      defaults (the 64px height excludes the separate sub-bar, which remains
      unchanged and is out of scope for this refactor): resting container
      `surface`, level-0 elevation, 64px height,
      `title-large` headline, `on-surface` headline/leading icon and
      `on-surface-variant` trailing icon. Add a boolean `scrolled` property
      (reflected as an attribute) that applies the MD3 on-scroll defaults
      `surface-container` and level-2 elevation; the component does not
      observe page scrolling, leaving that decision to the consumer. Rename
      its public tokens after the spec facets (e.g.
      `--oscd-app-bar-title-font-size` → `--oscd-app-bar-headline-size`),
      including `on-scroll-container-color` and
      `on-scroll-container-elevation`; rename private tokens to `--_*` and
      apply defaults at point of use. Cover the resting and consumer-set
      scrolled states in stories/specs. (F-C3, F-C4, F-D2)
- [ ] **A-32** Tree: remove the aliases of embedded MD3 tokens, move the
      `:host` declarations to point-of-use defaults, and rename
      `--oscd-tree-row-level` to `--_level`. (F-C5, F-C6)
- [ ] **A-33** Snackbar: rung-3 `--oscd-snackbar-*` tokens named after the
      spec snackbar facets for the base look, plus per-variant tokens and
      defaults as decided in Q1. Old `-text-color` names are renamed to
      `-supporting-text-color`.
      (F-D3)
- [ ] **A-33a** Snackbar accessibility: the variant must not be conveyed by
      colour or by the raw icon ligature. Set `aria-hidden="true"` on the
      variant icon (today a screen reader may read the ligature, e.g.
      `check_circle`), and prefix the message with a visually hidden,
      localisable variant label ("Error:", "Warning:", "Success:", "Info:"). Keep
      `role="alert"` for error and `role="status"` otherwise. This is a
      behaviour change, not tokens; it needs specs.
- [ ] **A-33b** Snackbar story "Coloured variants" next to the existing
      `Variants` story in `snackbar/OscdSnackbar.stories.ts`. Show info,
      warning and success opted into colour through the per-variant tokens (Q1),
      set on a surrounding element so the story's source panel doubles as a
      copy-paste recipe. Set each variant's container, supporting-text, icon,
      action-label and close-icon facets. Use cheerful blue, amber/yellow and
      green examples
      that sit well with the default Solarized light palette (for example,
      `#1f74b0` / `#fdf6e3` for info, `#b58900` / `#002b36` for warning,
      and `#859900` / `#002b36` for success). These are illustrative
      consumer-supplied values, not required Solarized colours or a new
      OpenSCD palette contract. Make clear that consumers can choose other
      colours; info, warning and success do not acquire MD3 semantic roles.
      Reuse the example snippet in the migration guide (A-36).
- [ ] **A-34** Navigation drawer header: remove the redundant
      `--oscd-navigation-drawer-header-*` aliases and let consumers style the
      embedded MD3 list item through its `--md-list-item-*` tokens. Set the
      component's default typography from MD3 typescale/system roles; do not
      add rung-3 tokens for facets already exposed by the list item. (F-D5,
      F-C4)
- [ ] **A-01** After A-22, A-23 and A-24 remove the existing palette-layer
      and `--mdc-*` reads, add a CI guard that rejects their return in
      first-party component source: `--oscd-theme-*`, `--oscd-base*`,
      `--oscd-{primary,secondary,error,warning}`, `--oscd-text-font*`,
      `--oscd-icon-font` and `--mdc-*` reads. Exclude tests, Storybook,
      generated output and the intentional A-04 MD3 mapper. Use a simple
      string-based script, with no allow-list; make it a required check only
      once the cleanup lets it pass. A future exception changes the rule
      deliberately. (F-E3)
- [ ] **A-35** Regenerate `custom-elements.json` and check the Storybook
      docs tables.
- [ ] **A-36** Write the developer-facing migration guide for the release
      that lands Phases 2–3 (see "Migration impact"). The format is still to be
      agreed. It covers, per component: old → new token table, visual changes
      without an API change, and "how to fix" snippets. It also covers
      consumers coming from `@openenergytools/oscd-action-{pane,icon}`.
      Include the A-33b example snippet showing how to colour warning,
      success and info via the new per-variant tokens (Q1 makes them plain by
      default). Linked from the CHANGELOG entry and README.

### Phase 4 — Cross-repo follow-ups (tracked here, done in their repos)

- [ ] **A-41** `oscd-shell`: import the A-04 oscd-ui mapper at its root rather
      than maintaining a local mapping, then migrate from `--oscd-app-bar-*`,
      the `--app-bar-height` leak and the removed tree aliases. Add the `:host`
      inheritance rule to `THEMING.md`; add focused coverage only where the
      existing theming spec does not already exercise that behaviour. (F-A8,
      F-C3, F-E2, Q6)
- [ ] **A-42** `oscd-editor-ied`: migrate off
      `--oscd-action-pane-theme-on-primary`. (F-E2)
- [ ] **A-43** When `oscd-editor-communication` migrates from
      `@openenergytools/oscd-action-{icon,pane}` to oscd-ui, apply the A-36
      table. Drop the non-existent `--oscd-action-icon-theme-surface`. (F-E2,
      F-C7)
- [ ] **A-44** Notify `meinberg-sync/mbg-open-scd` (external, on
      `^0.0.9`) with a link to the A-36 guide.

### Phase 5 — Stretch: user palettes in Storybook

- [ ] **A-50** Future exploration, not part of this refactor: a Storybook
      manager addon may list built-in and user palettes; create, edit, persist,
      export and remove user palettes using the public `--oscd-theme-*` palette
      contract. Decide the editor, persistence and export format when this work
      begins; custom palettes must not inherit Solarized's private reference
      model by accident.

## Migration impact

**Main risk: CSS breaks silently.** A renamed or removed token produces no
build error and no test failure. The override just stops applying, and the
component falls back to its default look. With no compatibility layer (Q3),
the written guide (A-36) and the lock-step fixes for known consumers
(A-41..A-44) are the whole mitigation.

Local scan (2026-09-28) of every repo under `~/code` depending on
`@omicronenergy/oscd-ui`:

| Consumer                                                                                 | Pinned                | Overrides tokens we rename?                                                                                                                                                              | Effect                                                                            |
| ---------------------------------------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `stee-re/oscd-shell`                                                                     | `^0.0.19`             | 7 `--oscd-app-bar-*`, `--app-bar-height` leak (F-C3), ~20 `--oscd-tree-*` (3 are aliases removed by A-32: `row-focus-ring-color`, `item-leading-icon-color`, `item-trailing-icon-color`) | Breaks; fixed in lock-step (A-41)                                                 |
| `oscd-editor-ied`                                                                        | `^0.0.11`             | `--oscd-action-pane-theme-on-primary`                                                                                                                                                    | Breaks; trivial (A-42)                                                            |
| `meinberg-sync/mbg-open-scd` (**external**)                                              | `^0.0.9`              | 8 `--oscd-app-bar-*`, 10 `--oscd-navigation-drawer-header-*`                                                                                                                             | Breaks on upgrade (A-44)                                                          |
| `stee-re/Sysconex`                                                                       | `^0.0.9`              | `--app-bar-height`                                                                                                                                                                       | Probably breaks on upgrade                                                        |
| `oscd-editor-publisher`                                                                  | **`file:../oscd-ui`** | None, but uses action-list, tree-grid, tree                                                                                                                                              | Visual changes only, picked up **immediately** on the next local build            |
| `oscd-editor-template`, `-subscriber-databinding`, `oscd-remove-ieds`, `oscd-editor-sld` | `^0.0.12`–`^0.0.20`   | None, but they use affected components (action-list, selection-list, snackbar)                                                                                                           | Visual changes only (rounded search fields from A-21, snackbar colours from A-33) |
| `oscd-editor-source`, `-subscriber-msgbinding`, `oscd-menu-commons`, open-scd plugins    | various               | None                                                                                                                                                                                     | None                                                                              |

Mitigating factors:

- **Every upgrade is deliberate** (except `oscd-editor-publisher`'s
  `file:` link). `^0.0.x` pins to an exact version in npm semver, and
  consumers are spread across 0.0.6 to 0.0.20.
- **Plugins inherit their mapping from the shell.** Few plugins map
  `--md-sys-*` themselves. Inside a distro they inherit the shell's
  mapping, so changed defaults mostly show in standalone plugin demos.
- **Upstream parity is a real cost.** oscd-ui's action-pane/icon kept
  `@openenergytools/oscd-action-{pane,icon}`'s `-theme-` token API, so
  plugins migrating from those keep working today. A-30 breaks that
  parity. The A-36 guide must carry the mapping for them too.

## Open questions

- ~~**Q1 — Success/warning colours.**~~ Resolved 2026-09-29: keep them
  **local to the snackbar**. No shared `--oscd-sys-color-{success,warning}`
  role for now (MD3 has none, and `tertiary` doesn't mean "success").
  - Name tokens after the facet they control, per variant:
    `--oscd-snackbar-<variant>-{container-color,supporting-text-color,icon-color,action-label-text-color,close-icon-color}`.
    Not `--oscd-snackbar-color-warning`, which doesn't say what it colours.
    Action and close colours are per variant because they have to stay
    readable on an overridden container.
  - **error** defaults to MD3 roles: container `error-container`, text and
    action/close `on-error-container`, icon `error`. MD3 recommends
    `error-container` for filled areas, `error` for small emphasis.
  - **warning / success / info** default to the base snackbar look (inverse
    surface), distinguished by icon plus accessible text (A-33a). Coloured
    variants are opt-in through the tokens above; all four variants get the
    same token set. Success tokens exist only while success stays a
    distinct variant. A story demonstrates colourful consumer choices
    alongside the default (A-33b); the example values do not define palette
    slots or semantic MD3 roles.
- ~~**Q2 — Spec defaults vs the OpenSCD look.**~~ Resolved 2026-09-29:
  `oscd-ui` takes MD3 as the default reference, including a `surface` app-bar
  container. The shell/distro applies an OpenSCD-specific `primary` treatment
  through its palette mapping when desired. This keeps the library's MD3
  contract independent of any one application's brand.
- ~~**Q3 — Breaking changes.**~~ Resolved 2026-09-29: batch all token
  removals and renames into `0.1.0`. Provide no runtime or CSS
  compatibility layer, so there is no later removal release. The consumer
  count is low, and compatibility layers tend to linger far longer than
  intended. Ship the A-36 guide with the release.
- ~~**Q4 — Ace syntax colours.**~~ Resolved 2026-09-29: oscd-ui owns only
  its custom `ace/theme/oscd`. It doesn't try to influence Ace's built-in
  or consumer-supplied themes. When a consumer selects another Ace theme,
  the OpenSCD Ace tokens simply don't apply.
  - Small, semantic public set for `ace/theme/oscd`:
    - Chrome:
      `--oscd-ace-editor-{container,text,gutter,gutter-text,active-line,selection,cursor}-color`
      and `--oscd-ace-editor-font-family`.
    - Syntax:
      `--oscd-ace-editor-syntax-{keyword,string,tag,attribute-name,comment,number,invalid}-color`.
  - Ace's many internal selectors map onto these concepts. No tokens are
    named after Ace implementation classes (`ace_meta`, `ace_xml-pe`, …).
  - Each token defaults to an appropriate MD3 system role where possible.
    `font-family` gets a local monospace fallback. Invalid syntax is a
    single text colour, `--oscd-ace-editor-syntax-invalid-color` defaulting
    to MD3 `error`, with no background fill (today's `.ace_invalid`
    background is dropped).
  - The TSDoc states that these tokens affect `ace/theme/oscd` only.
- ~~**Q5 — Rung-3 prefix.**~~ Resolved 2026-09-28: we don't adopt spec-only
  `--md-*` names; our tokens are `--oscd-<component>-*` with spec-inspired
  facet names (see P2).
- ~~**Q6 — Form of the canonical mapping.**~~ Resolved 2026-09-30:
  `oscd-api` remains framework-neutral. It is the canonical documentation for
  the established `--oscd-theme-*` palette contract only — what each token
  means. It ships no Material dependency, no runtime mapping, and no
  Material/MD3 adapter table or Solarized reference: those are Material-Web
  detail with no place in a framework-neutral document.
  - `oscd-ui`'s `THEMING.md` (A-02) owns the normative Material/MD3 role
    mapping table and the Solarized reference appendix. `oscd-ui` ships the
    canonical, opt-in MD3 mapper as a convenience for consumers using its
    Material-based components. It maps the established stable palette slots
    to the `--md-sys-*` roles oscd-ui's components actually read (27 today,
    see F-A8, not the full MD3 scheme), contains no palette values or colour
    derivation, and is imported at a shell/plugin root. It prevents duplicate
    mappings from drifting.
  - The mapper is an exported Lit `CSSResult` for the shell/plugin root's
    `static styles`, not a framework-neutral CSS entry point. It is not
    automatically applied: consumers deliberately setting `--md-sys-*`
    directly omit it.
  - A docs-only Storybook page makes the adapter discoverable and
    demonstrates its before/after effect (A-15).

## Uncertainties and assumptions

- Role counts and read frequencies (F-A8) come from grepping the
  `*-styles.js` files that oscd-ui actually imports from the installed
  `oscd-material-web-base@2.4.2`: 26 roles read there, plus `error-container`
  read by oscd-ui's snackbar. The adapter table and mapper are scoped to
  exactly those 27, not the full 47-role MD3 scheme; a base
  upgrade that reads additional roles needs a deliberate table/mapper update,
  not silent forward-compatible coverage. An earlier draft wrongly proposed
  covering all 47.
- Whether `@storybook/addon-themes` works with Storybook 10.4 is unverified.
- Downstream consumer usage (F-E2) was found by grepping local checkouts
  under `~/code`. There may be consumers outside them.
- The normative MD3 role-to-slot mapping, fallback values and pairing notes
  belong in oscd-ui's `THEMING.md` (A-02), not `oscd-api`, since they are
  Material-Web-specific. A-03 reviews the resolved reference Solarized
  palette against MD3 contrast recommendations and flags deviations; neither
  the review nor oscd-ui constrains palettes supplied by consumers.
