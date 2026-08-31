import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,f as r,h as i,u as a}from"./static-html-JNahc6jH.js";import{I as o,L as s,_ as c,h as l,j as u,m as d}from"./list-navigation-helpers-C1Ibc9kd.js";import{n as f,t as p}from"./OscdIcon-BLAkUGod.js";import{n as m,t as h}from"./decorate-DTsqE9Ek.js";import{n as g,t as _}from"./getStorybookMeta-BOUCYHqO.js";function v(e,t){let n=e.nodeType===Node.ELEMENT_NODE?e.closest(t):null;if(n)return n;let r=e.getRootNode();return r instanceof ShadowRoot?v(r.host,t):null}var y,b=e((()=>{a(),c(),d(),s(),f(),m(),y=class extends o(r){constructor(...e){super(...e),this.secondary=!1,this.highlighted=!1,this.level=1}static{this.scopedElements={"oscd-icon":p}}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.parentPane=v(this.parentNode,`oscd-action-pane`)??void 0}get resolvedLevel(){let e=this.parentPane?this.parentPane.resolvedLevel+1:this.level;return Math.floor(e)}renderHeader(){let e=n`<span
        ><slot name="icon"
          >${this.icon?n`<oscd-icon>${this.icon}</oscd-icon>`:i}</slot
        ></span
      >
      ${this.label??i}
      <nav>
        <slot name="action"></slot>
      </nav>`,t=Math.floor(Math.max(this.resolvedLevel,1)),r=this.label??``;switch(t){case 1:return n`<h1 title="${r}">${e}</h1>`;case 2:return n`<h2 title="${r}">${e}</h2>`;case 3:return n`<h3 title="${r}">${e}</h3>`;default:return n`<h4 title="${r}">${e}</h4>`}}render(){return n`<section
      class="${l({secondary:this.secondary,highlighted:this.highlighted,contrasted:this.resolvedLevel%2==0})}"
    >
      ${this.renderHeader()}
      <div><slot></slot></div>
    </section>`}static{this.styles=t`
    :host {
      outline: none;
    }

    :host(:focus-within) section {
      /* TODO consider using oscd-elevation instead */
      box-shadow:
        0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12),
        0 5px 5px -3px rgba(0, 0, 0, 0.2);
      outline-width: 1px;
      transition: all 250ms linear;
    }

    section {
      background-color: var(
        --oscd-action-pane-theme-surface,
        var(--md-sys-color-surface)
      );
      transition: all 200ms linear;
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      outline-color: var(
        --oscd-action-pane-theme-primary,
        var(--md-sys-color-primary)
      );
    }

    section.secondary {
      outline-color: var(
        --oscd-action-pane-theme-secondary,
        var(--md-sys-color-secondary)
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
        --oscd-action-pane-theme-on-primary,
        var(--oscd-base2)
      );
    }

    h1,
    h2,
    h3,
    h4 {
      color: var(
        --oscd-action-pane-theme-on-surface,
        var(--md-sys-color-on-surface)
      );
      font-family: var(--oscd-action-pane-theme-font, var(--oscd-text-font));
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
  `}},h([u({type:String})],y.prototype,`label`,void 0),h([u({type:String})],y.prototype,`icon`,void 0),h([u({type:Boolean})],y.prototype,`secondary`,void 0),h([u({type:Boolean})],y.prototype,`highlighted`,void 0),h([u({type:Number})],y.prototype,`level`,void 0)})),x=e((()=>{b(),window.customElements.define(`oscd-action-pane`,y)})),S,C,w,T,E,D,O;e((()=>{x(),g(),a(),{args:S,argTypes:C,meta:w}=_({tagName:`oscd-action-pane`}),T={title:`Action Controls/Action Pane`,tags:[`autodocs`],...w},E={argTypes:C,args:S,render:({label:e,icon:t})=>n`<div>
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
    </div>`},D={argTypes:C,args:S,render:({label:e,icon:t})=>n`<div>
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
    </div>`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`CalculatedLevels`,`DefinedLevels`]}))();export{E as CalculatedLevels,D as DefinedLevels,O as __namedExportsOrder,T as default};