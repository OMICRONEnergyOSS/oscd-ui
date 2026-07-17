import{O as l,s as p}from"./storybook-utils-CyRMhsFM.js";import"./oscd-elevated-card-CaEaSib6.js";import{g as c}from"./getStorybookMeta-C_Dfhlzu.js";import{x as g}from"./iframe-BlmIIjc8.js";import{g as d}from"./index-CeNjisW3.js";import"./list-navigation-helpers-BYaPgfdc.js";import"./OscdCheckbox-C-VPC0EN.js";import"./OscdIcon-BF9UpfCs.js";import"./menuItemController-k5rPONrB.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-D5inW5DY.js";import"./form-associated-ob18pg9T.js";import"./checkbox-validator-D1loSRI3.js";import"./OscdRadio-BLGVKRwe.js";import"./focusable-Ow2gEIX7.js";import"./OscdList-a84XNi5w.js";import"./OscdListItem-BdyDKWIx.js";import"./list-item-styles-D7C7ftEO.js";import"./OscdOutlinedTextField-BNzIBgFN.js";import"./shared-styles-DnEMhRC_.js";import"./style-map-B3PQ7mrl.js";import"./on-report-validity-D1pS5cYO.js";import"./OscdOutlinedField-OVSthKTl.js";import"./shared-styles-CsN18xnd.js";import"./FilterListBase-tZk8b0Tc.js";import"./shared-styles-C5pccYmQ.js";import"./getStorybookHelpers-DQ9KU-nQ.js";import"./oscd-menu-item-vFGSEMX-.js";import"./OscdMenuItem-CBcjVsGV.js";import"./query-assigned-nodes-D4uADFl8.js";import"./oscd-filled-button-pAHRa5nn.js";import"./oscd-list-item-BA8wSq9a.js";import"./preload-helper-PPVm8Dsz.js";window.customElements.define("oscd-selection-list",l);const{args:i,argTypes:a,meta:u,template:S}=c({tagName:"oscd-selection-list"}),R={title:"Lists/Selection List",tags:["autodocs"],...u,render:o=>g` <style>
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
