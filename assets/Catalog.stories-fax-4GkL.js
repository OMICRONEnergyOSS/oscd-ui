import{x as n}from"./iframe-BEvFn4o0.js";import{O as r}from"./OscdAppBar-DEBW9lOx.js";import{O as p,a as m}from"./OscdMenuItem-BTDFb1kz.js";import{O as u}from"./OscdTextButton-Df1Xw4kn.js";import{O}from"./OscdDialog-Zc3srZe1.js";import{O as v}from"./OscdDivider-wlNaxr8D.js";import{O as f}from"./OscdFilledSelect-DOjpcE0-.js";import{O as b}from"./OscdOutlinedSelect-Cuy94Oqf.js";import{O as g}from"./OscdSelectOption-DdpiGQ9H.js";import{O as h}from"./OscdFilledIconButton-D-TG_hlX.js";import{O as y}from"./OscdFilledTonalIconButton-CWYRSNH4.js";import{O as B}from"./OscdIconButton-CuL_Om_7.js";import{O as x,a as _,b as w}from"./OscdListItem-qie-E2MX.js";import{O as T}from"./OscdMenu-BBCTaQjl.js";import{O as A}from"./OscdNavigationDrawer-B8RQo4A7.js";import{O as $}from"./OscdNavigationDrawerHeader-DPTVafyg.js";import{O as C}from"./OscdPrimaryTab-BG1LbgvU.js";import{O as I}from"./OscdSecondaryTab-Bgc-kUuU.js";import{O as S}from"./OscdTabs-CZXm9Z0o.js";import{s as D}from"./scopedWcDecorator-Vllc8jDL.js";import{O as M}from"./OscdOutlinedButton-DxziEEt9.js";import{O as E}from"./list-item-styles-BdUABIkZ.js";import"./preload-helper-PPVm8Dsz.js";import"./query-assigned-nodes-DbRHicYy.js";import"./redispatch-event-D1qO1AWI.js";import"./shared-styles-VjMFm1Aj.js";import"./style-map-CCR2hFlr.js";import"./validator-B_YntnKT.js";import"./form-associated-DUVsC_kA.js";import"./on-report-validity-DJcQnhC5.js";import"./menu-CzZbf1KU.js";import"./OscdFilledField-CGZbxzgS.js";import"./shared-styles-DzyP5nii.js";import"./OscdOutlinedField-CryZy-QD.js";import"./shared-styles-BiqNNbo9.js";import"./is-rtl-DJNyvqXe.js";import"./tab-styles-BhO0olfh.js";import"./focusable-BR6whehH.js";const{useArgs:k}=__STORYBOOK_MODULE_PREVIEW_API__,{action:s}=__STORYBOOK_MODULE_ACTIONS__,Bo={title:"Open SCD/All Components",decorators:[D],parameters:{layout:"fullscreen",scopedElements:{"oscd-app-bar":r,"oscd-filled-button":m,"oscd-outlined-button":M,"oscd-text-button":u,"oscd-dialog":O,"oscd-divider":v,"oscd-filled-select":f,"oscd-outlined-select":b,"oscd-select-option":g,"oscd-filled-icon-button":h,"oscd-filled-tonal-icon-button":y,"oscd-icon-button":B,"oscd-icon":w,"oscd-list":_,"oscd-list-item":x,"oscd-menu":T,"oscd-menu-item":p,"oscd-navigation-drawer":A,"oscd-navigation-drawer-header":$,"oscd-primary-tab":C,"oscd-secondary-tab":I,"oscd-tabs":S,"oscd-elevation":E}},argTypes:{navOpened:{control:{type:"boolean"},description:"Navigation drawer opened state"},menuOpened:{control:{type:"boolean"},description:"Menu opened state"},tabCount:{control:{type:"number"},description:"Number of tabs in App Bar"}},render:({dialogOpen:d,navOpened:c,tabCount:a,menuOpened:l})=>{const[N,e]=k();return n`
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
            @click=${()=>e({navOpened:!0})}
            ><oscd-icon>menu</oscd-icon></oscd-filled-icon-button
          >

          <oscd-filled-icon-button
            id="appBarMenuButton"
            @click=${()=>e({menuOpened:!0})}
            ><oscd-icon>settings</oscd-icon></oscd-filled-icon-button
          >
          <oscd-menu
            ?open=${l}
            id="appBarMenu"
            anchor="appBarMenuButton"
            surfaceCorner="end-end"
            anchorCorner="start-start"
            @closed=${()=>e({menuOpened:!1})}
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
          ${new Array(a||2).fill(null).map((o,t)=>n`<oscd-secondary-tab>Tab ${t}</oscd-secondary-tab>`)}
        </oscd-tabs>
      </oscd-app-bar>
      <oscd-navigation-drawer
        ?opened=${c}
        @navigation-drawer-changed=${({detail:o})=>{o.opened||e({navOpened:!1})}}
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
                @click=${o=>{const t=o.target?.parentElement?.querySelector("#menu");t&&(t.open=!t.open,s("menu click")({menu_open:t.open,event:o}))}}
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
              @click=${()=>{e({dialogOpen:!0})}}
              >Open Dialog</oscd-filled-button
            >
            <oscd-dialog
              ?open=${d}
              @closed=${o=>{s("dialog closed")({event:o}),e({dialogOpen:!1})}}
            >
              <div slot="headline">Confirm Action</div>
              <div slot="content">
                Are you sure you want to proceed with this operation? This
                action cannot be undone.
              </div>
              <div slot="actions">
                <oscd-filled-button
                  @click=${()=>e({dialogOpen:!1})}
                  >Cancel</oscd-filled-button
                >
                <oscd-filled-button
                  @click=${()=>e({dialogOpen:!1})}
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
}`,...i.parameters?.docs?.source}}};const xo=["AllComponents"];export{i as AllComponents,xo as __namedExportsOrder,Bo as default};
