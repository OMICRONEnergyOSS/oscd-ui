import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,g as n,n as r,t as i}from"./lit-LihecQ0E.js";import{_ as a,h as o,r as s}from"./lit-element-CwUNoIyU.js";import{t as c}from"./decorate-2OK4V6AF.js";import{n as l,t as u}from"./scopedWcDecorator-GXEKina3.js";function d(e){return typeof e==`object`&&!!e}function f(e){return d(e)?typeof e.id==`string`&&typeof e.name==`string`&&typeof e.title==`string`&&(e.type===`docs`||e.type===`story`)&&(e.tags===void 0||Array.isArray(e.tags)&&e.tags.every(e=>typeof e==`string`)):!1}function p(e){if(!d(e)||!d(e.entries))throw Error(`Storybook returned an invalid story index.`);let t={};for(let[n,r]of Object.entries(e.entries)){if(!f(r))throw Error(`Storybook story index contains an invalid entry.`);t[n]=r}return{entries:t}}function m(e){let t=e.split(`/`)[0].trim();return x[t]??`Other components`}function h(e){let t=Object.values(e.entries),n=t.filter(e=>e.type===`docs`&&e.tags?.includes(`autodocs`)),r=t.filter(e=>e.type===`story`),i=new Map;for(let e of n){let t=r.filter(t=>t.title===e.title),n=t.find(e=>e.name===`Default`)??t[0];if(!n)continue;let a=m(e.title),o=e.title.split(`/`),s={docs:e,story:n,category:a,label:o[o.length-1].trim()},c=i.get(a)??[];c.push(s),i.set(a,c)}return[...i.entries()].map(([e,t])=>({title:e,entries:t.sort((e,t)=>e.label.localeCompare(t.label))})).sort((e,t)=>b.indexOf(e.title)-b.indexOf(t.title))}function g(e){let t=new URL(`./`,document.baseURI);return t.searchParams.set(`path`,e),`${t.pathname}${t.search}`}function _(e,t){let n=new URL(`iframe.html`,document.baseURI);return n.searchParams.set(`id`,e),n.searchParams.set(`viewMode`,`story`),n.searchParams.set(`globals`,`palette:${t}`),n.href}function v(e,n){let r=g(`/docs/${e.docs.id}`),i=g(`/story/${e.story.id}`);return t`<article>
    <header>
      <h3><a href=${r} target="_top">${e.label}</a></h3>
      <span>${e.story.name}</span>
    </header>
    <iframe
      src=${_(e.story.id,n)}
      title="${e.label} — ${e.story.name}"
      loading="lazy"
    ></iframe>
    <footer>
      <a href=${r} target="_top">Documentation</a>
      <a href=${i} target="_top">Open story</a>
    </footer>
  </article>`}var y,b,x,S,C,w,T;function E(){return(E=e((()=>{i(),s(),u(),{useGlobals:y}=__STORYBOOK_MODULE_PREVIEW_API__,b=[`Actions & navigation`,`Inputs & selection`,`Data & SCL`,`Feedback & overlays`,`Foundations`,`Editors`,`Labs`,`Other components`],x={"Action Controls":`Data & SCL`,"App Bar":`Actions & navigation`,Buttons:`Actions & navigation`,Checkboxs:`Inputs & selection`,Chips:`Inputs & selection`,Dialogs:`Feedback & overlays`,Dividers:`Foundations`,Elevations:`Foundations`,Editors:`Editors`,Fabs:`Actions & navigation`,Feedback:`Feedback & overlays`,Fields:`Inputs & selection`,Filtering:`Inputs & selection`,Focus:`Foundations`,Icons:`Foundations`,Iconbuttons:`Actions & navigation`,Inputs:`Inputs & selection`,Labs:`Labs`,Lists:`Data & SCL`,Menus:`Actions & navigation`,"Navigation Drawer":`Actions & navigation`,Progress:`Feedback & overlays`,Radios:`Inputs & selection`,Ripples:`Foundations`,"Scl Inputs":`Inputs & selection`,Selects:`Inputs & selection`,Sliders:`Inputs & selection`,Switchs:`Inputs & selection`,Tabs:`Actions & navigation`,Textfields:`Inputs & selection`,Tree:`Data & SCL`,"Tree Grid":`Data & SCL`},S=class extends r{constructor(...e){super(...e),this.palette=`solarized-light`,this.sections=[],this.loading=!0}firstUpdated(){this.loadStoryIndex()}async loadStoryIndex(){this.loading=!0,this.error=void 0;try{let e=new URL(`index.json`,document.baseURI),t=await fetch(e);if(!t.ok)throw Error(`Unable to load Storybook index (${t.status}).`);this.sections=h(p(await t.json()))}catch(e){this.error=e instanceof Error?e.message:`Unable to load the Storybook component catalog.`}finally{this.loading=!1}}render(){return this.loading?t`<p role="status">Loading component catalog…</p>`:this.error?t`<p role="alert">${this.error}</p>
        <button @click=${()=>this.loadStoryIndex()}>Retry</button>`:t`
      <main>
        ${this.sections.map(e=>t`
            <section>
              <h2>${e.title}</h2>
              <div class="grid">
                ${e.entries.map(e=>v(e,this.palette))}
              </div>
            </section>
          `)}
      </main>
    `}static{this.styles=n`
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
  `}},c([a({type:String})],S.prototype,`palette`,void 0),c([o()],S.prototype,`sections`,void 0),c([o()],S.prototype,`loading`,void 0),c([o()],S.prototype,`error`,void 0),C={title:`Open SCD/Component Catalog`,decorators:[l],parameters:{layout:`fullscreen`,scopedElements:{"oscd-component-catalog":S}},render:()=>{let[e]=y(),n=typeof e.palette==`string`?e.palette:`solarized-light`;return t`<oscd-component-catalog
      .palette=${n}
    ></oscd-component-catalog>`}},w={},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T=[`Default`]})))()}E();export{w as Default,T as __namedExportsOrder,C as default};