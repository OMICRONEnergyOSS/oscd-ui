import{O as l,s as p}from"./storybook-utils-DZZtifW8.js";import"./oscd-elevated-card-vf87RIBE.js";import{g as c}from"./getStorybookMeta-DOS5upft.js";import{x as g}from"./iframe-CzfB892c.js";import{g as d}from"./index-CeNjisW3.js";import"./list-navigation-helpers-CWtHtHq2.js";import"./OscdCheckbox-C7o6VquQ.js";import"./OscdIcon-D6gSxZ3c.js";import"./menuItemController-B_J_C6eD.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-DNzAhO9h.js";import"./form-associated-BTVmRIpu.js";import"./checkbox-validator-Dh2QDM13.js";import"./OscdRadio-SAy5Pnpk.js";import"./focusable-DATL9xS-.js";import"./OscdList-ZIhvBfgq.js";import"./OscdListItem-aUMQlSYk.js";import"./list-item-styles-Bz0C6iu4.js";import"./OscdOutlinedTextField-Bp_Aja_q.js";import"./shared-styles-D7RceSw8.js";import"./style-map-e5XHfPGA.js";import"./on-report-validity-Bx-7rykv.js";import"./OscdOutlinedField-B87lCXYz.js";import"./shared-styles-Csz4B7L3.js";import"./FilterListBase-BmGT86ey.js";import"./shared-styles-lKJBuM_O.js";import"./getStorybookHelpers-Bv3ZIOVO.js";import"./oscd-menu-item-Bv29e9fa.js";import"./OscdMenuItem-DA-1vXHl.js";import"./query-assigned-nodes-CLgeST5H.js";import"./oscd-filled-button-DQw484Ye.js";import"./oscd-list-item-C0ScTv6k.js";import"./preload-helper-PPVm8Dsz.js";window.customElements.define("oscd-selection-list",l);const{args:i,argTypes:a,meta:u,template:S}=c({tagName:"oscd-selection-list"}),R={title:"Lists/Selection List",tags:["autodocs"],...u,render:o=>g` <style>
        oscd-elevated-card {
          --md-elevated-card-container-color: var(--md-sys-color-surface);
        }
        oscd-selection-list {
          padding: 7px;
        }
      </style>
      <oscd-elevated-card
        @selection-list-change=${e=>{d("selection-list-change")(e.detail.selectedElements.map(n=>new XMLSerializer().serializeToString(n)))}}
      >
        ${S(o)}
      </oscd-elevated-card>`},m=o=>Array.from(p.querySelectorAll("GSEControl")).map(e=>({headline:e.getAttribute("name")??"unknown",attachedElement:e,...o?{supportingText:e.getAttribute("desc")??void 0}:{}})),t={argTypes:{...a},args:{...i,".items":m(),filterable:!1}},r={argTypes:{...a},args:{...i,multiselect:!0,".items":m(),filterable:!1}},s={argTypes:{...a},args:{...i,".items":m(!0),filterable:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const U=["SingleSelect","MultiSelect","SingleSelectWithSupportingText"];export{r as MultiSelect,t as SingleSelect,s as SingleSelectWithSupportingText,U as __namedExportsOrder,R as default};
