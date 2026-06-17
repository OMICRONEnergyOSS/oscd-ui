import{O as a}from"./OscdRadio-rZjVmI0d.js";import{g as t}from"./getStorybookMeta-fEcaYkww.js";import{x as i}from"./iframe-C4uLaTi3.js";import"./OscdIcon-C3sU6W8j.js";import"./list-navigation-helpers-uOLGipP7.js";import"./menuItemController-vk-DquCy.js";import"./validator-BdcpFJ2q.js";import"./focusable-D_LV6R0C.js";import"./form-associated-DtXYuc2T.js";import"./getStorybookHelpers-BPPERp-C.js";import"./oscd-menu-item-D6eVNoir.js";import"./OscdListItem-CcUpt_sr.js";import"./list-item-styles-CwxrGOCZ.js";import"./OscdMenuItem-AVFwwFRE.js";import"./query-assigned-nodes-EHSBqaR2.js";import"./oscd-filled-button-CEBWtmCm.js";import"./OscdList-C90geFFa.js";import"./preload-helper-PPVm8Dsz.js";customElements.define("oscd-radio",a);const{args:l,argTypes:s,meta:d,template:r}=t({tagName:"oscd-radio"}),M={...d,title:"Radios / Radio",tags:["autodocs"],render:o=>i`
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
}`,...e.parameters?.docs?.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,M as default};
