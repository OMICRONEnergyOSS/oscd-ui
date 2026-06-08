import{O as r}from"./OscdRadio-CjAFNLD7.js";import{g as t}from"./getStorybookMeta-DSrCqPZ2.js";import{x as i}from"./iframe-D_AT4TIz.js";import"./OscdListItem-Dtz4smBz.js";import"./list-item-styles-B8z8P4EW.js";import"./OscdMenuItem-BwTzKIea.js";import"./query-assigned-nodes-BPJpqv7A.js";import"./validator-B2hqroGq.js";import"./focusable-Cklo7YME.js";import"./form-associated-CDMYVxQk.js";import"./getStorybookHelpers-BPhoQ4a6.js";import"./oscd-menu-item-BRx5nmZc.js";import"./OscdList-Diogj996.js";import"./preload-helper-PPVm8Dsz.js";customElements.define("oscd-radio",r);const{args:l,argTypes:s,meta:d,template:o}=t({tagName:"oscd-radio"}),S={...d,title:"Radios / Radio",tags:["autodocs"],render:a=>i`
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
}`,...e.parameters?.docs?.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,S as default};
