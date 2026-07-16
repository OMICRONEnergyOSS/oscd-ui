import{x as r}from"./iframe-CzfB892c.js";import{O as i}from"./OscdList-ZIhvBfgq.js";import{O as n}from"./OscdListItem-aUMQlSYk.js";import{O as p}from"./OscdIcon-D6gSxZ3c.js";import{O as l}from"./OscdTabs-BEYcUjRR.js";import{O as m}from"./OscdSecondaryTab-zKxEAD-X.js";import{s as b}from"./scopedWcDecorator-Dniazn4N.js";import{O as u}from"./OscdFilledIconButton-CHIOzqrE.js";import{s as y,g as O}from"./getStorybookHelpers-Bv3ZIOVO.js";import{O as f}from"./OscdDivider-ChOow31w.js";import{O as g}from"./OscdAppBar-CFCA6D6h.js";import"./preload-helper-PPVm8Dsz.js";import"./list-navigation-helpers-CWtHtHq2.js";import"./list-item-styles-Bz0C6iu4.js";import"./tab-styles-CQ1KduFh.js";import"./query-assigned-nodes-CLgeST5H.js";import"./focusable-DATL9xS-.js";import"./shared-styles-ChfmohU1.js";import"./is-rtl-DJNyvqXe.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,{args:h,argTypes:A,template:B}=O("oscd-app-bar",{excludeCategories:["slots"]}),K={title:"App Bar/App Bar",component:"oscd-app-bar",tags:["autodocs"],decorators:[b,y],args:h,parameters:{layout:"fullscreen",scopedElements:{"oscd-app-bar":g,"oscd-divider":f,"oscd-filled-icon-button":u,"oscd-icon":p,"oscd-list":i,"oscd-list-item":n,"oscd-tabs":l,"oscd-secondary-tab":m}},render:({title:c,subHeader:a,...d})=>r` ${B(d,r`<oscd-filled-icon-button
          slot="alignStart"
          aria-label="Menu"
          @click=${t=>{e("actionStart clicked")({event:t})}}
        >
          <oscd-icon>menu</oscd-icon></oscd-filled-icon-button
        >
        <div slot="alignMiddle">${c}</div>
        <oscd-filled-icon-button
          slot="alignEnd"
          aria-label="Menu"
          @click=${t=>{e("alignEnd clicked")({event:t})}}
        >
          <oscd-icon>more_vert</oscd-icon></oscd-filled-icon-button
        >
        ${a&&a()}
      </oscd-app-bar>
    `)}`,argTypes:{title:{control:{type:"text"},description:"App Bar Title"},...A}},o={args:{title:"My App Bar"}},s={args:{title:"My App Bar (with subheader)",subHeader:()=>r`
      <oscd-tabs style="width:100%;">
        <oscd-secondary-tab>Video</oscd-secondary-tab>
        <oscd-secondary-tab>Photos</oscd-secondary-tab>
        <oscd-secondary-tab>Audio</oscd-secondary-tab>
      </oscd-tabs>
    `}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My App Bar'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My App Bar (with subheader)',
    subHeader: () => html\`
      <oscd-tabs style="width:100%;">
        <oscd-secondary-tab>Video</oscd-secondary-tab>
        <oscd-secondary-tab>Photos</oscd-secondary-tab>
        <oscd-secondary-tab>Audio</oscd-secondary-tab>
      </oscd-tabs>
    \`
  }
}`,...s.parameters?.docs?.source}}};const N=["Default","WithSubHeader"];export{o as Default,s as WithSubHeader,N as __namedExportsOrder,K as default};
