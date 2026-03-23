import{O as r}from"./OscdRadio-BWNlLGXC.js";import{g as t}from"./getStorybookMeta-5v34_TjP.js";import{x as i}from"./iframe-bV8sXuOy.js";import"./OscdListItem-DFmTB3bM.js";import"./list-item-styles-oRaTTV7d.js";import"./OscdMenuItem-DbC5QpUl.js";import"./query-assigned-nodes-BDCLEJeA.js";import"./validator-BSw-zGn3.js";import"./focusable-kKoMXlYf.js";import"./form-associated-MjIWhLoT.js";import"./getStorybookHelpers-Dixdbl-W.js";import"./preload-helper-PPVm8Dsz.js";customElements.define("oscd-radio",r);const{args:l,argTypes:s,meta:d,template:o}=t({tagName:"oscd-radio"}),R={...d,title:"Radios / Radio",tags:["autodocs"],render:a=>i`
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
