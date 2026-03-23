import{O as r}from"./OscdRadio-IuihyPei.js";import{g as t}from"./getStorybookMeta-CkVH9b_1.js";import{x as i}from"./iframe-BEvFn4o0.js";import"./OscdListItem-qie-E2MX.js";import"./list-item-styles-BdUABIkZ.js";import"./OscdMenuItem-BTDFb1kz.js";import"./query-assigned-nodes-DbRHicYy.js";import"./validator-B_YntnKT.js";import"./focusable-BR6whehH.js";import"./form-associated-DUVsC_kA.js";import"./getStorybookHelpers-Do6kyNNH.js";import"./preload-helper-PPVm8Dsz.js";customElements.define("oscd-radio",r);const{args:l,argTypes:s,meta:d,template:o}=t({tagName:"oscd-radio"}),R={...d,title:"Radios / Radio",tags:["autodocs"],render:a=>i`
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
