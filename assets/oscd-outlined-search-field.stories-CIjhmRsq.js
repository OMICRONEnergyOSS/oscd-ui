import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,g as r,t as i}from"./lit-LihecQ0E.js";import{o as a,s as o}from"./iframe-BJeBrXqV.js";import{_ as s,n as c,r as l,t as u}from"./lit-element-CwUNoIyU.js";import{t as d}from"./decorate-2OK4V6AF.js";import{o as f,s as p}from"./OscdItem-u-txZvbb.js";import{i as m}from"./oscd-menu-item-BRUwrWle.js";import{n as h,t as g}from"./getStorybookMeta-CDlhnKUP.js";import{a as _,i as v,o as y,r as b}from"./OscdOutlinedTextField-uwUnw4KA.js";import{n as x,t as S}from"./shared-styles-D_1O2ASe.js";import{n as C,t as w}from"./OscdOutlinedField-OV0xdInN.js";import{n as T,t as E}from"./OscdIconButton-BXCa8KOT.js";import{t as D}from"./oscd-icon-button-BoCDg8Ik.js";import{t as O}from"./oscd-outlined-text-field-DJx5Nqkz.js";function k(){return n`<oscd-icon slot="leading-icon">search</oscd-icon>`}var A;function j(){return(j=e((()=>{v(),i(),l(),_(),S(),A=class extends b{constructor(){super(),this.clearLabel=`Clear search`,this.addEventListener(`focus`,this.handleFocus.bind(this)),this.addEventListener(`blur`,this.handleBlur.bind(this))}handleFocus(){this.placeholder=``}handleBlur(){this.placeholder=`Search`}willUpdate(e){super.willUpdate(e),this.hasLeadingIcon=!0,this.hasTrailingIcon=this.hasCustomSlot(`trailing-icon`)||!!this.value}clear(){this.value=``,this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.focus()}renderDefaultClearFieldIconButton(){return this.value?n`<oscd-icon-button
      class="default-clear-button"
      slot="trailing-icon"
      aria-label=${this.clearLabel}
      @click=${()=>this.clear()}
      ><oscd-icon>close</oscd-icon></oscd-icon-button
    >`:n``}renderTrailingIcon(){return n`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon"></slot>
        ${this.hasCustomSlot(`trailing-icon`)?t:this.renderDefaultClearFieldIconButton()}
      </span>
    `}renderLeadingIcon(){return n`
      <span class="icon leading" slot="start">
        <slot name="leading-icon"></slot>
        ${this.hasCustomSlot(`leading-icon`)?t:k()}
      </span>
    `}hasCustomSlot(e){return this.querySelector(`[slot="${e}"]`)!==null}static{this.styles=[x,y,r`
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
    `]}},d([s({type:String})],A.prototype,`clearLabel`,void 0)})))()}var M;function N(){return(N=e((()=>{c(),p(),T(),j(),C(),a(),M=class extends u(A){constructor(...e){super(...e),this.fieldTag=o`oscd-outlined-field`}static{this.scopedElements={"oscd-outlined-field":w,"oscd-icon":f,"oscd-icon-button":E}}}})))()}function P(){return(P=e((()=>{N(),O(),m(),D(),window.customElements.define(`oscd-outlined-search-field`,M)})))()}var F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{i(),m(),D(),P(),h(),{action:F}=__STORYBOOK_MODULE_ACTIONS__,{args:I,argTypes:L,meta:R}=g({tagName:`oscd-outlined-search-field`,options:{omitTextContent:!0}}),z={title:`Inputs / Outlined Search Field`,tags:[`autodocs`],...R},B={argTypes:L,args:{...I,placeholder:`Search`,clearLabel:`Clear search`}},V={argTypes:L,args:{...I,placeholder:`Search`,clearLabel:`Clear search`,value:`Some text`}},H={argTypes:L,args:{...I,placeholder:`Search`,clearLabel:`Clear search`,disabled:!0}},U={argTypes:L,args:{...I,placeholder:`Search files`},render:({placeholder:e})=>n`
    <oscd-outlined-search-field .placeholder=${e}>
      <oscd-icon-button
        slot="leading-icon"
        aria-label="Search files"
        @click=${()=>F(`leading search button`)(`clicked`)}
      >
        <oscd-icon>folder</oscd-icon>
      </oscd-icon-button>
    </oscd-outlined-search-field>
  `},W={argTypes:L,args:{...I,placeholder:`Search`},render:({placeholder:e})=>n`
    <oscd-outlined-search-field .placeholder=${e} value="Some text">
      <oscd-icon-button
        slot="leading-icon"
        aria-label="Search files"
        @click=${()=>F(`leading search button`)(`clicked`)}
      >
        <oscd-icon>folder</oscd-icon>
      </oscd-icon-button>
      <oscd-icon-button
        slot="trailing-icon"
        aria-label="Search"
        @click=${()=>F(`trailing search button`)(`clicked`)}
      >
        <oscd-icon>search</oscd-icon>
      </oscd-icon-button>
    </oscd-outlined-search-field>
  `},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    placeholder: 'Search',
    clearLabel: 'Clear search'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    placeholder: 'Search',
    clearLabel: 'Clear search',
    value: 'Some text'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    placeholder: 'Search',
    clearLabel: 'Clear search',
    disabled: true
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=[`Empty`,`WithValue`,`Disabled`,`CustomLeadingSlot`,`CustomLeadingAndTrailingSlots`]})))()}K();export{W as CustomLeadingAndTrailingSlots,U as CustomLeadingSlot,H as Disabled,B as Empty,V as WithValue,G as __namedExportsOrder,z as default};