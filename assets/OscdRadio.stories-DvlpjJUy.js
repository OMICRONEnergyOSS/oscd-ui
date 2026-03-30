import{O as r}from"./OscdRadio-DffV4AgC.js";import{g as t}from"./getStorybookMeta-jb8d2n-5.js";import{x as i}from"./iframe-BxxurlDP.js";import"./OscdListItem-CcTOxY3J.js";import"./list-item-styles-DDIVumax.js";import"./OscdMenuItem-BgDjJhKl.js";import"./query-assigned-nodes-DB9p0wIF.js";import"./validator-qBBhIEAC.js";import"./focusable-DMHEir4x.js";import"./form-associated-DZlGCUjv.js";import"./getStorybookHelpers-DKJ4wwK_.js";import"./preload-helper-PPVm8Dsz.js";customElements.define("oscd-radio",r);const{args:l,argTypes:s,meta:d,template:o}=t({tagName:"oscd-radio"}),R={...d,title:"Radios / Radio",tags:["autodocs"],render:a=>i`
      <style>
        fieldset {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px;
        }

        fieldset > div {
          display: flex;
          flex-direction: row;
          gap: 16px;
        }
      </style>
      <fieldset role="radiogroup" aria-labelledby="group-title">
        <legend>Make your choice:</legend>
        <div>
          ${o({...a,"aria-label":"First radio",value:"1"})}
          <label for="first-radio">Have your cake</label>
        </div>
        <div>
          ${o({...a,"aria-label":"Second radio",value:"2"})}
          <label for="second-radio">Or eat it</label>
        </div>
      </fieldset>
    `},e={argTypes:s,args:{...l,name:"example",value:"option1"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    name: 'example',
    value: 'option1'
  }
}`,...e.parameters?.docs?.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,R as default};
