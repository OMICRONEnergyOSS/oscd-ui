import{x as n}from"./iframe-C4uLaTi3.js";import{O as r}from"./OscdAppBar-ugiqw5aT.js";import{O as p}from"./menuItemController-vk-DquCy.js";import{O as m}from"./OscdTextButton-Bekbxekp.js";import{O as u}from"./OscdDialog-DjZ_v0nE.js";import{O}from"./OscdDivider-HdJL0wmB.js";import{O as v}from"./OscdFilledSelect-BiJMzIQt.js";import{O as f}from"./OscdOutlinedSelect-9NUlRBdG.js";import{O as b}from"./OscdSelectOption-DrpPyErv.js";import{O as g}from"./OscdFilledIconButton-5NY0pPX4.js";import{O as h}from"./OscdFilledTonalIconButton-Bvi1y3sc.js";import{O as y}from"./OscdIconButton-5cjKo4Uu.js";import{O as B}from"./OscdIcon-C3sU6W8j.js";import{O as x}from"./OscdList-C90geFFa.js";import{O as _}from"./OscdListItem-CcUpt_sr.js";import{O as w}from"./OscdMenu-BFi7zQCQ.js";import{O as T}from"./OscdMenuItem-AVFwwFRE.js";import{O as A}from"./OscdNavigationDrawer-BJ8JIDn-.js";import{O as $}from"./OscdNavigationDrawerHeader-CmJHiJQW.js";import{O as C}from"./OscdPrimaryTab-DAyVDZo_.js";import{O as I}from"./OscdSecondaryTab-f5cL4Cqo.js";import{O as S}from"./OscdTabs-D0BOc9jd.js";import{s as D}from"./scopedWcDecorator-Bu1TrPH9.js";import{O as M}from"./OscdOutlinedButton-BrpLcTmv.js";import{O as E}from"./list-navigation-helpers-uOLGipP7.js";import"./preload-helper-PPVm8Dsz.js";import"./redispatch-event-D1qO1AWI.js";import"./shared-styles-DVo7NAZk.js";import"./style-map-Cl8m6Gme.js";import"./validator-BdcpFJ2q.js";import"./form-associated-DtXYuc2T.js";import"./on-report-validity-D7FQpsi-.js";import"./menu-BgyE_f8J.js";import"./OscdFilledField-Cx52R9UG.js";import"./shared-styles-9iojKk-g.js";import"./OscdOutlinedField-DaicQdGe.js";import"./query-assigned-nodes-EHSBqaR2.js";import"./shared-styles-PERDfklm.js";import"./is-rtl-DJNyvqXe.js";import"./list-item-styles-CwxrGOCZ.js";import"./tab-styles-CEfx0rAQ.js";import"./focusable-D_LV6R0C.js";const{useArgs:k}=__STORYBOOK_MODULE_PREVIEW_API__,{action:s}=__STORYBOOK_MODULE_ACTIONS__,To={title:"Open SCD/All Components",decorators:[D],parameters:{layout:"fullscreen",scopedElements:{"oscd-app-bar":r,"oscd-filled-button":p,"oscd-outlined-button":M,"oscd-text-button":m,"oscd-dialog":u,"oscd-divider":O,"oscd-filled-select":v,"oscd-outlined-select":f,"oscd-select-option":b,"oscd-filled-icon-button":g,"oscd-filled-tonal-icon-button":h,"oscd-icon-button":y,"oscd-icon":B,"oscd-list":x,"oscd-list-item":_,"oscd-menu":w,"oscd-menu-item":T,"oscd-navigation-drawer":A,"oscd-navigation-drawer-header":$,"oscd-primary-tab":C,"oscd-secondary-tab":I,"oscd-tabs":S,"oscd-elevation":E}},argTypes:{navOpened:{control:{type:"boolean"},description:"Navigation drawer opened state"},menuOpened:{control:{type:"boolean"},description:"Menu opened state"},tabCount:{control:{type:"number"},description:"Number of tabs in App Bar"}},render:({dialogOpen:d,navOpened:c,tabCount:a,menuOpened:l})=>{const[N,t]=k();return n`
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
}`,...i.parameters?.docs?.source}}};const Ao=["AllComponents"];export{i as AllComponents,Ao as __namedExportsOrder,To as default};
