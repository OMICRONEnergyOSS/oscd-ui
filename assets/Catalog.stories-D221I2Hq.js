import{i as e}from"./preload-helper-xPQekRTU.js";import{b as t,u as n}from"./static-html-JNahc6jH.js";import{F as r,P as i}from"./list-navigation-helpers-C1Ibc9kd.js";import{n as a,t as o}from"./OscdAppBar-e2UZAD0i.js";import{n as s,t as c}from"./OscdIcon-BLAkUGod.js";import{_ as l,g as u}from"./menuItemController-CDb7NKZG.js";import{n as ee,t as d}from"./OscdTextButton-BFBNhLbK.js";import{n as f,t as p}from"./OscdDivider-1no8AWdJ.js";import{n as m,t as h}from"./OscdDialog-V525384v.js";import{n as g,t as _}from"./OscdMenu-BO_BDSo4.js";import{n as v,t as y}from"./OscdFilledSelect-0Cbr3on7.js";import{n as b,t as x}from"./OscdOutlinedSelect-CnwVpw3L.js";import{n as S,t as C}from"./OscdSelectOption-CLA1PrIV.js";import{n as w,t as T}from"./OscdFilledIconButton-73BrSh81.js";import{n as E,t as D}from"./OscdFilledTonalIconButton-BwLlsffF.js";import{n as O,t as k}from"./OscdIconButton-De0GC20a.js";import{n as A,t as te}from"./OscdList-D9R0bwqM.js";import{n as j,t as M}from"./OscdListItem-Bri-RKGu.js";import{n as N,t as P}from"./OscdMenuItem-DTI4Ppy7.js";import{n as F,t as I}from"./OscdNavigationDrawer-C_vXKy9s.js";import{n as L,t as R}from"./OscdNavigationDrawerHeader-CFtCz6mX.js";import{n as z,t as B}from"./OscdPrimaryTab-Kc6q9_xX.js";import{n as V,t as H}from"./OscdSecondaryTab-CNdUslkL.js";import{n as U,t as W}from"./OscdTabs-CpZwl5kk.js";import{n as G,t as K}from"./scopedWcDecorator-t3sv2sog.js";import{n as q,t as J}from"./OscdOutlinedButton-DqrtRuZn.js";var Y,X,Z,Q,$;e((()=>{n(),a(),l(),ee(),m(),f(),v(),b(),S(),w(),E(),O(),s(),A(),j(),g(),N(),F(),L(),z(),V(),U(),K(),q(),r(),{useArgs:Y}=__STORYBOOK_MODULE_PREVIEW_API__,{action:X}=__STORYBOOK_MODULE_ACTIONS__,Z={title:`Open SCD/All Components`,decorators:[G],parameters:{layout:`fullscreen`,scopedElements:{"oscd-app-bar":o,"oscd-filled-button":u,"oscd-outlined-button":J,"oscd-text-button":d,"oscd-dialog":h,"oscd-divider":p,"oscd-filled-select":y,"oscd-outlined-select":x,"oscd-select-option":C,"oscd-filled-icon-button":T,"oscd-filled-tonal-icon-button":D,"oscd-icon-button":k,"oscd-icon":c,"oscd-list":te,"oscd-list-item":M,"oscd-menu":_,"oscd-menu-item":P,"oscd-navigation-drawer":I,"oscd-navigation-drawer-header":R,"oscd-primary-tab":B,"oscd-secondary-tab":H,"oscd-tabs":W,"oscd-elevation":i}},argTypes:{navOpened:{control:{type:`boolean`},description:`Navigation drawer opened state`},menuOpened:{control:{type:`boolean`},description:`Menu opened state`},tabCount:{control:{type:`number`},description:`Number of tabs in App Bar`}},render:({dialogOpen:e,navOpened:n,tabCount:r,menuOpened:i})=>{let[a,o]=Y();return t`
      <style>
        main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 16px;
        }

        section {
          position: relative;
          --md-elevation-level: 2;
          padding-inline: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }
        section > div {
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: start;
          margin: 16px;
        }
      </style>
      <oscd-app-bar>
        <div slot="title">All Components</div>
        <div slot="actionStart" style="position: relative">
          <oscd-filled-icon-button
            @click=${()=>o({navOpened:!0})}
            ><oscd-icon>menu</oscd-icon></oscd-filled-icon-button
          >

          <oscd-filled-icon-button
            id="appBarMenuButton"
            @click=${()=>o({menuOpened:!0})}
            ><oscd-icon>settings</oscd-icon></oscd-filled-icon-button
          >
          <oscd-menu
            ?open=${i}
            id="appBarMenu"
            anchor="appBarMenuButton"
            surfaceCorner="end-end"
            anchorCorner="start-start"
            @closed=${()=>o({menuOpened:!1})}
          >
            <oscd-menu-item>Option A</oscd-menu-item>
            <oscd-menu-item>Option B</oscd-menu-item>
          </oscd-menu>
        </div>
        <div slot="actionEnd">
          <oscd-filled-icon-button
            ><oscd-icon>edit</oscd-icon></oscd-filled-icon-button
          >
          <oscd-filled-tonal-icon-button
            ><oscd-icon>star</oscd-icon></oscd-filled-tonal-icon-button
          >
        </div>
        <oscd-tabs style="width: 100%">
          ${Array(r||2).fill(null).map((e,n)=>t`<oscd-secondary-tab>Tab ${n}</oscd-secondary-tab>`)}
        </oscd-tabs>
      </oscd-app-bar>
      <oscd-navigation-drawer
        ?opened=${n}
        @navigation-drawer-changed=${({detail:e})=>{e.opened||o({navOpened:!1})}}
      >
        <oscd-navigation-drawer-header>
          <span slot="headline">Headline</span>
          <span slot="supporting-text">supporting-text</span>
        </oscd-navigation-drawer-header>
        <oscd-divider></oscd-divider>
        <oscd-list>
          <oscd-list-item>Nav 1</oscd-list-item>
          <oscd-list-item>Nav 2</oscd-list-item>
        </oscd-list>
      </oscd-navigation-drawer>

      <main>
        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Buttons</h3>
          <div>
            <oscd-filled-button>Filled</oscd-filled-button>
            <oscd-outlined-button>Outlined</oscd-outlined-button>
            <oscd-text-button>Text</oscd-text-button>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Icon Buttons</h3>
          <div>
            <oscd-filled-icon-button
              ><oscd-icon>edit</oscd-icon></oscd-filled-icon-button
            >
            <oscd-filled-tonal-icon-button
              ><oscd-icon>star</oscd-icon></oscd-filled-tonal-icon-button
            >
            <oscd-icon-button><oscd-icon>menu</oscd-icon></oscd-icon-button>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Tabs</h3>
          <div>
            <oscd-tabs style="width: 100%">
              <oscd-secondary-tab>Tab 1</oscd-secondary-tab>
              <oscd-secondary-tab>Tab 2</oscd-secondary-tab>
            </oscd-tabs>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Selects</h3>
          <div>
            <oscd-filled-select label="Filled">
              <oscd-select-option value="1">One</oscd-select-option>
              <oscd-select-option value="2">Two</oscd-select-option>
            </oscd-filled-select>
            <oscd-outlined-select label="Outlined">
              <oscd-select-option value="1">One</oscd-select-option>
              <oscd-select-option value="2">Two</oscd-select-option>
            </oscd-outlined-select>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>List</h3>
          <div>
            <oscd-list>
              <oscd-list-item>Item A</oscd-list-item>
              <oscd-list-item>Item B</oscd-list-item>
            </oscd-list>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Menu</h3>
          <div>
            <div style="position:absolute;">
              <oscd-filled-button
                id="menu-button"
                @click=${e=>{let t=e.target?.parentElement?.querySelector(`#menu`);t&&(t.open=!t.open,X(`menu click`)({menu_open:t.open,event:e}))}}
                >Open Menu</oscd-filled-button
              >
              <oscd-menu
                id="menu"
                position="relative"
                anchor="menu-button"
                @close-menu=${({detail:e})=>{X(`menu closed`)({detail:e})}}
              >
                <oscd-menu-item>Option A</oscd-menu-item>
                <oscd-menu-item>Option B</oscd-menu-item>
              </oscd-menu>
            </div>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Dialog</h3>
          <div>
            <oscd-filled-button
              @click=${()=>{o({dialogOpen:!0})}}
              >Open Dialog</oscd-filled-button
            >
            <oscd-dialog
              ?open=${e}
              @closed=${e=>{X(`dialog closed`)({event:e}),o({dialogOpen:!1})}}
            >
              <div slot="headline">Confirm Action</div>
              <div slot="content">
                Are you sure you want to proceed with this operation? This
                action cannot be undone.
              </div>
              <div slot="actions">
                <oscd-filled-button
                  @click=${()=>o({dialogOpen:!1})}
                  >Cancel</oscd-filled-button
                >
                <oscd-filled-button
                  @click=${()=>o({dialogOpen:!1})}
                  >Confirm</oscd-filled-button
                >
              </div>
            </oscd-dialog>
          </div>
        </section>

        <section>
          <oscd-elevation></oscd-elevation>
          <h3>Divider</h3>
          <oscd-divider></oscd-divider>
        </section>
      </main>
    `}},Q={args:{navOpened:!1,menuOpened:!1,tabCount:5}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    navOpened: false,
    menuOpened: false,
    tabCount: 5
  }
}`,...Q.parameters?.docs?.source}}},$=[`AllComponents`]}))();export{Q as AllComponents,$ as __namedExportsOrder,Z as default};