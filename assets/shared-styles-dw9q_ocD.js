import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,a as n,b as r,c as i,f as a,g as o,h as s,l as c,o as l,s as u,t as d,u as f,y as p}from"./static-html-JNahc6jH.js";import{G as m,K as ee,q as h}from"./iframe-Da3PlF-B.js";import{E as g,M as _,N as v,_ as y,f as b,h as x,j as S,k as C,m as te,p as w,x as T}from"./list-navigation-helpers-C1Ibc9kd.js";import{S as E,b as D,w as O,x as k,y as A}from"./OscdIcon-BLAkUGod.js";import{n as j,t as M}from"./redispatch-event-5TInYFn2.js";import{r as N,t as P}from"./style-map-DuRQUK6e.js";import{a as F,i as I,n as L,o as R,r as z,t as ne}from"./validator-CH9Znw8H.js";import{n as B,r as V,t as H}from"./on-report-validity-BXuqprEA.js";var U,W=e((()=>{p(),i(),ee(),U=l(class extends u{constructor(e){if(super(e),e.type!==c.PROPERTY&&e.type!==c.ATTRIBUTE&&e.type!==c.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!m(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===o||t===s)return t;let n=e.element,r=e.name;if(e.type===c.PROPERTY){if(t===n[r])return o}else if(e.type===c.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return o}else if(e.type===c.ATTRIBUTE&&n.getAttribute(r)===t+``)return o;return h(e),t}})})),G=e((()=>{W()})),K,q=e((()=>{K={fromAttribute(e){return e??``},toAttribute(e){return e||null}}}));function J(e){return e.type!==`textarea`}var Y,X=e((()=>{L(),Y=class extends ne{computeValidity({state:e,renderedControl:t}){let n=t;J(e)&&!n?(n=this.inputControl||document.createElement(`input`),this.inputControl=n):n||(n=this.textAreaControl||document.createElement(`textarea`),this.textAreaControl=n);let r=J(e)?n:null;if(r&&(r.type=e.type),n.value!==e.value&&(n.value=e.value),n.required=e.required,r){let t=e;t.pattern?r.pattern=t.pattern:r.removeAttribute(`pattern`),t.min?r.min=t.min:r.removeAttribute(`min`),t.max?r.max=t.max:r.removeAttribute(`max`),t.step?r.step=t.step:r.removeAttribute(`step`)}return(e.minLength??-1)>-1?n.setAttribute(`minlength`,String(e.minLength)):n.removeAttribute(`minlength`),(e.maxLength??-1)>-1?n.setAttribute(`maxlength`,String(e.maxLength)):n.removeAttribute(`maxlength`),{validity:n.validity,validationMessage:n.validationMessage}}equals({state:e},{state:t}){let n=e.type===t.type&&e.value===t.value&&e.required===t.required&&e.minLength===t.minLength&&e.maxLength===t.maxLength;return!J(e)||!J(t)?n:n&&e.pattern===t.pattern&&e.min===t.min&&e.max===t.max&&e.step===t.step}copy({state:e}){return{state:J(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){let{type:t,pattern:n,min:r,max:i,step:a}=e;return{...this.copySharedState(e),type:t,pattern:n,min:r,max:i,step:a}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:t,minLength:n,maxLength:r}){return{value:e,required:t,minLength:n,maxLength:r}}}})),Z,Q,re=e((()=>{v(),f(),y(),te(),G(),P(),d(),b(),q(),M(),F(),E(),D(),H(),X(),Z=w(B(R(k(O(a))))),Q=class extends Z{constructor(){super(...arguments),this.error=!1,this.errorText=``,this.label=``,this.noAsterisk=!1,this.required=!1,this.value=``,this.prefixText=``,this.suffixText=``,this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText=``,this.textDirection=``,this.rows=2,this.cols=20,this.inputMode=``,this.max=``,this.maxLength=-1,this.min=``,this.minLength=-1,this.noSpinner=!1,this.pattern=``,this.placeholder=``,this.readOnly=!1,this.multiple=!1,this.step=``,this.type=`text`,this.autocomplete=``,this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=``}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){let e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){let t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){let e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){let t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,n){this.getInputOrTextarea().setSelectionRange(e,t,n)}showPicker(){let e=this.getInput();e&&e.showPicker()}stepDown(e){let t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){let t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute(`value`)??``,this.nativeError=!1,this.nativeErrorText=``}attributeChangedCallback(e,t,n){e===`value`&&this.dirty||super.attributeChangedCallback(e,t,n)}render(){return r`
      <span class="text-field ${x({disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type===`textarea`,"no-spinner":this.noSpinner})}">
        ${this.renderField()}
      </span>
    `}updated(e){let t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t)}renderField(){return n`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type===`textarea`}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`}renderLeadingIcon(){return r`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return r`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){let e={direction:this.textDirection},t=this.ariaLabel||this.label||s,n=this.autocomplete,i=(this.maxLength??-1)>-1,a=(this.minLength??-1)>-1;if(this.type===`textarea`)return r`
        <textarea
          class="input"
          style=${N(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${n||s}
          name=${this.name||s}
          ?disabled=${this.disabled}
          maxlength=${i?this.maxLength:s}
          minlength=${a?this.minLength:s}
          placeholder=${this.placeholder||s}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${U(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;let o=this.renderPrefix(),c=this.renderSuffix(),l=this.inputMode;return r`
      <div class="input-wrapper">
        ${o}
        <input
          class="input"
          style=${N(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${n||s}
          name=${this.name||s}
          ?disabled=${this.disabled}
          inputmode=${l||s}
          max=${this.max||s}
          maxlength=${i?this.maxLength:s}
          min=${this.min||s}
          minlength=${a?this.minLength:s}
          pattern=${this.pattern||s}
          placeholder=${this.placeholder||s}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||s}
          type=${this.type}
          .value=${U(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${c}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){return e?r`<span class="${x({suffix:t,prefix:!t})}">${e}</span>`:s}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(`:focus`)??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){j(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type===`textarea`?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[A](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[z](){return new Y(()=>({state:this,renderedControl:this.inputOrTextarea}))}[I](){return this.inputOrTextarea}[V](e){e?.preventDefault();let t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}},Q.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0},_([S({type:Boolean,reflect:!0})],Q.prototype,`error`,void 0),_([S({attribute:`error-text`})],Q.prototype,`errorText`,void 0),_([S()],Q.prototype,`label`,void 0),_([S({type:Boolean,attribute:`no-asterisk`})],Q.prototype,`noAsterisk`,void 0),_([S({type:Boolean,reflect:!0})],Q.prototype,`required`,void 0),_([S()],Q.prototype,`value`,void 0),_([S({attribute:`prefix-text`})],Q.prototype,`prefixText`,void 0),_([S({attribute:`suffix-text`})],Q.prototype,`suffixText`,void 0),_([S({type:Boolean,attribute:`has-leading-icon`})],Q.prototype,`hasLeadingIcon`,void 0),_([S({type:Boolean,attribute:`has-trailing-icon`})],Q.prototype,`hasTrailingIcon`,void 0),_([S({attribute:`supporting-text`})],Q.prototype,`supportingText`,void 0),_([S({attribute:`text-direction`})],Q.prototype,`textDirection`,void 0),_([S({type:Number})],Q.prototype,`rows`,void 0),_([S({type:Number})],Q.prototype,`cols`,void 0),_([S({reflect:!0})],Q.prototype,`inputMode`,void 0),_([S()],Q.prototype,`max`,void 0),_([S({type:Number})],Q.prototype,`maxLength`,void 0),_([S()],Q.prototype,`min`,void 0),_([S({type:Number})],Q.prototype,`minLength`,void 0),_([S({type:Boolean,attribute:`no-spinner`})],Q.prototype,`noSpinner`,void 0),_([S()],Q.prototype,`pattern`,void 0),_([S({reflect:!0,converter:K})],Q.prototype,`placeholder`,void 0),_([S({type:Boolean,reflect:!0})],Q.prototype,`readOnly`,void 0),_([S({type:Boolean,reflect:!0})],Q.prototype,`multiple`,void 0),_([S()],Q.prototype,`step`,void 0),_([S({reflect:!0})],Q.prototype,`type`,void 0),_([S({reflect:!0})],Q.prototype,`autocomplete`,void 0),_([C()],Q.prototype,`dirty`,void 0),_([C()],Q.prototype,`focused`,void 0),_([C()],Q.prototype,`nativeError`,void 0),_([C()],Q.prototype,`nativeErrorText`,void 0),_([g(`.input`)],Q.prototype,`inputOrTextarea`,void 0),_([g(`.field`)],Q.prototype,`field`,void 0),_([T({slot:`leading-icon`})],Q.prototype,`leadingIcons`,void 0),_([T({slot:`trailing-icon`})],Q.prototype,`trailingIcons`,void 0)})),$,ie=e((()=>{f(),$=t`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`}));export{re as i,$ as n,Q as r,ie as t};