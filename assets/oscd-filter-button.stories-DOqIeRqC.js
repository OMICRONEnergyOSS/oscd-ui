var y=Object.getPrototypeOf;var S=Reflect.get;var u=(t,e,r)=>S(y(t),r,e);import{E,x as m,a as v}from"./iframe-D_AT4TIz.js";import{O as f,s as g}from"./storybook-utils-BByuEugL.js";import{O as A}from"./OscdDialog-DHSxP1bU.js";import{S as O,n as c,a as T}from"./list-item-styles-B8z8P4EW.js";import{n as _}from"./query-assigned-nodes-BPJpqv7A.js";import{a as $}from"./OscdMenuItem-BwTzKIea.js";import{e as x,a as C}from"./OscdListItem-Dtz4smBz.js";import{O as L}from"./OscdOutlinedButton-Cmi7BjM4.js";import{O as B}from"./OscdIconButton-CDMEvruf.js";import"./oscd-elevated-card-D0MP2AqG.js";import{g as w}from"./getStorybookMeta-DSrCqPZ2.js";import"./preload-helper-PPVm8Dsz.js";import"./OscdCheckbox-8YMHiqKe.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-B2hqroGq.js";import"./form-associated-CDMYVxQk.js";import"./checkbox-validator-CWIo2DWx.js";import"./OscdRadio-CjAFNLD7.js";import"./focusable-Cklo7YME.js";import"./OscdList-Diogj996.js";import"./OscdOutlinedTextField-BvzhflUP.js";import"./shared-styles-dH80xMGT.js";import"./style-map-FWhBgtnV.js";import"./on-report-validity-Db4pmVu5.js";import"./OscdOutlinedField-DdjJoX5A.js";import"./shared-styles-aM9cD-bE.js";import"./FilterListBase-Wp72AktB.js";import"./OscdDivider-BFj41Hs2.js";import"./shared-styles-DRELbOWQ.js";import"./is-rtl-DJNyvqXe.js";import"./shared-styles-CrZOV4nD.js";import"./getStorybookHelpers-BPhoQ4a6.js";import"./oscd-menu-item-BRx5nmZc.js";var D=Object.defineProperty,n=(t,e,r,I)=>{for(var s=void 0,d=t.length-1,p;d>=0;d--)(p=t[d])&&(s=p(e,r,s)||s);return s&&D(e,r,s),s};const i=class i extends O(f){constructor(){super(...arguments),this.header="Filter",this.closeButtonLabel="Apply",this.cancelButtonLabel="Cancel",this.disabled=!1}toggleList(){this.filterDialog.show()}onClose(){this.dispatchEvent(k(this.selectedElements))}render(){return m`
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
