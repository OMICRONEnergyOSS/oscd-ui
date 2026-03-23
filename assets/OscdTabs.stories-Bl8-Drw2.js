import{x as r}from"./iframe-BA_UwkOg.js";import{g as e}from"./getStorybookMeta-Ds2o0t2f.js";import{O as i}from"./OscdTabs-0_pYKBfM.js";import"./oscd-primary-tab-CA5ADRY9.js";import"./oscd-secondary-tab-CXYcKtZj.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-DZzn3551.js";import"./OscdListItem-V0c71Avz.js";import"./list-item-styles-DN_WYpBH.js";import"./OscdMenuItem-CAk1AN5M.js";import"./query-assigned-nodes-CD84jn8v.js";import"./OscdDivider-vnumbB96.js";import"./tab-styles-Cn7tdfG0.js";import"./focusable-DB9bdCKU.js";import"./OscdPrimaryTab-DXOhU3y_.js";import"./OscdSecondaryTab-wZ4cZuWt.js";customElements.define("oscd-tabs",i);const{args:c,argTypes:t,meta:d,template:n}=e({tagName:"oscd-tabs"}),E={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:t,args:c,render:a=>n(a,r`
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
