# Theming oscd-ui

oscd-ui uses Material Web's MD3 system tokens. Without any theme adapter,
components use Material's baseline appearance. A distribution can supply an
[OpenSCD colour palette](https://github.com/stee-re/oscd-api/blob/main/docs/theming.md);
the opt-in mappings below translate it to MD3 tokens.

## Choosing tokens

Choose tokens by the scope of the change:

- **Palette:** Set `--oscd-theme-*` on the distribution or plugin root for
  broad colour changes. oscd-ui responds to these slots only where its
  opt-in MD3 mappings are applied.
- **System:** Set `--md-sys-*` or `--md-ref-*` to change every component
  under that root that reads the token. For example, `--md-sys-color-surface`
  affects components using the shared surface role.
- **Component:** Set `--md-<component>-*` for an embedded Material component,
  or `--oscd-<component>-*` for an oscd-ui component. For example,
  `--md-icon-button-icon-color` changes icon buttons, while
  `--oscd-tree-indent-step` changes tree indentation. Set a token on a
  specific component instance to limit the change to that instance.

```text
--oscd-theme-* palette
          │ optional Lit mappings
          ▼
--md-sys-* shared roles ────────┐
          │                     │
          ▼                     ▼
Material component token   oscd-ui component token
          └──────────┬──────────┘
                     ▼
              component facet
```

A component token can be set directly for a narrower override. Otherwise,
its facet may fall back to an MD3 role or a component default; not every
facet uses every layer.

Components consume MD3 and component tokens, not palette slots directly.
Do not declare mappings on `*`: it overrides inherited values on every
descendant and prevents subtree overrides.

See the supported `@cssprop` overrides in the
[component manifest](./custom-elements.json) or
[Storybook docs](https://omicronenergyoss.github.io/oscd-ui/?path=/docs/open-scd-overview--docs).

## Opt-in Lit mappings

Place the mappings first in the shell/plugin root's `static styles`:

```ts
import { css, LitElement } from 'lit';
import { oscdMd3Mappings } from '@omicronenergy/oscd-ui/oscd-md3-mappings.js';

class PluginRoot extends LitElement {
  static override styles = [
    oscdMd3Mappings,
    css`
      :host {
        color: var(--md-sys-color-on-surface);
      }
    `,
  ];
}
```

Set `--oscd-theme-*` on the host or an ancestor. The `:host` mappings
inherit to descendants; don't repeat them in children. They are a Lit
`CSSResult`, **not** a document-wide stylesheet. Omit them if you set MD3
tokens directly; importing them would overwrite those values on the host.
Missing palette slots use the Solarized reference palette. Check contrast
with partial palettes: the mappings neither derive colours nor validate
pairs. Avoid mapping a system role on an element whose component token derives
from it (CSS cycle).

### Material role mapping

`oscd-md3-mappings.ts` implements these **28 roles**: 26 from imported
Material styles, the snackbar's `error-container`, and `on-secondary` used by
the shell. When no `--oscd-theme-*` value is inherited, the mapper supplies
the Solarized reference palette. Without the mapper, components use their
Material Web baselines. Update the table and mappings if a new role is read;
this is not the full MD3 scheme. Palette slot meanings are defined in oscd-api.

| `--md-sys-color-*` role     | `--oscd-theme-*` slot | Solarized default | Foreground/background relationship                           |
| --------------------------- | --------------------- | ----------------- | ------------------------------------------------------------ |
| `error`                     | `error`               | `#dc322f`          | Accent on surfaces; not a background by itself               |
| `error-container`           | `base2`               | `#eee8d5`          | With `on-error-container`; no dedicated error-container slot |
| `inverse-on-surface`        | `base3`               | `#fdf6e3`          | On `inverse-surface`                                         |
| `inverse-surface`           | `base03`              | `#002b36`          | With `inverse-on-surface`                                    |
| `on-error`                  | `base3`               | `#fdf6e3`          | On `error`                                                   |
| `on-error-container`        | `base00`              | `#657b83`          | On `error-container`                                         |
| `on-primary`                | `base3`               | `#fdf6e3`          | On `primary`                                                 |
| `on-primary-container`      | `base00`              | `#657b83`          | On `primary-container`                                       |
| `on-secondary`              | `base3`               | `#fdf6e3`          | On `secondary`; used by shell                                |
| `on-secondary-container`    | `base00`              | `#657b83`          | On `secondary-container`                                     |
| `on-surface`                | `base00`              | `#657b83`          | On `surface` and its containers                              |
| `on-surface-variant`        | `base0`               | `#839496`          | On surfaces; subdued foreground                              |
| `on-tertiary-container`     | `base00`              | `#657b83`          | On `tertiary-container`                                      |
| `outline`                   | `base01`              | `#586e75`          | Borders on surfaces                                          |
| `outline-variant`           | `base1`               | `#93a1a1`          | Subtle dividers on surfaces                                  |
| `primary`                   | `primary`             | `#2aa198`          | With `on-primary`                                            |
| `primary-container`         | `base2`               | `#eee8d5`          | With `on-primary-container`                                  |
| `scrim`                     | —                     | `#000`             | Black, independent of palette                                |
| `secondary`                 | `secondary`           | `#6c71c4`          | Accent; pairs with `on-secondary`                            |
| `secondary-container`       | `base2`               | `#eee8d5`          | With `on-secondary-container`                                |
| `shadow`                    | —                     | `#000`             | Black, independent of palette                                |
| `surface`                   | `base3`               | `#fdf6e3`          | With `on-surface`                                            |
| `surface-container`         | `base2`               | `#eee8d5`          | With `on-surface`                                            |
| `surface-container-high`    | `base2`               | `#eee8d5`          | With `on-surface`                                            |
| `surface-container-highest` | `base2`               | `#eee8d5`          | With `on-surface`                                            |
| `surface-container-low`     | `base3`               | `#fdf6e3`          | With `on-surface`                                            |
| `tertiary`                  | `secondary`           | `#6c71c4`          | Secondary accent reused; no distinct tertiary slot           |
| `tertiary-container`        | `base2`               | `#eee8d5`          | With `on-tertiary-container`                                 |

With fewer tonal steps than MD3, several containers share `base2` and
`tertiary` reuses `secondary`. `scrim` and `shadow` stay black even in dark
mode; a light surface colour would break overlays.

### Solarized reference for Storybook

Storybook's light/dark palettes use these private
`--_solarized-*` references. Both modes fill the same public slots;
distributions may use different values.

| Public slot | Light `--_solarized-*` | Dark `--_solarized-*` |
| ----------- | ---------------------- | --------------------- |
| `base03`    | `base03` (`#002b36`)   | `base3` (`#fdf6e3`)   |
| `base02`    | `base02` (`#073642`)   | `base2` (`#eee8d5`)   |
| `base01`    | `base01` (`#586e75`)   | `base1` (`#93a1a1`)   |
| `base00`    | `base00` (`#657b83`)   | `base0` (`#839496`)   |
| `base0`     | `base0` (`#839496`)    | `base00` (`#657b83`)  |
| `base1`     | `base1` (`#93a1a1`)    | `base01` (`#586e75`)  |
| `base2`     | `base2` (`#eee8d5`)    | `base02` (`#073642`)  |
| `base3`     | `base3` (`#fdf6e3`)    | `base03` (`#002b36`)  |
| `primary`   | `cyan` (`#2aa198`)     | `cyan` (`#2aa198`)    |
| `secondary` | `violet` (`#6c71c4`)   | `violet` (`#6c71c4`)  |
| `error`     | `red` (`#dc322f`)      | `red` (`#dc322f`)     |
| `warning`   | `yellow` (`#b58900`)   | `yellow` (`#b58900`)  |

### Reference contrast review (informative)

Resolved ratios for the **reference** Solarized values, not limits on
consumer palettes. [MD3's contrast guidance](https://m3.material.io/foundations/designing/color-contrast)
follows [4.5:1 for normal text (3:1 for large text)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
and [3:1 for necessary non-text UI](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).
Values below are rounded for display; notes flag relevant shortfalls.

| Foreground on background                                              |              Light |               Dark | Note                                                                            |
| --------------------------------------------------------------------- | -----------------: | -----------------: | ------------------------------------------------------------------------------- |
| `on-primary` on `primary`                                             |               2.93 |               4.75 | Light misses 4.5:1 text and 3:1 non-text                                        |
| `on-error` on `error`                                                 |               4.29 |               3.25 | Both miss 4.5:1 text                                                            |
| `on-{primary,secondary,tertiary,error}-container` on their containers |               3.64 |               4.11 | Both miss 4.5:1 text                                                            |
| `on-surface` on `surface` / `surface-container-low`                   |               4.13 |               4.75 | Light misses 4.5:1 text                                                         |
| `on-surface` on `surface-container{,-high,-highest}`                  |               3.64 |               4.11 | Both miss 4.5:1 text                                                            |
| `on-surface-variant` on `surface`                                     |               2.93 |               3.37 | Both miss 4.5:1 text; light misses 3:1 non-text                                 |
| `inverse-on-surface` on `inverse-surface`                             |              13.92 |              13.92 | Meets 4.5:1                                                                     |
| `outline` on `surface`                                                |               4.99 |               5.61 | Meets 3:1 when used for a necessary boundary                                    |
| `outline-variant` on `surface`                                        |               2.48 |               2.79 | Misses 3:1 if used for a necessary boundary; decorative dividers are exempt     |
| `primary` / `secondary` / `error` on `surface`                        | 2.93 / 4.06 / 4.29 | 4.75 / 3.43 / 3.25 | Accent text misses 4.5:1 except dark primary; light primary misses 3:1 non-text |

Ace `ace/theme/oscd` still reads legacy `--oscd-*` tokens. **If** those
tokens resolve to this palette, its editor is `base3` and its active line
is `base2`. Syntax text has these ratios:

| Ace text on editor `base3` / active line `base2`   |       Light |        Dark | Note                                                                  |
| -------------------------------------------------- | ----------: | ----------: | --------------------------------------------------------------------- |
| Default, identifiers, strings, numbers (`base00`)  | 4.13 / 3.64 | 4.75 / 4.11 | Light editor and both active-line modes miss 4.5:1                    |
| Comments, punctuation (`base01`)                   | 4.99 / 4.39 | 5.61 / 4.86 | Light active line misses 4.5:1                                        |
| Keywords, tags (`secondary`)                       | 4.06 / 3.57 | 3.43 / 2.97 | Both editor and active line miss 4.5:1                                |
| Attributes, storage (`primary`)                    | 2.93 / 2.58 | 4.75 / 4.12 | Light editor and both active-line modes miss 4.5:1                    |
| Regex/invalid (`error`)                            | 4.29 / 3.77 | 3.25 / 2.81 | Both modes miss 4.5:1                                                 |
| Parameters (`warning`, `#b58900`)                  | 2.98 / 2.62 | 4.68 / 4.05 | Light editor and both active-line modes miss 4.5:1                    |
| Invalid foreground (`base3`) on `error` background |        4.29 |        3.25 | Current invalid syntax misses 4.5:1; A-24 removes the background fill |

The mappings do **not** set Ace's legacy tokens: without a separate legacy
palette, its hard-coded fallbacks apply instead. Recheck rendered Ace
contrast after A-24 replaces those reads.
