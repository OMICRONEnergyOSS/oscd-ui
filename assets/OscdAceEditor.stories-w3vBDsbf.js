import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,t as n}from"./lit-LihecQ0E.js";import{i as r,n as i,r as a,t as o}from"./sample-scl-BP9lizmY.js";import{n as s,t as c}from"./getStorybookMeta-CDlhnKUP.js";function l(){return(l=e((()=>{r(),customElements.define(`oscd-ace-editor`,a)})))()}var u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),l(),o(),s(),{args:u,argTypes:d,meta:f}=c({tagName:`oscd-ace-editor`,defaultArgs:{value:i,toolbar:!1},options:{omitTextContent:!0}}),p={...f,title:`Editors / Ace Editor`,parameters:{layout:`fullscreen`,docs:{description:{component:`Text-in/text-out editor. The live value is a string; optional validation is application-defined, not SCL schema validation. User edits emit input and a compatible CustomEvent<string> change. Programmatic writes emit neither. The SCL Editor adds namespace-aware Element conversion.`}}},args:u,argTypes:{...d,value:{control:`text`},toolbar:{control:`boolean`}},render:e=>t`
    <oscd-ace-editor
      .value=${e.value}
      .toolbar=${e.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-ace-editor>
  `},m={name:`SCL Doc as text`,parameters:{docs:{description:{story:`Pass the complete shared SCL file as a string through .value. The editor displays the whole document.`}}}},h={args:{toolbar:!0}},g=e=>new DOMParser().parseFromString(e,`application/xml`).querySelector(`parsererror`)===null?null:`Enter one well-formed XML document`,_={name:`Custom validation callback`,parameters:{docs:{description:{story:`Supply an application-defined .validator callback that returns an error message or null. This example checks only XML well-formedness, not SCL schema validity. It starts with malformed <example>; click Check XML to display the form validation error, then change the text to <example/> to make it valid.`}}},args:{value:`<example>`,toolbar:!0},render:e=>t`
    <form style="display: flex; flex-direction: column; height: 100vh;">
      <oscd-ace-editor
        name="xml"
        .validator=${g}
        .value=${e.value}
        .toolbar=${e.toolbar}
        style="flex: 1; min-height: 0; height: auto; width: 100%;"
      ></oscd-ace-editor>
      <button
        type="button"
        style="flex-shrink: 0;"
        @click=${e=>{let t=e.currentTarget;t instanceof HTMLButtonElement&&t.form?.reportValidity()}}
      >
        Check XML
      </button>
    </form>
  `},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'SCL Doc as text',
  parameters: {
    docs: {
      description: {
        story: 'Pass the complete shared SCL file as a string through .value. The editor displays the whole document.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    toolbar: true
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Custom validation callback',
  parameters: {
    docs: {
      description: {
        story: 'Supply an application-defined .validator callback that returns an error message or null. This example checks only XML well-formedness, not SCL schema validity. It starts with malformed <example>; click Check XML to display the form validation error, then change the text to <example/> to make it valid.'
      }
    }
  },
  args: {
    value: '<example>',
    toolbar: true
  },
  render: args => html\`
    <form style="display: flex; flex-direction: column; height: 100vh;">
      <oscd-ace-editor
        name="xml"
        .validator=\${validateExample}
        .value=\${args.value}
        .toolbar=\${args.toolbar}
        style="flex: 1; min-height: 0; height: auto; width: 100%;"
      ></oscd-ace-editor>
      <button
        type="button"
        style="flex-shrink: 0;"
        @click=\${(event: Event) => {
    const target = event.currentTarget;
    if (target instanceof HTMLButtonElement) {
      target.form?.reportValidity();
    }
  }}
      >
        Check XML
      </button>
    </form>
  \`
}`,..._.parameters?.docs?.source}}},v=[`FullSclDocument`,`WithToolbar`,`WithValidator`]})))()}y();export{m as FullSclDocument,h as WithToolbar,_ as WithValidator,v as __namedExportsOrder,p as default};