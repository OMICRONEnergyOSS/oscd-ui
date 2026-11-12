import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,g as n,n as r,t as i}from"./lit-LihecQ0E.js";import{_ as a,f as o,h as s,n as c,r as l,t as u}from"./lit-element-CwUNoIyU.js";import{t as d}from"./decorate-2OK4V6AF.js";import{o as f,s as p}from"./OscdItem-C8-Le0Md.js";import{n as m,r as h}from"./oscd-menu-item-CPuax-lS.js";import{n as g,t as _}from"./getStorybookMeta-DLxhFeaY.js";import{n as v,t as y}from"./OscdMenu-DFoJHE0y.js";import{n as b,t as x}from"./OscdIconButton-CWlfTLbp.js";import{n as S,t as C}from"./OscdSwitch-Chjle4Ed.js";import{r as w,t as T}from"./if-defined-CW_iOEIP.js";import{n as E,t as D}from"./OscdFilledTextField-CNcwGnPB.js";var O;function k(){return(k=e((()=>{i(),l(),c(),p(),b(),v(),h(),S(),E(),T(),O=class extends u(r){constructor(...e){super(...e),this.nullable=!1,this.textFieldValue=``,this.disabled=!1,this.label=``,this.required=!1,this.error=!1,this.suffixText=``,this.placeholder=``,this.type=`text`,this.pattern=``,this.max=``,this.min=``,this.maxLength=-1,this.minLength=-1,this.unit=``,this.multiplierIndex=0,this.multipliers=[null,``],this.isNull=!1}static{this.scopedElements={"oscd-filled-text-field":D,"oscd-switch":C,"oscd-icon":f,"oscd-icon-button":x,"oscd-menu":y,"oscd-menu-item":m}}set value(e){e===null?this.null=!0:(this.null=!1,this.textFieldValue=e)}get value(){return this.null?null:this.textFieldValue}get multiplier(){return this.unit===``?null:this.multipliers[this.multiplierIndex]??this.multipliers[0]??null}set multiplier(e){let t=this.multipliers.indexOf(e);t>=0&&(this.multiplierIndex=t),this.suffixText=(this.multiplier??``)+this.unit}get null(){return this.nullable&&this.isNull}set null(e){this.nullable&&e!==this.isNull&&(this.isNull=e)}reportValidity(){return this.textField.reportValidity()}setCustomValidity(e){this.textField?.setCustomValidity(e)}checkValidity(){return this.textField.checkValidity()}reset(){return this.textField.reset()}selectMultiplier(e){let t=e.detail.initiator.querySelector(`:scope > div`)?.textContent??null;t===`No multiplier`&&(t=null),t!==void 0&&(this.multiplier=t)}renderMultiplierList(){return t`${this.multipliers.map(e=>{let n=e===null?`No multiplier`:e;return t`<oscd-menu-item
        ?selected=${e===this.multiplier}
        value="${n}"
        @close-menu="${this.selectMultiplier}"
        ><div slot="headline">${n}</div>
      </oscd-menu-item>`})}`}renderUnitSelector(){return this.multipliers.length&&this.unit?t`<div class="units container">
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
      </div>`:t``}renderNullSwitch(){return this.nullable?t`<oscd-switch
        class="nullswitch element"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @input="${async e=>{e.stopPropagation()}}"
        @change="${async e=>{this.null=!e.target.selected,await this.updateComplete,this.dispatchEvent(new Event(`input`))}}"
      ></oscd-switch>`:t``}render(){return t`
      <div style="display: flex; flex-direction: row;">
        <div class="input container">
          <oscd-filled-text-field
            class="input element"
            @input="${e=>{this.textFieldValue=e.target.value}}"
            value="${this.textFieldValue}"
            ?disabled=${this.disabled||this.isNull}
            label=${w(this.label)}
            ?required=${this.required}
            supporting-text=${w(this.supportingText)}
            ?error=${this.error}
            error-text=${w(this.errorText)}
            .pattern=${this.pattern}
            placeholder=${w(this.placeholder)}
            max=${w(this.max)}
            min=${w(this.min)}
            type=${w(this.type)}
            maxLength=${w(this.maxLength)}
            minLength=${w(this.minLength)}
            suffix-text="${this.suffixText||this.unit}"
          ></oscd-filled-text-field>
        </div>
        ${this.renderUnitSelector()}
        <div class="nullswitch container">${this.renderNullSwitch()}</div>
      </div>
    `}static{this.styles=n`
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
  `}},d([a({type:Boolean})],O.prototype,`nullable`,void 0),d([s()],O.prototype,`textFieldValue`,void 0),d([a({type:String})],O.prototype,`value`,null),d([a({type:Boolean})],O.prototype,`disabled`,void 0),d([a({type:String})],O.prototype,`label`,void 0),d([a({type:Boolean})],O.prototype,`required`,void 0),d([a({type:String})],O.prototype,`supportingText`,void 0),d([a({type:Boolean})],O.prototype,`error`,void 0),d([a({type:String})],O.prototype,`errorText`,void 0),d([a({type:String})],O.prototype,`suffixText`,void 0),d([a({type:String})],O.prototype,`placeholder`,void 0),d([a({type:String})],O.prototype,`type`,void 0),d([a({type:String})],O.prototype,`pattern`,void 0),d([a({type:String})],O.prototype,`max`,void 0),d([a({type:String})],O.prototype,`min`,void 0),d([a({type:Number})],O.prototype,`maxLength`,void 0),d([a({type:Number})],O.prototype,`minLength`,void 0),d([a({type:String})],O.prototype,`unit`,void 0),d([a({type:Array})],O.prototype,`multipliers`,void 0),d([a({type:String})],O.prototype,`multiplier`,null),d([s()],O.prototype,`isNull`,void 0),d([s()],O.prototype,`null`,null),d([o(`.nullswitch.element`)],O.prototype,`nullSwitch`,void 0),d([o(`.multipliers`)],O.prototype,`multiplierMenu`,void 0),d([o(`.input.element`)],O.prototype,`textField`,void 0)})))()}function A(){return(A=e((()=>{k(),window.customElements.define(`oscd-scl-text-field`,O)})))()}var j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{A(),g(),{args:j,argTypes:M,meta:N}=_({tagName:`oscd-scl-text-field`,options:{omitTextContent:!0}}),P={title:`Scl Inputs / Text Field`,tags:[`autodocs`],...N},F={argTypes:M,args:{...j,label:`Text Field`,placeholder:`Enter text here`,nullable:!0}},I={argTypes:M,args:{...j,label:`Text Field`,placeholder:`Enter text here`,nullable:!0,value:`Some text`}},L={argTypes:M,args:{...j,label:`Text Field`,placeholder:`Enter text here`,nullable:!0,value:`Some text`,error:!0,errorText:`There is an error`}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'Text Field',
    placeholder: 'Enter text here',
    nullable: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    label: 'Text Field',
    placeholder: 'Enter text here',
    nullable: true,
    value: 'Some text'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`NullableAndNull`,`NullableWithValue`,`InErrorState`]})))()}z();export{L as InErrorState,F as NullableAndNull,I as NullableWithValue,R as __namedExportsOrder,P as default};