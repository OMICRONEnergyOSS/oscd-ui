import{o as m,a as c,b as g,c as y}from"./OscdIcon-C3sU6W8j.js";import{b as f,m as x,_ as t,n as i,a as $,S as b}from"./list-navigation-helpers-uOLGipP7.js";import{x as r,c as n,E as s,u as v,i as h}from"./iframe-C4uLaTi3.js";import{n as E}from"./query-assigned-nodes-EHSBqaR2.js";import{M as I,s as C}from"./menuItemController-vk-DquCy.js";const R=x(h);class e extends R{constructor(){super(...arguments),this.disabled=!1,this.type="menuitem",this.href="",this.target="",this.keepOpen=!1,this.selected=!1,this.menuItemController=new I(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(l){this.menuItemController.setTypeaheadText(l)}render(){return this.renderListItem(r`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(l){const d=this.type==="link";let o;switch(this.menuItemController.tagName){case"a":o=n`a`;break;case"button":o=n`button`;break;default:case"li":o=n`li`;break}const u=d&&this.target?this.target:s;return v`
      <${o}
        id="item"
        tabindex=${this.disabled&&!d?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||s}
        aria-selected=${this.ariaSelected||s}
        aria-checked=${this.ariaChecked||s}
        aria-expanded=${this.ariaExpanded||s}
        aria-haspopup=${this.ariaHasPopup||s}
        class="list-item ${f(this.getRenderClasses())}"
        href=${this.href||s}
        target=${u}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${l}</${o}>
    `}renderRipple(){return r` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return r` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return r`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}}e.shadowRootOptions={...h.shadowRootOptions,delegatesFocus:!0};t([i({type:Boolean,reflect:!0})],e.prototype,"disabled",void 0);t([i()],e.prototype,"type",void 0);t([i()],e.prototype,"href",void 0);t([i()],e.prototype,"target",void 0);t([i({type:Boolean,attribute:"keep-open"})],e.prototype,"keepOpen",void 0);t([i({type:Boolean})],e.prototype,"selected",void 0);t([$(".list-item")],e.prototype,"listItemRoot",void 0);t([m({slot:"headline"})],e.prototype,"headlineElements",void 0);t([m({slot:"supporting-text"})],e.prototype,"supportingTextElements",void 0);t([E({slot:""})],e.prototype,"defaultElements",void 0);t([i({attribute:"typeahead-text"})],e.prototype,"typeaheadText",null);const a=class a extends b(e){};a.scopedElements={"md-ripple":y,"md-item":g,"md-focus-ring":c},a.styles=[C];let p=a;export{p as O};
