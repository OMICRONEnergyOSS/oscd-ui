import{O as c,s as m}from"./storybook-utils-DgieigeP.js";import"./oscd-elevated-card-BmEmgVs3.js";import{g as p}from"./getStorybookMeta-CBumkAFM.js";import{x as g}from"./iframe-CprjnxQ1.js";import"./list-item-styles-CjF7S3P4.js";import"./OscdCheckbox-D3sOISt5.js";import"./OscdListItem-C6Fu-I6V.js";import"./OscdMenuItem-7J0ZBKMK.js";import"./query-assigned-nodes-WkFDPTIo.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-Dnm4BHtw.js";import"./form-associated-BLnBbfIv.js";import"./checkbox-validator-C30qe4lZ.js";import"./OscdRadio-DdD70ly2.js";import"./focusable-B-I7IA1z.js";import"./OscdOutlinedTextField-DG4pCpZb.js";import"./shared-styles-DgjOxnzW.js";import"./style-map-CzFiaC3H.js";import"./on-report-validity-BRzV5FZ4.js";import"./OscdOutlinedField-BmG9CwAF.js";import"./shared-styles-UZlYsJnl.js";import"./FilterListBase-CvWu50st.js";import"./shared-styles-C4QxA7q5.js";import"./getStorybookHelpers-Dzl6jIXq.js";import"./preload-helper-PPVm8Dsz.js";window.customElements.define("oscd-selection-list",c);const{action:d}=__STORYBOOK_MODULE_ACTIONS__,{args:a,argTypes:i,meta:u,template:S}=p({tagName:"oscd-selection-list"}),K={title:"Lists/Selection List",tags:["autodocs"],...u,render:o=>g` <style>
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
}`,...s.parameters?.docs?.source}}};const R=["SingleSelect","MultiSelect","SingleSelectWithSupportingText"];export{r as MultiSelect,t as SingleSelect,s as SingleSelectWithSupportingText,R as __namedExportsOrder,K as default};
