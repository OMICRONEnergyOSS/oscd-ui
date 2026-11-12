import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,n as r,t as i}from"./lit-LihecQ0E.js";import{_ as a,a as o,f as s,n as c,r as l,s as u,t as d}from"./lit-element-CwUNoIyU.js";import{i as f,n as p,o as m,r as h,s as g,t as _}from"./delegate-l-TUd_7w.js";import{m as v,p as y,v as b,y as x}from"./form-submitter-D0SUri8x.js";import{n as S,t as C}from"./OscdItem-u-txZvbb.js";import{i as w,n as T,r as E,t as D}from"./menu-item-styles-0ftTFvJF.js";function O(){return new Event(`request-selection`,{bubbles:!0,composed:!0})}function k(){return new Event(`request-deselection`,{bubbles:!0,composed:!0})}var A;function j(){return(j=e((()=>{w(),A=class{get role(){return this.menuItemController.role}get typeaheadText(){return this.menuItemController.typeaheadText}setTypeaheadText(e){this.menuItemController.setTypeaheadText(e)}get displayText(){return this.internalDisplayText===null?this.menuItemController.typeaheadText:this.internalDisplayText}setDisplayText(e){this.internalDisplayText=e}constructor(e,t){this.host=e,this.internalDisplayText=null,this.firstUpdate=!0,this.onClick=()=>{this.menuItemController.onClick()},this.onKeydown=e=>{this.menuItemController.onKeydown(e)},this.lastSelected=this.host.selected,this.menuItemController=new E(e,t),e.addController(this)}hostUpdate(){this.lastSelected!==this.host.selected&&(this.host.ariaSelected=this.host.selected?`true`:`false`)}hostUpdated(){this.lastSelected!==this.host.selected&&!this.firstUpdate&&(this.host.selected?this.host.dispatchEvent(O()):this.host.dispatchEvent(k())),this.lastSelected=this.host.selected,this.firstUpdate=!1}}})))()}var M,N;function P(){return(P=e((()=>{g(),i(),l(),h(),_(),j(),M=p(r),N=class extends M{constructor(){super(...arguments),this.disabled=!1,this.isMenuItem=!0,this.selected=!1,this.value=``,this.type=`option`,this.selectOptionController=new A(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.selectOptionController.typeaheadText}set typeaheadText(e){this.selectOptionController.setTypeaheadText(e)}get displayText(){return this.selectOptionController.displayText}set displayText(e){this.selectOptionController.setDisplayText(e)}render(){return this.renderListItem(n`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){return n`
      <li
        id="item"
        tabindex=${this.disabled?-1:0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel||t}
        aria-selected=${this.ariaSelected||t}
        aria-checked=${this.ariaChecked||t}
        aria-expanded=${this.ariaExpanded||t}
        aria-haspopup=${this.ariaHasPopup||t}
        class="list-item ${f(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${e}</li
      >
    `}renderRipple(){return n` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return n` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return n`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}},N.shadowRootOptions={...r.shadowRootOptions,delegatesFocus:!0},m([a({type:Boolean,reflect:!0})],N.prototype,`disabled`,void 0),m([a({type:Boolean,attribute:`md-menu-item`,reflect:!0})],N.prototype,`isMenuItem`,void 0),m([a({type:Boolean})],N.prototype,`selected`,void 0),m([a()],N.prototype,`value`,void 0),m([s(`.list-item`)],N.prototype,`listItemRoot`,void 0),m([u({slot:`headline`})],N.prototype,`headlineElements`,void 0),m([u({slot:`supporting-text`})],N.prototype,`supportingTextElements`,void 0),m([o({slot:``})],N.prototype,`defaultElements`,void 0),m([a({attribute:`typeahead-text`})],N.prototype,`typeaheadText`,null),m([a({attribute:`display-text`})],N.prototype,`displayText`,null)})))()}var F;function I(){return(I=e((()=>{v(),S(),x(),D(),P(),c(),F=class extends d(N){static{this.scopedElements={"md-ripple":y,"md-focus-ring":b,"md-item":C}}static{this.styles=[T]}}})))()}function L(){return(L=e((()=>{I(),customElements.define(`oscd-select-option`,F)})))()}export{F as n,I as r,L as t};