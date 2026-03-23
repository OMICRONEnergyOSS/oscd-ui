import{x as r}from"./iframe-BEvFn4o0.js";import{O as i}from"./OscdNavigationDrawer-B8RQo4A7.js";import{b as d,O as n,a as c}from"./OscdListItem-qie-E2MX.js";import{s as l}from"./scopedWcDecorator-Vllc8jDL.js";import{O as p}from"./OscdAppBar-DEBW9lOx.js";import{O as m}from"./OscdFilledIconButton-D-TG_hlX.js";import{O as g}from"./OscdNavigationDrawerHeader-DPTVafyg.js";import"./preload-helper-PPVm8Dsz.js";import"./list-item-styles-BdUABIkZ.js";import"./shared-styles-BiqNNbo9.js";import"./is-rtl-DJNyvqXe.js";const{useArgs:v}=__STORYBOOK_MODULE_PREVIEW_API__,{action:u}=__STORYBOOK_MODULE_ACTIONS__,S={title:"Navigation Drawer/Navigation Drawer",component:"oscd-navigation-drawer",tags:["autodocs"],decorators:[l],parameters:{layout:"fullscreen",scopedElements:{"oscd-navigation-drawer":i,"oscd-navigation-drawer-header":g,"oscd-app-bar":p,"oscd-list":c,"oscd-list-item":n,"oscd-filled-icon-button":m,"oscd-icon":d}},argTypes:{label:{control:{type:"text"},description:"Navigation drawer Header label"},opened:{control:{type:"boolean"},description:"Menu opened state"}},render:({label:t,opened:s})=>{const[O,e]=v();return r`
      <style>
        oscd-app-bar {
          --oscd-app-bar-background-color: var(--oscd-theme-primary);
          --oscd-app-bar-color: var(--md-sys-color-on-primary);
        }
      </style>

      <oscd-navigation-drawer
        ?opened=${s}
        @navigation-drawer-changed=${({detail:a})=>{u("navigation-drawer-changed")({detail:a}),a.opened||e({opened:!1})}}
      >
        <oscd-navigation-drawer-header>
          <div slot="headline">${t}</div>
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
          @click=${()=>e({opened:!0})}
        >
          <oscd-icon>menu</oscd-icon></oscd-filled-icon-button
        >
        <div slot="alignMiddle">Navigation Drawer Demo</div>
      </oscd-app-bar>

      <section>
        <p>This is the main content area.</p>
      </section>
    `}},o={args:{label:"Menu",opened:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu',
    opened: false
  }
}`,...o.parameters?.docs?.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,S as default};
