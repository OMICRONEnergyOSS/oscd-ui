import{i as y,x as r,a as b}from"./iframe-CVDob4yH.js";import{S as k,n as L}from"./list-item-styles-D88BytE0.js";import{r as v}from"./OscdListItem-B18tstYX.js";import{O as S}from"./OscdIconButton-X_KJSgU-.js";import{g as $}from"./getStorybookMeta-BoCODc77.js";import"./preload-helper-PPVm8Dsz.js";import"./shared-styles-ut-I7mYk.js";import"./is-rtl-DJNyvqXe.js";import"./getStorybookHelpers-BJL7o6s0.js";import"./OscdMenuItem-wP2ife6f.js";import"./query-assigned-nodes-NHYQZ91Q.js";var E=Object.defineProperty,w=(p,e,t,o)=>{for(var i=void 0,a=p.length-1,n;a>=0;a--)(n=p[a])&&(i=n(e,t,i)||i);return i&&E(e,t,i),i};function A(p){let e=0;const t=o=>{o&&(o.leaf&&o.leaf.length&&(e=Math.max(e,o.leaf.length)),o.children?.forEach(t))};return t(p),e}const u=class u extends k(y){constructor(){super(...arguments),this.data=null,this.folded=new Set,this.knownPaths=new Set,this.maxLeafCols=0}pathKey(e){return e.join(".")||"root"}willUpdate(e){if(this.data){const t=new Set,o=(n,c=[])=>{if(n){if(c.length>0&&n.children!==void 0){const h=this.pathKey(c);t.add(h)}n.children?.forEach((h,f)=>o(h,[...c,"children",f]))}};o(this.data,[]);const i=new Set(this.folded);t.forEach(n=>{this.knownPaths.has(n)||i.add(n)});const a=new Set;i.forEach(n=>{t.has(n)&&a.add(n)}),this.folded=a,this.knownPaths=t,this.maxLeafCols=A(this.data)}}toggleFold(e,t){const o=this.pathKey(e),i=new Set(this.folded),a=i.has(o);i.has(o)?i.delete(o):i.add(o),this.folded=i,this.requestUpdate(),a&&t&&t.leaf===void 0&&Array.isArray(t.children)&&t.children.length===0&&this.dispatchEvent(new CustomEvent("unfold",{detail:t,bubbles:!0,composed:!0}))}renderLeadingIcon(e){return e.icon instanceof SVGElement?r`<span class="leading-icon">${e.icon}</span>`:typeof e.icon=="string"?r`<span class="leading-icon ms">${e.icon}</span>`:r``}renderRows(e,t=[],o=0,i=!1){if(!e)return[];const a=[],n=e.children!==void 0,c=!!(e.children&&e.children.length>0),h=this.pathKey(t),f=this.folded.has(h),x=e.leaf??[];return a.push(r`
      <tr class="tree-row ${i?"child-hidden":""}">
        <td class="guideline" style="padding-left:${o*1.5}em;">
          <div class="row-inner">
            <span class="row-left">
              ${n?r`
                    <span
                      class="tree-fold ${f?"folded":""}"
                      @click=${()=>this.toggleFold(t,e)}
                      @keydown=${s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.toggleFold(t,e))}}
                      tabindex="0"
                      role="button"
                      aria-label="Toggle fold"
                    >
                      ⌃
                    </span>
                  `:r`<span class="tree-fold"></span>`}
              ${this.renderLeadingIcon(e)}
              <span class="tree-key">${e.name}</span>
            </span>
          </div>
        </td>
        ${Array.from({length:this.maxLeafCols},(s,g)=>{const d=x[g];return r`<td class="val-cell">
            ${d?r`
                  <div class="val-inner">
                    ${d.edit?r`
                          <icon-button
                            aria-label="Edit value ${g+1}"
                            @click=${d.edit}
                          >
                            <span class="ms">edit</span>
                          </icon-button>
                        `:""}
                    <span class="val-text">${d.val??""}</span>
                  </div>
                `:""}
          </td>`})}
      </tr>
    `),c&&e.children.forEach((s,g)=>{const d=this.renderRows(s,[...t,"children",g],o+1,i||f);a.push(...d)}),a}render(){return this.data?r`
      <table class="tree-grid">
        <tbody>
          ${this.renderRows(this.data,[],0)}
        </tbody>
      </table>
    `:r`<div class="no-data">No data provided</div>`}};u.scopedElements={"oscd-icon-button":S},u.styles=b`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0');
    :host {
      font-family:
        'Roboto',
        system-ui,
        -apple-system,
        'Segoe UI',
        Arial,
        sans-serif;
      font-weight: 400;
      color: var(--action-tree-font-color, #000000);
      --md-icon-button-icon-size: 20px;
      --md-sys-color-on-surface-variant: var(--action-tree-font-color, #000000);
    }
    .tree-grid {
      width: auto; /* don't stretch to 100% */
      border-collapse: collapse;
      color: inherit;
    }
    .tree-grid th,
    .tree-grid td {
      border-bottom: 1px solid var(--action-tree-horizontal-grid-color, #eee);
      padding: 0.3em 0.5em;
      vertical-align: middle; /* center content vertically */
      font-weight: 400;
      color: inherit;
    }
    /* ensure some room between text and right-side icons */
    .tree-grid td:first-child,
    .tree-grid th:first-child {
      min-width: 360px;
      padding-right: 12px;
      border-right: 1px solid var(--action-tree-vertical-grid-color, #ddd); /* vertical separator */
      text-align: left;
    }
    .val-col,
    .val-cell {
      text-align: right;
      white-space: nowrap;
      color: inherit;
    }
    /* vertical separator after each value column */
    .val-cell {
      border-right: 1px solid var(--action-tree-vertical-grid-color, #ddd);
    }
    /* Remove border from last column */
    .val-cell:last-child {
      border-right: none;
    }
    /* Remove border from last row */
    .tree-row:last-child td {
      border-bottom: none;
    }
    /* layout inside value cell: icon on left, value aligned right */
    .val-inner {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .val-text {
      margin-left: auto;
      text-align: right;
      display: inline-block;
      min-width: 0;
      color: inherit;
    }
    /* remove extra spacing on icon-button in value cells */
    .val-cell icon-button {
      margin-right: 0;
      width: 24px;
      height: 24px;
    }
    /* row height for easier icon buttons */
    .tree-row {
      min-height: 34px;
      transition: all 400ms ease-in-out;
      max-height: 50px; /* smaller max-height for better animation */
      opacity: 1;
      overflow: hidden;
    }
    .tree-row.child-hidden {
      max-height: 0px;
      min-height: 0px;
      opacity: 0;
      padding: 0;
      margin: 0;
      border: none;
    }
    /* Hide content inside cells when row is hidden */
    .tree-row.child-hidden td {
      padding: 0;
      border: none;
      height: 0;
      line-height: 0;
    }
    .tree-row.child-hidden .row-inner,
    .tree-row.child-hidden .val-inner {
      display: none;
    }

    /* Uniform background for all rows */
    .tree-row:not(.child-hidden) {
      background-color: var(--action-tree-background-color, transparent);
    }

    /* Smooth transition for fold icon */
    .tree-fold {
      transition: transform var(--action-tree-fold-duration, 200ms) ease-in-out;
      transform: rotate(180deg); /* Default: point down when expanded */
    }
    .tree-fold.folded {
      transform: rotate(90deg); /* Point right when folded */
    }

    .row-inner {
      display: flex;
      align-items: center;
      gap: 0.4em;
      color: inherit;
    }
    .row-left {
      display: inline-flex;
      align-items: center;
      gap: 0.3em;
      min-width: 0;
      color: inherit;
    }
    .row-right {
      margin-left: auto; /* push actions to the right side of the first column */
      display: inline-flex;
      gap: 0.6em; /* a bit more space between action icons */
      color: inherit;
      font-weight: 400;
    }
    .tree-key {
      font-weight: 400;
      color: inherit;
      user-select: none;
      white-space: pre;
    }
    .tree-fold {
      cursor: pointer;
      margin-right: 0.1em;
      color: inherit;
      font-weight: 400;
      user-select: none;
      display: inline-block;
      width: 0.8em;
      text-align: center;
      font-size: 12px;
    }
    /* Material Symbols icon style */
    .ms {
      font-family: 'Material Symbols Outlined';
      font-weight: 400;
      font-style: normal;
      font-size: 18px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
      font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 20;
      color: inherit;
    }
    .leading-icon {
      color: inherit;
      width: 18px;
      height: 18px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .icon-btn {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border: 1px solid #999;
      border-radius: 50%;
      background: #fff;
      font-size: 12px;
      line-height: 1;
      padding: 0;
      font-weight: 400;
    }
    .guideline {
      position: relative;
    }
    .info-row td {
      background: transparent; /* no highlight */
      padding-top: 4px;
      padding-bottom: 6px;
    }
    .info-box {
      color: inherit;
      font-size: 0.9em;
      white-space: pre-wrap;
      font-weight: 300;
      margin-top: 4px;
    }
    /* explicit styling for no data message */
    .no-data {
      font-family:
        'Roboto',
        system-ui,
        -apple-system,
        'Segoe UI',
        Arial,
        sans-serif;
      font-weight: 400;
      color: inherit;
      padding: 8px 12px;
    }
  `;let l=u;w([L({type:Object})],l.prototype,"data");w([v()],l.prototype,"folded");w([v()],l.prototype,"knownPaths");w([v()],l.prototype,"maxLeafCols");customElements.define("oscd-action-tree",l);const C={name:"IED1",children:[{name:"LD1",children:[{name:"LLN0",children:[{name:"Beh",leaf:[{val:0},{edit:()=>{window.alert("SomeAlert")},val:1},{val:4}]}]},{name:"MMXU1",info:"This is a logical node for measurement",children:[{name:"A",children:[{name:"phsA",leaf:[{val:33.44},{val:55.4483482345},{val:66.44}]},{name:"phsB",leaf:[{val:22.44},{val:66.44},{val:77.44}]},{name:"phsC",leaf:[{val:11.44},{val:33.44},{val:55.44}]}]}]}]},{name:"LD2",children:[{name:"LLN0",children:[{name:"Beh",leaf:[{val:0}]}]},{name:"MMXU1",children:[{name:"A",children:[{name:"phsA",leaf:[{val:33.44},{val:55.44},{val:66.44}]},{name:"phsB",leaf:[{val:22.44},{val:66.44},{val:77.44}]},{name:"phsC",leaf:[{val:11.44},{val:33.44},{val:55.44}]}]}]}]},{name:"LD3",children:[]}]},{args:D,argTypes:M,meta:R}=$({tagName:"oscd-action-tree"}),T={title:"Action Controls/Action Tree",tags:["autodocs"],...R},m={argTypes:M,args:{...D,".data":C}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    ['.data']: sampleData
  }
}`,...m.parameters?.docs?.source}}};const G=["Default"];export{m as Default,G as __namedExportsOrder,T as default};
