import{x as r}from"./iframe-BlmIIjc8.js";import{g as n}from"./getStorybookMeta-C_Dfhlzu.js";import{O as e}from"./OscdTabs-Ds6gZKmU.js";import"./oscd-primary-tab-Dky7Qppj.js";import"./oscd-secondary-tab-Ck9YSzO7.js";import"./oscd-menu-item-vFGSEMX-.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-DQ9KU-nQ.js";import"./OscdIcon-BF9UpfCs.js";import"./list-navigation-helpers-BYaPgfdc.js";import"./oscd-filled-button-pAHRa5nn.js";import"./menuItemController-k5rPONrB.js";import"./OscdList-a84XNi5w.js";import"./oscd-list-item-BA8wSq9a.js";import"./OscdListItem-BdyDKWIx.js";import"./list-item-styles-D7C7ftEO.js";import"./OscdDivider-CvXsD4ww.js";import"./tab-styles-hO2dz2mh.js";import"./query-assigned-nodes-D4uADFl8.js";import"./focusable-Ow2gEIX7.js";import"./OscdPrimaryTab-By2BQZce.js";import"./OscdSecondaryTab-DPHEVWvx.js";import"./OscdMenuItem-CBcjVsGV.js";customElements.define("oscd-tabs",e);const{args:t,argTypes:c,meta:d,template:i}=n({tagName:"oscd-tabs"}),v={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:c,args:t,render:a=>i(a,r`
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
}`,...s.parameters?.docs?.source}}};const w=["WithPrimaryTabs","WithSecondaryTabs"];export{o as WithPrimaryTabs,s as WithSecondaryTabs,w as __namedExportsOrder,v as default};
