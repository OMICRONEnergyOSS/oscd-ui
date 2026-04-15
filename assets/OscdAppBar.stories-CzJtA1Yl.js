import{x as a}from"./iframe-CprjnxQ1.js";import{O as i,a as n,b as p}from"./OscdListItem-C6Fu-I6V.js";import{O as l}from"./OscdTabs-CfAN0chJ.js";import{O as m}from"./OscdSecondaryTab-DE3yPUqy.js";import{s as b}from"./scopedWcDecorator-CcNweWjM.js";import{O as u}from"./OscdFilledIconButton-DaZhPW1E.js";import{s as y,g as O}from"./getStorybookHelpers-Dzl6jIXq.js";import{O as f}from"./OscdDivider-CwZqZ22H.js";import{O as g}from"./OscdAppBar-BZyUtJ2z.js";import"./preload-helper-PPVm8Dsz.js";import"./list-item-styles-CjF7S3P4.js";import"./tab-styles-CLUy3gLE.js";import"./query-assigned-nodes-WkFDPTIo.js";import"./focusable-B-I7IA1z.js";import"./shared-styles-B2Q7Jsgi.js";import"./is-rtl-DJNyvqXe.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,{args:h,argTypes:A,template:B}=O("oscd-app-bar",{excludeCategories:["slots"]}),P={title:"App Bar/App Bar",component:"oscd-app-bar",tags:["autodocs"],decorators:[b,y],args:h,parameters:{layout:"fullscreen",scopedElements:{"oscd-app-bar":g,"oscd-divider":f,"oscd-filled-icon-button":u,"oscd-icon":p,"oscd-list":n,"oscd-list-item":i,"oscd-tabs":l,"oscd-secondary-tab":m}},render:({title:c,subHeader:r,...d})=>a` ${B(d,a`<oscd-filled-icon-button
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
