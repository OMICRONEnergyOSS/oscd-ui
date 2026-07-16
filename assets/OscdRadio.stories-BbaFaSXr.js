import{O as a}from"./OscdRadio-SAy5Pnpk.js";import{g as t}from"./getStorybookMeta-DOS5upft.js";import{x as i}from"./iframe-CzfB892c.js";import"./OscdIcon-D6gSxZ3c.js";import"./list-navigation-helpers-CWtHtHq2.js";import"./menuItemController-B_J_C6eD.js";import"./validator-DNzAhO9h.js";import"./focusable-DATL9xS-.js";import"./form-associated-BTVmRIpu.js";import"./getStorybookHelpers-Bv3ZIOVO.js";import"./oscd-menu-item-Bv29e9fa.js";import"./OscdMenuItem-DA-1vXHl.js";import"./query-assigned-nodes-CLgeST5H.js";import"./oscd-filled-button-DQw484Ye.js";import"./OscdList-ZIhvBfgq.js";import"./oscd-list-item-C0ScTv6k.js";import"./OscdListItem-aUMQlSYk.js";import"./list-item-styles-Bz0C6iu4.js";import"./preload-helper-PPVm8Dsz.js";customElements.define("oscd-radio",a);const{args:l,argTypes:s,meta:d,template:r}=t({tagName:"oscd-radio"}),T={...d,title:"Radios / Radio",tags:["autodocs"],render:o=>i`
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
