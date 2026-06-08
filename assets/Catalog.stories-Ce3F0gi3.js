import{x as n}from"./iframe-D_AT4TIz.js";import{O as r}from"./OscdAppBar-CSVWfkzo.js";import{O as p,a as m}from"./OscdMenuItem-BwTzKIea.js";import{O as u}from"./OscdTextButton-BzE9jhd1.js";import{O}from"./OscdDialog-DHSxP1bU.js";import{O as v}from"./OscdDivider-BFj41Hs2.js";import{O as f}from"./OscdFilledSelect-DK6fwjnz.js";import{O as b}from"./OscdOutlinedSelect-C24VB97x.js";import{O as g}from"./OscdSelectOption-BNK66B0O.js";import{O as h}from"./OscdFilledIconButton-DtcWEFyR.js";import{O as y}from"./OscdFilledTonalIconButton-B-OPAu8H.js";import{O as B}from"./OscdIconButton-CDMEvruf.js";import{O as x,a as _}from"./OscdListItem-Dtz4smBz.js";import{O as w}from"./OscdList-Diogj996.js";import{O as T}from"./OscdMenu-BAO-fEsH.js";import{O as A}from"./OscdNavigationDrawer-D8YEfuJr.js";import{O as $}from"./OscdNavigationDrawerHeader-CO_uw2wF.js";import{O as C}from"./OscdPrimaryTab-CixIjWjo.js";import{O as I}from"./OscdSecondaryTab-CEHttviP.js";import{O as S}from"./OscdTabs-BX_hKv5m.js";import{s as D}from"./scopedWcDecorator-Bw9pVIEe.js";import{O as M}from"./OscdOutlinedButton-Cmi7BjM4.js";import{O as E}from"./list-item-styles-B8z8P4EW.js";import"./preload-helper-PPVm8Dsz.js";import"./query-assigned-nodes-BPJpqv7A.js";import"./redispatch-event-D1qO1AWI.js";import"./shared-styles-DRpk3sww.js";import"./style-map-FWhBgtnV.js";import"./validator-B2hqroGq.js";import"./form-associated-CDMYVxQk.js";import"./on-report-validity-Db4pmVu5.js";import"./menu-DdSm8Duc.js";import"./OscdFilledField-C5QVlydv.js";import"./shared-styles-aM9cD-bE.js";import"./OscdOutlinedField-DdjJoX5A.js";import"./shared-styles-DRELbOWQ.js";import"./is-rtl-DJNyvqXe.js";import"./tab-styles-D22VzQLO.js";import"./focusable-Cklo7YME.js";const{useArgs:k}=__STORYBOOK_MODULE_PREVIEW_API__,{action:s}=__STORYBOOK_MODULE_ACTIONS__,xo={title:"Open SCD/All Components",decorators:[D],parameters:{layout:"fullscreen",scopedElements:{"oscd-app-bar":r,"oscd-filled-button":m,"oscd-outlined-button":M,"oscd-text-button":u,"oscd-dialog":O,"oscd-divider":v,"oscd-filled-select":f,"oscd-outlined-select":b,"oscd-select-option":g,"oscd-filled-icon-button":h,"oscd-filled-tonal-icon-button":y,"oscd-icon-button":B,"oscd-icon":_,"oscd-list":w,"oscd-list-item":x,"oscd-menu":T,"oscd-menu-item":p,"oscd-navigation-drawer":A,"oscd-navigation-drawer-header":$,"oscd-primary-tab":C,"oscd-secondary-tab":I,"oscd-tabs":S,"oscd-elevation":E}},argTypes:{navOpened:{control:{type:"boolean"},description:"Navigation drawer opened state"},menuOpened:{control:{type:"boolean"},description:"Menu opened state"},tabCount:{control:{type:"number"},description:"Number of tabs in App Bar"}},render:({dialogOpen:d,navOpened:c,tabCount:a,menuOpened:l})=>{const[N,t]=k();return n`
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
            @click=${()=>t({navOpened:!0})}
            ><oscd-icon>menu</oscd-icon></oscd-filled-icon-button
          >

          <oscd-filled-icon-button
            id="appBarMenuButton"
            @click=${()=>t({menuOpened:!0})}
            ><oscd-icon>settings</oscd-icon></oscd-filled-icon-button
          >
          <oscd-menu
            ?open=${l}
            id="appBarMenu"
            anchor="appBarMenuButton"
            surfaceCorner="end-end"
            anchorCorner="start-start"
            @closed=${()=>t({menuOpened:!1})}
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
          ${new Array(a||2).fill(null).map((o,e)=>n`<oscd-secondary-tab>Tab ${e}</oscd-secondary-tab>`)}
        </oscd-tabs>
      </oscd-app-bar>
      <oscd-navigation-drawer
        ?opened=${c}
        @navigation-drawer-changed=${({detail:o})=>{o.opened||t({navOpened:!1})}}
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
                @click=${o=>{const e=o.target?.parentElement?.querySelector("#menu");e&&(e.open=!e.open,s("menu click")({menu_open:e.open,event:o}))}}
                >Open Menu</oscd-filled-button
              >
              <oscd-menu
                id="menu"
                position="relative"
                anchor="menu-button"
                @close-menu=${({detail:o})=>{s("menu closed")({detail:o})}}
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
              @click=${()=>{t({dialogOpen:!0})}}
              >Open Dialog</oscd-filled-button
            >
            <oscd-dialog
              ?open=${d}
              @closed=${o=>{s("dialog closed")({event:o}),t({dialogOpen:!1})}}
            >
              <div slot="headline">Confirm Action</div>
              <div slot="content">
                Are you sure you want to proceed with this operation? This
                action cannot be undone.
              </div>
              <div slot="actions">
                <oscd-filled-button
                  @click=${()=>t({dialogOpen:!1})}
                  >Cancel</oscd-filled-button
                >
                <oscd-filled-button
                  @click=${()=>t({dialogOpen:!1})}
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
    `}},i={args:{navOpened:!1,menuOpened:!1,tabCount:5}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    navOpened: false,
    menuOpened: false,
    tabCount: 5
  }
}`,...i.parameters?.docs?.source}}};const _o=["AllComponents"];export{i as AllComponents,_o as __namedExportsOrder,xo as default};
