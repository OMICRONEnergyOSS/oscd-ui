import{i as m,x as h,a as b}from"./iframe-BlmIIjc8.js";import{S as x,n as i,a as g}from"./list-navigation-helpers-BYaPgfdc.js";import{r as n}from"./OscdIcon-BF9UpfCs.js";import{O as f}from"./OscdCheckbox-C-VPC0EN.js";import{O as y}from"./OscdSwitch-Js3aOGdJ.js";import{g as w}from"./getStorybookMeta-C_Dfhlzu.js";import"./preload-helper-PPVm8Dsz.js";import"./menuItemController-k5rPONrB.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-D5inW5DY.js";import"./form-associated-ob18pg9T.js";import"./checkbox-validator-D1loSRI3.js";import"./getStorybookHelpers-DQ9KU-nQ.js";import"./oscd-menu-item-vFGSEMX-.js";import"./OscdMenuItem-CBcjVsGV.js";import"./query-assigned-nodes-D4uADFl8.js";import"./oscd-filled-button-pAHRa5nn.js";import"./OscdList-a84XNi5w.js";import"./oscd-list-item-BA8wSq9a.js";import"./OscdListItem-BdyDKWIx.js";import"./list-item-styles-D7C7ftEO.js";var k=Object.defineProperty,V=Object.getOwnPropertyDescriptor,s=(d,t,u,r)=>{for(var l=r>1?void 0:r?V(t,u):t,p=d.length-1,c;p>=0;p--)(c=d[p])&&(l=(r?c(t,u,l):c(l))||l);return r&&l&&k(t,u,l),l};const a=class a extends x(m){constructor(){super(...arguments),this.nullable=!1,this.checkboxValue="false",this.disabled=!1,this.label="",this.supportingText="",this.isNull=!1,this.parkedValue=null}set value(t){t===null?this.null=!0:(this.null=!1,this.checkboxValue=t)}get value(){return this.null?null:this.checkboxValue}get userText(){return`${this.label}${this.supportingText!==""?` (${this.supportingText})`:""}`}get null(){return this.nullable&&this.isNull}set null(t){!this.nullable||t===this.isNull||(this.isNull=t,this.isNull?(this.parkedValue=this.checkboxValue,this.defaultValue&&(this.checkboxValue=this.defaultValue)):(this.checkboxValue=this.parkedValue,this.parkedValue=null))}reportValidity(){return!0}checkValidity(){return!0}renderNullSwitch(){return this.nullable?h`<oscd-switch
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
    `}};a.scopedElements={"oscd-switch":y,"oscd-checkbox":f},a.styles=b`
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
  `;let e=a;s([i({type:Boolean})],e.prototype,"nullable",2);s([i({type:String})],e.prototype,"defaultValue",2);s([n()],e.prototype,"checkboxValue",2);s([i({attribute:!1})],e.prototype,"value",1);s([i({type:Boolean})],e.prototype,"disabled",2);s([i({type:String})],e.prototype,"label",2);s([i({type:String})],e.prototype,"supportingText",2);s([n()],e.prototype,"userText",1);s([n()],e.prototype,"isNull",2);s([n()],e.prototype,"null",1);s([g(".nullswitch.element")],e.prototype,"nullSwitch",2);window.customElements.define("oscd-scl-checkbox",e);const{args:v,argTypes:$,meta:S}=w({tagName:"oscd-scl-checkbox",options:{omitTextContent:!0}}),Q={...S,title:"Scl Inputs / Checkbox",tags:["autodocs"]},o={argTypes:$,args:{...v,label:"SCL Checkbox",supportingText:"this is supporting text",nullable:!0,value:"true"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Checkbox',
    supportingText: 'this is supporting text',
    nullable: true,
    value: 'true'
  }
}`,...o.parameters?.docs?.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,Q as default};
