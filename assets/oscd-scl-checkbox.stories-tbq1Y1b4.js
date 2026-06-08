import{i as m,x as h,a as b}from"./iframe-CED9u4fv.js";import{S as x,n as i,a as g}from"./list-item-styles-DbtL1MIB.js";import{r as n}from"./OscdListItem-YzTXxYva.js";import{O as f}from"./OscdCheckbox-Z5QF8l7R.js";import{O as y}from"./OscdSwitch-CaRo44D1.js";import{g as w}from"./getStorybookMeta-D4nAQZGb.js";import"./preload-helper-PPVm8Dsz.js";import"./OscdMenuItem-DhDenadO.js";import"./query-assigned-nodes-GnmzpfNZ.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-DrTVKtKT.js";import"./form-associated-BZB3BzSH.js";import"./checkbox-validator-DV7iT04e.js";import"./getStorybookHelpers-DCG8XUrM.js";import"./oscd-menu-item-DLNMOFEq.js";import"./OscdList--At7ZW1p.js";var k=Object.defineProperty,V=Object.getOwnPropertyDescriptor,s=(d,t,u,r)=>{for(var l=r>1?void 0:r?V(t,u):t,p=d.length-1,c;p>=0;p--)(c=d[p])&&(l=(r?c(t,u,l):c(l))||l);return r&&l&&k(t,u,l),l};const o=class o extends x(m){constructor(){super(...arguments),this.nullable=!1,this.checkboxValue="false",this.disabled=!1,this.label="",this.supportingText="",this.isNull=!1,this.parkedValue=null}set value(t){t===null?this.null=!0:(this.null=!1,this.checkboxValue=t)}get value(){return this.null?null:this.checkboxValue}get userText(){return`${this.label}${this.supportingText!==""?` (${this.supportingText})`:""}`}get null(){return this.nullable&&this.isNull}set null(t){!this.nullable||t===this.isNull||(this.isNull=t,this.isNull?(this.parkedValue=this.checkboxValue,this.defaultValue&&(this.checkboxValue=this.defaultValue)):(this.checkboxValue=this.parkedValue,this.parkedValue=null))}reportValidity(){return!0}checkValidity(){return!0}renderNullSwitch(){return this.nullable?h`<oscd-switch
        class="nullswitch element"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @input="${async t=>{t.stopPropagation()}}"
        @change="${async t=>{this.null=!t.target.selected,await this.updateComplete,this.dispatchEvent(new Event("input"))}}"
      ></oscd-switch>`:h``}render(){return h`
      <div style="display: flex; flex-direction: row;">
        <div class="input container">
          <label
            class="input element"
            style="${this.disabled||this.isNull?"color:rgba(0, 0, 0, 0.38)":""}"
          >
            <oscd-checkbox
              touch-target="wrapper"
              ?checked=${this.checkboxValue==="true"}
              ?disabled=${this.disabled||this.isNull}
              @input="${async t=>{this.checkboxValue=t.target.checked===!0?"true":"false",await this.updateComplete}}"
            ></oscd-checkbox>
            ${this.userText}
          </label>
        </div>
        <div class="nullswitch container">${this.renderNullSwitch()}</div>
      </div>
    `}};o.scopedElements={"oscd-switch":y,"oscd-checkbox":f},o.styles=b`
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
  `;let e=o;s([i({type:Boolean})],e.prototype,"nullable",2);s([i({type:String})],e.prototype,"defaultValue",2);s([n()],e.prototype,"checkboxValue",2);s([i({attribute:!1})],e.prototype,"value",1);s([i({type:Boolean})],e.prototype,"disabled",2);s([i({type:String})],e.prototype,"label",2);s([i({type:String})],e.prototype,"supportingText",2);s([n()],e.prototype,"userText",1);s([n()],e.prototype,"isNull",2);s([n()],e.prototype,"null",1);s([g(".nullswitch.element")],e.prototype,"nullSwitch",2);window.customElements.define("oscd-scl-checkbox",e);const{args:v,argTypes:$,meta:S}=w({tagName:"oscd-scl-checkbox",options:{omitTextContent:!0}}),F={...S,title:"Scl Inputs / Checkbox",tags:["autodocs"]},a={argTypes:$,args:{...v,label:"SCL Checkbox",supportingText:"this is supporting text",nullable:!0,value:"true"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Checkbox',
    supportingText: 'this is supporting text',
    nullable: true,
    value: 'true'
  }
}`,...a.parameters?.docs?.source}}};const G=["Default"];export{a as Default,G as __namedExportsOrder,F as default};
