import{_ as o}from"./list-navigation-helpers-BYaPgfdc.js";import{i as l,x as r,a}from"./iframe-BlmIIjc8.js";import{L as n,N as c,o as m}from"./OscdIcon-BF9UpfCs.js";const d=new Set(Object.values(c));class i extends l{get items(){return this.listController.items}constructor(){super(),this.listController=new n({isItem:t=>t.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:t=>{t.tabIndex=-1},activateItem:t=>{t.tabIndex=0},isNavigableKey:t=>d.has(t),isActivatable:t=>!t.disabled&&t.type!=="text"}),this.internals=this.attachInternals(),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return r`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}o([m({flatten:!0})],i.prototype,"slotItems",void 0);const h=a`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`,e=class e extends i{};e.styles=[h];let s=e;export{s as O};
