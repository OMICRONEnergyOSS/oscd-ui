import{i as N,x as r,a as j,E as u}from"./iframe-BlmIIjc8.js";import{g as f}from"./index-CeNjisW3.js";import{g as X}from"./getStorybookMeta-C_Dfhlzu.js";import{n as l,S as V}from"./list-navigation-helpers-BYaPgfdc.js";import{r as K,c as Y,O as G,a as J}from"./OscdIcon-BF9UpfCs.js";import{O as Q}from"./OscdCheckbox-C-VPC0EN.js";import"./oscd-menu-item-vFGSEMX-.js";import"./oscd-outlined-text-field-DfluZfkU.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-DQ9KU-nQ.js";import"./oscd-filled-button-pAHRa5nn.js";import"./menuItemController-k5rPONrB.js";import"./OscdList-a84XNi5w.js";import"./oscd-list-item-BA8wSq9a.js";import"./OscdListItem-BdyDKWIx.js";import"./list-item-styles-D7C7ftEO.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-D5inW5DY.js";import"./form-associated-ob18pg9T.js";import"./checkbox-validator-D1loSRI3.js";import"./OscdMenuItem-CBcjVsGV.js";import"./query-assigned-nodes-D4uADFl8.js";import"./OscdOutlinedTextField-BNzIBgFN.js";import"./shared-styles-DnEMhRC_.js";import"./style-map-B3PQ7mrl.js";import"./on-report-validity-D1pS5cYO.js";import"./OscdOutlinedField-OVSthKTl.js";import"./shared-styles-CsN18xnd.js";var ee=Object.defineProperty,S=(n,e,t,d)=>{for(var s=void 0,i=n.length-1,a;i>=0;i--)(a=n[i])&&(s=a(e,t,s)||s);return s&&ee(e,t,s),s};const R=class R extends N{constructor(){super(...arguments),this.selected=!1,this.active=!1,this.disabled=!1,this.hasLeadingContent=!1}handleStartSlotChange(e){this.hasLeadingContent=e.target.assignedElements({flatten:!0}).length>0}render(){return r`<div part="content" class="content">
      <span
        part="leading"
        class="leading ${this.hasLeadingContent?"has-leading":""}"
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
    </div>`}};R.styles=j`
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
  `;let I=R;S([l({type:Boolean,reflect:!0})],I.prototype,"selected");S([l({type:Boolean,reflect:!0})],I.prototype,"active");S([l({type:Boolean,reflect:!0})],I.prototype,"disabled");S([K()],I.prototype,"hasLeadingContent");class F extends I{}var te=Object.defineProperty,p=(n,e,t,d)=>{for(var s=void 0,i=n.length-1,a;i>=0;i--)(a=n[i])&&(s=a(e,t,s)||s);return s&&te(e,t,s),s};const ne=({node:n,id:e,selected:t,active:d,disabled:s})=>r`<oscd-tree-item
    ?selected=${t}
    ?active=${d}
    ?disabled=${s}
  >
    <span slot="headline">${"label"in n?String(n.label):e}</span>
  </oscd-tree-item>`,de="/";function $(n){return n.children===void 0?"unknown":n.children.length>0?"branch":"leaf"}function O(n,e){return e<0?-1:Math.min(e,Math.max(0,n))}const z=class z extends V(N){constructor(){super(...arguments),this.data=[],this.selectedIds=[],this.expandedIds=[],this.selectionMode="none",this.collapseIcon="chevron_right",this.expandIcon="expand_more",this.togglePosition="leading"}willUpdate(e){if(e.has("data")||e.has("expandedIds")||e.has("selectedIds")){const t=this.visibleRows();if(!t.length){this.activeId=void 0;return}(!this.activeId||!t.some(d=>d.id===this.activeId))&&(this.activeId=t[0].id)}}expand(e){this.expandedIds.includes(e)||this.setExpandedIds([...this.expandedIds,e])}collapse(e){this.expandedIds.includes(e)&&this.setExpandedIds(this.expandedIds.filter(t=>t!==e))}toggle(e){const t=this.visibleRows().find(d=>d.id===e);t&&this.toggleExpansion(t)}rowId(e,t){return e.id??this.getNodeId?.(e,t)??t.join(de)}visibleRows(){const e=new Set(this.expandedIds),t=[],d=(s,i,a,c)=>{if(!s)return;const H=s.length;s.forEach((b,C)=>{const M=[...c,C],U=this.rowId(b,M);t.push({node:b,id:U,htmlId:`tree-row-${t.length}`,level:i,parentIds:a,ariaPositionInSet:C+1,ariaSetSize:H}),e.has(U)&&b.children&&d(b.children,i+1,[...a,U],M)})};return d(this.data,1,[],[]),t}renderContext(e){const t=this.selectedIds.includes(e.id);return{node:e.node,id:e.id,level:e.level,expanded:this.expandedIds.includes(e.id),selected:t,active:this.activeId===e.id,childrenState:$(e.node),selectable:this.selectionMode!=="none"&&this.isRowSelectable(e),disabled:this.isRowDisabled(e)}}accessibleLabel(e){return this.getNodeLabel?this.getNodeLabel(e.node,e.id):"label"in e.node&&e.node.label!==void 0?String(e.node.label):e.id}isRowSelectable(e){return this.isSelectable?this.isSelectable(e.node):!0}isRowDisabled(e){return this.isDisabled?this.isDisabled(e.node):!1}setExpandedIds(e){this.expandedIds=e,this.dispatchEvent(new CustomEvent("expanded-ids-changed",{detail:{expandedIds:e}}))}setSelectedIds(e,t){const d=this.selectedIds;this.selectedIds=e,this.dispatchEvent(new CustomEvent("selected-ids-changed",{detail:{selectedIds:e,previousSelectedIds:d,targetNode:t}}))}fireNodeEvent(e,t,d){const s=new CustomEvent(e,{bubbles:!0,cancelable:d?.cancelable??!1,detail:{node:t.node,id:t.id}});return this.dispatchEvent(s)}toggleExpansion(e){if(this.isRowDisabled(e)||$(e.node)==="leaf")return;if(this.expandedIds.includes(e.id)){this.setExpandedIds(this.expandedIds.filter(d=>d!==e.id)),this.fireNodeEvent("node-collapse",e),this.fireNodeEvent("node-toggle",e);return}this.fireNodeEvent("node-expand",e,{cancelable:!0})&&(this.setExpandedIds([...this.expandedIds,e.id]),this.fireNodeEvent("node-toggle",e))}toggleSelection(e){if(this.selectionMode==="none"||this.isRowDisabled(e)||!this.isRowSelectable(e))return;if(this.selectionMode==="single"){this.setSelectedIds([e.id],e.node);return}const t=this.selectedIds.includes(e.id);this.setSelectedIds(t?this.selectedIds.filter(d=>d!==e.id):[...this.selectedIds,e.id],e.node)}activateRow(e){this.activeId=e.id,this.fireNodeEvent("node-click",e)}handleRowClick(e,t){if(this.isRowDisabled(e)){t.preventDefault();return}if(this.activateRow(e),$(e.node)!=="leaf"){this.toggleExpansion(e);return}this.toggleSelection(e)}handleToggleClick(e,t){t.stopPropagation(),this.activeId=e.id,this.toggleExpansion(e)}handleKeyDown(e,t){const d=this.visibleRows(),s=d.findIndex(a=>a.id===e.id),i=d.length-1;switch(t.key){case"ArrowDown":t.preventDefault(),this.activeId=d[O(s+1,i)]?.id;break;case"ArrowUp":t.preventDefault(),this.activeId=d[O(s-1,i)]?.id;break;case"Home":t.preventDefault(),this.activeId=d[0]?.id;break;case"End":t.preventDefault(),this.activeId=d[i]?.id;break;case"ArrowRight":t.preventDefault(),this.stepIn(e,d,s);break;case"ArrowLeft":t.preventDefault(),this.stepOut(e);break;case"Enter":t.preventDefault(),this.activateRow(e),this.fireNodeEvent("node-activate",e),this.toggleSelection(e);break;case" ":t.preventDefault(),this.toggleSelection(e);break}}stepIn(e,t,d){if($(e.node)==="leaf")return;if(!this.expandedIds.includes(e.id)){this.toggleExpansion(e);return}const i=t[d+1];i?.parentIds[i.parentIds.length-1]===e.id&&(this.activeId=i.id)}stepOut(e){if(this.expandedIds.includes(e.id)){this.toggleExpansion(e);return}const t=e.parentIds[e.parentIds.length-1];t&&(this.activeId=t)}renderSelection(e){if(this.selectionMode!=="multiple"||!this.isRowSelectable(e))return u;const t=this.selectedIds.includes(e.id);return r`<span
      part="selection"
      class="selection"
      aria-hidden="true"
      data-selected=${t?"true":"false"}
      ><oscd-checkbox
        tabindex="-1"
        ?checked=${t}
        ?disabled=${this.isRowDisabled(e)}
      ></oscd-checkbox
    ></span>`}renderToggle(e,t){const d=t.childrenState!=="leaf",s=t.expanded;if(!d&&this.renderLeafAccessory){const i=this.renderLeafAccessory(t);if(i!==u&&i!=null&&i!==!1)return r`<div
          part="accessory"
          class="accessory"
          @click=${a=>a.stopPropagation()}
          @keydown=${a=>this.handleAccessoryKeydown(a)}
        >
          ${i}
        </div>`}return r`<button
      part="toggle"
      class="toggle"
      ?disabled=${!d||t.disabled}
      aria-label=${s?"Collapse":"Expand"}
      tabindex="-1"
      @click=${i=>this.handleToggleClick(e,i)}
    >
      ${d?r`<oscd-icon
            >${s?this.expandIcon:this.collapseIcon}</oscd-icon
          >`:u}
    </button>`}handleAccessoryKeydown(e){(e.key==="Enter"||e.key===" "||e.key==="Spacebar")&&e.stopPropagation()}renderRow(e){const t=this.renderContext(e),d=t.childrenState,s=t.selected,i=t.disabled,a=t.active;return r`<div
      id=${e.htmlId}
      part="row"
      class="row"
      role="treeitem"
      tabindex=${a?"0":"-1"}
      aria-level=${e.level}
      aria-posinset=${e.ariaPositionInSet}
      aria-setsize=${e.ariaSetSize}
      aria-label=${this.accessibleLabel(e)}
      aria-expanded=${d==="leaf"?u:t.expanded}
      aria-selected=${t.selectable?s:u}
      aria-disabled=${i?"true":u}
      data-active=${a?"true":"false"}
      data-selected=${s?"true":"false"}
      data-selection-mode=${this.selectionMode}
      data-disabled=${i?"true":"false"}
      style=${`--oscd-tree-row-level: ${e.level};`}
      @click=${c=>this.handleRowClick(e,c)}
      @keydown=${c=>this.handleKeyDown(e,c)}
    >
      <oscd-ripple for=${e.htmlId} ?disabled=${i}></oscd-ripple>
      <oscd-focus-ring for=${e.htmlId} inward></oscd-focus-ring>
      <span part="indent" class="indent" aria-hidden="true"></span>
      ${this.togglePosition==="leading"?this.renderToggle(e,t):u}
      ${this.renderSelection(e)}
      <span part="content" class="content"
        >${(this.renderItem??ne)(t)}</span
      >
      ${this.togglePosition==="trailing"?this.renderToggle(e,t):u}
    </div>`}updated(){if(this.renderRoot instanceof ShadowRoot?this.renderRoot.activeElement?.closest(".accessory"):null)return;const t=this.renderRoot.querySelector('.row[data-active="true"]');t&&this.matches(":focus-within")&&t.focus()}render(){const e=this.visibleRows();return r`<div part="tree" class="tree" role="tree">
      ${e.map(t=>this.renderRow(t))}
    </div>`}};z.scopedElements={"oscd-checkbox":Q,"oscd-focus-ring":J,"oscd-icon":G,"oscd-ripple":Y,"oscd-tree-item":F},z.styles=j`
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

    .toggle:disabled {
      cursor: default;
      opacity: 0;
    }

    :host([toggle-position='trailing']) .toggle {
      margin-inline-start: var(--oscd-tree-trailing-toggle-gap, 4px);
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
  `;let o=z;p([l({attribute:!1})],o.prototype,"data");p([l({attribute:!1})],o.prototype,"selectedIds");p([l({attribute:!1})],o.prototype,"expandedIds");p([l({attribute:!1})],o.prototype,"renderItem");p([l({attribute:!1})],o.prototype,"renderLeafAccessory");p([l({attribute:!1})],o.prototype,"getNodeId");p([l({attribute:!1})],o.prototype,"getNodeLabel");p([l({attribute:!1})],o.prototype,"isSelectable");p([l({attribute:!1})],o.prototype,"isDisabled");p([l()],o.prototype,"selectionMode");p([l({attribute:"collapse-icon"})],o.prototype,"collapseIcon");p([l({attribute:"expand-icon"})],o.prototype,"expandIcon");p([l({reflect:!0,attribute:"toggle-position"})],o.prototype,"togglePosition");p([K()],o.prototype,"activeId");class se extends o{}customElements.define("oscd-tree-item",F);customElements.define("oscd-tree",se);const{useArgs:W}=__STORYBOOK_MODULE_PREVIEW_API__,{args:g,argTypes:h,meta:ie}=X({tagName:"oscd-tree"}),m=[{id:"ied:PUB_A",label:"PUB_A",description:"Publisher IED",kind:"ied",children:[{id:"ap:PUB_A/AP1",label:"AP1",description:"Access point",kind:"access-point",children:[{id:"ld:PUB_A/AP1/LD_A",label:"LD_A",description:"Logical device",kind:"l-device",children:[{id:"ln:PUB_A|AP1|LD_A||LLN0|",label:"LLN0",description:"Logical node zero",kind:"logical-node",children:[]},{id:"ln:PUB_A|AP1|LD_A||TCTR|1",label:"TCTR1",description:"Current transformer",kind:"logical-node",children:[]},{id:"ln:PUB_A|AP1|LD_A||XCBR|1",label:"XCBR1",description:"Circuit breaker",kind:"logical-node",children:[]}]}]}]},{id:"ied:PUB_B",label:"PUB_B",description:"Publisher IED",kind:"ied",children:[{id:"ap:PUB_B/AP1",label:"AP1",description:"Access point",kind:"access-point",children:[{id:"ld:PUB_B/AP1/LD_B",label:"LD_B",description:"Logical device",kind:"l-device",children:[{id:"ln:PUB_B|AP1|LD_B||LLN0|",label:"LLN0",description:"Logical node zero",kind:"logical-node",children:[]},{id:"ln:PUB_B|AP1|LD_B||TCTR|1",label:"TCTR1",description:"Current transformer",kind:"logical-node",children:[]}]}]}]}],ae=[...m,{id:"ied:REMOTE",label:"REMOTE",description:"Children are not loaded yet",kind:"ied"}],q=n=>{switch(n){case"ied":return"reportIcon";case"access-point":return"lan";case"l-device":return"dns";case"logical-node":return"article";default:return"circle"}},v=({node:n,selected:e,active:t,disabled:d})=>r`<oscd-tree-item
    ?selected=${e}
    ?active=${t}
    ?disabled=${d}
  >
    <oscd-icon slot="start">${q(n.kind)}</oscd-icon>
    <span slot="headline">${n.label}</span>
    <span slot="supporting-text">${n.description}</span>
  </oscd-tree-item>`,re=({node:n,childrenState:e,selected:t,disabled:d})=>r`<oscd-tree-item ?selected=${t} ?disabled=${d}>
    <span slot="headline">${n.label}</span>
    <span slot="supporting-text">${n.kind} / ${e}</span>
  </oscd-tree-item>`,oe=({node:n,selected:e,active:t,disabled:d})=>r`<oscd-tree-item
    ?selected=${e}
    ?active=${t}
    ?disabled=${d}
  >
    ${n.kind==="ied"?r`<oscd-icon slot="start">${q(n.kind)}</oscd-icon>`:""}
    <span slot="headline">${n.label}</span>
    <span slot="supporting-text">${n.description}</span>
  </oscd-tree-item>`,le=(n,e)=>{const t=e.trim().toLowerCase();return t?[n.label,n.description,n.kind,n.id].filter(d=>!!d).some(d=>d.toLowerCase().includes(t)):!0},Z=(n,e)=>{const t=e.trim();return t?n.map(d=>{const s=d.children?Z(d.children,t):d.children;if(!le(d,t)&&(!s||s.length===0))return;const a={...d};return d.children!==void 0&&(a.children=s),a}).filter(d=>!!d):n},E=n=>{f("selected-ids-changed")(n.detail.selectedIds)},ce=r`<svg
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
</svg>`,pe=r`<svg
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
</svg>`,x=n=>{f("expanded-ids-changed")(n.detail.expandedIds)},Ne={...ie,title:"Tree / Tree",tags:["autodocs"]},y={argTypes:h,args:{...g,".data":m,".expandedIds":["ied:PUB_A","ap:PUB_A/AP1"],".renderItem":v},render:n=>r`<div style="max-width: 520px;">
      <oscd-tree
        .data=${n[".data"]}
        .expandedIds=${n[".expandedIds"]}
        .renderItem=${n[".renderItem"]}
        @expanded-ids-changed=${x}
      ></oscd-tree>
    </div>`},A={argTypes:h,args:{...g,".data":m,".expandedIds":["ied:PUB_A","ap:PUB_A/AP1","ld:PUB_A/AP1/LD_A"],".selectedIds":["ln:PUB_A|AP1|LD_A||TCTR|1"],".renderItem":v,selectionMode:"multiple"},render:n=>r`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${n.selectionMode}
        .data=${n[".data"]}
        .expandedIds=${n[".expandedIds"]}
        .selectedIds=${n[".selectedIds"]}
        .renderItem=${n[".renderItem"]}
        .isSelectable=${e=>e.kind==="logical-node"}
        @selected-ids-changed=${E}
        @expanded-ids-changed=${x}
      ></oscd-tree>
    </div>`},P={argTypes:h,args:{...g,".data":m,".expandedIds":["ied:PUB_A","ap:PUB_A/AP1","ld:PUB_A/AP1/LD_A"],".selectedIds":["ln:PUB_A|AP1|LD_A||TCTR|1"],".renderItem":v,selectionMode:"single"},render:n=>r`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${n.selectionMode}
        .data=${n[".data"]}
        .expandedIds=${n[".expandedIds"]}
        .selectedIds=${n[".selectedIds"]}
        .renderItem=${n[".renderItem"]}
        .isSelectable=${e=>e.kind==="logical-node"}
        @selected-ids-changed=${E}
        @expanded-ids-changed=${x}
      ></oscd-tree>
    </div>`},w={argTypes:h,args:{...g,".data":m,".expandedIds":["ied:PUB_A","ap:PUB_A/AP1","ld:PUB_A/AP1/LD_A"],".selectedIds":["ln:PUB_A|AP1|LD_A||TCTR|1"],".renderItem":v,selectionMode:"multiple"},render:n=>r`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${n.selectionMode}
        .data=${n[".data"]}
        .expandedIds=${n[".expandedIds"]}
        .selectedIds=${n[".selectedIds"]}
        .renderItem=${n[".renderItem"]}
        .isSelectable=${e=>e.kind==="logical-node"}
        .isDisabled=${e=>e.kind==="logical-node"&&e.id!=="ln:PUB_A|AP1|LD_A||TCTR|1"}
        @selected-ids-changed=${E}
        @expanded-ids-changed=${x}
      ></oscd-tree>
    </div>`},_={argTypes:h,args:{...g,".data":ae,".expandedIds":["ied:PUB_A"],".renderItem":re},render:n=>r`<div style="max-width: 520px;">
      <oscd-tree
        .data=${n[".data"]}
        .expandedIds=${n[".expandedIds"]}
        .renderItem=${n[".renderItem"]}
        @node-expand=${e=>{const t=e;t.detail.id==="ied:REMOTE"&&(t.preventDefault(),f("lazy node-expand prevented")(t.detail.id))}}
        @expanded-ids-changed=${x}
      ></oscd-tree>
    </div>`},L={argTypes:h,args:{...g,".data":m.map(({id:n,...e})=>e),".expandedIds":["0","0/0"],".renderItem":v},render:n=>r`<div style="max-width: 520px;">
      <oscd-tree
        .data=${n[".data"]}
        .expandedIds=${n[".expandedIds"]}
        .renderItem=${n[".renderItem"]}
        @expanded-ids-changed=${x}
      ></oscd-tree>
    </div>`},k={argTypes:{...h,togglePosition:{name:"toggle-position",control:{type:"inline-radio"},options:["leading","trailing"],description:"Placement of the expand/collapse toggle within each row."},collapseIcon:{name:"collapse-icon",control:{type:"text"},description:"Icon shown on the toggle when a branch is collapsed."},expandIcon:{name:"expand-icon",control:{type:"text"},description:"Icon shown on the toggle when a branch is expanded."}},args:{...g,".data":m,".expandedIds":["ied:PUB_A","ap:PUB_A/AP1"],".renderItem":v,togglePosition:"trailing",collapseIcon:"chevron_right",expandIcon:"expand_more"},render:n=>r`<div style="max-width: 520px;">
      <oscd-tree
        toggle-position=${n.togglePosition}
        collapse-icon=${n.collapseIcon}
        expand-icon=${n.expandIcon}
        .data=${n[".data"]}
        .expandedIds=${n[".expandedIds"]}
        .renderItem=${n[".renderItem"]}
        @expanded-ids-changed=${x}
      ></oscd-tree>
    </div>`},B={argTypes:h,args:{...g,".data":m,".expandedIds":["ied:PUB_A","ap:PUB_A/AP1","ld:PUB_A/AP1/LD_A"],".renderItem":v,togglePosition:"trailing",pinnedIds:["ln:PUB_A|AP1|LD_A||TCTR|1"]},render:n=>{const[e,t]=W(),d=n.pinnedIds??[],s=i=>{const a=d.includes(i)?d.filter(c=>c!==i):[...d,i];f("pinned-ids-changed")(a),t({pinnedIds:a})};return r`<div style="max-width: 520px;">
      <oscd-tree
        toggle-position=${n.togglePosition}
        .data=${n[".data"]}
        .expandedIds=${n[".expandedIds"]}
        .renderItem=${n[".renderItem"]}
        .renderLeafAccessory=${({node:i,id:a})=>{const c=d.includes(a);return r`<button
            aria-label=${c?`Unpin ${i.label}`:`Pin ${i.label}`}
            aria-pressed=${c}
            @click=${()=>s(a)}
          >
            <oscd-icon style="--md-icon-size: 20px;"
              >${c?pe:ce}</oscd-icon
            >
          </button>`}}
        @expanded-ids-changed=${x}
      ></oscd-tree>
    </div>`}},T={argTypes:{...h,indentStep:{name:"--oscd-tree-indent-step",control:{type:"text"},description:"Drives both per-level indentation and the leading icon column width. Because a leading icon occupies exactly one indent step, icon-less children align their text under their iconed parent automatically. Set it large enough to hold the icon (e.g. 40px)."}},args:{...g,".data":m,".expandedIds":["ied:PUB_A","ap:PUB_A/AP1","ld:PUB_A/AP1/LD_A"],".renderItem":oe,togglePosition:"trailing",indentStep:"40px"},render:n=>r`<div style="max-width: 520px;">
      <oscd-tree
        style="--oscd-tree-indent-step: ${n.indentStep};"
        toggle-position=${n.togglePosition}
        .data=${n[".data"]}
        .expandedIds=${n[".expandedIds"]}
        .renderItem=${n[".renderItem"]}
        @expanded-ids-changed=${x}
      ></oscd-tree>
    </div>`},D={argTypes:h,args:{...g,expandedIds:["ied:PUB_A"],filter:"TCTR"},render:n=>{const[e,t]=W(),d=String(n.filter??""),s=n.expandedIds,i=Z(m,d);return r`<div
      style="display: flex; flex-direction: column; gap: 12px; width: min(520px, 100%);"
    >
      <oscd-outlined-text-field
        label="Filter tree"
        .value=${d}
        @input=${a=>{const c=a.target;f("filter input")(c.value),t({filter:c.value})}}
      ></oscd-outlined-text-field>
      <oscd-tree
        .data=${i}
        .expandedIds=${s}
        .renderItem=${v}
        @expanded-ids-changed=${a=>{x(a),t({expandedIds:a.detail.expandedIds})}}
      ></oscd-tree>
    </div>`}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const je=["Default","MultipleSelection","SingleSelection","DisabledRows","UnknownChildren","DerivedIds","ToggleCustomization","PinnableLeaves","AlignedLeadingIcons","Filtered"];export{T as AlignedLeadingIcons,y as Default,L as DerivedIds,w as DisabledRows,D as Filtered,A as MultipleSelection,B as PinnableLeaves,P as SingleSelection,k as ToggleCustomization,_ as UnknownChildren,je as __namedExportsOrder,Ne as default};
