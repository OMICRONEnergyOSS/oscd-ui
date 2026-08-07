import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,f as r,h as i,u as a}from"./static-html-JNahc6jH.js";import{F as o,I as s,L as c,P as l,_ as u,h as d,j as f,k as p,m}from"./list-navigation-helpers-C1Ibc9kd.js";import{n as h,t as g}from"./OscdIcon-CDSDekmX.js";import{n as _,t as v}from"./OscdIconButton-DuPgxA44.js";import{n as y,t as b}from"./decorate-DTsqE9Ek.js";import{t as x}from"./oscd-filled-button-BmpnLsb3.js";import{t as S}from"./oscd-text-button-iEBKGAG3.js";import{t as C}from"./oscd-dialog-CS_rzLju.js";import{t as w}from"./oscd-select-option-2PjdujHL.js";import{t as T}from"./oscd-outlined-select-CM7XOFkF.js";import{i as E,n as D,t as O}from"./ref-BegVEfWl.js";import{t as k}from"./oscd-outlined-text-field-eY1wMwtN.js";var A,j,M,N,P=e((()=>{a(),u(),m(),c(),o(),h(),_(),y(),A=160,j={info:`info`,success:`check_circle`,warning:`warning`,error:`cancel`},M=0,N=class e extends s(r){constructor(...e){super(...e),this.defaultAutoDismissMs=5e3,this.autoDismissMsPerWord=500,this.minAutoDismissMs=5e3,this.maxAutoDismissMs=15e3,this.maxVisible=1,this.mode=`replace`,this.notifications=[],this.queuedNotifications=[]}static{this.scopedElements={"oscd-elevation":l,"oscd-icon":g,"oscd-icon-button":v}}disconnectedCallback(){super.disconnectedCallback(),e.clearTimeouts(this.notifications),e.clearTimeouts(this.queuedNotifications)}show(t){let n={id:`snackbar-${++M}`,message:t.message,variant:t.variant??`info`,dismissible:t.dismissible??!0,action:t.action,autoDismiss:t.autoDismiss};return(t.mode??this.mode)===`replace`?(this.dismissNotifications(this.notifications),e.clearTimeouts(this.queuedNotifications),this.queuedNotifications=[],this.notifications=[...this.notifications.filter(e=>!e.closing),n],this.scheduleAutoDismiss(n),n.id):(this.visibleNotifications.length<this.visibleLimit?(this.notifications=[...this.notifications,n],this.scheduleAutoDismiss(n)):this.queuedNotifications=[...this.queuedNotifications,n],n.id)}close(t){if(t){let e=this.queuedNotifications.length;this.queuedNotifications=this.queuedNotifications.filter(e=>e.id!==t);let n=this.notifications.filter(e=>e.id===t);if(n.length===0&&this.queuedNotifications.length!==e||n.length===0)return;this.dismissNotifications(n);return}let n=this.notifications;e.clearTimeouts(n),e.clearTimeouts(this.queuedNotifications),this.queuedNotifications=[],n.length!==0&&this.dismissNotifications(n)}dismissNotifications(t){e.clearTimeouts(t),this.notifications=this.notifications.map(e=>t.includes(e)?{...e,closing:!0}:e),setTimeout(()=>{this.notifications=this.notifications.filter(e=>!t.some(t=>t.id===e.id)),this.promoteQueuedNotifications()},A)}handleActionClick(e){e.action?.onClick(),this.close(e.id)}handleCloseClick(e){this.close(e.id)}get visibleLimit(){return Math.max(1,Math.floor(this.maxVisible))}get visibleNotifications(){return this.notifications.filter(e=>!e.closing)}static clearTimeouts(e){e.forEach(e=>{clearTimeout(e.timeoutId)})}promoteQueuedNotifications(){let e=this.visibleLimit-this.visibleNotifications.length;if(e<=0||this.queuedNotifications.length===0)return;let t=this.queuedNotifications.slice(0,e);this.queuedNotifications=this.queuedNotifications.slice(e),this.notifications=[...this.notifications,...t],t.forEach(e=>{this.scheduleAutoDismiss(e)})}scheduleAutoDismiss(e){let t=this.resolveAutoDismissMs(e,e.autoDismiss);t!==void 0&&(e.timeoutId=setTimeout(()=>{this.close(e.id)},t))}resolveAutoDismissMs(e,t){if(t!==!1){if(typeof t==`number`)return t>0?t:void 0;if(t===!0||!(e.variant===`error`||e.action))return this.calculateAutoDismissMs(e.message)}}calculateAutoDismissMs(e){if(this.defaultAutoDismissMs<=0)return;let t=e.trim().split(/\s+/).filter(Boolean).length,n=this.defaultAutoDismissMs+t*this.autoDismissMsPerWord;return Math.min(this.maxAutoDismissMs,Math.max(this.minAutoDismissMs,n))}renderAction(e){return e.action?n`<button
      class="action"
      part="action"
      type="button"
      @click=${()=>this.handleActionClick(e)}
    >
      <oscd-icon part="action-icon">arrow_forward</oscd-icon>
      <span part="action-label">${e.action.label}</span>
    </button>`:i}renderCloseButton(e){return e.dismissible?n`<oscd-icon-button
      class="close"
      part="close"
      aria-label="Close"
      @click=${()=>this.handleCloseClick(e)}
    >
      <oscd-icon>close</oscd-icon>
    </oscd-icon-button>`:i}renderNotification(e){return n`<div
      class=${d({snackbar:!0,[e.variant]:!0,closing:!!e.closing})}
      part="snackbar"
      role=${e.variant===`error`?`alert`:`status`}
    >
      <oscd-icon class="variant-icon" part="icon"
        >${j[e.variant]}</oscd-icon
      >
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
      --md-elevation-level: var(--oscd-snackbar-elevation-level, 3);
      color: var(
        --oscd-snackbar-text-color,
        var(--md-sys-color-on-surface, #233042)
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
      background: var(
        --oscd-snackbar-info-container-color,
        var(--md-sys-color-secondary-container)
      );
      color: var(
        --oscd-snackbar-info-text-color,
        var(--oscd-snackbar-text-color, var(--md-sys-color-on-surface, #233042))
      );
    }

    .snackbar.success {
      background: var(
        --oscd-snackbar-success-container-color,
        var(--md-sys-color-tertiary-container, #d8f8bd)
      );
      color: var(
        --oscd-snackbar-success-text-color,
        var(--oscd-snackbar-text-color, var(--md-sys-color-on-surface, #233042))
      );
    }

    .snackbar.warning {
      background: var(
        --oscd-snackbar-warning-container-color,
        var(--md-sys-color-error-container, #fff584)
      );
      color: var(
        --oscd-snackbar-warning-text-color,
        var(--oscd-snackbar-text-color, var(--md-sys-color-on-surface, #233042))
      );
    }

    .snackbar.error {
      background: var(
        --oscd-snackbar-error-container-color,
        var(--md-sys-color-error-container, #ffd9df)
      );
      color: var(
        --oscd-snackbar-error-text-color,
        var(--oscd-snackbar-text-color, var(--md-sys-color-on-surface, #233042))
      );
    }

    .variant-icon {
      width: 24px;
      height: 24px;
      margin-inline-end: 16px;
      font-size: 24px;
      color: var(
        --oscd-snackbar-info-icon-color,
        var(--md-sys-color-on-secondary-container)
      );
    }

    .success .variant-icon {
      color: var(
        --oscd-snackbar-success-icon-color,
        var(--md-sys-color-on-tertiary-container, #5ba300)
      );
    }

    .warning .variant-icon {
      color: var(
        --oscd-snackbar-warning-icon-color,
        var(--md-sys-color-on-error-container, #f5a400)
      );
    }

    .error .variant-icon {
      color: var(
        --oscd-snackbar-error-icon-color,
        var(--md-sys-color-error, #d52031)
      );
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
      color: inherit;
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
  `}},b([f({type:Number,attribute:`default-auto-dismiss-ms`})],N.prototype,`defaultAutoDismissMs`,void 0),b([f({type:Number,attribute:`auto-dismiss-ms-per-word`})],N.prototype,`autoDismissMsPerWord`,void 0),b([f({type:Number,attribute:`min-auto-dismiss-ms`})],N.prototype,`minAutoDismissMs`,void 0),b([f({type:Number,attribute:`max-auto-dismiss-ms`})],N.prototype,`maxAutoDismissMs`,void 0),b([f({type:Number,attribute:`max-visible`})],N.prototype,`maxVisible`,void 0),b([f({type:String})],N.prototype,`mode`,void 0),b([p()],N.prototype,`notifications`,void 0)})),F=e((()=>{P(),customElements.define(`oscd-snackbar`,N)}));function I(e){let t=e.trim();if(!t)return;if(t===`true`)return!0;if(t===`false`)return!1;let n=Number(t);return Number.isNaN(n)?void 0:n}var L,R,z,B,V,H;e((()=>{a(),O(),x(),S(),C(),T(),w(),k(),F(),L={title:`Feedback / Snackbar`,tags:[`autodocs`],argTypes:{message:{control:`text`},variant:{control:`select`,options:[`info`,`success`,`warning`,`error`]},autoDismiss:{control:`text`},mode:{control:`select`,options:[`replace`,`stack`]},maxVisible:{control:`number`},dismissible:{control:`boolean`}},args:{message:`This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.`,variant:`info`,autoDismiss:`false`,mode:`stack`,maxVisible:3,dismissible:!0}},R={render:e=>{let t=D(),r=D(),i=D(),a=D(),o=D(),s=D();return n`<div
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
          ${E(r)}
          label="Message"
          style="width: 100%; min-width: 0;"
          .value=${e.message}
        ></oscd-outlined-text-field>
        <oscd-outlined-select
          ${E(i)}
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
          ${E(a)}
          label="Auto dismiss"
          style="width: 100%; min-width: 0;"
          .value=${e.autoDismiss}
        ></oscd-outlined-text-field>
        <oscd-outlined-select
          ${E(o)}
          label="Mode"
          style="width: 100%; min-width: 0;"
          .value=${e.mode}
        >
          <oscd-select-option value="replace">replace</oscd-select-option>
          <oscd-select-option value="stack">stack</oscd-select-option>
        </oscd-outlined-select>
        <oscd-outlined-text-field
          ${E(s)}
          label="Max"
          type="number"
          min="1"
          style="width: 100%; min-width: 0;"
          .value=${String(e.maxVisible)}
        ></oscd-outlined-text-field>
        <oscd-filled-button style="white-space: nowrap;" @click=${()=>{let n=t.value;n&&(n.mode=o.value?.value??e.mode,n.maxVisible=Number(s.value?.value)||e.maxVisible,n.show({message:r.value?.value??e.message,variant:i.value?.value??e.variant,autoDismiss:I(a.value?.value??e.autoDismiss),dismissible:e.dismissible}))}}>
          Open
        </oscd-filled-button>
      </div>
      <oscd-snackbar ${E(t)}></oscd-snackbar>
    </div>`}},z={render:()=>{let e=D();return queueMicrotask(()=>{let t=e.value;t&&(t.mode=`stack`,t.maxVisible=3,t.show({message:`This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.`,variant:`warning`,autoDismiss:!1,action:{label:`See More`,onClick:()=>void 0}}),t.show({message:`Upload was successful!`,variant:`success`,autoDismiss:!1,action:{label:`See More`,onClick:()=>void 0}}),t.show({message:`This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.`,variant:`error`,autoDismiss:!1,action:{label:`See More`,onClick:()=>void 0}}))}),n`<oscd-snackbar ${E(e)}></oscd-snackbar>`}},B=`This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipment, {http://www.iec.ch/61850/2003/SCL}EqFunction, {http://www.iec.ch/61850/2003/SCL}Function, {http://www.iec.ch/61850/2003/SCL}LNode, {http://www.iec.ch/61850/2003/SCL}GeneralEquipment). Found {http://www.iec.ch/61850/2003/SCL}HzRtg at path /SCL/Substation/VoltageLevel/Bay/ConductingEquipment/Terminal.`,V={render:()=>{let e=D(),t=D();return queueMicrotask(()=>{e.value?.show({message:B,variant:`warning`,autoDismiss:!1,action:{label:`Details`,onClick:()=>{t.value?.show()}}})}),n`<oscd-snackbar ${E(e)}></oscd-snackbar>
      <oscd-dialog ${E(t)}>
        <div slot="headline">Validation details</div>
        <div slot="content" style="white-space: pre-wrap;">
          ${B}
        </div>
        <oscd-text-button
          slot="actions"
          @click=${()=>t.value?.close()}
        >
          Close
        </oscd-text-button>
      </oscd-dialog>`}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H=[`Playground`,`Variants`,`LongMessageWithDetails`]}))();export{V as LongMessageWithDetails,R as Playground,z as Variants,H as __namedExportsOrder,L as default};