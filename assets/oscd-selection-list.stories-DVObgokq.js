import{O as m,s as c}from"./storybook-utils-D-VFYBuc.js";import"./oscd-elevated-card-DBeywxrH.js";import{g as p}from"./getStorybookMeta-gDO-wW0N.js";import{x as g}from"./iframe-BFpCwY9R.js";import{g as d}from"./index-CeNjisW3.js";import"./list-item-styles-Bfc4eJrR.js";import"./OscdCheckbox-CUAXXZLT.js";import"./OscdListItem-B_3Vgj5Y.js";import"./OscdMenuItem-DnbnThgq.js";import"./query-assigned-nodes-Ud0G1qU0.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-C3KVGDlf.js";import"./form-associated-qER_3PrR.js";import"./checkbox-validator-CQVrzvKL.js";import"./OscdRadio-BE423v1M.js";import"./focusable-BjR9Ckpl.js";import"./OscdList-XsnvtwlT.js";import"./OscdOutlinedTextField-C_3bodT-.js";import"./shared-styles-DKww1ZEb.js";import"./style-map-BGd_K8UZ.js";import"./on-report-validity-DiIWBLfR.js";import"./OscdOutlinedField-BfnWYMBB.js";import"./shared-styles-Dp4Khk2d.js";import"./FilterListBase-u3mEvX3v.js";import"./shared-styles-CDQZNFZJ.js";import"./getStorybookHelpers-cc4YvQDR.js";import"./oscd-menu-item-COy5XFsF.js";import"./preload-helper-PPVm8Dsz.js";window.customElements.define("oscd-selection-list",m);const{args:i,argTypes:a,meta:u,template:S}=p({tagName:"oscd-selection-list"}),H={title:"Lists/Selection List",tags:["autodocs"],...u,render:o=>g` <style>
        oscd-elevated-card {
          --md-elevated-card-container-color: var(--md-sys-color-surface);
        }
        oscd-selection-list {
          padding: 7px;
        }
      </style>
      <oscd-elevated-card
        @selection-list-change=${e=>{d("selection-list-change")(e.detail.selectedElements.map(l=>new XMLSerializer().serializeToString(l)))}}
      >
        ${S(o)}
      </oscd-elevated-card>`},n=o=>Array.from(c.querySelectorAll("GSEControl")).map(e=>({headline:e.getAttribute("name")??"unknown",attachedElement:e,...o?{supportingText:e.getAttribute("desc")??void 0}:{}})),t={argTypes:{...a},args:{...i,".items":n(),filterable:!1}},r={argTypes:{...a},args:{...i,multiselect:!0,".items":n(),filterable:!1}},s={argTypes:{...a},args:{...i,".items":n(!0),filterable:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const J=["SingleSelect","MultiSelect","SingleSelectWithSupportingText"];export{r as MultiSelect,t as SingleSelect,s as SingleSelectWithSupportingText,J as __namedExportsOrder,H as default};
