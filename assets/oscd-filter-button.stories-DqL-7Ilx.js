var y=Object.getPrototypeOf;var S=Reflect.get;var u=(t,e,r)=>S(y(t),r,e);import{E,x as m,a as v}from"./iframe-C4uLaTi3.js";import{O as f,s as g}from"./storybook-utils-CEVYRq6s.js";import{O as A}from"./OscdDialog-DjZ_v0nE.js";import{S as O,n as c,a as T}from"./list-navigation-helpers-uOLGipP7.js";import{n as _}from"./query-assigned-nodes-EHSBqaR2.js";import{O as $}from"./menuItemController-vk-DquCy.js";import{d as x,O as C}from"./OscdIcon-C3sU6W8j.js";import{O as L}from"./OscdOutlinedButton-BrpLcTmv.js";import{O as B}from"./OscdIconButton-5cjKo4Uu.js";import"./oscd-elevated-card-sDtiHKDc.js";import{g as w}from"./getStorybookMeta-fEcaYkww.js";import"./preload-helper-PPVm8Dsz.js";import"./OscdCheckbox-BByuhJVy.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-BdcpFJ2q.js";import"./form-associated-DtXYuc2T.js";import"./checkbox-validator-CVPaXxLl.js";import"./OscdRadio-rZjVmI0d.js";import"./focusable-D_LV6R0C.js";import"./OscdList-C90geFFa.js";import"./OscdListItem-CcUpt_sr.js";import"./list-item-styles-CwxrGOCZ.js";import"./OscdOutlinedTextField-Dd6Lhoh6.js";import"./shared-styles-E0E9mV4N.js";import"./style-map-Cl8m6Gme.js";import"./on-report-validity-D7FQpsi-.js";import"./OscdOutlinedField-DaicQdGe.js";import"./shared-styles-9iojKk-g.js";import"./FilterListBase-CpNEnwHu.js";import"./OscdDivider-HdJL0wmB.js";import"./shared-styles-PERDfklm.js";import"./is-rtl-DJNyvqXe.js";import"./shared-styles-DXtTFWkE.js";import"./getStorybookHelpers-BPPERp-C.js";import"./oscd-menu-item-D6eVNoir.js";import"./OscdMenuItem-AVFwwFRE.js";import"./oscd-filled-button-CEBWtmCm.js";var D=Object.defineProperty,n=(t,e,r,I)=>{for(var s=void 0,d=t.length-1,p;d>=0;d--)(p=t[d])&&(s=p(e,r,s)||s);return s&&D(e,r,s),s};const i=class i extends O(f){constructor(){super(...arguments),this.header="Filter",this.closeButtonLabel="Apply",this.cancelButtonLabel="Cancel",this.disabled=!1}toggleList(){this.filterDialog.show()}onClose(){this.dispatchEvent(k(this.selectedElements))}render(){return m`
      <oscd-icon-button
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot
          name="icon"
          class="filter-button-icon-slot"
          @slotchange=${()=>this.requestUpdate()}
        ></slot>
        ${!this._iconSlot||this._iconSlot.length===0?m`<oscd-icon class="default-icon">filter_list</oscd-icon>`:E}
      </oscd-icon-button>
      <oscd-dialog @close="${()=>this.onClose()}">
        <div slot="headline">${this.header}</div>
        <form slot="content" id="form-id" method="dialog">
          ${super.render()}
        </form>
        <div slot="actions">
          <oscd-outlined-button value="cancel" form="form-id">
            ${this.cancelButtonLabel}
          </oscd-outlined-button>
          <oscd-filled-button value="apply" form="form-id">
            ${this.closeButtonLabel}
          </oscd-filled-button>
        </div>
      </oscd-dialog>
    `}};i.scopedElements={...u(i,i,"scopedElements"),"oscd-dialog":A,"oscd-icon-button":B,"oscd-icon":C,"oscd-scl-icon":x,"oscd-outlined-button":L,"oscd-filled-button":$},i.styles=v`
    ${f.styles}
    oscd-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    oscd-dialog {
      max-height: calc(100vh - 150px);
    }
  `;let o=i;n([c()],o.prototype,"header");n([c()],o.prototype,"closeButtonLabel");n([c()],o.prototype,"cancelButtonLabel");n([c({type:Boolean})],o.prototype,"disabled");n([T("oscd-dialog")],o.prototype,"filterDialog");n([_({slot:"icon"})],o.prototype,"_iconSlot");function k(t,e){return new CustomEvent("filter-button-dialog-close",{bubbles:!0,composed:!0,...e,detail:{selectedElements:t,...e?.detail}})}customElements.define("oscd-filter-button",o);const{action:q}=__STORYBOOK_MODULE_ACTIONS__,{args:h,argTypes:b,meta:G,template:M}=w({tagName:"oscd-filter-button"}),At={...G,title:"Filtering/Filter Button",tags:["autodocs"],render:t=>m`<div
      @filter-button-dialog-close=${e=>{q("filter-button-dialog-close")(e.detail.selectedElements.map(r=>new XMLSerializer().serializeToString(r)))}}
    >
      ${M(t)}
    </div> `},l={argTypes:{...b},args:{...h,".items":Array.from(g.querySelectorAll("GSEControl")).map(t=>({headline:t.getAttribute("name")??"unknown",attachedElement:t})),filterable:!1}},a={argTypes:{...b},args:{...h,".items":Array.from(g.querySelectorAll("GSEControl")).map(t=>({headline:t.getAttribute("name")??"unknown",supportingText:t.getAttribute("desc")??void 0,attachedElement:t})),filterable:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes
  },
  args: {
    ...args,
    ['.items']: Array.from(sampleDoc.querySelectorAll('GSEControl')).map(element => ({
      headline: element.getAttribute('name') ?? 'unknown',
      attachedElement: element
    })),
    filterable: false
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes
  },
  args: {
    ...args,
    ['.items']: Array.from(sampleDoc.querySelectorAll('GSEControl')).map(element => ({
      headline: element.getAttribute('name') ?? 'unknown',
      supportingText: element.getAttribute('desc') ?? undefined,
      attachedElement: element
    })),
    filterable: true
  }
}`,...a.parameters?.docs?.source}}};const Ot=["Default","WithSupportingText"];export{l as Default,a as WithSupportingText,Ot as __namedExportsOrder,At as default};
