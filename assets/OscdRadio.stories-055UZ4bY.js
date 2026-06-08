import{O as r}from"./OscdRadio-B6IuyFLB.js";import{g as t}from"./getStorybookMeta-D4nAQZGb.js";import{x as i}from"./iframe-CED9u4fv.js";import"./OscdListItem-YzTXxYva.js";import"./list-item-styles-DbtL1MIB.js";import"./OscdMenuItem-DhDenadO.js";import"./query-assigned-nodes-GnmzpfNZ.js";import"./validator-DrTVKtKT.js";import"./focusable-CbbQwCIQ.js";import"./form-associated-BZB3BzSH.js";import"./getStorybookHelpers-DCG8XUrM.js";import"./oscd-menu-item-DLNMOFEq.js";import"./OscdList--At7ZW1p.js";import"./preload-helper-PPVm8Dsz.js";customElements.define("oscd-radio",r);const{args:l,argTypes:s,meta:d,template:o}=t({tagName:"oscd-radio"}),S={...d,title:"Radios / Radio",tags:["autodocs"],render:a=>i`
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
