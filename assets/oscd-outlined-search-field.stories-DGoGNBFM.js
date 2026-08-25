import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,h as r,n as i,t as a,u as o}from"./static-html-JNahc6jH.js";import{I as s,L as c,_ as l,j as u}from"./list-navigation-helpers-C1Ibc9kd.js";import{n as d,t as f}from"./OscdIcon-BLAkUGod.js";import{n as p,t as m}from"./OscdOutlinedField-Hq4cYrYZ.js";import{n as h,t as g}from"./OscdIconButton-De0GC20a.js";import{n as _,t as v}from"./decorate-DTsqE9Ek.js";import{n as y}from"./oscd-menu-item-CTcQZDW2.js";import{n as b,t as x}from"./getStorybookMeta-DZ7hG-Av.js";import{a as S,i as C,o as w,r as T}from"./OscdOutlinedTextField-DpU3EtL9.js";import{n as E,t as D}from"./shared-styles-dw9q_ocD.js";import{t as O}from"./oscd-icon-button-CvGQfHP-.js";import{t as k}from"./oscd-outlined-text-field-C2mcP1gT.js";function A(){return n`<oscd-icon slot="leading-icon">search</oscd-icon>`}var j,M=e((()=>{C(),o(),l(),S(),D(),_(),j=class extends T{constructor(){super(),this.clearLabel=`Clear search`,this.addEventListener(`focus`,this.handleFocus.bind(this)),this.addEventListener(`blur`,this.handleBlur.bind(this))}handleFocus(){this.placeholder=``}handleBlur(){this.placeholder=`Search`}willUpdate(e){super.willUpdate(e),this.hasLeadingIcon=!0,this.hasTrailingIcon=this.hasCustomSlot(`trailing-icon`)||!!this.value}clear(){this.value=``,this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.focus()}renderDefaultClearFieldIconButton(){return this.value?n`<oscd-icon-button
      class="default-clear-button"
      slot="trailing-icon"
      aria-label=${this.clearLabel}
      @click=${()=>this.clear()}
      ><oscd-icon>close</oscd-icon></oscd-icon-button
    >`:n``}renderTrailingIcon(){return n`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon"></slot>
        ${this.hasCustomSlot(`trailing-icon`)?r:this.renderDefaultClearFieldIconButton()}
      </span>
    `}renderLeadingIcon(){return n`
      <span class="icon leading" slot="start">
        <slot name="leading-icon"></slot>
        ${this.hasCustomSlot(`leading-icon`)?r:A()}
      </span>
    `}hasCustomSlot(e){return this.querySelector(`[slot="${e}"]`)!==null}static{this.styles=[E,w,t`
      :host {
        --md-outlined-text-field-input-text-placeholder-color: var(
          --oscd-search-field-placeholder-color,
          color-mix(
            in srgb,
            var(
                --md-outlined-text-field-input-text-color,
                var(--md-sys-color-on-surface, #1d1b20)
              )
              50%,
            transparent
          )
        );
      }
    `]}},v([u({type:String})],j.prototype,`clearLabel`,void 0)})),N,P=e((()=>{c(),d(),h(),M(),p(),a(),N=class extends s(j){constructor(...e){super(...e),this.fieldTag=i`oscd-outlined-field`}static{this.scopedElements={"oscd-outlined-field":m,"oscd-icon":f,"oscd-icon-button":g}}}})),F=e((()=>{P(),k(),y(),O(),window.customElements.define(`oscd-outlined-search-field`,N)})),I,L,R,z,B,V,H,U,W,G,K;e((()=>{o(),y(),O(),F(),b(),{action:I}=__STORYBOOK_MODULE_ACTIONS__,{args:L,argTypes:R,meta:z}=x({tagName:`oscd-outlined-search-field`,options:{omitTextContent:!0}}),B={title:`Inputs / Outlined Search Field`,tags:[`autodocs`],...z},V={argTypes:R,args:{...L,placeholder:`Search`,clearLabel:`Clear search`}},H={argTypes:R,args:{...L,placeholder:`Search`,clearLabel:`Clear search`,value:`Some text`}},U={argTypes:R,args:{...L,placeholder:`Search`,clearLabel:`Clear search`,disabled:!0}},W={argTypes:R,args:{...L,placeholder:`Search files`},render:({placeholder:e})=>n`
    <oscd-outlined-search-field .placeholder=${e}>
      <oscd-icon-button
        slot="leading-icon"
        aria-label="Search files"
        @click=${()=>I(`leading search button`)(`clicked`)}
      >
        <oscd-icon>folder</oscd-icon>
      </oscd-icon-button>
    </oscd-outlined-search-field>
  `},G={argTypes:R,args:{...L,placeholder:`Search`},render:({placeholder:e})=>n`
    <oscd-outlined-search-field .placeholder=${e} value="Some text">
      <oscd-icon-button
        slot="leading-icon"
        aria-label="Search files"
        @click=${()=>I(`leading search button`)(`clicked`)}
      >
        <oscd-icon>folder</oscd-icon>
      </oscd-icon-button>
      <oscd-icon-button
        slot="trailing-icon"
        aria-label="Search"
        @click=${()=>I(`trailing search button`)(`clicked`)}
      >
        <oscd-icon>search</oscd-icon>
      </oscd-icon-button>
    </oscd-outlined-search-field>
  `},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    placeholder: 'Search',
    clearLabel: 'Clear search'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    placeholder: 'Search',
    clearLabel: 'Clear search',
    value: 'Some text'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    placeholder: 'Search',
    clearLabel: 'Clear search',
    disabled: true
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    placeholder: 'Search files'
  },
  render: ({
    placeholder
  }) => html\`
    <oscd-outlined-search-field .placeholder=\${placeholder}>
      <oscd-icon-button
        slot="leading-icon"
        aria-label="Search files"
        @click=\${() => action('leading search button')('clicked')}
      >
        <oscd-icon>folder</oscd-icon>
      </oscd-icon-button>
    </oscd-outlined-search-field>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    placeholder: 'Search'
  },
  render: ({
    placeholder
  }) => html\`
    <oscd-outlined-search-field .placeholder=\${placeholder} value="Some text">
      <oscd-icon-button
        slot="leading-icon"
        aria-label="Search files"
        @click=\${() => action('leading search button')('clicked')}
      >
        <oscd-icon>folder</oscd-icon>
      </oscd-icon-button>
      <oscd-icon-button
        slot="trailing-icon"
        aria-label="Search"
        @click=\${() => action('trailing search button')('clicked')}
      >
        <oscd-icon>search</oscd-icon>
      </oscd-icon-button>
    </oscd-outlined-search-field>
  \`
}`,...G.parameters?.docs?.source}}},K=[`Empty`,`WithValue`,`Disabled`,`CustomLeadingSlot`,`CustomLeadingAndTrailingSlots`]}))();export{G as CustomLeadingAndTrailingSlots,W as CustomLeadingSlot,U as Disabled,V as Empty,H as WithValue,K as __namedExportsOrder,B as default};