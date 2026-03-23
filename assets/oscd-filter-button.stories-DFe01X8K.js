var y=Object.getPrototypeOf;var S=Reflect.get;var u=(t,e,r)=>S(y(t),r,e);import{E,x as m,a as v}from"./iframe-bV8sXuOy.js";import{O as f,s as g}from"./storybook-utils-DjAF2Fob.js";import{O as A}from"./OscdDialog-C7L-OO25.js";import{S as O,n as c,a as T}from"./list-item-styles-oRaTTV7d.js";import{n as _}from"./query-assigned-nodes-BDCLEJeA.js";import{a as $}from"./OscdMenuItem-DbC5QpUl.js";import{b as x}from"./OscdListItem-DFmTB3bM.js";import{O as C}from"./OscdOutlinedButton-BlycnS3V.js";import{O as L}from"./OscdSclIcon-B89bPdKw.js";import{O as B}from"./OscdIconButton-CFSDKjD4.js";import"./oscd-elevated-card-CTRfOrRV.js";import{g as w}from"./getStorybookMeta-5v34_TjP.js";import"./preload-helper-PPVm8Dsz.js";import"./OscdCheckbox-BIbtNeJ6.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-BSw-zGn3.js";import"./form-associated-MjIWhLoT.js";import"./checkbox-validator-DJRDlXHF.js";import"./OscdRadio-BWNlLGXC.js";import"./focusable-kKoMXlYf.js";import"./OscdOutlinedTextField-ZewaeheC.js";import"./shared-styles-C3IWhO9p.js";import"./style-map-BPVn1956.js";import"./on-report-validity-CDRbvipq.js";import"./OscdOutlinedField-DYMBsNkm.js";import"./shared-styles-4Bq077zl.js";import"./FilterListBase-CeM9Oeu_.js";import"./OscdDivider-DGU6ZsFX.js";import"./shared-styles-n84oHW2p.js";import"./is-rtl-DJNyvqXe.js";import"./shared-styles-CZc6Z74w.js";import"./getStorybookHelpers-Dixdbl-W.js";var D=Object.defineProperty,n=(t,e,r,I)=>{for(var s=void 0,d=t.length-1,p;d>=0;d--)(p=t[d])&&(s=p(e,r,s)||s);return s&&D(e,r,s),s};const i=class i extends O(f){constructor(){super(...arguments),this.header="Filter",this.closeButtonLabel="Apply",this.cancelButtonLabel="Cancel",this.disabled=!1}toggleList(){this.filterDialog.show()}onClose(){this.dispatchEvent(k(this.selectedElements))}render(){return m`
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
    `}};i.scopedElements={...u(i,i,"scopedElements"),"oscd-dialog":A,"oscd-icon-button":B,"oscd-icon":x,"oscd-scl-icon":L,"oscd-outlined-button":C,"oscd-filled-button":$},i.styles=v`
    ${f.styles}
    oscd-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    oscd-dialog {
      max-height: calc(100vh - 150px);
    }
  `;let o=i;n([c()],o.prototype,"header");n([c()],o.prototype,"closeButtonLabel");n([c()],o.prototype,"cancelButtonLabel");n([c({type:Boolean})],o.prototype,"disabled");n([T("oscd-dialog")],o.prototype,"filterDialog");n([_({slot:"icon"})],o.prototype,"_iconSlot");function k(t,e){return new CustomEvent("filter-button-dialog-close",{bubbles:!0,composed:!0,...e,detail:{selectedElements:t,...e?.detail}})}customElements.define("oscd-filter-button",o);const{action:q}=__STORYBOOK_MODULE_ACTIONS__,{args:b,argTypes:h,meta:G,template:M}=w({tagName:"oscd-filter-button"}),ht={...G,title:"Filtering/Filter Button",tags:["autodocs"],render:t=>m`<div
      @filter-button-dialog-close=${e=>{q("filter-button-dialog-close")(e.detail.selectedElements.map(r=>new XMLSerializer().serializeToString(r)))}}
    >
      ${M(t)}
    </div> `},l={argTypes:{...h},args:{...b,".items":Array.from(g.querySelectorAll("GSEControl")).map(t=>({headline:t.getAttribute("name")??"unknown",attachedElement:t})),filterable:!1}},a={argTypes:{...h},args:{...b,".items":Array.from(g.querySelectorAll("GSEControl")).map(t=>({headline:t.getAttribute("name")??"unknown",supportingText:t.getAttribute("desc")??void 0,attachedElement:t})),filterable:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const yt=["Default","WithSupportingText"];export{l as Default,a as WithSupportingText,yt as __namedExportsOrder,ht as default};
