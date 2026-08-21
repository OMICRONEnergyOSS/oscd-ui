import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,b as n,f as r,u as i}from"./static-html-JNahc6jH.js";import{M as a,N as o,_ as s,a as c,d as l,j as u,l as d,o as f,s as p,x as m}from"./list-navigation-helpers-C1Ibc9kd.js";import{n as h,t as g}from"./OscdIcon-BLAkUGod.js";import{_,a as v,c as y,d as b,f as x,g as S,l as C,s as w,u as T}from"./menuItemController-CDb7NKZG.js";import{i as E,n as D,r as O,t as k}from"./OscdMenu-BO_BDSo4.js";import{n as A,t as j}from"./OscdMenuItem-DTI4Ppy7.js";import{n as M,t as N}from"./scopedWcDecorator-t3sv2sog.js";import{n as P,t as F}from"./oscd-menu-item-CTcQZDW2.js";import{t as I}from"./oscd-filled-button-DrRjABpc.js";import{t as L}from"./oscd-menu-ROB9YGPp.js";var R,z=e((()=>{o(),i(),s(),l(),x(),O(),R=class extends r{get item(){return this.items[0]??null}get menu(){return this.menus[0]??null}constructor(){super(),this.anchorCorner=E.START_END,this.menuCorner=E.START_START,this.hoverOpenDelay=400,this.hoverCloseDelay=400,this.isSubMenu=!0,this.previousOpenTimeout=0,this.previousCloseTimeout=0,this.onMouseenter=()=>{clearTimeout(this.previousOpenTimeout),clearTimeout(this.previousCloseTimeout),!this.menu?.open&&(this.hoverOpenDelay?this.previousOpenTimeout=setTimeout(()=>{this.show()},this.hoverOpenDelay):this.show())},this.onMouseleave=()=>{clearTimeout(this.previousCloseTimeout),clearTimeout(this.previousOpenTimeout),this.hoverCloseDelay?this.previousCloseTimeout=setTimeout(()=>{this.close()},this.hoverCloseDelay):this.close()},this.addEventListener(`mouseenter`,this.onMouseenter),this.addEventListener(`mouseleave`,this.onMouseleave)}render(){return n`
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
    `}firstUpdated(){this.onSlotchange()}async show(){let e=this.menu;if(!e||e.open)return;e.addEventListener(`closed`,()=>{this.item.ariaExpanded=`false`,this.dispatchEvent(T()),this.dispatchEvent(c()),e.ariaHidden=`true`},{once:!0}),e.positioning===`document`&&(e.positioning=`absolute`),e.quick=!0,e.hasOverflow=!0,e.anchorCorner=this.anchorCorner,e.menuCorner=this.menuCorner,e.anchorElement=this.item,e.defaultFocus=`first-item`,e.removeAttribute(`aria-hidden`),e.skipRestoreFocus=!1;let t=e.open;if(e.show(),this.item.ariaExpanded=`true`,this.item.ariaHasPopup=`menu`,e.id&&this.item.setAttribute(`aria-controls`,e.id),this.dispatchEvent(c()),this.dispatchEvent(b()),this.item.selected=!0,!t){let t=e=>{},n=new Promise(e=>{t=e});e.addEventListener(`opened`,t,{once:!0}),await n}}async close(){let e=this.menu;if(!e||!e.open)return;this.dispatchEvent(T()),e.quick=!0,e.close(),this.dispatchEvent(c());let t=e=>{},n=new Promise(e=>{t=e});e.addEventListener(`closed`,t,{once:!0}),await n}onSlotchange(){if(!this.item)return;this.item.ariaExpanded=`false`,this.item.ariaHasPopup=`menu`,this.menu?.id&&this.item.setAttribute(`aria-controls`,this.menu.id),this.item.keepOpen=!0;let e=this.menu;e&&(e.isSubmenu=!0,e.ariaHidden=`true`)}onClick(){this.show()}async onKeydown(e){let t=this.isSubmenuOpenKey(e.code);if(e.defaultPrevented)return;let n=t&&(y.LEFT===e.code||y.RIGHT===e.code);if((e.code===C.SPACE||n)&&(e.preventDefault(),n&&e.stopPropagation()),!t)return;let r=this.menu;if(!r)return;let i=r.items,a=d(i);if(a){await this.show(),a.tabIndex=0,a.focus();return}}onCloseSubmenu(e){let{itemPath:t,reason:n}=e.detail;if(t.push(this.item),this.dispatchEvent(T()),n.kind===v.KEYDOWN&&n.key===w.ESCAPE){e.stopPropagation(),this.item.dispatchEvent(f());return}this.dispatchEvent(c())}async onSubMenuKeydown(e){if(e.defaultPrevented)return;let{close:t,keyCode:n}=this.isSubmenuCloseKey(e.code);t&&(e.preventDefault(),(n===y.LEFT||n===y.RIGHT)&&e.stopPropagation(),await this.close(),p(this.menu.items),this.item?.focus(),this.item.tabIndex=0,this.item.focus())}isSubmenuOpenKey(e){let t=getComputedStyle(this).direction===`rtl`?y.LEFT:y.RIGHT;switch(e){case t:case C.SPACE:case C.ENTER:return!0;default:return!1}}isSubmenuCloseKey(e){let t=getComputedStyle(this).direction===`rtl`?y.RIGHT:y.LEFT;switch(e){case t:case w.ESCAPE:return{close:!0,keyCode:e};default:return{close:!1}}}},a([u({attribute:`anchor-corner`})],R.prototype,`anchorCorner`,void 0),a([u({attribute:`menu-corner`})],R.prototype,`menuCorner`,void 0),a([u({type:Number,attribute:`hover-open-delay`})],R.prototype,`hoverOpenDelay`,void 0),a([u({type:Number,attribute:`hover-close-delay`})],R.prototype,`hoverCloseDelay`,void 0),a([u({type:Boolean,reflect:!0,attribute:`md-sub-menu`})],R.prototype,`isSubMenu`,void 0),a([m({slot:`item`,flatten:!0})],R.prototype,`items`,void 0),a([m({slot:`menu`,flatten:!0})],R.prototype,`menus`,void 0)})),B,V=e((()=>{i(),B=t`:host{position:relative;display:flex;flex-direction:column}
`})),H,U=e((()=>{z(),V(),H=class extends R{static{this.styles=[B]}}})),W=e((()=>{U(),customElements.define(`oscd-sub-menu`,H)})),G,K,q,J,Y,X,Z,Q,$;e((()=>{i(),L(),F(),W(),P(),I(),D(),A(),U(),h(),_(),N(),{useArgs:G}=__STORYBOOK_MODULE_PREVIEW_API__,{action:K}=__STORYBOOK_MODULE_ACTIONS__,q={title:`Menus / Sub Menu`,tags:[`autodocs`],decorators:[M],parameters:{layout:`centered`,scopedElements:{"oscd-menu":k,"oscd-menu-item":j,"oscd-sub-menu":H,"oscd-icon":g,"oscd-filled-button":S}},argTypes:{open:{control:{type:`boolean`}}}},J=e=>K(`menu: ${e.type}`)(e),Y=e=>K(`sub-menu: ${e.type}`)(e),X=e=>{let t=e.detail??{},n=t.initiator?.textContent?.trim()||`unknown`;K(`menu: selection (close-menu)`)({selected:n,reason:t.reason})},Z={args:{open:!1},render:e=>{let[t,r]=G();return n`
      <div style="position: relative;">
        <oscd-filled-button
          id="submenu-anchor"
          @click=${()=>r({open:!e.open})}
        >
          Open Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="submenu-anchor"
          has-overflow
          style="min-width: 16rem;"
          ?open=${e.open}
          @opening=${J}
          @opened=${J}
          @closing=${J}
          @closed=${e=>{J(e),r({open:!1})}}
          @deactivate-items=${Y}
          @request-activation=${Y}
          @deactivate-typeahead=${Y}
          @activate-typeahead=${Y}
          @close-menu=${X}
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
    `}},Q={args:{open:!1},render:e=>{let[t,r]=G();return n`
      <div style="position: relative;">
        <oscd-filled-button
          id="nested-submenu-anchor"
          @click=${()=>r({open:!e.open})}
        >
          Open Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="nested-submenu-anchor"
          has-overflow
          style="min-width: 16rem;"
          ?open=${e.open}
          @opening=${J}
          @opened=${J}
          @closing=${J}
          @closed=${e=>{J(e),r({open:!1})}}
          @deactivate-items=${Y}
          @request-activation=${Y}
          @deactivate-typeahead=${Y}
          @activate-typeahead=${Y}
          @close-menu=${X}
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
    `}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`A menu containing a sub-menu. Open the menu, then hover (or focus and press
the right arrow key on) "More options" to reveal the nested sub-menu.

The containing \`oscd-menu\` sets \`has-overflow\` so the sub-menu can extend
beyond the parent menu's bounds. A \`min-width\` keeps the item labels on a
single line. Menu and sub-menu events are logged to the Actions panel.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Sub-menus can be nested arbitrarily deep. Hover "More options", then
"Even more options" to open a third level of nesting. Every level's events
are logged to the Actions panel.`,...Q.parameters?.docs?.description}}},$=[`Default`,`NestedSubMenus`]}))();export{Z as Default,Q as NestedSubMenus,$ as __namedExportsOrder,q as default};