import{O as c,s as m}from"./storybook-utils-9nVHfkqx.js";import"./oscd-elevated-card-AxewZJdl.js";import{g as p}from"./getStorybookMeta-D4nAQZGb.js";import{x as g}from"./iframe-CED9u4fv.js";import"./list-item-styles-DbtL1MIB.js";import"./OscdCheckbox-Z5QF8l7R.js";import"./OscdListItem-YzTXxYva.js";import"./OscdMenuItem-DhDenadO.js";import"./query-assigned-nodes-GnmzpfNZ.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-DrTVKtKT.js";import"./form-associated-BZB3BzSH.js";import"./checkbox-validator-DV7iT04e.js";import"./OscdRadio-B6IuyFLB.js";import"./focusable-CbbQwCIQ.js";import"./OscdList--At7ZW1p.js";import"./OscdOutlinedTextField-DtefTYG8.js";import"./shared-styles-D4k9ERI8.js";import"./style-map-Cl8ZIZTf.js";import"./on-report-validity-g69Ll89o.js";import"./OscdOutlinedField-3pKOEIJ_.js";import"./shared-styles-CoicpMAz.js";import"./FilterListBase-Ckti3R2r.js";import"./shared-styles-BcXRMyaQ.js";import"./getStorybookHelpers-DCG8XUrM.js";import"./oscd-menu-item-DLNMOFEq.js";import"./preload-helper-PPVm8Dsz.js";window.customElements.define("oscd-selection-list",c);const{args:a,argTypes:i,meta:d,template:u}=p({tagName:"oscd-selection-list"}),B={title:"Lists/Selection List",tags:["autodocs"],...d,render:o=>g` <style>
        oscd-elevated-card {
          --md-elevated-card-container-color: var(--md-sys-color-surface);
        }
        oscd-selection-list {
          padding: 7px;
        }
      </style>
      <oscd-elevated-card
        @selection-list-change=${e=>{action("selection-list-change")(e.detail.selectedElements.map(l=>new XMLSerializer().serializeToString(l)))}}
      >
        ${u(o)}
      </oscd-elevated-card>`},n=o=>Array.from(m.querySelectorAll("GSEControl")).map(e=>({headline:e.getAttribute("name")??"unknown",attachedElement:e,...o?{supportingText:e.getAttribute("desc")??void 0}:{}})),t={argTypes:{...i},args:{...a,".items":n(),filterable:!1}},r={argTypes:{...i},args:{...a,multiselect:!0,".items":n(),filterable:!1}},s={argTypes:{...i},args:{...a,".items":n(!0),filterable:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes
  },
  args: {
    ...args,
    ['.items']: getListItems(),
    filterable: false
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes
  },
  args: {
    ...args,
    multiselect: true,
    ['.items']: getListItems(),
    filterable: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes
  },
  args: {
    ...args,
    ['.items']: getListItems(true),
    filterable: true
  }
}`,...s.parameters?.docs?.source}}};const F=["SingleSelect","MultiSelect","SingleSelectWithSupportingText"];export{r as MultiSelect,t as SingleSelect,s as SingleSelectWithSupportingText,F as __namedExportsOrder,B as default};
