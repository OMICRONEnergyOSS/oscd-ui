import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{M as t,N as n,j as r,o as i,s as a}from"./blocks-CCifauPr.js";import{t as o}from"./oscd-filled-button-BnRFdSuQ.js";function s(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`Open SCD/Theming`}),`
`,(0,l.jsx)(n.h1,{id:`theming`,children:`Theming`}),`
`,(0,l.jsxs)(n.p,{children:[`oscd-ui uses Material's MD3 defaults unless a Lit shell or plugin root opts
into the OpenSCD palette mappings. The mapper supplies the Solarized reference
palette when no `,(0,l.jsx)(n.code,{children:`--oscd-theme-*`}),` values are set; inherited palette values
override those defaults. Add the mappings first in the root's styles:`]}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`import { css, LitElement } from 'lit';
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
`,(0,l.jsx)(n.p,{children:`The mapping is independent of the active palette:`}),`
`,(0,l.jsxs)(n.p,{children:[`| Palette slot           | MD3 role                    |
| ---------------------- | --------------------------- |
| `,(0,l.jsx)(n.code,{children:`--oscd-theme-primary`}),` | `,(0,l.jsx)(n.code,{children:`--md-sys-color-primary`}),`    |
| `,(0,l.jsx)(n.code,{children:`--oscd-theme-base3`}),`   | `,(0,l.jsx)(n.code,{children:`--md-sys-color-surface`}),`    |
| `,(0,l.jsx)(n.code,{children:`--oscd-theme-base00`}),`  | `,(0,l.jsx)(n.code,{children:`--md-sys-color-on-surface`}),` |`]}),`
`,(0,l.jsxs)(n.p,{children:[`See `,(0,l.jsx)(n.a,{href:`https://github.com/OMICRONEnergyOSS/oscd-ui/blob/main/THEMING.md#material-role-mapping`,rel:`nofollow`,children:`the complete role mapping table`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`before-and-after`,children:`Before and after`}),`
`,(0,l.jsxs)(n.p,{children:[`The preview host supplies the selected `,(0,l.jsx)(n.code,{children:`--oscd-theme-*`}),` palette. Without the
mapper, the first button uses Material's baseline colours; with the mapper,
the second inherits the selected palette. If no palette is supplied, the
mapper defaults to Solarized:`]}),`
`,(0,l.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`flex-start`,padding:`16px`},children:[(0,l.jsxs)(`div`,{style:{padding:`16px`},children:[(0,l.jsx)(`p`,{children:`Palette only`}),(0,l.jsx)(`oscd-filled-button`,{children:`Material baseline`})]}),(0,l.jsx)(`oscd-storybook-theme`,{style:{minHeight:`0`},children:(0,l.jsxs)(`div`,{style:{padding:`16px`},children:[(0,l.jsx)(`p`,{children:`Palette + mappings`}),(0,l.jsx)(`oscd-filled-button`,{children:`Selected palette`})]})})]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=n(),r(),a(),o()})))()}u();export{c as default};