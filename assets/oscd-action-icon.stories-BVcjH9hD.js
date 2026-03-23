import{i as b,E as x,x as o,a as w}from"./iframe-BEvFn4o0.js";import{g as $}from"./getStorybookMeta-CkVH9b_1.js";import{S as z,n as s}from"./list-item-styles-BdUABIkZ.js";import{b as S}from"./OscdListItem-qie-E2MX.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-Do6kyNNH.js";import"./OscdMenuItem-BTDFb1kz.js";import"./query-assigned-nodes-DbRHicYy.js";var A=Object.defineProperty,r=(t,y,f,T)=>{for(var n=void 0,g=t.length-1,v;g>=0;g--)(v=t[g])&&(n=v(y,f,n)||n);return n&&A(y,f,n),n};const u=class u extends z(b){constructor(){super(...arguments),this.secondary=!1,this.highlighted=!1,this.hideActions=!1}async firstUpdated(){this.tabIndex=0}renderIcon(){return o`<span>
      <slot name="icon"
        >${this.icon?o`<oscd-icon>${this.icon}</oscd-icon>`:x}</slot
      ></span
    > `}render(){return o`${this.label?o`<header>${this.label}</header>`:x}
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      ${this.label?o`<footer>${this.label}</footer>`:x}`}};u.scopedElements={"oscd-icon":S},u.styles=w`
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
  `;let e=u;r([s({type:String})],e.prototype,"label");r([s({type:String})],e.prototype,"icon");r([s({type:Boolean})],e.prototype,"secondary");r([s({type:Boolean})],e.prototype,"highlighted");r([s({type:Boolean})],e.prototype,"hideActions");window.customElements.define("oscd-action-icon",e);const{args:a,argTypes:i,meta:I,template:c}=$({tagName:"oscd-action-icon",defaultArgs:{label:"Action Icon",icon:"settings",width:200,height:300}}),H={...I,title:"Action Controls/Action Icon",tags:["autodocs"],argTypes:{...i,width:{control:"number"},height:{control:"number"}}},d={argTypes:i,args:a,render:t=>o`<div
      style=${`width: ${t.width}px; height: ${t.height}px;`}
    >
      <div style="height:100px"></div>
      ${c(t,o`<div></div>`)}
    </div>`},h={argTypes:i,args:{...a,secondary:!0},render:t=>o`<div
      style=${`width: ${t.width}px; height: ${t.height}px;`}
    >
      <div style="height:100px"></div>
      ${c(t,o`<div></div>`)}
    </div>`},l={argTypes:i,args:{...a,highlighted:!0},render:t=>o`<div
      style=${`width: ${t.width}px; height: ${t.height}px;`}
    >
      <div style="height:100px"></div>
      ${c(t,o`<div></div>`)}
    </div>`},p={argTypes:i,args:a,render:t=>o`<div
      style=${`width: ${t.width}px; height: ${t.height}px;`}
    >
      <div style="height:100px"></div>
      ${c(t,o` <style>
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
    </div>`},m={argTypes:i,args:a,render:t=>o`<div
      style=${`width: ${t.width}px; height: ${t.height}px;`}
    >
      <div style="height:100px"></div>
      ${c(t,o`<oscd-icon slot="icon">delete</oscd-icon>
          <div></div>`)}
    </div>`};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const M=["DefaultPrimary","Secondary","Highlighted","WithActionItems","WithIconSlot"];export{d as DefaultPrimary,l as Highlighted,h as Secondary,p as WithActionItems,m as WithIconSlot,M as __namedExportsOrder,H as default};
