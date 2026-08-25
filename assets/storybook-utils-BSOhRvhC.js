import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,u as r}from"./static-html-JNahc6jH.js";import{_ as i,h as a,j as o,m as s}from"./list-navigation-helpers-C1Ibc9kd.js";import{n as c,t as l}from"./OscdIcon-BLAkUGod.js";import{n as u,t as d}from"./OscdList-D9R0bwqM.js";import{n as f,t as p}from"./OscdListItem-Bri-RKGu.js";import{n as m,t as h}from"./decorate-DTsqE9Ek.js";import{n as g,t as _}from"./OscdOutlinedTextField-DpU3EtL9.js";import{n as v,t as y}from"./FilterListBase-DOlGk-Mc.js";import{n as b,t as x}from"./OscdCheckbox-CJxI8LRI.js";import{n as S,t as C}from"./OscdRadio-BnMc9PVS.js";function w(e){return n`<oscd-checkbox
    slot="start"
    ?checked=${e.selected}
    ?disabled=${e.disabled}
  ></oscd-checkbox>`}function T(e,t){return n`<oscd-radio
    slot="start"
    name=${t}
    ?checked=${e.selected}
    ?disabled=${e.disabled}
  ></oscd-radio>`}function E(e,t){return new CustomEvent(`selection-list-change`,{bubbles:!0,composed:!0,...t,detail:{selectedElements:e,...t?.detail}})}var D,O=e((()=>{r(),s(),i(),b(),S(),c(),u(),f(),g(),v(),m(),D=class extends y{constructor(...e){super(...e),this.multiselect=!1,this.items=[]}static{this.scopedElements={"oscd-outlined-text-field":_,"oscd-icon":l,"oscd-list":d,"oscd-list-item":p,"oscd-checkbox":x,"oscd-radio":C}}get selectedElements(){let e=[];return this.items.forEach(t=>{t.selected&&t.attachedElement&&e.push(t.attachedElement)}),e}renderListItem(e){return n`<oscd-list-item
      type="button"
      @click=${()=>{e.selected=!e.selected,this.multiselect||this.items.forEach(t=>{t!==e&&(t.selected=!1)}),this.dispatchEvent(E(this.selectedElements)),this.requestUpdate(`items`)}}
      class="${a({hidden:!this.searchRegex?.test(`${e.headline} ${e.supportingText??``}`)})}"
    >
      ${this.multiselect?w(e):T(e,`radio-group`)}

      <div slot="headline">${e.headline}</div>
      ${e.supportingText?n`<div slot="supporting-text">${e.supportingText}</div>`:n``}
    </oscd-list-item>`}render(){return n`<section>
      ${this.renderSearchField()}
      <oscd-list class="listitems">
        ${this.items.map(e=>this.renderListItem(e))}</oscd-list
      >
    </section>`}static{this.styles=t`
    section {
      display: flex;
      flex-direction: column;
    }

    oscd-outlined-text-field {
      background-color: var(--md-sys-color-surface, #fef7ff);
      --oscd-outlined-text-field-container-shape: 32px;
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
  `}},h([o({type:Boolean})],D.prototype,`multiselect`,void 0),h([o({type:Array})],D.prototype,`items`,void 0),h([o({type:Array})],D.prototype,`selectedElements`,null)})),k,A=e((()=>{k=new DOMParser().parseFromString(`<SCL>
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
</SCL>`,`application/xml`)}));export{O as i,k as n,D as r,A as t};