import{O as r}from"./OscdRadio-CQmScgAa.js";import{g as t}from"./getStorybookMeta-Ds2o0t2f.js";import{x as i}from"./iframe-BA_UwkOg.js";import"./OscdListItem-V0c71Avz.js";import"./list-item-styles-DN_WYpBH.js";import"./OscdMenuItem-CAk1AN5M.js";import"./query-assigned-nodes-CD84jn8v.js";import"./validator-Bqk3xg4H.js";import"./focusable-DB9bdCKU.js";import"./form-associated-BHmCBYtz.js";import"./getStorybookHelpers-DZzn3551.js";import"./preload-helper-PPVm8Dsz.js";customElements.define("oscd-radio",r);const{args:l,argTypes:s,meta:d,template:o}=t({tagName:"oscd-radio"}),R={...d,title:"Radios / Radio",tags:["autodocs"],render:a=>i`
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
