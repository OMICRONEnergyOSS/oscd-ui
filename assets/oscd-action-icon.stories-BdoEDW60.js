import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,g as r,n as i,t as a}from"./lit-LihecQ0E.js";import{_ as o,n as s,r as c,t as l}from"./lit-element-CwUNoIyU.js";import{t as u}from"./decorate-2OK4V6AF.js";import{c as d,l as f}from"./delegate-DVmVP7ly.js";import{o as p,s as m}from"./OscdItem-C8-Le0Md.js";import{i as h}from"./oscd-menu-item-CPuax-lS.js";import{n as g,t as _}from"./getStorybookMeta-DLxhFeaY.js";var v;function y(){return(y=e((()=>{a(),c(),s(),f(),m(),v=class extends l(i){constructor(...e){super(...e),this.secondary=!1,this.highlighted=!1,this.hideActions=!1}static{this.scopedElements={"oscd-elevation":d,"oscd-icon":p}}async firstUpdated(){this.tabIndex=0}renderIcon(){return n`<span class="icon-container">
      <oscd-elevation></oscd-elevation>
      <slot name="icon"
        >${this.icon?n`<oscd-icon>${this.icon}</oscd-icon>`:t}</slot
      ></span
    > `}render(){let e=this.label?n`<header><oscd-elevation></oscd-elevation>${this.label}</header>`:t;return n`${e}
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      ${this.label?n`<footer>${this.label}</footer>`:t}`}static{this.styles=r`
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
  `}},u([o({type:String})],v.prototype,`label`,void 0),u([o({type:String})],v.prototype,`icon`,void 0),u([o({type:Boolean})],v.prototype,`secondary`,void 0),u([o({type:Boolean})],v.prototype,`highlighted`,void 0),u([o({type:Boolean})],v.prototype,`hideActions`,void 0)})))()}function b(){return(b=e((()=>{y(),window.customElements.define(`oscd-action-icon`,v)})))()}var x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{a(),g(),b(),h(),{args:x,argTypes:S,meta:C,template:w}=_({tagName:`oscd-action-icon`,defaultArgs:{label:`Action Icon`,icon:`settings`,width:200,height:300}}),T={...C,title:`Action Controls/Action Icon`,tags:[`autodocs`],argTypes:{...S,width:{control:`number`},height:{control:`number`}}},E={argTypes:S,args:x,render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${w(e,n`<div></div>`)}
    </div>`},D={argTypes:S,args:{...x,secondary:!0},render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${w(e,n`<div></div>`)}
    </div>`},O={argTypes:S,args:{...x,highlighted:!0},render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${w(e,n`<div></div>`)}
    </div>`},k={argTypes:S,args:x,render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${w(e,n` <style>
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
    </div>`},A={argTypes:S,args:x,render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${w(e,n`<oscd-icon slot="icon">delete</oscd-icon>
          <div></div>`)}
    </div>`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`DefaultPrimary`,`Secondary`,`Highlighted`,`WithActionItems`,`WithIconSlot`]})))()}M();export{E as DefaultPrimary,O as Highlighted,D as Secondary,k as WithActionItems,A as WithIconSlot,j as __namedExportsOrder,T as default};