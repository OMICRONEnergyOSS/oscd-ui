import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,g as r,l as i,n as a,o,t as s}from"./lit-LihecQ0E.js";import{_ as c,g as l,h as u,m as d,o as f,p,u as m,v as ee,y as h}from"./iframe-BJeBrXqV.js";import{_ as g,f as _,h as v,r as y,s as b}from"./lit-element-CwUNoIyU.js";import{i as x,n as S,o as C,r as w,s as T,t as E}from"./delegate-l-TUd_7w.js";import{c as te,f as ne,l as re,s as D,u as O}from"./form-submitter-D0SUri8x.js";import{g as k,v as A}from"./menu-item-styles-0ftTFvJF.js";import{n as j}from"./redispatch-event-Dn0YhbCZ.js";import{a as M,i as N,n as P,o as F,r as I,t as L}from"./validator-CBzEb1UQ.js";import{n as R,r as z,t as B}from"./on-report-validity-2USTr7A-.js";var V;function H(){return(H=e((()=>{i(),u(),ee(),V=p(class extends d{constructor(e){if(super(e),e.type!==l.PROPERTY&&e.type!==l.ATTRIBUTE&&e.type!==l.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!c(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[n]){if(n===o||n===t)return n;let r=e.element,i=e.name;if(e.type===l.PROPERTY){if(n===r[i])return o}else if(e.type===l.BOOLEAN_ATTRIBUTE){if(!!n===r.hasAttribute(i))return o}else if(e.type===l.ATTRIBUTE&&r.getAttribute(i)===n+``)return o;return h(e),n}})})))()}function U(){return(U=e((()=>{H()})))()}var W;function G(){return(G=e((()=>{W={fromAttribute(e){return e??``},toAttribute(e){return e||null}}})))()}function K(e){return e.type!==`textarea`}var q;function J(){return(J=e((()=>{P(),q=class extends L{computeValidity({state:e,renderedControl:t}){let n=t;K(e)&&!n?(n=this.inputControl||document.createElement(`input`),this.inputControl=n):n||(n=this.textAreaControl||document.createElement(`textarea`),this.textAreaControl=n);let r=K(e)?n:null;if(r&&(r.type=e.type),n.value!==e.value&&(n.value=e.value),n.required=e.required,r){let t=e;t.pattern?r.pattern=t.pattern:r.removeAttribute(`pattern`),t.min?r.min=t.min:r.removeAttribute(`min`),t.max?r.max=t.max:r.removeAttribute(`max`),t.step?r.step=t.step:r.removeAttribute(`step`)}return(e.minLength??-1)>-1?n.setAttribute(`minlength`,String(e.minLength)):n.removeAttribute(`minlength`),(e.maxLength??-1)>-1?n.setAttribute(`maxlength`,String(e.maxLength)):n.removeAttribute(`maxlength`),{validity:n.validity,validationMessage:n.validationMessage}}equals({state:e},{state:t}){let n=e.type===t.type&&e.value===t.value&&e.required===t.required&&e.minLength===t.minLength&&e.maxLength===t.maxLength;return!K(e)||!K(t)?n:n&&e.pattern===t.pattern&&e.min===t.min&&e.max===t.max&&e.step===t.step}copy({state:e}){return{state:K(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){let{type:t,pattern:n,min:r,max:i,step:a}=e;return{...this.copySharedState(e),type:t,pattern:n,min:r,max:i,step:a}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:t,minLength:n,maxLength:r}){return{value:e,required:t,minLength:n,maxLength:r}}}})))()}var Y,X;function Z(){return(Z=e((()=>{T(),s(),y(),w(),U(),k(),f(),E(),G(),M(),O(),te(),B(),J(),Y=S(R(F(re(ne(a))))),X=class extends Y{constructor(){super(...arguments),this.error=!1,this.errorText=``,this.label=``,this.noAsterisk=!1,this.required=!1,this.value=``,this.prefixText=``,this.suffixText=``,this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText=``,this.textDirection=``,this.rows=2,this.cols=20,this.inputMode=``,this.max=``,this.maxLength=-1,this.min=``,this.minLength=-1,this.noSpinner=!1,this.pattern=``,this.placeholder=``,this.readOnly=!1,this.multiple=!1,this.step=``,this.type=`text`,this.autocomplete=``,this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=``}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){let e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){let t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){let e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){let t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,n){this.getInputOrTextarea().setSelectionRange(e,t,n)}showPicker(){let e=this.getInput();e&&e.showPicker()}stepDown(e){let t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){let t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute(`value`)??``,this.nativeError=!1,this.nativeErrorText=``}attributeChangedCallback(e,t,n){e===`value`&&this.dirty||super.attributeChangedCallback(e,t,n)}render(){let e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type===`textarea`,"no-spinner":this.noSpinner};return n`
      <span class="text-field ${x(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){let t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t)}renderField(){return m`<${this.fieldTag}
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
    </${this.fieldTag}>`}renderLeadingIcon(){return n`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return n`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){let e={direction:this.textDirection},r=this.ariaLabel||this.label||t,i=this.autocomplete,a=(this.maxLength??-1)>-1,o=(this.minLength??-1)>-1;if(this.type===`textarea`)return n`
        <textarea
          class="input"
          style=${A(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${r}
          autocomplete=${i||t}
          name=${this.name||t}
          ?disabled=${this.disabled}
          maxlength=${a?this.maxLength:t}
          minlength=${o?this.minLength:t}
          placeholder=${this.placeholder||t}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${V(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;let s=this.renderPrefix(),c=this.renderSuffix(),l=this.inputMode;return n`
      <div class="input-wrapper">
        ${s}
        <input
          class="input"
          style=${A(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${r}
          autocomplete=${i||t}
          name=${this.name||t}
          ?disabled=${this.disabled}
          inputmode=${l||t}
          max=${this.max||t}
          maxlength=${a?this.maxLength:t}
          min=${this.min||t}
          minlength=${o?this.minLength:t}
          pattern=${this.pattern||t}
          placeholder=${this.placeholder||t}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||t}
          type=${this.type}
          .value=${V(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${c}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,r){return e?n`<span class="${x({suffix:r,prefix:!r})}">${e}</span>`:t}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(`:focus`)??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){j(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type===`textarea`?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[D](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[I](){return new q(()=>({state:this,renderedControl:this.inputOrTextarea}))}[N](){return this.inputOrTextarea}[z](e){e?.preventDefault();let t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}},X.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0},C([g({type:Boolean,reflect:!0})],X.prototype,`error`,void 0),C([g({attribute:`error-text`})],X.prototype,`errorText`,void 0),C([g()],X.prototype,`label`,void 0),C([g({type:Boolean,attribute:`no-asterisk`})],X.prototype,`noAsterisk`,void 0),C([g({type:Boolean,reflect:!0})],X.prototype,`required`,void 0),C([g()],X.prototype,`value`,void 0),C([g({attribute:`prefix-text`})],X.prototype,`prefixText`,void 0),C([g({attribute:`suffix-text`})],X.prototype,`suffixText`,void 0),C([g({type:Boolean,attribute:`has-leading-icon`})],X.prototype,`hasLeadingIcon`,void 0),C([g({type:Boolean,attribute:`has-trailing-icon`})],X.prototype,`hasTrailingIcon`,void 0),C([g({attribute:`supporting-text`})],X.prototype,`supportingText`,void 0),C([g({attribute:`text-direction`})],X.prototype,`textDirection`,void 0),C([g({type:Number})],X.prototype,`rows`,void 0),C([g({type:Number})],X.prototype,`cols`,void 0),C([g({reflect:!0})],X.prototype,`inputMode`,void 0),C([g()],X.prototype,`max`,void 0),C([g({type:Number})],X.prototype,`maxLength`,void 0),C([g()],X.prototype,`min`,void 0),C([g({type:Number})],X.prototype,`minLength`,void 0),C([g({type:Boolean,attribute:`no-spinner`})],X.prototype,`noSpinner`,void 0),C([g()],X.prototype,`pattern`,void 0),C([g({reflect:!0,converter:W})],X.prototype,`placeholder`,void 0),C([g({type:Boolean,reflect:!0})],X.prototype,`readOnly`,void 0),C([g({type:Boolean,reflect:!0})],X.prototype,`multiple`,void 0),C([g()],X.prototype,`step`,void 0),C([g({reflect:!0})],X.prototype,`type`,void 0),C([g({reflect:!0})],X.prototype,`autocomplete`,void 0),C([v()],X.prototype,`dirty`,void 0),C([v()],X.prototype,`focused`,void 0),C([v()],X.prototype,`nativeError`,void 0),C([v()],X.prototype,`nativeErrorText`,void 0),C([_(`.input`)],X.prototype,`inputOrTextarea`,void 0),C([_(`.field`)],X.prototype,`field`,void 0),C([b({slot:`leading-icon`})],X.prototype,`leadingIcons`,void 0),C([b({slot:`trailing-icon`})],X.prototype,`trailingIcons`,void 0)})))()}var Q;function $(){return($=e((()=>{s(),Q=r`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`})))()}export{Z as i,Q as n,X as r,$ as t};