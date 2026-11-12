import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,t as n}from"./lit-LihecQ0E.js";import{n as r,t as i}from"./scopedWcDecorator-U9lulvnN.js";import{n as a,t as o}from"./OscdFilledIconButton-DKVOUFT9.js";import{o as s,s as c}from"./OscdItem-u-txZvbb.js";import{n as l,r as u,t as d}from"./getStorybookHelpers-B1kUdUqD.js";import{n as f,t as p}from"./OscdList-BX09UKw4.js";import{n as m,t as h}from"./OscdListItem-BtLkpzwU.js";import{n as g,t as _}from"./OscdDivider-Ok36RjVE.js";import{n as v,t as y}from"./OscdTabs-BmVJsceO.js";import{n as b,t as x}from"./OscdSecondaryTab-dIMPpq71.js";import{n as S,t as C}from"./OscdAppBar-HqYJthFQ.js";var w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{n(),f(),m(),c(),v(),b(),i(),a(),l(),g(),S(),{action:w}=__STORYBOOK_MODULE_ACTIONS__,{args:T,argTypes:E,template:D}=d(`oscd-app-bar`,{excludeCategories:[`slots`]}),O={title:`App Bar/App Bar`,component:`oscd-app-bar`,tags:[`autodocs`],decorators:[r,u],args:T,parameters:{layout:`fullscreen`,scopedElements:{"oscd-app-bar":C,"oscd-divider":_,"oscd-filled-icon-button":o,"oscd-icon":s,"oscd-list":p,"oscd-list-item":h,"oscd-tabs":y,"oscd-secondary-tab":x}},render:({title:e,subHeader:n,...r})=>t` ${D(r,t`<oscd-filled-icon-button
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
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Scrolled`,`WithSubHeader`]})))()}N();export{k as Default,A as Scrolled,j as WithSubHeader,M as __namedExportsOrder,O as default};