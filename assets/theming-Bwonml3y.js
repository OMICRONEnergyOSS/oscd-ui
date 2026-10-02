import{i as e}from"./preload-helper-xPQekRTU.js";import{s as t}from"./chunk-LITCR56V-TQ0fNVsF.js";import{o as n,s as r,y as i}from"./blocks-B6KHhhZA.js";import{t as a}from"./mdx-react-shim-DYzFBDCS.js";import{t as o}from"./oscd-filled-button-D1F1Vmn7.js";function s(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{title:`Open SCD/Theming`}),`
`,(0,l.jsx)(t.h1,{id:`theming`,children:`Theming`}),`
`,(0,l.jsxs)(t.p,{children:[`oscd-ui uses Material's MD3 defaults unless a Lit shell or plugin root opts
into the OpenSCD palette mappings. The mapper supplies the Solarized reference
palette when no `,(0,l.jsx)(t.code,{children:`--oscd-theme-*`}),` values are set; inherited palette values
override those defaults. Add the mappings first in the root's styles:`]}),`
`,(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:`language-ts`,children:`import { css, LitElement } from 'lit';
import { oscdMd3Mappings } from '@omicronenergy/oscd-ui/oscd-md3-mappings.js';

class PluginRoot extends LitElement {
  static override styles = [
    oscdMd3Mappings,
    css\`
      :host {
        display: block;
      }
    \`,
  ];
}
`})}),`
`,(0,l.jsx)(t.p,{children:`The mapping is independent of the active palette:`}),`
`,(0,l.jsxs)(t.p,{children:[`| Palette slot           | MD3 role                    |
| ---------------------- | --------------------------- |
| `,(0,l.jsx)(t.code,{children:`--oscd-theme-primary`}),` | `,(0,l.jsx)(t.code,{children:`--md-sys-color-primary`}),`    |
| `,(0,l.jsx)(t.code,{children:`--oscd-theme-base3`}),`   | `,(0,l.jsx)(t.code,{children:`--md-sys-color-surface`}),`    |
| `,(0,l.jsx)(t.code,{children:`--oscd-theme-base00`}),`  | `,(0,l.jsx)(t.code,{children:`--md-sys-color-on-surface`}),` |`]}),`
`,(0,l.jsxs)(t.p,{children:[`See `,(0,l.jsx)(t.a,{href:`https://github.com/OMICRONEnergyOSS/oscd-ui/blob/main/THEMING.md#material-role-mapping`,rel:`nofollow`,children:`the complete role mapping table`}),`.`]}),`
`,(0,l.jsx)(t.h2,{id:`before-and-after`,children:`Before and after`}),`
`,(0,l.jsxs)(t.p,{children:[`The preview host supplies the selected `,(0,l.jsx)(t.code,{children:`--oscd-theme-*`}),` palette. Without the
mapper, the first button uses Material's baseline colours; with the mapper,
the second inherits the selected palette. If no palette is supplied, the
mapper defaults to Solarized:`]}),`
`,(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`flex-start`,padding:`16px`},children:[(0,l.jsxs)(`div`,{style:{padding:`16px`},children:[(0,l.jsx)(`p`,{children:`Palette only`}),(0,l.jsx)(`oscd-filled-button`,{children:`Material baseline`})]}),(0,l.jsx)(`oscd-storybook-theme`,{style:{minHeight:`0`},children:(0,l.jsxs)(`div`,{style:{padding:`16px`},children:[(0,l.jsx)(`p`,{children:`Palette + mappings`}),(0,l.jsx)(`oscd-filled-button`,{children:`Selected palette`})]})})]})]})}function c(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=t(),a(),r(),o()}))();export{c as default};