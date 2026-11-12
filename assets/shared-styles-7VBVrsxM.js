import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,g as r,n as i,t as a}from"./lit-LihecQ0E.js";import{o,s,u as c}from"./iframe-BJeBrXqV.js";import{_ as l,h as u,r as d}from"./lit-element-CwUNoIyU.js";import{i as f,n as p,o as m,r as h,s as g,t as _}from"./delegate-l-TUd_7w.js";import{a as v,c as y,f as b,i as x,l as S,n as C,r as w,t as T,u as E}from"./form-submitter-D0SUri8x.js";import{n as D}from"./is-rtl-DKw6fUyE.js";var O,k;function A(){return(A=e((()=>{g(),a(),d(),h(),o(),_(),x(),E(),y(),T(),O=p(C(S(b(i)))),k=class extends O{constructor(){super(),this.softDisabled=!1,this.flipIconInRtl=!1,this.href=``,this.download=``,this.target=``,this.ariaLabelSelected=``,this.toggle=!1,this.selected=!1,this.flipIcon=D(this,this.flipIconInRtl),v(this,`click`),this.addEventListener(`click`,e=>{if(this.softDisabled||this.disabled&&this.href){e.stopImmediatePropagation(),e.preventDefault();return}let t=this.selected;w(e,()=>{!this.toggle||this.disabled||e.defaultPrevented||(this.selected=!t,this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0})))})})}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){let e=this.href?s`div`:s`button`,{ariaLabel:n,ariaHasPopup:r,ariaExpanded:i}=this,a=n&&this.ariaLabelSelected,o=this.toggle?this.selected:t,l=t;return this.href||(l=a&&this.selected?this.ariaLabelSelected:n),c`<${e}
        class="icon-button ${f(this.getRenderClasses())}"
        id="button"
        aria-label="${l||t}"
        aria-haspopup="${!this.href&&r||t}"
        aria-expanded="${!this.href&&i||t}"
        aria-pressed="${o}"
        aria-disabled=${!this.href&&this.softDisabled||t}
        ?disabled="${!this.href&&this.disabled}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?t:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():t}
        ${this.href?this.renderLink():this.renderTouchTarget()}
  </${e}>`}renderLink(){let{ariaLabel:e}=this;return n`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||t}"
        target="${this.target||t}"
        aria-label="${e||t}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return n`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return n`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return n`<span class="touch"></span>`}renderFocusRing(){return n`<md-focus-ring
      part="focus-ring"
      for=${this.href?`link`:`button`}></md-focus-ring>`}renderRipple(){let e=!this.href&&(this.disabled||this.softDisabled);return n`<md-ripple
      for=${this.href?`link`:t}
      ?disabled="${e}"></md-ripple>`}connectedCallback(){this.flipIcon=D(this,this.flipIconInRtl),super.connectedCallback()}},k.shadowRootOptions={mode:`open`,delegatesFocus:!0},m([l({type:Boolean,attribute:`soft-disabled`,reflect:!0})],k.prototype,`softDisabled`,void 0),m([l({type:Boolean,attribute:`flip-icon-in-rtl`})],k.prototype,`flipIconInRtl`,void 0),m([l()],k.prototype,`href`,void 0),m([l()],k.prototype,`download`,void 0),m([l()],k.prototype,`target`,void 0),m([l({attribute:`aria-label-selected`})],k.prototype,`ariaLabelSelected`,void 0),m([l({type:Boolean})],k.prototype,`toggle`,void 0),m([l({type:Boolean,reflect:!0})],k.prototype,`selected`,void 0),m([u()],k.prototype,`flipIcon`,void 0)})))()}var j;function M(){return(M=e((()=>{a(),j=r`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`})))()}export{A as i,j as n,k as r,M as t};