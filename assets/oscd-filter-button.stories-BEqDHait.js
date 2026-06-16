var y=Object.getPrototypeOf;var S=Reflect.get;var u=(t,e,r)=>S(y(t),r,e);import{E,x as m,a as v}from"./iframe-BFpCwY9R.js";import{O as f,s as g}from"./storybook-utils-D-VFYBuc.js";import{O as A}from"./OscdDialog-D8hmkWr8.js";import{S as O,n as c,a as T}from"./list-item-styles-Bfc4eJrR.js";import{n as _}from"./query-assigned-nodes-Ud0G1qU0.js";import{a as $}from"./OscdMenuItem-DnbnThgq.js";import{e as x,a as C}from"./OscdListItem-B_3Vgj5Y.js";import{O as L}from"./OscdOutlinedButton-C7Utw3rk.js";import{O as B}from"./OscdIconButton-DBpPTqOu.js";import"./oscd-elevated-card-DBeywxrH.js";import{g as w}from"./getStorybookMeta-gDO-wW0N.js";import"./preload-helper-PPVm8Dsz.js";import"./OscdCheckbox-CUAXXZLT.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-C3KVGDlf.js";import"./form-associated-qER_3PrR.js";import"./checkbox-validator-CQVrzvKL.js";import"./OscdRadio-BE423v1M.js";import"./focusable-BjR9Ckpl.js";import"./OscdList-XsnvtwlT.js";import"./OscdOutlinedTextField-C_3bodT-.js";import"./shared-styles-DKww1ZEb.js";import"./style-map-BGd_K8UZ.js";import"./on-report-validity-DiIWBLfR.js";import"./OscdOutlinedField-BfnWYMBB.js";import"./shared-styles-Dp4Khk2d.js";import"./FilterListBase-u3mEvX3v.js";import"./OscdDivider-Bq-VYPqG.js";import"./shared-styles-Bh1fW7E3.js";import"./is-rtl-DJNyvqXe.js";import"./shared-styles-CDQZNFZJ.js";import"./getStorybookHelpers-cc4YvQDR.js";import"./oscd-menu-item-COy5XFsF.js";var D=Object.defineProperty,n=(t,e,r,I)=>{for(var s=void 0,d=t.length-1,p;d>=0;d--)(p=t[d])&&(s=p(e,r,s)||s);return s&&D(e,r,s),s};const i=class i extends O(f){constructor(){super(...arguments),this.header="Filter",this.closeButtonLabel="Apply",this.cancelButtonLabel="Cancel",this.disabled=!1}toggleList(){this.filterDialog.show()}onClose(){this.dispatchEvent(k(this.selectedElements))}render(){return m`
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
  `;let o=i;n([c()],o.prototype,"header");n([c()],o.prototype,"closeButtonLabel");n([c()],o.prototype,"cancelButtonLabel");n([c({type:Boolean})],o.prototype,"disabled");n([T("oscd-dialog")],o.prototype,"filterDialog");n([_({slot:"icon"})],o.prototype,"_iconSlot");function k(t,e){return new CustomEvent("filter-button-dialog-close",{bubbles:!0,composed:!0,...e,detail:{selectedElements:t,...e?.detail}})}customElements.define("oscd-filter-button",o);const{action:q}=__STORYBOOK_MODULE_ACTIONS__,{args:h,argTypes:b,meta:G,template:M}=w({tagName:"oscd-filter-button"}),yt={...G,title:"Filtering/Filter Button",tags:["autodocs"],render:t=>m`<div
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
}`,...a.parameters?.docs?.source}}};const St=["Default","WithSupportingText"];export{l as Default,a as WithSupportingText,St as __namedExportsOrder,yt as default};
