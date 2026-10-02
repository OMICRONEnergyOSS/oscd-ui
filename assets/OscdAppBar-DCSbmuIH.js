import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,f as n,r,t as i}from"./lit-CCeopZMg.js";import{_ as a,n as o,r as s,t as c}from"./lit-element-DJJrs8Rf.js";import{n as l,t as u}from"./decorate-DTsqE9Ek.js";import{c as d,l as f}from"./delegate-C0FF0IFX.js";var p,m=e((()=>{i(),s(),o(),f(),l(),p=class extends c(r){constructor(...e){super(...e),this.scrolled=!1}static get scopedElements(){return{"oscd-elevation":d}}static{this.styles=t`
    header {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      position: sticky;
      top: 0;
      z-index: 4;
    }

    .main-header {
      padding: 0 12px;
      display: flex;
      flex-grow: 1;
      align-items: center;
      height: var(--oscd-app-bar-container-height, 64px);
      color: var(--md-sys-color-on-surface, #1d1b20);
      background-color: var(
        --oscd-app-bar-container-color,
        var(--md-sys-color-surface, #fef7ff)
      );
    }

    @media (max-width: 599px) {
      .main-header {
        height: var(--oscd-app-bar-container-small-height, 64px);
      }
    }

    :host([scrolled]) .main-header {
      background-color: var(
        --oscd-app-bar-on-scroll-container-color,
        var(--md-sys-color-surface-container, #f3edf7)
      );
    }

    oscd-elevation {
      --md-elevation-level: var(--oscd-app-bar-container-elevation, 0);
      --md-elevation-shadow-color: var(
        --oscd-app-bar-container-shadow-color,
        var(--md-sys-color-shadow, #000)
      );
    }

    :host([scrolled]) oscd-elevation {
      --md-elevation-level: var(
        --oscd-app-bar-on-scroll-container-elevation,
        2
      );
    }

    ::slotted([slot='title']),
    ::slotted([slot='alignMiddle']) {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: 16px;
      color: var(
        --oscd-app-bar-headline-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
      font-family: var(
        --oscd-app-bar-headline-font,
        var(
          --md-sys-typescale-title-large-font,
          var(--md-ref-typeface-brand, Roboto)
        )
      );
      font-size: var(
        --oscd-app-bar-headline-size,
        var(--md-sys-typescale-title-large-size, 1.375rem)
      );
      font-weight: var(
        --oscd-app-bar-headline-weight,
        var(--md-sys-typescale-title-large-weight, 400)
      );
      line-height: var(
        --oscd-app-bar-headline-line-height,
        var(--md-sys-typescale-title-large-line-height, 1.75rem)
      );
    }

    ::slotted([slot='alignStart']) {
      --md-icon-button-icon-color: var(
        --oscd-app-bar-leading-icon-color,
        var(--md-sys-color-on-surface, #1d1b20)
      );
    }

    ::slotted([slot='alignEnd']) {
      --md-icon-button-icon-color: var(
        --oscd-app-bar-trailing-icon-color,
        var(--md-sys-color-on-surface-variant, #49454f)
      );
    }

    .sub-header {
      display: flex;
      width: 100%;
      color: var(--md-sys-color-on-primary, #fff);
      background-color: var(--md-sys-color-primary, #6750a4);
    }

    .spacer {
      flex: 1;
    }
  `}render(){return n`
      <header>
        <div>
          <div class="main-header">
            <slot name="alignStart"></slot>
            <span class="spacer"></span>
            <slot name="alignMiddle"></slot>
            <span class="spacer"></span>
            <slot name="alignEnd"></slot>
          </div>
          <div class="sub-header">
            <slot></slot>
          </div>
        </div>
        <oscd-elevation part="elevation"></oscd-elevation>
      </header>
    `}},u([a({type:Boolean,reflect:!0})],p.prototype,`scrolled`,void 0)}));export{m as n,p as t};