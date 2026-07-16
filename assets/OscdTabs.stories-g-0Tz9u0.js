import{x as r}from"./iframe-CzfB892c.js";import{g as n}from"./getStorybookMeta-DOS5upft.js";import{O as e}from"./OscdTabs-BEYcUjRR.js";import"./oscd-primary-tab-Dg0q-0DD.js";import"./oscd-secondary-tab-BeObzfGb.js";import"./oscd-menu-item-Bv29e9fa.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-Bv3ZIOVO.js";import"./OscdIcon-D6gSxZ3c.js";import"./list-navigation-helpers-CWtHtHq2.js";import"./oscd-filled-button-DQw484Ye.js";import"./menuItemController-B_J_C6eD.js";import"./OscdList-ZIhvBfgq.js";import"./oscd-list-item-C0ScTv6k.js";import"./OscdListItem-aUMQlSYk.js";import"./list-item-styles-Bz0C6iu4.js";import"./OscdDivider-ChOow31w.js";import"./tab-styles-CQ1KduFh.js";import"./query-assigned-nodes-CLgeST5H.js";import"./focusable-DATL9xS-.js";import"./OscdPrimaryTab-uMy8aMs-.js";import"./OscdSecondaryTab-zKxEAD-X.js";import"./OscdMenuItem-DA-1vXHl.js";customElements.define("oscd-tabs",e);const{args:t,argTypes:c,meta:d,template:i}=n({tagName:"oscd-tabs"}),v={title:"Tabs / Tabs",tags:["autodocs"],...d},o={argTypes:c,args:t,render:a=>i(a,r`
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
