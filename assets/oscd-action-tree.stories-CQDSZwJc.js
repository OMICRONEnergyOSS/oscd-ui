import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,f as r,u as i}from"./static-html-JNahc6jH.js";import{I as a,L as o,_ as s,j as c,k as l}from"./list-navigation-helpers-C1Ibc9kd.js";import{n as u,t as d}from"./OscdIcon-BLAkUGod.js";import{n as f,t as p}from"./OscdIconButton-De0GC20a.js";import{n as m,t as h}from"./decorate-DTsqE9Ek.js";import{n as g,t as _}from"./getStorybookMeta-DZ7hG-Av.js";function v(e){let t=0,n=e=>{e&&(e.leaf&&e.leaf.length&&(t=Math.max(t,e.leaf.length)),e.children?.forEach(n))};return n(e),t}var y,b=e((()=>{i(),s(),o(),u(),f(),m(),y=class extends a(r){constructor(...e){super(...e),this.data=null,this.folded=new Set,this.knownPaths=new Set,this.maxLeafCols=0}static{this.scopedElements={"oscd-icon":d,"oscd-icon-button":p}}pathKey(e){return e.join(`.`)||`root`}willUpdate(e){if(this.data){let e=new Set,t=(n,r=[])=>{if(n){if(r.length>0&&n.children!==void 0){let t=this.pathKey(r);e.add(t)}n.children?.forEach((e,n)=>t(e,[...r,`children`,n]))}};t(this.data,[]);let n=new Set(this.folded);e.forEach(e=>{this.knownPaths.has(e)||n.add(e)});let r=new Set;n.forEach(t=>{e.has(t)&&r.add(t)}),this.folded=r,this.knownPaths=e,this.maxLeafCols=v(this.data)}}toggleFold(e,t){let n=this.pathKey(e),r=new Set(this.folded),i=r.has(n);r.has(n)?r.delete(n):r.add(n),this.folded=r,this.requestUpdate(),i&&t&&t.leaf===void 0&&Array.isArray(t.children)&&t.children.length===0&&this.dispatchEvent(new CustomEvent(`unfold`,{detail:t,bubbles:!0,composed:!0}))}renderLeadingIcon(e){return e.icon instanceof SVGElement?n`<span class="leading-icon">${e.icon}</span>`:typeof e.icon==`string`?n`<span class="leading-icon"
        ><oscd-icon>${e.icon}</oscd-icon></span
      >`:n``}renderRows(e,t=[],r=0,i=!1){if(!e)return[];let a=[],o=e.children!==void 0,s=!!(e.children&&e.children.length>0),c=this.pathKey(t),l=this.folded.has(c),u=e.leaf??[];return a.push(n`
      <tr class="tree-row ${i?`child-hidden`:``}">
        <td class="guideline" style="padding-left:${r*1.5}em;">
          <div class="row-inner">
            <span class="row-left">
              ${o?n`
                    <span
                      class="tree-fold ${l?`folded`:``}"
                      @click=${()=>this.toggleFold(t,e)}
                      @keydown=${n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),this.toggleFold(t,e))}}
                      tabindex="0"
                      role="button"
                      aria-label="Toggle fold"
                    >
                      ⌃
                    </span>
                  `:n`<span class="tree-fold"></span>`}
              ${this.renderLeadingIcon(e)}
              <span class="tree-key">${e.name}</span>
            </span>
          </div>
        </td>
        ${Array.from({length:this.maxLeafCols},(e,t)=>{let r=u[t];return n`<td class="val-cell">
            ${r?n`
                  <div class="val-inner">
                    ${r.edit?n`
                          <oscd-icon-button
                            aria-label="Edit value ${t+1}"
                            @click=${r.edit}
                          >
                            <oscd-icon>edit</oscd-icon>
                          </oscd-icon-button>
                        `:``}
                    <span class="val-text">${r.val??``}</span>
                  </div>
                `:``}
          </td>`})}
      </tr>
    `),s&&e.children.forEach((e,n)=>{let o=this.renderRows(e,[...t,`children`,n],r+1,i||l);a.push(...o)}),a}render(){return this.data?n`
      <table class="tree-grid">
        <tbody>
          ${this.renderRows(this.data,[],0)}
        </tbody>
      </table>
    `:n`<div class="no-data">No data provided</div>`}static{this.styles=t`
    :host {
      font-family: var(--md-sys-typescale-body-large-font, Roboto);
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
    .val-cell oscd-icon-button {
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
    .leading-icon {
      color: inherit;
      width: 18px;
      height: 18px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      --md-icon-size: 18px;
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
      font-family: var(--md-sys-typescale-body-large-font, Roboto);
      font-weight: 400;
      color: inherit;
      padding: 8px 12px;
    }
  `}},h([c({type:Object})],y.prototype,`data`,void 0),h([l()],y.prototype,`folded`,void 0),h([l()],y.prototype,`knownPaths`,void 0),h([l()],y.prototype,`maxLeafCols`,void 0)})),x=e((()=>{b(),customElements.define(`oscd-action-tree`,y)})),S,C,w,T,E,D,O;e((()=>{x(),g(),S={name:`IED1`,children:[{name:`LD1`,children:[{name:`LLN0`,children:[{name:`Beh`,leaf:[{val:0},{edit:()=>{window.alert(`SomeAlert`)},val:1},{val:4}]}]},{name:`MMXU1`,info:`This is a logical node for measurement`,children:[{name:`A`,children:[{name:`phsA`,leaf:[{val:33.44},{val:55.4483482345},{val:66.44}]},{name:`phsB`,leaf:[{val:22.44},{val:66.44},{val:77.44}]},{name:`phsC`,leaf:[{val:11.44},{val:33.44},{val:55.44}]}]}]}]},{name:`LD2`,children:[{name:`LLN0`,children:[{name:`Beh`,leaf:[{val:0}]}]},{name:`MMXU1`,children:[{name:`A`,children:[{name:`phsA`,leaf:[{val:33.44},{val:55.44},{val:66.44}]},{name:`phsB`,leaf:[{val:22.44},{val:66.44},{val:77.44}]},{name:`phsC`,leaf:[{val:11.44},{val:33.44},{val:55.44}]}]}]}]},{name:`LD3`,children:[]}]},{args:C,argTypes:w,meta:T}=_({tagName:`oscd-action-tree`}),E={title:`Action Controls/Action Tree`,tags:[`autodocs`],...T},D={argTypes:w,args:{...C,".data":S}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: {
    ...args,
    ['.data']: sampleData
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`]}))();export{D as Default,O as __namedExportsOrder,E as default};