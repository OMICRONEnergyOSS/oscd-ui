import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,t as n}from"./lit-LihecQ0E.js";import{_ as r,r as i}from"./lit-element-CwUNoIyU.js";import{t as a}from"./decorate-2OK4V6AF.js";import{i as o,n as s,r as c,t as l}from"./sample-scl-DL4DK54U.js";import{n as u,t as d}from"./getStorybookMeta-DLxhFeaY.js";function f(e){let t=e===void 0?h:e.lookupNamespaceURI(null),n=window.document.implementation.createDocument(t,`SCL`).documentElement;if(n.setAttributeNS(g,`xmlns`,t??``),e===void 0)return n.setAttributeNS(g,`xmlns:xsi`,`http://www.w3.org/2001/XMLSchema-instance`),n;let r=new Map;for(let t=e;t!==null;t=t.parentElement)for(let e of Array.from(t.attributes))e.namespaceURI===g&&!r.has(e.name)&&r.set(e.name,e.value);for(let[e,t]of r)n.setAttributeNS(g,e,t);return n}function p(e){let t=new XMLSerializer().serializeToString(e),n=new DOMParser().parseFromString(t,`application/xml`).documentElement,r=f(e),i=t.match(/^<(?:[^>"']|"[^"]*"|'[^']*')*>/)?.[0];if(i===void 0)throw new _(`Unable to serialize XML element`);return i.replace(/\s+(xmlns(?::[^\s=]+)?)="[^"]*"/g,(t,i)=>!e.hasAttribute(i)&&n.getAttribute(i)===r.getAttribute(i)?``:t)+t.slice(i.length)}function m(e,t=f()){let n=t.cloneNode(!1);if(!(n instanceof Element))throw TypeError(`Expected an Element namespace context`);let r=`oscd-editor-content`;for(;e.includes(r);)r+=`.`;n.appendChild(n.ownerDocument.createComment(r));let i=new XMLSerializer().serializeToString(n).replace(`<!--${r}-->`,()=>`${e}<!--${r}-->`),a=new DOMParser().parseFromString(i,`application/xml`),o=a.documentElement,s=o.lastChild;if(s?.nodeType!==Node.COMMENT_NODE||s.textContent!==r){let e=a.getElementsByTagNameNS(`*`,`parsererror`)[0];throw new _(e?.textContent??`Invalid XML`)}if(o.removeChild(s),o.children.length!==1||Array.from(o.childNodes).some(e=>(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.CDATA_SECTION_NODE)&&(e.textContent??``).trim()!==``))throw new _(`Expected exactly one XML element`);return o.firstElementChild}var h,g,_;function v(){return(v=e((()=>{h=`http://www.iec.ch/61850/2003/SCL`,g=`http://www.w3.org/2000/xmlns/`,_=class extends Error{}})))()}var y;function b(){return(b=e((()=>{i(),o(),v(),y=class extends c{constructor(){super(),this.namespaceContext=f(),this.validator=e=>{if(e.trim()===``)return null;try{return m(e,this.namespaceContext),null}catch(e){if(e instanceof _)return e.message;throw e}}}set element(e){this.namespaceContext=f(e??void 0),this.value=e===null?``:p(e)}get element(){if(this.value.trim()===``)return null;try{return m(this.value,this.namespaceContext)}catch(e){if(e instanceof _)return null;throw e}}},a([r({attribute:!1,noAccessor:!0})],y.prototype,`element`,null)})))()}function x(){return(x=e((()=>{b(),customElements.define(`oscd-scl-editor`,y)})))()}function S(){return new DOMParser().parseFromString(s,`application/xml`)}function C(){let e=S().querySelector(`IED[name="PUB_A"]`);if(e===null)throw Error(`The shared SCL demo must contain the PUB_A IED`);return e}var w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{n(),x(),l(),u(),{args:w,argTypes:T,meta:E}=d({tagName:`oscd-scl-editor`,defaultArgs:{toolbar:!1},options:{omitTextContent:!0}}),D={...E,title:`Editors / SCL Editor`,parameters:{layout:`fullscreen`,docs:{description:{component:`Element-in/Element-out editor built on the Ace Editor. Setting element captures in-scope namespaces; reading element parses a new Element, or returns null for empty/invalid text. The original document is never modified. The inherited value exposes text. Validation checks one well-formed element, not SCL schema conformance. Empty input is allowed.`}}},args:w,argTypes:{...T,toolbar:{control:`boolean`}},render:e=>t`
    <oscd-scl-editor
      .element=${C()}
      .toolbar=${e.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  `},O={name:`Full SCL Document`,parameters:{docs:{description:{story:`Parse the shared SCL file and pass document.documentElement through .element to edit the entire SCL tree. This uses the root Element, not the XMLDocument object; the XML declaration and document-level nodes are not included.`}}},render:e=>t`
    <oscd-scl-editor
      .element=${S().documentElement}
      .toolbar=${e.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  `},k={name:`SCL Element`,parameters:{docs:{description:{story:`Parse the same shared SCL file, select its PUB_A IED Element, and pass it through .element. The editor displays only that element, not the whole document.`}}}},A={args:{toolbar:!0}},j={render:e=>t`
    <oscd-scl-editor
      .value=${`<Substation name="A1"`}
      .toolbar=${e.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  `},M={render:e=>t`
    <oscd-scl-editor
      .toolbar=${e.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  `},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Full SCL Document',
  parameters: {
    docs: {
      description: {
        story: 'Parse the shared SCL file and pass document.documentElement through .element to edit the entire SCL tree. This uses the root Element, not the XMLDocument object; the XML declaration and document-level nodes are not included.'
      }
    }
  },
  render: args => html\`
    <oscd-scl-editor
      .element=\${sampleDocument().documentElement}
      .toolbar=\${args.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'SCL Element',
  parameters: {
    docs: {
      description: {
        story: 'Parse the same shared SCL file, select its PUB_A IED Element, and pass it through .element. The editor displays only that element, not the whole document.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    toolbar: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <oscd-scl-editor
      .value=\${'<Substation name="A1"'}
      .toolbar=\${args.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <oscd-scl-editor
      .toolbar=\${args.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  \`
}`,...M.parameters?.docs?.source}}},N=[`FullSclDocument`,`SclElement`,`WithToolbar`,`InvalidXml`,`Empty`]})))()}P();export{M as Empty,O as FullSclDocument,j as InvalidXml,k as SclElement,A as WithToolbar,N as __namedExportsOrder,D as default};