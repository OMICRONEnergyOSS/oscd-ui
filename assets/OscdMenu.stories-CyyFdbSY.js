import{x as i}from"./iframe-CzfB892c.js";import"./oscd-menu-DzdBsvh4.js";import"./oscd-menu-item-Bv29e9fa.js";import"./oscd-list-item-C0ScTv6k.js";import"./oscd-filled-button-DQw484Ye.js";import{O as r}from"./OscdMenu-D1YB7X1r.js";import{O as m}from"./OscdMenuItem-DA-1vXHl.js";import{O as a}from"./OscdListItem-aUMQlSYk.js";import{O as l}from"./OscdIcon-D6gSxZ3c.js";import{O as u}from"./menuItemController-B_J_C6eD.js";import{s as p}from"./scopedWcDecorator-Dniazn4N.js";import"./preload-helper-PPVm8Dsz.js";import"./list-navigation-helpers-CWtHtHq2.js";import"./style-map-e5XHfPGA.js";import"./query-assigned-nodes-CLgeST5H.js";import"./list-item-styles-Bz0C6iu4.js";const{useArgs:c}=__STORYBOOK_MODULE_PREVIEW_API__,{action:s}=__STORYBOOK_MODULE_ACTIONS__,S={title:"Menus / Menu",tags:["autodocs"],decorators:[p],parameters:{layout:"centered",scopedElements:{"oscd-menu":r,"oscd-menu-item":m,"oscd-list-item":a,"oscd-icon":l,"oscd-filled-button":u}},argTypes:{open:{control:{type:"boolean"}}}},t={args:{open:!1},render:e=>{const[d,o]=c();return i`
      <div style="position: relative;">
        <oscd-filled-button
          id="menu-button"
          @click=${()=>o({open:!e.open})}
        >
          Open Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="menu-button"
          ?open=${e.open}
          @closed=${()=>o({open:!1})}
        >
          <oscd-menu-item>Option 1</oscd-menu-item>
          <oscd-menu-item>Option 2</oscd-menu-item>
          <oscd-menu-item>Option 3</oscd-menu-item>
          <oscd-menu-item>Option 4</oscd-menu-item>
          <oscd-menu-item>Option 5</oscd-menu-item>
        </oscd-menu>
      </div>
    `}},n={args:{open:!1},render:e=>{const[d,o]=c();return i`
      <div style="position: relative;">
        <oscd-filled-button
          id="ctx-anchor-1"
          @click=${()=>o({open:!e.open})}
        >
          Open Context Menu
        </oscd-filled-button>
        <oscd-menu
          anchor="ctx-anchor-1"
          ?open=${e.open}
          @closed=${()=>o({open:!1})}
        >
          <oscd-list-item type="text">
            <oscd-icon slot="start">developer_board</oscd-icon>
            <div slot="headline">Headline</div>
            <div slot="supporting-text">non-interactive Item</div>
          </oscd-list-item>

          <li divider role="separator"></li>

          <oscd-menu-item @click=${()=>s("rotate")("clicked")}>
            <oscd-icon slot="start">rotate_right</oscd-icon>
            <div slot="headline">Menu Item 1</div>
          </oscd-menu-item>

          <oscd-menu-item @click=${()=>s("flip")("clicked")}>
            <oscd-icon slot="start">flip</oscd-icon>
            <div slot="headline">Menu Item 2</div>
          </oscd-menu-item>

          <oscd-menu-item @click=${()=>s("delete")("clicked")}>
            <oscd-icon slot="start">delete</oscd-icon>
            <div slot="headline">Menu Item 3</div>
          </oscd-menu-item>
        </oscd-menu>
      </div>
    `}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:"Default menu with interactive items and a button anchor.",...t.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:`Menu consisting of oscd-list-items (non-interactive items which serve as group
headings) and standards oscd-menu-items.`,...n.parameters?.docs?.description}}};const z=["Default","MenuWithMixedItems"];export{t as Default,n as MenuWithMixedItems,z as __namedExportsOrder,S as default};
