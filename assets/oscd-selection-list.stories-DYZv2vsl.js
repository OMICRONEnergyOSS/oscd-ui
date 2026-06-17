import{O as l,s as p}from"./storybook-utils-CEVYRq6s.js";import"./oscd-elevated-card-sDtiHKDc.js";import{g as c}from"./getStorybookMeta-fEcaYkww.js";import{x as g}from"./iframe-C4uLaTi3.js";import{g as d}from"./index-CeNjisW3.js";import"./list-navigation-helpers-uOLGipP7.js";import"./OscdCheckbox-BByuhJVy.js";import"./OscdIcon-C3sU6W8j.js";import"./menuItemController-vk-DquCy.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-BdcpFJ2q.js";import"./form-associated-DtXYuc2T.js";import"./checkbox-validator-CVPaXxLl.js";import"./OscdRadio-rZjVmI0d.js";import"./focusable-D_LV6R0C.js";import"./OscdList-C90geFFa.js";import"./OscdListItem-CcUpt_sr.js";import"./list-item-styles-CwxrGOCZ.js";import"./OscdOutlinedTextField-Dd6Lhoh6.js";import"./shared-styles-E0E9mV4N.js";import"./style-map-Cl8m6Gme.js";import"./on-report-validity-D7FQpsi-.js";import"./OscdOutlinedField-DaicQdGe.js";import"./shared-styles-9iojKk-g.js";import"./FilterListBase-CpNEnwHu.js";import"./shared-styles-DXtTFWkE.js";import"./getStorybookHelpers-BPPERp-C.js";import"./oscd-menu-item-D6eVNoir.js";import"./OscdMenuItem-AVFwwFRE.js";import"./query-assigned-nodes-EHSBqaR2.js";import"./oscd-filled-button-CEBWtmCm.js";import"./preload-helper-PPVm8Dsz.js";window.customElements.define("oscd-selection-list",l);const{args:i,argTypes:a,meta:u,template:S}=c({tagName:"oscd-selection-list"}),Q={title:"Lists/Selection List",tags:["autodocs"],...u,render:o=>g` <style>
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
}`,...s.parameters?.docs?.source}}};const R=["SingleSelect","MultiSelect","SingleSelectWithSupportingText"];export{r as MultiSelect,t as SingleSelect,s as SingleSelectWithSupportingText,R as __namedExportsOrder,Q as default};
