import{i as e}from"./preload-helper-xPQekRTU.js";import{b as t,f as n,h as r,u as i}from"./static-html-JNahc6jH.js";import{E as a,I as o,L as s,M as c,N as l,_ as u,f as d,h as f,j as p,m,p as h,x as g,y as _}from"./list-navigation-helpers-C1Ibc9kd.js";import{A as v,E as y,T as b,c as x,j as S,l as C}from"./OscdIcon-BLAkUGod.js";import{i as w,n as T,r as E,t as D}from"./menuItemController-CDb7NKZG.js";function O(){return new Event(`request-selection`,{bubbles:!0,composed:!0})}function k(){return new Event(`request-deselection`,{bubbles:!0,composed:!0})}var A,j=e((()=>{T(),A=class{get role(){return this.menuItemController.role}get typeaheadText(){return this.menuItemController.typeaheadText}setTypeaheadText(e){this.menuItemController.setTypeaheadText(e)}get displayText(){return this.internalDisplayText===null?this.menuItemController.typeaheadText:this.internalDisplayText}setDisplayText(e){this.internalDisplayText=e}constructor(e,t){this.host=e,this.internalDisplayText=null,this.firstUpdate=!0,this.onClick=()=>{this.menuItemController.onClick()},this.onKeydown=e=>{this.menuItemController.onKeydown(e)},this.lastSelected=this.host.selected,this.menuItemController=new D(e,t),e.addController(this)}hostUpdate(){this.lastSelected!==this.host.selected&&(this.host.ariaSelected=this.host.selected?`true`:`false`)}hostUpdated(){this.lastSelected!==this.host.selected&&!this.firstUpdate&&(this.host.selected?this.host.dispatchEvent(O()):this.host.dispatchEvent(k())),this.lastSelected=this.host.selected,this.firstUpdate=!1}}})),M,N,P=e((()=>{l(),i(),u(),m(),d(),j(),M=h(n),N=class extends M{constructor(){super(...arguments),this.disabled=!1,this.isMenuItem=!0,this.selected=!1,this.value=``,this.type=`option`,this.selectOptionController=new A(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.selectOptionController.typeaheadText}set typeaheadText(e){this.selectOptionController.setTypeaheadText(e)}get displayText(){return this.selectOptionController.displayText}set displayText(e){this.selectOptionController.setDisplayText(e)}render(){return this.renderListItem(t`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){return t`
      <li
        id="item"
        tabindex=${this.disabled?-1:0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel||r}
        aria-selected=${this.ariaSelected||r}
        aria-checked=${this.ariaChecked||r}
        aria-expanded=${this.ariaExpanded||r}
        aria-haspopup=${this.ariaHasPopup||r}
        class="list-item ${f(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${e}</li
      >
    `}renderRipple(){return t` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return t` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return t`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}},N.shadowRootOptions={...n.shadowRootOptions,delegatesFocus:!0},c([p({type:Boolean,reflect:!0})],N.prototype,`disabled`,void 0),c([p({type:Boolean,attribute:`md-menu-item`,reflect:!0})],N.prototype,`isMenuItem`,void 0),c([p({type:Boolean})],N.prototype,`selected`,void 0),c([p()],N.prototype,`value`,void 0),c([a(`.list-item`)],N.prototype,`listItemRoot`,void 0),c([g({slot:`headline`})],N.prototype,`headlineElements`,void 0),c([g({slot:`supporting-text`})],N.prototype,`supportingTextElements`,void 0),c([_({slot:``})],N.prototype,`defaultElements`,void 0),c([p({attribute:`typeahead-text`})],N.prototype,`typeaheadText`,null),c([p({attribute:`display-text`})],N.prototype,`displayText`,null)})),F,I=e((()=>{y(),C(),S(),E(),P(),s(),F=class extends o(N){static{this.scopedElements={"md-ripple":b,"md-focus-ring":v,"md-item":x}}static{this.styles=[w]}}}));export{I as n,F as t};