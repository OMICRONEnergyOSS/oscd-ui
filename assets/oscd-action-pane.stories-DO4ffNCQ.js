import{i as $,E as g,x as o,a as b}from"./iframe-CVDob4yH.js";import{S as f,b as x,n as l}from"./list-item-styles-D88BytE0.js";import{b as w}from"./OscdListItem-B18tstYX.js";import{g as L}from"./getStorybookMeta-BoCODc77.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-BJL7o6s0.js";import"./OscdMenuItem-wP2ife6f.js";import"./query-assigned-nodes-NHYQZ91Q.js";var E=Object.defineProperty,s=(n,e,i,t)=>{for(var c=void 0,h=n.length-1,v;h>=0;h--)(v=n[h])&&(c=v(e,i,c)||c);return c&&E(e,i,c),c};function m(n,e){const i=n.nodeType===Node.ELEMENT_NODE?n.closest(e):null;if(i)return i;const t=n.getRootNode();return t instanceof ShadowRoot?m(t.host,e):null}const p=class p extends f($){constructor(){super(...arguments),this.secondary=!1,this.highlighted=!1,this.level=1}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.parentPane=m(this.parentNode,"oscd-action-pane")??void 0}get resolvedLevel(){const e=this.parentPane?this.parentPane.resolvedLevel+1:this.level;return Math.floor(e)}renderHeader(){const e=o`<span
        ><slot name="icon"
          >${this.icon?o`<oscd-icon>${this.icon}</oscd-icon>`:g}</slot
        ></span
      >
      ${this.label??g}
      <nav>
        <slot name="action"></slot>
      </nav>`,i=Math.floor(Math.max(this.resolvedLevel,1)),t=this.label??"";switch(i){case 1:return o`<h1 title="${t}">${e}</h1>`;case 2:return o`<h2 title="${t}">${e}</h2>`;case 3:return o`<h3 title="${t}">${e}</h3>`;default:return o`<h4 title="${t}">${e}</h4>`}}render(){return o`<section
      class="${x({secondary:this.secondary,highlighted:this.highlighted,contrasted:this.resolvedLevel%2===0})}"
    >
      ${this.renderHeader()}
      <div><slot></slot></div>
    </section>`}};p.scopedElements={"oscd-icon":w},p.styles=b`
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
  `;let a=p;s([l({type:String})],a.prototype,"label");s([l({type:String})],a.prototype,"icon");s([l({type:Boolean})],a.prototype,"secondary");s([l({type:Boolean})],a.prototype,"highlighted");s([l({type:Number})],a.prototype,"level");window.customElements.define("oscd-action-pane",a);const{args:u,argTypes:y,meta:S}=L({tagName:"oscd-action-pane"}),O={title:"Action Controls/Action Pane",tags:["autodocs"],...S},d={argTypes:y,args:u,render:({label:n,icon:e})=>o`<div>
      <oscd-action-pane .label=${n} .icon=${e} highlighted .level=${1}>
        level 1, title, custom icon, highlighted
        <oscd-icon slot="icon">delete</oscd-icon>
        <oscd-action-pane .icon=${e} .label=${"label"} secondary>
          set level 1, icon, secondary level below the rest
          <oscd-action-pane .label=${n}>
            level 2 selected
            <oscd-action-pane
              .label=${n}
              .icon=${e}
              secondary
              highlighted
            >
              level 3, secondary highlighted
              <oscd-action-pane> level 4 </oscd-action-pane>
            </oscd-action-pane>
          </oscd-action-pane>
          <oscd-action-pane
            .label=${n}
            .icon=${e}
            secondary
          ></oscd-action-pane>
        </oscd-action-pane>
      </oscd-action-pane>
      <div></div>
    </div>`},r={argTypes:y,args:u,render:({label:n,icon:e})=>o`<div>
      <oscd-action-pane .label=${n} .icon=${e} highlighted .level=${2}>
        level 1, title, custom icon, highlighted
        <oscd-icon slot="icon">delete</oscd-icon>
        <oscd-action-pane .icon=${e} .label=${"label"} secondary>
          level 2, icon, secondary level below the rest
          <oscd-action-pane .label=${n}>
            level 3 selected
            <oscd-action-pane
              .label=${n}
              .icon=${e}
              secondary
              highlighted
            >
              level 4, secondary highlighted
              <oscd-action-pane> level 4 </oscd-action-pane>
            </oscd-action-pane>
          </oscd-action-pane>
          <oscd-action-pane
            .label=${n}
            .icon=${e}
            secondary
            level="4"
          ></oscd-action-pane>
        </oscd-action-pane>
      </oscd-action-pane>
      <div></div>
    </div>`};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const B=["CalculatedLevels","DefinedLevels"];export{d as CalculatedLevels,r as DefinedLevels,B as __namedExportsOrder,O as default};
