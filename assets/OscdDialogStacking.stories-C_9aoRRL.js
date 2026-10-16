import{i as e}from"./preload-helper-xPQekRTU.js";import{f as t,t as n}from"./lit-CCeopZMg.js";import{n as r,t as i}from"./scopedWcDecorator-C0dLMqmP.js";import{n as a,t as o}from"./OscdFilledButton-C4-VOUsq.js";import{n as s,t as c}from"./OscdTextButton-6jVtPoIp.js";import{n as l,t as u}from"./OscdDialog-CvupPZ8W.js";function d(e,t){let n=e.currentTarget;if(!(n instanceof HTMLElement))throw Error(`Missing dialog action`);let r=n.getRootNode();if(!(r instanceof ShadowRoot))throw Error(`Missing scoped story root`);let i=r.querySelector(`#${t}`);if(!(i instanceof u))throw Error(`Missing dialog: ${t}`);return i}var f,p,m;e((()=>{n(),i(),a(),s(),l(),f={title:`Dialogs / Stacked dialogs`,tags:[`autodocs`],decorators:[r],parameters:{layout:`centered`,scopedElements:{"oscd-dialog":u,"oscd-filled-button":o,"oscd-text-button":c},docs:{description:{component:`Open one dialog above another dialog. The upper scrim should shade the entire underlying dialog without shading its own surface. Back, Escape, and clicking outside the upper dialog should return to the still-open previous dialog and restore focus. Tab navigation should stay in the upper dialog.`}}},render:()=>t`
    <oscd-filled-button
      type="button"
      @click=${e=>d(e,`selection`).show()}
    >
      Open first dialog
    </oscd-filled-button>
    <oscd-dialog
      id="selection"
      style="width: 680px; height: 680px; max-width: calc(100vw - 48px); max-height: calc(100dvh - 48px)"
    >
      <div slot="headline">Main Dialog</div>
      <div slot="content">
        <p>
          This larger dialog should remain open underneath the confirmation
          dialog.
        </p>
        <label>
          <input type="checkbox" checked />
          Example selection
        </label>
        <p>
          Clicking Submit opens a second "Confirm" dialog over this one. Its
          scrim should shade this content, including the headline and actions.
          The selection must remain unchanged when you return.
        </p>
      </div>
      <div slot="actions">
        <oscd-text-button
          type="button"
          @click=${e=>d(e,`selection`).close()}
        >
          Cancel
        </oscd-text-button>
        <oscd-filled-button
          type="button"
          @click=${e=>d(e,`confirmation`).show()}
        >
          Submit
        </oscd-filled-button>
      </div>
    </oscd-dialog>
    <oscd-dialog id="confirmation">
      <div slot="headline">Confirmation Dialog</div>
      <div slot="content">
        <p>Confirm something important</p>
        <p>
          Back returns to the still-open dialog. Confirm closes both dialogs.
        </p>
      </div>
      <div slot="actions">
        <oscd-text-button
          type="button"
          @click=${e=>d(e,`confirmation`).close()}
        >
          Back
        </oscd-text-button>
        <oscd-filled-button
          type="button"
          @click=${async e=>{let t=d(e,`confirmation`),n=d(e,`selection`);await t.close(),await n.close()}}
        >
          Confirm
        </oscd-filled-button>
      </div>
    </oscd-dialog>
  `},p={},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};