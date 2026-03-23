import{x as r}from"./iframe-bV8sXuOy.js";import{g as f}from"./getStorybookMeta-5v34_TjP.js";import{S as h,l as b}from"./base-split-pane-BdaxXe7N.js";import{n as u}from"./list-item-styles-oRaTTV7d.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-Dixdbl-W.js";import"./OscdListItem-DFmTB3bM.js";import"./OscdMenuItem-DbC5QpUl.js";import"./query-assigned-nodes-BDCLEJeA.js";import"./OscdIconButton-CFSDKjD4.js";import"./shared-styles-n84oHW2p.js";import"./is-rtl-DJNyvqXe.js";import"./OscdFilledTonalIconButton-BVjaFevP.js";var S=Object.defineProperty,v=(e,t,s,P)=>{for(var o=void 0,n=e.length-1,y;n>=0;n--)(y=e[n])&&(o=y(t,s,o)||o);return o&&S(t,s,o),o};class p extends h{constructor(){super(...arguments),this.orientation="vertical"}render(){return this.renderSplit("left","right")}}v([b(),u({type:Number,attribute:!1})],p.prototype,"size");v([u({type:Number})],p.prototype,"max");customElements.define("oscd-split-pane-vertical",p);const{args:x,argTypes:k,meta:d,template:T}=f({tagName:"oscd-split-pane-vertical",defaultArgs:{id:"storybook-vertical-pane",defaultSize:300,size:500}}),A={"--oscd-divider-visual":{control:{type:"text"},table:{category:"CSS Variables"},description:"Visible divider line thickness (e.g. 2px)."},"--oscd-divider-hit":{control:{type:"text"},table:{category:"CSS Variables"},description:"Interactive divider hit area size (e.g. 10px)."},"--oscd-divider-color":{control:{type:"color"},table:{category:"CSS Variables"},description:"Divider base color."},"--oscd-divider-hover":{control:{type:"color"},table:{category:"CSS Variables"},description:"Divider hover/active color."},"--oscd-divider-icon-color":{control:{type:"color"},table:{category:"CSS Variables"},description:"Fallback divider icon color."},"--oscd-divider-icon-hover-color":{control:{type:"color"},table:{category:"CSS Variables"},description:"Fallback divider icon hover color."}},z={defaultSize:{control:{type:"number"},description:"Default size (px) used when expanding from collapsed state."}},l={...x,"--oscd-divider-visual":"2px","--oscd-divider-hit":"10px","--oscd-divider-color":"#d0d0d0","--oscd-divider-hover":"#a8a8a8","--oscd-divider-icon-color":"#9aa0a6","--oscd-divider-icon-hover-color":"#5f6368",defaultSize:300,size:300},g={...k,...z,...A};function m(e,t=r``,s="storybook-vertical-pane"){return console.log("renderPane with args",e),r` <style>
      oscd-split-pane-vertical {
        width: 600px;
        height: 300px;
      }

      .left-pane,
      .right-pane {
        flex: 1 1 auto;
        min-width: 0;
        min-height: 0;
        overflow: auto;
      }

      h2 {
        color: white;
        margin: 0;
      }

      .left-pane {
        background-color: red;
      }

      .right-pane {
        background-color: green;
      }
    </style>
    ${T({...e,id:s},r`
        <div slot="left" class="left-pane">
          <h2>Put your Left leg in</h2>
        </div>
        <div slot="right" class="right-pane">
          <h2>Put your right leg out</h2>
        </div>
        ${t}
      `)}`}const q={...d,title:"Layout / Split Pane Vertical",tags:["autodocs"],parameters:{...d.parameters,docs:{...d.parameters?.docs??{},description:{component:"Persistence requires an `id` on the component. Stored key format is `<namespace>:<id>:<field>`."}}},render:e=>m(e)},a={argTypes:g,args:{...l,size:400}},i={argTypes:g,args:{...l,id:"storybook-vertical-pane-custom"},render:e=>m(e,r`<oscd-icon slot="icon">unfold_more</oscd-icon>`,"storybook-vertical-pane-custom")},c={argTypes:g,args:{...l,id:"storybook-vertical-pane-expand-icon"},render:e=>m(e,r`
        <oscd-icon slot="icon">first_page</oscd-icon>
        <oscd-icon slot="expandIcon">last_page</oscd-icon>
      `,"storybook-vertical-pane-expand-icon")};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  argTypes: storyArgTypes as ArgTypes,
  args: {
    ...storyArgs,
    size: 400
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  argTypes: storyArgTypes as ArgTypes,
  args: {
    ...storyArgs,
    id: 'storybook-vertical-pane-custom'
  },
  render: (argz: typeof args) => renderPane(argz, html\`<oscd-icon slot="icon">unfold_more</oscd-icon>\`, 'storybook-vertical-pane-custom')
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  argTypes: storyArgTypes as ArgTypes,
  args: {
    ...storyArgs,
    id: 'storybook-vertical-pane-expand-icon'
  },
  render: (argz: typeof args) => renderPane(argz, html\`
        <oscd-icon slot="icon">first_page</oscd-icon>
        <oscd-icon slot="expandIcon">last_page</oscd-icon>
      \`, 'storybook-vertical-pane-expand-icon')
}`,...c.parameters?.docs?.source}}};const B=["Default","CustomIcon","CustomExpandIcon"];export{c as CustomExpandIcon,i as CustomIcon,a as Default,B as __namedExportsOrder,q as default};
