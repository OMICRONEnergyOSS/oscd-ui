import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,f as n,o as r,r as i,t as a}from"./lit-CCeopZMg.js";import{_ as o,n as s,r as c,t as l}from"./lit-element-DJJrs8Rf.js";import{n as u,t as d}from"./decorate-DTsqE9Ek.js";import{c as f,i as p,l as m,r as h}from"./delegate-DmQ0x4so.js";import{o as g,s as _}from"./OscdItem-Dtx8rqS-.js";import{n as v,t as y}from"./getStorybookMeta-2wzGcZy1.js";function b(e,t){let n=e.nodeType===Node.ELEMENT_NODE?e.closest(t):null;if(n)return n;let r=e.getRootNode();return r instanceof ShadowRoot?b(r.host,t):null}var x,S=e((()=>{a(),c(),h(),s(),m(),_(),u(),x=class extends l(i){constructor(...e){super(...e),this.secondary=!1,this.highlighted=!1,this.level=1}static{this.scopedElements={"oscd-elevation":f,"oscd-icon":g}}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.parentPane=b(this.parentNode,`oscd-action-pane`)??void 0}get resolvedLevel(){let e=this.parentPane?this.parentPane.resolvedLevel+1:this.level;return Math.floor(e)}renderHeader(){let e=n`<span
        ><slot name="icon"
          >${this.icon?n`<oscd-icon>${this.icon}</oscd-icon>`:r}</slot
        ></span
      >
      ${this.label??r}
      <nav>
        <slot name="action"></slot>
      </nav>`,t=Math.floor(Math.max(this.resolvedLevel,1)),i=this.label??``;switch(t){case 1:return n`<h1 title="${i}">${e}</h1>`;case 2:return n`<h2 title="${i}">${e}</h2>`;case 3:return n`<h3 title="${i}">${e}</h3>`;default:return n`<h4 title="${i}">${e}</h4>`}}render(){return n`<section
      class="${p({secondary:this.secondary,highlighted:this.highlighted,contrasted:this.resolvedLevel%2==0})}"
    >
      <oscd-elevation></oscd-elevation>
      ${this.renderHeader()}
      <div><slot></slot></div>
    </section>`}static{this.styles=t`
    :host {
      outline: none;
    }

    :host(:focus-within) section {
      --md-elevation-level: 3;
      outline-width: 1px;
      transition: all 250ms linear;
    }

    section {
      position: relative;
      background-color: var(
        --oscd-action-pane-container-color,
        var(--md-sys-color-surface, #fef7ff)
      );
      transition: all 200ms linear;
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      outline-color: var(
        --oscd-action-pane-outline-color,
        var(--md-sys-color-primary, #6750a4)
      );
    }

    section.secondary {
      outline-color: var(
        --oscd-action-pane-secondary-outline-color,
        var(--md-sys-color-secondary, #625b71)
      );
    }

    section > div {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 8px 12px 16px;
      clear: right;
    }

    .highlighted {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) .highlighted {
      outline-style: solid;
    }

    .contrasted {
      background-color: var(
        --oscd-action-pane-contrasted-container-color,
        var(--md-sys-color-on-primary, #fff)
      );
    }

    h1,
    h2,
    h3,
    h4 {
      color: var(
        --oscd-action-pane-headline-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      font-family: var(
        --oscd-action-pane-headline-font-family,
        var(--md-ref-typeface-plain, Roboto)
      );
      font-weight: 300;
      overflow: clip visible;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 52px;
      padding-left: 0.3em;
    }

    nav {
      float: right;
      margin-right: 4px;
    }

    oscd-icon,
    ::slotted([slot='icon']) {
      vertical-align: middle;
      position: relative;
      top: -0.1em;
    }
  `}},d([o({type:String})],x.prototype,`label`,void 0),d([o({type:String})],x.prototype,`icon`,void 0),d([o({type:Boolean})],x.prototype,`secondary`,void 0),d([o({type:Boolean})],x.prototype,`highlighted`,void 0),d([o({type:Number})],x.prototype,`level`,void 0)})),C=e((()=>{S(),window.customElements.define(`oscd-action-pane`,x)})),w,T,E,D,O,k,A;e((()=>{C(),v(),a(),{args:w,argTypes:T,meta:E}=y({tagName:`oscd-action-pane`}),D={title:`Action Controls/Action Pane`,tags:[`autodocs`],...E},O={argTypes:T,args:w,render:({label:e,icon:t})=>n`<div>
      <oscd-action-pane .label=${e} .icon=${t} highlighted .level=${1}>
        level 1, title, custom icon, highlighted
        <oscd-icon slot="icon">delete</oscd-icon>
        <oscd-action-pane .icon=${t} .label=${`label`} secondary>
          set level 1, icon, secondary level below the rest
          <oscd-action-pane .label=${e}>
            level 2 selected
            <oscd-action-pane
              .label=${e}
              .icon=${t}
              secondary
              highlighted
            >
              level 3, secondary highlighted
              <oscd-action-pane> level 4 </oscd-action-pane>
            </oscd-action-pane>
          </oscd-action-pane>
          <oscd-action-pane
            .label=${e}
            .icon=${t}
            secondary
          ></oscd-action-pane>
        </oscd-action-pane>
      </oscd-action-pane>
      <div></div>
    </div>`},k={argTypes:T,args:w,render:({label:e,icon:t})=>n`<div>
      <oscd-action-pane .label=${e} .icon=${t} highlighted .level=${2}>
        level 1, title, custom icon, highlighted
        <oscd-icon slot="icon">delete</oscd-icon>
        <oscd-action-pane .icon=${t} .label=${`label`} secondary>
          level 2, icon, secondary level below the rest
          <oscd-action-pane .label=${e}>
            level 3 selected
            <oscd-action-pane
              .label=${e}
              .icon=${t}
              secondary
              highlighted
            >
              level 4, secondary highlighted
              <oscd-action-pane> level 4 </oscd-action-pane>
            </oscd-action-pane>
          </oscd-action-pane>
          <oscd-action-pane
            .label=${e}
            .icon=${t}
            secondary
            level="4"
          ></oscd-action-pane>
        </oscd-action-pane>
      </oscd-action-pane>
      <div></div>
    </div>`},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  argTypes,
  args,
  render: ({
    label,
    icon
  }) => {
    return html\`<div>
      <oscd-action-pane .label=\${label} .icon=\${icon} highlighted .level=\${1}>
        level 1, title, custom icon, highlighted
        <oscd-icon slot="icon">delete</oscd-icon>
        <oscd-action-pane .icon=\${icon} .label=\${'label'} secondary>
          set level 1, icon, secondary level below the rest
          <oscd-action-pane .label=\${label}>
            level 2 selected
            <oscd-action-pane
              .label=\${label}
              .icon=\${icon}
              secondary
              highlighted
            >
              level 3, secondary highlighted
              <oscd-action-pane> level 4 </oscd-action-pane>
            </oscd-action-pane>
          </oscd-action-pane>
          <oscd-action-pane
            .label=\${label}
            .icon=\${icon}
            secondary
          ></oscd-action-pane>
        </oscd-action-pane>
      </oscd-action-pane>
      <div></div>
    </div>\`;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  argTypes,
  args,
  render: ({
    label,
    icon
  }) => {
    return html\`<div>
      <oscd-action-pane .label=\${label} .icon=\${icon} highlighted .level=\${2}>
        level 1, title, custom icon, highlighted
        <oscd-icon slot="icon">delete</oscd-icon>
        <oscd-action-pane .icon=\${icon} .label=\${'label'} secondary>
          level 2, icon, secondary level below the rest
          <oscd-action-pane .label=\${label}>
            level 3 selected
            <oscd-action-pane
              .label=\${label}
              .icon=\${icon}
              secondary
              highlighted
            >
              level 4, secondary highlighted
              <oscd-action-pane> level 4 </oscd-action-pane>
            </oscd-action-pane>
          </oscd-action-pane>
          <oscd-action-pane
            .label=\${label}
            .icon=\${icon}
            secondary
            level="4"
          ></oscd-action-pane>
        </oscd-action-pane>
      </oscd-action-pane>
      <div></div>
    </div>\`;
  }
}`,...k.parameters?.docs?.source}}},A=[`CalculatedLevels`,`DefinedLevels`]}))();export{O as CalculatedLevels,k as DefinedLevels,A as __namedExportsOrder,D as default};