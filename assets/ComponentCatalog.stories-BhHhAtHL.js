import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,f as n,r,t as i}from"./lit-CCeopZMg.js";import{_ as a,h as o,r as s}from"./lit-element-DJJrs8Rf.js";import{n as c,t as l}from"./decorate-DTsqE9Ek.js";import{n as u,t as d}from"./scopedWcDecorator-ZJ7pyk8g.js";function f(e){return typeof e==`object`&&!!e}function p(e){return f(e)?typeof e.id==`string`&&typeof e.name==`string`&&typeof e.title==`string`&&(e.type===`docs`||e.type===`story`)&&(e.tags===void 0||Array.isArray(e.tags)&&e.tags.every(e=>typeof e==`string`)):!1}function m(e){if(!f(e)||!f(e.entries))throw Error(`Storybook returned an invalid story index.`);let t={};for(let[n,r]of Object.entries(e.entries)){if(!p(r))throw Error(`Storybook story index contains an invalid entry.`);t[n]=r}return{entries:t}}function h(e){return S[e.split(`/`)[0].trim()]??`Other components`}function g(e){let t=Object.values(e.entries),n=t.filter(e=>e.type===`docs`&&e.tags?.includes(`autodocs`)),r=t.filter(e=>e.type===`story`),i=new Map;for(let e of n){let t=r.filter(t=>t.title===e.title),n=t.find(e=>e.name===`Default`)??t[0];if(!n)continue;let a=h(e.title),o=e.title.split(`/`),s={docs:e,story:n,category:a,label:o[o.length-1].trim()},c=i.get(a)??[];c.push(s),i.set(a,c)}return[...i.entries()].map(([e,t])=>({title:e,entries:t.sort((e,t)=>e.label.localeCompare(t.label))})).sort((e,t)=>x.indexOf(e.title)-x.indexOf(t.title))}function _(e){let t=new URL(`./`,document.baseURI);return t.searchParams.set(`path`,e),`${t.pathname}${t.search}`}function v(e,t){let n=new URL(`iframe.html`,document.baseURI);return n.searchParams.set(`id`,e),n.searchParams.set(`viewMode`,`story`),n.searchParams.set(`globals`,`palette:${t}`),n.href}function y(e,t){let r=_(`/docs/${e.docs.id}`),i=_(`/story/${e.story.id}`);return n`<article>
    <header>
      <h3><a href=${r} target="_top">${e.label}</a></h3>
      <span>${e.story.name}</span>
    </header>
    <iframe
      src=${v(e.story.id,t)}
      title="${e.label} — ${e.story.name}"
      loading="lazy"
    ></iframe>
    <footer>
      <a href=${r} target="_top">Documentation</a>
      <a href=${i} target="_top">Open story</a>
    </footer>
  </article>`}var b,x,S,C,w,T,E;e((()=>{i(),s(),d(),c(),{useGlobals:b}=__STORYBOOK_MODULE_PREVIEW_API__,x=[`Actions & navigation`,`Inputs & selection`,`Data & SCL`,`Feedback & overlays`,`Foundations`,`Editors`,`Labs`,`Other components`],S={"Action Controls":`Data & SCL`,"App Bar":`Actions & navigation`,Buttons:`Actions & navigation`,Checkboxs:`Inputs & selection`,Chips:`Inputs & selection`,Dialogs:`Feedback & overlays`,Dividers:`Foundations`,Elevations:`Foundations`,Editors:`Editors`,Fabs:`Actions & navigation`,Feedback:`Feedback & overlays`,Fields:`Inputs & selection`,Filtering:`Inputs & selection`,Focus:`Foundations`,Icons:`Foundations`,Iconbuttons:`Actions & navigation`,Inputs:`Inputs & selection`,Labs:`Labs`,Lists:`Data & SCL`,Menus:`Actions & navigation`,"Navigation Drawer":`Actions & navigation`,Progress:`Feedback & overlays`,Radios:`Inputs & selection`,Ripples:`Foundations`,"Scl Inputs":`Inputs & selection`,Selects:`Inputs & selection`,Sliders:`Inputs & selection`,Switchs:`Inputs & selection`,Tabs:`Actions & navigation`,Textfields:`Inputs & selection`,Tree:`Data & SCL`,"Tree Grid":`Data & SCL`},C=class extends r{constructor(...e){super(...e),this.palette=`solarized-light`,this.sections=[],this.loading=!0}firstUpdated(){this.loadStoryIndex()}async loadStoryIndex(){this.loading=!0,this.error=void 0;try{let e=new URL(`index.json`,document.baseURI),t=await fetch(e);if(!t.ok)throw Error(`Unable to load Storybook index (${t.status}).`);this.sections=g(m(await t.json()))}catch(e){this.error=e instanceof Error?e.message:`Unable to load the Storybook component catalog.`}finally{this.loading=!1}}render(){return this.loading?n`<p role="status">Loading component catalog…</p>`:this.error?n`<p role="alert">${this.error}</p>
        <button @click=${()=>this.loadStoryIndex()}>Retry</button>`:n`
      <main>
        ${this.sections.map(e=>n`
            <section>
              <h2>${e.title}</h2>
              <div class="grid">
                ${e.entries.map(e=>y(e,this.palette))}
              </div>
            </section>
          `)}
      </main>
    `}static{this.styles=t`
    :host {
      display: block;
      padding: 24px;
    }

    section + section {
      margin-top: 32px;
    }

    h2 {
      margin: 0 0 16px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
      gap: 16px;
    }

    article {
      min-width: 0;
      overflow: hidden;
      border: 1px solid var(--md-sys-color-outline-variant, #cac4d0);
      border-radius: 12px;
      background: var(--md-sys-color-surface, #fef7ff);
    }

    header,
    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 16px;
    }

    h3 {
      margin: 0;
      font-size: 1rem;
    }

    header span {
      color: var(--md-sys-color-on-surface-variant, #49454f);
      font-size: 0.875rem;
    }

    iframe {
      display: block;
      width: 100%;
      height: 180px;
      border: 0;
      background: var(--md-sys-color-surface, #fef7ff);
    }

    a {
      color: var(--md-sys-color-primary, #6750a4);
    }

    footer {
      justify-content: flex-start;
      border-top: 1px solid var(--md-sys-color-outline-variant, #cac4d0);
    }

    @media (max-width: 599px) {
      :host {
        padding: 16px;
      }
    }
  `}},l([a({type:String})],C.prototype,`palette`,void 0),l([o()],C.prototype,`sections`,void 0),l([o()],C.prototype,`loading`,void 0),l([o()],C.prototype,`error`,void 0),w={title:`Open SCD/Component Catalog`,decorators:[u],parameters:{layout:`fullscreen`,scopedElements:{"oscd-component-catalog":C}},render:()=>{let[e]=b();return n`<oscd-component-catalog
      .palette=${typeof e.palette==`string`?e.palette:`solarized-light`}
    ></oscd-component-catalog>`}},T={},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source}}},E=[`Default`]}))();export{T as Default,E as __namedExportsOrder,w as default};