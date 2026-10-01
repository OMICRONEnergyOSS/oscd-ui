import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,f as n,o as r,r as i,t as a}from"./lit-CCeopZMg.js";import{_ as o,n as s,r as c,t as l}from"./lit-element-DJJrs8Rf.js";import{n as u,t as d}from"./scopedWcDecorator-zjHr9WXM.js";import{c as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y}from"./delegate-DmQ0x4so.js";import{o as b,s as x}from"./OscdItem-Dtx8rqS-.js";import{n as S,t as C}from"./OscdList-BnAJv_ep.js";import{n as w,t as T}from"./OscdListItem-CqTW6jRc.js";import{n as E,t as D}from"./OscdFilledIconButton-CKmHqBjR.js";import{n as O,t as k}from"./OscdAppBar-BMsAyXXg.js";import{n as A,t as j}from"./OscdNavigationDrawerHeader-CzBI8XZ7.js";var M,N,P=e((()=>{v(),a(),c(),_(),y(),M=h(i),N=class extends M{constructor(){super(...arguments),this.opened=!1,this.pivot=`end`}render(){let e=this.opened?`true`:`false`,t=this.opened?`false`:`true`,{ariaLabel:i,ariaModal:a}=this;return n`
      <div
        class="md3-navigation-drawer-modal__scrim ${this.getScrimClasses()}"
        @click="${this.handleScrimClick}">
      </div>
      <div
        aria-expanded=${e}
        aria-hidden=${t}
        aria-label=${i||r}
        aria-modal=${a||r}
        class="md3-navigation-drawer-modal ${this.getRenderClasses()}"
        @keydown="${this.handleKeyDown}"
        role="dialog"
        ><div class="md3-elevation-overlay"></div>
        <div class="md3-navigation-drawer-modal__slot-content">
          <slot></slot>
        </div>
      </div>
    `}getScrimClasses(){return p({"md3-navigation-drawer-modal--scrim-visible":this.opened})}getRenderClasses(){return p({"md3-navigation-drawer-modal--opened":this.opened,"md3-navigation-drawer-modal--pivot-at-start":this.pivot===`start`})}updated(e){e.has(`opened`)&&setTimeout(()=>{this.dispatchEvent(new CustomEvent(`navigation-drawer-changed`,{detail:{opened:this.opened},bubbles:!0,composed:!0}))},250)}handleKeyDown(e){e.code===`Escape`&&(this.opened=!1)}handleScrimClick(){this.opened=!this.opened}},g([o({type:Boolean})],N.prototype,`opened`,void 0),g([o()],N.prototype,`pivot`,void 0)})),F,I=e((()=>{a(),F=t`:host{--_container-color: var(--md-navigation-drawer-modal-container-color, #fff);--_container-height: var(--md-navigation-drawer-modal-container-height, 100%);--_container-shape: var(--md-navigation-drawer-modal-container-shape, 0 16px 16px 0);--_container-width: var(--md-navigation-drawer-modal-container-width, 360px);--_divider-color: var(--md-navigation-drawer-modal-divider-color, #000);--_modal-container-elevation: var(--md-navigation-drawer-modal-modal-container-elevation, 1);--_scrim-color: var(--md-navigation-drawer-modal-scrim-color, );--_scrim-opacity: var(--md-navigation-drawer-modal-scrim-opacity, 0.04);--_standard-container-elevation: var(--md-navigation-drawer-modal-standard-container-elevation, 0);--md-elevation-level: var(--_modal-container-elevation)}.md3-navigation-drawer-modal{bottom:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;position:absolute;top:0;inline-size:0;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--opened{transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer-modal--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer-modal__slot-content{display:flex;flex-direction:column;position:relative}.md3-navigation-drawer-modal__scrim{inset:0;opacity:0;position:absolute;visibility:hidden;background-color:var(--_scrim-color);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--scrim-visible{visibility:visible;opacity:var(--_scrim-opacity);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}
`})),L,R=e((()=>{a(),L=t`.md3-navigation-drawer-modal,.md3-navigation-drawer{background-color:var(--_container-color);border-radius:var(--_container-shape);height:var(--_container-height)}.md3-navigation-drawer-modal.md3-navigation-drawer-modal--opened,.md3-navigation-drawer.md3-navigation-drawer--opened{inline-size:var(--_container-width)}.md3-navigation-drawer-modal .md3-navigation-drawer-modal__slot-content,.md3-navigation-drawer .md3-navigation-drawer__slot-content{min-inline-size:var(--_container-width);max-inline-size:var(--_container-width)}
`})),z,B,V=e((()=>{m(),s(),a(),P(),I(),R(),z=t`
  :host {
    --md-navigation-drawer-modal-scrim-color: var(--md-sys-color-scrim, #000);
    --md-navigation-drawer-modal-scrim-opacity: 0.32;
    --md-navigation-drawer-modal-container-color: var(
      --md-sys-color-surface-container
    );
  }
  .md3-navigation-drawer-modal--opened {
    z-index: 6;
  }
  .md3-navigation-drawer-modal__scrim {
    z-index: 5;
  }
`,B=class extends l(N){static{this.scopedElements={"md-elevation":f}}static{this.styles=[L,F,z]}}})),H,U,W,G,K;e((()=>{a(),V(),S(),w(),d(),x(),O(),E(),A(),{useArgs:H}=__STORYBOOK_MODULE_PREVIEW_API__,{action:U}=__STORYBOOK_MODULE_ACTIONS__,W={title:`Navigation Drawer/Navigation Drawer`,component:`oscd-navigation-drawer`,tags:[`autodocs`],decorators:[u],parameters:{layout:`fullscreen`,scopedElements:{"oscd-navigation-drawer":B,"oscd-navigation-drawer-header":j,"oscd-app-bar":k,"oscd-list":C,"oscd-list-item":T,"oscd-filled-icon-button":D,"oscd-icon":b}},argTypes:{label:{control:{type:`text`},description:`Navigation drawer Header label`},opened:{control:{type:`boolean`},description:`Menu opened state`}},render:({label:e,opened:t})=>{let[r,i]=H();return n`
      <style>
        oscd-app-bar {
          --oscd-app-bar-container-color: var(--md-sys-color-primary);
          --oscd-app-bar-headline-color: var(--md-sys-color-on-primary);
          --oscd-app-bar-leading-icon-color: var(--md-sys-color-on-primary);
          --oscd-app-bar-trailing-icon-color: var(--md-sys-color-on-primary);
        }
      </style>

      <oscd-navigation-drawer
        ?opened=${t}
        @navigation-drawer-changed=${({detail:e})=>{U(`navigation-drawer-changed`)({detail:e}),e.opened||i({opened:!1})}}
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
    `}},G={args:{label:`Menu`,opened:!1}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Menu',
    opened: false
  }
}`,...G.parameters?.docs?.source}}},K=[`Default`]}))();export{G as Default,K as __namedExportsOrder,W as default};