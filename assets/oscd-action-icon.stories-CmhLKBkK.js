import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,f as n,o as r,r as i,t as a}from"./lit-CCeopZMg.js";import{_ as o,n as s,r as c,t as l}from"./lit-element-DJJrs8Rf.js";import{n as u,t as d}from"./decorate-DTsqE9Ek.js";import{c as f,l as p}from"./delegate-BMczuBBm.js";import{o as m,s as h}from"./OscdItem-DxcQmniw.js";import{i as g}from"./oscd-menu-item-BdB0iGP2.js";import{n as _,t as v}from"./getStorybookMeta-y_WLQIzU.js";var y,b=e((()=>{a(),c(),s(),p(),h(),u(),y=class extends l(i){constructor(...e){super(...e),this.secondary=!1,this.highlighted=!1,this.hideActions=!1}static{this.scopedElements={"oscd-elevation":f,"oscd-icon":m}}async firstUpdated(){this.tabIndex=0}renderIcon(){return n`<span class="icon-container">
      <oscd-elevation></oscd-elevation>
      <slot name="icon"
        >${this.icon?n`<oscd-icon>${this.icon}</oscd-icon>`:r}</slot
      ></span
    > `}render(){return n`${this.label?n`<header><oscd-elevation></oscd-elevation>${this.label}</header>`:r}
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      ${this.label?n`<footer>${this.label}</footer>`:r}`}static{this.styles=t`
    :host {
      display: flex;
      flex-direction: column;
      outline: none;
    }

    section {
      align-self: center;
    }

    .icon-container {
      display: block;
      position: relative;
      transition: transform 150ms linear;
    }

    ::slotted([slot='icon']),
    oscd-icon {
      display: block;
      color: var(
        --oscd-action-icon-icon-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      outline-color: var(
        --oscd-action-icon-icon-outline-color,
        var(--md-sys-color-primary, #6750a4)
      );
      outline-style: solid;
      margin: 0px;
      outline-width: 0px;
      width: 64px;
      height: 64px;
      --md-icon-size: 64px;
    }

    :host([secondary]) ::slotted([slot='icon']),
    :host([secondary]) oscd-icon {
      outline-color: var(
        --oscd-action-icon-secondary-icon-outline-color,
        var(--md-sys-color-secondary, #625b71)
      );
    }

    :host([highlighted]) ::slotted([slot='icon']),
    :host([highlighted]) oscd-icon {
      outline-style: dotted;
      outline-width: 2px;
    }

    :host(:focus-within) ::slotted([slot='icon']),
    :host(:focus-within) oscd-icon {
      outline-style: solid;
      outline-width: 4px;
    }

    :host(:focus-within:not([hideActions])) .icon-container {
      --md-elevation-level: 3;
      transform: scale(0.8);
      transition: transform 250ms linear;
    }

    ::slotted([slot='icon']:hover),
    oscd-icon:hover {
      outline-style: dashed;
      outline-width: 2px;
    }

    ::slotted([slot='action']) {
      color: var(
        --oscd-action-icon-action-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      transition:
        transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
      position: absolute;
      pointer-events: none;
      z-index: 1;
      opacity: 0;
      width: 48px;
      height: 48px;
      margin-top: -56px;
      margin-left: 8px;
    }

    :host(:focus-within) ::slotted([slot='action']) {
      transition:
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
      pointer-events: auto;
      opacity: 1;
    }

    :host(:focus-within) ::slotted([slot='action']:nth-of-type(1)) {
      transform: translate(0px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(2)) {
      transform: translate(0px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(3)) {
      transform: translate(52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(4)) {
      transform: translate(-52px, 0px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(5)) {
      transform: translate(52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(6)) {
      transform: translate(-52px, 52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(7)) {
      transform: translate(-52px, -52px);
    }
    :host(:focus-within) ::slotted([slot='action']:nth-of-type(8)) {
      transform: translate(52px, 52px);
    }

    footer {
      color: var(
        --oscd-action-icon-footer-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      font-family: var(
        --oscd-action-icon-footer-font-family,
        var(--md-ref-typeface-plain, Roboto)
      );
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      text-align: center;
      align-self: center;
      max-width: 100%;
      direction: rtl;
    }

    :host(:focus-within) footer {
      display: none;
    }

    header {
      color: var(
        --oscd-action-icon-header-color,
        var(--md-sys-color-on-primary, #fff)
      );
      background-color: var(
        --oscd-action-icon-header-container-color,
        var(--md-sys-color-primary, #6750a4)
      );
      font-family: var(
        --oscd-action-icon-header-font-family,
        var(--md-ref-typeface-plain, Roboto)
      );
      font-weight: 500;
      font-size: 1.2em;
      position: absolute;
      text-align: center;
      align-self: center;
      max-width: 100vw;
      padding: 4px 8px;
      border-radius: 4px;
      opacity: 0;
      transition:
        transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 200ms linear;
    }

    :host([secondary]) header {
      background-color: var(
        --oscd-action-icon-secondary-header-container-color,
        var(--md-sys-color-secondary, #625b71)
      );
    }

    :host(:hover) header {
      position: absolute;
      opacity: 1;
      transform: translate(0, -40px);
      --md-elevation-level: 3;
      transition:
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within) header {
      position: absolute;
      opacity: 1;
      --md-elevation-level: 3;
      transition:
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within:not([hideActions])) header {
      transform: translate(0, -80px);
    }

    :host(:focus-within[hideActions]) header {
      transform: translate(0, -40px);
    }
  `}},d([o({type:String})],y.prototype,`label`,void 0),d([o({type:String})],y.prototype,`icon`,void 0),d([o({type:Boolean})],y.prototype,`secondary`,void 0),d([o({type:Boolean})],y.prototype,`highlighted`,void 0),d([o({type:Boolean})],y.prototype,`hideActions`,void 0)})),x=e((()=>{b(),window.customElements.define(`oscd-action-icon`,y)})),S,C,w,T,E,D,O,k,A,j,M;e((()=>{a(),_(),x(),g(),{args:S,argTypes:C,meta:w,template:T}=v({tagName:`oscd-action-icon`,defaultArgs:{label:`Action Icon`,icon:`settings`,width:200,height:300}}),E={...w,title:`Action Controls/Action Icon`,tags:[`autodocs`],argTypes:{...C,width:{control:`number`},height:{control:`number`}}},D={argTypes:C,args:S,render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${T(e,n`<div></div>`)}
    </div>`},O={argTypes:C,args:{...S,secondary:!0},render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${T(e,n`<div></div>`)}
    </div>`},k={argTypes:C,args:{...S,highlighted:!0},render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${T(e,n`<div></div>`)}
    </div>`},A={argTypes:C,args:S,render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${T(e,n` <style>
            button-fart {
              margin-top: -56px;
              margin-left: 8px;
            }
          </style>
          <button slot="action">1</button>
          <button slot="action">2</button>
          <button slot="action">3</button>
          <button slot="action">4</button>
          <button slot="action">5</button>
          <button slot="action">6</button>
          <button slot="action">7</button>
          <button slot="action">8</button>
          <div></div>`)}
    </div>`},j={argTypes:C,args:S,render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${T(e,n`<oscd-icon slot="icon">delete</oscd-icon>
          <div></div>`)}
    </div>`},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  argTypes,
  args,
  render: argz => {
    return html\`<div
      style=\${\`width: \${argz['width']}px; height: \${argz['height']}px;\`}
    >
      <div style="height:100px"></div>
      \${template(argz, html\`<div></div>\`)}
    </div>\`;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    secondary: true
  },
  render: argz => {
    return html\`<div
      style=\${\`width: \${argz['width']}px; height: \${argz['height']}px;\`}
    >
      <div style="height:100px"></div>
      \${template(argz, html\`<div></div>\`)}
    </div>\`;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    highlighted: true
  },
  render: argz => {
    return html\`<div
      style=\${\`width: \${argz['width']}px; height: \${argz['height']}px;\`}
    >
      <div style="height:100px"></div>
      \${template(argz, html\`<div></div>\`)}
    </div>\`;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  argTypes,
  args,
  render: argz => {
    return html\`<div
      style=\${\`width: \${argz['width']}px; height: \${argz['height']}px;\`}
    >
      <div style="height:100px"></div>
      \${template(argz, html\` <style>
            button-fart {
              margin-top: -56px;
              margin-left: 8px;
            }
          </style>
          <button slot="action">1</button>
          <button slot="action">2</button>
          <button slot="action">3</button>
          <button slot="action">4</button>
          <button slot="action">5</button>
          <button slot="action">6</button>
          <button slot="action">7</button>
          <button slot="action">8</button>
          <div></div>\`)}
    </div>\`;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  argTypes,
  args,
  render: argz => {
    return html\`<div
      style=\${\`width: \${argz['width']}px; height: \${argz['height']}px;\`}
    >
      <div style="height:100px"></div>
      \${template(argz, html\`<oscd-icon slot="icon">delete</oscd-icon>
          <div></div>\`)}
    </div>\`;
  }
}`,...j.parameters?.docs?.source}}},M=[`DefaultPrimary`,`Secondary`,`Highlighted`,`WithActionItems`,`WithIconSlot`]}))();export{D as DefaultPrimary,k as Highlighted,O as Secondary,A as WithActionItems,j as WithIconSlot,M as __namedExportsOrder,E as default};