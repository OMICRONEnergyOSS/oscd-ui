import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,f as n,r,t as i}from"./lit-CCeopZMg.js";import{_ as a,f as o,h as s,n as c,r as l,t as u}from"./lit-element-DJJrs8Rf.js";import{n as d,t as f}from"./decorate-DTsqE9Ek.js";import{n as p,t as m}from"./getStorybookMeta-y_WLQIzU.js";import{n as h,t as g}from"./OscdCheckbox-D6tUv_Zi.js";import{n as _,t as v}from"./OscdSwitch-Bnml3aNI.js";var y,b=e((()=>{i(),l(),c(),h(),_(),d(),y=class extends u(r){constructor(...e){super(...e),this.nullable=!1,this.checkboxValue=`false`,this.disabled=!1,this.label=``,this.supportingText=``,this.isNull=!1,this.parkedValue=null}static{this.scopedElements={"oscd-switch":v,"oscd-checkbox":g}}set value(e){e===null?this.null=!0:(this.null=!1,this.checkboxValue=e)}get value(){return this.null?null:this.checkboxValue}get userText(){return`${this.label}${this.supportingText===``?``:` (${this.supportingText})`}`}get null(){return this.nullable&&this.isNull}set null(e){!this.nullable||e===this.isNull||(this.isNull=e,this.isNull?(this.parkedValue=this.checkboxValue,this.defaultValue&&(this.checkboxValue=this.defaultValue)):(this.checkboxValue=this.parkedValue,this.parkedValue=null))}reportValidity(){return!0}checkValidity(){return!0}renderNullSwitch(){return this.nullable?n`<oscd-switch
        class="nullswitch element"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @input="${async e=>{e.stopPropagation()}}"
        @change="${async e=>{this.null=!e.target.selected,await this.updateComplete,this.dispatchEvent(new Event(`input`))}}"
      ></oscd-switch>`:n``}render(){return n`
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
      display: flex;
      align-items: center;
      height: 100%;
    }
  `}},f([a({type:Boolean})],y.prototype,`nullable`,void 0),f([a({type:String})],y.prototype,`defaultValue`,void 0),f([s()],y.prototype,`checkboxValue`,void 0),f([a({attribute:!1})],y.prototype,`value`,null),f([a({type:Boolean})],y.prototype,`disabled`,void 0),f([a({type:String})],y.prototype,`label`,void 0),f([a({type:String})],y.prototype,`supportingText`,void 0),f([s()],y.prototype,`userText`,null),f([s()],y.prototype,`isNull`,void 0),f([s()],y.prototype,`null`,null),f([o(`.nullswitch.element`)],y.prototype,`nullSwitch`,void 0)})),x=e((()=>{b(),window.customElements.define(`oscd-scl-checkbox`,y)})),S,C,w,T,E,D;e((()=>{x(),p(),{args:S,argTypes:C,meta:w}=m({tagName:`oscd-scl-checkbox`,options:{omitTextContent:!0}}),T={...w,title:`Scl Inputs / Checkbox`,tags:[`autodocs`]},E={argTypes:C,args:{...S,label:`SCL Checkbox`,supportingText:`this is supporting text`,nullable:!0,value:`true`}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Checkbox',
    supportingText: 'this is supporting text',
    nullable: true,
    value: 'true'
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`]}))();export{E as Default,D as __namedExportsOrder,T as default};