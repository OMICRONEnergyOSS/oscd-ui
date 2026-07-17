import{x as r}from"./iframe-BlmIIjc8.js";import{O as i}from"./OscdList-a84XNi5w.js";import{O as n}from"./OscdListItem-BdyDKWIx.js";import{O as p}from"./OscdIcon-BF9UpfCs.js";import{O as l}from"./OscdTabs-Ds6gZKmU.js";import{O as m}from"./OscdSecondaryTab-DPHEVWvx.js";import{s as b}from"./scopedWcDecorator--LtRVlvN.js";import{O as u}from"./OscdFilledIconButton-BfOkwVKI.js";import{s as y,g as O}from"./getStorybookHelpers-DQ9KU-nQ.js";import{O as f}from"./OscdDivider-CvXsD4ww.js";import{O as g}from"./OscdAppBar-DkxG0goX.js";import"./preload-helper-PPVm8Dsz.js";import"./list-navigation-helpers-BYaPgfdc.js";import"./list-item-styles-D7C7ftEO.js";import"./tab-styles-hO2dz2mh.js";import"./query-assigned-nodes-D4uADFl8.js";import"./focusable-Ow2gEIX7.js";import"./shared-styles-mOHjHnLS.js";import"./is-rtl-DJNyvqXe.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,{args:h,argTypes:A,template:B}=O("oscd-app-bar",{excludeCategories:["slots"]}),K={title:"App Bar/App Bar",component:"oscd-app-bar",tags:["autodocs"],decorators:[b,y],args:h,parameters:{layout:"fullscreen",scopedElements:{"oscd-app-bar":g,"oscd-divider":f,"oscd-filled-icon-button":u,"oscd-icon":p,"oscd-list":i,"oscd-list-item":n,"oscd-tabs":l,"oscd-secondary-tab":m}},render:({title:c,subHeader:a,...d})=>r` ${B(d,r`<oscd-filled-icon-button
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
