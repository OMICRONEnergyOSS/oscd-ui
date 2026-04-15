import{m as E,_ as n,n as s,a as y,b as x}from"./list-item-styles-CjF7S3P4.js";import{e as A,b as O,t as u,f as w,T as c,E as l,m as L,i as b,x as h,u as C,a as S}from"./iframe-CprjnxQ1.js";import{m as k,r as f,o as T}from"./OscdListItem-C6Fu-I6V.js";import{o as m}from"./style-map-CzFiaC3H.js";import{r as _}from"./redispatch-event-D1qO1AWI.js";import{V as R,m as B,c as D,g as q}from"./validator-Dnm4BHtw.js";import{m as F,g as z}from"./form-associated-BLnBbfIv.js";import{m as N,o as M}from"./on-report-validity-BRzV5FZ4.js";const v=A(class extends O{constructor(a){if(super(a),a.type!==u.PROPERTY&&a.type!==u.ATTRIBUTE&&a.type!==u.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!w(a))throw Error("`live` bindings can only contain a single expression")}render(a){return a}update(a,[t]){if(t===c||t===l)return t;const e=a.element,r=a.name;if(a.type===u.PROPERTY){if(t===e[r])return c}else if(a.type===u.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return c}else if(a.type===u.ATTRIBUTE&&e.getAttribute(r)===t+"")return c;return L(a),t}});const P={fromAttribute(a){return a??""},toAttribute(a){return a||null}};class V extends R{computeValidity({state:t,renderedControl:e}){let r=e;d(t)&&!r?(r=this.inputControl||document.createElement("input"),this.inputControl=r):r||(r=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=r);const o=d(t)?r:null;if(o&&(o.type=t.type),r.value!==t.value&&(r.value=t.value),r.required=t.required,o){const p=t;p.pattern?o.pattern=p.pattern:o.removeAttribute("pattern"),p.min?o.min=p.min:o.removeAttribute("min"),p.max?o.max=p.max:o.removeAttribute("max"),p.step?o.step=p.step:o.removeAttribute("step")}return(t.minLength??-1)>-1?r.setAttribute("minlength",String(t.minLength)):r.removeAttribute("minlength"),(t.maxLength??-1)>-1?r.setAttribute("maxlength",String(t.maxLength)):r.removeAttribute("maxlength"),{validity:r.validity,validationMessage:r.validationMessage}}equals({state:t},{state:e}){const r=t.type===e.type&&t.value===e.value&&t.required===e.required&&t.minLength===e.minLength&&t.maxLength===e.maxLength;return!d(t)||!d(e)?r:r&&t.pattern===e.pattern&&t.min===e.min&&t.max===e.max&&t.step===e.step}copy({state:t}){return{state:d(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){const{type:e,pattern:r,min:o,max:p,step:g}=t;return{...this.copySharedState(t),type:e,pattern:r,min:o,max:p,step:g}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:e,minLength:r,maxLength:o}){return{value:t,required:e,minLength:r,maxLength:o}}}function d(a){return a.type!=="textarea"}const U=E(N(B(F(k(b)))));class i extends U{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.noAsterisk=!1,this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const e=this.getInput();e&&(e.valueAsNumber=t,this.value=e.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const e=this.getInput();e&&(e.valueAsDate=t,this.value=e.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,e,r){this.getInputOrTextarea().setSelectionRange(t,e,r)}showPicker(){const t=this.getInput();t&&t.showPicker()}stepDown(t){const e=this.getInput();e&&(e.stepDown(t),this.value=e.value)}stepUp(t){const e=this.getInput();e&&(e.stepUp(t),this.value=e.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,e,r){t==="value"&&this.dirty||super.attributeChangedCallback(t,e,r)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:this.type==="textarea","no-spinner":this.noSpinner};return h`
      <span class="text-field ${x(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){const e=this.getInputOrTextarea().value;this.value!==e&&(this.value=e)}renderField(){return C`<${this.fieldTag}
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
      ?resizable=${this.type==="textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`}renderLeadingIcon(){return h`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return h`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const t={direction:this.textDirection},e=this.ariaLabel||this.label||l,r=this.autocomplete,o=(this.maxLength??-1)>-1,p=(this.minLength??-1)>-1;if(this.type==="textarea")return h`
        <textarea
          class="input"
          style=${m(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${r||l}
          name=${this.name||l}
          ?disabled=${this.disabled}
          maxlength=${o?this.maxLength:l}
          minlength=${p?this.minLength:l}
          placeholder=${this.placeholder||l}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${v(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const g=this.renderPrefix(),$=this.renderSuffix(),I=this.inputMode;return h`
      <div class="input-wrapper">
        ${g}
        <input
          class="input"
          style=${m(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${r||l}
          name=${this.name||l}
          ?disabled=${this.disabled}
          inputmode=${I||l}
          max=${this.max||l}
          maxlength=${o?this.maxLength:l}
          min=${this.min||l}
          minlength=${p?this.minLength:l}
          pattern=${this.pattern||l}
          placeholder=${this.placeholder||l}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||l}
          type=${this.type}
          .value=${v(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${$}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,e){return t?h`<span class="${x({suffix:e,prefix:!e})}">${t}</span>`:l}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){_(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return this.type==="textarea"?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[z](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[D](){return new V(()=>({state:this,renderedControl:this.inputOrTextarea}))}[q](){return this.inputOrTextarea}[M](t){t?.preventDefault();const e=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,e===this.getErrorText()&&this.field?.reannounceError()}}i.shadowRootOptions={...b.shadowRootOptions,delegatesFocus:!0};n([s({type:Boolean,reflect:!0})],i.prototype,"error",void 0);n([s({attribute:"error-text"})],i.prototype,"errorText",void 0);n([s()],i.prototype,"label",void 0);n([s({type:Boolean,attribute:"no-asterisk"})],i.prototype,"noAsterisk",void 0);n([s({type:Boolean,reflect:!0})],i.prototype,"required",void 0);n([s()],i.prototype,"value",void 0);n([s({attribute:"prefix-text"})],i.prototype,"prefixText",void 0);n([s({attribute:"suffix-text"})],i.prototype,"suffixText",void 0);n([s({type:Boolean,attribute:"has-leading-icon"})],i.prototype,"hasLeadingIcon",void 0);n([s({type:Boolean,attribute:"has-trailing-icon"})],i.prototype,"hasTrailingIcon",void 0);n([s({attribute:"supporting-text"})],i.prototype,"supportingText",void 0);n([s({attribute:"text-direction"})],i.prototype,"textDirection",void 0);n([s({type:Number})],i.prototype,"rows",void 0);n([s({type:Number})],i.prototype,"cols",void 0);n([s({reflect:!0})],i.prototype,"inputMode",void 0);n([s()],i.prototype,"max",void 0);n([s({type:Number})],i.prototype,"maxLength",void 0);n([s()],i.prototype,"min",void 0);n([s({type:Number})],i.prototype,"minLength",void 0);n([s({type:Boolean,attribute:"no-spinner"})],i.prototype,"noSpinner",void 0);n([s()],i.prototype,"pattern",void 0);n([s({reflect:!0,converter:P})],i.prototype,"placeholder",void 0);n([s({type:Boolean,reflect:!0})],i.prototype,"readOnly",void 0);n([s({type:Boolean,reflect:!0})],i.prototype,"multiple",void 0);n([s()],i.prototype,"step",void 0);n([s({reflect:!0})],i.prototype,"type",void 0);n([s({reflect:!0})],i.prototype,"autocomplete",void 0);n([f()],i.prototype,"dirty",void 0);n([f()],i.prototype,"focused",void 0);n([f()],i.prototype,"nativeError",void 0);n([f()],i.prototype,"nativeErrorText",void 0);n([y(".input")],i.prototype,"inputOrTextarea",void 0);n([y(".field")],i.prototype,"field",void 0);n([T({slot:"leading-icon"})],i.prototype,"leadingIcons",void 0);n([T({slot:"trailing-icon"})],i.prototype,"trailingIcons",void 0);const X=S`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;export{i as T,X as s};
