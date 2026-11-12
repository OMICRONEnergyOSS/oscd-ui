import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,g as r,t as i}from"./lit-LihecQ0E.js";import{_ as a,a as o,f as s,n as c,r as l,t as u}from"./lit-element-CwUNoIyU.js";import{t as d}from"./decorate-2OK4V6AF.js";import{n as f,t as p}from"./OscdFilledButton-DbtUXXHz.js";import{o as m,s as h}from"./OscdItem-u-txZvbb.js";import{n as g,t as _}from"./getStorybookMeta-CDlhnKUP.js";import{n as v,t as y}from"./OscdIconButton-BXCa8KOT.js";import{n as b,t as x}from"./OscdOutlinedButton-BIS1rnbO.js";import{n as S,t as C}from"./OscdDialog-qSmttriD.js";import{i as w,n as T,r as E,t as D}from"./storybook-utils-DeM0MLpx.js";import{n as O,t as k}from"./OscdSclIcon-CQSb-4OA.js";import{t as A}from"./oscd-elevated-card-DTVRB8GD.js";function j(e,t){return new CustomEvent(`filter-button-dialog-close`,{bubbles:!0,composed:!0,...t,detail:{selectedElements:e,...t?.detail}})}var M;function N(){return(N=e((()=>{i(),w(),S(),c(),l(),f(),h(),b(),O(),v(),M=class extends u(E){constructor(...e){super(...e),this.header=`Filter`,this.closeButtonLabel=`Apply`,this.cancelButtonLabel=`Cancel`,this.disabled=!1}static{this.scopedElements={...super.scopedElements,"oscd-dialog":C,"oscd-icon-button":y,"oscd-icon":m,"oscd-scl-icon":k,"oscd-outlined-button":x,"oscd-filled-button":p}}toggleList(){this.filterDialog.show()}onClose(){this.dispatchEvent(j(this.selectedElements))}render(){return n`
      <oscd-icon-button
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot
          name="icon"
          class="filter-button-icon-slot"
          @slotchange=${()=>this.requestUpdate()}
        ></slot>
        ${!this._iconSlot||this._iconSlot.length===0?n`<oscd-icon class="default-icon">filter_list</oscd-icon>`:t}
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
    `}static{this.styles=r`
    ${E.styles}
    oscd-dialog {
      max-height: calc(100vh - 150px);
    }
  `}},d([a()],M.prototype,`header`,void 0),d([a()],M.prototype,`closeButtonLabel`,void 0),d([a()],M.prototype,`cancelButtonLabel`,void 0),d([a({type:Boolean})],M.prototype,`disabled`,void 0),d([s(`oscd-dialog`)],M.prototype,`filterDialog`,void 0),d([o({slot:`icon`})],M.prototype,`_iconSlot`,void 0)})))()}function P(){return(P=e((()=>{N(),customElements.define(`oscd-filter-button`,M)})))()}var F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{P(),A(),g(),i(),D(),{action:F}=__STORYBOOK_MODULE_ACTIONS__,{args:I,argTypes:L,meta:R,template:z}=_({tagName:`oscd-filter-button`}),B={...R,title:`Filtering/Filter Button`,tags:[`autodocs`],render:e=>n`<div
      @filter-button-dialog-close=${e=>{F(`filter-button-dialog-close`)(e.detail.selectedElements.map(e=>new XMLSerializer().serializeToString(e)))}}
    >
      ${z(e)}
    </div> `},V={argTypes:{...L},args:{...I,".items":Array.from(T.querySelectorAll(`GSEControl`)).map(e=>({headline:e.getAttribute(`name`)??`unknown`,attachedElement:e})),filterable:!1}},H={argTypes:{...L},args:{...I,".items":Array.from(T.querySelectorAll(`GSEControl`)).map(e=>({headline:e.getAttribute(`name`)??`unknown`,supportingText:e.getAttribute(`desc`)??void 0,attachedElement:e})),filterable:!0}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Default`,`WithSupportingText`]})))()}W();export{V as Default,H as WithSupportingText,U as __namedExportsOrder,B as default};