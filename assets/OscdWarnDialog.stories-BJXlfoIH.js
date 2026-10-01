import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,f as n,r,t as i}from"./lit-CCeopZMg.js";import{f as a,h as o,n as s,r as c,t as l}from"./lit-element-DJJrs8Rf.js";import{n as u,t as d}from"./decorate-DTsqE9Ek.js";import{n as f,t as p}from"./scopedWcDecorator-zjHr9WXM.js";import{n as m,t as h}from"./OscdFilledButton-Dk6Pcent.js";import{n as g,t as _}from"./OscdDialog-BgJH9zNs.js";var v,y=e((()=>{i(),c(),s(),g(),m(),u(),v=class extends l(r){constructor(...e){super(...e),this.heading=``,this.message=``}static{this.scopedElements={"oscd-dialog":_,"oscd-filled-button":h}}warning(e){this.heading=e.heading,this.message=e.message,this.onOk=e.onOk,this.dialog.show()}close(){this.dialog.close(),this.heading=``,this.message=``,this.onOk=void 0}handleOk(){this.onOk&&this.onOk(),this.close()}render(){return n`
      <oscd-dialog @closed=${this.close}>
        <div slot="headline">${this.heading}</div>
        <div slot="content" class="dialog-content">
          <p>${this.message}</p>
        </div>
        <div slot="actions">
          <oscd-filled-button slot="primaryAction" @click=${this.handleOk}
            >OK</oscd-filled-button
          >
        </div>
      </oscd-dialog>
    `}static{this.styles=t`
    .dialog-content {
      margin-top: 16px;
    }
  `}},d([o()],v.prototype,`heading`,void 0),d([o()],v.prototype,`message`,void 0),d([o()],v.prototype,`onOk`,void 0),d([a(`oscd-dialog`)],v.prototype,`dialog`,void 0)})),b,x,S;e((()=>{i(),p(),m(),y(),b={title:`Dialogs / Warning Dialog`,tags:[`autodocs`],decorators:[f],parameters:{layout:`centered`,scopedElements:{"oscd-filled-button":h,"oscd-warn-dialog":v}},render:()=>n`
    <oscd-filled-button
      @click=${e=>{let t=e.currentTarget;if(!(t instanceof HTMLElement))return;let n=t.getRootNode();if(!(n instanceof ShadowRoot))return;let r=n.querySelector(`oscd-warn-dialog`);r instanceof v&&r.warning({heading:`Unsaved changes`,message:`This is an example warning dialog.`,onOk:()=>{}})}}
      >Show warning</oscd-filled-button
    >
    <oscd-warn-dialog></oscd-warn-dialog>
  `},x={},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S=[`Default`]}))();export{x as Default,S as __namedExportsOrder,b as default};