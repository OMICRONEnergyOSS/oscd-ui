import{o as a,e as m,c,d as y}from"./OscdListItem-B18tstYX.js";import{M as x,b as f}from"./OscdMenuItem-wP2ife6f.js";import{b as g,m as T,_ as s,n as i,a as C,S as b}from"./list-item-styles-D88BytE0.js";import{x as l,E as o,i as d}from"./iframe-CVDob4yH.js";import{n as v}from"./query-assigned-nodes-NHYQZ91Q.js";function E(){return new Event("request-selection",{bubbles:!0,composed:!0})}function I(){return new Event("request-deselection",{bubbles:!0,composed:!0})}class ${get role(){return this.menuItemController.role}get typeaheadText(){return this.menuItemController.typeaheadText}setTypeaheadText(e){this.menuItemController.setTypeaheadText(e)}get displayText(){return this.internalDisplayText!==null?this.internalDisplayText:this.menuItemController.typeaheadText}setDisplayText(e){this.internalDisplayText=e}constructor(e,h){this.host=e,this.internalDisplayText=null,this.firstUpdate=!0,this.onClick=()=>{this.menuItemController.onClick()},this.onKeydown=u=>{this.menuItemController.onKeydown(u)},this.lastSelected=this.host.selected,this.menuItemController=new x(e,h),e.addController(this)}hostUpdate(){this.lastSelected!==this.host.selected&&(this.host.ariaSelected=this.host.selected?"true":"false")}hostUpdated(){this.lastSelected!==this.host.selected&&!this.firstUpdate&&(this.host.selected?this.host.dispatchEvent(E()):this.host.dispatchEvent(I())),this.lastSelected=this.host.selected,this.firstUpdate=!1}}const R=T(d);class t extends R{constructor(){super(...arguments),this.disabled=!1,this.isMenuItem=!0,this.selected=!1,this.value="",this.type="option",this.selectOptionController=new $(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.selectOptionController.typeaheadText}set typeaheadText(e){this.selectOptionController.setTypeaheadText(e)}get displayText(){return this.selectOptionController.displayText}set displayText(e){this.selectOptionController.setDisplayText(e)}render(){return this.renderListItem(l`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){return l`
      <li
        id="item"
        tabindex=${this.disabled?-1:0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel||o}
        aria-selected=${this.ariaSelected||o}
        aria-checked=${this.ariaChecked||o}
        aria-expanded=${this.ariaExpanded||o}
        aria-haspopup=${this.ariaHasPopup||o}
        class="list-item ${g(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${e}</li
      >
    `}renderRipple(){return l` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`}renderFocusRing(){return l` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`}getRenderClasses(){return{disabled:this.disabled,selected:this.selected}}renderBody(){return l`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `}focus(){this.listItemRoot?.focus()}}t.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0};s([i({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0);s([i({type:Boolean,attribute:"md-menu-item",reflect:!0})],t.prototype,"isMenuItem",void 0);s([i({type:Boolean})],t.prototype,"selected",void 0);s([i()],t.prototype,"value",void 0);s([C(".list-item")],t.prototype,"listItemRoot",void 0);s([a({slot:"headline"})],t.prototype,"headlineElements",void 0);s([a({slot:"supporting-text"})],t.prototype,"supportingTextElements",void 0);s([v({slot:""})],t.prototype,"defaultElements",void 0);s([i({attribute:"typeahead-text"})],t.prototype,"typeaheadText",null);s([i({attribute:"display-text"})],t.prototype,"displayText",null);const r=class r extends b(t){};r.scopedElements={"md-ripple":y,"md-focus-ring":c,"md-item":m},r.styles=[f];let n=r;export{n as O};
