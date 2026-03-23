import{b,m as g,_ as s,n as a}from"./list-item-styles-DN_WYpBH.js";import{c as d,E as i,u as m,x as r,i as v,a as y}from"./iframe-BA_UwkOg.js";import{i as l,m as x,s as $,r as _}from"./OscdListItem-V0c71Avz.js";import{i as h}from"./is-rtl-DJNyvqXe.js";const I=g(x(v));class e extends I{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[l].form}get labels(){return this[l].labels}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.flipIconInRtl=!1,this.href="",this.download="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=h(this,this.flipIconInRtl),this.addEventListener("click",this.handleClick.bind(this))}willUpdate(){this.href&&(this.disabled=!1,this.softDisabled=!1)}render(){const t=this.href?d`div`:d`button`,{ariaLabel:n,ariaHasPopup:c,ariaExpanded:p}=this,u=n&&this.ariaLabelSelected,f=this.toggle?this.selected:i;let o=i;return this.href||(o=u&&this.selected?this.ariaLabelSelected:n),m`<${t}
        class="icon-button ${b(this.getRenderClasses())}"
        id="button"
        aria-label="${o||i}"
        aria-haspopup="${!this.href&&c||i}"
        aria-expanded="${!this.href&&p||i}"
        aria-pressed="${f}"
        aria-disabled=${!this.href&&this.softDisabled||i}
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClickOnChild}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?i:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():i}
        ${this.href?this.renderLink():this.renderTouchTarget()}
  </${t}>`}renderLink(){const{ariaLabel:t}=this;return r`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download||i}"
        target="${this.target||i}"
        aria-label="${t||i}">
        ${this.renderTouchTarget()}
      </a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return r`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return r`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return r`<span class="touch"></span>`}renderFocusRing(){return r`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){const t=!this.href&&(this.disabled||this.softDisabled);return r`<md-ripple
      for=${this.href?"link":i}
      ?disabled="${t}"></md-ripple>`}connectedCallback(){this.flipIcon=h(this,this.flipIconInRtl),super.connectedCallback()}handleClick(t){if(!this.href&&this.softDisabled){t.stopImmediatePropagation(),t.preventDefault();return}}async handleClickOnChild(t){await 0,!(!this.toggle||this.disabled||this.softDisabled||t.defaultPrevented)&&(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}$(e);e.formAssociated=!0;e.shadowRootOptions={mode:"open",delegatesFocus:!0};s([a({type:Boolean,reflect:!0})],e.prototype,"disabled",void 0);s([a({type:Boolean,attribute:"soft-disabled",reflect:!0})],e.prototype,"softDisabled",void 0);s([a({type:Boolean,attribute:"flip-icon-in-rtl"})],e.prototype,"flipIconInRtl",void 0);s([a()],e.prototype,"href",void 0);s([a()],e.prototype,"download",void 0);s([a()],e.prototype,"target",void 0);s([a({attribute:"aria-label-selected"})],e.prototype,"ariaLabelSelected",void 0);s([a({type:Boolean})],e.prototype,"toggle",void 0);s([a({type:Boolean,reflect:!0})],e.prototype,"selected",void 0);s([a()],e.prototype,"type",void 0);s([a({reflect:!0})],e.prototype,"value",void 0);s([_()],e.prototype,"flipIcon",void 0);const D=y`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`;export{e as I,D as s};
