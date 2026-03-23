import{i as m,x as h,a as b}from"./iframe-CVDob4yH.js";import{S as x,n as i,a as g}from"./list-item-styles-D88BytE0.js";import{r as n}from"./OscdListItem-B18tstYX.js";import{O as f}from"./OscdCheckbox-DT9FXFjK.js";import{O as y}from"./OscdSwitch-CDlIcEzl.js";import{g as w}from"./getStorybookMeta-BoCODc77.js";import"./preload-helper-PPVm8Dsz.js";import"./OscdMenuItem-wP2ife6f.js";import"./query-assigned-nodes-NHYQZ91Q.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-DF6SPYQ-.js";import"./form-associated-COZPd8sx.js";import"./checkbox-validator-BaIeWwuO.js";import"./getStorybookHelpers-BJL7o6s0.js";var k=Object.defineProperty,V=Object.getOwnPropertyDescriptor,s=(d,e,u,r)=>{for(var l=r>1?void 0:r?V(e,u):e,p=d.length-1,c;p>=0;p--)(c=d[p])&&(l=(r?c(e,u,l):c(l))||l);return r&&l&&k(e,u,l),l};const o=class o extends x(m){constructor(){super(...arguments),this.nullable=!1,this.checkboxValue="false",this.disabled=!1,this.label="",this.supportingText="",this.isNull=!1,this.parkedValue=null}set value(e){e===null?this.null=!0:(this.null=!1,this.checkboxValue=e)}get value(){return this.null?null:this.checkboxValue}get userText(){return`${this.label}${this.supportingText!==""?` (${this.supportingText})`:""}`}get null(){return this.nullable&&this.isNull}set null(e){!this.nullable||e===this.isNull||(this.isNull=e,this.isNull?(this.parkedValue=this.checkboxValue,this.defaultValue&&(this.checkboxValue=this.defaultValue)):(this.checkboxValue=this.parkedValue,this.parkedValue=null))}reportValidity(){return!0}checkValidity(){return!0}renderNullSwitch(){return this.nullable?h`<oscd-switch
        class="nullswitch element"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @input="${async e=>{e.stopPropagation()}}"
        @change="${async e=>{this.null=!e.target.selected,await this.updateComplete,this.dispatchEvent(new Event("input"))}}"
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
              @input="${async e=>{this.checkboxValue=e.target.checked===!0?"true":"false",await this.updateComplete}}"
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
  `;let t=o;s([i({type:Boolean})],t.prototype,"nullable",2);s([i({type:String})],t.prototype,"defaultValue",2);s([n()],t.prototype,"checkboxValue",2);s([i({attribute:!1})],t.prototype,"value",1);s([i({type:Boolean})],t.prototype,"disabled",2);s([i({type:String})],t.prototype,"label",2);s([i({type:String})],t.prototype,"supportingText",2);s([n()],t.prototype,"userText",1);s([n()],t.prototype,"isNull",2);s([n()],t.prototype,"null",1);s([g(".nullswitch.element")],t.prototype,"nullSwitch",2);window.customElements.define("oscd-scl-checkbox",t);const{args:v,argTypes:$,meta:S}=w({tagName:"oscd-scl-checkbox",options:{omitTextContent:!0}}),z={...S,title:"Scl Inputs / Checkbox",tags:["autodocs"]},a={argTypes:$,args:{...v,label:"SCL Checkbox",supportingText:"this is supporting text",nullable:!0,value:"true"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Checkbox',
    supportingText: 'this is supporting text',
    nullable: true,
    value: 'true'
  }
}`,...a.parameters?.docs?.source}}};const A=["Default"];export{a as Default,A as __namedExportsOrder,z as default};
