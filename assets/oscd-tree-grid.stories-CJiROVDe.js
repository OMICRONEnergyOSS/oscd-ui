import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,g as n,n as r,t as i}from"./lit-LihecQ0E.js";import{_ as a,f as o,h as s,n as c,r as l,t as u}from"./lit-element-CwUNoIyU.js";import{t as d}from"./decorate-2OK4V6AF.js";import{o as f,s as p}from"./OscdItem-C8-Le0Md.js";import{n as m,t as h}from"./getStorybookMeta-DLxhFeaY.js";import{n as g,t as _}from"./OscdList-mP8fD7NY.js";import{n as v,t as y}from"./OscdListItem-DOsmc99N.js";import{n as b,t as x}from"./OscdOutlinedTextField-C725QGUr.js";import{i as S,t as C}from"./ref-fQNC6eLx.js";var w;function T(){return(T=e((()=>{w={a:{children:{aa:{children:{aaa:{children:{aaaa:{},aaab:{},aaac:{},aaad:{}}},aab:{children:{aaba:{},aabb:{},aabc:{},aabd:{}}},aac:{children:{aaca:{},aacb:{},aacc:{},aacd:{}}},aad:{}}},ab:{mandatory:!0,children:{aba:{children:{abaa:{},abab:{},abac:{},abad:{}}},abb:{mandatory:!0,children:{abba:{text:`🎶Dancing Queen💃`,mandatory:!0},abbb:{},abbc:{},abbd:{}}},abc:{children:{abca:{},abcb:{},abcc:{},abcd:{}}},abd:{}}},ac:{children:{aca:{children:{acaa:{},acab:{},acac:{},acad:{}}},acb:{children:{acba:{},acbb:{},acbc:{},acbd:{}}},acc:{children:{acca:{},accb:{},accc:{},accd:{}}},acd:{}}},ad:{}}},b:{children:{ba:{children:{baa:{children:{baaa:{},baab:{},baac:{},baad:{}}},bab:{children:{baba:{},babb:{},babc:{},babd:{}}},bac:{children:{baca:{},bacb:{},bacc:{},bacd:{}}},bad:{text:`bad👎`}}},bb:{children:{bba:{children:{bbaa:{},bbab:{},bbac:{},bbad:{}}},bbb:{children:{bbba:{},bbbb:{},bbbc:{},bbbd:{}}},bbc:{text:`British Broadcasting Corporation`,children:{bbca:{text:`BBC One`},bbcb:{text:`BBC Two`},bbcc:{text:`BBC Three`},bbcd:{text:`BBC Four`},bbcr:{text:`BBC Radio`,children:{bbcr1:{text:`BBC Radio 1`},bbcr2:{text:`BBC Radio 2`},bbcr3:{text:`BBC Radio 3`},bbcr4:{text:`BBC Radio 4`}}}}},bbd:{}}},bc:{children:{bca:{children:{bcaa:{},bcab:{},bcac:{},bcad:{}}},bcb:{children:{bcba:{},bcbb:{},bcbc:{},bcbd:{}}},bcc:{children:{bcca:{},bccb:{},bccc:{},bccd:{}}},bcd:{}}},bd:{}}},c:{children:{ca:{children:{caa:{children:{caaa:{},caab:{},caac:{},caad:{}}},cab:{text:`cab🚕`,children:{caba:{},cabb:{},cabc:{},cabd:{}}},cac:{children:{caca:{},cacb:{},cacc:{},cacd:{}}},cad:{}}},cb:{children:{cba:{children:{cbaa:{},cbab:{},cbac:{},cbad:{}}},cbb:{children:{cbba:{},cbbb:{},cbbc:{},cbbd:{}}},cbc:{children:{cbca:{},cbcb:{},cbcc:{},cbcd:{}}},cbd:{}}},cc:{children:{cca:{children:{ccaa:{},ccab:{},ccac:{},ccad:{}}},ccb:{children:{ccba:{},ccbb:{},ccbc:{},ccbd:{}}},ccc:{children:{ccca:{},cccb:{},cccc:{},cccd:{}}},ccd:{}}},cd:{}}},d:{}}})))()}function E(e,t){return e.length===t?.length&&e.every((e,n)=>t[n]===e)}function D(e){return e?1+Math.max(-1,...Object.values(e).map(e=>D(e))):0}function O(e,t){return Array(t).fill(0).map((t,n)=>Array(e.length).fill(0).map((t,r)=>n<e[r].length?e[r].slice(0,n+1):void 0))}function k(e,t=250){let n;return()=>{clearTimeout(n),n=setTimeout(()=>{e()},t)}}var A,j,M;function N(){return(N=e((()=>{i(),l(),C(),c(),p(),g(),v(),b(),A=`$OSCD$selectAll$89764a15-504e-48f3-93b5-c8064dd39ee7`,j=t`<oscd-list-item type="text"></oscd-list-item>`,M=class extends u(r){constructor(...e){super(...e),this.tree={},this.selection={},this.filterLabel=``,this.collapsed=new Set}static{this.scopedElements={"oscd-list":_,"oscd-icon":f,"oscd-list-item":y,"oscd-outlined-textfield":x}}get paths(){return this.getPaths()}set paths(e){if(!e){this.selection={};return}let t={};for(let n of e){let e=t;for(let t of n)Object.prototype.hasOwnProperty.call(e,t)||(e[t]={}),e=e[t]}this.selection=t}get filter(){return this.filterUI?.value??``}set filter(e){if(!this.filterUI)return;let t=this.filterUI.value;this.filterUI.value=e,this.requestUpdate(`filter`,t)}firstUpdated(){this.getAttribute(`filter`)&&(this.filter=this.getAttribute(`filter`))}get depth(){return D(this.selection)}get filterRegex(){return new RegExp(this.filter,`u`)}getPaths(e){let t=Object.keys(this.selection??{}).map(e=>[e]),n=e??this.depth-1;for(;n>0;)--n,t=t.flatMap(e=>{let t=this.selection;for(let n of e)t=t[n];let n=Object.keys(t).map(t=>e.concat(t));return n.length===0?[e]:n});return e===void 0?t:t.filter(t=>t.length>e).sort((e,t)=>e.join(` `).localeCompare(t.join(` `)))}treeNode(e){let{tree:t}=this;for(let n of e.slice(0,-1))t=t[n]?.children??{};return t[e[e.length-1]]??{}}rows(){let e=Object.keys(this.tree).map(e=>[e]);for(let t=0;t<this.depth;t+=1)this.getPaths(t).forEach(t=>Object.keys(this.treeNode(t).children??{}).forEach(n=>e.push(t.concat(n))));return e.filter(t=>!e.some(e=>e.length>t.length&&t.every((t,n)=>e[n]===t))).filter(e=>this.filter===``||e.join(` `).match(this.filterRegex)).map(e=>{for(let t=e.length-1;t>0;--t)if(this.collapsed.has(JSON.stringify(e.slice(0,-t))))return e.slice(0,-t);return e}).sort((e,t)=>e.join(` `).localeCompare(t.join(` `))).filter((e,t,n)=>!E(e,n[t-1]))}clicked(e){return e.tagName===`OSCD-LIST-ITEM`?e:e.parentElement}select(e,t){let n=e.concat([t]),r=e=>n.every((t,n)=>e[n]===t);this.paths.some(r)?(this.collapsed.delete(JSON.stringify(n)),this.paths=this.paths.filter(e=>!r(e)).concat([e])):this.paths=this.paths.concat([n])}selectAll(e){let t=Array.from(e.closest(`oscd-list`).children).slice(1),n=t.some(e=>!e.hasAttribute(`activated`)&&e.type!==`text`&&!e.disabled),r=[...this.paths];t.filter(e=>e.type!==`text`).filter(e=>!e.disabled).filter(e=>n!==e.hasAttribute(`activated`)).forEach(e=>{let t=JSON.parse(e.dataset.path).concat([e.getAttribute(`value`)]),n=e=>t.every((t,n)=>e[n]===t);r.some(n)?r=r.filter(e=>!n(e)).concat([t.slice(0,-1)]):r.push(t)}),this.paths=r}async scrollRight(){this.requestUpdate(),await this.updateComplete,requestAnimationFrame(()=>{this.container&&(this.container.scrollLeft=1e3*this.depth)})}handleSelected(e){let t=this.clicked(e.currentTarget),n=t.getAttribute(`value`);if(n===void 0||!t)return Promise.resolve();if(n===A)this.selectAll(t);else{let e=JSON.parse(t.dataset.path);this.select(e,n)}return this.scrollRight()}renderCell(e,n=[]){let r=e.slice(0,-1),i=e[e.length-1],a=this.getPaths(r.length).map(e=>JSON.stringify(e)).includes(JSON.stringify(e)),o=e.every((e,t)=>n[t]===e),s=!1,c=t=>{if(t||(s=!1),!s&&t&&(s=!0,this.treeNode(e).mandatory)){let t=this.selection;for(let n of e.slice(0,-1))t=t[n];if(t[e[e.length-1]])return;t[e[e.length-1]]={},this.requestUpdate(`selection`)}},l=this.treeNode(e).mandatory,u=this.collapsed.has(JSON.stringify(e)),d=Object.keys(this.treeNode(e).children??{}).length,f=``;return f=d?a?`expand_less`:`expand_more`:a?`remove`:`add`,l&&(f=u?`more_vert`:``),o&&(f=`subdirectory_arrow_right`),t`<oscd-list-item
      @click="${async t=>{this.handleSelected(t),await new Promise(e=>{setTimeout(e,1)}),a||this.dispatchEvent(new CustomEvent(`node-selected`,{bubbles:!0,composed:!0,detail:{node:this.treeNode(e),path:e}}))}}"
      value="${i}"
      data-path=${JSON.stringify(r)}
      ?activated=${a}
      ?disabled=${l}
      ?noninteractive=${o}
      .type=${o?`text`:`link`}
      style="${o?`opacity: 0.38`:``}"
      ${S(c)}
      >${f?t`<oscd-icon slot="end">${f}</oscd-icon>`:t``}${this.treeNode(e).text??e[e.length-1]}</oscd-list-item
    >`}renderColumn(e){let n=[];if(e.length===0||e.every(e=>e===void 0))return t``;for(let t=0;t<e.length;t+=1){let r=e[t];n.push(r?this.renderCell(e[t],e[t-1]):j)}return t`<oscd-list
      ><oscd-list-item
        type="link"
        @click="${e=>this.handleSelected(e)}"
        value="${A}"
        ><div slot="headline"></div>
        <oscd-icon slot="end">done_all</oscd-icon></oscd-list-item
      >${n}</oscd-list
    >`}toggleCollapse(e){this.collapsed.has(e)?this.collapsed.delete(e):this.collapsed.add(e),this.requestUpdate()}renderExpandCell(e){let n=JSON.stringify(e);return!this.collapsed.has(n)||!e.length?j:t`<oscd-list-item
      type="link"
      class="filter"
      data-path="${n}"
      @click="${e=>{let{path:t}=this.clicked(e.target).dataset;t&&this.toggleCollapse(t)}}"
      ><div slot="headline"></div>
      <oscd-icon slot="end">unfold_more</oscd-icon></oscd-list-item
    >`}renderExpandColumn(e){return t`
      <oscd-list class="expand"
        >${j}${e.map(e=>this.renderExpandCell(e))}</oscd-list
      >
    `}renderCollapseCell(e){let n=JSON.stringify(e.slice(0,-1));return e.length<2?t`
        <oscd-list-item type="text"
          ><oscd-icon style="opacity: 0" ; slot="end"
            >unfold_less</oscd-icon
          ></oscd-list-item
        >
      `:t`<oscd-list-item
      type="link"
      class="filter"
      data-path="${n}"
      @click="${e=>{let{path:t}=this.clicked(e.target).dataset;t&&this.toggleCollapse(t)}}"
      ><div slot="headline"></div>
      <oscd-icon slot="end">unfold_less</oscd-icon></oscd-list-item
    >`}renderCollapseColumn(e){return t`<oscd-list class="collapse"
      >${j}${e.map(e=>this.renderCollapseCell(e))}</oscd-list
    >`}renderColumns(){let e=this.rows(),n=O(e,this.depth+1).map(e=>this.renderColumn(e));return t`${this.renderCollapseColumn(e)}${n}${this.renderExpandColumn(e)}`}renderFilterField(){return t`<oscd-outlined-textfield
      style="--md-outlined-text-field-container-shape: 28px;"
      icon="search"
      ${S(e=>{if(!e)return;let t=!!e.value;e.querySelector(`oscd-icon`).textContent=t?`saved_search`:`search`})}
      label="${this.filterLabel}"
      @input=${k(()=>this.requestUpdate(`filter`))}
    >
      <oscd-icon slot="leading-icon">search</oscd-icon>
    </oscd-outlined-textfield>`}render(){return t`${this.renderFilterField()}
      <div class="pane">${this.renderColumns()}</div>`}static{this.styles=n`
    div.pane {
      display: flex;
      flex-direction: row;
      overflow: auto;
    }

    oscd-list-item.filter {
      color: var(--md-sys-color-on-surface-variant, #49454f);
    }
  `}},d([a({type:Object})],M.prototype,`tree`,void 0),d([a({type:Object,reflect:!0})],M.prototype,`selection`,void 0),d([a({type:Array,reflect:!0})],M.prototype,`paths`,null),d([a({type:String})],M.prototype,`filter`,null),d([a({type:String})],M.prototype,`filterLabel`,void 0),d([s()],M.prototype,`depth`,null),d([o(`oscd-outlined-textfield`)],M.prototype,`filterUI`,void 0),d([o(`div`)],M.prototype,`container`,void 0)})))()}function P(){return(P=e((()=>{N(),customElements.define(`oscd-tree-grid`,M)})))()}var F,I,L,R,z,B,V;function H(){return(H=e((()=>{m(),T(),P(),{args:F,argTypes:I,meta:L}=h({tagName:`oscd-tree-grid`}),R={...L,title:`Tree Grid / Tree Grid`,tags:[`autodocs`]},z={filter:F.filter??``,filterLabel:F.filterLabel??`Filter items`,".paths":F.paths??[],".selection":{},".tree":w},console.log(`defaultArgs`,z),B={argTypes:I,args:z},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: defaultArgs
}`,...B.parameters?.docs?.source}}},V=[`Default`]})))()}H();export{B as Default,V as __namedExportsOrder,R as default};