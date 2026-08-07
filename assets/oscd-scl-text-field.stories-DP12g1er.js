import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,f as r,u as i}from"./static-html-JNahc6jH.js";import{E as a,I as o,L as s,_ as c,j as l,k as u}from"./list-navigation-helpers-C1Ibc9kd.js";import{n as d,t as f}from"./OscdIcon-CDSDekmX.js";import{n as p,t as m}from"./OscdMenu-BAWotDWy.js";import{n as h,t as g}from"./OscdIconButton-DuPgxA44.js";import{n as _,t as v}from"./OscdMenuItem-DUY0Kc2M.js";import{n as y,t as b}from"./decorate-DTsqE9Ek.js";import{n as x,t as S}from"./getStorybookMeta-Ddn_OaDx.js";import{n as C,t as w}from"./OscdSwitch-SKLih1MR.js";import{r as T,t as E}from"./if-defined-BsU8kV5Q.js";import{n as D,t as O}from"./OscdFilledTextField-DUfEDXip.js";var k,A=e((()=>{i(),c(),s(),d(),h(),p(),_(),C(),D(),E(),y(),k=class extends o(r){constructor(...e){super(...e),this.nullable=!1,this.textFieldValue=``,this.disabled=!1,this.label=``,this.required=!1,this.error=!1,this.suffixText=``,this.placeholder=``,this.type=`text`,this.pattern=``,this.max=``,this.min=``,this.maxLength=-1,this.minLength=-1,this.unit=``,this.multiplierIndex=0,this.multipliers=[null,``],this.isNull=!1}static{this.scopedElements={"oscd-filled-text-field":O,"oscd-switch":w,"oscd-icon":f,"oscd-icon-button":g,"oscd-menu":m,"oscd-menu-item":v}}set value(e){e===null?this.null=!0:(this.null=!1,this.textFieldValue=e)}get value(){return this.null?null:this.textFieldValue}get multiplier(){return this.unit===``?null:this.multipliers[this.multiplierIndex]??this.multipliers[0]??null}set multiplier(e){let t=this.multipliers.indexOf(e);t>=0&&(this.multiplierIndex=t),this.suffixText=(this.multiplier??``)+this.unit}get null(){return this.nullable&&this.isNull}set null(e){!this.nullable||e===this.isNull||(this.isNull=e)}reportValidity(){return this.textField.reportValidity()}setCustomValidity(e){this.textField?.setCustomValidity(e)}checkValidity(){return this.textField.checkValidity()}reset(){return this.textField.reset()}selectMultiplier(e){let t=e.detail.initiator.querySelector(`:scope > div`)?.textContent??null;t===`No multiplier`&&(t=null),t!==void 0&&(this.multiplier=t)}renderMultiplierList(){return n`${this.multipliers.map(e=>{let t=e===null?`No multiplier`:e;return n`<oscd-menu-item
        ?selected=${e===this.multiplier}
        value="${t}"
        @close-menu="${this.selectMultiplier}"
        ><div slot="headline">${t}</div>
      </oscd-menu-item>`})}`}renderUnitSelector(){return this.multipliers.length&&this.unit?n`<div class="units container">
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
      </div>`:n``}renderNullSwitch(){return this.nullable?n`<oscd-switch
        class="nullswitch element"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @input="${async e=>{e.stopPropagation()}}"
        @change="${async e=>{this.null=!e.target.selected,await this.updateComplete,this.dispatchEvent(new Event(`input`))}}"
      ></oscd-switch>`:n``}render(){return n`
      <div style="display: flex; flex-direction: row;">
        <div class="input container">
          <oscd-filled-text-field
            class="input element"
            @input="${e=>{this.textFieldValue=e.target.value}}"
            value="${this.textFieldValue}"
            ?disabled=${this.disabled||this.isNull}
            label=${T(this.label)}
            ?required=${this.required}
            supporting-text=${T(this.supportingText)}
            ?error=${this.error}
            error-text=${T(this.errorText)}
            .pattern=${this.pattern}
            placeholder=${T(this.placeholder)}
            max=${T(this.max)}
            min=${T(this.min)}
            type=${T(this.type)}
            maxLength=${T(this.maxLength)}
            minLength=${T(this.minLength)}
            suffix-text="${this.suffixText||this.unit}"
          ></oscd-filled-text-field>
        </div>
        ${this.renderUnitSelector()}
        <div class="nullswitch container">${this.renderNullSwitch()}</div>
      </div>
    `}static{this.styles=t`
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
  `}},b([l({type:Boolean})],k.prototype,`nullable`,void 0),b([u()],k.prototype,`textFieldValue`,void 0),b([l({type:String})],k.prototype,`value`,null),b([l({type:Boolean})],k.prototype,`disabled`,void 0),b([l({type:String})],k.prototype,`label`,void 0),b([l({type:Boolean})],k.prototype,`required`,void 0),b([l({type:String})],k.prototype,`supportingText`,void 0),b([l({type:Boolean})],k.prototype,`error`,void 0),b([l({type:String})],k.prototype,`errorText`,void 0),b([l({type:String})],k.prototype,`suffixText`,void 0),b([l({type:String})],k.prototype,`placeholder`,void 0),b([l({type:String})],k.prototype,`type`,void 0),b([l({type:String})],k.prototype,`pattern`,void 0),b([l({type:String})],k.prototype,`max`,void 0),b([l({type:String})],k.prototype,`min`,void 0),b([l({type:Number})],k.prototype,`maxLength`,void 0),b([l({type:Number})],k.prototype,`minLength`,void 0),b([l({type:String})],k.prototype,`unit`,void 0),b([l({type:Array})],k.prototype,`multipliers`,void 0),b([l({type:String})],k.prototype,`multiplier`,null),b([u()],k.prototype,`isNull`,void 0),b([u()],k.prototype,`null`,null),b([a(`.nullswitch.element`)],k.prototype,`nullSwitch`,void 0),b([a(`.multipliers`)],k.prototype,`multiplierMenu`,void 0),b([a(`.input.element`)],k.prototype,`textField`,void 0)})),j=e((()=>{A(),window.customElements.define(`oscd-scl-text-field`,k)})),M,N,P,F,I,L,R,z;e((()=>{j(),x(),{args:M,argTypes:N,meta:P}=S({tagName:`oscd-scl-text-field`,options:{omitTextContent:!0}}),F={title:`Scl Inputs / Text Field`,tags:[`autodocs`],...P},I={argTypes:N,args:{...M,label:`Text Field`,placeholder:`Enter text here`,nullable:!0}},L={argTypes:N,args:{...M,label:`Text Field`,placeholder:`Enter text here`,nullable:!0,value:`Some text`}},R={argTypes:N,args:{...M,label:`Text Field`,placeholder:`Enter text here`,nullable:!0,value:`Some text`,error:!0,errorText:`There is an error`}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'Text Field',
    placeholder: 'Enter text here',
    nullable: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'Text Field',
    placeholder: 'Enter text here',
    nullable: true,
    value: 'Some text'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z=[`NullableAndNull`,`NullableWithValue`,`InErrorState`]}))();export{R as InErrorState,I as NullableAndNull,L as NullableWithValue,z as __namedExportsOrder,F as default};