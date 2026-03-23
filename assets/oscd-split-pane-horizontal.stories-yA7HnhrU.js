import{x as e}from"./iframe-bV8sXuOy.js";import{g as b}from"./getStorybookMeta-5v34_TjP.js";import{S as v,l as f}from"./base-split-pane-BdaxXe7N.js";import{n as u}from"./list-item-styles-oRaTTV7d.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-Dixdbl-W.js";import"./OscdListItem-DFmTB3bM.js";import"./OscdMenuItem-DbC5QpUl.js";import"./query-assigned-nodes-BDCLEJeA.js";import"./OscdIconButton-CFSDKjD4.js";import"./shared-styles-n84oHW2p.js";import"./is-rtl-DJNyvqXe.js";import"./OscdFilledTonalIconButton-BVjaFevP.js";var z=Object.defineProperty,h=(o,t,y,_)=>{for(var r=void 0,n=o.length-1,g;n>=0;n--)(g=o[n])&&(r=g(t,y,r)||r);return r&&z(t,y,r),r};class d extends v{constructor(){super(...arguments),this.orientation="horizontal",this.size=300}render(){return this.renderSplit("top","bottom")}}h([f(),u({type:Number,attribute:!1})],d.prototype,"size");h([u({type:Number})],d.prototype,"max");customElements.define("oscd-split-pane-horizontal",d);const{args:S,argTypes:x,meta:c,template:k}=b({tagName:"oscd-split-pane-horizontal",defaultArgs:{id:"storybook-horizontal-pane",defaultSize:130,size:160}}),T={"--oscd-divider-visual":{control:{type:"text"},table:{category:"CSS Variables"},description:"Visible divider line thickness (e.g. 2px)."},"--oscd-divider-hit":{control:{type:"text"},table:{category:"CSS Variables"},description:"Interactive divider hit area size (e.g. 10px)."},"--oscd-divider-color":{control:{type:"color"},table:{category:"CSS Variables"},description:"Divider base color."},"--oscd-divider-hover":{control:{type:"color"},table:{category:"CSS Variables"},description:"Divider hover/active color."},"--oscd-divider-icon-color":{control:{type:"color"},table:{category:"CSS Variables"},description:"Fallback divider icon color."},"--oscd-divider-icon-hover-color":{control:{type:"color"},table:{category:"CSS Variables"},description:"Fallback divider icon hover color."}},p={...S,"--oscd-divider-visual":"2px","--oscd-divider-hit":"10px","--oscd-divider-color":"#d0d0d0","--oscd-divider-hover":"#a8a8a8","--oscd-divider-icon-color":"#9aa0a6","--oscd-divider-icon-hover-color":"#5f6368"},l={...x,...T};function m(o,t=e``){return e` <style>
      oscd-split-pane-horizontal {
        width: 600px;
        height: 300px;
      }

      .top-pane,
      .bottom-pane {
        flex: 1 1 auto;
        min-width: 0;
        min-height: 0;
        overflow: auto;
      }

      h2 {
        color: white;
        margin: 0;
      }

      .top-pane {
        background-color: red;
      }

      .bottom-pane {
        background-color: green;
      }
    </style>
    ${k({...o},e`
        <div slot="top" class="top-pane">
          <h2>What goes up...</h2>
        </div>
        <div slot="bottom" class="bottom-pane">
          <h2>Must come down</h2>
        </div>
        ${t}
      `)}`}const $={...c,title:"Layout / Split Pane Horizontal",tags:["autodocs"],parameters:{...c.parameters,docs:{...c.parameters?.docs??{},description:{component:"Persistence requires an `id` on the component. Stored key format is `<namespace>:<id>:<field>`."}}},render:o=>m(o)},s={argTypes:l,args:p},a={argTypes:l,args:{...p,id:"storybook-horizontal-pane-custom"},render:o=>m({...o,id:"storybook-horizontal-pane-custom"},e`<oscd-icon slot="icon">unfold_more</oscd-icon>`)},i={argTypes:l,args:{...p,id:"storybook-horizontal-pane-expand-icon"},render:o=>m({...o,id:"storybook-horizontal-pane-expand-icon"},e`
        <oscd-icon style="color:blue;" slot="expandIcon"
          >mobiledata_arrows</oscd-icon
        >
        <oscd-icon style="color:purple;" slot="icon">top_panel_open</oscd-icon>
      `)};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  argTypes: storyArgTypes as ArgTypes,
  args: storyArgs
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes: storyArgTypes as ArgTypes,
  args: {
    ...storyArgs,
    id: 'storybook-horizontal-pane-custom'
  },
  render: (argz: typeof args) => renderPane({
    ...argz,
    id: 'storybook-horizontal-pane-custom'
  }, html\`<oscd-icon slot="icon">unfold_more</oscd-icon>\`)
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  argTypes: storyArgTypes as ArgTypes,
  args: {
    ...storyArgs,
    id: 'storybook-horizontal-pane-expand-icon'
  },
  render: (argz: typeof args) => renderPane({
    ...argz,
    id: 'storybook-horizontal-pane-expand-icon'
  }, html\`
        <oscd-icon style="color:blue;" slot="expandIcon"
          >mobiledata_arrows</oscd-icon
        >
        <oscd-icon style="color:purple;" slot="icon">top_panel_open</oscd-icon>
      \`)
}`,...i.parameters?.docs?.source}}};const j=["Default","CustomIcon","CustomExpandIcon"];export{i as CustomExpandIcon,a as CustomIcon,s as Default,j as __namedExportsOrder,$ as default};
