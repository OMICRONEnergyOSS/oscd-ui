import{x as a}from"./iframe-BxxurlDP.js";import{O as i,a as n,b as p}from"./OscdListItem-CcTOxY3J.js";import{O as l}from"./OscdTabs-DXHp0u5q.js";import{O as m}from"./OscdSecondaryTab-BnyiIgNi.js";import{s as b}from"./scopedWcDecorator-DaH6mNfP.js";import{O as u}from"./OscdFilledIconButton-Dt2IXWOr.js";import{s as y,g as O}from"./getStorybookHelpers-DKJ4wwK_.js";import{O as f}from"./OscdDivider-CknjzvMU.js";import{O as g}from"./OscdAppBar-CAELpsPV.js";import"./preload-helper-PPVm8Dsz.js";import"./list-item-styles-DDIVumax.js";import"./tab-styles-lnpFs0gb.js";import"./query-assigned-nodes-DB9p0wIF.js";import"./focusable-DMHEir4x.js";import"./shared-styles-PkfzvYlg.js";import"./is-rtl-DJNyvqXe.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,{args:h,argTypes:A,template:B}=O("oscd-app-bar",{excludeCategories:["slots"]}),P={title:"App Bar/App Bar",component:"oscd-app-bar",tags:["autodocs"],decorators:[b,y],args:h,parameters:{layout:"fullscreen",scopedElements:{"oscd-app-bar":g,"oscd-divider":f,"oscd-filled-icon-button":u,"oscd-icon":p,"oscd-list":n,"oscd-list-item":i,"oscd-tabs":l,"oscd-secondary-tab":m}},render:({title:c,subHeader:r,...d})=>a` ${B(d,a`<oscd-filled-icon-button
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
        ${r&&r()}
      </oscd-app-bar>
    `)}`,argTypes:{title:{control:{type:"text"},description:"App Bar Title"},...A}},o={args:{title:"My App Bar"}},s={args:{title:"My App Bar (with subheader)",subHeader:()=>a`
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
}`,...s.parameters?.docs?.source}}};const V=["Default","WithSubHeader"];export{o as Default,s as WithSubHeader,V as __namedExportsOrder,P as default};
