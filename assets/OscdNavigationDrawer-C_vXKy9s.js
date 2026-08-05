import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,f as r,h as i,u as a}from"./static-html-JNahc6jH.js";import{F as o,I as s,L as c,M as l,N as u,P as d,_ as f,f as p,h as m,j as h,m as g,p as _}from"./list-navigation-helpers-C1Ibc9kd.js";var v,y,b=e((()=>{u(),a(),f(),g(),p(),v=_(r),y=class extends v{constructor(){super(...arguments),this.opened=!1,this.pivot=`end`}render(){let e=this.opened?`true`:`false`,t=this.opened?`false`:`true`,{ariaLabel:r,ariaModal:a}=this;return n`
      <div
        class="md3-navigation-drawer-modal__scrim ${this.getScrimClasses()}"
        @click="${this.handleScrimClick}">
      </div>
      <div
        aria-expanded=${e}
        aria-hidden=${t}
        aria-label=${r||i}
        aria-modal=${a||i}
        class="md3-navigation-drawer-modal ${this.getRenderClasses()}"
        @keydown="${this.handleKeyDown}"
        role="dialog"
        ><div class="md3-elevation-overlay"></div>
        <div class="md3-navigation-drawer-modal__slot-content">
          <slot></slot>
        </div>
      </div>
    `}getScrimClasses(){return m({"md3-navigation-drawer-modal--scrim-visible":this.opened})}getRenderClasses(){return m({"md3-navigation-drawer-modal--opened":this.opened,"md3-navigation-drawer-modal--pivot-at-start":this.pivot===`start`})}updated(e){e.has(`opened`)&&setTimeout(()=>{this.dispatchEvent(new CustomEvent(`navigation-drawer-changed`,{detail:{opened:this.opened},bubbles:!0,composed:!0}))},250)}handleKeyDown(e){e.code===`Escape`&&(this.opened=!1)}handleScrimClick(){this.opened=!this.opened}},l([h({type:Boolean})],y.prototype,`opened`,void 0),l([h()],y.prototype,`pivot`,void 0)})),x,S=e((()=>{a(),x=t`:host{--_container-color: var(--md-navigation-drawer-modal-container-color, #fff);--_container-height: var(--md-navigation-drawer-modal-container-height, 100%);--_container-shape: var(--md-navigation-drawer-modal-container-shape, 0 16px 16px 0);--_container-width: var(--md-navigation-drawer-modal-container-width, 360px);--_divider-color: var(--md-navigation-drawer-modal-divider-color, #000);--_modal-container-elevation: var(--md-navigation-drawer-modal-modal-container-elevation, 1);--_scrim-color: var(--md-navigation-drawer-modal-scrim-color, );--_scrim-opacity: var(--md-navigation-drawer-modal-scrim-opacity, 0.04);--_standard-container-elevation: var(--md-navigation-drawer-modal-standard-container-elevation, 0);--md-elevation-level: var(--_modal-container-elevation)}.md3-navigation-drawer-modal{bottom:0;box-sizing:border-box;display:flex;justify-content:flex-end;overflow:hidden;position:absolute;top:0;inline-size:0;transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--opened{transition:inline-size .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}.md3-navigation-drawer-modal--pivot-at-start{justify-content:flex-start}.md3-navigation-drawer-modal__slot-content{display:flex;flex-direction:column;position:relative}.md3-navigation-drawer-modal__scrim{inset:0;opacity:0;position:absolute;visibility:hidden;background-color:var(--_scrim-color);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) .25s}.md3-navigation-drawer-modal--scrim-visible{visibility:visible;opacity:var(--_scrim-opacity);transition:opacity .25s cubic-bezier(0.4, 0, 0.2, 1) 0s,visibility 0s cubic-bezier(0.4, 0, 0.2, 1) 0s}
`})),C,w=e((()=>{a(),C=t`.md3-navigation-drawer-modal,.md3-navigation-drawer{background-color:var(--_container-color);border-radius:var(--_container-shape);height:var(--_container-height)}.md3-navigation-drawer-modal.md3-navigation-drawer-modal--opened,.md3-navigation-drawer.md3-navigation-drawer--opened{inline-size:var(--_container-width)}.md3-navigation-drawer-modal .md3-navigation-drawer-modal__slot-content,.md3-navigation-drawer .md3-navigation-drawer__slot-content{min-inline-size:var(--_container-width);max-inline-size:var(--_container-width)}
`})),T,E,D=e((()=>{o(),c(),a(),b(),S(),w(),T=t`
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
`,E=class extends s(y){static{this.scopedElements={"md-elevation":d}}static{this.styles=[C,x,T]}}}));export{D as n,E as t};