import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,f as n,r,t as i}from"./lit-CCeopZMg.js";import{_ as a,h as o,r as s}from"./lit-element-DJJrs8Rf.js";import{n as c,t as l}from"./decorate-DTsqE9Ek.js";var u,d=e((()=>{i(),s(),c(),u=class extends r{constructor(...e){super(...e),this.selected=!1,this.active=!1,this.disabled=!1,this.hasLeadingContent=!1}connectedCallback(){super.connectedCallback(),this.hasLeadingContent=this.querySelector(`[slot="start"]`)!==null}handleStartSlotChange(e){this.hasLeadingContent=e.target.assignedElements({flatten:!0}).length>0}render(){return n`<div part="content" class="content">
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
    }

    :host([disabled]) {
      opacity: var(--md-list-item-disabled-opacity, 0.3);
    }

    :host([selected]) .headline {
      /*
       * Falls back to currentColor (like the resting ".headline" rule below)
       * rather than a fixed on-surface ink, so the label tracks whatever
       * "color" the containing row already resolved to for its selected
       * state (e.g. Tree.js's selected/active row rules), instead of
       * silently overriding it with an unrelated fixed color.
       */
      color: var(
        --oscd-tree-item-selected-headline-color,
        var(--md-list-item-label-text-color, currentColor)
      );
      font-weight: var(
        --oscd-tree-item-selected-headline-weight,
        var(--md-sys-typescale-body-large-weight-prominent, 500)
      );
    }

    /*
     * Like the selected headline rule above, falls back to currentColor so
     * the supporting text also tracks the row's selected-state color instead
     * of staying pinned to the resting on-surface-variant grey (which has
     * poor contrast once the row's background switches to a selected color).
     */
    :host([selected]) .supporting-text {
      color: var(
        --oscd-tree-item-selected-supporting-text-color,
        var(--md-list-item-supporting-text-color, currentColor)
      );
    }

    .content {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      min-width: 0;
      min-height: var(--md-list-item-one-line-container-height, 56px);
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
      color: var(--md-list-item-label-text-color, currentColor);
      font-family: var(--md-list-item-label-text-font, inherit);
      font-size: var(--md-list-item-label-text-size, 1rem);
      font-weight: var(--md-list-item-label-text-weight, 400);
      line-height: var(--md-list-item-label-text-line-height, 1.5rem);
    }

    .supporting-text {
      color: var(
        --md-list-item-supporting-text-color,
        var(--md-sys-color-on-surface-variant, #49454f)
      );
      font-family: var(--md-list-item-supporting-text-font, inherit);
      font-size: var(--md-list-item-supporting-text-size, 0.875rem);
      font-weight: var(--md-list-item-supporting-text-weight, 400);
      line-height: var(--md-list-item-supporting-text-line-height, 1.25rem);
    }

    ::slotted([slot='start']),
    ::slotted([slot='end']) {
      flex: 0 0 auto;
    }

    ::slotted([slot='start']) {
      color: var(
        --md-list-item-leading-icon-color,
        var(--md-sys-color-on-surface-variant, #49454f)
      );
    }

    ::slotted([slot='end']) {
      margin-inline-start: var(--oscd-tree-item-gap, 16px);
      color: var(
        --md-list-item-trailing-icon-color,
        var(--md-sys-color-on-surface-variant, #49454f)
      );
    }
  `}},l([a({type:Boolean,reflect:!0})],u.prototype,`selected`,void 0),l([a({type:Boolean,reflect:!0})],u.prototype,`active`,void 0),l([a({type:Boolean,reflect:!0})],u.prototype,`disabled`,void 0),l([o()],u.prototype,`hasLeadingContent`,void 0)})),f,p=e((()=>{d(),f=class extends u{}}));export{p as n,f as t};