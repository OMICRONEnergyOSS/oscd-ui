import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,g as r,n as i,t as a}from"./lit-LihecQ0E.js";import{_ as o,n as s,r as c,t as l}from"./lit-element-CwUNoIyU.js";import{t as u}from"./decorate-2OK4V6AF.js";import{m as ee,p as te,v as d,y as ne}from"./form-submitter-EPys99VO.js";import{o as re,s as ie}from"./OscdItem-C8-Le0Md.js";import{i as ae}from"./oscd-menu-item-CPuax-lS.js";import{n as oe,t as se}from"./getStorybookMeta-DLxhFeaY.js";import{n as ce,t as le}from"./OscdCheckbox-CuR2HzBm.js";import{t as ue}from"./oscd-outlined-text-field-CdexiceC.js";import{n as f,t as p}from"./OscdTreeItem-CUb71WPJ.js";function m(e){return e.children===void 0?`unknown`:e.children.length>0?`branch`:`leaf`}var h,g,_;function v(){return(v=e((()=>{a(),c(),s(),ce(),ne(),ie(),ee(),f(),h=({node:e,id:t,selected:r,active:i,disabled:a})=>n`<oscd-tree-item
    ?selected=${r}
    ?active=${i}
    ?disabled=${a}
  >
    <span slot="headline">${`label`in e?String(e.label):t}</span>
  </oscd-tree-item>`,g=`/`,_=class extends l(i){constructor(...e){super(...e),this.data=[],this.selectedIds=[],this.expandedIds=[],this.selectionMode=`none`,this.collapseIcon=`chevron_right`,this.expandIcon=`expand_more`,this.togglePosition=`leading`,this.activeId=null,this.scrollActiveIntoView=!0,this.handleTreeKeyDown=e=>{if(e.target!==this)return;let t=this.navigableRows(),n=t.findIndex(e=>e.id===this.activeId);switch(e.key){case`ArrowDown`:e.preventDefault(),this.navigateNext(t,n);break;case`ArrowUp`:e.preventDefault(),this.navigatePrevious(t,n);break;case`Home`:e.preventDefault(),this.activeId=this.getFirstNodeId();break;case`End`:e.preventDefault(),this.activeId=this.getLastNodeId();break;case`Enter`:{let r=t[n];r&&(e.preventDefault(),this.toggleSelection(r));break}}}}static{this.scopedElements={"oscd-checkbox":le,"oscd-focus-ring":d,"oscd-icon":re,"oscd-ripple":te,"oscd-tree-item":p}}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.addEventListener(`keydown`,this.handleTreeKeyDown)}disconnectedCallback(){this.removeEventListener(`keydown`,this.handleTreeKeyDown),super.disconnectedCallback()}willUpdate(e){e.has(`activeId`)&&this.activeId!==null&&(this.navigableRows().some(e=>e.id===this.activeId)||(console.warn(`Ignoring invalid oscd-tree activeId: ${this.activeId}`),this.activeId=e.get(`activeId`)??null))}getFirstNodeId(){return this.navigableRows()[0]?.id??null}getLastNodeId(){let e=this.navigableRows();return e[e.length-1]?.id??null}expand(e){this.expandedIds.includes(e)||this.setExpandedIds([...this.expandedIds,e])}collapse(e){this.expandedIds.includes(e)&&this.setExpandedIds(this.expandedIds.filter(t=>t!==e))}toggle(e){let t=this.visibleRows().find(t=>t.id===e);t&&this.toggleExpansion(t)}rowId(e,t){return e.id??this.getNodeId?.(e,t)??t.join(g)}visibleRows(){let e=new Set(this.expandedIds),t=[],n=(r,i,a,o)=>{if(!r)return;let s=r.length;r.forEach((r,c)=>{let l=[...o,c],u=this.rowId(r,l);t.push({node:r,id:u,htmlId:`tree-row-${t.length}`,level:i,parentIds:a,ariaPositionInSet:c+1,ariaSetSize:s}),e.has(u)&&r.children&&n(r.children,i+1,[...a,u],l)})};return n(this.data,1,[],[]),t}navigableRows(){return this.visibleRows().filter(e=>!this.isRowDisabled(e))}renderContext(e){let t=this.selectedIds.includes(e.id);return{node:e.node,id:e.id,level:e.level,expanded:this.expandedIds.includes(e.id),selected:t,active:this.activeId===e.id,childrenState:m(e.node),selectable:this.selectionMode!==`none`&&this.isRowSelectable(e),disabled:this.isRowDisabled(e)}}accessibleLabel(e){return this.getNodeLabel?this.getNodeLabel(e.node,e.id):`label`in e.node&&e.node.label!==void 0?String(e.node.label):e.id}isRowSelectable(e){return!this.isSelectable||this.isSelectable(e.node)}isRowDisabled(e){return this.isDisabled?this.isDisabled(e.node):!1}setExpandedIds(e){this.expandedIds=e,this.dispatchEvent(new CustomEvent(`expanded-ids-changed`,{detail:{expandedIds:e}}))}setSelectedIds(e,t){let n=this.selectedIds;this.selectedIds=e,this.dispatchEvent(new CustomEvent(`selected-ids-changed`,{detail:{selectedIds:e,previousSelectedIds:n,targetNode:t}}))}fireNodeEvent(e,t,n){let r=new CustomEvent(e,{bubbles:!0,cancelable:n?.cancelable??!1,detail:{node:t.node,id:t.id}});return this.dispatchEvent(r)}toggleExpansion(e){this.isRowDisabled(e)||m(e.node)===`leaf`||(this.expandedIds.includes(e.id)?(this.setExpandedIds(this.expandedIds.filter(t=>t!==e.id)),this.fireNodeEvent(`node-collapse`,e),this.fireNodeEvent(`node-toggle`,e)):this.fireNodeEvent(`node-expand`,e,{cancelable:!0})&&(this.setExpandedIds([...this.expandedIds,e.id]),this.fireNodeEvent(`node-toggle`,e)))}toggleSelection(e){if(this.selectionMode===`none`||this.isRowDisabled(e)||!this.isRowSelectable(e))return;if(this.selectionMode===`single`){this.setSelectedIds([e.id],e.node);return}let t=this.selectedIds.includes(e.id);this.setSelectedIds(t?this.selectedIds.filter(t=>t!==e.id):[...this.selectedIds,e.id],e.node)}activateRow(e){this.activeId=e.id,this.fireNodeEvent(`node-click`,e)}handleRowClick(e,t){this.isRowDisabled(e)?t.preventDefault():(this.activateRow(e),m(e.node)===`leaf`?this.toggleSelection(e):this.toggleExpansion(e))}handleToggleClick(e,t){t.stopPropagation(),this.activeId=e.id,this.toggleExpansion(e)}handleKeyDown(e,t){t.stopPropagation();let n=this.navigableRows(),r=n.findIndex(t=>t.id===e.id);switch(t.key){case`ArrowDown`:t.preventDefault(),this.navigateNext(n,r);break;case`ArrowUp`:t.preventDefault(),this.navigatePrevious(n,r);break;case`Home`:t.preventDefault(),this.activeId=this.getFirstNodeId();break;case`End`:t.preventDefault(),this.activeId=this.getLastNodeId();break;case`ArrowRight`:t.preventDefault(),this.stepIn(e,n,r);break;case`ArrowLeft`:t.preventDefault(),this.stepOut(e);break;case`Enter`:t.preventDefault(),this.activeId=e.id,this.toggleSelection(e);break;case` `:t.preventDefault(),this.toggleSelection(e)}}navigateNext(e,t){let n=e[t<0?0:t+1];n?(this.activeId=n.id,this.dispatchEvent(new CustomEvent(`active-changed`,{detail:{activeId:n.id}}))):this.dispatchEvent(new CustomEvent(`navigation-boundary`,{detail:{direction:`last`}}))}navigatePrevious(e,t){let n=e[t<0?e.length-1:t-1];n?(this.activeId=n.id,this.dispatchEvent(new CustomEvent(`active-changed`,{detail:{activeId:n.id}}))):this.dispatchEvent(new CustomEvent(`navigation-boundary`,{detail:{direction:`first`}}))}stepIn(e,t,n){if(m(e.node)===`leaf`)return;if(!this.expandedIds.includes(e.id)){this.toggleExpansion(e);return}let r=t[n+1];r?.parentIds[r.parentIds.length-1]===e.id&&(this.activeId=r.id)}stepOut(e){if(this.expandedIds.includes(e.id)){this.toggleExpansion(e);return}let t=e.parentIds[e.parentIds.length-1];t&&(this.activeId=t)}renderSelection(e){if(this.selectionMode!==`multiple`||!this.isRowSelectable(e))return t;let r=this.selectedIds.includes(e.id);return n`<span
      part="selection"
      class="selection"
      aria-hidden="true"
      data-selected=${r?`true`:`false`}
      ><oscd-checkbox
        tabindex="-1"
        ?checked=${r}
        ?disabled=${this.isRowDisabled(e)}
      ></oscd-checkbox
    ></span>`}renderToggle(e,r){let i=r.childrenState!==`leaf`,a=r.expanded;if(!i&&this.renderLeafAccessory){let e=this.renderLeafAccessory(r);if(e!==t&&e!=null&&e!==!1)return n`<div
          part="accessory"
          class="accessory"
          @click=${e=>e.stopPropagation()}
          @keydown=${e=>this.handleAccessoryKeydown(e)}
        >
          ${e}
        </div>`}return n`<button
      part="toggle"
      class="toggle ${i?``:`leaf-toggle`}"
      ?disabled=${!i||r.disabled}
      aria-label=${a?`Collapse`:`Expand`}
      tabindex="-1"
      @click=${t=>this.handleToggleClick(e,t)}
    >
      ${i?n`<oscd-icon
              >${a?this.expandIcon:this.collapseIcon}</oscd-icon
            >`:t}
    </button>`}handleAccessoryKeydown(e){(e.key===`Enter`||e.key===` `||e.key===`Spacebar`)&&e.stopPropagation()}renderRow(e){let r=this.renderContext(e),i=r.childrenState,a=r.selected,o=r.disabled,s=r.active;return n`<div
      id=${e.htmlId}
      part="row"
      class="row"
      role="treeitem"
      tabindex=${s?`0`:`-1`}
      aria-level=${e.level}
      aria-posinset=${e.ariaPositionInSet}
      aria-setsize=${e.ariaSetSize}
      aria-label=${this.accessibleLabel(e)}
      aria-expanded=${i===`leaf`?t:r.expanded}
      aria-selected=${r.selectable?a:t}
      aria-disabled=${o?`true`:t}
      data-active=${s?`true`:`false`}
      data-selected=${a?`true`:`false`}
      data-selection-mode=${this.selectionMode}
      data-disabled=${o?`true`:`false`}
      style=${`--_level: ${e.level};`}
      @click=${t=>this.handleRowClick(e,t)}
      @keydown=${t=>this.handleKeyDown(e,t)}
    >
      <oscd-ripple for=${e.htmlId} ?disabled=${o}></oscd-ripple>
      <oscd-focus-ring for=${e.htmlId} inward></oscd-focus-ring>
      <span part="indent" class="indent" aria-hidden="true"></span>
      ${this.togglePosition===`leading`?this.renderToggle(e,r):t}
      ${this.renderSelection(e)}
      <span part="content" class="content"
        >${(this.renderItem??h)(r)}</span
      >
      ${this.togglePosition===`trailing`?this.renderToggle(e,r):t}
    </div>`}updated(){if(this.renderRoot instanceof ShadowRoot&&this.renderRoot.activeElement?.closest(`.accessory`))return;let e=this.renderRoot.querySelector(`.row[data-active="true"]`);e&&this.matches(`:focus-within`)&&(e.focus(),this.scrollActiveIntoView&&e.scrollIntoView({block:`nearest`,inline:`nearest`}))}render(){let e=this.visibleRows();return n`<div part="tree" class="tree" role="tree">
      ${e.map(e=>this.renderRow(e))}
    </div>`}static{this.styles=r`
    :host {
      display: block;
      /*
       * Allow the tree to shrink below its content's intrinsic (max-content)
       * width when placed in a flex or grid container. Without this, a single
       * long row label leaks its max-content width up the layout chain and
       * sizes every row to it, pushing trailing toggles/accessories out of a
       * width-constrained parent and defeating the per-row ellipsis. Keeping
       * this on the host makes the tree a well-behaved flex/grid child by
       * default for every consumer.
       */
      min-width: 0;
      outline: none;
    }

    .tree {
      display: flex;
      flex-direction: column;
      min-width: 0;
      color: var(--oscd-tree-color, var(--md-sys-color-on-surface, #1d1b20));
      font-family: var(
        --oscd-tree-font-family,
        var(--md-sys-typescale-body-large-font, Roboto)
      );
      gap: var(--oscd-tree-row-gap, 0);
    }

    .row {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-width: 0;
      min-height: var(--oscd-tree-row-height, 44px);
      border-radius: var(
        --oscd-tree-row-shape,
        var(--md-sys-shape-corner-small, 4px)
      );
      color: inherit;
      cursor: default;
      outline: none;
      padding-inline-start: var(--oscd-tree-row-padding-start, 16px);
      padding-inline-end: var(--oscd-tree-row-padding-end, 8px);
      user-select: none;
    }

    :host(:focus-within) .row[data-active='true'] {
      outline: var(--oscd-tree-row-active-border-width, 1px) solid
        var(--oscd-tree-row-active-border-color, currentColor);
      outline-offset: -1px;
      color: var(--oscd-tree-row-active-text-color, inherit);
    }

    oscd-ripple,
    oscd-focus-ring {
      border-radius: var(
        --oscd-tree-row-shape,
        var(--md-sys-shape-corner-small, 4px)
      );
    }

    oscd-focus-ring {
      z-index: 1;
      --md-focus-ring-shape: var(
        --oscd-tree-row-shape,
        var(--md-sys-shape-corner-small, 4px)
      );
    }

    .row[data-disabled='true'] {
      cursor: default;
    }

    .row[data-selection-mode='single'][data-selected='true'] {
      color: var(
        --oscd-tree-row-selected-text-color,
        var(--md-sys-color-on-primary, #fff)
      );
      background: var(
        --oscd-tree-row-selected-color,
        var(--md-sys-color-primary, #6750a4)
      );
    }

    .row[data-selection-mode='single'][data-selected='true']:hover:not(
        [data-disabled='true']
      ) {
      background: var(
        --oscd-tree-row-selected-hover-color,
        var(
          --oscd-tree-row-selected-color,
          var(--md-sys-color-primary, #6750a4)
        )
      );
    }

    /*
     * When a selected row is also the keyboard-active row while the tree has
     * focus, the ":host(:focus-within) .row[data-active='true']" rule above
     * has higher specificity than the selected-row rule and would otherwise
     * win the cascade for "color", overriding the selected text color with
     * "inherit" while leaving the selected background untouched. Restate the
     * selected text color here, at higher specificity than both rules, so a
     * focused+selected row keeps its selected-background/selected-foreground
     * pairing while still showing the active outline.
     */
    :host(:focus-within)
      .row[data-selection-mode='single'][data-selected='true'][data-active='true'] {
      color: var(
        --oscd-tree-row-selected-text-color,
        var(--md-sys-color-on-primary, #fff)
      );
    }

    .indent {
      flex: 0 0
        calc(max(0, var(--_level) - 1) * var(--oscd-tree-indent-step, 24px));
      inline-size: calc(
        max(0, var(--_level) - 1) * var(--oscd-tree-indent-step, 24px)
      );
    }

    .toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 var(--oscd-tree-toggle-size, 32px);
      inline-size: var(--oscd-tree-toggle-size, 32px);
      block-size: var(--oscd-tree-toggle-size, 32px);
      border: 0;
      border-radius: 50%;
      padding: 0;
      color: inherit;
      background: transparent;
      cursor: pointer;
    }

    .leaf-toggle {
      flex-basis: var(
        --oscd-tree-leaf-toggle-size,
        var(--oscd-tree-toggle-size, 32px)
      );
      inline-size: var(
        --oscd-tree-leaf-toggle-size,
        var(--oscd-tree-toggle-size, 32px)
      );
    }

    .toggle:disabled {
      cursor: default;
      opacity: 0;
    }

    :host([toggle-position='trailing']) .toggle {
      margin-inline-start: var(--oscd-tree-trailing-toggle-gap, 4px);
    }

    :host([toggle-position='trailing']) .leaf-toggle {
      margin-inline-start: var(
        --oscd-tree-leaf-toggle-gap,
        var(--oscd-tree-trailing-toggle-gap, 4px)
      );
    }

    .accessory {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 var(--oscd-tree-toggle-size, 32px);
      inline-size: var(--oscd-tree-toggle-size, 32px);
      block-size: var(--oscd-tree-toggle-size, 32px);
      /*
       * Accessory visibility at rest. Defaults to fully opaque so accessories
       * are always shown; consumers can set --oscd-tree-accessory-rest-opacity
       * to 0 for a reveal-on-interaction pattern. Row hover and keyboard focus
       * within the accessory always force it fully visible so it stays
       * discoverable and keyboard-accessible.
       */
      opacity: var(--oscd-tree-accessory-rest-opacity, 1);
      transition: opacity 0.1s ease-in-out;
    }

    .row:hover .accessory,
    .accessory:focus-within {
      opacity: 1;
    }

    :host([toggle-position='trailing']) .accessory {
      margin-inline-start: var(--oscd-tree-trailing-toggle-gap, 4px);
    }

    .accessory button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--oscd-tree-toggle-size, 32px);
      block-size: var(--oscd-tree-toggle-size, 32px);
      border: 0;
      border-radius: 50%;
      padding: 0;
      color: inherit;
      background: transparent;
      cursor: pointer;
    }

    .selection {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 var(--oscd-tree-selection-size, 48px);
      inline-size: var(--oscd-tree-selection-size, 48px);
      pointer-events: none;
    }

    .selection oscd-checkbox {
      pointer-events: none;
      --md-focus-ring-width: 0;
      --md-ripple-hover-opacity: 0;
      --md-ripple-pressed-opacity: 0;
    }

    .content {
      display: block;
      flex: 1 1 auto;
      min-width: 0;
    }
  `}},u([o({attribute:!1})],_.prototype,`data`,void 0),u([o({attribute:!1})],_.prototype,`selectedIds`,void 0),u([o({attribute:!1})],_.prototype,`expandedIds`,void 0),u([o({attribute:!1})],_.prototype,`renderItem`,void 0),u([o({attribute:!1})],_.prototype,`renderLeafAccessory`,void 0),u([o({attribute:!1})],_.prototype,`getNodeId`,void 0),u([o({attribute:!1})],_.prototype,`getNodeLabel`,void 0),u([o({attribute:!1})],_.prototype,`isSelectable`,void 0),u([o({attribute:!1})],_.prototype,`isDisabled`,void 0),u([o()],_.prototype,`selectionMode`,void 0),u([o({attribute:`collapse-icon`})],_.prototype,`collapseIcon`,void 0),u([o({attribute:`expand-icon`})],_.prototype,`expandIcon`,void 0),u([o({reflect:!0,attribute:`toggle-position`})],_.prototype,`togglePosition`,void 0),u([o({attribute:!1})],_.prototype,`activeId`,void 0),u([o({type:Boolean,attribute:`scroll-active-into-view`})],_.prototype,`scrollActiveIntoView`,void 0)})))()}var y;function b(){return(b=e((()=>{v(),y=class extends _{}})))()}function x(){return(x=e((()=>{f(),customElements.define(`oscd-tree-item`,p)})))()}function S(){return(S=e((()=>{b(),x(),customElements.define(`oscd-tree`,y)})))()}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{a(),oe(),S(),ae(),ue(),{action:C}=__STORYBOOK_MODULE_ACTIONS__,{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,{args:T,argTypes:E,meta:D}=se({tagName:`oscd-tree`}),O=[{id:`ied:PUB_A`,label:`PUB_A`,description:`Publisher IED`,kind:`ied`,children:[{id:`ap:PUB_A/AP1`,label:`AP1`,description:`Access point`,kind:`access-point`,children:[{id:`ld:PUB_A/AP1/LD_A`,label:`LD_A`,description:`Logical device`,kind:`l-device`,children:[{id:`ln:PUB_A|AP1|LD_A||LLN0|`,label:`LLN0`,description:`Logical node zero`,kind:`logical-node`,children:[]},{id:`ln:PUB_A|AP1|LD_A||TCTR|1`,label:`TCTR1`,description:`Current transformer`,kind:`logical-node`,children:[]},{id:`ln:PUB_A|AP1|LD_A||XCBR|1`,label:`XCBR1`,description:`Circuit breaker`,kind:`logical-node`,children:[]}]}]}]},{id:`ied:PUB_B`,label:`PUB_B`,description:`Publisher IED`,kind:`ied`,children:[{id:`ap:PUB_B/AP1`,label:`AP1`,description:`Access point`,kind:`access-point`,children:[{id:`ld:PUB_B/AP1/LD_B`,label:`LD_B`,description:`Logical device`,kind:`l-device`,children:[{id:`ln:PUB_B|AP1|LD_B||LLN0|`,label:`LLN0`,description:`Logical node zero`,kind:`logical-node`,children:[]},{id:`ln:PUB_B|AP1|LD_B||TCTR|1`,label:`TCTR1`,description:`Current transformer`,kind:`logical-node`,children:[]}]}]}]}],k=[...O,{id:`ied:REMOTE`,label:`REMOTE`,description:`Children are not loaded yet`,kind:`ied`}],A=e=>{switch(e){case`ied`:return`reportIcon`;case`access-point`:return`lan`;case`l-device`:return`dns`;case`logical-node`:return`article`;default:return`circle`}},j=({node:e,selected:t,active:r,disabled:i})=>n`<oscd-tree-item
    ?selected=${t}
    ?active=${r}
    ?disabled=${i}
  >
    <oscd-icon slot="start">${A(e.kind)}</oscd-icon>
    <span slot="headline">${e.label}</span>
    <span slot="supporting-text">${e.description}</span>
  </oscd-tree-item>`,M=({node:e,childrenState:t,selected:r,disabled:i})=>n`<oscd-tree-item ?selected=${r} ?disabled=${i}>
    <span slot="headline">${e.label}</span>
    <span slot="supporting-text">${e.kind} / ${t}</span>
  </oscd-tree-item>`,N=({node:e,selected:t,active:r,disabled:i})=>n`<oscd-tree-item
    ?selected=${t}
    ?active=${r}
    ?disabled=${i}
  >
    ${e.kind===`ied`?n`<oscd-icon slot="start">${A(e.kind)}</oscd-icon>`:``}
    <span slot="headline">${e.label}</span>
    <span slot="supporting-text">${e.description}</span>
  </oscd-tree-item>`,P=(e,t)=>{let n=t.trim().toLowerCase();return!n||[e.label,e.description,e.kind,e.id].filter(e=>!!e).some(e=>e.toLowerCase().includes(n))},F=(e,t)=>{let n=t.trim();return n?e.map(e=>{let t=e.children?F(e.children,n):e.children;if(!P(e,n)&&(!t||t.length===0))return;let r={...e};return e.children!==void 0&&(r.children=t),r}).filter(e=>!!e):e},I=e=>{C(`selected-ids-changed`)(e.detail.selectedIds)},L=n`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M16.391 14.4188L16.8773 16.2406L16.2096 17.3947L13.3244 15.7253L11.3211 19.1876L10.4102 19.4307L10.1671 18.5198L12.1703 15.0576L9.28512 13.3882L9.95287 12.2341L11.7747 11.7478L14.1118 7.70854L13.5348 7.37467L14.2025 6.22059L19.9729 9.55934L19.3052 10.7134L18.7281 10.3795L16.391 14.4188ZM11.5974 13.1857L15.2328 15.2891L14.9531 14.2415L17.574 9.71179L15.2659 8.37629L12.645 12.906L11.5974 13.1857Z"
    fill="currentColor"
  />
</svg>`,R=n`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M16.4379 14.5274L16.9273 16.3484L16.2615 17.5036L13.3735 15.8391L11.3761 19.3047L10.4656 19.5494L10.2209 18.6389L12.2183 15.1733L9.33034 13.5088L9.99614 12.3536L11.8171 11.8642L14.1475 7.821L13.5699 7.4881L14.2357 6.3329L20.0117 9.66194L19.3459 10.8171L18.7683 10.4842L16.4379 14.5274Z"
    fill="currentColor"
  />
</svg>`,z=e=>{C(`expanded-ids-changed`)(e.detail.expandedIds)},B={...D,title:`Tree / Tree`,tags:[`autodocs`]},V={argTypes:E,args:{...T,".data":O,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`],".renderItem":j},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .renderItem=${e[`.renderItem`]}
        @expanded-ids-changed=${z}
      ></oscd-tree>
    </div>`},H={argTypes:E,args:{...T,".data":O,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`,`ld:PUB_A/AP1/LD_A`],".selectedIds":[`ln:PUB_A|AP1|LD_A||TCTR|1`],".renderItem":j,selectionMode:`multiple`},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${e.selectionMode}
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .selectedIds=${e[`.selectedIds`]}
        .renderItem=${e[`.renderItem`]}
        .isSelectable=${e=>e.kind===`logical-node`}
        @selected-ids-changed=${I}
        @expanded-ids-changed=${z}
      ></oscd-tree>
    </div>`},U={argTypes:E,args:{...T,".data":O,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`,`ld:PUB_A/AP1/LD_A`],".selectedIds":[`ln:PUB_A|AP1|LD_A||TCTR|1`],".renderItem":j,selectionMode:`single`},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${e.selectionMode}
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .selectedIds=${e[`.selectedIds`]}
        .renderItem=${e[`.renderItem`]}
        .isSelectable=${e=>e.kind===`logical-node`}
        @selected-ids-changed=${I}
        @expanded-ids-changed=${z}
      ></oscd-tree>
    </div>`},W={argTypes:E,args:{...T,".data":O,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`,`ld:PUB_A/AP1/LD_A`],".selectedIds":[`ln:PUB_A|AP1|LD_A||TCTR|1`],".renderItem":j,selectionMode:`multiple`},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${e.selectionMode}
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .selectedIds=${e[`.selectedIds`]}
        .renderItem=${e[`.renderItem`]}
        .isSelectable=${e=>e.kind===`logical-node`}
        .isDisabled=${e=>e.kind===`logical-node`&&e.id!==`ln:PUB_A|AP1|LD_A||TCTR|1`}
        @selected-ids-changed=${I}
        @expanded-ids-changed=${z}
      ></oscd-tree>
    </div>`},G={argTypes:E,args:{...T,".data":k,".expandedIds":[`ied:PUB_A`],".renderItem":M},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .renderItem=${e[`.renderItem`]}
        @node-expand=${e=>{let t=e;t.detail.id===`ied:REMOTE`&&(t.preventDefault(),C(`lazy node-expand prevented`)(t.detail.id))}}
        @expanded-ids-changed=${z}
      ></oscd-tree>
    </div>`},K={argTypes:E,args:{...T,".data":O.map(({id:e,...t})=>t),".expandedIds":[`0`,`0/0`],".renderItem":j},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .renderItem=${e[`.renderItem`]}
        @expanded-ids-changed=${z}
      ></oscd-tree>
    </div>`},q={argTypes:{...E,togglePosition:{name:`toggle-position`,control:{type:`inline-radio`},options:[`leading`,`trailing`],description:`Placement of the expand/collapse toggle within each row.`},collapseIcon:{name:`collapse-icon`,control:{type:`text`},description:`Icon shown on the toggle when a branch is collapsed.`},expandIcon:{name:`expand-icon`,control:{type:`text`},description:`Icon shown on the toggle when a branch is expanded.`}},args:{...T,".data":O,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`],".renderItem":j,togglePosition:`trailing`,collapseIcon:`chevron_right`,expandIcon:`expand_more`},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        toggle-position=${e.togglePosition}
        collapse-icon=${e.collapseIcon}
        expand-icon=${e.expandIcon}
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .renderItem=${e[`.renderItem`]}
        @expanded-ids-changed=${z}
      ></oscd-tree>
    </div>`},J={argTypes:E,args:{...T,".data":O,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`,`ld:PUB_A/AP1/LD_A`],".renderItem":j,togglePosition:`trailing`,pinnedIds:[`ln:PUB_A|AP1|LD_A||TCTR|1`]},render:e=>{let[t,r]=w(),i=e.pinnedIds??[],a=e=>{let t=i.includes(e)?i.filter(t=>t!==e):[...i,e];C(`pinned-ids-changed`)(t),r({pinnedIds:t})};return n`<div style="max-width: 520px;">
      <oscd-tree
        toggle-position=${e.togglePosition}
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .renderItem=${e[`.renderItem`]}
        .renderLeafAccessory=${({node:e,id:t})=>{let r=i.includes(t);return n`<button
            aria-label=${r?`Unpin ${e.label}`:`Pin ${e.label}`}
            aria-pressed=${r}
            @click=${()=>a(t)}
          >
            <oscd-icon style="--md-icon-size: 20px;"
              >${r?R:L}</oscd-icon
            >
          </button>`}}
        @expanded-ids-changed=${z}
      ></oscd-tree>
    </div>`}},Y={argTypes:{...E,indentStep:{name:`--oscd-tree-indent-step`,control:{type:`text`},description:`Drives both per-level indentation and the leading icon column width. Because a leading icon occupies exactly one indent step, icon-less children align their text under their iconed parent automatically. Set it large enough to hold the icon (e.g. 40px).`}},args:{...T,".data":O,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`,`ld:PUB_A/AP1/LD_A`],".renderItem":N,togglePosition:`trailing`,indentStep:`40px`},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        style="--oscd-tree-indent-step: ${e.indentStep};"
        toggle-position=${e.togglePosition}
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .renderItem=${e[`.renderItem`]}
        @expanded-ids-changed=${z}
      ></oscd-tree>
    </div>`},X={argTypes:E,args:{...T,expandedIds:[`ied:PUB_A`],filter:`TCTR`},render:e=>{let[t,r]=w(),i=String(e.filter??``),a=e.expandedIds,o=F(O,i);return n`<div
      style="display: flex; flex-direction: column; gap: 12px; width: min(520px, 100%);"
    >
      <oscd-outlined-text-field
        label="Filter tree"
        .value=${i}
        @input=${e=>{let t=e.target;C(`filter input`)(t.value),r({filter:t.value})}}
      ></oscd-outlined-text-field>
      <oscd-tree
        .data=${o}
        .expandedIds=${a}
        .renderItem=${j}
        @expanded-ids-changed=${e=>{z(e),r({expandedIds:e.detail.expandedIds})}}
      ></oscd-tree>
    </div>`}},Z={args:{selectedIdsByTree:{}},render:e=>{let[t,r]=w(),i=e.selectedIdsByTree??{},a=e=>{let t=e.currentTarget.parentElement?.querySelector(`oscd-tree`);t&&(t.activeId=t.getFirstNodeId(),t.focus())},o=e=>{let t=e.currentTarget,n=e.detail.direction,r=Array.from(t.parentElement?.querySelectorAll(`oscd-tree`)??[]),i=r[r.indexOf(t)+(n===`last`?1:-1)];i&&(i.activeId=n===`last`?i.getFirstNodeId():i.getLastNodeId(),i.focus())},s=(e,t)=>{I(t),r({selectedIdsByTree:{...i,[e]:t.detail.selectedIds}})},c=e=>n`<oscd-tree
        .data=${[{id:`${e}:one`,label:`${e} / One`,children:[]},{id:`${e}:two`,label:`${e} / Two`,children:[]}]}
        selectionMode="single"
        .selectedIds=${i[e]??[]}
        .renderItem=${M}
        @navigation-boundary=${o}
        @selected-ids-changed=${t=>s(e,t)}
      ></oscd-tree>`;return n`<div
      class="stacked-tree-story"
      style="display: flex; flex-direction: column; justify-self:center; gap: 8px; width: min(520px, 100%);"
    >
      <style>
        .stacked-tree-story oscd-tree:focus-within {
          outline: 2px solid var(--md-sys-color-secondary, #6750a4);
          outline-offset: 2px;
          border-radius: 6px;
        }
      </style>
      <p>
        Demo shows 3 Trees, with a border around the focused tree and a border
        around the active node to show how you can use keyboard navigation
        accross multiple trees. Each tree uses single-selection, so clicking or
        pressing Enter on a row also exercises the selected+active (focused)
        state, showing selected-background/on-selected-foreground pairing
        alongside the active outline.
      </p>
      <button type="button" @click=${a}>Focus first tree</button>
      ${c(`Tree A`)} ${c(`Tree B`)}
      ${c(`Tree C`)}
    </div>`}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1'],
    ['.renderItem']: renderDemoItem
  },
  render: argz => html\`<div style="max-width: 520px;">
      <oscd-tree
        .data=\${argz['.data']}
        .expandedIds=\${argz['.expandedIds']}
        .renderItem=\${argz['.renderItem']}
        @expanded-ids-changed=\${handleExpansion}
      ></oscd-tree>
    </div>\`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1', 'ld:PUB_A/AP1/LD_A'],
    ['.selectedIds']: ['ln:PUB_A|AP1|LD_A||TCTR|1'],
    ['.renderItem']: renderDemoItem,
    selectionMode: 'multiple'
  },
  render: argz => html\`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=\${argz['selectionMode']}
        .data=\${argz['.data']}
        .expandedIds=\${argz['.expandedIds']}
        .selectedIds=\${argz['.selectedIds']}
        .renderItem=\${argz['.renderItem']}
        .isSelectable=\${(node: DemoTreeNode) => node.kind === 'logical-node'}
        @selected-ids-changed=\${handleSelection}
        @expanded-ids-changed=\${handleExpansion}
      ></oscd-tree>
    </div>\`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1', 'ld:PUB_A/AP1/LD_A'],
    ['.selectedIds']: ['ln:PUB_A|AP1|LD_A||TCTR|1'],
    ['.renderItem']: renderDemoItem,
    selectionMode: 'single'
  },
  render: argz => html\`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=\${argz['selectionMode']}
        .data=\${argz['.data']}
        .expandedIds=\${argz['.expandedIds']}
        .selectedIds=\${argz['.selectedIds']}
        .renderItem=\${argz['.renderItem']}
        .isSelectable=\${(node: DemoTreeNode) => node.kind === 'logical-node'}
        @selected-ids-changed=\${handleSelection}
        @expanded-ids-changed=\${handleExpansion}
      ></oscd-tree>
    </div>\`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1', 'ld:PUB_A/AP1/LD_A'],
    ['.selectedIds']: ['ln:PUB_A|AP1|LD_A||TCTR|1'],
    ['.renderItem']: renderDemoItem,
    selectionMode: 'multiple'
  },
  render: argz => html\`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=\${argz['selectionMode']}
        .data=\${argz['.data']}
        .expandedIds=\${argz['.expandedIds']}
        .selectedIds=\${argz['.selectedIds']}
        .renderItem=\${argz['.renderItem']}
        .isSelectable=\${(node: DemoTreeNode) => node.kind === 'logical-node'}
        .isDisabled=\${(node: DemoTreeNode) => node.kind === 'logical-node' && node.id !== 'ln:PUB_A|AP1|LD_A||TCTR|1'}
        @selected-ids-changed=\${handleSelection}
        @expanded-ids-changed=\${handleExpansion}
      ></oscd-tree>
    </div>\`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    ['.data']: treeWithUnknownChildren,
    ['.expandedIds']: ['ied:PUB_A'],
    ['.renderItem']: renderCompactItem
  },
  render: argz => html\`<div style="max-width: 520px;">
      <oscd-tree
        .data=\${argz['.data']}
        .expandedIds=\${argz['.expandedIds']}
        .renderItem=\${argz['.renderItem']}
        @node-expand=\${(event: Event) => {
    const customEvent = event as CustomEvent<{
      id: string;
    }>;
    if (customEvent.detail.id === 'ied:REMOTE') {
      customEvent.preventDefault();
      action('lazy node-expand prevented')(customEvent.detail.id);
    }
  }}
        @expanded-ids-changed=\${handleExpansion}
      ></oscd-tree>
    </div>\`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    ['.data']: sampleTree.map(({
      id: _id,
      ...node
    }) => node),
    ['.expandedIds']: ['0', '0/0'],
    ['.renderItem']: renderDemoItem
  },
  render: argz => html\`<div style="max-width: 520px;">
      <oscd-tree
        .data=\${argz['.data']}
        .expandedIds=\${argz['.expandedIds']}
        .renderItem=\${argz['.renderItem']}
        @expanded-ids-changed=\${handleExpansion}
      ></oscd-tree>
    </div>\`
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes,
    togglePosition: {
      name: 'toggle-position',
      control: {
        type: 'inline-radio'
      },
      options: ['leading', 'trailing'],
      description: 'Placement of the expand/collapse toggle within each row.'
    },
    collapseIcon: {
      name: 'collapse-icon',
      control: {
        type: 'text'
      },
      description: 'Icon shown on the toggle when a branch is collapsed.'
    },
    expandIcon: {
      name: 'expand-icon',
      control: {
        type: 'text'
      },
      description: 'Icon shown on the toggle when a branch is expanded.'
    }
  },
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1'],
    ['.renderItem']: renderDemoItem,
    togglePosition: 'trailing',
    collapseIcon: 'chevron_right',
    expandIcon: 'expand_more'
  },
  render: argz => html\`<div style="max-width: 520px;">
      <oscd-tree
        toggle-position=\${argz['togglePosition']}
        collapse-icon=\${argz['collapseIcon']}
        expand-icon=\${argz['expandIcon']}
        .data=\${argz['.data']}
        .expandedIds=\${argz['.expandedIds']}
        .renderItem=\${argz['.renderItem']}
        @expanded-ids-changed=\${handleExpansion}
      ></oscd-tree>
    </div>\`
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1', 'ld:PUB_A/AP1/LD_A'],
    ['.renderItem']: renderDemoItem,
    togglePosition: 'trailing',
    pinnedIds: ['ln:PUB_A|AP1|LD_A||TCTR|1']
  },
  render: argz => {
    const [_, updateArgs] = useArgs();
    const pinnedIds = argz['pinnedIds'] as string[] ?? [];
    const togglePin = (id: string) => {
      const next = pinnedIds.includes(id) ? pinnedIds.filter(pinnedId => pinnedId !== id) : [...pinnedIds, id];
      action('pinned-ids-changed')(next);
      updateArgs({
        pinnedIds: next
      });
    };
    return html\`<div style="max-width: 520px;">
      <oscd-tree
        toggle-position=\${argz['togglePosition']}
        .data=\${argz['.data']}
        .expandedIds=\${argz['.expandedIds']}
        .renderItem=\${argz['.renderItem']}
        .renderLeafAccessory=\${({
      node,
      id
    }: TreeRenderContext<DemoTreeNode>) => {
      const pinned = pinnedIds.includes(id);
      return html\`<button
            aria-label=\${pinned ? \`Unpin \${node.label}\` : \`Pin \${node.label}\`}
            aria-pressed=\${pinned}
            @click=\${() => togglePin(id)}
          >
            <oscd-icon style="--md-icon-size: 20px;"
              >\${pinned ? pinnedIcon : unpinnedIcon}</oscd-icon
            >
          </button>\`;
    }}
        @expanded-ids-changed=\${handleExpansion}
      ></oscd-tree>
    </div>\`;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...argTypes,
    indentStep: {
      name: '--oscd-tree-indent-step',
      control: {
        type: 'text'
      },
      description: 'Drives both per-level indentation and the leading icon column width. Because a leading icon occupies exactly one indent step, icon-less children align their text under their iconed parent automatically. Set it large enough to hold the icon (e.g. 40px).'
    }
  },
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1', 'ld:PUB_A/AP1/LD_A'],
    ['.renderItem']: renderMixedIconItem,
    togglePosition: 'trailing',
    indentStep: '40px'
  },
  render: argz => html\`<div style="max-width: 520px;">
      <oscd-tree
        style="--oscd-tree-indent-step: \${argz['indentStep']};"
        toggle-position=\${argz['togglePosition']}
        .data=\${argz['.data']}
        .expandedIds=\${argz['.expandedIds']}
        .renderItem=\${argz['.renderItem']}
        @expanded-ids-changed=\${handleExpansion}
      ></oscd-tree>
    </div>\`
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    expandedIds: ['ied:PUB_A'],
    filter: 'TCTR'
  },
  render: argz => {
    const [_, updateArgs] = useArgs();
    const filter = String(argz['filter'] ?? '');
    const expandedIds = argz['expandedIds'] as string[];
    const filteredTree = filterTree(sampleTree, filter);
    return html\`<div
      style="display: flex; flex-direction: column; gap: 12px; width: min(520px, 100%);"
    >
      <oscd-outlined-text-field
        label="Filter tree"
        .value=\${filter}
        @input=\${(event: Event) => {
      const input = event.target as HTMLInputElement;
      action('filter input')(input.value);
      updateArgs({
        filter: input.value
      });
    }}
      ></oscd-outlined-text-field>
      <oscd-tree
        .data=\${filteredTree}
        .expandedIds=\${expandedIds}
        .renderItem=\${renderDemoItem}
        @expanded-ids-changed=\${(event: CustomEvent<{
      expandedIds: string[];
    }>) => {
      handleExpansion(event);
      updateArgs({
        expandedIds: event.detail.expandedIds
      });
    }}
      ></oscd-tree>
    </div>\`;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ['selectedIdsByTree']: {} as Record<string, string[]>
  },
  render: argz => {
    const [_, updateArgs] = useArgs();
    const selectedIdsByTree = argz['selectedIdsByTree'] as Record<string, string[]> ?? {};
    const focusFirstTree = (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement;
      const tree = button.parentElement?.querySelector<OscdTree>('oscd-tree');
      if (!tree) {
        return;
      }
      tree.activeId = tree.getFirstNodeId();
      tree.focus();
    };
    const handleBoundary = (event: Event) => {
      const currentTree = event.currentTarget as OscdTree;
      const direction = (event as CustomEvent<{
        direction: 'first' | 'last';
      }>).detail.direction;
      const trees = Array.from(currentTree.parentElement?.querySelectorAll<OscdTree>('oscd-tree') ?? []);
      const currentIndex = trees.indexOf(currentTree);
      const targetTree = trees[currentIndex + (direction === 'last' ? 1 : -1)];
      if (!targetTree) {
        return;
      }
      targetTree.activeId = direction === 'last' ? targetTree.getFirstNodeId() : targetTree.getLastNodeId();
      targetTree.focus();
    };
    const handleStackedSelection = (prefix: string, event: CustomEvent<TreeSelectionChangeEventDetail<DemoTreeNode>>) => {
      handleSelection(event);
      updateArgs({
        selectedIdsByTree: {
          ...selectedIdsByTree,
          [prefix]: event.detail.selectedIds
        }
      });
    };
    const renderStackedTree = (prefix: string) => html\`<oscd-tree
        .data=\${[{
      id: \`\${prefix}:one\`,
      label: \`\${prefix} / One\`,
      children: []
    }, {
      id: \`\${prefix}:two\`,
      label: \`\${prefix} / Two\`,
      children: []
    }]}
        selectionMode="single"
        .selectedIds=\${selectedIdsByTree[prefix] ?? []}
        .renderItem=\${renderCompactItem}
        @navigation-boundary=\${handleBoundary}
        @selected-ids-changed=\${(event: CustomEvent<TreeSelectionChangeEventDetail<DemoTreeNode>>) => handleStackedSelection(prefix, event)}
      ></oscd-tree>\`;
    return html\`<div
      class="stacked-tree-story"
      style="display: flex; flex-direction: column; justify-self:center; gap: 8px; width: min(520px, 100%);"
    >
      <style>
        .stacked-tree-story oscd-tree:focus-within {
          outline: 2px solid var(--md-sys-color-secondary, #6750a4);
          outline-offset: 2px;
          border-radius: 6px;
        }
      </style>
      <p>
        Demo shows 3 Trees, with a border around the focused tree and a border
        around the active node to show how you can use keyboard navigation
        accross multiple trees. Each tree uses single-selection, so clicking or
        pressing Enter on a row also exercises the selected+active (focused)
        state, showing selected-background/on-selected-foreground pairing
        alongside the active outline.
      </p>
      <button type="button" @click=\${focusFirstTree}>Focus first tree</button>
      \${renderStackedTree('Tree A')} \${renderStackedTree('Tree B')}
      \${renderStackedTree('Tree C')}
    </div>\`;
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`MultipleSelection`,`SingleSelection`,`DisabledRows`,`UnknownChildren`,`DerivedIds`,`ToggleCustomization`,`PinnableLeaves`,`AlignedLeadingIcons`,`Filtered`,`StackedKeyboardNavigation`]})))()}$();export{Y as AlignedLeadingIcons,V as Default,K as DerivedIds,W as DisabledRows,X as Filtered,H as MultipleSelection,J as PinnableLeaves,U as SingleSelection,Z as StackedKeyboardNavigation,q as ToggleCustomization,G as UnknownChildren,Q as __namedExportsOrder,B as default};