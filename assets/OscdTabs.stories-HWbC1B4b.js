import{x as r}from"./iframe-BxxurlDP.js";import{g as e}from"./getStorybookMeta-jb8d2n-5.js";import{O as i}from"./OscdTabs-DXHp0u5q.js";import"./oscd-primary-tab-CDVJe9tW.js";import"./oscd-secondary-tab-CQpR4iMT.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-DKJ4wwK_.js";import"./OscdListItem-CcTOxY3J.js";import"./list-item-styles-DDIVumax.js";import"./OscdMenuItem-BgDjJhKl.js";import"./query-assigned-nodes-DB9p0wIF.js";import"./OscdDivider-CknjzvMU.js";import"./tab-styles-lnpFs0gb.js";import"./focusable-DMHEir4x.js";import"./OscdPrimaryTab-B7AWWe-v.js";import"./OscdSecondaryTab-BnyiIgNi.js";customElements.define("oscd-tabs",i);const{args:c,argTypes:t,meta:d,template:n}=e({tagName:"oscd-tabs"}),E={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:t,args:c,render:a=>n(a,r`
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
