import{x as r}from"./iframe-BEvFn4o0.js";import{g as e}from"./getStorybookMeta-CkVH9b_1.js";import{O as i}from"./OscdTabs-CZXm9Z0o.js";import"./oscd-primary-tab-VlTDc4U5.js";import"./oscd-secondary-tab-CKukG9T0.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-Do6kyNNH.js";import"./OscdListItem-qie-E2MX.js";import"./list-item-styles-BdUABIkZ.js";import"./OscdMenuItem-BTDFb1kz.js";import"./query-assigned-nodes-DbRHicYy.js";import"./OscdDivider-wlNaxr8D.js";import"./tab-styles-BhO0olfh.js";import"./focusable-BR6whehH.js";import"./OscdPrimaryTab-BG1LbgvU.js";import"./OscdSecondaryTab-Bgc-kUuU.js";customElements.define("oscd-tabs",i);const{args:c,argTypes:t,meta:d,template:n}=e({tagName:"oscd-tabs"}),E={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:t,args:c,render:a=>n(a,r`
        <oscd-primary-tab has-icon
          ><oscd-icon>edit</oscd-icon>Tab 1</oscd-primary-tab
        >
        <oscd-primary-tab has-icon
          ><oscd-icon>settings</oscd-icon>Tab 2</oscd-primary-tab
        >
      `)},s={argTypes:t,args:c,render:a=>n(a,r`
        <oscd-secondary-tab has-icon
          ><oscd-icon>edit</oscd-icon>Tab 1</oscd-secondary-tab
        >
        <oscd-secondary-tab has-icon
          ><oscd-icon>settings</oscd-icon>Tab 2</oscd-secondary-tab
        >
      `)};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  argTypes,
  args,
  render: argz => template(argz, html\`
        <oscd-primary-tab has-icon
          ><oscd-icon>edit</oscd-icon>Tab 1</oscd-primary-tab
        >
        <oscd-primary-tab has-icon
          ><oscd-icon>settings</oscd-icon>Tab 2</oscd-primary-tab
        >
      \`)
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  argTypes,
  args,
  render: argz => template(argz, html\`
        <oscd-secondary-tab has-icon
          ><oscd-icon>edit</oscd-icon>Tab 1</oscd-secondary-tab
        >
        <oscd-secondary-tab has-icon
          ><oscd-icon>settings</oscd-icon>Tab 2</oscd-secondary-tab
        >
      \`)
}`,...s.parameters?.docs?.source}}};const P=["WithPrimaryTabs","WithSecondaryTabs"];export{o as WithPrimaryTabs,s as WithSecondaryTabs,P as __namedExportsOrder,E as default};
