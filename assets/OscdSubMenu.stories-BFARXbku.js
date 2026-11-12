import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,g as n,n as r,t as i}from"./lit-LihecQ0E.js";import{_ as a,r as o,s}from"./lit-element-CwUNoIyU.js";import{n as c,t as l}from"./scopedWcDecorator-GXEKina3.js";import{o as u,s as d}from"./delegate-DVmVP7ly.js";import{n as f,t as p}from"./OscdFilledButton-BflHIJH9.js";import{t as m}from"./oscd-filled-button-ChRui5Hz.js";import{o as h,s as g}from"./OscdItem-C8-Le0Md.js";import{i as _,n as v,r as y,t as b}from"./oscd-menu-item-CPuax-lS.js";import{a as x,l as S,o as C,s as w}from"./list-navigation-helpers-CBLHHWMy.js";import{a as T,c as E,d as D,f as O,l as k,s as A,u as j}from"./menu-item-styles-fqaQg6AQ.js";import{n as M,o as N,r as P,t as F}from"./OscdMenu-DFoJHE0y.js";import{t as I}from"./oscd-menu-CLmcRlKN.js";var L;function R(){return(R=e((()=>{d(),i(),o(),O(),P(),L=class extends r{get item(){return this.items[0]??null}get menu(){return this.menus[0]??null}constructor(){super(),this.anchorCorner=N.START_END,this.menuCorner=N.START_START,this.hoverOpenDelay=400,this.hoverCloseDelay=400,this.isSubMenu=!0,this.previousOpenTimeout=0,this.previousCloseTimeout=0,this.onMouseenter=()=>{clearTimeout(this.previousOpenTimeout),clearTimeout(this.previousCloseTimeout),!this.menu?.open&&(this.hoverOpenDelay?this.previousOpenTimeout=setTimeout(()=>{this.show()},this.hoverOpenDelay):this.show())},this.onMouseleave=()=>{clearTimeout(this.previousCloseTimeout),clearTimeout(this.previousOpenTimeout),this.hoverCloseDelay?this.previousCloseTimeout=setTimeout(()=>{this.close()},this.hoverCloseDelay):this.close()},this.addEventListener(`mouseenter`,this.onMouseenter),this.addEventListener(`mouseleave`,this.onMouseleave)}render(){return t`
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
    `}firstUpdated(){this.onSlotchange()}async show(){let e=this.menu;if(!e||e.open)return;e.addEventListener(`closed`,()=>{this.item.ariaExpanded=`false`,this.dispatchEvent(j()),this.dispatchEvent(x()),e.ariaHidden=`true`},{once:!0}),e.positioning===`document`&&(e.positioning=`absolute`),e.quick=!0,e.hasOverflow=!0,e.anchorCorner=this.anchorCorner,e.menuCorner=this.menuCorner,e.anchorElement=this.item,e.defaultFocus=`first-item`,e.removeAttribute(`aria-hidden`),e.skipRestoreFocus=!1;let t=e.open;if(e.show(),this.item.ariaExpanded=`true`,this.item.ariaHasPopup=`menu`,e.id&&this.item.setAttribute(`aria-controls`,e.id),this.dispatchEvent(x()),this.dispatchEvent(D()),this.item.selected=!0,!t){let t=e=>{},n=new Promise(e=>{t=e});e.addEventListener(`opened`,t,{once:!0}),await n}}async close(){let e=this.menu;if(!e||!e.open)return;this.dispatchEvent(j()),e.quick=!0,e.close(),this.dispatchEvent(x());let t=e=>{},n=new Promise(e=>{t=e});e.addEventListener(`closed`,t,{once:!0}),await n}onSlotchange(){if(!this.item)return;this.item.ariaExpanded=`false`,this.item.ariaHasPopup=`menu`,this.menu?.id&&this.item.setAttribute(`aria-controls`,this.menu.id),this.item.keepOpen=!0;let e=this.menu;e&&(e.isSubmenu=!0,e.ariaHidden=`true`)}onClick(){this.show()}async onKeydown(e){let t=this.isSubmenuOpenKey(e.code);if(e.defaultPrevented)return;let n=t&&(E.LEFT===e.code||E.RIGHT===e.code);if((e.code===k.SPACE||n)&&(e.preventDefault(),n&&e.stopPropagation()),!t)return;let r=this.menu;if(!r)return;let i=r.items,a=S(i);a&&(await this.show(),a.tabIndex=0,a.focus())}onCloseSubmenu(e){let{itemPath:t,reason:n}=e.detail;t.push(this.item),this.dispatchEvent(j()),n.kind===T.KEYDOWN&&n.key===A.ESCAPE?(e.stopPropagation(),this.item.dispatchEvent(C())):this.dispatchEvent(x())}async onSubMenuKeydown(e){if(e.defaultPrevented)return;let{close:t,keyCode:n}=this.isSubmenuCloseKey(e.code);t&&(e.preventDefault(),(n===E.LEFT||n===E.RIGHT)&&e.stopPropagation(),await this.close(),w(this.menu.items),this.item?.focus(),this.item.tabIndex=0,this.item.focus())}isSubmenuOpenKey(e){let t=getComputedStyle(this).direction===`rtl`?E.LEFT:E.RIGHT;switch(e){case t:case k.SPACE:case k.ENTER:return!0;default:return!1}}isSubmenuCloseKey(e){let t=getComputedStyle(this).direction===`rtl`?E.RIGHT:E.LEFT;switch(e){case t:case A.ESCAPE:return{close:!0,keyCode:e};default:return{close:!1}}}},u([a({attribute:`anchor-corner`})],L.prototype,`anchorCorner`,void 0),u([a({attribute:`menu-corner`})],L.prototype,`menuCorner`,void 0),u([a({type:Number,attribute:`hover-open-delay`})],L.prototype,`hoverOpenDelay`,void 0),u([a({type:Number,attribute:`hover-close-delay`})],L.prototype,`hoverCloseDelay`,void 0),u([a({type:Boolean,reflect:!0,attribute:`md-sub-menu`})],L.prototype,`isSubMenu`,void 0),u([s({slot:`item`,flatten:!0})],L.prototype,`items`,void 0),u([s({slot:`menu`,flatten:!0})],L.prototype,`menus`,void 0)})))()}var z;function B(){return(B=e((()=>{i(),z=n`:host{position:relative;display:flex;flex-direction:column}
`})))()}var V;function H(){return(H=e((()=>{R(),B(),V=class extends L{static{this.styles=[z]}}})))()}function U(){return(U=e((()=>{H(),customElements.define(`oscd-sub-menu`,V)})))()}var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{i(),I(),b(),U(),_(),m(),M(),y(),H(),g(),f(),l(),{useArgs:W}=__STORYBOOK_MODULE_PREVIEW_API__,{action:G}=__STORYBOOK_MODULE_ACTIONS__,K={title:`Menus / Sub Menu`,tags:[`autodocs`],decorators:[c],parameters:{layout:`centered`,scopedElements:{"oscd-menu":F,"oscd-menu-item":v,"oscd-sub-menu":V,"oscd-icon":h,"oscd-filled-button":p}},argTypes:{open:{control:{type:`boolean`}}}},q=e=>G(`menu: ${e.type}`)(e),J=e=>G(`sub-menu: ${e.type}`)(e),Y=e=>{let t=e.detail??{},n=t.initiator?.textContent?.trim()||`unknown`;G(`menu: selection (close-menu)`)({selected:n,reason:t.reason})},X={args:{open:!1},render:e=>{let[n,r]=W();return t`
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
          @opening=${q}
          @opened=${q}
          @closing=${q}
          @closed=${e=>{q(e),r({open:!1})}}
          @deactivate-items=${J}
          @request-activation=${J}
          @deactivate-typeahead=${J}
          @activate-typeahead=${J}
          @close-menu=${Y}
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
    `}},Z={args:{open:!1},render:e=>{let[n,r]=W();return t`
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
          @opening=${q}
          @opened=${q}
          @closing=${q}
          @closed=${e=>{q(e),r({open:!1})}}
          @deactivate-items=${J}
          @request-activation=${J}
          @deactivate-typeahead=${J}
          @activate-typeahead=${J}
          @close-menu=${Y}
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
    `}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`A menu containing a sub-menu. Open the menu, then hover (or focus and press
the right arrow key on) "More options" to reveal the nested sub-menu.

The containing \`oscd-menu\` sets \`has-overflow\` so the sub-menu can extend
beyond the parent menu's bounds. A \`min-width\` keeps the item labels on a
single line. Menu and sub-menu events are logged to the Actions panel.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Sub-menus can be nested arbitrarily deep. Hover "More options", then
"Even more options" to open a third level of nesting. Every level's events
are logged to the Actions panel.`,...Z.parameters?.docs?.description}}},Q=[`Default`,`NestedSubMenus`]})))()}$();export{X as Default,Z as NestedSubMenus,Q as __namedExportsOrder,K as default};