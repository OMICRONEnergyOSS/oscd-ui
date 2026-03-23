import{i as $,x as o,a as v}from"./iframe-BA_UwkOg.js";import{S,n as r,a as x}from"./list-item-styles-DN_WYpBH.js";import{b as T,r as y}from"./OscdListItem-V0c71Avz.js";import{O as w}from"./OscdIconButton-B-767_TK.js";import{O as N}from"./OscdMenu-BkVBs4WI.js";import{O as F}from"./OscdMenuItem-CAk1AN5M.js";import{O as E}from"./OscdSwitch-BitTpml7.js";import{O}from"./OscdFilledTextField-CE60WLbC.js";import{o as s}from"./if-defined-D46urj0T.js";import{g as V}from"./getStorybookMeta-Ds2o0t2f.js";import"./preload-helper-PPVm8Dsz.js";import"./shared-styles-Cwo_wbwk.js";import"./is-rtl-DJNyvqXe.js";import"./menu-BQyxkE3a.js";import"./style-map-DsiKhrv6.js";import"./query-assigned-nodes-CD84jn8v.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-Bqk3xg4H.js";import"./form-associated-BHmCBYtz.js";import"./checkbox-validator-CMG7MVd6.js";import"./shared-styles-BWoBTAvQ.js";import"./on-report-validity-CAxYAj2Y.js";import"./OscdFilledField-BBsA89Wr.js";import"./shared-styles-CfaBN_vG.js";import"./getStorybookHelpers-DZzn3551.js";var L=Object.defineProperty,M=Object.getOwnPropertyDescriptor,i=(b,e,l,a)=>{for(var n=a>1?void 0:a?M(e,l):e,h=b.length-1,m;h>=0;h--)(m=b[h])&&(n=(a?m(e,l,n):m(n))||n);return a&&n&&L(e,l,n),n};const c=class c extends S($){constructor(){super(...arguments),this.nullable=!1,this.textFieldValue="",this.disabled=!1,this.label="",this.required=!1,this.error=!1,this.suffixText="",this.placeholder="",this.type="text",this.pattern="",this.max="",this.min="",this.maxLength=-1,this.minLength=-1,this.unit="",this.multiplierIndex=0,this.multipliers=[null,""],this.isNull=!1}set value(e){e===null?this.null=!0:(this.null=!1,this.textFieldValue=e)}get value(){return this.null?null:this.textFieldValue}get multiplier(){return this.unit===""?null:this.multipliers[this.multiplierIndex]??this.multipliers[0]??null}set multiplier(e){const l=this.multipliers.indexOf(e);l>=0&&(this.multiplierIndex=l),this.suffixText=(this.multiplier??"")+this.unit}get null(){return this.nullable&&this.isNull}set null(e){!this.nullable||e===this.isNull||(this.isNull=e)}reportValidity(){return this.textField.reportValidity()}setCustomValidity(e){this.textField?.setCustomValidity(e)}checkValidity(){return this.textField.checkValidity()}reset(){return this.textField.reset()}selectMultiplier(e){let l=e.detail.initiator.querySelector(":scope > div")?.textContent??null;l==="No multiplier"&&(l=null),l!==void 0&&(this.multiplier=l)}renderMultiplierList(){return o`${this.multipliers.map(e=>{const l=e===null?"No multiplier":e;return o`<oscd-menu-item
        ?selected=${e===this.multiplier}
        value="${l}"
        @close-menu="${this.selectMultiplier}"
        ><div slot="headline">${l}</div>
      </oscd-menu-item>`})}`}renderUnitSelector(){return this.multipliers.length&&this.unit?o`<div class="units container">
        <oscd-icon-button
          id="multiplier-anchor"
          style="margin:5px;"
          ?disabled=${this.null||this.disabled}
          @click=${()=>this.multiplierMenu?.show()}
          ><oscd-icon>more</oscd-icon></oscd-icon-button
        >
        <oscd-menu class="multipliers" anchor="multiplier-anchor"
          >${this.renderMultiplierList()}</oscd-menu
        >
      </div>`:o``}renderNullSwitch(){return this.nullable?o`<oscd-switch
        class="nullswitch element"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @input="${async e=>{e.stopPropagation()}}"
        @change="${async e=>{this.null=!e.target.selected,await this.updateComplete,this.dispatchEvent(new Event("input"))}}"
      ></oscd-switch>`:o``}render(){return o`
      <div style="display: flex; flex-direction: row;">
        <div class="input container">
          <oscd-filled-text-field
            class="input element"
            @input="${e=>{this.textFieldValue=e.target.value}}"
            value="${this.textFieldValue}"
            ?disabled=${this.disabled||this.isNull}
            label=${s(this.label)}
            ?required=${this.required}
            supporting-text=${s(this.supportingText)}
            ?error=${this.error}
            error-text=${s(this.errorText)}
            .pattern=${this.pattern}
            placeholder=${s(this.placeholder)}
            max=${s(this.max)}
            min=${s(this.min)}
            type=${s(this.type)}
            maxLength=${s(this.maxLength)}
            minLength=${s(this.minLength)}
            suffix-text="${this.suffixText||this.unit}"
          ></oscd-filled-text-field>
        </div>
        ${this.renderUnitSelector()}
        <div class="nullswitch container">${this.renderNullSwitch()}</div>
      </div>
    `}};c.scopedElements={"oscd-filled-text-field":O,"oscd-switch":E,"oscd-icon":T,"oscd-icon-button":w,"oscd-menu":N,"oscd-menu-item":F},c.styles=v`
    .units.container {
      position: relative;
    }

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

    oscd-icon-button {
      --md-icon-button-icon-size: 48px;
    }
  `;let t=c;i([r({type:Boolean})],t.prototype,"nullable",2);i([y()],t.prototype,"textFieldValue",2);i([r({type:String})],t.prototype,"value",1);i([r({type:Boolean})],t.prototype,"disabled",2);i([r({type:String})],t.prototype,"label",2);i([r({type:Boolean})],t.prototype,"required",2);i([r({type:String})],t.prototype,"supportingText",2);i([r({type:Boolean})],t.prototype,"error",2);i([r({type:String})],t.prototype,"errorText",2);i([r({type:String})],t.prototype,"suffixText",2);i([r({type:String})],t.prototype,"placeholder",2);i([r({type:String})],t.prototype,"type",2);i([r({type:String})],t.prototype,"pattern",2);i([r({type:String})],t.prototype,"max",2);i([r({type:String})],t.prototype,"min",2);i([r({type:Number})],t.prototype,"maxLength",2);i([r({type:Number})],t.prototype,"minLength",2);i([r({type:String})],t.prototype,"unit",2);i([r({type:Array})],t.prototype,"multipliers",2);i([r({type:String})],t.prototype,"multiplier",1);i([y()],t.prototype,"isNull",2);i([y()],t.prototype,"null",1);i([x(".nullswitch.element")],t.prototype,"nullSwitch",2);i([x(".multipliers")],t.prototype,"multiplierMenu",2);i([x(".input.element")],t.prototype,"textField",2);window.customElements.define("oscd-scl-text-field",t);const{args:g,argTypes:f,meta:I}=V({tagName:"oscd-scl-text-field",options:{omitTextContent:!0}}),lt={title:"Scl Inputs / Text Field",tags:["autodocs"],...I},p={argTypes:f,args:{...g,label:"Text Field",placeholder:"Enter text here",nullable:!0}},u={argTypes:f,args:{...g,label:"Text Field",placeholder:"Enter text here",nullable:!0,value:"Some text"}},d={argTypes:f,args:{...g,label:"Text Field",placeholder:"Enter text here",nullable:!0,value:"Some text",error:!0,errorText:"There is an error"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'Text Field',
    placeholder: 'Enter text here',
    nullable: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'Text Field',
    placeholder: 'Enter text here',
    nullable: true,
    value: 'Some text'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'Text Field',
    placeholder: 'Enter text here',
    nullable: true,
    value: 'Some text',
    error: true,
    errorText: 'There is an error'
  }
}`,...d.parameters?.docs?.source}}};const st=["NullableAndNull","NullableWithValue","InErrorState"];export{d as InErrorState,p as NullableAndNull,u as NullableWithValue,st as __namedExportsOrder,lt as default};
