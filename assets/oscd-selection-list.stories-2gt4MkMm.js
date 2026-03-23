import{O as v,s as R}from"./storybook-utils-DjAF2Fob.js";import"./oscd-elevated-card-CTRfOrRV.js";import{g as w}from"./getStorybookMeta-5v34_TjP.js";import{x as L}from"./iframe-bV8sXuOy.js";import"./list-item-styles-oRaTTV7d.js";import"./OscdCheckbox-BIbtNeJ6.js";import"./OscdListItem-DFmTB3bM.js";import"./OscdMenuItem-DbC5QpUl.js";import"./query-assigned-nodes-BDCLEJeA.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-BSw-zGn3.js";import"./form-associated-MjIWhLoT.js";import"./checkbox-validator-DJRDlXHF.js";import"./OscdRadio-BWNlLGXC.js";import"./focusable-kKoMXlYf.js";import"./OscdOutlinedTextField-ZewaeheC.js";import"./shared-styles-C3IWhO9p.js";import"./style-map-BPVn1956.js";import"./on-report-validity-CDRbvipq.js";import"./OscdOutlinedField-DYMBsNkm.js";import"./shared-styles-4Bq077zl.js";import"./FilterListBase-CeM9Oeu_.js";import"./shared-styles-CZc6Z74w.js";import"./getStorybookHelpers-Dixdbl-W.js";import"./preload-helper-PPVm8Dsz.js";window.customElements.define("oscd-selection-list",v);var A=Object.defineProperty,o=(t,e)=>A(t,"name",{value:e,configurable:!0}),I="storybook/actions",P=`${I}/action-event`;const{ImplicitActionsDuringRendering:x}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:S}=__STORYBOOK_MODULE_GLOBAL__,{addons:D}=__STORYBOOK_MODULE_PREVIEW_API__;var j={depth:10,clearOnStoryChange:!0,limit:50},_=o((t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:_(r,e)},"findProto"),M=o(t=>!!(typeof t=="object"&&t&&_(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),"isReactSyntheticEvent"),B=o(t=>{if(M(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),s=r?.value;return typeof s=="object"&&s?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...r,value:Object.create(s.constructor.prototype)}),e}return t},"serializeArg");function f(t,e={}){let r={...j,...e},s=o(function(...d){if(e.implicit){let u=("__STORYBOOK_PREVIEW__"in S?S.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(u){let i=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,O=new x({phase:u.phase,name:t,deprecated:i});if(i)console.warn(O);else throw O}}let y=D.getChannel(),E=Date.now().toString(36)+Math.random().toString(36).substring(2),b=5,g=d.map(B),h=d.length>1?g:g[0],T={id:E,count:0,data:{name:t,args:h},options:{...r,maxDepth:b+(r.depth||3)}};y.emit(P,T)},"actionHandler");return s.isAction=!0,s.implicit=e.implicit,s}o(f,"action");const{args:l,argTypes:p,meta:W,template:V}=w({tagName:"oscd-selection-list"}),le={title:"Lists/Selection List",tags:["autodocs"],...W,render:t=>L` <style>
        oscd-elevated-card {
          --md-elevated-card-container-color: var(--md-sys-color-surface);
        }
        oscd-selection-list {
          padding: 7px;
        }
      </style>
      <oscd-elevated-card
        @selection-list-change=${e=>{f("selection-list-change")(e.detail.selectedElements.map(r=>new XMLSerializer().serializeToString(r)))}}
      >
        ${V(t)}
      </oscd-elevated-card>`},m=t=>Array.from(R.querySelectorAll("GSEControl")).map(e=>({headline:e.getAttribute("name")??"unknown",attachedElement:e,...t?{supportingText:e.getAttribute("desc")??void 0}:{}})),a={argTypes:{...p},args:{...l,".items":m(),filterable:!1}},n={argTypes:{...p},args:{...l,multiselect:!0,".items":m(),filterable:!1}},c={argTypes:{...p},args:{...l,".items":m(!0),filterable:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes
  },
  args: {
    ...args,
    ['.items']: getListItems(),
    filterable: false
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes
  },
  args: {
    ...args,
    multiselect: true,
    ['.items']: getListItems(),
    filterable: false
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes
  },
  args: {
    ...args,
    ['.items']: getListItems(true),
    filterable: true
  }
}`,...c.parameters?.docs?.source}}};const pe=["SingleSelect","MultiSelect","SingleSelectWithSupportingText"];export{n as MultiSelect,a as SingleSelect,c as SingleSelectWithSupportingText,pe as __namedExportsOrder,le as default};
