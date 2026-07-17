import{O as a}from"./OscdRadio-BLGVKRwe.js";import{g as t}from"./getStorybookMeta-C_Dfhlzu.js";import{x as i}from"./iframe-BlmIIjc8.js";import"./OscdIcon-BF9UpfCs.js";import"./list-navigation-helpers-BYaPgfdc.js";import"./menuItemController-k5rPONrB.js";import"./validator-D5inW5DY.js";import"./focusable-Ow2gEIX7.js";import"./form-associated-ob18pg9T.js";import"./getStorybookHelpers-DQ9KU-nQ.js";import"./oscd-menu-item-vFGSEMX-.js";import"./OscdMenuItem-CBcjVsGV.js";import"./query-assigned-nodes-D4uADFl8.js";import"./oscd-filled-button-pAHRa5nn.js";import"./OscdList-a84XNi5w.js";import"./oscd-list-item-BA8wSq9a.js";import"./OscdListItem-BdyDKWIx.js";import"./list-item-styles-D7C7ftEO.js";import"./preload-helper-PPVm8Dsz.js";customElements.define("oscd-radio",a);const{args:l,argTypes:s,meta:d,template:r}=t({tagName:"oscd-radio"}),T={...d,title:"Radios / Radio",tags:["autodocs"],render:o=>i`
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
          ${r({...o,"aria-label":"First radio",value:"1"})}
          <label for="first-radio">Have your cake</label>
        </div>
        <div>
          ${r({...o,"aria-label":"Second radio",value:"2"})}
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
}`,...e.parameters?.docs?.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,T as default};
