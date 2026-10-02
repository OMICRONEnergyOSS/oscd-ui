import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,f as n,o as r,r as i,t as a}from"./lit-CCeopZMg.js";import{_ as o,h as s,n as c,r as l,t as u}from"./lit-element-DJJrs8Rf.js";import{n as d,t as f}from"./decorate-DTsqE9Ek.js";import{c as p,i as m,l as h,r as g}from"./delegate-C0FF0IFX.js";import{t as _}from"./oscd-filled-button-D1F1Vmn7.js";import{o as v,s as y}from"./OscdItem-B_us6arR.js";import{n as b,t as x}from"./OscdIconButton-BILB2RAM.js";import{t as S}from"./oscd-text-button-BYmrHTny.js";import{t as C}from"./oscd-dialog--u3qg9Ta.js";import{t as w}from"./oscd-select-option-Dl9s0bWG.js";import{t as T}from"./oscd-outlined-text-field-_u-7NZbU.js";import{t as E}from"./oscd-outlined-select-BjLjAz8s.js";import{i as D,n as O,t as k}from"./ref-BIO63I2T.js";var A,j,M,N,P,F=e((()=>{a(),l(),g(),c(),h(),y(),b(),d(),A=160,j={info:`info`,success:`check_circle`,warning:`warning`,error:`cancel`},M={info:`Info:`,success:`Success:`,warning:`Warning:`,error:`Error:`},N=0,P=class e extends u(i){constructor(...e){super(...e),this.defaultAutoDismissMs=5e3,this.autoDismissMsPerWord=500,this.minAutoDismissMs=5e3,this.maxAutoDismissMs=15e3,this.maxVisible=1,this.mode=`replace`,this.notifications=[],this.queuedNotifications=[]}static{this.scopedElements={"oscd-elevation":p,"oscd-icon":v,"oscd-icon-button":x}}disconnectedCallback(){super.disconnectedCallback(),e.clearTimeouts(this.notifications),e.clearTimeouts(this.queuedNotifications)}show(t){let n={id:`snackbar-${++N}`,message:t.message,variant:t.variant??`info`,variantLabel:t.variantLabel,dismissible:t.dismissible??!0,action:t.action,autoDismiss:t.autoDismiss};return(t.mode??this.mode)===`replace`?(this.dismissNotifications(this.notifications),e.clearTimeouts(this.queuedNotifications),this.queuedNotifications=[],this.notifications=[...this.notifications.filter(e=>!e.closing),n],this.scheduleAutoDismiss(n),n.id):(this.visibleNotifications.length<this.visibleLimit?(this.notifications=[...this.notifications,n],this.scheduleAutoDismiss(n)):this.queuedNotifications=[...this.queuedNotifications,n],n.id)}close(t){if(t){let e=this.queuedNotifications.length;this.queuedNotifications=this.queuedNotifications.filter(e=>e.id!==t);let n=this.notifications.filter(e=>e.id===t);if(n.length===0&&this.queuedNotifications.length!==e||n.length===0)return;this.dismissNotifications(n);return}let n=this.notifications;e.clearTimeouts(n),e.clearTimeouts(this.queuedNotifications),this.queuedNotifications=[],n.length!==0&&this.dismissNotifications(n)}dismissNotifications(t){e.clearTimeouts(t),this.notifications=this.notifications.map(e=>t.includes(e)?{...e,closing:!0}:e),setTimeout(()=>{this.notifications=this.notifications.filter(e=>!t.some(t=>t.id===e.id)),this.promoteQueuedNotifications()},A)}handleActionClick(e){e.action?.onClick(),this.close(e.id)}handleCloseClick(e){this.close(e.id)}get visibleLimit(){return Math.max(1,Math.floor(this.maxVisible))}get visibleNotifications(){return this.notifications.filter(e=>!e.closing)}static clearTimeouts(e){e.forEach(e=>{clearTimeout(e.timeoutId)})}promoteQueuedNotifications(){let e=this.visibleLimit-this.visibleNotifications.length;if(e<=0||this.queuedNotifications.length===0)return;let t=this.queuedNotifications.slice(0,e);this.queuedNotifications=this.queuedNotifications.slice(e),this.notifications=[...this.notifications,...t],t.forEach(e=>{this.scheduleAutoDismiss(e)})}scheduleAutoDismiss(e){let t=this.resolveAutoDismissMs(e,e.autoDismiss);t!==void 0&&(e.timeoutId=setTimeout(()=>{this.close(e.id)},t))}resolveAutoDismissMs(e,t){if(t!==!1){if(typeof t==`number`)return t>0?t:void 0;if(t===!0||!(e.variant===`error`||e.action))return this.calculateAutoDismissMs(e.message)}}calculateAutoDismissMs(e){if(this.defaultAutoDismissMs<=0)return;let t=e.trim().split(/\s+/).filter(Boolean).length,n=this.defaultAutoDismissMs+t*this.autoDismissMsPerWord;return Math.min(this.maxAutoDismissMs,Math.max(this.minAutoDismissMs,n))}renderAction(e){return e.action?n`<button
      class="action"
      part="action"
      type="button"
      @click=${()=>this.handleActionClick(e)}
    >
      <oscd-icon part="action-icon">arrow_forward</oscd-icon>
      <span part="action-label">${e.action.label}</span>
    </button>`:r}renderCloseButton(e){return e.dismissible?n`<oscd-icon-button
      class="close"
      part="close"
      aria-label="Close"
      @click=${()=>this.handleCloseClick(e)}
    >
      <oscd-icon>close</oscd-icon>
    </oscd-icon-button>`:r}renderNotification(e){return n`<div
      class=${m({snackbar:!0,[e.variant]:!0,closing:!!e.closing})}
      part="snackbar"
      role=${e.variant===`error`?`alert`:`status`}
    >
      <oscd-icon class="variant-icon" part="icon" aria-hidden="true"
        >${j[e.variant]}</oscd-icon
      >
      <span class="visually-hidden"
        >${e.variantLabel??M[e.variant]}
      </span>
      <span class="message" part="message">${e.message}</span>
      ${this.renderAction(e)} ${this.renderCloseButton(e)}
      <oscd-elevation part="elevation"></oscd-elevation>
    </div>`}render(){return n`${[...this.notifications].reverse().map(e=>this.renderNotification(e))}`}static{this.styles=t`
    :host {
      box-sizing: border-box;
      display: flex;
      position: fixed;
      bottom: var(--oscd-snackbar-bottom, 16px);
      left: 50%;
      flex-direction: column-reverse;
      align-items: center;
      gap: var(--oscd-snackbar-gap, 8px);
      width: max-content;
      max-width: var(--oscd-snackbar-max-width, 80vw);
      transform: translateX(-50%);
      z-index: var(--oscd-snackbar-z-index, 9999);
      pointer-events: none;
    }

    .snackbar {
      box-sizing: border-box;
      display: grid;
      position: relative;
      flex: 0 0 auto;
      grid-template-columns: auto minmax(0, 1fr) auto auto;
      align-items: center;
      width: max-content;
      min-width: var(--oscd-snackbar-min-width, min(360px, 80vw));
      max-width: 100%;
      min-height: var(--oscd-snackbar-min-height, 48px);
      padding: var(--oscd-snackbar-container-padding, 12px 16px);
      --_container-color: var(
        --oscd-snackbar-container-color,
        var(--md-sys-color-inverse-surface, #313033)
      );
      --_supporting-text-color: var(
        --oscd-snackbar-supporting-text-color,
        var(--md-sys-color-inverse-on-surface, #f4eff4)
      );
      --_icon-color: var(
        --oscd-snackbar-icon-color,
        var(--md-sys-color-inverse-on-surface, #f4eff4)
      );
      --_action-label-text-color: var(
        --oscd-snackbar-action-label-text-color,
        var(--md-sys-color-inverse-primary, #d0bcff)
      );
      --_close-icon-color: var(
        --oscd-snackbar-close-icon-color,
        var(--md-sys-color-inverse-on-surface, #f4eff4)
      );
      --md-elevation-level: var(--oscd-snackbar-container-elevation, 3);
      --md-icon-button-icon-color: var(--_close-icon-color);
      color: var(--_supporting-text-color);
      background: var(--_container-color);
      border-radius: var(
        --oscd-snackbar-container-shape,
        var(--md-sys-shape-corner-extra-small, 4px)
      );
      font-family: var(
        --oscd-snackbar-font-family,
        var(--md-sys-typescale-body-large-font)
      );
      font-size: var(
        --oscd-snackbar-font-size,
        var(--md-sys-typescale-body-large-size)
      );
      line-height: var(
        --oscd-snackbar-line-height,
        var(--md-sys-typescale-body-large-line-height)
      );
      pointer-events: auto;
      animation: snackbar-slide-in var(--oscd-snackbar-enter-duration, 160ms)
        ease-out;
    }

    .snackbar.closing {
      pointer-events: none;
      animation: snackbar-fade-out var(--oscd-snackbar-exit-duration, 160ms)
        ease-in forwards;
    }

    .snackbar.info {
      --_container-color: var(
        --oscd-snackbar-info-container-color,
        var(
          --oscd-snackbar-container-color,
          var(--md-sys-color-inverse-surface, #313033)
        )
      );
      --_supporting-text-color: var(
        --oscd-snackbar-info-supporting-text-color,
        var(
          --oscd-snackbar-supporting-text-color,
          var(--md-sys-color-inverse-on-surface, #f4eff4)
        )
      );
      --_icon-color: var(
        --oscd-snackbar-info-icon-color,
        var(
          --oscd-snackbar-icon-color,
          var(--md-sys-color-inverse-on-surface, #f4eff4)
        )
      );
      --_action-label-text-color: var(
        --oscd-snackbar-info-action-label-text-color,
        var(
          --oscd-snackbar-action-label-text-color,
          var(--md-sys-color-inverse-primary, #d0bcff)
        )
      );
      --_close-icon-color: var(
        --oscd-snackbar-info-close-icon-color,
        var(
          --oscd-snackbar-close-icon-color,
          var(--md-sys-color-inverse-on-surface, #f4eff4)
        )
      );
    }

    .snackbar.success {
      --_container-color: var(
        --oscd-snackbar-success-container-color,
        var(
          --oscd-snackbar-container-color,
          var(--md-sys-color-inverse-surface, #313033)
        )
      );
      --_supporting-text-color: var(
        --oscd-snackbar-success-supporting-text-color,
        var(
          --oscd-snackbar-supporting-text-color,
          var(--md-sys-color-inverse-on-surface, #f4eff4)
        )
      );
      --_icon-color: var(
        --oscd-snackbar-success-icon-color,
        var(
          --oscd-snackbar-icon-color,
          var(--md-sys-color-inverse-on-surface, #f4eff4)
        )
      );
      --_action-label-text-color: var(
        --oscd-snackbar-success-action-label-text-color,
        var(
          --oscd-snackbar-action-label-text-color,
          var(--md-sys-color-inverse-primary, #d0bcff)
        )
      );
      --_close-icon-color: var(
        --oscd-snackbar-success-close-icon-color,
        var(
          --oscd-snackbar-close-icon-color,
          var(--md-sys-color-inverse-on-surface, #f4eff4)
        )
      );
    }

    .snackbar.warning {
      --_container-color: var(
        --oscd-snackbar-warning-container-color,
        var(
          --oscd-snackbar-container-color,
          var(--md-sys-color-inverse-surface, #313033)
        )
      );
      --_supporting-text-color: var(
        --oscd-snackbar-warning-supporting-text-color,
        var(
          --oscd-snackbar-supporting-text-color,
          var(--md-sys-color-inverse-on-surface, #f4eff4)
        )
      );
      --_icon-color: var(
        --oscd-snackbar-warning-icon-color,
        var(
          --oscd-snackbar-icon-color,
          var(--md-sys-color-inverse-on-surface, #f4eff4)
        )
      );
      --_action-label-text-color: var(
        --oscd-snackbar-warning-action-label-text-color,
        var(
          --oscd-snackbar-action-label-text-color,
          var(--md-sys-color-inverse-primary, #d0bcff)
        )
      );
      --_close-icon-color: var(
        --oscd-snackbar-warning-close-icon-color,
        var(
          --oscd-snackbar-close-icon-color,
          var(--md-sys-color-inverse-on-surface, #f4eff4)
        )
      );
    }

    .snackbar.error {
      --_container-color: var(
        --oscd-snackbar-error-container-color,
        var(--md-sys-color-error-container, #f9dedc)
      );
      --_supporting-text-color: var(
        --oscd-snackbar-error-supporting-text-color,
        var(--md-sys-color-on-error-container, #410e0b)
      );
      --_icon-color: var(
        --oscd-snackbar-error-icon-color,
        var(--md-sys-color-error, #b3261e)
      );
      --_action-label-text-color: var(
        --oscd-snackbar-error-action-label-text-color,
        var(--md-sys-color-on-error-container, #410e0b)
      );
      --_close-icon-color: var(
        --oscd-snackbar-error-close-icon-color,
        var(--md-sys-color-on-error-container, #410e0b)
      );
    }

    .variant-icon {
      width: 24px;
      height: 24px;
      margin-inline-end: 16px;
      font-size: 24px;
      color: var(--_icon-color);
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      clip-path: inset(50%);
    }

    .message {
      display: -webkit-box;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-wrap: anywhere;
      white-space: normal;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: var(--oscd-snackbar-message-line-clamp, 3);
    }

    .action {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: max-content;
      margin-inline-start: 16px;
      padding: 0;
      border: 0;
      background: none;
      color: var(--_action-label-text-color);
      cursor: pointer;
      font: inherit;
      font-size: var(--md-sys-typescale-label-large-size);
      font-weight: var(--md-sys-typescale-label-large-weight);
      line-height: var(--md-sys-typescale-label-large-line-height);
    }

    .action oscd-icon {
      width: 18px;
      height: 18px;
      font-size: 18px;
    }

    .close {
      margin-inline-start: 16px;
      color: inherit;
    }

    @keyframes snackbar-slide-in {
      from {
        opacity: 0;
        transform: translateY(16px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes snackbar-fade-out {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
  `}},f([o({type:Number,attribute:`default-auto-dismiss-ms`})],P.prototype,`defaultAutoDismissMs`,void 0),f([o({type:Number,attribute:`auto-dismiss-ms-per-word`})],P.prototype,`autoDismissMsPerWord`,void 0),f([o({type:Number,attribute:`min-auto-dismiss-ms`})],P.prototype,`minAutoDismissMs`,void 0),f([o({type:Number,attribute:`max-auto-dismiss-ms`})],P.prototype,`maxAutoDismissMs`,void 0),f([o({type:Number,attribute:`max-visible`})],P.prototype,`maxVisible`,void 0),f([o({type:String})],P.prototype,`mode`,void 0),f([s()],P.prototype,`notifications`,void 0)})),I=e((()=>{F(),customElements.define(`oscd-snackbar`,P)}));function L(e){let t=e.trim();if(!t)return;if(t===`true`)return!0;if(t===`false`)return!1;let n=Number(t);return Number.isNaN(n)?void 0:n}var R,z,B,V,H,U,W;e((()=>{a(),k(),_(),S(),C(),E(),w(),T(),I(),R={title:`Feedback / Snackbar`,component:`oscd-snackbar`,tags:[`autodocs`],argTypes:{message:{control:`text`},variant:{control:`select`,options:[`info`,`success`,`warning`,`error`]},autoDismiss:{control:`text`},mode:{control:`select`,options:[`replace`,`stack`]},maxVisible:{control:`number`},dismissible:{control:`boolean`}},args:{message:`This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.`,variant:`info`,autoDismiss:`false`,mode:`stack`,maxVisible:3,dismissible:!0}},z={render:e=>{let t=O(),r=O(),i=O(),a=O(),o=O(),s=O();return n`<div
      style="display: grid; gap: 16px; padding-block-start: 8px;"
    >
      <div
        style="
          display: grid;
          grid-template-columns:
            minmax(360px, 1fr)
            minmax(160px, 180px)
            minmax(160px, 180px)
            minmax(160px, 180px)
            minmax(120px, 140px)
            auto;
          gap: 16px;
          align-items: end;
        "
      >
        <oscd-outlined-text-field
          ${D(r)}
          label="Message"
          style="width: 100%; min-width: 0;"
          .value=${e.message}
        ></oscd-outlined-text-field>
        <oscd-outlined-select
          ${D(i)}
          label="Variant"
          style="width: 100%; min-width: 0;"
          .value=${e.variant}
        >
          <oscd-select-option value="info">info</oscd-select-option>
          <oscd-select-option value="success">success</oscd-select-option>
          <oscd-select-option value="warning">warning</oscd-select-option>
          <oscd-select-option value="error">error</oscd-select-option>
        </oscd-outlined-select>
        <oscd-outlined-text-field
          ${D(a)}
          label="Auto dismiss"
          style="width: 100%; min-width: 0;"
          .value=${e.autoDismiss}
        ></oscd-outlined-text-field>
        <oscd-outlined-select
          ${D(o)}
          label="Mode"
          style="width: 100%; min-width: 0;"
          .value=${e.mode}
        >
          <oscd-select-option value="replace">replace</oscd-select-option>
          <oscd-select-option value="stack">stack</oscd-select-option>
        </oscd-outlined-select>
        <oscd-outlined-text-field
          ${D(s)}
          label="Max"
          type="number"
          min="1"
          style="width: 100%; min-width: 0;"
          .value=${String(e.maxVisible)}
        ></oscd-outlined-text-field>
        <oscd-filled-button style="white-space: nowrap;" @click=${()=>{let n=t.value;n&&(n.mode=o.value?.value??e.mode,n.maxVisible=Number(s.value?.value)||e.maxVisible,n.show({message:r.value?.value??e.message,variant:i.value?.value??e.variant,autoDismiss:L(a.value?.value??e.autoDismiss),dismissible:e.dismissible}))}}>
          Open
        </oscd-filled-button>
      </div>
      <oscd-snackbar ${D(t)}></oscd-snackbar>
    </div>`}},B={render:()=>{let e=O();return queueMicrotask(()=>{let t=e.value;t&&(t.mode=`stack`,t.maxVisible=3,t.show({message:`This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.`,variant:`warning`,autoDismiss:!1,action:{label:`See More`,onClick:()=>void 0}}),t.show({message:`Upload was successful!`,variant:`success`,autoDismiss:!1,action:{label:`See More`,onClick:()=>void 0}}),t.show({message:`This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.`,variant:`error`,autoDismiss:!1,action:{label:`See More`,onClick:()=>void 0}}))}),n`<oscd-snackbar ${D(e)}></oscd-snackbar>`}},V={parameters:{docs:{description:{story:`Set all five per-variant color facets on a wrapper to opt into colored variants. These example colors are consumer choices, not required palette slots.`}}},render:()=>{let e=O();return queueMicrotask(()=>{let t=e.value;t&&(t.mode=`stack`,t.maxVisible=3,t.show({message:`Connection restored.`,variant:`info`,autoDismiss:!1,action:{label:`Details`,onClick:()=>void 0}}),t.show({message:`The selected value is outside the recommended range.`,variant:`warning`,autoDismiss:!1,action:{label:`Review`,onClick:()=>void 0}}),t.show({message:`Upload completed successfully.`,variant:`success`,autoDismiss:!1,action:{label:`Open`,onClick:()=>void 0}}))}),n`<div
      style="
        --oscd-snackbar-info-container-color: #1f74b0;
        --oscd-snackbar-info-supporting-text-color: #fdf6e3;
        --oscd-snackbar-info-icon-color: #fdf6e3;
        --oscd-snackbar-info-action-label-text-color: #fdf6e3;
        --oscd-snackbar-info-close-icon-color: #fdf6e3;
        --oscd-snackbar-warning-container-color: #b58900;
        --oscd-snackbar-warning-supporting-text-color: #002b36;
        --oscd-snackbar-warning-icon-color: #002b36;
        --oscd-snackbar-warning-action-label-text-color: #002b36;
        --oscd-snackbar-warning-close-icon-color: #002b36;
        --oscd-snackbar-success-container-color: #859900;
        --oscd-snackbar-success-supporting-text-color: #002b36;
        --oscd-snackbar-success-icon-color: #002b36;
        --oscd-snackbar-success-action-label-text-color: #002b36;
        --oscd-snackbar-success-close-icon-color: #002b36;
      "
    >
      <oscd-snackbar ${D(e)}></oscd-snackbar>
    </div>`}},H=`This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipment, {http://www.iec.ch/61850/2003/SCL}EqFunction, {http://www.iec.ch/61850/2003/SCL}Function, {http://www.iec.ch/61850/2003/SCL}LNode, {http://www.iec.ch/61850/2003/SCL}GeneralEquipment). Found {http://www.iec.ch/61850/2003/SCL}HzRtg at path /SCL/Substation/VoltageLevel/Bay/ConductingEquipment/Terminal.`,U={render:()=>{let e=O(),t=O();return queueMicrotask(()=>{e.value?.show({message:H,variant:`warning`,autoDismiss:!1,action:{label:`Details`,onClick:()=>{t.value?.show()}}})}),n`<oscd-snackbar ${D(e)}></oscd-snackbar>
      <oscd-dialog ${D(t)}>
        <div slot="headline">Validation details</div>
        <div slot="content" style="white-space: pre-wrap;">
          ${H}
        </div>
        <oscd-text-button
          slot="actions"
          @click=${()=>t.value?.close()}
        >
          Close
        </oscd-text-button>
      </oscd-dialog>`}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const snackbarRef = createRef<OscdSnackbar>();
    const messageRef = createRef<ValueElement>();
    const variantRef = createRef<ValueElement>();
    const autoDismissRef = createRef<ValueElement>();
    const modeRef = createRef<ValueElement>();
    const maxVisibleRef = createRef<ValueElement>();
    const showSnackbar = () => {
      const snackbar = snackbarRef.value;
      if (!snackbar) {
        return;
      }
      snackbar.mode = modeRef.value?.value as SnackbarMode ?? args.mode;
      snackbar.maxVisible = Number(maxVisibleRef.value?.value) || args.maxVisible;
      snackbar.show({
        message: messageRef.value?.value ?? args.message,
        variant: variantRef.value?.value as SnackbarVariant | undefined ?? args.variant,
        autoDismiss: parseAutoDismiss(autoDismissRef.value?.value ?? args.autoDismiss),
        dismissible: args.dismissible
      });
    };
    return html\`<div
      style="display: grid; gap: 16px; padding-block-start: 8px;"
    >
      <div
        style="
          display: grid;
          grid-template-columns:
            minmax(360px, 1fr)
            minmax(160px, 180px)
            minmax(160px, 180px)
            minmax(160px, 180px)
            minmax(120px, 140px)
            auto;
          gap: 16px;
          align-items: end;
        "
      >
        <oscd-outlined-text-field
          \${ref(messageRef)}
          label="Message"
          style="width: 100%; min-width: 0;"
          .value=\${args.message}
        ></oscd-outlined-text-field>
        <oscd-outlined-select
          \${ref(variantRef)}
          label="Variant"
          style="width: 100%; min-width: 0;"
          .value=\${args.variant}
        >
          <oscd-select-option value="info">info</oscd-select-option>
          <oscd-select-option value="success">success</oscd-select-option>
          <oscd-select-option value="warning">warning</oscd-select-option>
          <oscd-select-option value="error">error</oscd-select-option>
        </oscd-outlined-select>
        <oscd-outlined-text-field
          \${ref(autoDismissRef)}
          label="Auto dismiss"
          style="width: 100%; min-width: 0;"
          .value=\${args.autoDismiss}
        ></oscd-outlined-text-field>
        <oscd-outlined-select
          \${ref(modeRef)}
          label="Mode"
          style="width: 100%; min-width: 0;"
          .value=\${args.mode}
        >
          <oscd-select-option value="replace">replace</oscd-select-option>
          <oscd-select-option value="stack">stack</oscd-select-option>
        </oscd-outlined-select>
        <oscd-outlined-text-field
          \${ref(maxVisibleRef)}
          label="Max"
          type="number"
          min="1"
          style="width: 100%; min-width: 0;"
          .value=\${String(args.maxVisible)}
        ></oscd-outlined-text-field>
        <oscd-filled-button style="white-space: nowrap;" @click=\${showSnackbar}>
          Open
        </oscd-filled-button>
      </div>
      <oscd-snackbar \${ref(snackbarRef)}></oscd-snackbar>
    </div>\`;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const snackbarRef = createRef<OscdSnackbar>();
    queueMicrotask(() => {
      const snackbar = snackbarRef.value;
      if (!snackbar) {
        return;
      }
      snackbar.mode = 'stack';
      snackbar.maxVisible = 3;
      snackbar.show({
        message: 'This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.',
        variant: 'warning',
        autoDismiss: false,
        action: {
          label: 'See More',
          onClick: () => undefined
        }
      });
      snackbar.show({
        message: 'Upload was successful!',
        variant: 'success',
        autoDismiss: false,
        action: {
          label: 'See More',
          onClick: () => undefined
        }
      });
      snackbar.show({
        message: 'This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.',
        variant: 'error',
        autoDismiss: false,
        action: {
          label: 'See More',
          onClick: () => undefined
        }
      });
    });
    return html\`<oscd-snackbar \${ref(snackbarRef)}></oscd-snackbar>\`;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Set all five per-variant color facets on a wrapper to opt into colored variants. These example colors are consumer choices, not required palette slots.'
      }
    }
  },
  render: () => {
    const snackbarRef = createRef<OscdSnackbar>();
    queueMicrotask(() => {
      const snackbar = snackbarRef.value;
      if (!snackbar) {
        return;
      }
      snackbar.mode = 'stack';
      snackbar.maxVisible = 3;
      snackbar.show({
        message: 'Connection restored.',
        variant: 'info',
        autoDismiss: false,
        action: {
          label: 'Details',
          onClick: () => undefined
        }
      });
      snackbar.show({
        message: 'The selected value is outside the recommended range.',
        variant: 'warning',
        autoDismiss: false,
        action: {
          label: 'Review',
          onClick: () => undefined
        }
      });
      snackbar.show({
        message: 'Upload completed successfully.',
        variant: 'success',
        autoDismiss: false,
        action: {
          label: 'Open',
          onClick: () => undefined
        }
      });
    });
    return html\`<div
      style="
        --oscd-snackbar-info-container-color: #1f74b0;
        --oscd-snackbar-info-supporting-text-color: #fdf6e3;
        --oscd-snackbar-info-icon-color: #fdf6e3;
        --oscd-snackbar-info-action-label-text-color: #fdf6e3;
        --oscd-snackbar-info-close-icon-color: #fdf6e3;
        --oscd-snackbar-warning-container-color: #b58900;
        --oscd-snackbar-warning-supporting-text-color: #002b36;
        --oscd-snackbar-warning-icon-color: #002b36;
        --oscd-snackbar-warning-action-label-text-color: #002b36;
        --oscd-snackbar-warning-close-icon-color: #002b36;
        --oscd-snackbar-success-container-color: #859900;
        --oscd-snackbar-success-supporting-text-color: #002b36;
        --oscd-snackbar-success-icon-color: #002b36;
        --oscd-snackbar-success-action-label-text-color: #002b36;
        --oscd-snackbar-success-close-icon-color: #002b36;
      "
    >
      <oscd-snackbar \${ref(snackbarRef)}></oscd-snackbar>
    </div>\`;
  }
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const snackbarRef = createRef<OscdSnackbar>();
    const dialogRef = createRef<OscdDialog>();
    queueMicrotask(() => {
      snackbarRef.value?.show({
        message: longValidationMessage,
        variant: 'warning',
        autoDismiss: false,
        action: {
          label: 'Details',
          onClick: () => {
            dialogRef.value?.show();
          }
        }
      });
    });
    return html\`<oscd-snackbar \${ref(snackbarRef)}></oscd-snackbar>
      <oscd-dialog \${ref(dialogRef)}>
        <div slot="headline">Validation details</div>
        <div slot="content" style="white-space: pre-wrap;">
          \${longValidationMessage}
        </div>
        <oscd-text-button
          slot="actions"
          @click=\${() => dialogRef.value?.close()}
        >
          Close
        </oscd-text-button>
      </oscd-dialog>\`;
  }
}`,...U.parameters?.docs?.source}}},W=[`Playground`,`Variants`,`ColoredVariants`,`LongMessageWithDetails`]}))();export{V as ColoredVariants,U as LongMessageWithDetails,z as Playground,B as Variants,W as __namedExportsOrder,R as default};