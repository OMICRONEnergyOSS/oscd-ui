import{x as n}from"./iframe-BlmIIjc8.js";import{O as r}from"./OscdAppBar-DkxG0goX.js";import{O as p}from"./menuItemController-k5rPONrB.js";import{O as m}from"./OscdTextButton-BiiIMgIZ.js";import{O as u}from"./OscdDialog-BUoZEcgs.js";import{O}from"./OscdDivider-CvXsD4ww.js";import{O as v}from"./OscdFilledSelect-CpDZfdm7.js";import{O as f}from"./OscdOutlinedSelect-DiOqBMhO.js";import{O as b}from"./OscdSelectOption-D-xxFMd7.js";import{O as g}from"./OscdFilledIconButton-BfOkwVKI.js";import{O as h}from"./OscdFilledTonalIconButton-U2Xc2pL5.js";import{O as y}from"./OscdIconButton-BwBoQLoo.js";import{O as B}from"./OscdIcon-BF9UpfCs.js";import{O as x}from"./OscdList-a84XNi5w.js";import{O as _}from"./OscdListItem-BdyDKWIx.js";import{O as w}from"./OscdMenu-DrBMhREg.js";import{O as T}from"./OscdMenuItem-CBcjVsGV.js";import{O as A}from"./OscdNavigationDrawer-O1ZLK5jN.js";import{O as $}from"./OscdNavigationDrawerHeader-9C3fltBx.js";import{O as C}from"./OscdPrimaryTab-By2BQZce.js";import{O as I}from"./OscdSecondaryTab-DPHEVWvx.js";import{O as S}from"./OscdTabs-Ds6gZKmU.js";import{s as D}from"./scopedWcDecorator--LtRVlvN.js";import{O as M}from"./OscdOutlinedButton-CnOaV9DM.js";import{O as E}from"./list-navigation-helpers-BYaPgfdc.js";import"./preload-helper-PPVm8Dsz.js";import"./redispatch-event-D1qO1AWI.js";import"./shared-styles-BMR-2hUA.js";import"./style-map-B3PQ7mrl.js";import"./validator-D5inW5DY.js";import"./form-associated-ob18pg9T.js";import"./on-report-validity-D1pS5cYO.js";import"./OscdFilledField-CP8QGVe0.js";import"./shared-styles-CsN18xnd.js";import"./OscdOutlinedField-OVSthKTl.js";import"./query-assigned-nodes-D4uADFl8.js";import"./shared-styles-mOHjHnLS.js";import"./is-rtl-DJNyvqXe.js";import"./list-item-styles-D7C7ftEO.js";import"./tab-styles-hO2dz2mh.js";import"./focusable-Ow2gEIX7.js";const{useArgs:k}=__STORYBOOK_MODULE_PREVIEW_API__,{action:s}=__STORYBOOK_MODULE_ACTIONS__,wo={title:"Open SCD/All Components",decorators:[D],parameters:{layout:"fullscreen",scopedElements:{"oscd-app-bar":r,"oscd-filled-button":p,"oscd-outlined-button":M,"oscd-text-button":m,"oscd-dialog":u,"oscd-divider":O,"oscd-filled-select":v,"oscd-outlined-select":f,"oscd-select-option":b,"oscd-filled-icon-button":g,"oscd-filled-tonal-icon-button":h,"oscd-icon-button":y,"oscd-icon":B,"oscd-list":x,"oscd-list-item":_,"oscd-menu":w,"oscd-menu-item":T,"oscd-navigation-drawer":A,"oscd-navigation-drawer-header":$,"oscd-primary-tab":C,"oscd-secondary-tab":I,"oscd-tabs":S,"oscd-elevation":E}},argTypes:{navOpened:{control:{type:"boolean"},description:"Navigation drawer opened state"},menuOpened:{control:{type:"boolean"},description:"Menu opened state"},tabCount:{control:{type:"number"},description:"Number of tabs in App Bar"}},render:({dialogOpen:d,navOpened:c,tabCount:a,menuOpened:l})=>{const[N,t]=k();return n`
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
}`,...i.parameters?.docs?.source}}};const To=["AllComponents"];export{i as AllComponents,To as __namedExportsOrder,wo as default};
