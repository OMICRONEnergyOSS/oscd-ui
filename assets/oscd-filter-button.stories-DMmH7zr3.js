var y=Object.getPrototypeOf;var S=Reflect.get;var u=(t,e,r)=>S(y(t),r,e);import{E,x as d,a as v}from"./iframe-CzfB892c.js";import{O as f,s as g}from"./storybook-utils-DZZtifW8.js";import{O as A}from"./OscdDialog-DYggbgSY.js";import{S as O,n as c,a as T}from"./list-navigation-helpers-CWtHtHq2.js";import{n as _}from"./query-assigned-nodes-CLgeST5H.js";import{O as $}from"./menuItemController-B_J_C6eD.js";import{d as x,O as C}from"./OscdIcon-D6gSxZ3c.js";import{O as L}from"./OscdOutlinedButton-BIkvxhLJ.js";import{O as B}from"./OscdIconButton-u3FIKm3J.js";import"./oscd-elevated-card-vf87RIBE.js";import{g as w}from"./getStorybookMeta-DOS5upft.js";import"./preload-helper-PPVm8Dsz.js";import"./OscdCheckbox-C7o6VquQ.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-DNzAhO9h.js";import"./form-associated-BTVmRIpu.js";import"./checkbox-validator-Dh2QDM13.js";import"./OscdRadio-SAy5Pnpk.js";import"./focusable-DATL9xS-.js";import"./OscdList-ZIhvBfgq.js";import"./OscdListItem-aUMQlSYk.js";import"./list-item-styles-Bz0C6iu4.js";import"./OscdOutlinedTextField-Bp_Aja_q.js";import"./shared-styles-D7RceSw8.js";import"./style-map-e5XHfPGA.js";import"./on-report-validity-Bx-7rykv.js";import"./OscdOutlinedField-B87lCXYz.js";import"./shared-styles-Csz4B7L3.js";import"./FilterListBase-BmGT86ey.js";import"./OscdDivider-ChOow31w.js";import"./shared-styles-ChfmohU1.js";import"./is-rtl-DJNyvqXe.js";import"./shared-styles-lKJBuM_O.js";import"./getStorybookHelpers-Bv3ZIOVO.js";import"./oscd-menu-item-Bv29e9fa.js";import"./OscdMenuItem-DA-1vXHl.js";import"./oscd-filled-button-DQw484Ye.js";import"./oscd-list-item-C0ScTv6k.js";var D=Object.defineProperty,n=(t,e,r,I)=>{for(var s=void 0,m=t.length-1,p;m>=0;m--)(p=t[m])&&(s=p(e,r,s)||s);return s&&D(e,r,s),s};const i=class i extends O(f){constructor(){super(...arguments),this.header="Filter",this.closeButtonLabel="Apply",this.cancelButtonLabel="Cancel",this.disabled=!1}toggleList(){this.filterDialog.show()}onClose(){this.dispatchEvent(k(this.selectedElements))}render(){return d`
      <oscd-icon-button
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot
          name="icon"
          class="filter-button-icon-slot"
          @slotchange=${()=>this.requestUpdate()}
        ></slot>
        ${!this._iconSlot||this._iconSlot.length===0?d`<oscd-icon class="default-icon">filter_list</oscd-icon>`:E}
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
  `;let o=i;n([c()],o.prototype,"header");n([c()],o.prototype,"closeButtonLabel");n([c()],o.prototype,"cancelButtonLabel");n([c({type:Boolean})],o.prototype,"disabled");n([T("oscd-dialog")],o.prototype,"filterDialog");n([_({slot:"icon"})],o.prototype,"_iconSlot");function k(t,e){return new CustomEvent("filter-button-dialog-close",{bubbles:!0,composed:!0,...e,detail:{selectedElements:t,...e?.detail}})}customElements.define("oscd-filter-button",o);const{action:q}=__STORYBOOK_MODULE_ACTIONS__,{args:h,argTypes:b,meta:G,template:M}=w({tagName:"oscd-filter-button"}),Ot={...G,title:"Filtering/Filter Button",tags:["autodocs"],render:t=>d`<div
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
}`,...a.parameters?.docs?.source}}};const Tt=["Default","WithSupportingText"];export{l as Default,a as WithSupportingText,Tt as __namedExportsOrder,Ot as default};
