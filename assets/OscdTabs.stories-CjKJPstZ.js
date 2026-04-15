import{x as r}from"./iframe-CprjnxQ1.js";import{g as e}from"./getStorybookMeta-CBumkAFM.js";import{O as i}from"./OscdTabs-CfAN0chJ.js";import"./oscd-primary-tab-lx0CFZs-.js";import"./oscd-secondary-tab-CgLqB09F.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-Dzl6jIXq.js";import"./OscdListItem-C6Fu-I6V.js";import"./list-item-styles-CjF7S3P4.js";import"./OscdMenuItem-7J0ZBKMK.js";import"./query-assigned-nodes-WkFDPTIo.js";import"./OscdDivider-CwZqZ22H.js";import"./tab-styles-CLUy3gLE.js";import"./focusable-B-I7IA1z.js";import"./OscdPrimaryTab-DkFkz7mT.js";import"./OscdSecondaryTab-DE3yPUqy.js";customElements.define("oscd-tabs",i);const{args:c,argTypes:t,meta:d,template:n}=e({tagName:"oscd-tabs"}),E={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:t,args:c,render:a=>n(a,r`
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
