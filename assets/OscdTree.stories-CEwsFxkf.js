import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,f as r,h as i,u as a}from"./static-html-JNahc6jH.js";import{I as o,L as s,_ as c,j as l,k as u}from"./list-navigation-helpers-C1Ibc9kd.js";import{A as ee,E as te,T as ne,j as re,n as ie,t as ae}from"./OscdIcon-BLAkUGod.js";import{n as d,t as f}from"./decorate-DTsqE9Ek.js";import{n as oe}from"./oscd-menu-item-CTcQZDW2.js";import{n as se,t as ce}from"./getStorybookMeta-BKW3Afvh.js";import{n as p,t as m}from"./OscdCheckbox-CJxI8LRI.js";import{t as le}from"./oscd-outlined-text-field-B_bS3Z2I.js";var h,ue=e((()=>{a(),c(),d(),h=class extends r{constructor(...e){super(...e),this.selected=!1,this.active=!1,this.disabled=!1,this.hasLeadingContent=!1}connectedCallback(){super.connectedCallback(),this.hasLeadingContent=this.querySelector(`[slot="start"]`)!==null}handleStartSlotChange(e){this.hasLeadingContent=e.target.assignedElements({flatten:!0}).length>0}render(){return n`<div part="content" class="content">
      <span
        part="leading"
        class="leading ${this.hasLeadingContent?`has-leading`:``}"
      >
        <slot name="start" @slotchange=${this.handleStartSlotChange}></slot>
      </span>
      <span part="text" class="text">
        <span part="headline" class="headline"
          ><slot name="headline"></slot
        ></span>
        <span part="supporting-text" class="supporting-text"
          ><slot name="supporting-text"></slot
        ></span>
      </span>
      <slot name="end"></slot>
    </div>`}static{this.styles=t`
    :host {
      box-sizing: border-box;
      display: block;
      min-width: 0;
      color: inherit;
      font-family: var(
        --oscd-tree-item-font-family,
        var(
          --md-list-item-label-text-font,
          var(
            --md-sys-typescale-body-large-font,
            var(--oscd-text-font, sans-serif)
          )
        )
      );
      font-size: var(
        --oscd-tree-item-font-size,
        var(--md-list-item-label-text-size, 1rem)
      );
    }

    :host([disabled]) {
      opacity: var(
        --oscd-tree-item-disabled-opacity,
        var(--md-list-item-disabled-opacity, 0.3)
      );
    }

    :host([selected]) .headline {
      color: var(
        --oscd-tree-item-selected-headline-color,
        var(
          --md-list-item-label-text-color,
          var(--md-sys-color-on-surface, #1d1b20)
        )
      );
      font-weight: var(
        --oscd-tree-item-selected-headline-weight,
        var(--md-sys-typescale-body-large-weight-prominent, 500)
      );
    }

    .content {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-width: 0;
      min-height: var(
        --oscd-tree-item-min-height,
        var(--md-list-item-one-line-container-height, 56px)
      );
      width: 100%;
    }

    /*
     * Leading icon column. A leading icon occupies exactly one indent step so
     * that icon-less descendants (indented one step per level by the tree)
     * align their text under an iconed ancestor's text at any depth. Rows
     * without a leading icon collapse this column to zero and rely on the
     * tree's indentation instead. Override --oscd-tree-item-leading-size only
     * if you must decouple it from --oscd-tree-indent-step; keeping them equal
     * is what preserves the alignment.
     */
    .leading {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 0 0 auto;
      inline-size: 0;
    }

    .leading.has-leading {
      inline-size: var(
        --oscd-tree-item-leading-size,
        var(--oscd-tree-indent-step, 24px)
      );
    }

    .text {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      justify-content: center;
      min-width: 0;
    }

    .headline,
    .supporting-text {
      display: block;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .headline {
      color: var(
        --oscd-tree-item-headline-color,
        var(--md-list-item-label-text-color, currentColor)
      );
      font-family: var(
        --oscd-tree-item-headline-font,
        var(--md-list-item-label-text-font, inherit)
      );
      font-size: var(
        --oscd-tree-item-headline-size,
        var(--md-list-item-label-text-size, 1rem)
      );
      font-weight: var(
        --oscd-tree-item-headline-weight,
        var(--md-list-item-label-text-weight, 400)
      );
      line-height: var(
        --oscd-tree-item-headline-line-height,
        var(--md-list-item-label-text-line-height, 1.5rem)
      );
    }

    .supporting-text {
      color: var(
        --oscd-tree-item-supporting-text-color,
        var(
          --md-list-item-supporting-text-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        )
      );
      font-family: var(
        --oscd-tree-item-supporting-text-font,
        var(--md-list-item-supporting-text-font, inherit)
      );
      font-size: var(
        --oscd-tree-item-supporting-text-size,
        var(--md-list-item-supporting-text-size, 0.875rem)
      );
      font-weight: var(
        --oscd-tree-item-supporting-text-weight,
        var(--md-list-item-supporting-text-weight, 400)
      );
      line-height: var(
        --oscd-tree-item-supporting-text-line-height,
        var(--md-list-item-supporting-text-line-height, 1.25rem)
      );
    }

    ::slotted([slot='start']),
    ::slotted([slot='end']) {
      flex: 0 0 auto;
    }

    ::slotted([slot='start']) {
      color: var(
        --oscd-tree-item-leading-icon-color,
        var(
          --md-list-item-leading-icon-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        )
      );
    }

    ::slotted([slot='end']) {
      margin-inline-start: var(--oscd-tree-item-gap, 16px);
      color: var(
        --oscd-tree-item-trailing-icon-color,
        var(
          --md-list-item-trailing-icon-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        )
      );
    }
  `}},f([l({type:Boolean,reflect:!0})],h.prototype,`selected`,void 0),f([l({type:Boolean,reflect:!0})],h.prototype,`active`,void 0),f([l({type:Boolean,reflect:!0})],h.prototype,`disabled`,void 0),f([u()],h.prototype,`hasLeadingContent`,void 0)})),g,_=e((()=>{ue(),g=class extends h{}}));function v(e){return e.children===void 0?`unknown`:e.children.length>0?`branch`:`leaf`}var y,b,x,de=e((()=>{a(),c(),s(),p(),re(),ie(),te(),_(),d(),y=({node:e,id:t,selected:r,active:i,disabled:a})=>n`<oscd-tree-item
    ?selected=${r}
    ?active=${i}
    ?disabled=${a}
  >
    <span slot="headline">${`label`in e?String(e.label):t}</span>
  </oscd-tree-item>`,b=`/`,x=class extends o(r){constructor(...e){super(...e),this.data=[],this.selectedIds=[],this.expandedIds=[],this.selectionMode=`none`,this.collapseIcon=`chevron_right`,this.expandIcon=`expand_more`,this.togglePosition=`leading`,this.activeId=null,this.scrollActiveIntoView=!0,this.handleTreeKeyDown=e=>{if(e.target!==this)return;let t=this.navigableRows(),n=t.findIndex(e=>e.id===this.activeId);switch(e.key){case`ArrowDown`:e.preventDefault(),this.navigateNext(t,n);break;case`ArrowUp`:e.preventDefault(),this.navigatePrevious(t,n);break;case`Home`:e.preventDefault(),this.activeId=this.getFirstNodeId();break;case`End`:e.preventDefault(),this.activeId=this.getLastNodeId();break;case`Enter`:{let r=t[n];r&&(e.preventDefault(),this.toggleSelection(r));break}default:break}}}static{this.scopedElements={"oscd-checkbox":m,"oscd-focus-ring":ee,"oscd-icon":ae,"oscd-ripple":ne,"oscd-tree-item":g}}connectedCallback(){super.connectedCallback(),this.tabIndex=0,this.addEventListener(`keydown`,this.handleTreeKeyDown)}disconnectedCallback(){this.removeEventListener(`keydown`,this.handleTreeKeyDown),super.disconnectedCallback()}willUpdate(e){!e.has(`activeId`)||this.activeId===null||this.navigableRows().some(e=>e.id===this.activeId)||(console.warn(`Ignoring invalid oscd-tree activeId: ${this.activeId}`),this.activeId=e.get(`activeId`)??null)}getFirstNodeId(){return this.navigableRows()[0]?.id??null}getLastNodeId(){let e=this.navigableRows();return e[e.length-1]?.id??null}expand(e){this.expandedIds.includes(e)||this.setExpandedIds([...this.expandedIds,e])}collapse(e){this.expandedIds.includes(e)&&this.setExpandedIds(this.expandedIds.filter(t=>t!==e))}toggle(e){let t=this.visibleRows().find(t=>t.id===e);t&&this.toggleExpansion(t)}rowId(e,t){return e.id??this.getNodeId?.(e,t)??t.join(b)}visibleRows(){let e=new Set(this.expandedIds),t=[],n=(r,i,a,o)=>{if(!r)return;let s=r.length;r.forEach((r,c)=>{let l=[...o,c],u=this.rowId(r,l);t.push({node:r,id:u,htmlId:`tree-row-${t.length}`,level:i,parentIds:a,ariaPositionInSet:c+1,ariaSetSize:s}),e.has(u)&&r.children&&n(r.children,i+1,[...a,u],l)})};return n(this.data,1,[],[]),t}navigableRows(){return this.visibleRows().filter(e=>!this.isRowDisabled(e))}renderContext(e){let t=this.selectedIds.includes(e.id);return{node:e.node,id:e.id,level:e.level,expanded:this.expandedIds.includes(e.id),selected:t,active:this.activeId===e.id,childrenState:v(e.node),selectable:this.selectionMode!==`none`&&this.isRowSelectable(e),disabled:this.isRowDisabled(e)}}accessibleLabel(e){return this.getNodeLabel?this.getNodeLabel(e.node,e.id):`label`in e.node&&e.node.label!==void 0?String(e.node.label):e.id}isRowSelectable(e){return this.isSelectable?this.isSelectable(e.node):!0}isRowDisabled(e){return this.isDisabled?this.isDisabled(e.node):!1}setExpandedIds(e){this.expandedIds=e,this.dispatchEvent(new CustomEvent(`expanded-ids-changed`,{detail:{expandedIds:e}}))}setSelectedIds(e,t){let n=this.selectedIds;this.selectedIds=e,this.dispatchEvent(new CustomEvent(`selected-ids-changed`,{detail:{selectedIds:e,previousSelectedIds:n,targetNode:t}}))}fireNodeEvent(e,t,n){let r=new CustomEvent(e,{bubbles:!0,cancelable:n?.cancelable??!1,detail:{node:t.node,id:t.id}});return this.dispatchEvent(r)}toggleExpansion(e){if(!(this.isRowDisabled(e)||v(e.node)===`leaf`)){if(this.expandedIds.includes(e.id)){this.setExpandedIds(this.expandedIds.filter(t=>t!==e.id)),this.fireNodeEvent(`node-collapse`,e),this.fireNodeEvent(`node-toggle`,e);return}this.fireNodeEvent(`node-expand`,e,{cancelable:!0})&&(this.setExpandedIds([...this.expandedIds,e.id]),this.fireNodeEvent(`node-toggle`,e))}}toggleSelection(e){if(this.selectionMode===`none`||this.isRowDisabled(e)||!this.isRowSelectable(e))return;if(this.selectionMode===`single`){this.setSelectedIds([e.id],e.node);return}let t=this.selectedIds.includes(e.id);this.setSelectedIds(t?this.selectedIds.filter(t=>t!==e.id):[...this.selectedIds,e.id],e.node)}activateRow(e){this.activeId=e.id,this.fireNodeEvent(`node-click`,e)}handleRowClick(e,t){if(this.isRowDisabled(e)){t.preventDefault();return}if(this.activateRow(e),v(e.node)!==`leaf`){this.toggleExpansion(e);return}this.toggleSelection(e)}handleToggleClick(e,t){t.stopPropagation(),this.activeId=e.id,this.toggleExpansion(e)}handleKeyDown(e,t){t.stopPropagation();let n=this.navigableRows(),r=n.findIndex(t=>t.id===e.id);switch(t.key){case`ArrowDown`:t.preventDefault(),this.navigateNext(n,r);break;case`ArrowUp`:t.preventDefault(),this.navigatePrevious(n,r);break;case`Home`:t.preventDefault(),this.activeId=this.getFirstNodeId();break;case`End`:t.preventDefault(),this.activeId=this.getLastNodeId();break;case`ArrowRight`:t.preventDefault(),this.stepIn(e,n,r);break;case`ArrowLeft`:t.preventDefault(),this.stepOut(e);break;case`Enter`:t.preventDefault(),this.activeId=e.id,this.toggleSelection(e);break;case` `:t.preventDefault(),this.toggleSelection(e);break;default:break}}navigateNext(e,t){let n=e[t<0?0:t+1];if(!n){this.dispatchEvent(new CustomEvent(`navigation-boundary`,{detail:{direction:`last`}}));return}this.activeId=n.id,this.dispatchEvent(new CustomEvent(`active-changed`,{detail:{activeId:n.id}}))}navigatePrevious(e,t){let n=e[t<0?e.length-1:t-1];if(!n){this.dispatchEvent(new CustomEvent(`navigation-boundary`,{detail:{direction:`first`}}));return}this.activeId=n.id,this.dispatchEvent(new CustomEvent(`active-changed`,{detail:{activeId:n.id}}))}stepIn(e,t,n){if(v(e.node)===`leaf`)return;if(!this.expandedIds.includes(e.id)){this.toggleExpansion(e);return}let r=t[n+1];r?.parentIds[r.parentIds.length-1]===e.id&&(this.activeId=r.id)}stepOut(e){if(this.expandedIds.includes(e.id)){this.toggleExpansion(e);return}let t=e.parentIds[e.parentIds.length-1];t&&(this.activeId=t)}renderSelection(e){if(this.selectionMode!==`multiple`||!this.isRowSelectable(e))return i;let t=this.selectedIds.includes(e.id);return n`<span
      part="selection"
      class="selection"
      aria-hidden="true"
      data-selected=${t?`true`:`false`}
      ><oscd-checkbox
        tabindex="-1"
        ?checked=${t}
        ?disabled=${this.isRowDisabled(e)}
      ></oscd-checkbox
    ></span>`}renderToggle(e,t){let r=t.childrenState!==`leaf`,a=t.expanded;if(!r&&this.renderLeafAccessory){let e=this.renderLeafAccessory(t);if(e!==i&&e!=null&&e!==!1)return n`<div
          part="accessory"
          class="accessory"
          @click=${e=>e.stopPropagation()}
          @keydown=${e=>this.handleAccessoryKeydown(e)}
        >
          ${e}
        </div>`}return n`<button
      part="toggle"
      class="toggle ${r?``:`leaf-toggle`}"
      ?disabled=${!r||t.disabled}
      aria-label=${a?`Collapse`:`Expand`}
      tabindex="-1"
      @click=${t=>this.handleToggleClick(e,t)}
    >
      ${r?n`<oscd-icon
            >${a?this.expandIcon:this.collapseIcon}</oscd-icon
          >`:i}
    </button>`}handleAccessoryKeydown(e){(e.key===`Enter`||e.key===` `||e.key===`Spacebar`)&&e.stopPropagation()}renderRow(e){let t=this.renderContext(e),r=t.childrenState,a=t.selected,o=t.disabled,s=t.active;return n`<div
      id=${e.htmlId}
      part="row"
      class="row"
      role="treeitem"
      tabindex=${s?`0`:`-1`}
      aria-level=${e.level}
      aria-posinset=${e.ariaPositionInSet}
      aria-setsize=${e.ariaSetSize}
      aria-label=${this.accessibleLabel(e)}
      aria-expanded=${r===`leaf`?i:t.expanded}
      aria-selected=${t.selectable?a:i}
      aria-disabled=${o?`true`:i}
      data-active=${s?`true`:`false`}
      data-selected=${a?`true`:`false`}
      data-selection-mode=${this.selectionMode}
      data-disabled=${o?`true`:`false`}
      style=${`--oscd-tree-row-level: ${e.level};`}
      @click=${t=>this.handleRowClick(e,t)}
      @keydown=${t=>this.handleKeyDown(e,t)}
    >
      <oscd-ripple for=${e.htmlId} ?disabled=${o}></oscd-ripple>
      <oscd-focus-ring for=${e.htmlId} inward></oscd-focus-ring>
      <span part="indent" class="indent" aria-hidden="true"></span>
      ${this.togglePosition===`leading`?this.renderToggle(e,t):i}
      ${this.renderSelection(e)}
      <span part="content" class="content"
        >${(this.renderItem??y)(t)}</span
      >
      ${this.togglePosition===`trailing`?this.renderToggle(e,t):i}
    </div>`}updated(){if(this.renderRoot instanceof ShadowRoot&&this.renderRoot.activeElement?.closest(`.accessory`))return;let e=this.renderRoot.querySelector(`.row[data-active="true"]`);e&&this.matches(`:focus-within`)&&(e.focus(),this.scrollActiveIntoView&&e.scrollIntoView({block:`nearest`,inline:`nearest`}))}render(){return n`<div part="tree" class="tree" role="tree">
      ${this.visibleRows().map(e=>this.renderRow(e))}
    </div>`}static{this.styles=t`
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
      color: var(--oscd-tree-color, var(--md-sys-color-on-surface, #1d1b20));
      font-family: var(
        --oscd-tree-font-family,
        var(--oscd-text-font, sans-serif)
      );
      outline: none;
      /*
       * Drives both the per-level indentation and the leading icon column width
       * of each row (see OscdTreeItem). Keeping these fused means a leading icon
       * occupies exactly one indent step, so icon-less descendants align their
       * text under an iconed ancestor's text automatically. Set it large enough
       * to hold your leading icon comfortably (e.g. 40px) when using icons.
       */
      --oscd-tree-indent-step: 24px;
      --oscd-tree-toggle-size: 32px;
      --oscd-tree-toggle-icon-size: 24px;
      --oscd-tree-row-height: 44px;
      --oscd-tree-row-shape: var(--md-sys-shape-corner-small, 4px);
      --md-ripple-hover-color: var(
        --oscd-tree-row-hover-state-layer-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      --md-ripple-hover-opacity: var(
        --oscd-tree-row-hover-state-layer-opacity,
        0.08
      );
      --md-ripple-pressed-color: var(
        --oscd-tree-row-pressed-state-layer-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      --md-ripple-pressed-opacity: var(
        --oscd-tree-row-pressed-state-layer-opacity,
        0.12
      );
    }

    .tree {
      display: flex;
      flex-direction: column;
      min-width: 0;
      gap: var(--oscd-tree-row-gap, 0);
    }

    .row {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-width: 0;
      min-height: var(--oscd-tree-row-height);
      border-radius: var(--oscd-tree-row-shape);
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
      border-radius: var(--oscd-tree-row-shape);
    }

    oscd-focus-ring {
      z-index: 1;
      --md-focus-ring-shape: var(--oscd-tree-row-shape);
      --md-focus-ring-color: var(
        --oscd-tree-row-focus-ring-color,
        var(--md-sys-color-primary, #6750a4)
      );
      --md-focus-ring-width: var(--oscd-tree-row-focus-ring-width, 2px);
      --md-focus-ring-duration: var(--oscd-tree-row-focus-ring-duration, 0ms);
    }

    .row[data-disabled='true'] {
      cursor: default;
    }

    .row[data-selection-mode='single'][data-selected='true'] {
      color: var(--oscd-tree-row-selected-text-color, var(--oscd-base3, #fff));
      background: var(
        --oscd-tree-row-selected-color,
        var(--oscd-primary, #0b335b)
      );
    }

    .row[data-selection-mode='single'][data-selected='true']:hover:not(
        [data-disabled='true']
      ) {
      background: var(
        --oscd-tree-row-selected-hover-color,
        var(--oscd-tree-row-selected-color, var(--oscd-primary, #0b335b))
      );
    }

    .indent {
      flex: 0 0
        calc(
          max(0, var(--oscd-tree-row-level) - 1) * var(--oscd-tree-indent-step)
        );
      inline-size: calc(
        max(0, var(--oscd-tree-row-level) - 1) * var(--oscd-tree-indent-step)
      );
    }

    .toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 var(--oscd-tree-toggle-size);
      inline-size: var(--oscd-tree-toggle-size);
      block-size: var(--oscd-tree-toggle-size);
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
        var(--oscd-tree-toggle-size)
      );
      inline-size: var(
        --oscd-tree-leaf-toggle-size,
        var(--oscd-tree-toggle-size)
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

    .toggle oscd-icon {
      --md-icon-size: var(--oscd-tree-toggle-icon-size, 24px);
    }

    .accessory {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 var(--oscd-tree-toggle-size);
      inline-size: var(--oscd-tree-toggle-size);
      block-size: var(--oscd-tree-toggle-size);
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

    .accessory oscd-icon {
      --md-icon-size: var(
        --oscd-tree-accessory-icon-size,
        var(--oscd-tree-toggle-icon-size, 24px)
      );
    }

    .accessory button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      inline-size: var(--oscd-tree-toggle-size);
      block-size: var(--oscd-tree-toggle-size);
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
      --md-checkbox-container-size: var(
        --oscd-tree-selection-checkbox-size,
        18px
      );
      --md-checkbox-icon-size: var(
        --oscd-tree-selection-checkbox-icon-size,
        18px
      );
    }

    .content {
      display: block;
      flex: 1 1 auto;
      min-width: 0;
    }
  `}},f([l({attribute:!1})],x.prototype,`data`,void 0),f([l({attribute:!1})],x.prototype,`selectedIds`,void 0),f([l({attribute:!1})],x.prototype,`expandedIds`,void 0),f([l({attribute:!1})],x.prototype,`renderItem`,void 0),f([l({attribute:!1})],x.prototype,`renderLeafAccessory`,void 0),f([l({attribute:!1})],x.prototype,`getNodeId`,void 0),f([l({attribute:!1})],x.prototype,`getNodeLabel`,void 0),f([l({attribute:!1})],x.prototype,`isSelectable`,void 0),f([l({attribute:!1})],x.prototype,`isDisabled`,void 0),f([l()],x.prototype,`selectionMode`,void 0),f([l({attribute:`collapse-icon`})],x.prototype,`collapseIcon`,void 0),f([l({attribute:`expand-icon`})],x.prototype,`expandIcon`,void 0),f([l({reflect:!0,attribute:`toggle-position`})],x.prototype,`togglePosition`,void 0),f([l({attribute:!1})],x.prototype,`activeId`,void 0),f([l({type:Boolean,attribute:`scroll-active-into-view`})],x.prototype,`scrollActiveIntoView`,void 0)})),S,C=e((()=>{de(),S=class extends x{}})),fe=e((()=>{_(),customElements.define(`oscd-tree-item`,g)})),pe=e((()=>{C(),fe(),customElements.define(`oscd-tree`,S)})),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{a(),se(),pe(),oe(),le(),{action:w}=__STORYBOOK_MODULE_ACTIONS__,{useArgs:T}=__STORYBOOK_MODULE_PREVIEW_API__,{args:E,argTypes:D,meta:O}=ce({tagName:`oscd-tree`}),k=[{id:`ied:PUB_A`,label:`PUB_A`,description:`Publisher IED`,kind:`ied`,children:[{id:`ap:PUB_A/AP1`,label:`AP1`,description:`Access point`,kind:`access-point`,children:[{id:`ld:PUB_A/AP1/LD_A`,label:`LD_A`,description:`Logical device`,kind:`l-device`,children:[{id:`ln:PUB_A|AP1|LD_A||LLN0|`,label:`LLN0`,description:`Logical node zero`,kind:`logical-node`,children:[]},{id:`ln:PUB_A|AP1|LD_A||TCTR|1`,label:`TCTR1`,description:`Current transformer`,kind:`logical-node`,children:[]},{id:`ln:PUB_A|AP1|LD_A||XCBR|1`,label:`XCBR1`,description:`Circuit breaker`,kind:`logical-node`,children:[]}]}]}]},{id:`ied:PUB_B`,label:`PUB_B`,description:`Publisher IED`,kind:`ied`,children:[{id:`ap:PUB_B/AP1`,label:`AP1`,description:`Access point`,kind:`access-point`,children:[{id:`ld:PUB_B/AP1/LD_B`,label:`LD_B`,description:`Logical device`,kind:`l-device`,children:[{id:`ln:PUB_B|AP1|LD_B||LLN0|`,label:`LLN0`,description:`Logical node zero`,kind:`logical-node`,children:[]},{id:`ln:PUB_B|AP1|LD_B||TCTR|1`,label:`TCTR1`,description:`Current transformer`,kind:`logical-node`,children:[]}]}]}]}],A=[...k,{id:`ied:REMOTE`,label:`REMOTE`,description:`Children are not loaded yet`,kind:`ied`}],j=e=>{switch(e){case`ied`:return`reportIcon`;case`access-point`:return`lan`;case`l-device`:return`dns`;case`logical-node`:return`article`;default:return`circle`}},M=({node:e,selected:t,active:r,disabled:i})=>n`<oscd-tree-item
    ?selected=${t}
    ?active=${r}
    ?disabled=${i}
  >
    <oscd-icon slot="start">${j(e.kind)}</oscd-icon>
    <span slot="headline">${e.label}</span>
    <span slot="supporting-text">${e.description}</span>
  </oscd-tree-item>`,N=({node:e,childrenState:t,selected:r,disabled:i})=>n`<oscd-tree-item ?selected=${r} ?disabled=${i}>
    <span slot="headline">${e.label}</span>
    <span slot="supporting-text">${e.kind} / ${t}</span>
  </oscd-tree-item>`,P=({node:e,selected:t,active:r,disabled:i})=>n`<oscd-tree-item
    ?selected=${t}
    ?active=${r}
    ?disabled=${i}
  >
    ${e.kind===`ied`?n`<oscd-icon slot="start">${j(e.kind)}</oscd-icon>`:``}
    <span slot="headline">${e.label}</span>
    <span slot="supporting-text">${e.description}</span>
  </oscd-tree-item>`,F=(e,t)=>{let n=t.trim().toLowerCase();return n?[e.label,e.description,e.kind,e.id].filter(e=>!!e).some(e=>e.toLowerCase().includes(n)):!0},I=(e,t)=>{let n=t.trim();return n?e.map(e=>{let t=e.children?I(e.children,n):e.children;if(!F(e,n)&&(!t||t.length===0))return;let r={...e};return e.children!==void 0&&(r.children=t),r}).filter(e=>!!e):e},L=e=>{w(`selected-ids-changed`)(e.detail.selectedIds)},R=n`<svg
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
</svg>`,z=n`<svg
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
</svg>`,B=e=>{w(`expanded-ids-changed`)(e.detail.expandedIds)},V={...O,title:`Tree / Tree`,tags:[`autodocs`]},H={argTypes:D,args:{...E,".data":k,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`],".renderItem":M},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .renderItem=${e[`.renderItem`]}
        @expanded-ids-changed=${B}
      ></oscd-tree>
    </div>`},U={argTypes:D,args:{...E,".data":k,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`,`ld:PUB_A/AP1/LD_A`],".selectedIds":[`ln:PUB_A|AP1|LD_A||TCTR|1`],".renderItem":M,selectionMode:`multiple`},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${e.selectionMode}
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .selectedIds=${e[`.selectedIds`]}
        .renderItem=${e[`.renderItem`]}
        .isSelectable=${e=>e.kind===`logical-node`}
        @selected-ids-changed=${L}
        @expanded-ids-changed=${B}
      ></oscd-tree>
    </div>`},W={argTypes:D,args:{...E,".data":k,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`,`ld:PUB_A/AP1/LD_A`],".selectedIds":[`ln:PUB_A|AP1|LD_A||TCTR|1`],".renderItem":M,selectionMode:`single`},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${e.selectionMode}
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .selectedIds=${e[`.selectedIds`]}
        .renderItem=${e[`.renderItem`]}
        .isSelectable=${e=>e.kind===`logical-node`}
        @selected-ids-changed=${L}
        @expanded-ids-changed=${B}
      ></oscd-tree>
    </div>`},G={argTypes:D,args:{...E,".data":k,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`,`ld:PUB_A/AP1/LD_A`],".selectedIds":[`ln:PUB_A|AP1|LD_A||TCTR|1`],".renderItem":M,selectionMode:`multiple`},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${e.selectionMode}
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .selectedIds=${e[`.selectedIds`]}
        .renderItem=${e[`.renderItem`]}
        .isSelectable=${e=>e.kind===`logical-node`}
        .isDisabled=${e=>e.kind===`logical-node`&&e.id!==`ln:PUB_A|AP1|LD_A||TCTR|1`}
        @selected-ids-changed=${L}
        @expanded-ids-changed=${B}
      ></oscd-tree>
    </div>`},K={argTypes:D,args:{...E,".data":A,".expandedIds":[`ied:PUB_A`],".renderItem":N},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .renderItem=${e[`.renderItem`]}
        @node-expand=${e=>{let t=e;t.detail.id===`ied:REMOTE`&&(t.preventDefault(),w(`lazy node-expand prevented`)(t.detail.id))}}
        @expanded-ids-changed=${B}
      ></oscd-tree>
    </div>`},q={argTypes:D,args:{...E,".data":k.map(({id:e,...t})=>t),".expandedIds":[`0`,`0/0`],".renderItem":M},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .renderItem=${e[`.renderItem`]}
        @expanded-ids-changed=${B}
      ></oscd-tree>
    </div>`},J={argTypes:{...D,togglePosition:{name:`toggle-position`,control:{type:`inline-radio`},options:[`leading`,`trailing`],description:`Placement of the expand/collapse toggle within each row.`},collapseIcon:{name:`collapse-icon`,control:{type:`text`},description:`Icon shown on the toggle when a branch is collapsed.`},expandIcon:{name:`expand-icon`,control:{type:`text`},description:`Icon shown on the toggle when a branch is expanded.`}},args:{...E,".data":k,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`],".renderItem":M,togglePosition:`trailing`,collapseIcon:`chevron_right`,expandIcon:`expand_more`},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        toggle-position=${e.togglePosition}
        collapse-icon=${e.collapseIcon}
        expand-icon=${e.expandIcon}
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .renderItem=${e[`.renderItem`]}
        @expanded-ids-changed=${B}
      ></oscd-tree>
    </div>`},Y={argTypes:D,args:{...E,".data":k,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`,`ld:PUB_A/AP1/LD_A`],".renderItem":M,togglePosition:`trailing`,pinnedIds:[`ln:PUB_A|AP1|LD_A||TCTR|1`]},render:e=>{let[t,r]=T(),i=e.pinnedIds??[],a=e=>{let t=i.includes(e)?i.filter(t=>t!==e):[...i,e];w(`pinned-ids-changed`)(t),r({pinnedIds:t})};return n`<div style="max-width: 520px;">
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
              >${r?z:R}</oscd-icon
            >
          </button>`}}
        @expanded-ids-changed=${B}
      ></oscd-tree>
    </div>`}},X={argTypes:{...D,indentStep:{name:`--oscd-tree-indent-step`,control:{type:`text`},description:`Drives both per-level indentation and the leading icon column width. Because a leading icon occupies exactly one indent step, icon-less children align their text under their iconed parent automatically. Set it large enough to hold the icon (e.g. 40px).`}},args:{...E,".data":k,".expandedIds":[`ied:PUB_A`,`ap:PUB_A/AP1`,`ld:PUB_A/AP1/LD_A`],".renderItem":P,togglePosition:`trailing`,indentStep:`40px`},render:e=>n`<div style="max-width: 520px;">
      <oscd-tree
        style="--oscd-tree-indent-step: ${e.indentStep};"
        toggle-position=${e.togglePosition}
        .data=${e[`.data`]}
        .expandedIds=${e[`.expandedIds`]}
        .renderItem=${e[`.renderItem`]}
        @expanded-ids-changed=${B}
      ></oscd-tree>
    </div>`},Z={argTypes:D,args:{...E,expandedIds:[`ied:PUB_A`],filter:`TCTR`},render:e=>{let[t,r]=T(),i=String(e.filter??``),a=e.expandedIds;return n`<div
      style="display: flex; flex-direction: column; gap: 12px; width: min(520px, 100%);"
    >
      <oscd-outlined-text-field
        label="Filter tree"
        .value=${i}
        @input=${e=>{let t=e.target;w(`filter input`)(t.value),r({filter:t.value})}}
      ></oscd-outlined-text-field>
      <oscd-tree
        .data=${I(k,i)}
        .expandedIds=${a}
        .renderItem=${M}
        @expanded-ids-changed=${e=>{B(e),r({expandedIds:e.detail.expandedIds})}}
      ></oscd-tree>
    </div>`}},Q={render:()=>{let e=e=>{let t=e.currentTarget.parentElement?.querySelector(`oscd-tree`);t&&(t.activeId=t.getFirstNodeId(),t.focus())},t=e=>{let t=e.currentTarget,n=e.detail.direction,r=Array.from(t.parentElement?.querySelectorAll(`oscd-tree`)??[]),i=r[r.indexOf(t)+(n===`last`?1:-1)];i&&(i.activeId=n===`last`?i.getFirstNodeId():i.getLastNodeId(),i.focus())},r=e=>n`<oscd-tree
        .data=${[{id:`${e}:one`,label:`${e} / One`,children:[]},{id:`${e}:two`,label:`${e} / Two`,children:[]}]}
        selectionMode="none"
        .renderItem=${N}
        @navigation-boundary=${t}
        @selected-ids-changed=${L}
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
        accross multiple trees.
      </p>
      <button type="button" @click=${e}>Focus first tree</button>
      ${r(`Tree A`)} ${r(`Tree B`)}
      ${r(`Tree C`)}
    </div>`}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
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
        selectionMode="none"
        .renderItem=\${renderCompactItem}
        @navigation-boundary=\${handleBoundary}
        @selected-ids-changed=\${handleSelection}
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
        accross multiple trees.
      </p>
      <button type="button" @click=\${focusFirstTree}>Focus first tree</button>
      \${renderStackedTree('Tree A')} \${renderStackedTree('Tree B')}
      \${renderStackedTree('Tree C')}
    </div>\`;
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`MultipleSelection`,`SingleSelection`,`DisabledRows`,`UnknownChildren`,`DerivedIds`,`ToggleCustomization`,`PinnableLeaves`,`AlignedLeadingIcons`,`Filtered`,`StackedKeyboardNavigation`]}))();export{X as AlignedLeadingIcons,H as Default,q as DerivedIds,G as DisabledRows,Z as Filtered,U as MultipleSelection,Y as PinnableLeaves,W as SingleSelection,Q as StackedKeyboardNavigation,J as ToggleCustomization,K as UnknownChildren,$ as __namedExportsOrder,V as default};