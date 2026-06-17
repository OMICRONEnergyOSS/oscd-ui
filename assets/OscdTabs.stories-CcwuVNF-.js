import{x as r}from"./iframe-C4uLaTi3.js";import{g as n}from"./getStorybookMeta-fEcaYkww.js";import{O as e}from"./OscdTabs-D0BOc9jd.js";import"./oscd-primary-tab-Bz7XdjCL.js";import"./oscd-secondary-tab-Bavnt2Ht.js";import"./oscd-menu-item-D6eVNoir.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-BPPERp-C.js";import"./OscdIcon-C3sU6W8j.js";import"./list-navigation-helpers-uOLGipP7.js";import"./oscd-filled-button-CEBWtmCm.js";import"./menuItemController-vk-DquCy.js";import"./OscdList-C90geFFa.js";import"./OscdDivider-HdJL0wmB.js";import"./tab-styles-CEfx0rAQ.js";import"./query-assigned-nodes-EHSBqaR2.js";import"./focusable-D_LV6R0C.js";import"./OscdPrimaryTab-DAyVDZo_.js";import"./OscdSecondaryTab-f5cL4Cqo.js";import"./OscdListItem-CcUpt_sr.js";import"./list-item-styles-CwxrGOCZ.js";import"./OscdMenuItem-AVFwwFRE.js";customElements.define("oscd-tabs",e);const{args:t,argTypes:c,meta:d,template:i}=n({tagName:"oscd-tabs"}),q={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:c,args:t,render:a=>i(a,r`
        <oscd-primary-tab has-icon
          ><oscd-icon>edit</oscd-icon>Tab 1</oscd-primary-tab
        >
        <oscd-primary-tab has-icon
          ><oscd-icon>settings</oscd-icon>Tab 2</oscd-primary-tab
        >
      `)},s={argTypes:c,args:t,render:a=>i(a,r`
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
}`,...s.parameters?.docs?.source}}};const v=["WithPrimaryTabs","WithSecondaryTabs"];export{o as WithPrimaryTabs,s as WithSecondaryTabs,v as __namedExportsOrder,q as default};
