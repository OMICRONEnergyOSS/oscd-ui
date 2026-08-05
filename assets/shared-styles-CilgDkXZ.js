import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,a as n,b as r,f as i,h as a,n as o,t as s,u as c}from"./static-html-JNahc6jH.js";import{M as l,N as u,_ as d,f,h as p,j as m,k as h,m as g,p as _}from"./list-navigation-helpers-C1Ibc9kd.js";import{_ as v,g as y,h as b,m as x,p as S}from"./OscdIcon-CDSDekmX.js";import{n as C,t as w}from"./is-rtl-loYdLwK7.js";var T,E,D=e((()=>{u(),c(),d(),g(),s(),f(),S(),w(),b(),T=_(v(i)),E=class extends T{get name(){return this.getAttribute(`name`)??``}set name(e){this.setAttribute(`name`,e)}get form(){return this[y].form}get labels(){return this[y].labels}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.flipIconInRtl=!1,this.href=``,this.download=``,this.target=``,this.ariaLabelSelected=``,this.toggle=!1,this.selected=!1,this.type=`submit`,this.value=``,this.flipIcon=C(this,this.flipIconInRtl),this.addEventListener(`click`,this.handleClick.bind(this))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){let e=this.href?o`div`:o`button`,{ariaLabel:t,ariaHasPopup:r,ariaExpanded:i}=this,s=t&&this.ariaLabelSelected,c=this.toggle?this.selected:a,l=a;return this.href||(l=s&&this.selected?this.ariaLabelSelected:t),n`<${e}
        class="icon-button ${p(this.getRenderClasses())}"
        id="button"
        aria-label="${l||a}"
        aria-haspopup="${!this.href&&r||a}"
        aria-expanded="${!this.href&&i||a}"
        aria-pressed="${c}"
        aria-disabled=${!this.href&&this.softDisabled||a}
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClickOnChild}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?a:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():a}
        ${this.href?this.renderLink():this.renderTouchTarget()}
  </${e}>`}renderLink(){let{ariaLabel:e}=this;return r`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||a}"
        target="${this.target||a}"
        aria-label="${e||a}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return r`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return r`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return r`<span class="touch"></span>`}renderFocusRing(){return r`<md-focus-ring
      part="focus-ring"
      for=${this.href?`link`:`button`}></md-focus-ring>`}renderRipple(){let e=!this.href&&(this.disabled||this.softDisabled);return r`<md-ripple
      for=${this.href?`link`:a}
      ?disabled="${e}"></md-ripple>`}connectedCallback(){this.flipIcon=C(this,this.flipIconInRtl),super.connectedCallback()}handleClick(e){if(!this.href&&this.softDisabled){e.stopImmediatePropagation(),e.preventDefault();return}}async handleClickOnChild(e){await 0,!(!this.toggle||this.disabled||this.softDisabled||e.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0})))}},x(E),E.formAssociated=!0,E.shadowRootOptions={mode:`open`,delegatesFocus:!0},l([m({type:Boolean,reflect:!0})],E.prototype,`disabled`,void 0),l([m({type:Boolean,attribute:`soft-disabled`,reflect:!0})],E.prototype,`softDisabled`,void 0),l([m({type:Boolean,attribute:`flip-icon-in-rtl`})],E.prototype,`flipIconInRtl`,void 0),l([m()],E.prototype,`href`,void 0),l([m()],E.prototype,`download`,void 0),l([m()],E.prototype,`target`,void 0),l([m({attribute:`aria-label-selected`})],E.prototype,`ariaLabelSelected`,void 0),l([m({type:Boolean})],E.prototype,`toggle`,void 0),l([m({type:Boolean,reflect:!0})],E.prototype,`selected`,void 0),l([m()],E.prototype,`type`,void 0),l([m({reflect:!0})],E.prototype,`value`,void 0),l([h()],E.prototype,`flipIcon`,void 0)})),O,k=e((()=>{c(),O=t`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`}));export{D as i,O as n,E as r,k as t};