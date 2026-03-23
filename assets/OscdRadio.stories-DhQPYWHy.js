import{O as r}from"./OscdRadio-RJ5tvEj3.js";import{g as t}from"./getStorybookMeta-BoCODc77.js";import{x as i}from"./iframe-CVDob4yH.js";import"./OscdListItem-B18tstYX.js";import"./list-item-styles-D88BytE0.js";import"./OscdMenuItem-wP2ife6f.js";import"./query-assigned-nodes-NHYQZ91Q.js";import"./validator-DF6SPYQ-.js";import"./focusable-CuKpskI8.js";import"./form-associated-COZPd8sx.js";import"./getStorybookHelpers-BJL7o6s0.js";import"./preload-helper-PPVm8Dsz.js";customElements.define("oscd-radio",r);const{args:l,argTypes:s,meta:d,template:o}=t({tagName:"oscd-radio"}),R={...d,title:"Radios / Radio",tags:["autodocs"],render:a=>i`
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
