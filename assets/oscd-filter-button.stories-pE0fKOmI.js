var y=Object.getPrototypeOf;var S=Reflect.get;var u=(t,e,r)=>S(y(t),r,e);import{E,x as m,a as v}from"./iframe-CVDob4yH.js";import{O as f,s as g}from"./storybook-utils-CHJ2S5ob.js";import{O as A}from"./OscdDialog-BCrtvHIj.js";import{S as O,n as c,a as T}from"./list-item-styles-D88BytE0.js";import{n as _}from"./query-assigned-nodes-NHYQZ91Q.js";import{a as $}from"./OscdMenuItem-wP2ife6f.js";import{b as x}from"./OscdListItem-B18tstYX.js";import{O as C}from"./OscdOutlinedButton-LFk4hOJ6.js";import{O as L}from"./OscdSclIcon-CRuZYVE0.js";import{O as B}from"./OscdIconButton-X_KJSgU-.js";import"./oscd-elevated-card-BjNNgaaZ.js";import{g as w}from"./getStorybookMeta-BoCODc77.js";import"./preload-helper-PPVm8Dsz.js";import"./OscdCheckbox-DT9FXFjK.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-DF6SPYQ-.js";import"./form-associated-COZPd8sx.js";import"./checkbox-validator-BaIeWwuO.js";import"./OscdRadio-RJ5tvEj3.js";import"./focusable-CuKpskI8.js";import"./OscdOutlinedTextField-Cm6FcI4k.js";import"./shared-styles-fAVamnlI.js";import"./style-map-B9cXupzH.js";import"./on-report-validity-DGwPj8Co.js";import"./OscdOutlinedField-B8JYYgfr.js";import"./shared-styles-hjDMpCOL.js";import"./FilterListBase-CDM8GmYm.js";import"./OscdDivider-BMPO16Pr.js";import"./shared-styles-ut-I7mYk.js";import"./is-rtl-DJNyvqXe.js";import"./shared-styles-BdzsE2PA.js";import"./getStorybookHelpers-BJL7o6s0.js";var D=Object.defineProperty,n=(t,e,r,I)=>{for(var s=void 0,d=t.length-1,p;d>=0;d--)(p=t[d])&&(s=p(e,r,s)||s);return s&&D(e,r,s),s};const i=class i extends O(f){constructor(){super(...arguments),this.header="Filter",this.closeButtonLabel="Apply",this.cancelButtonLabel="Cancel",this.disabled=!1}toggleList(){this.filterDialog.show()}onClose(){this.dispatchEvent(k(this.selectedElements))}render(){return m`
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
