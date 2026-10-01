import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,f as n,o as r,t as i}from"./lit-CCeopZMg.js";import{_ as a,a as o,f as s,n as c,r as l,t as u}from"./lit-element-DJJrs8Rf.js";import{n as d,t as f}from"./decorate-DTsqE9Ek.js";import{n as p,t as m}from"./OscdFilledButton-Dk6Pcent.js";import{o as h,s as g}from"./OscdItem-Dtx8rqS-.js";import{n as _,t as v}from"./getStorybookMeta-2wzGcZy1.js";import{n as y,t as b}from"./OscdIconButton-CSrywsGE.js";import{n as x,t as S}from"./OscdOutlinedButton-B4UCUbgP.js";import{n as C,t as w}from"./OscdDialog-BgJH9zNs.js";import{i as T,n as E,r as D,t as O}from"./storybook-utils-CfdImELQ.js";import{n as k,t as A}from"./OscdSclIcon-D4gunCji.js";import{t as j}from"./oscd-elevated-card-Bvw5DzUb.js";function M(e,t){return new CustomEvent(`filter-button-dialog-close`,{bubbles:!0,composed:!0,...t,detail:{selectedElements:e,...t?.detail}})}var N,P=e((()=>{i(),T(),C(),c(),l(),p(),g(),x(),k(),y(),d(),N=class extends u(D){constructor(...e){super(...e),this.header=`Filter`,this.closeButtonLabel=`Apply`,this.cancelButtonLabel=`Cancel`,this.disabled=!1}static{this.scopedElements={...super.scopedElements,"oscd-dialog":w,"oscd-icon-button":b,"oscd-icon":h,"oscd-scl-icon":A,"oscd-outlined-button":S,"oscd-filled-button":m}}toggleList(){this.filterDialog.show()}onClose(){this.dispatchEvent(M(this.selectedElements))}render(){return n`
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
    ${D.styles}
    oscd-dialog {
      max-height: calc(100vh - 150px);
    }
  `}},f([a()],N.prototype,`header`,void 0),f([a()],N.prototype,`closeButtonLabel`,void 0),f([a()],N.prototype,`cancelButtonLabel`,void 0),f([a({type:Boolean})],N.prototype,`disabled`,void 0),f([s(`oscd-dialog`)],N.prototype,`filterDialog`,void 0),f([o({slot:`icon`})],N.prototype,`_iconSlot`,void 0)})),F=e((()=>{P(),customElements.define(`oscd-filter-button`,N)})),I,L,R,z,B,V,H,U,W;e((()=>{F(),j(),_(),i(),O(),{action:I}=__STORYBOOK_MODULE_ACTIONS__,{args:L,argTypes:R,meta:z,template:B}=v({tagName:`oscd-filter-button`}),V={...z,title:`Filtering/Filter Button`,tags:[`autodocs`],render:e=>n`<div
      @filter-button-dialog-close=${e=>{I(`filter-button-dialog-close`)(e.detail.selectedElements.map(e=>new XMLSerializer().serializeToString(e)))}}
    >
      ${B(e)}
    </div> `},H={argTypes:{...R},args:{...L,".items":Array.from(E.querySelectorAll(`GSEControl`)).map(e=>({headline:e.getAttribute(`name`)??`unknown`,attachedElement:e})),filterable:!1}},U={argTypes:{...R},args:{...L,".items":Array.from(E.querySelectorAll(`GSEControl`)).map(e=>({headline:e.getAttribute(`name`)??`unknown`,supportingText:e.getAttribute(`desc`)??void 0,attachedElement:e})),filterable:!0}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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