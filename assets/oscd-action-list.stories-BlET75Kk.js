import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,g as n,t as r}from"./lit-LihecQ0E.js";import{_ as i,r as a}from"./lit-element-CwUNoIyU.js";import{t as o}from"./decorate-2OK4V6AF.js";import{i as s,r as c}from"./delegate-l-TUd_7w.js";import{d as l,f as u,o as d,s as f}from"./OscdItem-u-txZvbb.js";import{n as p,r as m}from"./oscd-menu-item-BRUwrWle.js";import{n as h,t as g}from"./getStorybookMeta-CDlhnKUP.js";import{n as _,t as v}from"./OscdList-BX09UKw4.js";import{n as y,t as b}from"./OscdListItem-BtLkpzwU.js";import{n as x,t as S}from"./OscdMenu-hu20nonG.js";import{n as C,t as w}from"./OscdDivider-Ok36RjVE.js";import{n as T,t as E}from"./OscdOutlinedTextField-uwUnw4KA.js";import{n as D,t as O}from"./FilterListBase-DJlo-gP8.js";function k(e){return`${e.headline} ${e.supportingText??``}${e.filtergroup?.join(` `)??``}`}var A;function j(){return(j=e((()=>{r(),c(),a(),x(),u(),C(),f(),_(),y(),m(),T(),D(),A=class extends O{constructor(...e){super(...e),this.items=[],this.height=72}static{this.scopedElements={"oscd-outlined-text-field":E,"oscd-icon":d,"oscd-list":v,"oscd-list-item":b,"oscd-divider":w,"oscd-menu":S,"oscd-menu-item":p}}renderMoreVertItem(e){e.actions.shift();let n=e.actions;return t`
      <span style="position: relative">
        <oscd-list-item
          id="more-vert-anchor"
          type="button"
          class="${s({hidden:!this.searchRegex.test(k(e))})}"
          @click=${e=>{(e.target instanceof l?e.target.parentElement.nextElementSibling:e.target.nextElementSibling).show()}}
        >
          <oscd-icon slot="start">more_vert</oscd-icon>
        </oscd-list-item>
        <oscd-menu id="more-vert-menu" anchor="more-vert-anchor">
          ${n.map(e=>t`<oscd-menu-item @click=${e.callback}>
                <div slot="headline">${e.label}</div>
                <oscd-icon slot="start">${e.icon}</oscd-icon>
              </oscd-menu-item>`)}
        </oscd-menu> </span
      >${e.divider?t`<oscd-divider
              class="${s({hidden:!this.searchRegex.test(k(e))})}"
            ></oscd-divider>`:t``}
    `}renderActionItem(e,n=0){let r=e.actions?e.actions[n]:null;return r?t`<oscd-list-item
        type="button"
        class="${s({hidden:!this.searchRegex.test(k(e))})}"
        @click=${()=>r.callback(e)}
      >
        <oscd-icon slot="start">${r.icon}</oscd-icon> </oscd-list-item
      >${e.divider?t`<oscd-divider
              class="${s({hidden:!this.searchRegex.test(k(e))})}"
            ></oscd-divider>`:t``}`:t`<oscd-list-item
          class="${s({hidden:!this.searchRegex.test(k(e))})}"
        ></oscd-list-item
        >${e.divider?t`<oscd-divider
                class="${s({hidden:!this.searchRegex.test(k(e))})}"
              ></oscd-divider>`:t``}`}renderOtherActions(){return t`<oscd-list>
      ${this.items.map(e=>e.actions&&e.actions?.length>2?this.renderMoreVertItem(e):this.renderActionItem(e,1))}</oscd-list
    >`}renderFirstAction(){return t`<oscd-list>
      ${this.items.map(e=>this.renderActionItem(e))}</oscd-list
    >`}renderActions(){return t`
      ${this.items.some(e=>e.actions&&e.actions[0])?this.renderFirstAction():t``}
      ${this.items.some(e=>e.actions&&e.actions.length>1)?this.renderOtherActions():t``}
    `}renderActionListItem(e){return t`<oscd-list-item
        type="${e.primaryAction?`link`:`text`}"
        class="${s({hidden:!this.searchRegex.test(k(e))})}"
        title="${e.headline??``}
${e.headline&&e.supportingText?`-`:``}${e.supportingText}"
        @click=${()=>e.primaryAction&&e.primaryAction(e)}
      >
        <div slot="headline" class="firstLine">${e.headline}</div>
        ${e.supportingText?t`<div slot="supporting-text">${e.supportingText}</div>`:t``}
        ${e.startingIcon?t`<oscd-icon slot="start">${e.startingIcon}</oscd-icon>`:t``}
        ${e.endingIcon?t`<oscd-icon slot="end">${e.endingIcon}</oscd-icon>`:t``} </oscd-list-item
      >${e.divider?t`<oscd-divider
              class="${s({hidden:!this.searchRegex.test(k(e))})}"
            ></oscd-divider>`:t``}`}renderListItem(e){return this.renderActionListItem(e)}render(){return t`<style>
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
      </section>`}static{this.styles=n`
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
  `}},o([i({type:Array})],A.prototype,`items`,void 0),o([i({type:Number})],A.prototype,`height`,void 0)})))()}function M(){return(M=e((()=>{j(),window.customElements.define(`oscd-action-list`,A)})))()}var N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{M(),h(),{action:N}=__STORYBOOK_MODULE_ACTIONS__,P=new DOMParser().parseFromString(`<SCL>
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
</SCL>`,`application/xml`),{args:F,argTypes:I,meta:L}=g({tagName:`oscd-action-list`}),R={...L,title:`Action Controls/Action List`,tags:[`autodocs`],argTypes:{...I,startingIcon:{control:{type:`select`,options:[`arrow-up`,`arrow-down`,`loading`]},description:`Name of icon to place at start of Action Item`},endingIcon:{control:{type:`string`,options:[`arrow-up`,`arrow-down`,`loading`]},description:`Name of icon to place at end of Action Item`},divider:{control:{type:`boolean`},description:`Add a divider at the bottom of the item`},filterGroup:{control:{type:`object`},description:`Specifies additional filter terms `},primaryAction:{control:{type:`boolean`},description:`The action to be performed when clicking the list item`},actionsCount:{control:{type:`number`,min:0,max:4},description:`Number of list items to render. These are additional actions for the item. The first action is visible, the rest are in a context menu.`,defaultValue:2}}},z=e=>{N(`primaryAction`)({item:e})},B=[`add`,`edit`,`delete`,`content_copy`].map(e=>({icon:e,callback:t=>N(`action:${e}`)(t)})),V=(e,t)=>Array.from(P.querySelectorAll(`GSEControl`)).map(n=>({headline:n.getAttribute(`name`)??`unknown`,...t?{supportingText:n.getAttribute(`desc`)}:{},attachedElement:n,startingIcon:e.startingIcon,endingIcon:e.endingIcon,divider:e.divider??!0,filtergroup:e.filterGroup?e.filterGroup:void 0,...e.primaryAction?{primaryAction:z}:{},actions:B.slice(0,e.actionsCount)})),H={...F,primaryAction:!0,actionsCount:4,filterable:!1},U={argTypes:I,args:{...H,".items":V(H)}},W={argTypes:I,args:{...H,".items":V(H,!0)}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...defaultArgs,
    ['.items']: getItems(defaultArgs)
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...defaultArgs,
    ['.items']: getItems(defaultArgs, true)
  }
}`,...W.parameters?.docs?.source}}},G=[`Default`,`WithSupportingText`]})))()}K();export{U as Default,W as WithSupportingText,G as __namedExportsOrder,R as default};