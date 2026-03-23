import{x as a}from"./iframe-BEvFn4o0.js";import{O as i,a as n,b as p}from"./OscdListItem-qie-E2MX.js";import{O as l}from"./OscdTabs-CZXm9Z0o.js";import{O as m}from"./OscdSecondaryTab-Bgc-kUuU.js";import{s as b}from"./scopedWcDecorator-Vllc8jDL.js";import{O as u}from"./OscdFilledIconButton-D-TG_hlX.js";import{g as y,s as O}from"./getStorybookHelpers-Do6kyNNH.js";import{O as f}from"./OscdDivider-wlNaxr8D.js";import{O as g}from"./OscdAppBar-DEBW9lOx.js";import"./preload-helper-PPVm8Dsz.js";import"./list-item-styles-BdUABIkZ.js";import"./tab-styles-BhO0olfh.js";import"./query-assigned-nodes-DbRHicYy.js";import"./focusable-BR6whehH.js";import"./shared-styles-BiqNNbo9.js";import"./is-rtl-DJNyvqXe.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,{args:h,argTypes:A,template:B}=y("oscd-app-bar",{excludeCategories:["slots"]}),P={title:"App Bar/App Bar",component:"oscd-app-bar",tags:["autodocs"],decorators:[b,O],args:h,parameters:{layout:"fullscreen",scopedElements:{"oscd-app-bar":g,"oscd-divider":f,"oscd-filled-icon-button":u,"oscd-icon":p,"oscd-list":n,"oscd-list-item":i,"oscd-tabs":l,"oscd-secondary-tab":m}},render:({title:c,subHeader:r,...d})=>a` ${B(d,a`<oscd-filled-icon-button
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
