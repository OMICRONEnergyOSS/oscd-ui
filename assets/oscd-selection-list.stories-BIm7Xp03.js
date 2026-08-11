import{i as e}from"./preload-helper-xPQekRTU.js";import{b as t,u as n}from"./static-html-JNahc6jH.js";import{n as r,t as i}from"./getStorybookMeta-GO6mpvl0.js";import{i as a,n as o,r as s,t as c}from"./storybook-utils-CAqMz3IT.js";import{t as l}from"./oscd-elevated-card-Cu-jNr5-.js";var u=e((()=>{a(),window.customElements.define(`oscd-selection-list`,s)})),d,f,p,m,h,g,_,v,y,b,x;e((()=>{u(),l(),r(),n(),c(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,{args:f,argTypes:p,meta:m,template:h}=i({tagName:`oscd-selection-list`}),g={title:`Lists/Selection List`,tags:[`autodocs`],...m,render:e=>t` <style>
        oscd-elevated-card {
          --md-elevated-card-container-color: var(--md-sys-color-surface);
        }
        oscd-selection-list {
          padding: 7px;
        }
      </style>
      <oscd-elevated-card
        @selection-list-change=${e=>{d(`selection-list-change`)(e.detail.selectedElements.map(e=>new XMLSerializer().serializeToString(e)))}}
      >
        ${h(e)}
      </oscd-elevated-card>`},_=e=>Array.from(o.querySelectorAll(`GSEControl`)).map(t=>({headline:t.getAttribute(`name`)??`unknown`,attachedElement:t,...e?{supportingText:t.getAttribute(`desc`)??void 0}:{}})),v={argTypes:{...p},args:{...f,".items":_(),filterable:!1}},y={argTypes:{...p},args:{...f,multiselect:!0,".items":_(),filterable:!1}},b={argTypes:{...p},args:{...f,".items":_(!0),filterable:!0}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes
  },
  args: {
    ...args,
    ['.items']: getListItems(),
    filterable: false
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes
  },
  args: {
    ...args,
    multiselect: true,
    ['.items']: getListItems(),
    filterable: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes
  },
  args: {
    ...args,
    ['.items']: getListItems(true),
    filterable: true
  }
}`,...b.parameters?.docs?.source}}},x=[`SingleSelect`,`MultiSelect`,`SingleSelectWithSupportingText`]}))();export{y as MultiSelect,v as SingleSelect,b as SingleSelectWithSupportingText,x as __namedExportsOrder,g as default};