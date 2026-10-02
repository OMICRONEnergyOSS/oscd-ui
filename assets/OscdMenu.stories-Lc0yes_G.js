import{i as e}from"./preload-helper-xPQekRTU.js";import{f as t,t as n}from"./lit-CCeopZMg.js";import{n as r,t as i}from"./scopedWcDecorator-ZJ7pyk8g.js";import{n as a,t as o}from"./OscdFilledButton-CepduTng.js";import{t as s}from"./oscd-filled-button-D1F1Vmn7.js";import{o as c,s as l}from"./OscdItem-B_us6arR.js";import{i as u,n as d,r as f,t as p}from"./oscd-menu-item-BPNzwGkQ.js";import{n as m,t as h}from"./OscdListItem-B9cIMDtY.js";import{t as g}from"./oscd-list-item-nCP4uEgK.js";import{n as _,t as v}from"./OscdMenu-Atjsrnmq.js";import{t as y}from"./oscd-menu-CQ48G9mS.js";var b,x,S,C,w,T;e((()=>{n(),y(),p(),g(),u(),s(),_(),f(),m(),l(),a(),i(),{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,{action:x}=__STORYBOOK_MODULE_ACTIONS__,S={title:`Menus / Menu`,tags:[`autodocs`],decorators:[r],parameters:{layout:`centered`,scopedElements:{"oscd-menu":v,"oscd-menu-item":d,"oscd-list-item":h,"oscd-icon":c,"oscd-filled-button":o}},argTypes:{open:{control:{type:`boolean`}}}},C={args:{open:!1},render:e=>{let[n,r]=b();return t`
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