import{x as e,a as y}from"./iframe-BA_UwkOg.js";import{b as r,n as f}from"./list-item-styles-DN_WYpBH.js";import{O as A}from"./OscdMenu-BkVBs4WI.js";import{O as I,a as C,b,I as S}from"./OscdListItem-V0c71Avz.js";import{O}from"./OscdDivider-vnumbB96.js";import{O as w}from"./OscdMenuItem-CAk1AN5M.js";import{O as E}from"./OscdOutlinedTextField-BwA1lsyH.js";import{F as T}from"./FilterListBase-CrtKVzY8.js";import{g as G}from"./getStorybookMeta-Ds2o0t2f.js";import"./preload-helper-PPVm8Dsz.js";import"./menu-BQyxkE3a.js";import"./style-map-DsiKhrv6.js";import"./query-assigned-nodes-CD84jn8v.js";import"./shared-styles-BWoBTAvQ.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-Bqk3xg4H.js";import"./form-associated-BHmCBYtz.js";import"./on-report-validity-CAxYAj2Y.js";import"./OscdOutlinedField-DnYm90x-.js";import"./shared-styles-CfaBN_vG.js";import"./getStorybookHelpers-DZzn3551.js";var _=Object.defineProperty,x=(s,t,i,o)=>{for(var c=void 0,h=s.length-1,g;h>=0;h--)(g=s[h])&&(c=g(t,i,c)||c);return c&&_(t,i,c),c};function n(s){return`${s.headline} ${s.supportingText??""}${s.filtergroup?.join(" ")??""}`}const m=class m extends T{constructor(){super(...arguments),this.items=[],this.height=72}renderMoreVertItem(t){t.actions.shift();const i=t.actions;return e`
      <span style="position: relative">
        <oscd-list-item
          id="more-vert-anchor"
          type="button"
          class="${r({hidden:!this.searchRegex.test(n(t))})}"
          @click=${o=>{(o.target instanceof S?o.target.parentElement.nextElementSibling:o.target.nextElementSibling).show()}}
        >
          <oscd-icon slot="start">more_vert</oscd-icon>
        </oscd-list-item>
        <oscd-menu id="more-vert-menu" anchor="more-vert-anchor">
          ${i.map(o=>e`<oscd-menu-item @click=${o.callback}>
                <div slot="headline">${o.label}</div>
                <oscd-icon slot="start">${o.icon}</oscd-icon>
              </oscd-menu-item>`)}
        </oscd-menu> </span
      >${t.divider?e`<oscd-divider
            class="${r({hidden:!this.searchRegex.test(n(t))})}"
          ></oscd-divider>`:e``}
    `}renderActionItem(t,i=0){const o=t.actions?t.actions[i]:null;return o?e`<oscd-list-item
        type="button"
        class="${r({hidden:!this.searchRegex.test(n(t))})}"
        @click=${()=>o.callback(t)}
      >
        <oscd-icon slot="start">${o.icon}</oscd-icon> </oscd-list-item
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
      </section>`}};m.scopedElements={"oscd-outlined-text-field":E,"oscd-icon":b,"oscd-list":C,"oscd-list-item":I,"oscd-divider":O,"oscd-menu":A,"oscd-menu-item":w},m.styles=y`
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
  `;let d=m;x([f({type:Array})],d.prototype,"items");x([f({type:Number})],d.prototype,"height");window.customElements.define("oscd-action-list",d);const{action:$}=__STORYBOOK_MODULE_ACTIONS__,k=new DOMParser().parseFromString(`<SCL>
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
</SCL>`,"application/xml"),{args:L,argTypes:u,meta:R}=G({tagName:"oscd-action-list"}),it={...R,title:"Action Controls/Action List",tags:["autodocs"],argTypes:{...u,startingIcon:{control:{type:"select",options:["arrow-up","arrow-down","loading"]},description:"Name of icon to place at start of Action Item"},endingIcon:{control:{type:"string",options:["arrow-up","arrow-down","loading"]},description:"Name of icon to place at end of Action Item"},divider:{control:{type:"boolean"},description:"Add a divider at the bottom of the item"},filterGroup:{control:{type:"object"},description:"Specifies additional filter terms "},primaryAction:{control:{type:"boolean"},description:"The action to be performed when clicking the list item"},actionsCount:{control:{type:"number",min:0,max:4},description:"Number of list items to render. These are additional actions for the item. The first action is visible, the rest are in a context menu.",defaultValue:2}}},F=s=>{$("primaryAction")({item:s})},M=["add","edit","delete","content_copy"].map(s=>({icon:s,callback:t=>$(`action:${s}`)(t)})),v=(s,t)=>Array.from(k.querySelectorAll("GSEControl")).map(i=>({headline:i.getAttribute("name")??"unknown",...t?{supportingText:i.getAttribute("desc")}:{},attachedElement:i,startingIcon:s.startingIcon,endingIcon:s.endingIcon,divider:s.divider??!0,filtergroup:s.filterGroup?s.filterGroup:void 0,primaryAction:F,actions:M.slice(0,s.actionsCount)})),p={...L,primaryAction:!0,actionsCount:4,filterable:!1},a={argTypes:u,args:{...p,".items":v(p)}},l={argTypes:u,args:{...p,".items":v(p,!0)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const rt=["Default","WithSupportingText"];export{a as Default,l as WithSupportingText,rt as __namedExportsOrder,it as default};
