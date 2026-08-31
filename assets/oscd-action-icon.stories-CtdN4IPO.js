import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,f as r,h as i,u as a}from"./static-html-JNahc6jH.js";import{I as o,L as s,_ as c,j as l}from"./list-navigation-helpers-C1Ibc9kd.js";import{n as u,t as d}from"./OscdIcon-BLAkUGod.js";import{n as f,t as p}from"./decorate-DTsqE9Ek.js";import{n as m}from"./oscd-menu-item-CTcQZDW2.js";import{n as h,t as g}from"./getStorybookMeta-BOUCYHqO.js";var _,v=e((()=>{a(),c(),s(),u(),f(),_=class extends o(r){constructor(...e){super(...e),this.secondary=!1,this.highlighted=!1,this.hideActions=!1}static{this.scopedElements={"oscd-icon":d}}async firstUpdated(){this.tabIndex=0}renderIcon(){return n`<span>
      <slot name="icon"
        >${this.icon?n`<oscd-icon>${this.icon}</oscd-icon>`:i}</slot
      ></span
    > `}render(){return n`${this.label?n`<header>${this.label}</header>`:i}
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      ${this.label?n`<footer>${this.label}</footer>`:i}`}static{this.styles=t`
    :host {
      display: flex;
      flex-direction: column;
      outline: none;
    }

    section {
      align-self: center;
    }

    ::slotted([slot='icon']),
    oscd-icon {
      display: block;
      color: var(
        --oscd-action-icon-theme-on-surface,
        var(--md-sys-color-on-surface)
      );
      transition:
        transform 150ms linear,
        box-shadow 200ms linear;
      outline-color: var(
        --oscd-action-icon-theme-primary,
        var(--md-sys-color-primary)
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
        --oscd-action-icon-theme-secondary,
        var(--md-sys-color-secondary)
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

    :host(:focus-within:not([hideActions])) ::slotted([slot='icon']),
    :host(:focus-within:not([hideActions])) oscd-icon {
      transform: scale(0.8);
      transition: all 250ms linear;
      box-shadow:
        0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12),
        0 5px 5px -3px rgba(0, 0, 0, 0.2);
    }

    ::slotted([slot='icon']:hover),
    oscd-icon:hover {
      outline-style: dashed;
      outline-width: 2px;
      transition:
        transform 200ms linear,
        box-shadow 250ms linear;
    }

    ::slotted([slot='action']) {
      color: var(
        --oscd-action-icon-theme-on-surface,
        var(--md-sys-color-on-surface)
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
        --oscd-action-icon-theme-on-surface,
        var(--md-sys-color-on-surface)
      );
      font-family: var(--oscd-action-icon-theme-font, var(--oscd-text-font));
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
        --oscd-action-icon-theme-on-primary,
        var(--md-sys-color-on-primary)
      );
      background-color: var(
        --oscd-action-icon-theme-primary,
        var(--md-sys-color-primary)
      );
      font-family: var(--oscd-action-icon-theme-font, var(--oscd-text-font));
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
        --oscd-action-icon-theme-secondary,
        var(--md-sys-color-secondary)
      );
    }

    :host(:hover) header {
      position: absolute;
      opacity: 1;
      transform: translate(0, -40px);
      box-shadow:
        0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12),
        0 5px 5px -3px rgba(0, 0, 0, 0.2);
      transition:
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 250ms linear;
    }

    :host(:focus-within) header {
      position: absolute;
      opacity: 1;
      box-shadow:
        0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12),
        0 5px 5px -3px rgba(0, 0, 0, 0.2);
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
  `}},p([l({type:String})],_.prototype,`label`,void 0),p([l({type:String})],_.prototype,`icon`,void 0),p([l({type:Boolean})],_.prototype,`secondary`,void 0),p([l({type:Boolean})],_.prototype,`highlighted`,void 0),p([l({type:Boolean})],_.prototype,`hideActions`,void 0)})),y=e((()=>{v(),window.customElements.define(`oscd-action-icon`,_)})),b,x,S,C,w,T,E,D,O,k,A;e((()=>{a(),h(),y(),m(),{args:b,argTypes:x,meta:S,template:C}=g({tagName:`oscd-action-icon`,defaultArgs:{label:`Action Icon`,icon:`settings`,width:200,height:300}}),w={...S,title:`Action Controls/Action Icon`,tags:[`autodocs`],argTypes:{...x,width:{control:`number`},height:{control:`number`}}},T={argTypes:x,args:b,render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${C(e,n`<div></div>`)}
    </div>`},E={argTypes:x,args:{...b,secondary:!0},render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${C(e,n`<div></div>`)}
    </div>`},D={argTypes:x,args:{...b,highlighted:!0},render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${C(e,n`<div></div>`)}
    </div>`},O={argTypes:x,args:b,render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${C(e,n` <style>
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
    </div>`},k={argTypes:x,args:b,render:e=>n`<div
      style=${`width: ${e.width}px; height: ${e.height}px;`}
    >
      <div style="height:100px"></div>
      ${C(e,n`<oscd-icon slot="icon">delete</oscd-icon>
          <div></div>`)}
    </div>`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`DefaultPrimary`,`Secondary`,`Highlighted`,`WithActionItems`,`WithIconSlot`]}))();export{T as DefaultPrimary,D as Highlighted,E as Secondary,O as WithActionItems,k as WithIconSlot,A as __namedExportsOrder,w as default};