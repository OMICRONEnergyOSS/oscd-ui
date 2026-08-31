import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,h as r,u as i}from"./static-html-JNahc6jH.js";import{E as a,I as o,L as s,_ as c,j as l,y as u}from"./list-navigation-helpers-C1Ibc9kd.js";import{a as d,n as f,r as p,t as m}from"./OscdIcon-BLAkUGod.js";import{_ as h,g}from"./menuItemController-CDb7NKZG.js";import{n as _,t as v}from"./OscdDialog-V525384v.js";import{n as y,t as b}from"./OscdIconButton-De0GC20a.js";import{n as x,t as S}from"./decorate-DTsqE9Ek.js";import{n as C,t as w}from"./OscdOutlinedButton-DqrtRuZn.js";import{n as T,t as E}from"./getStorybookMeta-B4IvGxX7.js";import{i as D,n as O,r as k,t as A}from"./storybook-utils-DPBkiALS.js";import{t as j}from"./oscd-elevated-card-Cu-jNr5-.js";function M(e,t){return new CustomEvent(`filter-button-dialog-close`,{bubbles:!0,composed:!0,...t,detail:{selectedElements:e,...t?.detail}})}var N,P=e((()=>{i(),D(),_(),s(),c(),h(),f(),C(),d(),y(),x(),N=class extends o(k){constructor(...e){super(...e),this.header=`Filter`,this.closeButtonLabel=`Apply`,this.cancelButtonLabel=`Cancel`,this.disabled=!1}static{this.scopedElements={...super.scopedElements,"oscd-dialog":v,"oscd-icon-button":b,"oscd-icon":m,"oscd-scl-icon":p,"oscd-outlined-button":w,"oscd-filled-button":g}}toggleList(){this.filterDialog.show()}onClose(){this.dispatchEvent(M(this.selectedElements))}render(){return n`
      <oscd-icon-button
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot
          name="icon"
          class="filter-button-icon-slot"
          @slotchange=${()=>this.requestUpdate()}
        ></slot>
        ${!this._iconSlot||this._iconSlot.length===0?n`<oscd-icon class="default-icon">filter_list</oscd-icon>`:r}
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
    `}static{this.styles=t`
    ${k.styles}
    oscd-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    oscd-dialog {
      max-height: calc(100vh - 150px);
    }
  `}},S([l()],N.prototype,`header`,void 0),S([l()],N.prototype,`closeButtonLabel`,void 0),S([l()],N.prototype,`cancelButtonLabel`,void 0),S([l({type:Boolean})],N.prototype,`disabled`,void 0),S([a(`oscd-dialog`)],N.prototype,`filterDialog`,void 0),S([u({slot:`icon`})],N.prototype,`_iconSlot`,void 0)})),F=e((()=>{P(),customElements.define(`oscd-filter-button`,N)})),I,L,R,z,B,V,H,U,W;e((()=>{F(),j(),T(),i(),A(),{action:I}=__STORYBOOK_MODULE_ACTIONS__,{args:L,argTypes:R,meta:z,template:B}=E({tagName:`oscd-filter-button`}),V={...z,title:`Filtering/Filter Button`,tags:[`autodocs`],render:e=>n`<div
      @filter-button-dialog-close=${e=>{I(`filter-button-dialog-close`)(e.detail.selectedElements.map(e=>new XMLSerializer().serializeToString(e)))}}
    >
      ${B(e)}
    </div> `},H={argTypes:{...R},args:{...L,".items":Array.from(O.querySelectorAll(`GSEControl`)).map(e=>({headline:e.getAttribute(`name`)??`unknown`,attachedElement:e})),filterable:!1}},U={argTypes:{...R},args:{...L,".items":Array.from(O.querySelectorAll(`GSEControl`)).map(e=>({headline:e.getAttribute(`name`)??`unknown`,supportingText:e.getAttribute(`desc`)??void 0,attachedElement:e})),filterable:!0}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`Default`,`WithSupportingText`]}))();export{H as Default,U as WithSupportingText,W as __namedExportsOrder,V as default};