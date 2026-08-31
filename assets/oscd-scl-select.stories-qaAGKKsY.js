import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,f as r,u as i}from"./static-html-JNahc6jH.js";import{E as a,I as o,L as s,_ as c,j as l,k as u}from"./list-navigation-helpers-C1Ibc9kd.js";import{n as d,t as f}from"./OscdFilledSelect-0Cbr3on7.js";import{n as p,t as m}from"./OscdSelectOption-CLA1PrIV.js";import{n as h,t as g}from"./decorate-DTsqE9Ek.js";import{n as _,t as v}from"./getStorybookMeta-BOUCYHqO.js";import{n as y,t as b}from"./OscdSwitch-CteXnegf.js";import{r as x,t as S}from"./if-defined-BsU8kV5Q.js";import{t as C}from"./oscd-select-option-BJeAurM3.js";var w,T=e((()=>{i(),c(),s(),d(),p(),y(),S(),h(),w=class extends o(r){constructor(...e){super(...e),this.nullable=!1,this.selectValue=``,this.selectOptions=[],this.disabled=!1,this.label=``,this.required=!1,this.supportingText=``,this.error=!1,this.isNull=!1,this.parkedValue=null}static{this.scopedElements={"oscd-switch":b,"oscd-filled-select":f,"oscd-select-option":m}}set value(e){e===null?this.null=!0:(this.null=!1,this.selectValue=e)}get value(){return this.null?null:this.selectValue}get null(){return this.nullable&&this.isNull}set null(e){!this.nullable||e===this.isNull||(this.isNull=e,this.isNull?this.parkedValue=this.selectValue:(this.selectValue=this.parkedValue??``,this.parkedValue=null))}reportValidity(){return this.selectInput.reportValidity()}setCustomValidity(e){this.selectInput?.setCustomValidity(e)}checkValidity(){return this.selectInput.checkValidity()}renderNullSwitch(){return this.nullable?n`<oscd-switch
        class="nullswitch element"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @input="${async e=>{e.stopPropagation()}}"
        @change="${async e=>{this.null=!e.target.selected,await this.updateComplete,this.dispatchEvent(new Event(`input`))}}"
      ></oscd-switch>`:n``}renderSelectOption(e){return n`<oscd-select-option
      ?selected=${this.value===e}
      value="${e}"
      ><div slot="headline">${e}</div></oscd-select-option
    >`}render(){return n`
      <div style="display: flex; flex-direction: row;">
        <div class="input container">
          <oscd-filled-select
            class="input element"
            @input="${e=>{this.selectValue=e.target.value}}"
            value="${this.selectValue}"
            ?disabled=${this.disabled||this.isNull}
            label="${this.label}"
            ?required=${this.required}
            supporting-text="${this.supportingText}"
            ?error=${this.error}
            error-text="${x(this.errorText)}"
            >${this.selectOptions.map(e=>this.renderSelectOption(e))}</oscd-filled-select
          >
        </div>
        <div class="nullswitch container">${this.renderNullSwitch()}</div>
      </div>
    `}static{this.styles=t`
    .nullswitch.element {
      margin-left: 12px;
    }

    .nullswitch.container {
      display: flex;
      align-items: center;
      height: 56px;
    }

    .input.container {
      flex: auto;
    }

    .input.element {
      width: 100%;
    }
  `}},g([l({type:Boolean})],w.prototype,`nullable`,void 0),g([u()],w.prototype,`selectValue`,void 0),g([l({attribute:!1})],w.prototype,`value`,null),g([l({type:Array})],w.prototype,`selectOptions`,void 0),g([l({type:Boolean})],w.prototype,`disabled`,void 0),g([l({type:String})],w.prototype,`label`,void 0),g([l({type:Boolean})],w.prototype,`required`,void 0),g([l({type:String})],w.prototype,`supportingText`,void 0),g([l({type:Boolean})],w.prototype,`error`,void 0),g([l({type:String})],w.prototype,`errorText`,void 0),g([u()],w.prototype,`isNull`,void 0),g([u()],w.prototype,`null`,null),g([a(`.nullswitch.element`)],w.prototype,`nullSwitch`,void 0),g([a(`.input.element`)],w.prototype,`selectInput`,void 0)})),E=e((()=>{T(),window.customElements.define(`oscd-scl-select`,w)})),D,O,k,A,j,M,N,P;e((()=>{_(),E(),C(),{args:D,argTypes:O,meta:k}=v({tagName:`oscd-scl-select`,options:{omitTextContent:!0}}),A={...k,title:`Scl Inputs / Select`,tags:[`autodocs`]},j={argTypes:O,args:{...D,label:`SCL Select`,nullable:!0,".selectOptions":[`Option 1`,`Option 2`,`Option 3`]}},M={argTypes:O,args:{...D,label:`SCL Select`,nullable:!0,".selectOptions":[`Option 1`,`Option 2`,`Option 3`],value:`Option 2`}},N={argTypes:O,args:{...D,label:`SCL Select`,nullable:!0,".selectOptions":[`Option 1`,`Option 2`,`Option 3`],value:`Option 2`,error:!0,supportingText:`the error-state hides this text`,errorText:`There is an error`}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Select',
    nullable: true,
    ['.selectOptions']: ['Option 1', 'Option 2', 'Option 3']
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Select',
    nullable: true,
    ['.selectOptions']: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 2'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Select',
    nullable: true,
    ['.selectOptions']: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 2',
    error: true,
    supportingText: 'the error-state hides this text',
    errorText: 'There is an error'
  }
}`,...N.parameters?.docs?.source}}},P=[`NullableAndNull`,`NullableWithValue`,`InErrorState`]}))();export{N as InErrorState,j as NullableAndNull,M as NullableWithValue,P as __namedExportsOrder,A as default};