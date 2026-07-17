var y=Object.getPrototypeOf;var S=Reflect.get;var u=(t,e,r)=>S(y(t),r,e);import{E,x as d,a as v}from"./iframe-BlmIIjc8.js";import{O as f,s as g}from"./storybook-utils-CyRMhsFM.js";import{O as A}from"./OscdDialog-BUoZEcgs.js";import{S as O,n as c,a as T}from"./list-navigation-helpers-BYaPgfdc.js";import{n as _}from"./query-assigned-nodes-D4uADFl8.js";import{O as $}from"./menuItemController-k5rPONrB.js";import{d as x,O as C}from"./OscdIcon-BF9UpfCs.js";import{O as L}from"./OscdOutlinedButton-CnOaV9DM.js";import{O as B}from"./OscdIconButton-BwBoQLoo.js";import"./oscd-elevated-card-CaEaSib6.js";import{g as w}from"./getStorybookMeta-C_Dfhlzu.js";import"./preload-helper-PPVm8Dsz.js";import"./OscdCheckbox-C-VPC0EN.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-D5inW5DY.js";import"./form-associated-ob18pg9T.js";import"./checkbox-validator-D1loSRI3.js";import"./OscdRadio-BLGVKRwe.js";import"./focusable-Ow2gEIX7.js";import"./OscdList-a84XNi5w.js";import"./OscdListItem-BdyDKWIx.js";import"./list-item-styles-D7C7ftEO.js";import"./OscdOutlinedTextField-BNzIBgFN.js";import"./shared-styles-DnEMhRC_.js";import"./style-map-B3PQ7mrl.js";import"./on-report-validity-D1pS5cYO.js";import"./OscdOutlinedField-OVSthKTl.js";import"./shared-styles-CsN18xnd.js";import"./FilterListBase-tZk8b0Tc.js";import"./OscdDivider-CvXsD4ww.js";import"./shared-styles-mOHjHnLS.js";import"./is-rtl-DJNyvqXe.js";import"./shared-styles-C5pccYmQ.js";import"./getStorybookHelpers-DQ9KU-nQ.js";import"./oscd-menu-item-vFGSEMX-.js";import"./OscdMenuItem-CBcjVsGV.js";import"./oscd-filled-button-pAHRa5nn.js";import"./oscd-list-item-BA8wSq9a.js";var D=Object.defineProperty,n=(t,e,r,I)=>{for(var s=void 0,m=t.length-1,p;m>=0;m--)(p=t[m])&&(s=p(e,r,s)||s);return s&&D(e,r,s),s};const i=class i extends O(f){constructor(){super(...arguments),this.header="Filter",this.closeButtonLabel="Apply",this.cancelButtonLabel="Cancel",this.disabled=!1}toggleList(){this.filterDialog.show()}onClose(){this.dispatchEvent(k(this.selectedElements))}render(){return d`
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
