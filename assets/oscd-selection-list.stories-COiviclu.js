import{O as v,s as R}from"./storybook-utils-CHJ2S5ob.js";import"./oscd-elevated-card-BjNNgaaZ.js";import{g as w}from"./getStorybookMeta-BoCODc77.js";import{x as L}from"./iframe-CVDob4yH.js";import"./list-item-styles-D88BytE0.js";import"./OscdCheckbox-DT9FXFjK.js";import"./OscdListItem-B18tstYX.js";import"./OscdMenuItem-wP2ife6f.js";import"./query-assigned-nodes-NHYQZ91Q.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-DF6SPYQ-.js";import"./form-associated-COZPd8sx.js";import"./checkbox-validator-BaIeWwuO.js";import"./OscdRadio-RJ5tvEj3.js";import"./focusable-CuKpskI8.js";import"./OscdOutlinedTextField-Cm6FcI4k.js";import"./shared-styles-fAVamnlI.js";import"./style-map-B9cXupzH.js";import"./on-report-validity-DGwPj8Co.js";import"./OscdOutlinedField-B8JYYgfr.js";import"./shared-styles-hjDMpCOL.js";import"./FilterListBase-CDM8GmYm.js";import"./shared-styles-BdzsE2PA.js";import"./getStorybookHelpers-BJL7o6s0.js";import"./preload-helper-PPVm8Dsz.js";window.customElements.define("oscd-selection-list",v);var A=Object.defineProperty,o=(t,e)=>A(t,"name",{value:e,configurable:!0}),I="storybook/actions",P=`${I}/action-event`;const{ImplicitActionsDuringRendering:x}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:S}=__STORYBOOK_MODULE_GLOBAL__,{addons:D}=__STORYBOOK_MODULE_PREVIEW_API__;var j={depth:10,clearOnStoryChange:!0,limit:50},_=o((t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:_(r,e)},"findProto"),M=o(t=>!!(typeof t=="object"&&t&&_(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),"isReactSyntheticEvent"),B=o(t=>{if(M(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),s=r?.value;return typeof s=="object"&&s?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...r,value:Object.create(s.constructor.prototype)}),e}return t},"serializeArg");function f(t,e={}){let r={...j,...e},s=o(function(...d){if(e.implicit){let u=("__STORYBOOK_PREVIEW__"in S?S.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(u){let i=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,O=new x({phase:u.phase,name:t,deprecated:i});if(i)console.warn(O);else throw O}}let y=D.getChannel(),E=Date.now().toString(36)+Math.random().toString(36).substring(2),b=5,g=d.map(B),h=d.length>1?g:g[0],T={id:E,count:0,data:{name:t,args:h},options:{...r,maxDepth:b+(r.depth||3)}};y.emit(P,T)},"actionHandler");return s.isAction=!0,s.implicit=e.implicit,s}o(f,"action");const{args:l,argTypes:p,meta:W,template:V}=w({tagName:"oscd-selection-list"}),le={title:"Lists/Selection List",tags:["autodocs"],...W,render:t=>L` <style>
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
