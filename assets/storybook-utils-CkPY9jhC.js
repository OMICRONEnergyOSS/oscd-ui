import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,g as n,t as r}from"./lit-LihecQ0E.js";import{_ as i,r as a}from"./lit-element-CwUNoIyU.js";import{t as o}from"./decorate-2OK4V6AF.js";import{i as s,r as c}from"./delegate-DVmVP7ly.js";import{o as l,s as u}from"./OscdItem-C8-Le0Md.js";import{n as d,t as f}from"./OscdList-mP8fD7NY.js";import{n as p,t as m}from"./OscdListItem-DOsmc99N.js";import{n as h,t as g}from"./OscdOutlinedTextField-C725QGUr.js";import{n as _,t as v}from"./FilterListBase-DJlo-gP8.js";import{n as y,t as b}from"./OscdCheckbox-CuR2HzBm.js";import{n as x,t as S}from"./OscdRadio-CZ3zEa5T.js";function C(e){return t`<oscd-checkbox
    slot="start"
    ?checked=${e.selected}
    ?disabled=${e.disabled}
  ></oscd-checkbox>`}function w(e,n){return t`<oscd-radio
    slot="start"
    name=${n}
    ?checked=${e.selected}
    ?disabled=${e.disabled}
  ></oscd-radio>`}function T(e,t){return new CustomEvent(`selection-list-change`,{bubbles:!0,composed:!0,...t,detail:{selectedElements:e,...t?.detail}})}var E;function D(){return(D=e((()=>{r(),c(),a(),y(),x(),u(),d(),p(),h(),_(),E=class extends v{constructor(...e){super(...e),this.multiselect=!1,this.items=[]}static{this.scopedElements={"oscd-outlined-text-field":g,"oscd-icon":l,"oscd-list":f,"oscd-list-item":m,"oscd-checkbox":b,"oscd-radio":S}}get selectedElements(){let e=[];return this.items.forEach(t=>{t.selected&&t.attachedElement&&e.push(t.attachedElement)}),e}renderListItem(e){return t`<oscd-list-item
      type="button"
      @click=${()=>{e.selected=!e.selected,this.multiselect||this.items.forEach(t=>{t!==e&&(t.selected=!1)}),this.dispatchEvent(T(this.selectedElements)),this.requestUpdate(`items`)}}
      class="${s({hidden:!this.searchRegex?.test(`${e.headline} ${e.supportingText??``}`)})}"
    >
      ${this.multiselect?C(e):w(e,`radio-group`)}

      <div slot="headline">${e.headline}</div>
      ${e.supportingText?t`<div slot="supporting-text">${e.supportingText}</div>`:t``}
    </oscd-list-item>`}render(){return t`<section>
      ${this.renderSearchField()}
      <oscd-list class="listitems">
        ${this.items.map(e=>this.renderListItem(e))}</oscd-list
      >
    </section>`}static{this.styles=n`
    section {
      display: flex;
      flex-direction: column;
    }

    oscd-outlined-text-field {
      background-color: var(--md-sys-color-surface, #fef7ff);
      --md-outlined-text-field-container-shape: 32px;
      padding: 8px;
    }

    .listitems {
      flex: auto;
    }

    oscd-radio {
      --md-radio-hover-state-layer-opacity: 0;
      --md-radio-pressed-state-layer-opacity: 0;
      --md-radio-selected-hover-state-layer-opacity: 0;
      --md-radio-selected-pressed-state-layer-opacity: 0;
    }

    oscd-checkbox {
      --md-checkbox-hover-state-layer-opacity: 0;
      --md-checkbox-pressed-state-layer-opacity: 0;
      --md-checkbox-selected-hover-state-layer-opacity: 0;
      --md-checkbox-selected-pressed-state-layer-opacity: 0;
    }

    .hidden {
      display: none;
    }
  `}},o([i({type:Boolean})],E.prototype,`multiselect`,void 0),o([i({type:Array})],E.prototype,`items`,void 0),o([i({type:Array})],E.prototype,`selectedElements`,null)})))()}var O;function k(){return(k=e((()=>{O=new DOMParser().parseFromString(`<SCL>
  <GSEControl name="gse0" desc="gseControl0"/>
  <GSEControl name="gse1" desc="gseControl1"/>
  <GSEControl name="gse2" desc="gseControl2"/>
  <GSEControl name="gse3" desc="gseControl3"/>
  <GSEControl name="gse4" desc="gseControl4"/>
  <GSEControl name="gse5" />
  <GSEControl name="gse6" desc="gseControl6"/>
  <GSEControl name="gse7" desc="gseControl7"/>
  <GSEControl name="gse8" />
  <GSEControl name="gse9" desc="gseControl9"/>
</SCL>`,`application/xml`)})))()}export{D as i,O as n,E as r,k as t};