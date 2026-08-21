import{i as e}from"./preload-helper-xPQekRTU.js";import{b as t,u as n}from"./static-html-JNahc6jH.js";import{n as r,t as i}from"./OscdAppBar-e2UZAD0i.js";import{n as a,t as o}from"./OscdIcon-BLAkUGod.js";import{n as s,t as c}from"./OscdFilledIconButton-73BrSh81.js";import{n as l,t as u}from"./OscdList-D9R0bwqM.js";import{n as d,t as f}from"./OscdListItem-Bri-RKGu.js";import{n as p,t as m}from"./OscdNavigationDrawer-C_vXKy9s.js";import{n as h,t as g}from"./OscdNavigationDrawerHeader-CFtCz6mX.js";import{n as _,t as v}from"./scopedWcDecorator-t3sv2sog.js";var y,b,x,S,C;e((()=>{n(),p(),l(),d(),v(),a(),r(),s(),h(),{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={title:`Navigation Drawer/Navigation Drawer`,component:`oscd-navigation-drawer`,tags:[`autodocs`],decorators:[_],parameters:{layout:`fullscreen`,scopedElements:{"oscd-navigation-drawer":m,"oscd-navigation-drawer-header":g,"oscd-app-bar":i,"oscd-list":u,"oscd-list-item":f,"oscd-filled-icon-button":c,"oscd-icon":o}},argTypes:{label:{control:{type:`text`},description:`Navigation drawer Header label`},opened:{control:{type:`boolean`},description:`Menu opened state`}},render:({label:e,opened:n})=>{let[r,i]=y();return t`
      <style>
        oscd-app-bar {
          --oscd-app-bar-background-color: var(--oscd-theme-primary);
          --oscd-app-bar-color: var(--md-sys-color-on-primary);
        }
      </style>

      <oscd-navigation-drawer
        ?opened=${n}
        @navigation-drawer-changed=${({detail:e})=>{b(`navigation-drawer-changed`)({detail:e}),e.opened||i({opened:!1})}}
      >
        <oscd-navigation-drawer-header>
          <div slot="headline">${e}</div>
          <div slot="supporting-text">sample.scd</div>
        </oscd-navigation-drawer-header>
        <oscd-list>
          <oscd-list-item type="button"
            ><div slot="headline">Home</div></oscd-list-item
          >
          <oscd-list-item type="button"
            ><div slot="headline">Profile</div></oscd-list-item
          >
          <oscd-list-item type="button"
            ><div slot="headline">Settings</div></oscd-list-item
          >
        </oscd-list>
      </oscd-navigation-drawer>
      <oscd-app-bar>
        <oscd-filled-icon-button
          slot="alignStart"
          aria-label="Menu"
          @click=${()=>i({opened:!0})}
        >
          <oscd-icon>menu</oscd-icon></oscd-filled-icon-button
        >
        <div slot="alignMiddle">Navigation Drawer Demo</div>
      </oscd-app-bar>

      <section>
        <p>This is the main content area.</p>
      </section>
    `}},S={args:{label:`Menu`,opened:!1}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu',
    opened: false
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`]}))();export{S as Default,C as __namedExportsOrder,x as default};