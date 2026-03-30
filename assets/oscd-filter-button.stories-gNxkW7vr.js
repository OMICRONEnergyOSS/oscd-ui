var y=Object.getPrototypeOf;var S=Reflect.get;var u=(t,e,r)=>S(y(t),r,e);import{E,x as m,a as v}from"./iframe-BxxurlDP.js";import{O as f,s as g}from"./storybook-utils-D1NT0kuo.js";import{O as A}from"./OscdDialog-MfOqKNAt.js";import{S as O,n as c,a as T}from"./list-item-styles-DDIVumax.js";import{n as _}from"./query-assigned-nodes-DB9p0wIF.js";import{a as $}from"./OscdMenuItem-BgDjJhKl.js";import{f as x,b as C}from"./OscdListItem-CcTOxY3J.js";import{O as L}from"./OscdOutlinedButton-CkabCkyh.js";import{O as B}from"./OscdIconButton-DFOo83rH.js";import"./oscd-elevated-card-7tURJXei.js";import{g as w}from"./getStorybookMeta-jb8d2n-5.js";import"./preload-helper-PPVm8Dsz.js";import"./OscdCheckbox-C4FUNFLZ.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-qBBhIEAC.js";import"./form-associated-DZlGCUjv.js";import"./checkbox-validator-CqLsnnmV.js";import"./OscdRadio-DffV4AgC.js";import"./focusable-DMHEir4x.js";import"./OscdOutlinedTextField-CDMoTxS3.js";import"./shared-styles-Dpw8Wm1D.js";import"./style-map-VJYNW7EI.js";import"./on-report-validity-BZRFIofC.js";import"./OscdOutlinedField-4UeDX25G.js";import"./shared-styles-DzwX3efC.js";import"./FilterListBase-B_JEFbBg.js";import"./OscdDivider-CknjzvMU.js";import"./shared-styles-PkfzvYlg.js";import"./is-rtl-DJNyvqXe.js";import"./shared-styles-CXfzGhpK.js";import"./getStorybookHelpers-DKJ4wwK_.js";var D=Object.defineProperty,n=(t,e,r,I)=>{for(var s=void 0,d=t.length-1,p;d>=0;d--)(p=t[d])&&(s=p(e,r,s)||s);return s&&D(e,r,s),s};const i=class i extends O(f){constructor(){super(...arguments),this.header="Filter",this.closeButtonLabel="Apply",this.cancelButtonLabel="Cancel",this.disabled=!1}toggleList(){this.filterDialog.show()}onClose(){this.dispatchEvent(k(this.selectedElements))}render(){return m`
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
  `;let o=i;n([c()],o.prototype,"header");n([c()],o.prototype,"closeButtonLabel");n([c()],o.prototype,"cancelButtonLabel");n([c({type:Boolean})],o.prototype,"disabled");n([T("oscd-dialog")],o.prototype,"filterDialog");n([_({slot:"icon"})],o.prototype,"_iconSlot");function k(t,e){return new CustomEvent("filter-button-dialog-close",{bubbles:!0,composed:!0,...e,detail:{selectedElements:t,...e?.detail}})}customElements.define("oscd-filter-button",o);const{action:q}=__STORYBOOK_MODULE_ACTIONS__,{args:b,argTypes:h,meta:G,template:M}=w({tagName:"oscd-filter-button"}),bt={...G,title:"Filtering/Filter Button",tags:["autodocs"],render:t=>m`<div
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
}`,...a.parameters?.docs?.source}}};const ht=["Default","WithSupportingText"];export{l as Default,a as WithSupportingText,ht as __namedExportsOrder,bt as default};
