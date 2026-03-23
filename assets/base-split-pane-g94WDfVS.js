import{i as S,x as b,a as w}from"./iframe-BA_UwkOg.js";import{S as C,n as g}from"./list-item-styles-DN_WYpBH.js";import{b as D,r as k}from"./OscdListItem-V0c71Avz.js";import{O as E}from"./OscdIconButton-B-767_TK.js";import{O as I}from"./OscdFilledTonalIconButton-DMFpH21-.js";function z(){try{return typeof window<"u"&&!!window.localStorage}catch{return!1}}function y(t,e,i){const s=t.id;if(s)return i?`${i}:${s}:${e}`:`${s}:${e}`}const u=Symbol("localstorage:entries"),x=Symbol("localstorage:lifecycleWrapped");function $(t){if(t[x])return;t[x]=!0;const e=t.connectedCallback;t.connectedCallback=function(){e?.call(this),t[u]?.forEach(n=>n.hydrateIfNeeded(this))};const i=t.requestUpdate;t.requestUpdate=function(a,n,o){const c=i?.call(this,a,n,o);return a===void 0||t[u]?.filter(h=>h.propName===a).forEach(h=>h.persistIfPossible(this)),c}}function T(t={}){return(e,i)=>{const s=String(i),a=Symbol(`${s}:hydrated`),n=Symbol(`${s}:disabled`),o=Symbol(`${s}:warnedMissingId`),c=r=>{r[o]||(console.warn(`[localstorage] ${s} requires a static host id for persistence. Dynamic IDs are not supported.`),r[o]=!0)},m=r=>{if(r[a]||r[n])return;if(!z()){"default"in t&&(r[i]=t.default),r[a]=!0;return}const d=y(r,s,t.namespace);if(!d){if(!r.isConnected)return;c(r),r[n]=!0;return}const v=localStorage.getItem(d);if(v!=null)try{r[i]=t.deserializer?t.deserializer(v):JSON.parse(v)}catch{"default"in t&&(r[i]=t.default)}else"default"in t&&(r[i]=t.default);r[a]=!0},h=r=>{if(r[n])return;const d=y(r,s,t.namespace);if(!d||!z()){if(!d){if(!r.isConnected)return;c(r),r[n]=!0}return}try{const v=t.serializer?t.serializer(r[i]):JSON.stringify(r[i]);localStorage.setItem(d,v)}catch{}};$(e),e[u]||(e[u]=[]),e[u].push({propName:i,propKey:s,hydratedSymbol:a,disabledSymbol:n,warnedMissingIdSymbol:o,hydrateIfNeeded:m,persistIfPossible:h})}}var _=Object.defineProperty,p=(t,e,i,s)=>{for(var a=void 0,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=o(e,i,a)||a);return a&&_(e,i,a),a};const f=class f extends C(S){constructor(){super(...arguments),this.defaultSize=300,this.size=this.defaultSize,this.min=0,this.isDragging=!1,this.startClient=0,this.startSize=0,this.handlePointerMove=e=>{if(!this.isDragging)return;const s=this.clientCoord(e)-this.startClient,a=this.startSize+s;this.size=this.clampSize(Math.round(a)),this.updateDividerAria(),this.dispatchResizeEvent()},this.handlePointerUp=e=>{const i=e.currentTarget;try{i.releasePointerCapture?.(e.pointerId)}catch{}i.removeEventListener("pointermove",this.handlePointerMove),i.removeEventListener("pointerup",this.handlePointerUp),i.removeEventListener("pointercancel",this.handlePointerUp),this.isDragging=!1,this.syncStateClasses(),this.updateDividerAria(),this.dispatchResizeEvent({final:!0})}}connectedCallback(){super.connectedCallback(),this.classList.toggle("horizontal",this.orientation==="horizontal"),this.classList.toggle("vertical",this.orientation==="vertical"),this.syncStateClasses()}updated(){this.syncStateClasses(),this.updateDividerAria()}isCollapsed(){return this.size<=this.min}getCollapseIconName(){return this.orientation==="horizontal"?"expand_less":"chevron_left"}getExpandIconName(){return this.orientation==="horizontal"?"expand_more":"chevron_right"}syncStateClasses(){this.classList.toggle("resizing",this.isDragging),this.classList.toggle("collapsed",this.isCollapsed()),this.classList.toggle("expanded",!this.isCollapsed())}measuredMax(){if(typeof this.max=="number")return this.max;const e=this.getBoundingClientRect();return this.orientation==="vertical"?Math.floor(e.width):Math.floor(e.height)}handlePointerDown(e){const i=e.currentTarget;i.setPointerCapture(e.pointerId),this.isDragging=!0,this.startClient=this.clientCoord(e),this.startSize=this.size,this.syncStateClasses(),i.addEventListener("pointermove",this.handlePointerMove),i.addEventListener("pointerup",this.handlePointerUp),i.addEventListener("pointercancel",this.handlePointerUp),this.dispatchResizeEvent()}handleKeyDown(e){switch(e.key){case"ArrowLeft":case"ArrowUp":e.preventDefault(),this.size=this.clampSize(this.size-8),this.dispatchResizeEvent(),this.updateDividerAria();break;case"ArrowRight":case"ArrowDown":e.preventDefault(),this.size=this.clampSize(this.size+8),this.dispatchResizeEvent(),this.updateDividerAria();break;case"Home":e.preventDefault(),this.size=this.clampSize(this.min),this.dispatchToggleEvent(),this.updateDividerAria();break;case"End":e.preventDefault(),this.size=this.clampSize(this.measuredMax()),this.dispatchToggleEvent(),this.updateDividerAria();break;case"PageDown":e.preventDefault(),this.size=this.clampSize(this.size+32),this.dispatchResizeEvent(),this.updateDividerAria();break;case"PageUp":e.preventDefault(),this.size=this.clampSize(this.size-32),this.dispatchResizeEvent(),this.updateDividerAria();break}}handleDividerDoubleClick(e){e.stopPropagation(),this.size=this.clampSize(this.defaultSize),this.dispatchResizeEvent({final:!0}),this.syncStateClasses(),this.updateDividerAria()}handleToggleIconPointerDown(e){e.stopPropagation()}handleToggleIconClick(e){e.stopPropagation(),this.size=this.isCollapsed()?this.clampSize(this.defaultSize):this.clampSize(this.min),this.syncStateClasses(),this.updateDividerAria(),this.dispatchResizeEvent({final:!0}),this.dispatchToggleEvent()}dispatchToggleEvent(){const e=new CustomEvent("split-toggle",{detail:{collapsed:this.isCollapsed(),size:this.size,source:"icon"},bubbles:!0,composed:!0});this.dispatchEvent(e)}clampSize(e){const i=this.measuredMax(),s=Math.max(0,Math.min(this.min,i)),a=Math.max(s,i);return Math.max(s,Math.min(e,a))}clientCoord(e){return this.orientation==="vertical"?e.clientX:e.clientY}dispatchResizeEvent(e){const i=new CustomEvent("split-resize",{detail:{size:this.size,final:!!e?.final},bubbles:!0,composed:!0});this.dispatchEvent(i)}updateDividerAria(){const e=this.renderRoot.querySelector(".divider");e&&(e.setAttribute("aria-valuenow",String(this.size)),e.setAttribute("aria-valuemax",String(this.measuredMax())))}renderDividerIcon(){const e=this.isCollapsed(),i=e?"expandIcon":"icon",s=e?this.getExpandIconName():this.getCollapseIconName();return b`
      <oscd-filled-tonal-icon-button
        class="divider-button"
        aria-label="${e?"Expand pane":"Collapse pane"}"
        @pointerdown=${this.handleToggleIconPointerDown}
        @click=${this.handleToggleIconClick}
      >
        <slot name="${i}">
          <oscd-icon class="toggle-fallback-icon"
            >${s}</oscd-icon
          >
        </slot>
      </oscd-filled-tonal-icon-button>
    `}renderSplit(e,i){const s=`${this.size}px`;return b`
      <div class="pane primary" style="flex-basis: ${s};">
        <slot name="${e}"></slot>
      </div>

      <div
        class="divider"
        role="separator"
        tabindex="0"
        aria-orientation="${this.orientation==="vertical"?"vertical":"horizontal"}"
        aria-valuemin="${this.min}"
        aria-valuemax="${this.measuredMax()}"
        aria-valuenow="${this.size}"
        @pointerdown=${this.handlePointerDown}
        @keydown=${this.handleKeyDown}
        @dblclick=${this.handleDividerDoubleClick}
      >
        ${this.renderDividerIcon()}
      </div>

      <div class="pane secondary">
        <slot name="${i}"></slot>
      </div>
    `}};f.scopedElements={"oscd-icon":D,"oscd-icon-button":E,"oscd-filled-tonal-icon-button":I},f.styles=w`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      overflow: hidden;
      --_divider-visual: var(
        --oscd-split-pane-divider-visual,
        2px
      ); /* visible line */
      --_divider-hit: var(
        --oscd-split-pane-divider-hit,
        10px
      ); /* total clickable area */
      --_divider-icon-size: var(--oscd-split-pane-divider-icon-size, 24px);
      --_divider-color: var(--oscd-split-pane-divider-color, var(--oscd-base1));
      --_divider-icon-color: var(
        --oscd-split-pane-divider-icon-color,
        var(--oscd-base1)
      );
      --_divider-hover: var(
        --oscd-split-pane-divider-hover,
        var(--oscd-primary)
      );
      --_divider-icon-hover-color: var(
        --oscd-split-pane-divider-icon-hover-color,
        var(--oscd-primary)
      );
    }

    :host(.resizing) .divider::after {
      background: var(--_divider-hover);
    }

    :host(.horizontal) {
      flex-direction: column;
    }

    .pane {
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 0;
      overflow: auto;
    }

    .primary {
      flex: 0 0 auto; /* controlled via inline style flex-basis */
    }

    .secondary {
      flex: 1 1 auto;
    }

    .divider {
      position: relative;
      flex: 0 0 auto;
      background: transparent;
      user-select: none;
      -webkit-user-select: none;
      touch-action: none;
    }

    :host(.vertical) .divider {
      flex: 0 0 var(--_divider-hit);
      width: var(--_divider-hit);
      cursor: col-resize;
    }

    :host(.horizontal) .divider {
      flex: 0 0 var(--_divider-hit);
      height: var(--_divider-hit);
      cursor: row-resize;
    }

    .divider::after {
      content: '';
      position: absolute;
      background: var(--_divider-color);
      transition: background 120ms ease;
    }

    :host(.vertical) .divider::after {
      width: var(--_divider-visual);
      height: 40%;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
    }

    :host(.horizontal) .divider::after {
      height: var(--_divider-visual);
      width: 40%;
      top: 50%;
      left: 30%;
      transform: translateY(-50%);
    }

    .divider:hover::after,
    .divider:active::after {
      background: var(--_divider-hover);
    }

    :host(.vertical) .divider:hover::after {
      height: 60%;
      top: 20%;
    }

    :host(.horizontal) .divider:hover::after {
      width: 60%;
      left: 20%;
    }

    .divider-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      display: inline-flex;
      padding: 0;
      margin: 0;
      border: 0;
      background: transparent;
      cursor: pointer;
      line-height: 1;
    }

    :host(.horizontal) .divider-button {
      height: 16px;
    }

    :host(.vertical) .divider-button {
      width: 16px;
    }

    .toggle-fallback-icon {
      --md-icon-size: var(--_divider-icon-size);
      color: var(--_divider-icon-color);
      transition: color 120ms ease;
    }

    .divider-button:hover .toggle-fallback-icon,
    .divider-button:active .toggle-fallback-icon {
      color: var(--_divider-icon-hover-color);
    }

    ::slotted(*) {
      min-width: 0;
      min-height: 0;
    }
  `;let l=f;p([g({type:Number,attribute:!1})],l.prototype,"defaultSize");p([g({type:Number,attribute:!1})],l.prototype,"size");p([g({type:Number})],l.prototype,"min");p([g({type:Number})],l.prototype,"max");p([k()],l.prototype,"isDragging");export{l as S,T as l};
