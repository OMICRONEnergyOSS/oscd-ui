import{x as s}from"./iframe-BFpCwY9R.js";import{O as i}from"./OscdNavigationDrawer-j9nmINsZ.js";import{O as d}from"./OscdList-XsnvtwlT.js";import{a as n,O as c}from"./OscdListItem-B_3Vgj5Y.js";import{s as l}from"./scopedWcDecorator-CYOFf2LB.js";import{O as p}from"./OscdAppBar-BBJC2ihf.js";import{O as m}from"./OscdFilledIconButton-RtpG3ZPK.js";import{O as g}from"./OscdNavigationDrawerHeader-C9dYDlnG.js";import"./preload-helper-PPVm8Dsz.js";import"./list-item-styles-Bfc4eJrR.js";import"./shared-styles-Bh1fW7E3.js";import"./is-rtl-DJNyvqXe.js";const{useArgs:v}=__STORYBOOK_MODULE_PREVIEW_API__,{action:u}=__STORYBOOK_MODULE_ACTIONS__,x={title:"Navigation Drawer/Navigation Drawer",component:"oscd-navigation-drawer",tags:["autodocs"],decorators:[l],parameters:{layout:"fullscreen",scopedElements:{"oscd-navigation-drawer":i,"oscd-navigation-drawer-header":g,"oscd-app-bar":p,"oscd-list":d,"oscd-list-item":c,"oscd-filled-icon-button":m,"oscd-icon":n}},argTypes:{label:{control:{type:"text"},description:"Navigation drawer Header label"},opened:{control:{type:"boolean"},description:"Menu opened state"}},render:({label:t,opened:r})=>{const[O,e]=v();return s`
      <style>
        oscd-app-bar {
          --oscd-app-bar-background-color: var(--oscd-theme-primary);
          --oscd-app-bar-color: var(--md-sys-color-on-primary);
        }
      </style>

      <oscd-navigation-drawer
        ?opened=${r}
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
}`,...o.parameters?.docs?.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,x as default};
