import{O as l,S as r}from"./OscdSclIcon-Dh3DQJDP.js";import{g as a}from"./getStorybookMeta-gRT3a4zT.js";import{x as c}from"./iframe-CKVEE6em.js";import"./list-item-styles-B2yz3MDx.js";import"./OscdListItem-BLWoK8yo.js";import"./getStorybookHelpers-B0ocG6Hc.js";import"./OscdMenuItem-CyNju_5X.js";import"./query-assigned-nodes-ClyEUDSF.js";import"./preload-helper-PPVm8Dsz.js";customElements.define("oscd-scl-icon",l);const{args:i,argTypes:d,meta:p}=a({tagName:"oscd-scl-icon"}),f={...p,title:"Icons / SCL Icon",tags:["autodocs"]},e={argTypes:{textContent:{options:Object.keys(r),control:{type:"select"},description:"SCL Icon to be displayed."},...d},args:{...i,textContent:i.textContent??"elementIcon"},render:({textContent:n,...s})=>c`<div>
      <style>
        .standard {
          --md-icon-size: 24px;
        }
        .large {
          --md-icon-size: 48px;
        }
        .larger {
          --md-icon-size: 64px;
        }
        .silly {
          --md-icon-size: 128px;
        }
      </style>
      <oscd-scl-icon class="standard" ...=${s}>${n}</oscd-scl-icon>
      <oscd-scl-icon class="large" ...=${s}>${n}</oscd-scl-icon>
      <oscd-scl-icon class="larger" ...=${s}>${n}</oscd-scl-icon>
      <oscd-scl-icon class="silly" ...=${s}>${n}</oscd-scl-icon>
    </div> `},o={argTypes:{size:{options:[16,24,32,48,64,128],control:{type:"number"},description:"Size of the icon."}},args:{size:24},render:({size:n,...s})=>c`<div>
      <style>
        * {
          --md-icon-size: ${n}px;
        }
      </style>
      ${Object.keys(r).map(t=>c`<div
            style="display: inline-block; text-align: center; margin: 16px;"
          >
            <oscd-scl-icon ...=${s}>${t}</oscd-scl-icon>
            <div style="margin-top: 8px; font-size: 14px;">${t}</div>
          </div>`)}
    </div> `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  argTypes: {
    textContent: {
      options: Object.keys(SCL_ICONS),
      control: {
        type: 'select'
      },
      description: 'SCL Icon to be displayed.'
    },
    ...argTypes
  },
  args: {
    ...args,
    textContent: args.textContent ?? 'elementIcon'
  },
  render: ({
    textContent,
    ...argz
  }: typeof args) => html\`<div>
      <style>
        .standard {
          --md-icon-size: 24px;
        }
        .large {
          --md-icon-size: 48px;
        }
        .larger {
          --md-icon-size: 64px;
        }
        .silly {
          --md-icon-size: 128px;
        }
      </style>
      <oscd-scl-icon class="standard" ...=\${argz}>\${textContent}</oscd-scl-icon>
      <oscd-scl-icon class="large" ...=\${argz}>\${textContent}</oscd-scl-icon>
      <oscd-scl-icon class="larger" ...=\${argz}>\${textContent}</oscd-scl-icon>
      <oscd-scl-icon class="silly" ...=\${argz}>\${textContent}</oscd-scl-icon>
    </div> \`
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  argTypes: {
    size: {
      options: [16, 24, 32, 48, 64, 128],
      control: {
        type: 'number'
      },
      description: 'Size of the icon.'
    }
  },
  args: {
    size: 24
  },
  render: ({
    size,
    ...argz
  }: typeof args) => html\`<div>
      <style>
        * {
          --md-icon-size: \${size}px;
        }
      </style>
      \${Object.keys(SCL_ICONS).map(iconName => html\`<div
            style="display: inline-block; text-align: center; margin: 16px;"
          >
            <oscd-scl-icon ...=\${argz}>\${iconName}</oscd-scl-icon>
            <div style="margin-top: 8px; font-size: 14px;">\${iconName}</div>
          </div>\`)}
    </div> \`
}`,...o.parameters?.docs?.source}}};const u=["Default","AllIcons"];export{o as AllIcons,e as Default,u as __namedExportsOrder,f as default};
