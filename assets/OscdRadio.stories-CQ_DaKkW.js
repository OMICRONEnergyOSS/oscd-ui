import{O as r}from"./OscdRadio-BE423v1M.js";import{g as t}from"./getStorybookMeta-gDO-wW0N.js";import{x as i}from"./iframe-BFpCwY9R.js";import"./OscdListItem-B_3Vgj5Y.js";import"./list-item-styles-Bfc4eJrR.js";import"./OscdMenuItem-DnbnThgq.js";import"./query-assigned-nodes-Ud0G1qU0.js";import"./validator-C3KVGDlf.js";import"./focusable-BjR9Ckpl.js";import"./form-associated-qER_3PrR.js";import"./getStorybookHelpers-cc4YvQDR.js";import"./oscd-menu-item-COy5XFsF.js";import"./OscdList-XsnvtwlT.js";import"./preload-helper-PPVm8Dsz.js";customElements.define("oscd-radio",r);const{args:l,argTypes:s,meta:d,template:o}=t({tagName:"oscd-radio"}),S={...d,title:"Radios / Radio",tags:["autodocs"],render:a=>i`
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
