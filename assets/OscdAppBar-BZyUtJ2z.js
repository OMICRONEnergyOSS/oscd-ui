import{i as t,a as r,x as o}from"./iframe-CprjnxQ1.js";import{S as l,O as i}from"./list-item-styles-CjF7S3P4.js";const a=class a extends l(t){static get scopedElements(){return{"oscd-elevation":i}}render(){return o`
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
    `}};a.styles=r`
    :host {
      --md-elevation-level: var(--oscd-app-bar-elevation, 3);
      --md-elevation-shadow-color: var(
        --oscd-app-bar-shadow-color,
        var(--md-sys-color-shadow, #000)
      );
      --app-bar-color: var(
        --oscd-app-bar-color,
        var(--md-sys-color-on-primary, #1d1b20)
      );
      --app-bar-background-color: var(
        --oscd-app-bar-background-color,
        var(--md-sys-color-primary, #fff)
      );
      --app-bar-title-font-family: var(
        --oscd-app-bar-title-font-family,
        var(
          --md-sys-typescale-body-large-font,
          var(--md-ref-typeface-plain, Roboto)
        )
      );
      --app-bar-title-font-size: var(
        --oscd-app-bar-title-font-size,
        var(--md-sys-typescale-body-large-size, 1.25rem)
      );
      --app-bar-title-line-height: var(
        --oscd-app-bar-title-line-height,
        var(--md-sys-typescale-body-large-line-height, 2rem)
      );
      --app-bar-title-font-weight: var(
        --oscd-app-bar-title-font-weight,
        var(
          --md-sys-typescale-body-large-weight,
          var(--md-ref-typeface-weight-regular, 500)
        )
      );
      --md-icon-button-icon-color: var(--app-bar-color);
    }

    header {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      position: sticky;
      top: 0;
      z-index: 4;
      color: var(--app-bar-color);
      background-color: var(--app-bar-background-color);
    }

    .main-header {
      padding: 0 12px;
      display: flex;
      flex-grow: 1;
      align-items: center;
      height: var(--app-bar-height, 54px);
    }

    @media (max-width: 599px) {
      .main-header {
        height: var(--app-bar-small-height, 48px);
      }
    }

    ::slotted([slot='title']) {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: 16px;
      font-family: var(--app-bar-title-font-family);
      font-size: var(--app-bar-title-font-size);
      font-weight: var(--app-bar-title-font-weight);
      line-height: var(--app-bar-title-line-height);
    }

    .sub-header {
      display: flex;
      width: 100%;
    }

    .spacer {
      flex: 1;
    }
  `;let e=a;export{e as O};
