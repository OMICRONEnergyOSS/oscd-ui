import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,n as r,t as i}from"./lit-LihecQ0E.js";import{o as a,s as o,u as s}from"./iframe-B-5YUH0c.js";import{_ as c,a as l,f as u,n as d,r as f,s as p,t as m}from"./lit-element-CwUNoIyU.js";import{i as h,n as g,o as _,r as v,s as y,t as b}from"./delegate-DVmVP7ly.js";import{m as x,p as S,v as C,y as w}from"./form-submitter-EPys99VO.js";import{n as T,o as E,s as D,t as O}from"./OscdItem-C8-Le0Md.js";import{i as k,n as A,r as j,t as M}from"./menu-item-styles-fqaQg6AQ.js";function N(){return(N=e((()=>{D(),customElements.define(`oscd-icon`,E)})))()}var P,F;function I(){return(I=e((()=>{y(),i(),f(),v(),a(),b(),k(),P=g(r),F=class extends P{constructor(){super(...arguments),this.disabled=!1,this.type=`menuitem`,this.href=``,this.target=``,this.keepOpen=!1,this.selected=!1,this.menuItemController=new j(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(e){this.menuItemController.setTypeaheadText(e)}render(){return this.renderListItem(n`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){let n=this.type===`link`,r;switch(this.menuItemController.tagName){case`a`:r=o`a`;break;case`button`:r=o`button`;break;default:case`li`:r=o`li`}let i=n&&this.target?this.target:t;return s`
      <${r}
        id="item"
        tabindex=${this.disabled&&!n?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||t}
        aria-selected=${this.ariaSelected||t}
        aria-checked=${this.ariaChecked||t}
        aria-expanded=${this.ariaExpanded||t}
        aria-haspopup=${this.ariaHasPopup||t}
        class="list-item ${h(this.getRenderClasses())}"
        href=${this.href||t}
        target=${i}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${e}</${r}>
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
    `}focus(){this.listItemRoot?.focus()}},F.shadowRootOptions={...r.shadowRootOptions,delegatesFocus:!0},_([c({type:Boolean,reflect:!0})],F.prototype,`disabled`,void 0),_([c()],F.prototype,`type`,void 0),_([c()],F.prototype,`href`,void 0),_([c()],F.prototype,`target`,void 0),_([c({type:Boolean,attribute:`keep-open`})],F.prototype,`keepOpen`,void 0),_([c({type:Boolean})],F.prototype,`selected`,void 0),_([u(`.list-item`)],F.prototype,`listItemRoot`,void 0),_([p({slot:`headline`})],F.prototype,`headlineElements`,void 0),_([p({slot:`supporting-text`})],F.prototype,`supportingTextElements`,void 0),_([l({slot:``})],F.prototype,`defaultElements`,void 0),_([c({attribute:`typeahead-text`})],F.prototype,`typeaheadText`,null)})))()}var L;function R(){return(R=e((()=>{x(),T(),w(),I(),M(),d(),L=class extends m(F){static{this.scopedElements={"md-ripple":S,"md-item":O,"md-focus-ring":C}}static{this.styles=[A]}}})))()}function z(){return(z=e((()=>{R(),customElements.define(`oscd-menu-item`,L)})))()}export{N as i,L as n,R as r,z as t};