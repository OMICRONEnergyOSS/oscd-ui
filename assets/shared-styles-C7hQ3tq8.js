import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,a as n,b as r,f as i,h as a,m as ee,t as o,u as s}from"./static-html-JNahc6jH.js";import{E as c,M as l,N as u,_ as d,c as f,d as p,f as m,h,j as g,k as _,m as v,p as y,x as b}from"./list-navigation-helpers-C1Ibc9kd.js";import{S as x,b as S,w as C,x as w,y as T}from"./OscdIcon-BLAkUGod.js";import{f as E,h as D,m as O,o as k}from"./menuItemController-CDb7NKZG.js";import{n as A,t as j}from"./redispatch-event-5TInYFn2.js";import{r as M,t as N}from"./style-map-DuRQUK6e.js";import{a as te,i as P,n as F,o as I,r as L,t as R}from"./validator-CH9Znw8H.js";import{n as z,r as B,t as V}from"./on-report-validity-BXuqprEA.js";import{o as H,r as U,s as W}from"./OscdMenu-BO_BDSo4.js";var G,K=e((()=>{s(),F(),G=class extends R{computeValidity(e){return this.selectControl||=document.createElement(`select`),ee(r`<option value=${e.value}></option>`,this.selectControl),this.selectControl.value=e.value,this.selectControl.required=e.required,{validity:this.selectControl.validity,validationMessage:this.selectControl.validationMessage}}equals(e,t){return e.value===t.value&&e.required===t.required}copy({value:e,required:t}){return{value:e,required:t}}}}));function q(e){let t=[];for(let n=0;n<e.length;n++){let r=e[n];r.selected&&t.push([r,n])}return t}var J=e((()=>{})),Y,X,Z,Q,ne=e((()=>{u(),s(),d(),v(),N(),o(),m(),j(),te(),x(),S(),V(),K(),p(),E(),W(),U(),J(),X=Symbol(`value`),Z=y(z(I(w(C(i))))),Q=class extends Z{get value(){return this[X]}set value(e){this.lastUserSetValue=e,this.select(e)}get options(){return this.menu?.items??[]}get selectedIndex(){let[e,t]=(this.getSelectedOptions()??[])[0]??[];return t??-1}set selectedIndex(e){this.lastUserSetSelectedIndex=e,this.selectIndex(e)}get selectedOptions(){return(this.getSelectedOptions()??[]).map(([e])=>e)}get hasError(){return this.error||this.nativeError}constructor(){super(),this.quick=!1,this.required=!1,this.errorText=``,this.label=``,this.noAsterisk=!1,this.supportingText=``,this.error=!1,this.menuPositioning=`popover`,this.clampMenuWidth=!1,this.typeaheadDelay=200,this.hasLeadingIcon=!1,this.displayText=``,this.menuAlign=`start`,this[Y]=``,this.lastUserSetValue=null,this.lastUserSetSelectedIndex=null,this.lastSelectedOption=null,this.lastSelectedOptionRecords=[],this.nativeError=!1,this.nativeErrorText=``,this.focused=!1,this.open=!1,this.defaultFocus=k.NONE,this.prevOpen=this.open,this.selectWidth=0,this.addEventListener(`focus`,this.handleFocus.bind(this)),this.addEventListener(`blur`,this.handleBlur.bind(this))}select(e){let t=this.options.find(t=>t.value===e);t&&this.selectItem(t)}selectIndex(e){let t=this.options[e];t&&this.selectItem(t)}reset(){for(let e of this.options)e.selected=e.hasAttribute(`selected`);this.updateValueAndDisplayText(),this.nativeError=!1,this.nativeErrorText=``}showPicker(){this.open=!0}[(Y=X,B)](e){e?.preventDefault();let t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}update(e){if(this.hasUpdated||this.initUserSelection(),this.prevOpen!==this.open&&this.open){let e=this.getBoundingClientRect();this.selectWidth=e.width}this.prevOpen=this.open,super.update(e)}render(){return r`
      <span
        class="select ${h(this.getRenderClasses())}"
        @focusout=${this.handleFocusout}>
        ${this.renderField()} ${this.renderMenu()}
      </span>
    `}async firstUpdated(e){await this.menu?.updateComplete,this.lastSelectedOptionRecords.length||this.initUserSelection(),!this.lastSelectedOptionRecords.length&&!this.options.length&&setTimeout(()=>{this.updateValueAndDisplayText()}),super.firstUpdated(e)}getRenderClasses(){return{disabled:this.disabled,error:this.error,open:this.open}}renderField(){let e=this.ariaLabel||this.label;return n`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled?`-1`:`0`}
          aria-label=${e||a}
          aria-describedby="description"
          aria-expanded=${this.open?`true`:`false`}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          ?no-asterisk=${this.noAsterisk}
          .focused=${this.focused||this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.hasError}
          ?has-start=${this.hasLeadingIcon}
          has-end
          supporting-text=${this.supportingText}
          error-text=${this.getErrorText()}
          @keydown=${this.handleKeydown}
          @click=${this.handleClick}>
         ${this.renderFieldContent()}
         <div id="description" slot="aria-describedby"></div>
      </${this.fieldTag}>`}renderFieldContent(){return[this.renderLeadingIcon(),this.renderLabel(),this.renderTrailingIcon()]}renderLeadingIcon(){return r`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return r`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon
              class="down"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"></polygon>
            <polygon
              class="up"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
    `}renderLabel(){return r`<div id="label">${this.displayText||r`&nbsp;`}</div>`}renderMenu(){let e=this.label||this.ariaLabel;return r`<div class="menu-wrapper">
      <md-menu
        id="listbox"
        .defaultFocus=${this.defaultFocus}
        role="listbox"
        tabindex="-1"
        aria-label=${e||a}
        stay-open-on-focusout
        part="menu"
        exportparts="focus-ring: menu-focus-ring"
        anchor="field"
        style=${M({"--__menu-min-width":`${this.selectWidth}px`,"--__menu-max-width":this.clampMenuWidth?`${this.selectWidth}px`:void 0})}
        no-navigation-wrap
        .open=${this.open}
        .quick=${this.quick}
        .positioning=${this.menuPositioning}
        .typeaheadDelay=${this.typeaheadDelay}
        .anchorCorner=${this.menuAlign===`start`?`end-start`:`end-end`}
        .menuCorner=${this.menuAlign===`start`?`start-start`:`start-end`}
        @opening=${this.handleOpening}
        @opened=${this.redispatchEvent}
        @closing=${this.redispatchEvent}
        @closed=${this.handleClosed}
        @close-menu=${this.handleCloseMenu}
        @request-selection=${this.handleRequestSelection}
        @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>
    </div>`}renderMenuContent(){return r`<slot></slot>`}handleKeydown(e){if(this.open||this.disabled||!this.menu)return;let t=this.menu.typeaheadController,n=e.code===`Space`||e.code===`ArrowDown`||e.code===`ArrowUp`||e.code===`End`||e.code===`Home`||e.code===`Enter`;if(!t.isTypingAhead&&n){switch(e.preventDefault(),this.open=!0,e.code){case`Space`:case`ArrowDown`:case`Enter`:this.defaultFocus=k.NONE;break;case`End`:this.defaultFocus=k.LAST_ITEM;break;case`ArrowUp`:case`Home`:this.defaultFocus=k.FIRST_ITEM;break;default:break}return}if(e.key.length===1){t.onKeydown(e),e.preventDefault();let{lastActiveRecord:n}=t;if(!n)return;this.labelEl?.setAttribute?.(`aria-live`,`polite`),this.selectItem(n[H.ITEM])&&this.dispatchInteractionEvents()}}handleClick(){this.open=!this.open}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}handleFocusout(e){e.relatedTarget&&O(e.relatedTarget,this)||(this.open=!1)}getSelectedOptions(){if(!this.menu)return this.lastSelectedOptionRecords=[],null;let e=this.menu.items;return this.lastSelectedOptionRecords=q(e),this.lastSelectedOptionRecords}async getUpdateComplete(){return await this.menu?.updateComplete,super.getUpdateComplete()}updateValueAndDisplayText(){let e=this.getSelectedOptions()??[],t=!1;if(e.length){let[n]=e[0];t=this.lastSelectedOption!==n,this.lastSelectedOption=n,this[X]=n.value,this.displayText=n.displayText}else t=this.lastSelectedOption!==null,this.lastSelectedOption=null,this[X]=``,this.displayText=``;return t}async handleOpening(e){if(this.labelEl?.removeAttribute?.(`aria-live`),this.redispatchEvent(e),this.defaultFocus!==k.NONE)return;let t=this.menu.items,n=f(t)?.item,[r]=this.lastSelectedOptionRecords[0]??[null];n&&n!==r&&(n.tabIndex=-1),r??=t[0],r&&(r.tabIndex=0,r.focus())}redispatchEvent(e){A(this,e)}handleClosed(e){this.open=!1,this.redispatchEvent(e)}handleCloseMenu(e){let t=e.detail.reason,n=e.detail.itemPath[0];this.open=!1;let r=!1;t.kind===`click-selection`||t.kind===`keydown`&&D(t.key)?r=this.selectItem(n):(n.tabIndex=-1,n.blur()),r&&this.dispatchInteractionEvents()}selectItem(e){return(this.getSelectedOptions()??[]).forEach(([t])=>{e!==t&&(t.selected=!1,t.tabIndex=-1)}),e.selected=!0,e.tabIndex=0,this.updateValueAndDisplayText()}handleRequestSelection(e){let t=e.target;this.lastSelectedOptionRecords.some(([e])=>e===t)||this.selectItem(t)}handleRequestDeselection(e){let t=e.target;this.lastSelectedOptionRecords.some(([e])=>e===t)&&this.updateValueAndDisplayText()}initUserSelection(){this.lastUserSetValue&&!this.lastSelectedOptionRecords.length?this.select(this.lastUserSetValue):this.lastUserSetSelectedIndex!==null&&!this.lastSelectedOptionRecords.length?this.selectIndex(this.lastUserSetSelectedIndex):this.updateValueAndDisplayText()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0}dispatchInteractionEvents(){this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0}))}getErrorText(){return this.error?this.errorText:this.nativeErrorText}[T](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}click(){this.field?.click()}[L](){return new G(()=>this)}[P](){return this.field}},Q.shadowRootOptions={...i.shadowRootOptions,delegatesFocus:!0},l([g({type:Boolean})],Q.prototype,`quick`,void 0),l([g({type:Boolean})],Q.prototype,`required`,void 0),l([g({type:String,attribute:`error-text`})],Q.prototype,`errorText`,void 0),l([g()],Q.prototype,`label`,void 0),l([g({type:Boolean,attribute:`no-asterisk`})],Q.prototype,`noAsterisk`,void 0),l([g({type:String,attribute:`supporting-text`})],Q.prototype,`supportingText`,void 0),l([g({type:Boolean,reflect:!0})],Q.prototype,`error`,void 0),l([g({attribute:`menu-positioning`})],Q.prototype,`menuPositioning`,void 0),l([g({type:Boolean,attribute:`clamp-menu-width`})],Q.prototype,`clampMenuWidth`,void 0),l([g({type:Number,attribute:`typeahead-delay`})],Q.prototype,`typeaheadDelay`,void 0),l([g({type:Boolean,attribute:`has-leading-icon`})],Q.prototype,`hasLeadingIcon`,void 0),l([g({attribute:`display-text`})],Q.prototype,`displayText`,void 0),l([g({attribute:`menu-align`})],Q.prototype,`menuAlign`,void 0),l([g()],Q.prototype,`value`,null),l([g({type:Number,attribute:`selected-index`})],Q.prototype,`selectedIndex`,null),l([_()],Q.prototype,`nativeError`,void 0),l([_()],Q.prototype,`nativeErrorText`,void 0),l([_()],Q.prototype,`focused`,void 0),l([_()],Q.prototype,`open`,void 0),l([_()],Q.prototype,`defaultFocus`,void 0),l([c(`.field`)],Q.prototype,`field`,void 0),l([c(`md-menu`)],Q.prototype,`menu`,void 0),l([c(`#label`)],Q.prototype,`labelEl`,void 0),l([b({slot:`leading-icon`,flatten:!0})],Q.prototype,`leadingIcons`,void 0)})),$,re=e((()=>{s(),$=t`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}md-menu{min-width:var(--__menu-min-width);max-width:var(--__menu-max-width, inherit)}.menu-wrapper{width:0px;height:0px;max-width:inherit}md-menu ::slotted(:not[disabled]){cursor:pointer}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}
`}));export{ne as i,$ as n,Q as r,re as t};