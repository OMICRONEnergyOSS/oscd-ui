import{x as r}from"./iframe-bV8sXuOy.js";import{g as e}from"./getStorybookMeta-5v34_TjP.js";import{O as i}from"./OscdTabs-CgQ-IuII.js";import"./oscd-primary-tab-BOkqfiSC.js";import"./oscd-secondary-tab-D6Igmr3A.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-Dixdbl-W.js";import"./OscdListItem-DFmTB3bM.js";import"./list-item-styles-oRaTTV7d.js";import"./OscdMenuItem-DbC5QpUl.js";import"./query-assigned-nodes-BDCLEJeA.js";import"./OscdDivider-DGU6ZsFX.js";import"./tab-styles--nQ2wo0E.js";import"./focusable-kKoMXlYf.js";import"./OscdPrimaryTab-D5ROx84t.js";import"./OscdSecondaryTab-Btyj7OZ7.js";customElements.define("oscd-tabs",i);const{args:c,argTypes:t,meta:d,template:n}=e({tagName:"oscd-tabs"}),E={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:t,args:c,render:a=>n(a,r`
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
