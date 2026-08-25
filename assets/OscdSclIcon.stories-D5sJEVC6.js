import{i as e}from"./preload-helper-xPQekRTU.js";import{b as t,u as n}from"./static-html-JNahc6jH.js";import{a as r,i,r as a}from"./OscdIcon-BLAkUGod.js";import{n as o,t as s}from"./getStorybookMeta-DZ7hG-Av.js";var c=e((()=>{r(),customElements.define(`oscd-scl-icon`,a)})),l,u,d,f,p,m,h;e((()=>{c(),r(),o(),n(),{args:l,argTypes:u,meta:d}=s({tagName:`oscd-scl-icon`}),f={...d,title:`Icons / SCL Icon`,tags:[`autodocs`]},p={argTypes:{textContent:{options:Object.keys(i),control:{type:`select`},description:`SCL Icon to be displayed.`},...u},args:{...l,textContent:l.textContent??`elementIcon`},render:({textContent:e,...n})=>t`<div>
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
      <oscd-scl-icon class="standard" ...=${n}>${e}</oscd-scl-icon>
      <oscd-scl-icon class="large" ...=${n}>${e}</oscd-scl-icon>
      <oscd-scl-icon class="larger" ...=${n}>${e}</oscd-scl-icon>
      <oscd-scl-icon class="silly" ...=${n}>${e}</oscd-scl-icon>
    </div> `},m={argTypes:{size:{options:[16,24,32,48,64,128],control:{type:`number`},description:`Size of the icon.`}},args:{size:24},render:({size:e,...n})=>t`<div>
      <style>
        * {
          --md-icon-size: ${e}px;
        }
      </style>
      ${Object.keys(i).map(e=>t`<div
            style="display: inline-block; text-align: center; margin: 16px;"
          >
            <oscd-scl-icon ...=${n}>${e}</oscd-scl-icon>
            <div style="margin-top: 8px; font-size: 14px;">${e}</div>
          </div>`)}
    </div> `},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`AllIcons`]}))();export{m as AllIcons,p as Default,h as __namedExportsOrder,f as default};