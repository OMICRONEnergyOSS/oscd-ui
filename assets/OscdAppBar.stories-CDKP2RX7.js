import{x as r}from"./iframe-C4uLaTi3.js";import{O as i}from"./OscdList-C90geFFa.js";import{O as n}from"./OscdListItem-CcUpt_sr.js";import{O as p}from"./OscdIcon-C3sU6W8j.js";import{O as l}from"./OscdTabs-D0BOc9jd.js";import{O as m}from"./OscdSecondaryTab-f5cL4Cqo.js";import{s as b}from"./scopedWcDecorator-Bu1TrPH9.js";import{O as u}from"./OscdFilledIconButton-5NY0pPX4.js";import{s as y,g as O}from"./getStorybookHelpers-BPPERp-C.js";import{O as f}from"./OscdDivider-HdJL0wmB.js";import{O as g}from"./OscdAppBar-ugiqw5aT.js";import"./preload-helper-PPVm8Dsz.js";import"./list-navigation-helpers-uOLGipP7.js";import"./list-item-styles-CwxrGOCZ.js";import"./tab-styles-CEfx0rAQ.js";import"./query-assigned-nodes-EHSBqaR2.js";import"./focusable-D_LV6R0C.js";import"./shared-styles-PERDfklm.js";import"./is-rtl-DJNyvqXe.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,{args:h,argTypes:A,template:B}=O("oscd-app-bar",{excludeCategories:["slots"]}),K={title:"App Bar/App Bar",component:"oscd-app-bar",tags:["autodocs"],decorators:[b,y],args:h,parameters:{layout:"fullscreen",scopedElements:{"oscd-app-bar":g,"oscd-divider":f,"oscd-filled-icon-button":u,"oscd-icon":p,"oscd-list":i,"oscd-list-item":n,"oscd-tabs":l,"oscd-secondary-tab":m}},render:({title:c,subHeader:a,...d})=>r` ${B(d,r`<oscd-filled-icon-button
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
