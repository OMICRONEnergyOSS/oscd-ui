import{i as e}from"./preload-helper-xPQekRTU.js";import{f as t,o as n,r,t as i}from"./lit-CCeopZMg.js";import{a,l as o,o as s}from"./iframe-Cz0MFfwx.js";import{_ as c,a as l,f as u,n as d,r as f,s as p,t as m}from"./lit-element-DJJrs8Rf.js";import{i as h,n as g,o as _,r as v,s as y,t as b}from"./delegate-BMczuBBm.js";import{m as x,p as S,v as C,y as w}from"./form-submitter-CWBm2HKx.js";import{n as T,o as E,s as D,t as O}from"./OscdItem-DxcQmniw.js";import{i as k,n as A,r as j,t as M}from"./menu-item-styles-DtJ9O8pQ.js";var N=e((()=>{D(),customElements.define(`oscd-icon`,E)})),P,F,I=e((()=>{y(),i(),f(),v(),a(),b(),k(),P=g(r),F=class extends P{constructor(){super(...arguments),this.disabled=!1,this.type=`menuitem`,this.href=``,this.target=``,this.keepOpen=!1,this.selected=!1,this.menuItemController=new j(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(e){this.menuItemController.setTypeaheadText(e)}render(){return this.renderListItem(t`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){let t=this.type===`link`,r;switch(this.menuItemController.tagName){case`a`:r=s`a`;break;case`button`:r=s`button`;break;default:case`li`:r=s`li`;break}let i=t&&this.target?this.target:n;return o`
      <${r}
        id="item"
        tabindex=${this.disabled&&!t?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||n}
        aria-selected=${this.ariaSelected||n}
        aria-checked=${this.ariaChecked||n}
        aria-expanded=${this.ariaExpanded||n}
        aria-haspopup=${this.ariaHasPopup||n}
        class="list-item ${h(this.getRenderClasses())}"
        href=${this.href||n}
        target=${i}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${e}</${r}>
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
    `}focus(){this.listItemRoot?.focus()}},F.shadowRootOptions={...r.shadowRootOptions,delegatesFocus:!0},_([c({type:Boolean,reflect:!0})],F.prototype,`disabled`,void 0),_([c()],F.prototype,`type`,void 0),_([c()],F.prototype,`href`,void 0),_([c()],F.prototype,`target`,void 0),_([c({type:Boolean,attribute:`keep-open`})],F.prototype,`keepOpen`,void 0),_([c({type:Boolean})],F.prototype,`selected`,void 0),_([u(`.list-item`)],F.prototype,`listItemRoot`,void 0),_([p({slot:`headline`})],F.prototype,`headlineElements`,void 0),_([p({slot:`supporting-text`})],F.prototype,`supportingTextElements`,void 0),_([l({slot:``})],F.prototype,`defaultElements`,void 0),_([c({attribute:`typeahead-text`})],F.prototype,`typeaheadText`,null)})),L,R=e((()=>{x(),T(),w(),I(),M(),d(),L=class extends m(F){static{this.scopedElements={"md-ripple":S,"md-item":O,"md-focus-ring":C}}static{this.styles=[A]}}})),z=e((()=>{R(),customElements.define(`oscd-menu-item`,L)}));export{N as i,L as n,R as r,z as t};