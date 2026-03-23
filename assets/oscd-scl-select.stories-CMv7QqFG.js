import{g as f}from"./getStorybookMeta-CkVH9b_1.js";import{i as S,x as o,a as v}from"./iframe-BEvFn4o0.js";import{S as x,n as s,a as b}from"./list-item-styles-BdUABIkZ.js";import{r as m}from"./OscdListItem-qie-E2MX.js";import{O as w}from"./OscdFilledSelect-DOjpcE0-.js";import{O as V}from"./OscdSelectOption-DdpiGQ9H.js";import{O as $}from"./OscdSwitch-Q64ruMbR.js";import{o as N}from"./if-defined-k305cY2Z.js";import"./oscd-select-option-lQRCnbTg.js";import"./getStorybookHelpers-Do6kyNNH.js";import"./OscdMenuItem-BTDFb1kz.js";import"./query-assigned-nodes-DbRHicYy.js";import"./preload-helper-PPVm8Dsz.js";import"./shared-styles-VjMFm1Aj.js";import"./style-map-CCR2hFlr.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-B_YntnKT.js";import"./form-associated-DUVsC_kA.js";import"./on-report-validity-DJcQnhC5.js";import"./menu-CzZbf1KU.js";import"./OscdFilledField-CGZbxzgS.js";import"./shared-styles-DzyP5nii.js";import"./OscdMenu-BBCTaQjl.js";import"./checkbox-validator-D1nLSewj.js";var T=Object.defineProperty,C=Object.getOwnPropertyDescriptor,l=(O,e,c,i)=>{for(var r=i>1?void 0:i?C(e,c):e,d=O.length-1,h;d>=0;d--)(h=O[d])&&(r=(i?h(e,c,r):h(r))||r);return i&&r&&T(e,c,r),r};const u=class u extends x(S){constructor(){super(...arguments),this.nullable=!1,this.selectValue="",this.selectOptions=[],this.disabled=!1,this.label="",this.required=!1,this.supportingText="",this.error=!1,this.isNull=!1,this.parkedValue=null}set value(e){e===null?this.null=!0:(this.null=!1,this.selectValue=e)}get value(){return this.null?null:this.selectValue}get null(){return this.nullable&&this.isNull}set null(e){!this.nullable||e===this.isNull||(this.isNull=e,this.isNull?this.parkedValue=this.selectValue:(this.selectValue=this.parkedValue??"",this.parkedValue=null))}reportValidity(){return this.selectInput.reportValidity()}setCustomValidity(e){this.selectInput?.setCustomValidity(e)}checkValidity(){return this.selectInput.checkValidity()}renderNullSwitch(){return this.nullable?o`<oscd-switch
        class="nullswitch element"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @input="${async e=>{e.stopPropagation()}}"
        @change="${async e=>{this.null=!e.target.selected,await this.updateComplete,this.dispatchEvent(new Event("input"))}}"
      ></oscd-switch>`:o``}renderSelectOption(e){return o`<oscd-select-option
      ?selected=${this.value===e}
      value="${e}"
      ><div slot="headline">${e}</div></oscd-select-option
    >`}render(){return o`
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
            error-text="${N(this.errorText)}"
            >${this.selectOptions.map(e=>this.renderSelectOption(e))}</oscd-filled-select
          >
        </div>
        <div class="nullswitch container">${this.renderNullSwitch()}</div>
      </div>
    `}};u.scopedElements={"oscd-switch":$,"oscd-filled-select":w,"oscd-select-option":V},u.styles=v`
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
  `;let t=u;l([s({type:Boolean})],t.prototype,"nullable",2);l([m()],t.prototype,"selectValue",2);l([s({attribute:!1})],t.prototype,"value",1);l([s({type:Array})],t.prototype,"selectOptions",2);l([s({type:Boolean})],t.prototype,"disabled",2);l([s({type:String})],t.prototype,"label",2);l([s({type:Boolean})],t.prototype,"required",2);l([s({type:String})],t.prototype,"supportingText",2);l([s({type:Boolean})],t.prototype,"error",2);l([s({type:String})],t.prototype,"errorText",2);l([m()],t.prototype,"isNull",2);l([m()],t.prototype,"null",1);l([b(".nullswitch.element")],t.prototype,"nullSwitch",2);l([b(".input.element")],t.prototype,"selectInput",2);window.customElements.define("oscd-scl-select",t);const{args:g,argTypes:y,meta:E}=f({tagName:"oscd-scl-select",options:{omitTextContent:!0}}),ee={...E,title:"Scl Inputs / Select",tags:["autodocs"]},n={argTypes:y,args:{...g,label:"SCL Select",nullable:!0,".selectOptions":["Option 1","Option 2","Option 3"]}},a={argTypes:y,args:{...g,label:"SCL Select",nullable:!0,".selectOptions":["Option 1","Option 2","Option 3"],value:"Option 2"}},p={argTypes:y,args:{...g,label:"SCL Select",nullable:!0,".selectOptions":["Option 1","Option 2","Option 3"],value:"Option 2",error:!0,supportingText:"the error-state hides this text",errorText:"There is an error"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Select',
    nullable: true,
    ['.selectOptions']: ['Option 1', 'Option 2', 'Option 3']
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'SCL Select',
    nullable: true,
    ['.selectOptions']: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 2'
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const te=["NullableAndNull","NullableWithValue","InErrorState"];export{p as InErrorState,n as NullableAndNull,a as NullableWithValue,te as __namedExportsOrder,ee as default};
