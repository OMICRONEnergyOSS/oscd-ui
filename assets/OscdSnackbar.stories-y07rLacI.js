import{i as w,E as g,x as d,a as y}from"./iframe-C4uLaTi3.js";import{n as r,e as c}from"./ref-065o0VSE.js";import"./oscd-filled-button-CEBWtmCm.js";import"./oscd-text-button-CrTTqycs.js";import"./oscd-dialog-DVH27xQU.js";import"./oscd-outlined-select-laUWlLMF.js";import"./oscd-select-option-Dw6aj0C5.js";import"./oscd-outlined-text-field-EweX-A8e.js";import{S as D,O as M,b as $,n as m}from"./list-navigation-helpers-uOLGipP7.js";import{O as R,r as S}from"./OscdIcon-C3sU6W8j.js";import{O as N}from"./OscdIconButton-5cjKo4Uu.js";import"./preload-helper-PPVm8Dsz.js";import"./menuItemController-vk-DquCy.js";import"./OscdTextButton-Bekbxekp.js";import"./OscdDialog-DjZ_v0nE.js";import"./OscdDivider-HdJL0wmB.js";import"./redispatch-event-D1qO1AWI.js";import"./OscdOutlinedSelect-9NUlRBdG.js";import"./OscdOutlinedField-DaicQdGe.js";import"./shared-styles-9iojKk-g.js";import"./OscdMenu-BFi7zQCQ.js";import"./menu-BgyE_f8J.js";import"./style-map-Cl8m6Gme.js";import"./shared-styles-DVo7NAZk.js";import"./validator-BdcpFJ2q.js";import"./form-associated-DtXYuc2T.js";import"./on-report-validity-D7FQpsi-.js";import"./OscdSelectOption-DrpPyErv.js";import"./query-assigned-nodes-EHSBqaR2.js";import"./OscdOutlinedTextField-Dd6Lhoh6.js";import"./shared-styles-E0E9mV4N.js";import"./shared-styles-PERDfklm.js";import"./is-rtl-DJNyvqXe.js";var C=Object.defineProperty,u=(t,e,s,a)=>{for(var i=void 0,n=t.length-1,p;n>=0;n--)(p=t[n])&&(i=p(e,s,i)||i);return i&&C(e,s,i),i};const V=160,q={info:"info",success:"check_circle",warning:"warning",error:"cancel"};let A=0;var o;const l=(o=class extends D(w){constructor(){super(...arguments),this.defaultAutoDismissMs=5e3,this.autoDismissMsPerWord=500,this.minAutoDismissMs=5e3,this.maxAutoDismissMs=15e3,this.maxVisible=1,this.mode="replace",this.notifications=[],this.queuedNotifications=[]}disconnectedCallback(){super.disconnectedCallback(),o.clearTimeouts(this.notifications),o.clearTimeouts(this.queuedNotifications)}show(e){const s={id:`snackbar-${++A}`,message:e.message,variant:e.variant??"info",dismissible:e.dismissible??!0,action:e.action,autoDismiss:e.autoDismiss};return(e.mode??this.mode)==="replace"?(this.dismissNotifications(this.notifications),o.clearTimeouts(this.queuedNotifications),this.queuedNotifications=[],this.notifications=[...this.notifications.filter(i=>!i.closing),s],this.scheduleAutoDismiss(s),s.id):(this.visibleNotifications.length<this.visibleLimit?(this.notifications=[...this.notifications,s],this.scheduleAutoDismiss(s)):this.queuedNotifications=[...this.queuedNotifications,s],s.id)}close(e){if(e){const a=this.queuedNotifications.length;this.queuedNotifications=this.queuedNotifications.filter(n=>n.id!==e);const i=this.notifications.filter(n=>n.id===e);if(i.length===0&&this.queuedNotifications.length!==a||i.length===0)return;this.dismissNotifications(i);return}const s=this.notifications;o.clearTimeouts(s),o.clearTimeouts(this.queuedNotifications),this.queuedNotifications=[],s.length!==0&&this.dismissNotifications(s)}dismissNotifications(e){o.clearTimeouts(e),this.notifications=this.notifications.map(s=>e.includes(s)?{...s,closing:!0}:s),setTimeout(()=>{this.notifications=this.notifications.filter(s=>!e.some(a=>a.id===s.id)),this.promoteQueuedNotifications()},V)}handleActionClick(e){e.action?.onClick(),this.close(e.id)}handleCloseClick(e){this.close(e.id)}get visibleLimit(){return Math.max(1,Math.floor(this.maxVisible))}get visibleNotifications(){return this.notifications.filter(e=>!e.closing)}static clearTimeouts(e){e.forEach(s=>{clearTimeout(s.timeoutId)})}promoteQueuedNotifications(){const e=this.visibleLimit-this.visibleNotifications.length;if(e<=0||this.queuedNotifications.length===0)return;const s=this.queuedNotifications.slice(0,e);this.queuedNotifications=this.queuedNotifications.slice(e),this.notifications=[...this.notifications,...s],s.forEach(a=>{this.scheduleAutoDismiss(a)})}scheduleAutoDismiss(e){const s=this.resolveAutoDismissMs(e,e.autoDismiss);s!==void 0&&(e.timeoutId=setTimeout(()=>{this.close(e.id)},s))}resolveAutoDismissMs(e,s){if(s!==!1){if(typeof s=="number")return s>0?s:void 0;if(s===!0)return this.calculateAutoDismissMs(e.message);if(!(e.variant==="error"||e.action))return this.calculateAutoDismissMs(e.message)}}calculateAutoDismissMs(e){if(this.defaultAutoDismissMs<=0)return;const s=e.trim().split(/\s+/).filter(Boolean).length,a=this.defaultAutoDismissMs+s*this.autoDismissMsPerWord;return Math.min(this.maxAutoDismissMs,Math.max(this.minAutoDismissMs,a))}renderAction(e){return e.action?d`<button
      class="action"
      part="action"
      type="button"
      @click=${()=>this.handleActionClick(e)}
    >
      <oscd-icon part="action-icon">arrow_forward</oscd-icon>
      <span part="action-label">${e.action.label}</span>
    </button>`:g}renderCloseButton(e){return e.dismissible?d`<oscd-icon-button
      class="close"
      part="close"
      aria-label="Close"
      @click=${()=>this.handleCloseClick(e)}
    >
      <oscd-icon>close</oscd-icon>
    </oscd-icon-button>`:g}renderNotification(e){return d`<div
      class=${$({snackbar:!0,[e.variant]:!0,closing:!!e.closing})}
      part="snackbar"
      role=${e.variant==="error"?"alert":"status"}
    >
      <oscd-icon class="variant-icon" part="icon"
        >${q[e.variant]}</oscd-icon
      >
      <span class="message" part="message">${e.message}</span>
      ${this.renderAction(e)} ${this.renderCloseButton(e)}
      <oscd-elevation part="elevation"></oscd-elevation>
    </div>`}render(){return d`${[...this.notifications].reverse().map(e=>this.renderNotification(e))}`}},o.scopedElements={"oscd-elevation":M,"oscd-icon":R,"oscd-icon-button":N},o.styles=y`
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
  `,o);u([m({type:Number,attribute:"default-auto-dismiss-ms"})],l.prototype,"defaultAutoDismissMs");u([m({type:Number,attribute:"auto-dismiss-ms-per-word"})],l.prototype,"autoDismissMsPerWord");u([m({type:Number,attribute:"min-auto-dismiss-ms"})],l.prototype,"minAutoDismissMs");u([m({type:Number,attribute:"max-auto-dismiss-ms"})],l.prototype,"maxAutoDismissMs");u([m({type:Number,attribute:"max-visible"})],l.prototype,"maxVisible");u([m({type:String})],l.prototype,"mode");u([S()],l.prototype,"notifications");let E=l;customElements.define("oscd-snackbar",E);const fe={title:"Feedback / Snackbar",tags:["autodocs"],argTypes:{message:{control:"text"},variant:{control:"select",options:["info","success","warning","error"]},autoDismiss:{control:"text"},mode:{control:"select",options:["replace","stack"]},maxVisible:{control:"number"},dismissible:{control:"boolean"}},args:{message:"This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.",variant:"info",autoDismiss:"false",mode:"stack",maxVisible:3,dismissible:!0}};function L(t){const e=t.trim();if(!e)return;if(e==="true")return!0;if(e==="false")return!1;const s=Number(e);return Number.isNaN(s)?void 0:s}const b={render:t=>{const e=c(),s=c(),a=c(),i=c(),n=c(),p=c(),k=()=>{const f=e.value;f&&(f.mode=n.value?.value??t.mode,f.maxVisible=Number(p.value?.value)||t.maxVisible,f.show({message:s.value?.value??t.message,variant:a.value?.value??t.variant,autoDismiss:L(i.value?.value??t.autoDismiss),dismissible:t.dismissible}))};return d`<div
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
          ${r(s)}
          label="Message"
          style="width: 100%; min-width: 0;"
          .value=${t.message}
        ></oscd-outlined-text-field>
        <oscd-outlined-select
          ${r(a)}
          label="Variant"
          style="width: 100%; min-width: 0;"
          .value=${t.variant}
        >
          <oscd-select-option value="info">info</oscd-select-option>
          <oscd-select-option value="success">success</oscd-select-option>
          <oscd-select-option value="warning">warning</oscd-select-option>
          <oscd-select-option value="error">error</oscd-select-option>
        </oscd-outlined-select>
        <oscd-outlined-text-field
          ${r(i)}
          label="Auto dismiss"
          style="width: 100%; min-width: 0;"
          .value=${t.autoDismiss}
        ></oscd-outlined-text-field>
        <oscd-outlined-select
          ${r(n)}
          label="Mode"
          style="width: 100%; min-width: 0;"
          .value=${t.mode}
        >
          <oscd-select-option value="replace">replace</oscd-select-option>
          <oscd-select-option value="stack">stack</oscd-select-option>
        </oscd-outlined-select>
        <oscd-outlined-text-field
          ${r(p)}
          label="Max"
          type="number"
          min="1"
          style="width: 100%; min-width: 0;"
          .value=${String(t.maxVisible)}
        ></oscd-outlined-text-field>
        <oscd-filled-button style="white-space: nowrap;" @click=${k}>
          Open
        </oscd-filled-button>
      </div>
      <oscd-snackbar ${r(e)}></oscd-snackbar>
    </div>`}},h={render:()=>{const t=c();return queueMicrotask(()=>{const e=t.value;e&&(e.mode="stack",e.maxVisible=3,e.show({message:"This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.",variant:"warning",autoDismiss:!1,action:{label:"See More",onClick:()=>{}}}),e.show({message:"Upload was successful!",variant:"success",autoDismiss:!1,action:{label:"See More",onClick:()=>{}}}),e.show({message:"This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipmentx.",variant:"error",autoDismiss:!1,action:{label:"See More",onClick:()=>{}}}))}),d`<oscd-snackbar ${r(t)}></oscd-snackbar>`}},x="This element is not expected. Expected is one of ({http://www.iec.ch/61850/2003/SCL}SubEquipment, {http://www.iec.ch/61850/2003/SCL}EqFunction, {http://www.iec.ch/61850/2003/SCL}Function, {http://www.iec.ch/61850/2003/SCL}LNode, {http://www.iec.ch/61850/2003/SCL}GeneralEquipment). Found {http://www.iec.ch/61850/2003/SCL}HzRtg at path /SCL/Substation/VoltageLevel/Bay/ConductingEquipment/Terminal.",v={render:()=>{const t=c(),e=c();return queueMicrotask(()=>{t.value?.show({message:x,variant:"warning",autoDismiss:!1,action:{label:"Details",onClick:()=>{e.value?.show()}}})}),d`<oscd-snackbar ${r(t)}></oscd-snackbar>
      <oscd-dialog ${r(e)}>
        <div slot="headline">Validation details</div>
        <div slot="content" style="white-space: pre-wrap;">
          ${x}
        </div>
        <oscd-text-button
          slot="actions"
          @click=${()=>e.value?.close()}
        >
          Close
        </oscd-text-button>
      </oscd-dialog>`}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const be=["Playground","Variants","LongMessageWithDetails"];export{v as LongMessageWithDetails,b as Playground,h as Variants,be as __namedExportsOrder,fe as default};
