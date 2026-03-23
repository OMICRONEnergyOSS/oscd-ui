import{x as r}from"./iframe-CVDob4yH.js";import{g as e}from"./getStorybookMeta-BoCODc77.js";import{O as i}from"./OscdTabs-DeThJ8nI.js";import"./oscd-primary-tab-BQgPyQTp.js";import"./oscd-secondary-tab-CxpAadWu.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-BJL7o6s0.js";import"./OscdListItem-B18tstYX.js";import"./list-item-styles-D88BytE0.js";import"./OscdMenuItem-wP2ife6f.js";import"./query-assigned-nodes-NHYQZ91Q.js";import"./OscdDivider-BMPO16Pr.js";import"./tab-styles-CID1GgTj.js";import"./focusable-CuKpskI8.js";import"./OscdPrimaryTab-CqM6XUG1.js";import"./OscdSecondaryTab-CRETBbtk.js";customElements.define("oscd-tabs",i);const{args:c,argTypes:t,meta:d,template:n}=e({tagName:"oscd-tabs"}),E={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:t,args:c,render:a=>n(a,r`
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
