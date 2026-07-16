import{i as $,E as g,x as n,a as b}from"./iframe-CzfB892c.js";import{S as f,b as x,n as l}from"./list-navigation-helpers-CWtHtHq2.js";import{O as w}from"./OscdIcon-D6gSxZ3c.js";import{g as L}from"./getStorybookMeta-DOS5upft.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-Bv3ZIOVO.js";import"./oscd-menu-item-Bv29e9fa.js";import"./OscdMenuItem-DA-1vXHl.js";import"./query-assigned-nodes-CLgeST5H.js";import"./menuItemController-B_J_C6eD.js";import"./oscd-filled-button-DQw484Ye.js";import"./OscdList-ZIhvBfgq.js";import"./oscd-list-item-C0ScTv6k.js";import"./OscdListItem-aUMQlSYk.js";import"./list-item-styles-Bz0C6iu4.js";var E=Object.defineProperty,s=(o,e,i,t)=>{for(var c=void 0,h=o.length-1,v;h>=0;h--)(v=o[h])&&(c=v(e,i,c)||c);return c&&E(e,i,c),c};function m(o,e){const i=o.nodeType===Node.ELEMENT_NODE?o.closest(e):null;if(i)return i;const t=o.getRootNode();return t instanceof ShadowRoot?m(t.host,e):null}const p=class p extends f($){constructor(){super(...arguments),this.secondary=!1,this.highlighted=!1,this.level=1}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.parentPane=m(this.parentNode,"oscd-action-pane")??void 0}get resolvedLevel(){const e=this.parentPane?this.parentPane.resolvedLevel+1:this.level;return Math.floor(e)}renderHeader(){const e=n`<span
        ><slot name="icon"
          >${this.icon?n`<oscd-icon>${this.icon}</oscd-icon>`:g}</slot
        ></span
      >
      ${this.label??g}
      <nav>
        <slot name="action"></slot>
      </nav>`,i=Math.floor(Math.max(this.resolvedLevel,1)),t=this.label??"";switch(i){case 1:return n`<h1 title="${t}">${e}</h1>`;case 2:return n`<h2 title="${t}">${e}</h2>`;case 3:return n`<h3 title="${t}">${e}</h3>`;default:return n`<h4 title="${t}">${e}</h4>`}}render(){return n`<section
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
  `;let a=p;s([l({type:String})],a.prototype,"label");s([l({type:String})],a.prototype,"icon");s([l({type:Boolean})],a.prototype,"secondary");s([l({type:Boolean})],a.prototype,"highlighted");s([l({type:Number})],a.prototype,"level");window.customElements.define("oscd-action-pane",a);const{args:u,argTypes:y,meta:S}=L({tagName:"oscd-action-pane"}),z={title:"Action Controls/Action Pane",tags:["autodocs"],...S},d={argTypes:y,args:u,render:({label:o,icon:e})=>n`<div>
      <oscd-action-pane .label=${o} .icon=${e} highlighted .level=${1}>
        level 1, title, custom icon, highlighted
        <oscd-icon slot="icon">delete</oscd-icon>
        <oscd-action-pane .icon=${e} .label=${"label"} secondary>
          set level 1, icon, secondary level below the rest
          <oscd-action-pane .label=${o}>
            level 2 selected
            <oscd-action-pane
              .label=${o}
              .icon=${e}
              secondary
              highlighted
            >
              level 3, secondary highlighted
              <oscd-action-pane> level 4 </oscd-action-pane>
            </oscd-action-pane>
          </oscd-action-pane>
          <oscd-action-pane
            .label=${o}
            .icon=${e}
            secondary
          ></oscd-action-pane>
        </oscd-action-pane>
      </oscd-action-pane>
      <div></div>
    </div>`},r={argTypes:y,args:u,render:({label:o,icon:e})=>n`<div>
      <oscd-action-pane .label=${o} .icon=${e} highlighted .level=${2}>
        level 1, title, custom icon, highlighted
        <oscd-icon slot="icon">delete</oscd-icon>
        <oscd-action-pane .icon=${e} .label=${"label"} secondary>
          level 2, icon, secondary level below the rest
          <oscd-action-pane .label=${o}>
            level 3 selected
            <oscd-action-pane
              .label=${o}
              .icon=${e}
              secondary
              highlighted
            >
              level 4, secondary highlighted
              <oscd-action-pane> level 4 </oscd-action-pane>
            </oscd-action-pane>
          </oscd-action-pane>
          <oscd-action-pane
            .label=${o}
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
}`,...r.parameters?.docs?.source}}};const A=["CalculatedLevels","DefinedLevels"];export{d as CalculatedLevels,r as DefinedLevels,A as __namedExportsOrder,z as default};
