import{i as e}from"./preload-helper-xPQekRTU.js";import{b as t,u as n}from"./static-html-JNahc6jH.js";import{n as r,t as i}from"./OscdIcon-CDSDekmX.js";import{_ as a,g as o}from"./menuItemController-CnzJ7A_q.js";import{n as s,t as c}from"./OscdMenu-BAWotDWy.js";import{n as l,t as u}from"./OscdListItem-D6qhYVhe.js";import{n as d,t as f}from"./OscdMenuItem-DUY0Kc2M.js";import{n as p,t as m}from"./scopedWcDecorator-t3sv2sog.js";import{n as h,t as g}from"./oscd-menu-item-GWUr0IbA.js";import{t as _}from"./oscd-filled-button-BmpnLsb3.js";import{t as v}from"./oscd-list-item-CNrZlDQM.js";import{t as y}from"./oscd-menu-CbsDMpa0.js";var b,x,S,C,w,T;e((()=>{n(),y(),g(),v(),h(),_(),s(),d(),l(),r(),a(),m(),{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,{action:x}=__STORYBOOK_MODULE_ACTIONS__,S={title:`Menus / Menu`,tags:[`autodocs`],decorators:[p],parameters:{layout:`centered`,scopedElements:{"oscd-menu":c,"oscd-menu-item":f,"oscd-list-item":u,"oscd-icon":i,"oscd-filled-button":o}},argTypes:{open:{control:{type:`boolean`}}}},C={args:{open:!1},render:e=>{let[n,r]=b();return t`
      <div style="position: relative;">
        <oscd-filled-button
          id="menu-button"
          @click=${()=>r({open:!e.open})}
        >
          Open Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="menu-button"
          ?open=${e.open}
          @closed=${()=>r({open:!1})}
        >
          <oscd-menu-item>Option 1</oscd-menu-item>
          <oscd-menu-item>Option 2</oscd-menu-item>
          <oscd-menu-item>Option 3</oscd-menu-item>
          <oscd-menu-item>Option 4</oscd-menu-item>
          <oscd-menu-item>Option 5</oscd-menu-item>
        </oscd-menu>
      </div>
    `}},w={args:{open:!1},render:e=>{let[n,r]=b();return t`
      <div style="position: relative;">
        <oscd-filled-button
          id="ctx-anchor-1"
          @click=${()=>r({open:!e.open})}
        >
          Open Context Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="ctx-anchor-1"
          ?open=${e.open}
          @closed=${()=>r({open:!1})}
        >
          <oscd-list-item type="text">
            <oscd-icon slot="start">developer_board</oscd-icon>
            <div slot="headline">Headline</div>
            <div slot="supporting-text">non-interactive Item</div>
          </oscd-list-item>

          <li divider role="separator"></li>

          <oscd-menu-item @click=${()=>x(`rotate`)(`clicked`)}>
            <oscd-icon slot="start">rotate_right</oscd-icon>
            <div slot="headline">Menu Item 1</div>
          </oscd-menu-item>

          <oscd-menu-item @click=${()=>x(`flip`)(`clicked`)}>
            <oscd-icon slot="start">flip</oscd-icon>
            <div slot="headline">Menu Item 2</div>
          </oscd-menu-item>

          <oscd-menu-item @click=${()=>x(`delete`)(`clicked`)}>
            <oscd-icon slot="start">delete</oscd-icon>
            <div slot="headline">Menu Item 3</div>
          </oscd-menu-item>
        </oscd-menu>
      </div>
    `}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: argz => {
    const [_, updateArgs] = useArgs();
    return html\`
      <div style="position: relative;">
        <oscd-filled-button
          id="menu-button"
          @click=\${() => updateArgs({
      open: !argz['open']
    })}
        >
          Open Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="menu-button"
          ?open=\${argz['open']}
          @closed=\${() => updateArgs({
      open: false
    })}
        >
          <oscd-menu-item>Option 1</oscd-menu-item>
          <oscd-menu-item>Option 2</oscd-menu-item>
          <oscd-menu-item>Option 3</oscd-menu-item>
          <oscd-menu-item>Option 4</oscd-menu-item>
          <oscd-menu-item>Option 5</oscd-menu-item>
        </oscd-menu>
      </div>
    \`;
  }
}`,...C.parameters?.docs?.source},description:{story:`Default menu with interactive items and a button anchor.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: argz => {
    const [_, updateArgs] = useArgs();
    return html\`
      <div style="position: relative;">
        <oscd-filled-button
          id="ctx-anchor-1"
          @click=\${() => updateArgs({
      open: !argz['open']
    })}
        >
          Open Context Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="ctx-anchor-1"
          ?open=\${argz['open']}
          @closed=\${() => updateArgs({
      open: false
    })}
        >
          <oscd-list-item type="text">
            <oscd-icon slot="start">developer_board</oscd-icon>
            <div slot="headline">Headline</div>
            <div slot="supporting-text">non-interactive Item</div>
          </oscd-list-item>

          <li divider role="separator"></li>

          <oscd-menu-item @click=\${() => action('rotate')('clicked')}>
            <oscd-icon slot="start">rotate_right</oscd-icon>
            <div slot="headline">Menu Item 1</div>
          </oscd-menu-item>

          <oscd-menu-item @click=\${() => action('flip')('clicked')}>
            <oscd-icon slot="start">flip</oscd-icon>
            <div slot="headline">Menu Item 2</div>
          </oscd-menu-item>

          <oscd-menu-item @click=\${() => action('delete')('clicked')}>
            <oscd-icon slot="start">delete</oscd-icon>
            <div slot="headline">Menu Item 3</div>
          </oscd-menu-item>
        </oscd-menu>
      </div>
    \`;
  }
}`,...w.parameters?.docs?.source},description:{story:`Menu consisting of oscd-list-items (non-interactive items which serve as group
headings) and standards oscd-menu-items.`,...w.parameters?.docs?.description}}},T=[`Default`,`MenuWithMixedItems`]}))();export{C as Default,w as MenuWithMixedItems,T as __namedExportsOrder,S as default};