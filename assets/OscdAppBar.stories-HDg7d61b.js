import{i as e}from"./preload-helper-xPQekRTU.js";import{f as t,t as n}from"./lit-CCeopZMg.js";import{n as r,t as i}from"./scopedWcDecorator-C0dLMqmP.js";import{n as a,r as o,t as s}from"./getStorybookHelpers-BQfR0LFU.js";import{o as c,s as l}from"./OscdItem-CGJ7se6x.js";import{n as u,t as d}from"./OscdList-DendSVyi.js";import{n as f,t as p}from"./OscdListItem-MhOqcu_1.js";import{n as m,t as h}from"./OscdDivider-DdGlAXS-.js";import{n as g,t as _}from"./OscdTabs-ihbvVnv6.js";import{n as v,t as y}from"./OscdSecondaryTab-CSoz0fAV.js";import{n as b,t as x}from"./OscdFilledIconButton-CCHZqApT.js";import{n as S,t as C}from"./OscdAppBar-C8Be7e6I.js";var w,T,E,D,O,k,A,j,M;e((()=>{n(),u(),f(),l(),g(),v(),i(),b(),a(),m(),S(),{action:w}=__STORYBOOK_MODULE_ACTIONS__,{args:T,argTypes:E,template:D}=s(`oscd-app-bar`,{excludeCategories:[`slots`]}),O={title:`App Bar/App Bar`,component:`oscd-app-bar`,tags:[`autodocs`],decorators:[r,o],args:T,parameters:{layout:`fullscreen`,scopedElements:{"oscd-app-bar":C,"oscd-divider":h,"oscd-filled-icon-button":x,"oscd-icon":c,"oscd-list":d,"oscd-list-item":p,"oscd-tabs":_,"oscd-secondary-tab":y}},render:({title:e,subHeader:n,...r})=>t` ${D(r,t`<oscd-filled-icon-button
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
    `)}`,argTypes:{title:{control:{type:`text`},description:`App Bar Title`},scrolled:{control:{type:`boolean`},description:`Consumer-set state for the MD3 on-scroll app bar style.`},...E}},k={args:{title:`My App Bar`,scrolled:!1}},A={args:{title:`My App Bar`,scrolled:!0}},j={args:{title:`My App Bar (with subheader)`,subHeader:()=>t`
      <oscd-tabs style="width:100%;">
        <oscd-secondary-tab>Video</oscd-secondary-tab>
        <oscd-secondary-tab>Photos</oscd-secondary-tab>
        <oscd-secondary-tab>Audio</oscd-secondary-tab>
      </oscd-tabs>
    `}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My App Bar',
    scrolled: false
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My App Bar',
    scrolled: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Scrolled`,`WithSubHeader`]}))();export{k as Default,A as Scrolled,j as WithSubHeader,M as __namedExportsOrder,O as default};