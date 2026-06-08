import{x as a}from"./iframe-D_AT4TIz.js";import{O as i}from"./OscdList-Diogj996.js";import{O as n,a as p}from"./OscdListItem-Dtz4smBz.js";import{O as l}from"./OscdTabs-BX_hKv5m.js";import{O as m}from"./OscdSecondaryTab-CEHttviP.js";import{s as b}from"./scopedWcDecorator-Bw9pVIEe.js";import{O as u}from"./OscdFilledIconButton-DtcWEFyR.js";import{s as y,g as O}from"./getStorybookHelpers-BPhoQ4a6.js";import{O as f}from"./OscdDivider-BFj41Hs2.js";import{O as g}from"./OscdAppBar-CSVWfkzo.js";import"./preload-helper-PPVm8Dsz.js";import"./list-item-styles-B8z8P4EW.js";import"./tab-styles-D22VzQLO.js";import"./query-assigned-nodes-BPJpqv7A.js";import"./focusable-Cklo7YME.js";import"./shared-styles-DRELbOWQ.js";import"./is-rtl-DJNyvqXe.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,{args:h,argTypes:A,template:B}=O("oscd-app-bar",{excludeCategories:["slots"]}),V={title:"App Bar/App Bar",component:"oscd-app-bar",tags:["autodocs"],decorators:[b,y],args:h,parameters:{layout:"fullscreen",scopedElements:{"oscd-app-bar":g,"oscd-divider":f,"oscd-filled-icon-button":u,"oscd-icon":p,"oscd-list":i,"oscd-list-item":n,"oscd-tabs":l,"oscd-secondary-tab":m}},render:({title:c,subHeader:r,...d})=>a` ${B(d,a`<oscd-filled-icon-button
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
}`,...s.parameters?.docs?.source}}};const F=["Default","WithSubHeader"];export{o as Default,s as WithSubHeader,F as __namedExportsOrder,V as default};
