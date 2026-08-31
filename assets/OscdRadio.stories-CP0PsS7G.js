import{i as e}from"./preload-helper-xPQekRTU.js";import{b as t,u as n}from"./static-html-JNahc6jH.js";import{n as r,t as i}from"./getStorybookMeta-BOUCYHqO.js";import{n as a,t as o}from"./OscdRadio-BnMc9PVS.js";var s=e((()=>{a(),customElements.define(`oscd-radio`,o)})),c,l,u,d,f,p,m;e((()=>{s(),r(),n(),{args:c,argTypes:l,meta:u,template:d}=i({tagName:`oscd-radio`}),f={...u,title:`Radios / Radio`,tags:[`autodocs`],render:e=>t`
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
          ${d({...e,"aria-label":`First radio`,value:`1`})}
          <label for="first-radio">Have your cake</label>
        </div>
        <div>
          ${d({...e,"aria-label":`Second radio`,value:`2`})}
          <label for="second-radio">Or eat it</label>
        </div>
      </fieldset>
    `},p={argTypes:l,args:{...c,name:`example`,value:`option1`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    name: 'example',
    value: 'option1'
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};