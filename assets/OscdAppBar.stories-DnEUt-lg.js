import{i as e}from"./preload-helper-xPQekRTU.js";import{b as t,u as n}from"./static-html-JNahc6jH.js";import{n as r,t as i}from"./OscdAppBar-e2UZAD0i.js";import{n as a,t as o}from"./OscdIcon-BLAkUGod.js";import{n as s,t as c}from"./OscdDivider-1no8AWdJ.js";import{n as l,t as u}from"./OscdFilledIconButton-73BrSh81.js";import{n as d,t as f}from"./OscdList-D9R0bwqM.js";import{n as p,t as m}from"./OscdListItem-Bri-RKGu.js";import{n as h,t as g}from"./OscdSecondaryTab-CNdUslkL.js";import{n as _,t as v}from"./OscdTabs-CpZwl5kk.js";import{n as y,t as b}from"./scopedWcDecorator-t3sv2sog.js";import{n as x,r as S,t as C}from"./getStorybookHelpers-CLjR0UsZ.js";var w,T,E,D,O,k,A,j;e((()=>{n(),d(),p(),a(),_(),h(),b(),l(),x(),s(),r(),{action:w}=__STORYBOOK_MODULE_ACTIONS__,{args:T,argTypes:E,template:D}=C(`oscd-app-bar`,{excludeCategories:[`slots`]}),O={title:`App Bar/App Bar`,component:`oscd-app-bar`,tags:[`autodocs`],decorators:[y,S],args:T,parameters:{layout:`fullscreen`,scopedElements:{"oscd-app-bar":i,"oscd-divider":c,"oscd-filled-icon-button":u,"oscd-icon":o,"oscd-list":f,"oscd-list-item":m,"oscd-tabs":v,"oscd-secondary-tab":g}},render:({title:e,subHeader:n,...r})=>t` ${D(r,t`<oscd-filled-icon-button
          slot="alignStart"
          aria-label="Menu"
          @click=${e=>{w(`actionStart clicked`)({event:e})}}
        >
          <oscd-icon>menu</oscd-icon></oscd-filled-icon-button
        >
        <div slot="alignMiddle">${e}</div>
        <oscd-filled-icon-button
          slot="alignEnd"
          aria-label="Menu"
          @click=${e=>{w(`alignEnd clicked`)({event:e})}}
        >
          <oscd-icon>more_vert</oscd-icon></oscd-filled-icon-button
        >
        ${n&&n()}
      </oscd-app-bar>
    `)}`,argTypes:{title:{control:{type:`text`},description:`App Bar Title`},...E}},k={args:{title:`My App Bar`}},A={args:{title:`My App Bar (with subheader)`,subHeader:()=>t`
      <oscd-tabs style="width:100%;">
        <oscd-secondary-tab>Video</oscd-secondary-tab>
        <oscd-secondary-tab>Photos</oscd-secondary-tab>
        <oscd-secondary-tab>Audio</oscd-secondary-tab>
      </oscd-tabs>
    `}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My App Bar'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithSubHeader`]}))();export{k as Default,A as WithSubHeader,j as __namedExportsOrder,O as default};