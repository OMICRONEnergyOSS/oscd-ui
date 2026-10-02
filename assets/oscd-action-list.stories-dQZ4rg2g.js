import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,f as n,t as r}from"./lit-CCeopZMg.js";import{_ as i,r as a}from"./lit-element-DJJrs8Rf.js";import{n as o,t as s}from"./decorate-DTsqE9Ek.js";import{i as c,r as l}from"./delegate-C0FF0IFX.js";import{d as u,f as d,o as f,s as p}from"./OscdItem-B_us6arR.js";import{n as m,r as h}from"./oscd-menu-item-BPNzwGkQ.js";import{n as g,t as _}from"./getStorybookMeta-CFjOzqPI.js";import{n as v,t as y}from"./OscdList-CCaXDBxL.js";import{n as b,t as x}from"./OscdListItem-B9cIMDtY.js";import{n as S,t as C}from"./OscdMenu-Atjsrnmq.js";import{n as w,t as T}from"./OscdDivider-qFrTWBPW.js";import{n as E,t as D}from"./OscdOutlinedTextField-yFCYMRyh.js";import{n as O,t as k}from"./FilterListBase-krJ1fJLz.js";function A(e){return`${e.headline} ${e.supportingText??``}${e.filtergroup?.join(` `)??``}`}var j,M=e((()=>{r(),l(),a(),S(),d(),w(),p(),v(),b(),h(),E(),O(),o(),j=class extends k{constructor(...e){super(...e),this.items=[],this.height=72}static{this.scopedElements={"oscd-outlined-text-field":D,"oscd-icon":f,"oscd-list":y,"oscd-list-item":x,"oscd-divider":T,"oscd-menu":C,"oscd-menu-item":m}}renderMoreVertItem(e){e.actions.shift();let t=e.actions;return n`
      <span style="position: relative">
        <oscd-list-item
          id="more-vert-anchor"
          type="button"
          class="${c({hidden:!this.searchRegex.test(A(e))})}"
          @click=${e=>{(e.target instanceof u?e.target.parentElement.nextElementSibling:e.target.nextElementSibling).show()}}
        >
          <oscd-icon slot="start">more_vert</oscd-icon>
        </oscd-list-item>
        <oscd-menu id="more-vert-menu" anchor="more-vert-anchor">
          ${t.map(e=>n`<oscd-menu-item @click=${e.callback}>
                <div slot="headline">${e.label}</div>
                <oscd-icon slot="start">${e.icon}</oscd-icon>
              </oscd-menu-item>`)}
        </oscd-menu> </span
      >${e.divider?n`<oscd-divider
              class="${c({hidden:!this.searchRegex.test(A(e))})}"
            ></oscd-divider>`:n``}
    `}renderActionItem(e,t=0){let r=e.actions?e.actions[t]:null;return r?n`<oscd-list-item
        type="button"
        class="${c({hidden:!this.searchRegex.test(A(e))})}"
        @click=${()=>r.callback(e)}
      >
        <oscd-icon slot="start">${r.icon}</oscd-icon> </oscd-list-item
      >${e.divider?n`<oscd-divider
              class="${c({hidden:!this.searchRegex.test(A(e))})}"
            ></oscd-divider>`:n``}`:n`<oscd-list-item
          class="${c({hidden:!this.searchRegex.test(A(e))})}"
        ></oscd-list-item
        >${e.divider?n`<oscd-divider
                class="${c({hidden:!this.searchRegex.test(A(e))})}"
              ></oscd-divider>`:n``}`}renderOtherActions(){return n`<oscd-list>
      ${this.items.map(e=>e.actions&&e.actions?.length>2?this.renderMoreVertItem(e):this.renderActionItem(e,1))}</oscd-list
    >`}renderFirstAction(){return n`<oscd-list>
      ${this.items.map(e=>this.renderActionItem(e))}</oscd-list
    >`}renderActions(){return n`
      ${this.items.some(e=>e.actions&&e.actions[0])?this.renderFirstAction():n``}
      ${this.items.some(e=>e.actions&&e.actions.length>1)?this.renderOtherActions():n``}
    `}renderActionListItem(e){return n`<oscd-list-item
        type="${e.primaryAction?`link`:`text`}"
        class="${c({hidden:!this.searchRegex.test(A(e))})}"
        title="${e.headline??``}
${e.headline&&e.supportingText?`-`:``}${e.supportingText}"
        @click=${()=>e.primaryAction&&e.primaryAction(e)}
      >
        <div slot="headline" class="firstLine">${e.headline}</div>
        ${e.supportingText?n`<div slot="supporting-text">${e.supportingText}</div>`:n``}
        ${e.startingIcon?n`<oscd-icon slot="start">${e.startingIcon}</oscd-icon>`:n``}
        ${e.endingIcon?n`<oscd-icon slot="end">${e.endingIcon}</oscd-icon>`:n``} </oscd-list-item
      >${e.divider?n`<oscd-divider
              class="${c({hidden:!this.searchRegex.test(A(e))})}"
            ></oscd-divider>`:n``}`}renderListItem(e){return this.renderActionListItem(e)}render(){return n`<style>
        oscd-list-item {
          height: ${this.height}px;
        }
        [slot='supporting-text'] {
          max-height: ${this.height-24}px;
        }
      </style>
      <section>
        ${this.renderSearchField()}
        <div style="display: flex;">
          <oscd-list class="listitems">
            ${this.items.map(e=>this.renderListItem(e))}</oscd-list
          >
          ${this.renderActions()}
        </div>
      </section>`}static{this.styles=t`
    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    oscd-outlined-text-field {
      background-color: var(--md-sys-color-surface, #fef7ff);
      --md-outlined-text-field-container-shape: 32px;
      padding: 8px;
    }

    [slot='headline'] {
      white-space: pre;
    }

    [slot='supporting-text'] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }

    .listitems {
      flex: auto;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .hidden {
      display: none;
    }
  `}},s([i({type:Array})],j.prototype,`items`,void 0),s([i({type:Number})],j.prototype,`height`,void 0)})),N=e((()=>{M(),window.customElements.define(`oscd-action-list`,j)})),P,F,I,L,R,z,B,V,H,U,W,G,K;e((()=>{N(),g(),{action:P}=__STORYBOOK_MODULE_ACTIONS__,F=new DOMParser().parseFromString(`<SCL>
  <GSEControl name="gse0" desc="gseControl0"/>
  <GSEControl name="gse1" desc="gseControl1"/>
  <GSEControl name="gse2" desc="gseControl2"/>
  <GSEControl name="gse3" desc="gseControl3"/>
  <GSEControl name="gse4" desc="gseControl4"/>
  <GSEControl name="gse5" />
  <GSEControl name="gse6" desc="gseControl6"/>
  <GSEControl name="gse7" desc="gseControl7"/>
  <GSEControl name="gse8" />
  <GSEControl name="gse9" desc="gseControl9"/>
</SCL>`,`application/xml`),{args:I,argTypes:L,meta:R}=_({tagName:`oscd-action-list`}),z={...R,title:`Action Controls/Action List`,tags:[`autodocs`],argTypes:{...L,startingIcon:{control:{type:`select`,options:[`arrow-up`,`arrow-down`,`loading`]},description:`Name of icon to place at start of Action Item`},endingIcon:{control:{type:`string`,options:[`arrow-up`,`arrow-down`,`loading`]},description:`Name of icon to place at end of Action Item`},divider:{control:{type:`boolean`},description:`Add a divider at the bottom of the item`},filterGroup:{control:{type:`object`},description:`Specifies additional filter terms `},primaryAction:{control:{type:`boolean`},description:`The action to be performed when clicking the list item`},actionsCount:{control:{type:`number`,min:0,max:4},description:`Number of list items to render. These are additional actions for the item. The first action is visible, the rest are in a context menu.`,defaultValue:2}}},B=e=>{P(`primaryAction`)({item:e})},V=[`add`,`edit`,`delete`,`content_copy`].map(e=>({icon:e,callback:t=>P(`action:${e}`)(t)})),H=(e,t)=>Array.from(F.querySelectorAll(`GSEControl`)).map(n=>({headline:n.getAttribute(`name`)??`unknown`,...t?{supportingText:n.getAttribute(`desc`)}:{},attachedElement:n,startingIcon:e.startingIcon,endingIcon:e.endingIcon,divider:e.divider??!0,filtergroup:e.filterGroup?e.filterGroup:void 0,...e.primaryAction?{primaryAction:B}:{},actions:V.slice(0,e.actionsCount)})),U={...I,primaryAction:!0,actionsCount:4,filterable:!1},W={argTypes:L,args:{...U,".items":H(U)}},G={argTypes:L,args:{...U,".items":H(U,!0)}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...defaultArgs,
    ['.items']: getItems(defaultArgs)
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...defaultArgs,
    ['.items']: getItems(defaultArgs, true)
  }
}`,...G.parameters?.docs?.source}}},K=[`Default`,`WithSupportingText`]}))();export{W as Default,G as WithSupportingText,K as __namedExportsOrder,z as default};