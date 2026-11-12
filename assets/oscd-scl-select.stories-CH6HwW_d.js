import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,g as n,n as r,t as i}from"./lit-LihecQ0E.js";import{_ as a,f as o,h as s,n as c,r as l,t as u}from"./lit-element-CwUNoIyU.js";import{t as d}from"./decorate-2OK4V6AF.js";import{n as f,t as p}from"./getStorybookMeta-DLxhFeaY.js";import{n as m,t as h}from"./OscdSwitch-Chjle4Ed.js";import{n as g,t as _}from"./OscdFilledSelect-KYBG-CLo.js";import{n as v,r as y,t as b}from"./oscd-select-option-BBqsC8iP.js";import{r as x,t as S}from"./if-defined-CW_iOEIP.js";var C;function w(){return(w=e((()=>{i(),l(),c(),g(),y(),m(),S(),C=class extends u(r){constructor(...e){super(...e),this.nullable=!1,this.selectValue=``,this.selectOptions=[],this.disabled=!1,this.label=``,this.required=!1,this.supportingText=``,this.error=!1,this.isNull=!1,this.parkedValue=null}static{this.scopedElements={"oscd-switch":h,"oscd-filled-select":_,"oscd-select-option":v}}set value(e){e===null?this.null=!0:(this.null=!1,this.selectValue=e)}get value(){return this.null?null:this.selectValue}get null(){return this.nullable&&this.isNull}set null(e){this.nullable&&e!==this.isNull&&(this.isNull=e,this.isNull?this.parkedValue=this.selectValue:(this.selectValue=this.parkedValue??``,this.parkedValue=null))}reportValidity(){return this.selectInput.reportValidity()}setCustomValidity(e){this.selectInput?.setCustomValidity(e)}checkValidity(){return this.selectInput.checkValidity()}renderNullSwitch(){return this.nullable?t`<oscd-switch
        class="nullswitch element"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @input="${async e=>{e.stopPropagation()}}"
        @change="${async e=>{this.null=!e.target.selected,await this.updateComplete,this.dispatchEvent(new Event(`input`))}}"
      ></oscd-switch>`:t``}renderSelectOption(e){return t`<oscd-select-option
      ?selected=${this.value===e}
      value="${e}"
      ><div slot="headline">${e}</div></oscd-select-option
    >`}render(){return t`
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
    `}static{this.styles=n`
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
  `}},d([a({type:Boolean})],C.prototype,`nullable`,void 0),d([s()],C.prototype,`selectValue`,void 0),d([a({attribute:!1})],C.prototype,`value`,null),d([a({type:Array})],C.prototype,`selectOptions`,void 0),d([a({type:Boolean})],C.prototype,`disabled`,void 0),d([a({type:String})],C.prototype,`label`,void 0),d([a({type:Boolean})],C.prototype,`required`,void 0),d([a({type:String})],C.prototype,`supportingText`,void 0),d([a({type:Boolean})],C.prototype,`error`,void 0),d([a({type:String})],C.prototype,`errorText`,void 0),d([s()],C.prototype,`isNull`,void 0),d([s()],C.prototype,`null`,null),d([o(`.nullswitch.element`)],C.prototype,`nullSwitch`,void 0),d([o(`.input.element`)],C.prototype,`selectInput`,void 0)})))()}function T(){return(T=e((()=>{w(),window.customElements.define(`oscd-scl-select`,C)})))()}var E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{f(),T(),b(),{args:E,argTypes:D,meta:O}=p({tagName:`oscd-scl-select`,options:{omitTextContent:!0}}),k={...O,title:`Scl Inputs / Select`,tags:[`autodocs`]},A={argTypes:D,args:{...E,label:`SCL Select`,nullable:!0,".selectOptions":[`Option 1`,`Option 2`,`Option 3`]}},j={argTypes:D,args:{...E,label:`SCL Select`,nullable:!0,".selectOptions":[`Option 1`,`Option 2`,`Option 3`],value:`Option 2`}},M={argTypes:D,args:{...E,label:`SCL Select`,nullable:!0,".selectOptions":[`Option 1`,`Option 2`,`Option 3`],value:`Option 2`,error:!0,supportingText:`the error-state hides this text`,errorText:`There is an error`}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Select',
    nullable: true,
    ['.selectOptions']: ['Option 1', 'Option 2', 'Option 3']
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Select',
    nullable: true,
    ['.selectOptions']: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 2'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`NullableAndNull`,`NullableWithValue`,`InErrorState`]})))()}P();export{M as InErrorState,A as NullableAndNull,j as NullableWithValue,N as __namedExportsOrder,k as default};