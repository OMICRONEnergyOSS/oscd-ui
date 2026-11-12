import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,g as n,n as r,t as i}from"./lit-LihecQ0E.js";import{_ as a,f as o,h as s,n as c,r as l,t as u}from"./lit-element-CwUNoIyU.js";import{t as d}from"./decorate-2OK4V6AF.js";import{n as f,t as p}from"./getStorybookMeta-CDlhnKUP.js";import{n as m,t as h}from"./OscdCheckbox-DQAFmlCY.js";import{n as g,t as _}from"./OscdSwitch-BVaGppAL.js";var v;function y(){return(y=e((()=>{i(),l(),c(),m(),g(),v=class extends u(r){constructor(...e){super(...e),this.nullable=!1,this.checkboxValue=`false`,this.disabled=!1,this.label=``,this.supportingText=``,this.isNull=!1,this.parkedValue=null}static{this.scopedElements={"oscd-switch":_,"oscd-checkbox":h}}set value(e){e===null?this.null=!0:(this.null=!1,this.checkboxValue=e)}get value(){return this.null?null:this.checkboxValue}get userText(){return`${this.label}${this.supportingText===``?``:` (${this.supportingText})`}`}get null(){return this.nullable&&this.isNull}set null(e){this.nullable&&e!==this.isNull&&(this.isNull=e,this.isNull?(this.parkedValue=this.checkboxValue,this.defaultValue&&(this.checkboxValue=this.defaultValue)):(this.checkboxValue=this.parkedValue,this.parkedValue=null))}reportValidity(){return!0}checkValidity(){return!0}renderNullSwitch(){return this.nullable?t`<oscd-switch
        class="nullswitch element"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @input="${async e=>{e.stopPropagation()}}"
        @change="${async e=>{this.null=!e.target.selected,await this.updateComplete,this.dispatchEvent(new Event(`input`))}}"
      ></oscd-switch>`:t``}render(){return t`
      <div style="display: flex; flex-direction: row;">
        <div class="input container">
          <label
            class="input element"
            style="${this.disabled||this.isNull?`color:rgba(0, 0, 0, 0.38)`:``}"
          >
            <oscd-checkbox
              touch-target="wrapper"
              ?checked=${this.checkboxValue===`true`}
              ?disabled=${this.disabled||this.isNull}
              @input="${async e=>{this.checkboxValue=e.target.checked===!0?`true`:`false`,await this.updateComplete}}"
            ></oscd-checkbox>
            ${this.userText}
          </label>
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
      display: flex;
      align-items: center;
      height: 100%;
    }
  `}},d([a({type:Boolean})],v.prototype,`nullable`,void 0),d([a({type:String})],v.prototype,`defaultValue`,void 0),d([s()],v.prototype,`checkboxValue`,void 0),d([a({attribute:!1})],v.prototype,`value`,null),d([a({type:Boolean})],v.prototype,`disabled`,void 0),d([a({type:String})],v.prototype,`label`,void 0),d([a({type:String})],v.prototype,`supportingText`,void 0),d([s()],v.prototype,`userText`,null),d([s()],v.prototype,`isNull`,void 0),d([s()],v.prototype,`null`,null),d([o(`.nullswitch.element`)],v.prototype,`nullSwitch`,void 0)})))()}function b(){return(b=e((()=>{y(),window.customElements.define(`oscd-scl-checkbox`,v)})))()}var x,S,C,w,T,E;function D(){return(D=e((()=>{b(),f(),{args:x,argTypes:S,meta:C}=p({tagName:`oscd-scl-checkbox`,options:{omitTextContent:!0}}),w={...C,title:`Scl Inputs / Checkbox`,tags:[`autodocs`]},T={argTypes:S,args:{...x,label:`SCL Checkbox`,supportingText:`this is supporting text`,nullable:!0,value:`true`}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Checkbox',
    supportingText: 'this is supporting text',
    nullable: true,
    value: 'true'
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`]})))()}D();export{T as Default,E as __namedExportsOrder,w as default};