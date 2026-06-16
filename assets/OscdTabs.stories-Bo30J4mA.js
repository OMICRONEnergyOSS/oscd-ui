import{x as r}from"./iframe-BFpCwY9R.js";import{g as e}from"./getStorybookMeta-gDO-wW0N.js";import{O as i}from"./OscdTabs-DfI_awtQ.js";import"./oscd-primary-tab-NGs-SR_b.js";import"./oscd-secondary-tab-6mrKtRoE.js";import"./oscd-menu-item-COy5XFsF.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-cc4YvQDR.js";import"./OscdListItem-B_3Vgj5Y.js";import"./list-item-styles-Bfc4eJrR.js";import"./OscdList-XsnvtwlT.js";import"./OscdDivider-Bq-VYPqG.js";import"./tab-styles-B8Up2ho6.js";import"./query-assigned-nodes-Ud0G1qU0.js";import"./focusable-BjR9Ckpl.js";import"./OscdPrimaryTab-CaUW6k3_.js";import"./OscdSecondaryTab-ehktU_Py.js";import"./OscdMenuItem-DnbnThgq.js";customElements.define("oscd-tabs",i);const{args:c,argTypes:t,meta:d,template:n}=e({tagName:"oscd-tabs"}),k={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:t,args:c,render:a=>n(a,r`
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
