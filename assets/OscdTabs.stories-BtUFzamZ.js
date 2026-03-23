import{x as r}from"./iframe-CKVEE6em.js";import{g as e}from"./getStorybookMeta-gRT3a4zT.js";import{O as i}from"./OscdTabs-Bt9o_kgB.js";import"./oscd-primary-tab-C0M0D0W9.js";import"./oscd-secondary-tab-Co6leTxR.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-B0ocG6Hc.js";import"./OscdListItem-BLWoK8yo.js";import"./list-item-styles-B2yz3MDx.js";import"./OscdMenuItem-CyNju_5X.js";import"./query-assigned-nodes-ClyEUDSF.js";import"./OscdDivider-B92dw13c.js";import"./tab-styles-uY4IS7W9.js";import"./focusable-sRpODznR.js";import"./OscdPrimaryTab-9kGi4GpW.js";import"./OscdSecondaryTab-CVGiub63.js";customElements.define("oscd-tabs",i);const{args:c,argTypes:t,meta:d,template:n}=e({tagName:"oscd-tabs"}),E={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:t,args:c,render:a=>n(a,r`
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
