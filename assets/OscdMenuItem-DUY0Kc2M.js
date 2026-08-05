import{i as e}from"./preload-helper-xPQekRTU.js";import{a as t,b as n,f as r,h as i,n as a,t as o,u as s}from"./static-html-JNahc6jH.js";import{E as c,I as l,L as u,M as d,N as f,_ as p,f as m,h,j as g,m as _,p as v,x as y,y as b}from"./list-navigation-helpers-C1Ibc9kd.js";import{C as x,c as S,l as C,v as w,w as T,y as E}from"./OscdIcon-CDSDekmX.js";import{i as D,n as O,r as k,t as A}from"./menuItemController-CnzJ7A_q.js";var j,M,N=e((()=>{f(),s(),p(),_(),o(),m(),O(),j=v(r),M=class extends j{constructor(){super(...arguments),this.disabled=!1,this.type=`menuitem`,this.href=``,this.target=``,this.keepOpen=!1,this.selected=!1,this.menuItemController=new A(this,{getHeadlineElements:()=>this.headlineElements,getSupportingTextElements:()=>this.supportingTextElements,getDefaultElements:()=>this.defaultElements,getInteractiveElement:()=>this.listItemRoot})}get typeaheadText(){return this.menuItemController.typeaheadText}set typeaheadText(e){this.menuItemController.setTypeaheadText(e)}render(){return this.renderListItem(n`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(e){let n=this.type===`link`,r;switch(this.menuItemController.tagName){case`a`:r=a`a`;break;case`button`:r=a`button`;break;default:case`li`:r=a`li`;break}let o=n&&this.target?this.target:i;return t`
      <${r}
        id="item"
        tabindex=${this.disabled&&!n?-1:0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel||i}
        aria-selected=${this.ariaSelected||i}
        aria-checked=${this.ariaChecked||i}
        aria-expanded=${this.ariaExpanded||i}
        aria-haspopup=${this.ariaHasPopup||i}
        class="list-item ${h(this.getRenderClasses())}"
        href=${this.href||i}
        target=${o}
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
    `}focus(){this.listItemRoot?.focus()}},M.shadowRootOptions={...r.shadowRootOptions,delegatesFocus:!0},d([g({type:Boolean,reflect:!0})],M.prototype,`disabled`,void 0),d([g()],M.prototype,`type`,void 0),d([g()],M.prototype,`href`,void 0),d([g()],M.prototype,`target`,void 0),d([g({type:Boolean,attribute:`keep-open`})],M.prototype,`keepOpen`,void 0),d([g({type:Boolean})],M.prototype,`selected`,void 0),d([c(`.list-item`)],M.prototype,`listItemRoot`,void 0),d([y({slot:`headline`})],M.prototype,`headlineElements`,void 0),d([y({slot:`supporting-text`})],M.prototype,`supportingTextElements`,void 0),d([b({slot:``})],M.prototype,`defaultElements`,void 0),d([g({attribute:`typeahead-text`})],M.prototype,`typeaheadText`,null)})),P,F=e((()=>{E(),C(),T(),N(),k(),u(),P=class extends l(M){static{this.scopedElements={"md-ripple":w,"md-item":S,"md-focus-ring":x}}static{this.styles=[D]}}}));export{F as n,P as t};