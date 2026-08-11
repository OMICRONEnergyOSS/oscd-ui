import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,f as r,u as i}from"./static-html-JNahc6jH.js";import{E as a,I as o,L as s,_ as c,j as l,k as u}from"./list-navigation-helpers-C1Ibc9kd.js";import{n as d,t as f}from"./OscdIcon-CDSDekmX.js";import{n as p,t as m}from"./OscdList-BWC_Wr9e.js";import{n as h,t as g}from"./OscdListItem-D6qhYVhe.js";import{n as _,t as v}from"./decorate-DTsqE9Ek.js";import{n as y,t as b}from"./getStorybookMeta-GO6mpvl0.js";import{n as x,t as S}from"./OscdOutlinedTextField-BLyuwW28.js";import{i as C,t as w}from"./ref-DWECS_Yl.js";var T,E=e((()=>{T={a:{children:{aa:{children:{aaa:{children:{aaaa:{},aaab:{},aaac:{},aaad:{}}},aab:{children:{aaba:{},aabb:{},aabc:{},aabd:{}}},aac:{children:{aaca:{},aacb:{},aacc:{},aacd:{}}},aad:{}}},ab:{mandatory:!0,children:{aba:{children:{abaa:{},abab:{},abac:{},abad:{}}},abb:{mandatory:!0,children:{abba:{text:`🎶Dancing Queen💃`,mandatory:!0},abbb:{},abbc:{},abbd:{}}},abc:{children:{abca:{},abcb:{},abcc:{},abcd:{}}},abd:{}}},ac:{children:{aca:{children:{acaa:{},acab:{},acac:{},acad:{}}},acb:{children:{acba:{},acbb:{},acbc:{},acbd:{}}},acc:{children:{acca:{},accb:{},accc:{},accd:{}}},acd:{}}},ad:{}}},b:{children:{ba:{children:{baa:{children:{baaa:{},baab:{},baac:{},baad:{}}},bab:{children:{baba:{},babb:{},babc:{},babd:{}}},bac:{children:{baca:{},bacb:{},bacc:{},bacd:{}}},bad:{text:`bad👎`}}},bb:{children:{bba:{children:{bbaa:{},bbab:{},bbac:{},bbad:{}}},bbb:{children:{bbba:{},bbbb:{},bbbc:{},bbbd:{}}},bbc:{text:`British Broadcasting Corporation`,children:{bbca:{text:`BBC One`},bbcb:{text:`BBC Two`},bbcc:{text:`BBC Three`},bbcd:{text:`BBC Four`},bbcr:{text:`BBC Radio`,children:{bbcr1:{text:`BBC Radio 1`},bbcr2:{text:`BBC Radio 2`},bbcr3:{text:`BBC Radio 3`},bbcr4:{text:`BBC Radio 4`}}}}},bbd:{}}},bc:{children:{bca:{children:{bcaa:{},bcab:{},bcac:{},bcad:{}}},bcb:{children:{bcba:{},bcbb:{},bcbc:{},bcbd:{}}},bcc:{children:{bcca:{},bccb:{},bccc:{},bccd:{}}},bcd:{}}},bd:{}}},c:{children:{ca:{children:{caa:{children:{caaa:{},caab:{},caac:{},caad:{}}},cab:{text:`cab🚕`,children:{caba:{},cabb:{},cabc:{},cabd:{}}},cac:{children:{caca:{},cacb:{},cacc:{},cacd:{}}},cad:{}}},cb:{children:{cba:{children:{cbaa:{},cbab:{},cbac:{},cbad:{}}},cbb:{children:{cbba:{},cbbb:{},cbbc:{},cbbd:{}}},cbc:{children:{cbca:{},cbcb:{},cbcc:{},cbcd:{}}},cbd:{}}},cc:{children:{cca:{children:{ccaa:{},ccab:{},ccac:{},ccad:{}}},ccb:{children:{ccba:{},ccbb:{},ccbc:{},ccbd:{}}},ccc:{children:{ccca:{},cccb:{},cccc:{},cccd:{}}},ccd:{}}},cd:{}}},d:{}}}));function D(e,t){return e.length===t?.length?e.every((e,n)=>t[n]===e):!1}function O(e){return e?1+Math.max(-1,...Object.values(e).map(e=>O(e))):0}function k(e,t){return Array(t).fill(0).map((t,n)=>Array(e.length).fill(0).map((t,r)=>n<e[r].length?e[r].slice(0,n+1):void 0))}function A(e,t=250){let n;return()=>{clearTimeout(n),n=setTimeout(()=>{e()},t)}}var j,M,N,P=e((()=>{i(),c(),w(),s(),d(),p(),h(),x(),_(),j=`$OSCD$selectAll$89764a15-504e-48f3-93b5-c8064dd39ee7`,M=n`<oscd-list-item type="text"></oscd-list-item>`,N=class extends o(r){constructor(...e){super(...e),this.tree={},this.selection={},this.filterLabel=``,this.collapsed=new Set}static{this.scopedElements={"oscd-list":m,"oscd-icon":f,"oscd-list-item":g,"oscd-outlined-textfield":S}}get paths(){return this.getPaths()}set paths(e){if(!e){this.selection={};return}let t={};for(let n of e){let e=t;for(let t of n)Object.prototype.hasOwnProperty.call(e,t)||(e[t]={}),e=e[t]}this.selection=t}get filter(){return this.filterUI?.value??``}set filter(e){if(!this.filterUI)return;let t=this.filterUI.value;this.filterUI.value=e,this.requestUpdate(`filter`,t)}firstUpdated(){this.getAttribute(`filter`)&&(this.filter=this.getAttribute(`filter`))}get depth(){return O(this.selection)}get filterRegex(){return new RegExp(this.filter,`u`)}getPaths(e){let t=Object.keys(this.selection??{}).map(e=>[e]),n=e??this.depth-1;for(;n>0;)--n,t=t.flatMap(e=>{let t=this.selection;for(let n of e)t=t[n];let n=Object.keys(t).map(t=>e.concat(t));return n.length===0?[e]:n});return e===void 0?t:t.filter(t=>t.length>e).sort((e,t)=>e.join(` `).localeCompare(t.join(` `)))}treeNode(e){let{tree:t}=this;for(let n of e.slice(0,-1))t=t[n]?.children??{};return t[e[e.length-1]]??{}}rows(){let e=Object.keys(this.tree).map(e=>[e]);for(let t=0;t<this.depth;t+=1)this.getPaths(t).forEach(t=>Object.keys(this.treeNode(t).children??{}).forEach(n=>e.push(t.concat(n))));return e.filter(t=>!e.some(e=>e.length>t.length&&t.every((t,n)=>e[n]===t))).filter(e=>this.filter===``||e.join(` `).match(this.filterRegex)).map(e=>{for(let t=e.length-1;t>0;--t)if(this.collapsed.has(JSON.stringify(e.slice(0,-t))))return e.slice(0,-t);return e}).sort((e,t)=>e.join(` `).localeCompare(t.join(` `))).filter((e,t,n)=>!D(e,n[t-1]))}clicked(e){return e.tagName===`OSCD-LIST-ITEM`?e:e.parentElement}select(e,t){let n=e.concat([t]),r=e=>n.every((t,n)=>e[n]===t);this.paths.some(r)?(this.collapsed.delete(JSON.stringify(n)),this.paths=this.paths.filter(e=>!r(e)).concat([e])):this.paths=this.paths.concat([n])}selectAll(e){let t=Array.from(e.closest(`oscd-list`).children).slice(1),n=t.some(e=>!e.hasAttribute(`activated`)&&e.type!==`text`&&!e.disabled),r=[...this.paths];t.filter(e=>e.type!==`text`).filter(e=>!e.disabled).filter(e=>n!==e.hasAttribute(`activated`)).forEach(e=>{let t=JSON.parse(e.dataset.path).concat([e.getAttribute(`value`)]),n=e=>t.every((t,n)=>e[n]===t);r.some(n)?r=r.filter(e=>!n(e)).concat([t.slice(0,-1)]):r.push(t)}),this.paths=r}async scrollRight(){this.requestUpdate(),await this.updateComplete,requestAnimationFrame(()=>{this.container&&(this.container.scrollLeft=1e3*this.depth)})}handleSelected(e){let t=this.clicked(e.currentTarget),n=t.getAttribute(`value`);if(n===void 0||!t)return Promise.resolve();if(n===j)this.selectAll(t);else{let e=JSON.parse(t.dataset.path);this.select(e,n)}return this.scrollRight()}renderCell(e,t=[]){let r=e.slice(0,-1),i=e[e.length-1],a=this.getPaths(r.length).map(e=>JSON.stringify(e)).includes(JSON.stringify(e)),o=e.every((e,n)=>t[n]===e),s=!1,c=t=>{if(t||(s=!1),!(s||!t)&&(s=!0,this.treeNode(e).mandatory)){let t=this.selection;for(let n of e.slice(0,-1))t=t[n];if(t[e[e.length-1]])return;t[e[e.length-1]]={},this.requestUpdate(`selection`)}},l=this.treeNode(e).mandatory,u=this.collapsed.has(JSON.stringify(e)),d=Object.keys(this.treeNode(e).children??{}).length,f=``;return f=d?a?`expand_less`:`expand_more`:a?`remove`:`add`,l&&(f=u?`more_vert`:``),o&&(f=`subdirectory_arrow_right`),n`<oscd-list-item
      @click="${async t=>{this.handleSelected(t),await new Promise(e=>{setTimeout(e,1)}),a||this.dispatchEvent(new CustomEvent(`node-selected`,{bubbles:!0,composed:!0,detail:{node:this.treeNode(e),path:e}}))}}"
      value="${i}"
      data-path=${JSON.stringify(r)}
      ?activated=${a}
      ?disabled=${l}
      ?noninteractive=${o}
      .type=${o?`text`:`link`}
      style="${o?`opacity: 0.38`:``}"
      ${C(c)}
      >${f?n`<oscd-icon slot="end">${f}</oscd-icon>`:n``}${this.treeNode(e).text??e[e.length-1]}</oscd-list-item
    >`}renderColumn(e){let t=[];if(e.length===0||e.every(e=>e===void 0))return n``;for(let n=0;n<e.length;n+=1){let r=e[n];t.push(r?this.renderCell(e[n],e[n-1]):M)}return n`<oscd-list
      ><oscd-list-item
        type="link"
        @click="${e=>this.handleSelected(e)}"
        value="${j}"
        ><div slot="headline"></div>
        <oscd-icon slot="end">done_all</oscd-icon></oscd-list-item
      >${t}</oscd-list
    >`}toggleCollapse(e){this.collapsed.has(e)?this.collapsed.delete(e):this.collapsed.add(e),this.requestUpdate()}renderExpandCell(e){let t=JSON.stringify(e);return!this.collapsed.has(t)||!e.length?M:n`<oscd-list-item
      type="link"
      class="filter"
      data-path="${t}"
      @click="${e=>{let{path:t}=this.clicked(e.target).dataset;t&&this.toggleCollapse(t)}}"
      ><div slot="headline"></div>
      <oscd-icon slot="end">unfold_more</oscd-icon></oscd-list-item
    >`}renderExpandColumn(e){return n`
      <oscd-list class="expand"
        >${M}${e.map(e=>this.renderExpandCell(e))}</oscd-list
      >
    `}renderCollapseCell(e){let t=JSON.stringify(e.slice(0,-1));return e.length<2?n`
        <oscd-list-item type="text"
          ><oscd-icon style="opacity: 0" ; slot="end"
            >unfold_less</oscd-icon
          ></oscd-list-item
        >
      `:n`<oscd-list-item
      type="link"
      class="filter"
      data-path="${t}"
      @click="${e=>{let{path:t}=this.clicked(e.target).dataset;t&&this.toggleCollapse(t)}}"
      ><div slot="headline"></div>
      <oscd-icon slot="end">unfold_less</oscd-icon></oscd-list-item
    >`}renderCollapseColumn(e){return n`<oscd-list class="collapse"
      >${M}${e.map(e=>this.renderCollapseCell(e))}</oscd-list
    >`}renderColumns(){let e=this.rows(),t=k(e,this.depth+1).map(e=>this.renderColumn(e));return n`${this.renderCollapseColumn(e)}${t}${this.renderExpandColumn(e)}`}renderFilterField(){return n`<oscd-outlined-textfield
      style="--oscd-outlined-text-field-container-shape: 28px;"
      icon="search"
      ${C(e=>{if(!e)return;let t=!!e.value;e.querySelector(`oscd-icon`).textContent=t?`saved_search`:`search`})}
      label="${this.filterLabel}"
      @input=${A(()=>this.requestUpdate(`filter`))}
    >
      <oscd-icon slot="leading-icon">search</oscd-icon>
    </oscd-outlined-textfield>`}render(){return n`${this.renderFilterField()}
      <div class="pane">${this.renderColumns()}</div>`}static{this.styles=t`
    div.pane {
      display: flex;
      flex-direction: row;
      overflow: auto;
    }

    oscd-list-item.filter {
      color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));
    }
  `}},v([l({type:Object})],N.prototype,`tree`,void 0),v([l({type:Object,reflect:!0})],N.prototype,`selection`,void 0),v([l({type:Array,reflect:!0})],N.prototype,`paths`,null),v([l({type:String})],N.prototype,`filter`,null),v([l({type:String})],N.prototype,`filterLabel`,void 0),v([u()],N.prototype,`depth`,null),v([a(`oscd-outlined-textfield`)],N.prototype,`filterUI`,void 0),v([a(`div`)],N.prototype,`container`,void 0)})),F=e((()=>{P(),customElements.define(`oscd-tree-grid`,N)})),I,L,R,z,B,V,H;e((()=>{y(),E(),F(),{args:I,argTypes:L,meta:R}=b({tagName:`oscd-tree-grid`}),z={...R,title:`Tree Grid / Tree Grid`,tags:[`autodocs`]},B={filter:I.filter??``,filterLabel:I.filterLabel??`Filter items`,".paths":I.paths??[],".selection":{},".tree":T},console.log(`defaultArgs`,B),V={argTypes:L,args:B},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  argTypes,
  args: defaultArgs
}`,...V.parameters?.docs?.source}}},H=[`Default`]}))();export{V as Default,H as __namedExportsOrder,z as default};