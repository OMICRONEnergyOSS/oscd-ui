import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,g as n,n as r,t as i}from"./lit-LihecQ0E.js";import{f as a,h as o,n as s,r as c,t as l}from"./lit-element-CwUNoIyU.js";import{t as u}from"./decorate-2OK4V6AF.js";import{n as d,t as f}from"./scopedWcDecorator-GXEKina3.js";import{n as p,t as m}from"./OscdFilledButton-BflHIJH9.js";import{n as h,t as g}from"./OscdDialog-CQt6efn5.js";var _;function v(){return(v=e((()=>{i(),c(),s(),h(),p(),_=class extends l(r){constructor(...e){super(...e),this.heading=``,this.message=``}static{this.scopedElements={"oscd-dialog":g,"oscd-filled-button":m}}warning(e){this.heading=e.heading,this.message=e.message,this.onOk=e.onOk,this.dialog.show()}close(){this.dialog.close(),this.heading=``,this.message=``,this.onOk=void 0}handleOk(){this.onOk&&this.onOk(),this.close()}render(){return t`
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
    `}static{this.styles=n`
    .dialog-content {
      margin-top: 16px;
    }
  `}},u([o()],_.prototype,`heading`,void 0),u([o()],_.prototype,`message`,void 0),u([o()],_.prototype,`onOk`,void 0),u([a(`oscd-dialog`)],_.prototype,`dialog`,void 0)})))()}var y,b,x;function S(){return(S=e((()=>{i(),f(),p(),v(),y={title:`Dialogs / Warning Dialog`,tags:[`autodocs`],decorators:[d],parameters:{layout:`centered`,scopedElements:{"oscd-filled-button":m,"oscd-warn-dialog":_}},render:()=>t`
    <oscd-filled-button
      @click=${e=>{let t=e.currentTarget;if(!(t instanceof HTMLElement))return;let n=t.getRootNode();if(!(n instanceof ShadowRoot))return;let r=n.querySelector(`oscd-warn-dialog`);r instanceof _&&r.warning({heading:`Unsaved changes`,message:`This is an example warning dialog.`,onOk:()=>{}})}}
      >Show warning</oscd-filled-button
    >
    <oscd-warn-dialog></oscd-warn-dialog>
  `},b={},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x=[`Default`]})))()}S();export{b as Default,x as __namedExportsOrder,y as default};