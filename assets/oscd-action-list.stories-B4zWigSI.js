import{x as e,a as y}from"./iframe-BlmIIjc8.js";import{b as r,n as f}from"./list-navigation-helpers-BYaPgfdc.js";import{O as A}from"./OscdMenu-DrBMhREg.js";import{O as I,I as C}from"./OscdIcon-BF9UpfCs.js";import{O as S}from"./OscdDivider-CvXsD4ww.js";import{O as b}from"./OscdList-a84XNi5w.js";import{O}from"./OscdListItem-BdyDKWIx.js";import{O as w}from"./OscdMenuItem-CBcjVsGV.js";import{O as E}from"./OscdOutlinedTextField-BNzIBgFN.js";import{F as T}from"./FilterListBase-tZk8b0Tc.js";import{g as G}from"./getStorybookMeta-C_Dfhlzu.js";import"./preload-helper-PPVm8Dsz.js";import"./style-map-B3PQ7mrl.js";import"./menuItemController-k5rPONrB.js";import"./list-item-styles-D7C7ftEO.js";import"./query-assigned-nodes-D4uADFl8.js";import"./shared-styles-DnEMhRC_.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-D5inW5DY.js";import"./form-associated-ob18pg9T.js";import"./on-report-validity-D1pS5cYO.js";import"./OscdOutlinedField-OVSthKTl.js";import"./shared-styles-CsN18xnd.js";import"./getStorybookHelpers-DQ9KU-nQ.js";import"./oscd-menu-item-vFGSEMX-.js";import"./oscd-filled-button-pAHRa5nn.js";import"./oscd-list-item-BA8wSq9a.js";var _=Object.defineProperty,$=(o,t,i,s)=>{for(var c=void 0,h=o.length-1,g;h>=0;h--)(g=o[h])&&(c=g(t,i,c)||c);return c&&_(t,i,c),c};function n(o){return`${o.headline} ${o.supportingText??""}${o.filtergroup?.join(" ")??""}`}const m=class m extends T{constructor(){super(...arguments),this.items=[],this.height=72}renderMoreVertItem(t){t.actions.shift();const i=t.actions;return e`
      <span style="position: relative">
        <oscd-list-item
          id="more-vert-anchor"
          type="button"
          class="${r({hidden:!this.searchRegex.test(n(t))})}"
          @click=${s=>{(s.target instanceof C?s.target.parentElement.nextElementSibling:s.target.nextElementSibling).show()}}
        >
          <oscd-icon slot="start">more_vert</oscd-icon>
        </oscd-list-item>
        <oscd-menu id="more-vert-menu" anchor="more-vert-anchor">
          ${i.map(s=>e`<oscd-menu-item @click=${s.callback}>
                <div slot="headline">${s.label}</div>
                <oscd-icon slot="start">${s.icon}</oscd-icon>
              </oscd-menu-item>`)}
        </oscd-menu> </span
      >${t.divider?e`<oscd-divider
            class="${r({hidden:!this.searchRegex.test(n(t))})}"
          ></oscd-divider>`:e``}
    `}renderActionItem(t,i=0){const s=t.actions?t.actions[i]:null;return s?e`<oscd-list-item
        type="button"
        class="${r({hidden:!this.searchRegex.test(n(t))})}"
        @click=${()=>s.callback(t)}
      >
        <oscd-icon slot="start">${s.icon}</oscd-icon> </oscd-list-item
      >${t.divider?e`<oscd-divider
            class="${r({hidden:!this.searchRegex.test(n(t))})}"
          ></oscd-divider>`:e``}`:e`<oscd-list-item
          class="${r({hidden:!this.searchRegex.test(n(t))})}"
        ></oscd-list-item
        >${t.divider?e`<oscd-divider
              class="${r({hidden:!this.searchRegex.test(n(t))})}"
            ></oscd-divider>`:e``}`}renderOtherActions(){return e`<oscd-list>
      ${this.items.map(t=>t.actions&&t.actions?.length>2?this.renderMoreVertItem(t):this.renderActionItem(t,1))}</oscd-list
    >`}renderFirstAction(){return e`<oscd-list>
      ${this.items.map(t=>this.renderActionItem(t))}</oscd-list
    >`}renderActions(){return e`
      ${this.items.some(t=>t.actions&&t.actions[0])?this.renderFirstAction():e``}
      ${this.items.some(t=>t.actions&&t.actions.length>1)?this.renderOtherActions():e``}
    `}renderActionListItem(t){return e`<oscd-list-item
        type="${t.primaryAction?"link":"text"}"
        class="${r({hidden:!this.searchRegex.test(n(t))})}"
        title="${t.headline??""}
${t.headline&&t.supportingText?"-":""}${t.supportingText}"
        @click=${()=>t.primaryAction&&t.primaryAction(t)}
      >
        <div slot="headline" class="firstLine">${t.headline}</div>
        ${t.supportingText?e`<div slot="supporting-text">${t.supportingText}</div>`:e``}
        ${t.startingIcon?e`<oscd-icon slot="start">${t.startingIcon}</oscd-icon>`:e``}
        ${t.endingIcon?e`<oscd-icon slot="end">${t.endingIcon}</oscd-icon>`:e``} </oscd-list-item
      >${t.divider?e`<oscd-divider
            class="${r({hidden:!this.searchRegex.test(n(t))})}"
          ></oscd-divider>`:e``}`}renderListItem(t){return this.renderActionListItem(t)}render(){return e`<style>
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
            ${this.items.map(t=>this.renderListItem(t))}</oscd-list
          >
          ${this.renderActions()}
        </div>
      </section>`}};m.scopedElements={"oscd-outlined-text-field":E,"oscd-icon":I,"oscd-list":b,"oscd-list-item":O,"oscd-divider":S,"oscd-menu":A,"oscd-menu-item":w},m.styles=y`
    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    oscd-outlined-text-field {
      background-color: var(--md-sys-color-surface, #fef7ff);
      --oscd-outlined-text-field-container-shape: 32px;
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
  `;let d=m;$([f({type:Array})],d.prototype,"items");$([f({type:Number})],d.prototype,"height");window.customElements.define("oscd-action-list",d);const{action:x}=__STORYBOOK_MODULE_ACTIONS__,k=new DOMParser().parseFromString(`<SCL>
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
</SCL>`,"application/xml"),{args:L,argTypes:u,meta:R}=G({tagName:"oscd-action-list"}),lt={...R,title:"Action Controls/Action List",tags:["autodocs"],argTypes:{...u,startingIcon:{control:{type:"select",options:["arrow-up","arrow-down","loading"]},description:"Name of icon to place at start of Action Item"},endingIcon:{control:{type:"string",options:["arrow-up","arrow-down","loading"]},description:"Name of icon to place at end of Action Item"},divider:{control:{type:"boolean"},description:"Add a divider at the bottom of the item"},filterGroup:{control:{type:"object"},description:"Specifies additional filter terms "},primaryAction:{control:{type:"boolean"},description:"The action to be performed when clicking the list item"},actionsCount:{control:{type:"number",min:0,max:4},description:"Number of list items to render. These are additional actions for the item. The first action is visible, the rest are in a context menu.",defaultValue:2}}},F=o=>{x("primaryAction")({item:o})},M=["add","edit","delete","content_copy"].map(o=>({icon:o,callback:t=>x(`action:${o}`)(t)})),v=(o,t)=>Array.from(k.querySelectorAll("GSEControl")).map(i=>({headline:i.getAttribute("name")??"unknown",...t?{supportingText:i.getAttribute("desc")}:{},attachedElement:i,startingIcon:o.startingIcon,endingIcon:o.endingIcon,divider:o.divider??!0,filtergroup:o.filterGroup?o.filterGroup:void 0,primaryAction:F,actions:M.slice(0,o.actionsCount)})),p={...L,primaryAction:!0,actionsCount:4,filterable:!1},a={argTypes:u,args:{...p,".items":v(p)}},l={argTypes:u,args:{...p,".items":v(p,!0)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...defaultArgs,
    ['.items']: getItems(defaultArgs)
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...defaultArgs,
    ['.items']: getItems(defaultArgs, true)
  }
}`,...l.parameters?.docs?.source}}};const pt=["Default","WithSupportingText"];export{a as Default,l as WithSupportingText,pt as __namedExportsOrder,lt as default};
