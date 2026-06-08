import{x as r}from"./iframe-D_AT4TIz.js";import{g as e}from"./getStorybookMeta-DSrCqPZ2.js";import{O as i}from"./OscdTabs-BX_hKv5m.js";import"./oscd-primary-tab-BamES_hV.js";import"./oscd-secondary-tab-CUqojzEm.js";import"./oscd-menu-item-BRx5nmZc.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-BPhoQ4a6.js";import"./OscdListItem-Dtz4smBz.js";import"./list-item-styles-B8z8P4EW.js";import"./OscdList-Diogj996.js";import"./OscdDivider-BFj41Hs2.js";import"./tab-styles-D22VzQLO.js";import"./query-assigned-nodes-BPJpqv7A.js";import"./focusable-Cklo7YME.js";import"./OscdPrimaryTab-CixIjWjo.js";import"./OscdSecondaryTab-CEHttviP.js";import"./OscdMenuItem-BwTzKIea.js";customElements.define("oscd-tabs",i);const{args:c,argTypes:t,meta:d,template:n}=e({tagName:"oscd-tabs"}),k={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:t,args:c,render:a=>n(a,r`
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
}`,...s.parameters?.docs?.source}}};const M=["WithPrimaryTabs","WithSecondaryTabs"];export{o as WithPrimaryTabs,s as WithSecondaryTabs,M as __namedExportsOrder,k as default};
