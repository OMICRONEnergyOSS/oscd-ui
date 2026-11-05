import{i as e}from"./preload-helper-xPQekRTU.js";import{f as t,t as n}from"./lit-CCeopZMg.js";import{_ as r,r as i}from"./lit-element-DJJrs8Rf.js";import{n as a,t as o}from"./decorate-DTsqE9Ek.js";import{i as s,n as c,r as l,t as u}from"./sample-scl-DjTcgXoi.js";import{n as d,t as f}from"./getStorybookMeta-DIgkQqcg.js";function p(e){let t=e===void 0?g:e.lookupNamespaceURI(null),n=window.document.implementation.createDocument(t,`SCL`).documentElement;if(n.setAttributeNS(_,`xmlns`,t??``),e===void 0)return n.setAttributeNS(_,`xmlns:xsi`,`http://www.w3.org/2001/XMLSchema-instance`),n;let r=new Map;for(let t=e;t!==null;t=t.parentElement)for(let e of Array.from(t.attributes))e.namespaceURI===_&&!r.has(e.name)&&r.set(e.name,e.value);for(let[e,t]of r)n.setAttributeNS(_,e,t);return n}function m(e){let t=new XMLSerializer().serializeToString(e),n=new DOMParser().parseFromString(t,`application/xml`).documentElement,r=p(e),i=t.match(/^<(?:[^>"']|"[^"]*"|'[^']*')*>/)?.[0];if(i===void 0)throw new v(`Unable to serialize XML element`);return i.replace(/\s+(xmlns(?::[^\s=]+)?)="[^"]*"/g,(t,i)=>!e.hasAttribute(i)&&n.getAttribute(i)===r.getAttribute(i)?``:t)+t.slice(i.length)}function h(e,t=p()){let n=t.cloneNode(!1);if(!(n instanceof Element))throw TypeError(`Expected an Element namespace context`);let r=`oscd-editor-content`;for(;e.includes(r);)r+=`.`;n.appendChild(n.ownerDocument.createComment(r));let i=new XMLSerializer().serializeToString(n).replace(`<!--${r}-->`,()=>`${e}<!--${r}-->`),a=new DOMParser().parseFromString(i,`application/xml`),o=a.documentElement,s=o.lastChild;if(s?.nodeType!==Node.COMMENT_NODE||s.textContent!==r){let e=a.getElementsByTagNameNS(`*`,`parsererror`)[0];throw new v(e?.textContent??`Invalid XML`)}if(o.removeChild(s),o.children.length!==1||Array.from(o.childNodes).some(e=>(e.nodeType===Node.TEXT_NODE||e.nodeType===Node.CDATA_SECTION_NODE)&&(e.textContent??``).trim()!==``))throw new v(`Expected exactly one XML element`);return o.firstElementChild}var g,_,v,y=e((()=>{g=`http://www.iec.ch/61850/2003/SCL`,_=`http://www.w3.org/2000/xmlns/`,v=class extends Error{}})),b,x=e((()=>{i(),s(),y(),a(),b=class extends l{constructor(){super(),this.namespaceContext=p(),this.validator=e=>{if(e.trim()===``)return null;try{return h(e,this.namespaceContext),null}catch(e){if(e instanceof v)return e.message;throw e}}}set element(e){this.namespaceContext=p(e??void 0),this.value=e===null?``:m(e)}get element(){if(this.value.trim()===``)return null;try{return h(this.value,this.namespaceContext)}catch(e){if(e instanceof v)return null;throw e}}},o([r({attribute:!1,noAccessor:!0})],b.prototype,`element`,null)})),S=e((()=>{x(),customElements.define(`oscd-scl-editor`,b)}));function C(){return new DOMParser().parseFromString(c,`application/xml`)}function w(){let e=C().querySelector(`IED[name="PUB_A"]`);if(e===null)throw Error(`The shared SCL demo must contain the PUB_A IED`);return e}var T,E,D,O,k,A,j,M,N,P;e((()=>{n(),S(),u(),d(),{args:T,argTypes:E,meta:D}=f({tagName:`oscd-scl-editor`,defaultArgs:{toolbar:!1},options:{omitTextContent:!0}}),O={...D,title:`Editors / SCL Editor`,parameters:{layout:`fullscreen`,docs:{description:{component:`Element-in/Element-out editor built on the Ace Editor. Setting element captures in-scope namespaces; reading element parses a new Element, or returns null for empty/invalid text. The original document is never modified. The inherited value exposes text. Validation checks one well-formed element, not SCL schema conformance. Empty input is allowed.`}}},args:T,argTypes:{...E,toolbar:{control:`boolean`}},render:e=>t`
    <oscd-scl-editor
      .element=${w()}
      .toolbar=${e.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  `},k={name:`Full SCL Document`,parameters:{docs:{description:{story:`Parse the shared SCL file and pass document.documentElement through .element to edit the entire SCL tree. This uses the root Element, not the XMLDocument object; the XML declaration and document-level nodes are not included.`}}},render:e=>t`
    <oscd-scl-editor
      .element=${C().documentElement}
      .toolbar=${e.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  `},A={name:`SCL Element`,parameters:{docs:{description:{story:`Parse the same shared SCL file, select its PUB_A IED Element, and pass it through .element. The editor displays only that element, not the whole document.`}}}},j={args:{toolbar:!0}},M={render:e=>t`
    <oscd-scl-editor
      .value=${`<Substation name="A1"`}
      .toolbar=${e.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  `},N={render:e=>t`
    <oscd-scl-editor
      .toolbar=${e.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  `},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'SCL Element',
  parameters: {
    docs: {
      description: {
        story: 'Parse the same shared SCL file, select its PUB_A IED Element, and pass it through .element. The editor displays only that element, not the whole document.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    toolbar: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <oscd-scl-editor
      .value=\${'<Substation name="A1"'}
      .toolbar=\${args.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <oscd-scl-editor
      .toolbar=\${args.toolbar}
      style="height: 100vh; width: 100%;"
    ></oscd-scl-editor>
  \`
}`,...N.parameters?.docs?.source}}},P=[`FullSclDocument`,`SclElement`,`WithToolbar`,`InvalidXml`,`Empty`]}))();export{N as Empty,k as FullSclDocument,M as InvalidXml,A as SclElement,j as WithToolbar,P as __namedExportsOrder,O as default};