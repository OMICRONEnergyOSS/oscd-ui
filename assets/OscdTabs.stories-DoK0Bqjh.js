import{x as r}from"./iframe-CED9u4fv.js";import{g as e}from"./getStorybookMeta-D4nAQZGb.js";import{O as i}from"./OscdTabs-CBEbuLT_.js";import"./oscd-primary-tab-B7l7fbxN.js";import"./oscd-secondary-tab-C_MYbfBf.js";import"./oscd-menu-item-DLNMOFEq.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-DCG8XUrM.js";import"./OscdListItem-YzTXxYva.js";import"./list-item-styles-DbtL1MIB.js";import"./OscdList--At7ZW1p.js";import"./OscdDivider-DV193aNU.js";import"./tab-styles-ChbvtbIQ.js";import"./query-assigned-nodes-GnmzpfNZ.js";import"./focusable-CbbQwCIQ.js";import"./OscdPrimaryTab-BgqbcAxk.js";import"./OscdSecondaryTab-CMWyU3FY.js";import"./OscdMenuItem-DhDenadO.js";customElements.define("oscd-tabs",i);const{args:c,argTypes:t,meta:d,template:n}=e({tagName:"oscd-tabs"}),k={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:t,args:c,render:a=>n(a,r`
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
