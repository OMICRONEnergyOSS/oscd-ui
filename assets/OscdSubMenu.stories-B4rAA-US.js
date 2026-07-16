import{i as A,x as E,a as T}from"./iframe-CzfB892c.js";import"./oscd-menu-DzdBsvh4.js";import"./oscd-menu-item-Bv29e9fa.js";import{h,f as _,c as D,i as k,_ as a,n as l}from"./list-navigation-helpers-CWtHtHq2.js";import{o as M,O as R}from"./OscdIcon-D6gSxZ3c.js";import{g as y,h as K,N as s,S as f,C as I,K as w,O as P}from"./menuItemController-B_J_C6eD.js";import{C as S,O as x}from"./OscdMenu-D1YB7X1r.js";import"./oscd-filled-button-DQw484Ye.js";import{O as L}from"./OscdMenuItem-DA-1vXHl.js";import{s as N}from"./scopedWcDecorator-Dniazn4N.js";import"./preload-helper-PPVm8Dsz.js";import"./style-map-e5XHfPGA.js";import"./query-assigned-nodes-CLgeST5H.js";class d extends A{get item(){return this.items[0]??null}get menu(){return this.menus[0]??null}constructor(){super(),this.anchorCorner=S.START_END,this.menuCorner=S.START_START,this.hoverOpenDelay=400,this.hoverCloseDelay=400,this.isSubMenu=!0,this.previousOpenTimeout=0,this.previousCloseTimeout=0,this.onMouseenter=()=>{clearTimeout(this.previousOpenTimeout),clearTimeout(this.previousCloseTimeout),!this.menu?.open&&(this.hoverOpenDelay?this.previousOpenTimeout=setTimeout(()=>{this.show()},this.hoverOpenDelay):this.show())},this.onMouseleave=()=>{clearTimeout(this.previousCloseTimeout),clearTimeout(this.previousOpenTimeout),this.hoverCloseDelay?this.previousCloseTimeout=setTimeout(()=>{this.close()},this.hoverCloseDelay):this.close()},this.addEventListener("mouseenter",this.onMouseenter),this.addEventListener("mouseleave",this.onMouseleave)}render(){return E`
      <slot
        name="item"
        @click=${this.onClick}
        @keydown=${this.onKeydown}
        @slotchange=${this.onSlotchange}>
      </slot>
      <slot
        name="menu"
        @keydown=${this.onSubMenuKeydown}
        @close-menu=${this.onCloseSubmenu}
        @slotchange=${this.onSlotchange}>
      </slot>
    `}firstUpdated(){this.onSlotchange()}async show(){const e=this.menu;if(!e||e.open)return;e.addEventListener("closed",()=>{this.item.ariaExpanded="false",this.dispatchEvent(y()),this.dispatchEvent(h()),e.ariaHidden="true"},{once:!0}),e.positioning==="document"&&(e.positioning="absolute"),e.quick=!0,e.hasOverflow=!0,e.anchorCorner=this.anchorCorner,e.menuCorner=this.menuCorner,e.anchorElement=this.item,e.defaultFocus="first-item",e.removeAttribute("aria-hidden"),e.skipRestoreFocus=!1;const t=e.open;if(e.show(),this.item.ariaExpanded="true",this.item.ariaHasPopup="menu",e.id&&this.item.setAttribute("aria-controls",e.id),this.dispatchEvent(h()),this.dispatchEvent(K()),this.item.selected=!0,!t){let n=p=>{};const r=new Promise(p=>{n=p});e.addEventListener("opened",n,{once:!0}),await r}}async close(){const e=this.menu;if(!e||!e.open)return;this.dispatchEvent(y()),e.quick=!0,e.close(),this.dispatchEvent(h());let t=r=>{};const n=new Promise(r=>{t=r});e.addEventListener("closed",t,{once:!0}),await n}onSlotchange(){if(!this.item)return;this.item.ariaExpanded="false",this.item.ariaHasPopup="menu",this.menu?.id&&this.item.setAttribute("aria-controls",this.menu.id),this.item.keepOpen=!0;const e=this.menu;e&&(e.isSubmenu=!0,e.ariaHidden="true")}onClick(){this.show()}async onKeydown(e){const t=this.isSubmenuOpenKey(e.code);if(e.defaultPrevented)return;const n=t&&(s.LEFT===e.code||s.RIGHT===e.code);if((e.code===f.SPACE||n)&&(e.preventDefault(),n&&e.stopPropagation()),!t)return;const r=this.menu;if(!r)return;const p=r.items,b=_(p);if(b){await this.show(),b.tabIndex=0,b.focus();return}}onCloseSubmenu(e){const{itemPath:t,reason:n}=e.detail;if(t.push(this.item),this.dispatchEvent(y()),n.kind===I.KEYDOWN&&n.key===w.ESCAPE){e.stopPropagation(),this.item.dispatchEvent(D());return}this.dispatchEvent(h())}async onSubMenuKeydown(e){if(e.defaultPrevented)return;const{close:t,keyCode:n}=this.isSubmenuCloseKey(e.code);t&&(e.preventDefault(),(n===s.LEFT||n===s.RIGHT)&&e.stopPropagation(),await this.close(),k(this.menu.items),this.item?.focus(),this.item.tabIndex=0,this.item.focus())}isSubmenuOpenKey(e){const n=getComputedStyle(this).direction==="rtl"?s.LEFT:s.RIGHT;switch(e){case n:case f.SPACE:case f.ENTER:return!0;default:return!1}}isSubmenuCloseKey(e){const n=getComputedStyle(this).direction==="rtl"?s.RIGHT:s.LEFT;switch(e){case n:case w.ESCAPE:return{close:!0,keyCode:e};default:return{close:!1}}}}a([l({attribute:"anchor-corner"})],d.prototype,"anchorCorner",void 0);a([l({attribute:"menu-corner"})],d.prototype,"menuCorner",void 0);a([l({type:Number,attribute:"hover-open-delay"})],d.prototype,"hoverOpenDelay",void 0);a([l({type:Number,attribute:"hover-close-delay"})],d.prototype,"hoverCloseDelay",void 0);a([l({type:Boolean,reflect:!0,attribute:"md-sub-menu"})],d.prototype,"isSubMenu",void 0);a([M({slot:"item",flatten:!0})],d.prototype,"items",void 0);a([M({slot:"menu",flatten:!0})],d.prototype,"menus",void 0);const H=T`:host{position:relative;display:flex;flex-direction:column}
`,$=class $ extends d{};$.styles=[H];let v=$;customElements.define("oscd-sub-menu",v);const{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,{action:g}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Menus / Sub Menu",tags:["autodocs"],decorators:[N],parameters:{layout:"centered",scopedElements:{"oscd-menu":x,"oscd-menu-item":L,"oscd-sub-menu":v,"oscd-icon":R,"oscd-filled-button":P}},argTypes:{open:{control:{type:"boolean"}}}},i=o=>g(`menu: ${o.type}`)(o),u=o=>g(`sub-menu: ${o.type}`)(o),C=o=>{const e=o.detail??{},n=e.initiator?.textContent?.trim()||"unknown";g("menu: selection (close-menu)")({selected:n,reason:e.reason})},c={args:{open:!1},render:o=>{const[e,t]=O();return E`
      <div style="position: relative;">
        <oscd-filled-button
          id="submenu-anchor"
          @click=${()=>t({open:!o.open})}
        >
          Open Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="submenu-anchor"
          has-overflow
          style="min-width: 16rem;"
          ?open=${o.open}
          @opening=${i}
          @opened=${i}
          @closing=${i}
          @closed=${n=>{i(n),t({open:!1})}}
          @deactivate-items=${u}
          @request-activation=${u}
          @deactivate-typeahead=${u}
          @activate-typeahead=${u}
          @close-menu=${C}
        >
          <oscd-menu-item>
            <div slot="headline">Option 1</div>
          </oscd-menu-item>
          <oscd-menu-item>
            <div slot="headline">Option 2</div>
          </oscd-menu-item>

          <oscd-sub-menu>
            <oscd-menu-item slot="item">
              <div slot="headline">More options</div>
              <oscd-icon slot="end">arrow_right</oscd-icon>
            </oscd-menu-item>
            <oscd-menu slot="menu" style="min-width: 16rem;">
              <oscd-menu-item>
                <div slot="headline">Sub option A</div>
              </oscd-menu-item>
              <oscd-menu-item>
                <div slot="headline">Sub option B</div>
              </oscd-menu-item>
            </oscd-menu>
          </oscd-sub-menu>
        </oscd-menu>
      </div>
    `}},m={args:{open:!1},render:o=>{const[e,t]=O();return E`
      <div style="position: relative;">
        <oscd-filled-button
          id="nested-submenu-anchor"
          @click=${()=>t({open:!o.open})}
        >
          Open Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="nested-submenu-anchor"
          has-overflow
          style="min-width: 16rem;"
          ?open=${o.open}
          @opening=${i}
          @opened=${i}
          @closing=${i}
          @closed=${n=>{i(n),t({open:!1})}}
          @deactivate-items=${u}
          @request-activation=${u}
          @deactivate-typeahead=${u}
          @activate-typeahead=${u}
          @close-menu=${C}
        >
          <oscd-menu-item>
            <div slot="headline">Option 1</div>
          </oscd-menu-item>

          <oscd-sub-menu>
            <oscd-menu-item slot="item">
              <div slot="headline">More options</div>
              <oscd-icon slot="end">arrow_right</oscd-icon>
            </oscd-menu-item>
            <oscd-menu slot="menu" has-overflow style="min-width: 16rem;">
              <oscd-menu-item>
                <div slot="headline">Sub option A</div>
              </oscd-menu-item>

              <oscd-sub-menu>
                <oscd-menu-item slot="item">
                  <div slot="headline">Even more options</div>
                  <oscd-icon slot="end">arrow_right</oscd-icon>
                </oscd-menu-item>
                <oscd-menu slot="menu" style="min-width: 16rem;">
                  <oscd-menu-item>
                    <div slot="headline">Deep option X</div>
                  </oscd-menu-item>
                  <oscd-menu-item>
                    <div slot="headline">Deep option Y</div>
                  </oscd-menu-item>
                </oscd-menu>
              </oscd-sub-menu>
            </oscd-menu>
          </oscd-sub-menu>
        </oscd-menu>
      </div>
    `}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: argz => {
    const [_, updateArgs] = useArgs();
    return html\`
      <div style="position: relative;">
        <oscd-filled-button
          id="submenu-anchor"
          @click=\${() => updateArgs({
      open: !argz['open']
    })}
        >
          Open Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="submenu-anchor"
          has-overflow
          style="min-width: 16rem;"
          ?open=\${argz['open']}
          @opening=\${onMenuEvent}
          @opened=\${onMenuEvent}
          @closing=\${onMenuEvent}
          @closed=\${(event: Event) => {
      onMenuEvent(event);
      updateArgs({
        open: false
      });
    }}
          @deactivate-items=\${onSubMenuEvent}
          @request-activation=\${onSubMenuEvent}
          @deactivate-typeahead=\${onSubMenuEvent}
          @activate-typeahead=\${onSubMenuEvent}
          @close-menu=\${onCloseMenu}
        >
          <oscd-menu-item>
            <div slot="headline">Option 1</div>
          </oscd-menu-item>
          <oscd-menu-item>
            <div slot="headline">Option 2</div>
          </oscd-menu-item>

          <oscd-sub-menu>
            <oscd-menu-item slot="item">
              <div slot="headline">More options</div>
              <oscd-icon slot="end">arrow_right</oscd-icon>
            </oscd-menu-item>
            <oscd-menu slot="menu" style="min-width: 16rem;">
              <oscd-menu-item>
                <div slot="headline">Sub option A</div>
              </oscd-menu-item>
              <oscd-menu-item>
                <div slot="headline">Sub option B</div>
              </oscd-menu-item>
            </oscd-menu>
          </oscd-sub-menu>
        </oscd-menu>
      </div>
    \`;
  }
}`,...c.parameters?.docs?.source},description:{story:'A menu containing a sub-menu. Open the menu, then hover (or focus and press\nthe right arrow key on) "More options" to reveal the nested sub-menu.\n\nThe containing `oscd-menu` sets `has-overflow` so the sub-menu can extend\nbeyond the parent menu\'s bounds. A `min-width` keeps the item labels on a\nsingle line. Menu and sub-menu events are logged to the Actions panel.',...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: argz => {
    const [_, updateArgs] = useArgs();
    return html\`
      <div style="position: relative;">
        <oscd-filled-button
          id="nested-submenu-anchor"
          @click=\${() => updateArgs({
      open: !argz['open']
    })}
        >
          Open Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="nested-submenu-anchor"
          has-overflow
          style="min-width: 16rem;"
          ?open=\${argz['open']}
          @opening=\${onMenuEvent}
          @opened=\${onMenuEvent}
          @closing=\${onMenuEvent}
          @closed=\${(event: Event) => {
      onMenuEvent(event);
      updateArgs({
        open: false
      });
    }}
          @deactivate-items=\${onSubMenuEvent}
          @request-activation=\${onSubMenuEvent}
          @deactivate-typeahead=\${onSubMenuEvent}
          @activate-typeahead=\${onSubMenuEvent}
          @close-menu=\${onCloseMenu}
        >
          <oscd-menu-item>
            <div slot="headline">Option 1</div>
          </oscd-menu-item>

          <oscd-sub-menu>
            <oscd-menu-item slot="item">
              <div slot="headline">More options</div>
              <oscd-icon slot="end">arrow_right</oscd-icon>
            </oscd-menu-item>
            <oscd-menu slot="menu" has-overflow style="min-width: 16rem;">
              <oscd-menu-item>
                <div slot="headline">Sub option A</div>
              </oscd-menu-item>

              <oscd-sub-menu>
                <oscd-menu-item slot="item">
                  <div slot="headline">Even more options</div>
                  <oscd-icon slot="end">arrow_right</oscd-icon>
                </oscd-menu-item>
                <oscd-menu slot="menu" style="min-width: 16rem;">
                  <oscd-menu-item>
                    <div slot="headline">Deep option X</div>
                  </oscd-menu-item>
                  <oscd-menu-item>
                    <div slot="headline">Deep option Y</div>
                  </oscd-menu-item>
                </oscd-menu>
              </oscd-sub-menu>
            </oscd-menu>
          </oscd-sub-menu>
        </oscd-menu>
      </div>
    \`;
  }
}`,...m.parameters?.docs?.source},description:{story:`Sub-menus can be nested arbitrarily deep. Hover "More options", then
"Even more options" to open a third level of nesting. Every level's events
are logged to the Actions panel.`,...m.parameters?.docs?.description}}};const ee=["Default","NestedSubMenus"];export{c as Default,m as NestedSubMenus,ee as __namedExportsOrder,Z as default};
