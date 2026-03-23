import{b as y,g as v,m as b,_ as n,n as o,a as p}from"./list-item-styles-DN_WYpBH.js";import{B as x,x as l,E as m,u as E,i as g,a as S}from"./iframe-BA_UwkOg.js";import{m as I,r as d,o as T}from"./OscdListItem-V0c71Avz.js";import{o as $}from"./style-map-DsiKhrv6.js";import{r as w}from"./redispatch-event-D1qO1AWI.js";import{V as O,c as C,g as A,m as R}from"./validator-Bqk3xg4H.js";import{g as k,m as F}from"./form-associated-BHmCBYtz.js";import{o as D,m as q}from"./on-report-validity-CAxYAj2Y.js";import{F as a,i as U,f as V}from"./OscdMenuItem-CAk1AN5M.js";import{D as _,T as L}from"./menu-BQyxkE3a.js";class M extends O{computeValidity(e){return this.selectControl||(this.selectControl=document.createElement("select")),x(l`<option value=${e.value}></option>`,this.selectControl),this.selectControl.value=e.value,this.selectControl.required=e.required,{validity:this.selectControl.validity,validationMessage:this.selectControl.validationMessage}}equals(e,t){return e.value===t.value&&e.required===t.required}copy({value:e,required:t}){return{value:e,required:t}}}function B(h){const e=[];for(let t=0;t<h.length;t++){const i=h[t];i.selected&&e.push([i,t])}return e}var f;const c=Symbol("value"),P=b(q(R(F(I(g)))));class s extends P{get value(){return this[c]}set value(e){this.lastUserSetValue=e,this.select(e)}get options(){return this.menu?.items??[]}get selectedIndex(){const[e,t]=(this.getSelectedOptions()??[])[0]??[];return t??-1}set selectedIndex(e){this.lastUserSetSelectedIndex=e,this.selectIndex(e)}get selectedOptions(){return(this.getSelectedOptions()??[]).map(([e])=>e)}get hasError(){return this.error||this.nativeError}constructor(){super(),this.quick=!1,this.required=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.supportingText="",this.error=!1,this.menuPositioning="popover",this.clampMenuWidth=!1,this.typeaheadDelay=_,this.hasLeadingIcon=!1,this.displayText="",this.menuAlign="start",this[f]="",this.lastUserSetValue=null,this.lastUserSetSelectedIndex=null,this.lastSelectedOption=null,this.lastSelectedOptionRecords=[],this.nativeError=!1,this.nativeErrorText="",this.focused=!1,this.open=!1,this.defaultFocus=a.NONE,this.prevOpen=this.open,this.selectWidth=0,this.addEventListener("focus",this.handleFocus.bind(this)),this.addEventListener("blur",this.handleBlur.bind(this))}select(e){const t=this.options.find(i=>i.value===e);t&&this.selectItem(t)}selectIndex(e){const t=this.options[e];t&&this.selectItem(t)}reset(){for(const e of this.options)e.selected=e.hasAttribute("selected");this.updateValueAndDisplayText(),this.nativeError=!1,this.nativeErrorText=""}showPicker(){this.open=!0}[(f=c,D)](e){e?.preventDefault();const t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}update(e){if(this.hasUpdated||this.initUserSelection(),this.prevOpen!==this.open&&this.open){const t=this.getBoundingClientRect();this.selectWidth=t.width}this.prevOpen=this.open,super.update(e)}render(){return l`
      <span
        class="select ${y(this.getRenderClasses())}"
        @focusout=${this.handleFocusout}>
        ${this.renderField()} ${this.renderMenu()}
      </span>
    `}async firstUpdated(e){await this.menu?.updateComplete,this.lastSelectedOptionRecords.length||this.initUserSelection(),!this.lastSelectedOptionRecords.length&&!this.options.length&&setTimeout(()=>{this.updateValueAndDisplayText()}),super.firstUpdated(e)}getRenderClasses(){return{disabled:this.disabled,error:this.error,open:this.open}}renderField(){const e=this.ariaLabel||this.label;return E`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled?"-1":"0"}
          aria-label=${e||m}
          aria-describedby="description"
          aria-expanded=${this.open?"true":"false"}
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
      </${this.fieldTag}>`}renderFieldContent(){return[this.renderLeadingIcon(),this.renderLabel(),this.renderTrailingIcon()]}renderLeadingIcon(){return l`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return l`
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
    `}renderLabel(){return l`<div id="label">${this.displayText||l`&nbsp;`}</div>`}renderMenu(){const e=this.label||this.ariaLabel;return l`<div class="menu-wrapper">
      <md-menu
        id="listbox"
        .defaultFocus=${this.defaultFocus}
        role="listbox"
        tabindex="-1"
        aria-label=${e||m}
        stay-open-on-focusout
        part="menu"
        exportparts="focus-ring: menu-focus-ring"
        anchor="field"
        style=${$({"--__menu-min-width":`${this.selectWidth}px`,"--__menu-max-width":this.clampMenuWidth?`${this.selectWidth}px`:void 0})}
        no-navigation-wrap
        .open=${this.open}
        .quick=${this.quick}
        .positioning=${this.menuPositioning}
        .typeaheadDelay=${this.typeaheadDelay}
        .anchorCorner=${this.menuAlign==="start"?"end-start":"end-end"}
        .menuCorner=${this.menuAlign==="start"?"start-start":"start-end"}
        @opening=${this.handleOpening}
        @opened=${this.redispatchEvent}
        @closing=${this.redispatchEvent}
        @closed=${this.handleClosed}
        @close-menu=${this.handleCloseMenu}
        @request-selection=${this.handleRequestSelection}
        @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>
    </div>`}renderMenuContent(){return l`<slot></slot>`}handleKeydown(e){if(this.open||this.disabled||!this.menu)return;const t=this.menu.typeaheadController,i=e.code==="Space"||e.code==="ArrowDown"||e.code==="ArrowUp"||e.code==="End"||e.code==="Home"||e.code==="Enter";if(!t.isTypingAhead&&i){switch(e.preventDefault(),this.open=!0,e.code){case"Space":case"ArrowDown":case"Enter":this.defaultFocus=a.NONE;break;case"End":this.defaultFocus=a.LAST_ITEM;break;case"ArrowUp":case"Home":this.defaultFocus=a.FIRST_ITEM;break}return}if(e.key.length===1){t.onKeydown(e),e.preventDefault();const{lastActiveRecord:u}=t;if(!u)return;this.labelEl?.setAttribute?.("aria-live","polite"),this.selectItem(u[L.ITEM])&&this.dispatchInteractionEvents()}}handleClick(){this.open=!this.open}handleFocus(){this.focused=!0}handleBlur(){this.focused=!1}handleFocusout(e){e.relatedTarget&&U(e.relatedTarget,this)||(this.open=!1)}getSelectedOptions(){if(!this.menu)return this.lastSelectedOptionRecords=[],null;const e=this.menu.items;return this.lastSelectedOptionRecords=B(e),this.lastSelectedOptionRecords}async getUpdateComplete(){return await this.menu?.updateComplete,super.getUpdateComplete()}updateValueAndDisplayText(){const e=this.getSelectedOptions()??[];let t=!1;if(e.length){const[i]=e[0];t=this.lastSelectedOption!==i,this.lastSelectedOption=i,this[c]=i.value,this.displayText=i.displayText}else t=this.lastSelectedOption!==null,this.lastSelectedOption=null,this[c]="",this.displayText="";return t}async handleOpening(e){if(this.labelEl?.removeAttribute?.("aria-live"),this.redispatchEvent(e),this.defaultFocus!==a.NONE)return;const t=this.menu.items,i=v(t)?.item;let[r]=this.lastSelectedOptionRecords[0]??[null];i&&i!==r&&(i.tabIndex=-1),r=r??t[0],r&&(r.tabIndex=0,r.focus())}redispatchEvent(e){w(this,e)}handleClosed(e){this.open=!1,this.redispatchEvent(e)}handleCloseMenu(e){const t=e.detail.reason,i=e.detail.itemPath[0];this.open=!1;let r=!1;t.kind==="click-selection"?r=this.selectItem(i):t.kind==="keydown"&&V(t.key)?r=this.selectItem(i):(i.tabIndex=-1,i.blur()),r&&this.dispatchInteractionEvents()}selectItem(e){return(this.getSelectedOptions()??[]).forEach(([i])=>{e!==i&&(i.selected=!1)}),e.selected=!0,this.updateValueAndDisplayText()}handleRequestSelection(e){const t=e.target;this.lastSelectedOptionRecords.some(([i])=>i===t)||this.selectItem(t)}handleRequestDeselection(e){const t=e.target;this.lastSelectedOptionRecords.some(([i])=>i===t)&&this.updateValueAndDisplayText()}initUserSelection(){this.lastUserSetValue&&!this.lastSelectedOptionRecords.length?this.select(this.lastUserSetValue):this.lastUserSetSelectedIndex!==null&&!this.lastSelectedOptionRecords.length?this.selectIndex(this.lastUserSetSelectedIndex):this.updateValueAndDisplayText()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0}dispatchInteractionEvents(){this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0}))}getErrorText(){return this.error?this.errorText:this.nativeErrorText}[k](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}click(){this.field?.click()}[C](){return new M(()=>this)}[A](){return this.field}}s.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0};n([o({type:Boolean})],s.prototype,"quick",void 0);n([o({type:Boolean})],s.prototype,"required",void 0);n([o({type:String,attribute:"error-text"})],s.prototype,"errorText",void 0);n([o()],s.prototype,"label",void 0);n([o({type:Boolean,attribute:"no-asterisk"})],s.prototype,"noAsterisk",void 0);n([o({type:String,attribute:"supporting-text"})],s.prototype,"supportingText",void 0);n([o({type:Boolean,reflect:!0})],s.prototype,"error",void 0);n([o({attribute:"menu-positioning"})],s.prototype,"menuPositioning",void 0);n([o({type:Boolean,attribute:"clamp-menu-width"})],s.prototype,"clampMenuWidth",void 0);n([o({type:Number,attribute:"typeahead-delay"})],s.prototype,"typeaheadDelay",void 0);n([o({type:Boolean,attribute:"has-leading-icon"})],s.prototype,"hasLeadingIcon",void 0);n([o({attribute:"display-text"})],s.prototype,"displayText",void 0);n([o({attribute:"menu-align"})],s.prototype,"menuAlign",void 0);n([o()],s.prototype,"value",null);n([o({type:Number,attribute:"selected-index"})],s.prototype,"selectedIndex",null);n([d()],s.prototype,"nativeError",void 0);n([d()],s.prototype,"nativeErrorText",void 0);n([d()],s.prototype,"focused",void 0);n([d()],s.prototype,"open",void 0);n([d()],s.prototype,"defaultFocus",void 0);n([p(".field")],s.prototype,"field",void 0);n([p("md-menu")],s.prototype,"menu",void 0);n([p("#label")],s.prototype,"labelEl",void 0);n([T({slot:"leading-icon",flatten:!0})],s.prototype,"leadingIcons",void 0);const Z=S`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}md-menu{min-width:var(--__menu-min-width);max-width:var(--__menu-max-width, inherit)}.menu-wrapper{width:0px;height:0px;max-width:inherit}md-menu ::slotted(:not[disabled]){cursor:pointer}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}
`;export{s as S,Z as s};
