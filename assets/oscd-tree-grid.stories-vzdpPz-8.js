import{g as A}from"./getStorybookMeta-fEcaYkww.js";import{x as l,i as k,a as E}from"./iframe-C4uLaTi3.js";import{S as j,n as u,a as S}from"./list-navigation-helpers-uOLGipP7.js";import{O as P,r as T}from"./OscdIcon-C3sU6W8j.js";import{n as $}from"./ref-065o0VSE.js";import{O as R}from"./OscdList-C90geFFa.js";import{O as U}from"./OscdListItem-CcUpt_sr.js";import{O as J}from"./OscdOutlinedTextField-Dd6Lhoh6.js";import"./getStorybookHelpers-BPPERp-C.js";import"./oscd-menu-item-D6eVNoir.js";import"./OscdMenuItem-AVFwwFRE.js";import"./query-assigned-nodes-EHSBqaR2.js";import"./menuItemController-vk-DquCy.js";import"./oscd-filled-button-CEBWtmCm.js";import"./preload-helper-PPVm8Dsz.js";import"./list-item-styles-CwxrGOCZ.js";import"./shared-styles-E0E9mV4N.js";import"./style-map-Cl8m6Gme.js";import"./redispatch-event-D1qO1AWI.js";import"./validator-BdcpFJ2q.js";import"./form-associated-DtXYuc2T.js";import"./on-report-validity-D7FQpsi-.js";import"./OscdOutlinedField-DaicQdGe.js";import"./shared-styles-9iojKk-g.js";const I={a:{children:{aa:{children:{aaa:{children:{aaaa:{},aaab:{},aaac:{},aaad:{}}},aab:{children:{aaba:{},aabb:{},aabc:{},aabd:{}}},aac:{children:{aaca:{},aacb:{},aacc:{},aacd:{}}},aad:{}}},ab:{mandatory:!0,children:{aba:{children:{abaa:{},abab:{},abac:{},abad:{}}},abb:{mandatory:!0,children:{abba:{text:"🎶Dancing Queen💃",mandatory:!0},abbb:{},abbc:{},abbd:{}}},abc:{children:{abca:{},abcb:{},abcc:{},abcd:{}}},abd:{}}},ac:{children:{aca:{children:{acaa:{},acab:{},acac:{},acad:{}}},acb:{children:{acba:{},acbb:{},acbc:{},acbd:{}}},acc:{children:{acca:{},accb:{},accc:{},accd:{}}},acd:{}}},ad:{}}},b:{children:{ba:{children:{baa:{children:{baaa:{},baab:{},baac:{},baad:{}}},bab:{children:{baba:{},babb:{},babc:{},babd:{}}},bac:{children:{baca:{},bacb:{},bacc:{},bacd:{}}},bad:{text:"bad👎"}}},bb:{children:{bba:{children:{bbaa:{},bbab:{},bbac:{},bbad:{}}},bbb:{children:{bbba:{},bbbb:{},bbbc:{},bbbd:{}}},bbc:{text:"British Broadcasting Corporation",children:{bbca:{text:"BBC One"},bbcb:{text:"BBC Two"},bbcc:{text:"BBC Three"},bbcd:{text:"BBC Four"},bbcr:{text:"BBC Radio",children:{bbcr1:{text:"BBC Radio 1"},bbcr2:{text:"BBC Radio 2"},bbcr3:{text:"BBC Radio 3"},bbcr4:{text:"BBC Radio 4"}}}}},bbd:{}}},bc:{children:{bca:{children:{bcaa:{},bcab:{},bcac:{},bcad:{}}},bcb:{children:{bcba:{},bcbb:{},bcbc:{},bcbd:{}}},bcc:{children:{bcca:{},bccb:{},bccc:{},bccd:{}}},bcd:{}}},bd:{}}},c:{children:{ca:{children:{caa:{children:{caaa:{},caab:{},caac:{},caad:{}}},cab:{text:"cab🚕",children:{caba:{},cabb:{},cabc:{},cabd:{}}},cac:{children:{caca:{},cacb:{},cacc:{},cacd:{}}},cad:{}}},cb:{children:{cba:{children:{cbaa:{},cbab:{},cbac:{},cbad:{}}},cbb:{children:{cbba:{},cbbb:{},cbbc:{},cbbd:{}}},cbc:{children:{cbca:{},cbcb:{},cbcc:{},cbcd:{}}},cbd:{}}},cc:{children:{cca:{children:{ccaa:{},ccab:{},ccac:{},ccad:{}}},ccb:{children:{ccba:{},ccbb:{},ccbc:{},ccbd:{}}},ccc:{children:{ccca:{},cccb:{},cccc:{},cccd:{}}},ccd:{}}},cd:{}}},d:{}};var F=Object.defineProperty,q=Object.getOwnPropertyDescriptor,p=(r,e,t,c)=>{for(var i=c>1?void 0:c?q(e,t):e,s=r.length-1,a;s>=0;s--)(a=r[s])&&(i=(c?a(e,t,i):a(i))||i);return c&&i&&F(e,t,i),i};function D(r,e){return r.length!==e?.length?!1:r.every((t,c)=>e[c]===t)}function B(r){return r?1+Math.max(-1,...Object.values(r).map(e=>B(e))):0}function L(r,e){return new Array(e).fill(0).map((t,c)=>new Array(r.length).fill(0).map((i,s)=>c<r[s].length?r[s].slice(0,c+1):void 0))}const O="$OSCD$selectAll$89764a15-504e-48f3-93b5-c8064dd39ee7",g=l`<oscd-list-item type="text"></oscd-list-item>`;function M(r,e=250){let t;return()=>{clearTimeout(t),t=setTimeout(()=>{r()},e)}}const v=class v extends j(k){constructor(){super(...arguments),this.tree={},this.selection={},this.filterLabel="",this.collapsed=new Set}get paths(){return this.getPaths()}set paths(e){if(!e){this.selection={};return}const t={};for(const c of e){let i=t;for(const s of c)Object.prototype.hasOwnProperty.call(i,s)||(i[s]={}),i=i[s]}this.selection=t}get filter(){return this.filterUI?.value??""}set filter(e){if(!this.filterUI)return;const t=this.filterUI.value;this.filterUI.value=e,this.requestUpdate("filter",t)}firstUpdated(){this.getAttribute("filter")&&(this.filter=this.getAttribute("filter"))}get depth(){return B(this.selection)}get filterRegex(){return new RegExp(this.filter,"u")}getPaths(e){let t=Object.keys(this.selection??{}).map(i=>[i]),c=e??this.depth-1;for(;c>0;)c-=1,t=t.flatMap(i=>{let s=this.selection;for(const o of i)s=s[o];const a=Object.keys(s).map(o=>i.concat(o));return a.length===0?[i]:a});return e===void 0?t:t.filter(i=>i.length>e).sort((i,s)=>i.join(" ").localeCompare(s.join(" ")))}treeNode(e){let{tree:t}=this;for(const c of e.slice(0,-1))t=t[c]?.children??{};return t[e[e.length-1]]??{}}rows(){const e=Object.keys(this.tree).map(t=>[t]);for(let t=0;t<this.depth;t+=1)this.getPaths(t).forEach(c=>Object.keys(this.treeNode(c).children??{}).forEach(i=>e.push(c.concat(i))));return e.filter(t=>!e.some(c=>c.length>t.length&&t.every((i,s)=>c[s]===i))).filter(t=>this.filter===""||t.join(" ").match(this.filterRegex)).map(t=>{for(let c=t.length-1;c>0;c-=1)if(this.collapsed.has(JSON.stringify(t.slice(0,-c))))return t.slice(0,-c);return t}).sort((t,c)=>t.join(" ").localeCompare(c.join(" "))).filter((t,c,i)=>!D(t,i[c-1]))}clicked(e){return e.tagName==="OSCD-LIST-ITEM"?e:e.parentElement}select(e,t){const c=e.concat([t]),i=s=>c.every((a,o)=>s[o]===a);this.paths.some(i)?(this.collapsed.delete(JSON.stringify(c)),this.paths=this.paths.filter(s=>!i(s)).concat([e])):this.paths=this.paths.concat([c])}selectAll(e){const t=Array.from(e.closest("oscd-list").children).slice(1),c=t.some(s=>!s.hasAttribute("activated")&&s.type!=="text"&&!s.disabled);let i=[...this.paths];t.filter(s=>s.type!=="text").filter(s=>!s.disabled).filter(s=>c!==s.hasAttribute("activated")).forEach(s=>{const a=JSON.parse(s.dataset.path).concat([s.getAttribute("value")]),o=f=>a.every((m,x)=>f[x]===m);i.some(o)?i=i.filter(f=>!o(f)).concat([a.slice(0,-1)]):i.push(a)}),this.paths=i}async scrollRight(){this.requestUpdate(),await this.updateComplete,requestAnimationFrame(()=>{this.container&&(this.container.scrollLeft=1e3*this.depth)})}handleSelected(e){const t=this.clicked(e.currentTarget),c=t.getAttribute("value");if(c===void 0||!t)return Promise.resolve();if(c===O)this.selectAll(t);else{const i=JSON.parse(t.dataset.path);this.select(i,c)}return this.scrollRight()}renderCell(e,t=[]){const c=e.slice(0,-1),i=e[e.length-1],s=this.getPaths(c.length).map(b=>JSON.stringify(b)).includes(JSON.stringify(e)),a=e.every((b,h)=>t[h]===b);let o=!1;const f=b=>{if(b||(o=!1),!(o||!b)&&(o=!0,this.treeNode(e).mandatory)){let h=this.selection;for(const _ of e.slice(0,-1))h=h[_];if(h[e[e.length-1]])return;h[e[e.length-1]]={},this.requestUpdate("selection")}},m=this.treeNode(e).mandatory,x=this.collapsed.has(JSON.stringify(e)),N=Object.keys(this.treeNode(e).children??{}).length;let d="";return N?s?d="expand_less":d="expand_more":s?d="remove":d="add",m&&(x?d="more_vert":d=""),a&&(d="subdirectory_arrow_right"),l`<oscd-list-item
      @click="${async b=>{this.handleSelected(b),await new Promise(h=>{setTimeout(h,1)}),s||this.dispatchEvent(new CustomEvent("node-selected",{bubbles:!0,composed:!0,detail:{node:this.treeNode(e),path:e}}))}}"
      value="${i}"
      data-path=${JSON.stringify(c)}
      ?activated=${s}
      ?disabled=${m}
      ?noninteractive=${a}
      .type=${a?"text":"link"}
      style="${a?"opacity: 0.38":""}"
      ${$(f)}
      >${d?l`<oscd-icon slot="end">${d}</oscd-icon>`:l``}${this.treeNode(e).text??e[e.length-1]}</oscd-list-item
    >`}renderColumn(e){const t=[];if(e.length===0||e.every(c=>c===void 0))return l``;for(let c=0;c<e.length;c+=1){const i=e[c];t.push(i?this.renderCell(e[c],e[c-1]):g)}return l`<oscd-list
      ><oscd-list-item
        type="link"
        @click="${c=>this.handleSelected(c)}"
        value="${O}"
        ><div slot="headline"></div>
        <oscd-icon slot="end">done_all</oscd-icon></oscd-list-item
      >${t}</oscd-list
    >`}toggleCollapse(e){this.collapsed.has(e)?this.collapsed.delete(e):this.collapsed.add(e),this.requestUpdate()}renderExpandCell(e){const t=JSON.stringify(e);return!this.collapsed.has(t)||!e.length?g:l`<oscd-list-item
      type="link"
      class="filter"
      data-path="${t}"
      @click="${c=>{const i=this.clicked(c.target),{path:s}=i.dataset;s&&this.toggleCollapse(s)}}"
      ><div slot="headline"></div>
      <oscd-icon slot="end">unfold_more</oscd-icon></oscd-list-item
    >`}renderExpandColumn(e){return l`
      <oscd-list class="expand"
        >${g}${e.map(t=>this.renderExpandCell(t))}</oscd-list
      >
    `}renderCollapseCell(e){const t=JSON.stringify(e.slice(0,-1));return e.length<2?l`
        <oscd-list-item type="text"
          ><oscd-icon style="opacity: 0" ; slot="end"
            >unfold_less</oscd-icon
          ></oscd-list-item
        >
      `:l`<oscd-list-item
      type="link"
      class="filter"
      data-path="${t}"
      @click="${c=>{const i=this.clicked(c.target),{path:s}=i.dataset;s&&this.toggleCollapse(s)}}"
      ><div slot="headline"></div>
      <oscd-icon slot="end">unfold_less</oscd-icon></oscd-list-item
    >`}renderCollapseColumn(e){return l`<oscd-list class="collapse"
      >${g}${e.map(t=>this.renderCollapseCell(t))}</oscd-list
    >`}renderColumns(){const e=this.rows(),t=L(e,this.depth+1).map(c=>this.renderColumn(c));return l`${this.renderCollapseColumn(e)}${t}${this.renderExpandColumn(e)}`}renderFilterField(){return l`<oscd-outlined-textfield
      style="--oscd-outlined-text-field-container-shape: 28px;"
      icon="search"
      ${$(e=>{if(!e)return;const t=!!e.value;e.querySelector("oscd-icon").textContent=t?"saved_search":"search"})}
      label="${this.filterLabel}"
      @input=${M(()=>this.requestUpdate("filter"))}
    >
      <oscd-icon slot="leading-icon">search</oscd-icon>
    </oscd-outlined-textfield>`}render(){return l`${this.renderFilterField()}
      <div class="pane">${this.renderColumns()}</div>`}};v.scopedElements={"oscd-list":R,"oscd-icon":P,"oscd-list-item":U,"oscd-outlined-textfield":J},v.styles=E`
    div.pane {
      display: flex;
      flex-direction: row;
      overflow: auto;
    }

    oscd-list-item.filter {
      color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));
    }
  `;let n=v;p([u({type:Object})],n.prototype,"tree",2);p([u({type:Object,reflect:!0})],n.prototype,"selection",2);p([u({type:Array,reflect:!0})],n.prototype,"paths",1);p([u({type:String})],n.prototype,"filter",1);p([u({type:String})],n.prototype,"filterLabel",2);p([T()],n.prototype,"depth",1);p([S("oscd-outlined-textfield")],n.prototype,"filterUI",2);p([S("div")],n.prototype,"container",2);customElements.define("oscd-tree-grid",n);const{args:C,argTypes:V,meta:Q}=A({tagName:"oscd-tree-grid"}),me={...Q,title:"Tree Grid / Tree Grid",tags:["autodocs"]},w={filter:C.filter??"",filterLabel:C.filterLabel??"Filter items",".paths":C.paths??[],".selection":{},".tree":I};console.log("defaultArgs",w);const y={argTypes:V,args:w};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: defaultArgs
}`,...y.parameters?.docs?.source}}};const ge=["Default"];export{y as Default,ge as __namedExportsOrder,me as default};
