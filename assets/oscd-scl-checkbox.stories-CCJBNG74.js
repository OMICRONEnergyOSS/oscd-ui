import{i as m,x as h,a as b}from"./iframe-C4uLaTi3.js";import{S as x,n as i,a as g}from"./list-navigation-helpers-uOLGipP7.js";import{r as n}from"./OscdIcon-C3sU6W8j.js";import{O as f}from"./OscdCheckbox-BByuhJVy.js";import{O as y}from"./OscdSwitch-DltJebCV.js";import{g as w}from"./getStorybookMeta-fEcaYkww.js";import"./preload-helper-PPVm8Dsz.js";import"./menuItemController-vk-DquCy.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-BdcpFJ2q.js";import"./form-associated-DtXYuc2T.js";import"./checkbox-validator-CVPaXxLl.js";import"./getStorybookHelpers-BPPERp-C.js";import"./oscd-menu-item-D6eVNoir.js";import"./OscdListItem-CcUpt_sr.js";import"./list-item-styles-CwxrGOCZ.js";import"./OscdMenuItem-AVFwwFRE.js";import"./query-assigned-nodes-EHSBqaR2.js";import"./oscd-filled-button-CEBWtmCm.js";import"./OscdList-C90geFFa.js";var k=Object.defineProperty,V=Object.getOwnPropertyDescriptor,s=(d,t,u,r)=>{for(var l=r>1?void 0:r?V(t,u):t,p=d.length-1,c;p>=0;p--)(c=d[p])&&(l=(r?c(t,u,l):c(l))||l);return r&&l&&k(t,u,l),l};const a=class a extends x(m){constructor(){super(...arguments),this.nullable=!1,this.checkboxValue="false",this.disabled=!1,this.label="",this.supportingText="",this.isNull=!1,this.parkedValue=null}set value(t){t===null?this.null=!0:(this.null=!1,this.checkboxValue=t)}get value(){return this.null?null:this.checkboxValue}get userText(){return`${this.label}${this.supportingText!==""?` (${this.supportingText})`:""}`}get null(){return this.nullable&&this.isNull}set null(t){!this.nullable||t===this.isNull||(this.isNull=t,this.isNull?(this.parkedValue=this.checkboxValue,this.defaultValue&&(this.checkboxValue=this.defaultValue)):(this.checkboxValue=this.parkedValue,this.parkedValue=null))}reportValidity(){return!0}checkValidity(){return!0}renderNullSwitch(){return this.nullable?h`<oscd-switch
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
  `;let e=a;s([i({type:Boolean})],e.prototype,"nullable",2);s([i({type:String})],e.prototype,"defaultValue",2);s([n()],e.prototype,"checkboxValue",2);s([i({attribute:!1})],e.prototype,"value",1);s([i({type:Boolean})],e.prototype,"disabled",2);s([i({type:String})],e.prototype,"label",2);s([i({type:String})],e.prototype,"supportingText",2);s([n()],e.prototype,"userText",1);s([n()],e.prototype,"isNull",2);s([n()],e.prototype,"null",1);s([g(".nullswitch.element")],e.prototype,"nullSwitch",2);window.customElements.define("oscd-scl-checkbox",e);const{args:v,argTypes:$,meta:S}=w({tagName:"oscd-scl-checkbox",options:{omitTextContent:!0}}),K={...S,title:"Scl Inputs / Checkbox",tags:["autodocs"]},o={argTypes:$,args:{...v,label:"SCL Checkbox",supportingText:"this is supporting text",nullable:!0,value:"true"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Checkbox',
    supportingText: 'this is supporting text',
    nullable: true,
    value: 'true'
  }
}`,...o.parameters?.docs?.source}}};const Q=["Default"];export{o as Default,Q as __namedExportsOrder,K as default};
