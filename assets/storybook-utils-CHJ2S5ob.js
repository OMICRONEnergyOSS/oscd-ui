import{x as r,a as m}from"./iframe-CVDob4yH.js";import{b as h,n}from"./list-item-styles-D88BytE0.js";import{O as u}from"./OscdCheckbox-DT9FXFjK.js";import{O as f}from"./OscdRadio-RJ5tvEj3.js";import{O as g,a as y,b as x}from"./OscdListItem-B18tstYX.js";import{O as C}from"./OscdOutlinedTextField-Cm6FcI4k.js";import{F as b}from"./FilterListBase-CDM8GmYm.js";var E=Object.defineProperty,v=Object.getOwnPropertyDescriptor,p=(t,e,s,c)=>{for(var o=c>1?void 0:c?v(e,s):e,l=t.length-1,i;l>=0;l--)(i=t[l])&&(o=(c?i(e,s,o):i(o))||o);return c&&o&&E(e,s,o),o};function $(t){return r`<oscd-checkbox
    slot="start"
    ?checked=${t.selected}
    ?disabled=${t.disabled}
  ></oscd-checkbox>`}function O(t,e){return r`<oscd-radio
    slot="start"
    name=${e}
    ?checked=${t.selected}
    ?disabled=${t.disabled}
  ></oscd-radio>`}const a=class a extends b{constructor(){super(...arguments),this.multiselect=!1,this.items=[]}get selectedElements(){const e=[];return this.items.forEach(s=>{s.selected&&s.attachedElement&&e.push(s.attachedElement)}),e}renderListItem(e){return r`<oscd-list-item
      type="button"
      @click=${()=>{e.selected=!e.selected,this.multiselect||this.items.forEach(s=>{s!==e&&(s.selected=!1)}),this.dispatchEvent(S(this.selectedElements)),this.requestUpdate("items")}}
      class="${h({hidden:!this.searchRegex?.test(`${e.headline} ${e.supportingText??""}`)})}"
    >
      ${this.multiselect?$(e):O(e,"radio-group")}

      <div slot="headline">${e.headline}</div>
      ${e.supportingText?r`<div slot="supporting-text">${e.supportingText}</div>`:r``}
    </oscd-list-item>`}render(){return r`<section>
      ${this.renderSearchField()}
      <oscd-list class="listitems">
        ${this.items.map(e=>this.renderListItem(e))}</oscd-list
      >
    </section>`}};a.scopedElements={"oscd-outlined-text-field":C,"oscd-icon":x,"oscd-list":y,"oscd-list-item":g,"oscd-checkbox":u,"oscd-radio":f},a.styles=m`
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
  `;let d=a;p([n({type:Boolean})],d.prototype,"multiselect",2);p([n({type:Array})],d.prototype,"items",2);p([n({type:Array})],d.prototype,"selectedElements",1);function S(t,e){return new CustomEvent("selection-list-change",{bubbles:!0,composed:!0,...e,detail:{selectedElements:t,...e?.detail}})}const T=new DOMParser().parseFromString(`<SCL>
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
</SCL>`,"application/xml");export{d as O,T as s};
