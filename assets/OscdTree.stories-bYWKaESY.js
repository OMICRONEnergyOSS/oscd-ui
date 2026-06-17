import{i as C,x as a,a as M,E as f}from"./iframe-C4uLaTi3.js";import{g as w}from"./index-CeNjisW3.js";import{g as F}from"./getStorybookMeta-fEcaYkww.js";import{n as l,S as K}from"./list-navigation-helpers-uOLGipP7.js";import{c as W,O as H,a as X,r as q}from"./OscdIcon-C3sU6W8j.js";import{O as V}from"./OscdCheckbox-BByuhJVy.js";import"./oscd-menu-item-D6eVNoir.js";import"./oscd-outlined-text-field-EweX-A8e.js";import"./preload-helper-PPVm8Dsz.js";import"./getStorybookHelpers-BPPERp-C.js";import"./oscd-filled-button-CEBWtmCm.js";import"./menuItemController-vk-DquCy.js";import"./OscdList-C90geFFa.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-BdcpFJ2q.js";import"./form-associated-DtXYuc2T.js";import"./checkbox-validator-CVPaXxLl.js";import"./OscdListItem-CcUpt_sr.js";import"./list-item-styles-CwxrGOCZ.js";import"./OscdMenuItem-AVFwwFRE.js";import"./query-assigned-nodes-EHSBqaR2.js";import"./OscdOutlinedTextField-Dd6Lhoh6.js";import"./shared-styles-E0E9mV4N.js";import"./style-map-Cl8m6Gme.js";import"./on-report-validity-D7FQpsi-.js";import"./OscdOutlinedField-DaicQdGe.js";import"./shared-styles-9iojKk-g.js";var Y=Object.defineProperty,T=(d,e,t,s)=>{for(var n=void 0,i=d.length-1,r;i>=0;i--)(r=d[i])&&(n=r(e,t,n)||n);return n&&Y(e,t,n),n};const R=class R extends C{constructor(){super(...arguments),this.selected=!1,this.active=!1,this.disabled=!1}render(){return a`<div part="content" class="content">
      <slot name="start"></slot>
      <span part="text" class="text">
        <span part="headline" class="headline"
          ><slot name="headline"></slot
        ></span>
        <span part="supporting-text" class="supporting-text"
          ><slot name="supporting-text"></slot
        ></span>
      </span>
      <slot name="end"></slot>
    </div>`}};R.styles=M`
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
      gap: var(--oscd-tree-item-gap, 16px);
      min-width: 0;
      min-height: var(
        --oscd-tree-item-min-height,
        var(--md-list-item-one-line-container-height, 56px)
      );
      width: 100%;
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
      color: var(
        --oscd-tree-item-trailing-icon-color,
        var(
          --md-list-item-trailing-icon-color,
          var(--md-sys-color-on-surface-variant, #49454f)
        )
      );
    }
  `;let x=R;T([l({type:Boolean,reflect:!0})],x.prototype,"selected");T([l({type:Boolean,reflect:!0})],x.prototype,"active");T([l({type:Boolean,reflect:!0})],x.prototype,"disabled");class N extends x{}var G=Object.defineProperty,c=(d,e,t,s)=>{for(var n=void 0,i=d.length-1,r;i>=0;i--)(r=d[i])&&(n=r(e,t,n)||n);return n&&G(e,t,n),n};const J=({node:d,id:e,selected:t,active:s,disabled:n})=>a`<oscd-tree-item
    ?selected=${t}
    ?active=${s}
    ?disabled=${n}
  >
    <span slot="headline">${"label"in d?String(d.label):e}</span>
  </oscd-tree-item>`,Q="/";function I(d){return d.children===void 0?"unknown":d.children.length>0?"branch":"leaf"}function L(d,e){return e<0?-1:Math.min(e,Math.max(0,d))}const E=class E extends K(C){constructor(){super(...arguments),this.data=[],this.selectedIds=[],this.expandedIds=[],this.selectionMode="none"}willUpdate(e){if(e.has("data")||e.has("expandedIds")||e.has("selectedIds")){const t=this.visibleRows();if(!t.length){this.activeId=void 0;return}(!this.activeId||!t.some(s=>s.id===this.activeId))&&(this.activeId=t[0].id)}}expand(e){this.expandedIds.includes(e)||this.setExpandedIds([...this.expandedIds,e])}collapse(e){this.expandedIds.includes(e)&&this.setExpandedIds(this.expandedIds.filter(t=>t!==e))}toggle(e){const t=this.visibleRows().find(s=>s.id===e);t&&this.toggleExpansion(t)}rowId(e,t){return e.id??this.getNodeId?.(e,t)??t.join(Q)}visibleRows(){const e=new Set(this.expandedIds),t=[],s=(n,i,r,p)=>{if(!n)return;const j=n.length;n.forEach((b,U)=>{const z=[...p,U],B=this.rowId(b,z);t.push({node:b,id:B,htmlId:`tree-row-${t.length}`,level:i,parentIds:r,ariaPositionInSet:U+1,ariaSetSize:j}),e.has(B)&&b.children&&s(b.children,i+1,[...r,B],z)})};return s(this.data,1,[],[]),t}renderContext(e){const t=this.selectedIds.includes(e.id);return{node:e.node,id:e.id,level:e.level,expanded:this.expandedIds.includes(e.id),selected:t,active:this.activeId===e.id,childrenState:I(e.node),selectable:this.selectionMode!=="none"&&this.isRowSelectable(e),disabled:this.isRowDisabled(e)}}accessibleLabel(e){return this.getNodeLabel?this.getNodeLabel(e.node,e.id):"label"in e.node&&e.node.label!==void 0?String(e.node.label):e.id}isRowSelectable(e){return this.isSelectable?this.isSelectable(e.node):!0}isRowDisabled(e){return this.isDisabled?this.isDisabled(e.node):!1}setExpandedIds(e){this.expandedIds=e,this.dispatchEvent(new CustomEvent("expanded-ids-changed",{detail:{expandedIds:e}}))}setSelectedIds(e,t){const s=this.selectedIds;this.selectedIds=e,this.dispatchEvent(new CustomEvent("selected-ids-changed",{detail:{selectedIds:e,previousSelectedIds:s,targetNode:t}}))}fireNodeEvent(e,t,s){const n=new CustomEvent(e,{bubbles:!0,cancelable:s?.cancelable??!1,detail:{node:t.node,id:t.id}});return this.dispatchEvent(n)}toggleExpansion(e){if(this.isRowDisabled(e)||I(e.node)==="leaf")return;if(this.expandedIds.includes(e.id)){this.setExpandedIds(this.expandedIds.filter(s=>s!==e.id)),this.fireNodeEvent("node-collapse",e),this.fireNodeEvent("node-toggle",e);return}this.fireNodeEvent("node-expand",e,{cancelable:!0})&&(this.setExpandedIds([...this.expandedIds,e.id]),this.fireNodeEvent("node-toggle",e))}toggleSelection(e){if(this.selectionMode==="none"||this.isRowDisabled(e)||!this.isRowSelectable(e))return;if(this.selectionMode==="single"){this.setSelectedIds([e.id],e.node);return}const t=this.selectedIds.includes(e.id);this.setSelectedIds(t?this.selectedIds.filter(s=>s!==e.id):[...this.selectedIds,e.id],e.node)}activateRow(e){this.activeId=e.id,this.fireNodeEvent("node-click",e)}handleRowClick(e,t){if(this.isRowDisabled(e)){t.preventDefault();return}if(this.activateRow(e),I(e.node)!=="leaf"){this.toggleExpansion(e);return}this.toggleSelection(e)}handleToggleClick(e,t){t.stopPropagation(),this.activeId=e.id,this.toggleExpansion(e)}handleKeyDown(e,t){const s=this.visibleRows(),n=s.findIndex(r=>r.id===e.id),i=s.length-1;switch(t.key){case"ArrowDown":t.preventDefault(),this.activeId=s[L(n+1,i)]?.id;break;case"ArrowUp":t.preventDefault(),this.activeId=s[L(n-1,i)]?.id;break;case"Home":t.preventDefault(),this.activeId=s[0]?.id;break;case"End":t.preventDefault(),this.activeId=s[i]?.id;break;case"ArrowRight":t.preventDefault(),this.stepIn(e,s,n);break;case"ArrowLeft":t.preventDefault(),this.stepOut(e);break;case"Enter":t.preventDefault(),this.activateRow(e),this.fireNodeEvent("node-activate",e),this.toggleSelection(e);break;case" ":t.preventDefault(),this.toggleSelection(e);break}}stepIn(e,t,s){if(I(e.node)==="leaf")return;if(!this.expandedIds.includes(e.id)){this.toggleExpansion(e);return}const i=t[s+1];i?.parentIds[i.parentIds.length-1]===e.id&&(this.activeId=i.id)}stepOut(e){if(this.expandedIds.includes(e.id)){this.toggleExpansion(e);return}const t=e.parentIds[e.parentIds.length-1];t&&(this.activeId=t)}renderSelection(e){if(this.selectionMode!=="multiple"||!this.isRowSelectable(e))return f;const t=this.selectedIds.includes(e.id);return a`<span
      part="selection"
      class="selection"
      aria-hidden="true"
      data-selected=${t?"true":"false"}
      ><oscd-checkbox
        tabindex="-1"
        ?checked=${t}
        ?disabled=${this.isRowDisabled(e)}
      ></oscd-checkbox
    ></span>`}renderToggle(e){const s=I(e.node)!=="leaf",n=this.expandedIds.includes(e.id);return a`<button
      part="toggle"
      class="toggle"
      ?disabled=${!s||this.isRowDisabled(e)}
      aria-label=${n?"Collapse":"Expand"}
      tabindex="-1"
      @click=${i=>this.handleToggleClick(e,i)}
    >
      ${s?a`<oscd-icon
            >${n?"expand_more":"chevron_right"}</oscd-icon
          >`:f}
    </button>`}renderRow(e){const t=this.renderContext(e),s=t.childrenState,n=t.selected,i=t.disabled,r=t.active;return a`<div
      id=${e.htmlId}
      part="row"
      class="row"
      role="treeitem"
      tabindex=${r?"0":"-1"}
      aria-level=${e.level}
      aria-posinset=${e.ariaPositionInSet}
      aria-setsize=${e.ariaSetSize}
      aria-label=${this.accessibleLabel(e)}
      aria-expanded=${s==="leaf"?f:t.expanded}
      aria-selected=${t.selectable?n:f}
      aria-disabled=${i?"true":f}
      data-active=${r?"true":"false"}
      data-selected=${n?"true":"false"}
      data-selection-mode=${this.selectionMode}
      data-disabled=${i?"true":"false"}
      style=${`--oscd-tree-row-level: ${e.level};`}
      @click=${p=>this.handleRowClick(e,p)}
      @keydown=${p=>this.handleKeyDown(e,p)}
    >
      <oscd-ripple for=${e.htmlId} ?disabled=${i}></oscd-ripple>
      <oscd-focus-ring for=${e.htmlId} inward></oscd-focus-ring>
      <span part="indent" class="indent" aria-hidden="true"></span>
      ${this.renderToggle(e)} ${this.renderSelection(e)}
      <span part="content" class="content"
        >${(this.renderItem??J)(t)}</span
      >
    </div>`}updated(){const e=this.renderRoot.querySelector('.row[data-active="true"]');e&&this.matches(":focus-within")&&e.focus()}render(){const e=this.visibleRows();return a`<div part="tree" class="tree" role="tree">
      ${e.map(t=>this.renderRow(t))}
    </div>`}};E.scopedElements={"oscd-checkbox":V,"oscd-focus-ring":X,"oscd-icon":H,"oscd-ripple":W,"oscd-tree-item":N},E.styles=M`
    :host {
      display: block;
      color: var(--oscd-tree-color, var(--md-sys-color-on-surface, #1d1b20));
      font-family: var(
        --oscd-tree-font-family,
        var(--oscd-text-font, sans-serif)
      );
      outline: none;
      --oscd-tree-indent-step: 24px;
      --oscd-tree-toggle-size: 32px;
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

    .toggle oscd-icon {
      font-size: 20px;
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
  `;let o=E;c([l({attribute:!1})],o.prototype,"data");c([l({attribute:!1})],o.prototype,"selectedIds");c([l({attribute:!1})],o.prototype,"expandedIds");c([l({attribute:!1})],o.prototype,"renderItem");c([l({attribute:!1})],o.prototype,"getNodeId");c([l({attribute:!1})],o.prototype,"getNodeLabel");c([l({attribute:!1})],o.prototype,"isSelectable");c([l({attribute:!1})],o.prototype,"isDisabled");c([l()],o.prototype,"selectionMode");c([q()],o.prototype,"activeId");class Z extends o{}customElements.define("oscd-tree-item",N);customElements.define("oscd-tree",Z);const{useArgs:ee}=__STORYBOOK_MODULE_PREVIEW_API__,{args:h,argTypes:m,meta:te}=F({tagName:"oscd-tree"}),g=[{id:"ied:PUB_A",label:"PUB_A",description:"Publisher IED",kind:"ied",children:[{id:"ap:PUB_A/AP1",label:"AP1",description:"Access point",kind:"access-point",children:[{id:"ld:PUB_A/AP1/LD_A",label:"LD_A",description:"Logical device",kind:"l-device",children:[{id:"ln:PUB_A|AP1|LD_A||LLN0|",label:"LLN0",description:"Logical node zero",kind:"logical-node",children:[]},{id:"ln:PUB_A|AP1|LD_A||TCTR|1",label:"TCTR1",description:"Current transformer",kind:"logical-node",children:[]},{id:"ln:PUB_A|AP1|LD_A||XCBR|1",label:"XCBR1",description:"Circuit breaker",kind:"logical-node",children:[]}]}]}]},{id:"ied:PUB_B",label:"PUB_B",description:"Publisher IED",kind:"ied",children:[{id:"ap:PUB_B/AP1",label:"AP1",description:"Access point",kind:"access-point",children:[{id:"ld:PUB_B/AP1/LD_B",label:"LD_B",description:"Logical device",kind:"l-device",children:[{id:"ln:PUB_B|AP1|LD_B||LLN0|",label:"LLN0",description:"Logical node zero",kind:"logical-node",children:[]},{id:"ln:PUB_B|AP1|LD_B||TCTR|1",label:"TCTR1",description:"Current transformer",kind:"logical-node",children:[]}]}]}]}],de=[...g,{id:"ied:REMOTE",label:"REMOTE",description:"Children are not loaded yet",kind:"ied"}],se=d=>{switch(d){case"ied":return"reportIcon";case"access-point":return"lan";case"l-device":return"dns";case"logical-node":return"article";default:return"circle"}},v=({node:d,selected:e,active:t,disabled:s})=>a`<oscd-tree-item
    ?selected=${e}
    ?active=${t}
    ?disabled=${s}
  >
    <oscd-icon slot="start">${se(d.kind)}</oscd-icon>
    <span slot="headline">${d.label}</span>
    <span slot="supporting-text">${d.description}</span>
  </oscd-tree-item>`,ne=({node:d,childrenState:e,selected:t,disabled:s})=>a`<oscd-tree-item ?selected=${t} ?disabled=${s}>
    <span slot="headline">${d.label}</span>
    <span slot="supporting-text">${d.kind} / ${e}</span>
  </oscd-tree-item>`,ie=(d,e)=>{const t=e.trim().toLowerCase();return t?[d.label,d.description,d.kind,d.id].filter(s=>!!s).some(s=>s.toLowerCase().includes(t)):!0},O=(d,e)=>{const t=e.trim();return t?d.map(s=>{const n=s.children?O(s.children,t):s.children;if(!ie(s,t)&&(!n||n.length===0))return;const r={...s};return s.children!==void 0&&(r.children=n),r}).filter(s=>!!s):d},S=d=>{w("selected-ids-changed")(d.detail.selectedIds)},u=d=>{w("expanded-ids-changed")(d.detail.expandedIds)},Re={...te,title:"Tree / Tree",tags:["autodocs"]},$={argTypes:m,args:{...h,".data":g,".expandedIds":["ied:PUB_A","ap:PUB_A/AP1"],".renderItem":v},render:d=>a`<div style="max-width: 520px;">
      <oscd-tree
        .data=${d[".data"]}
        .expandedIds=${d[".expandedIds"]}
        .renderItem=${d[".renderItem"]}
        @expanded-ids-changed=${u}
      ></oscd-tree>
    </div>`},A={argTypes:m,args:{...h,".data":g,".expandedIds":["ied:PUB_A","ap:PUB_A/AP1","ld:PUB_A/AP1/LD_A"],".selectedIds":["ln:PUB_A|AP1|LD_A||TCTR|1"],".renderItem":v,selectionMode:"multiple"},render:d=>a`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${d.selectionMode}
        .data=${d[".data"]}
        .expandedIds=${d[".expandedIds"]}
        .selectedIds=${d[".selectedIds"]}
        .renderItem=${d[".renderItem"]}
        .isSelectable=${e=>e.kind==="logical-node"}
        @selected-ids-changed=${S}
        @expanded-ids-changed=${u}
      ></oscd-tree>
    </div>`},y={argTypes:m,args:{...h,".data":g,".expandedIds":["ied:PUB_A","ap:PUB_A/AP1","ld:PUB_A/AP1/LD_A"],".selectedIds":["ln:PUB_A|AP1|LD_A||TCTR|1"],".renderItem":v,selectionMode:"single"},render:d=>a`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${d.selectionMode}
        .data=${d[".data"]}
        .expandedIds=${d[".expandedIds"]}
        .selectedIds=${d[".selectedIds"]}
        .renderItem=${d[".renderItem"]}
        .isSelectable=${e=>e.kind==="logical-node"}
        @selected-ids-changed=${S}
        @expanded-ids-changed=${u}
      ></oscd-tree>
    </div>`},_={argTypes:m,args:{...h,".data":g,".expandedIds":["ied:PUB_A","ap:PUB_A/AP1","ld:PUB_A/AP1/LD_A"],".selectedIds":["ln:PUB_A|AP1|LD_A||TCTR|1"],".renderItem":v,selectionMode:"multiple"},render:d=>a`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${d.selectionMode}
        .data=${d[".data"]}
        .expandedIds=${d[".expandedIds"]}
        .selectedIds=${d[".selectedIds"]}
        .renderItem=${d[".renderItem"]}
        .isSelectable=${e=>e.kind==="logical-node"}
        .isDisabled=${e=>e.kind==="logical-node"&&e.id!=="ln:PUB_A|AP1|LD_A||TCTR|1"}
        @selected-ids-changed=${S}
        @expanded-ids-changed=${u}
      ></oscd-tree>
    </div>`},P={argTypes:m,args:{...h,".data":de,".expandedIds":["ied:PUB_A"],".renderItem":ne},render:d=>a`<div style="max-width: 520px;">
      <oscd-tree
        .data=${d[".data"]}
        .expandedIds=${d[".expandedIds"]}
        .renderItem=${d[".renderItem"]}
        @node-expand=${e=>{const t=e;t.detail.id==="ied:REMOTE"&&(t.preventDefault(),w("lazy node-expand prevented")(t.detail.id))}}
        @expanded-ids-changed=${u}
      ></oscd-tree>
    </div>`},D={argTypes:m,args:{...h,".data":g.map(({id:d,...e})=>e),".expandedIds":["0","0/0"],".renderItem":v},render:d=>a`<div style="max-width: 520px;">
      <oscd-tree
        .data=${d[".data"]}
        .expandedIds=${d[".expandedIds"]}
        .renderItem=${d[".renderItem"]}
        @expanded-ids-changed=${u}
      ></oscd-tree>
    </div>`},k={argTypes:m,args:{...h,expandedIds:["ied:PUB_A"],filter:"TCTR"},render:d=>{const[e,t]=ee(),s=String(d.filter??""),n=d.expandedIds,i=O(g,s);return a`<div
      style="display: flex; flex-direction: column; gap: 12px; width: min(520px, 100%);"
    >
      <oscd-outlined-text-field
        label="Filter tree"
        .value=${s}
        @input=${r=>{const p=r.target;w("filter input")(p.value),t({filter:p.value})}}
      ></oscd-outlined-text-field>
      <oscd-tree
        .data=${i}
        .expandedIds=${n}
        .renderItem=${v}
        @expanded-ids-changed=${r=>{u(r),t({expandedIds:r.detail.expandedIds})}}
      ></oscd-tree>
    </div>`}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const Ue=["Default","MultipleSelection","SingleSelection","DisabledRows","UnknownChildren","DerivedIds","Filtered"];export{$ as Default,D as DerivedIds,_ as DisabledRows,k as Filtered,A as MultipleSelection,y as SingleSelection,P as UnknownChildren,Ue as __namedExportsOrder,Re as default};
