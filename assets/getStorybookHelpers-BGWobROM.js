import{i as e}from"./preload-helper-xPQekRTU.js";import{b as t,h as n,u as r}from"./static-html-JNahc6jH.js";import{n as i,t as a}from"./iframe-CP2O_4_o.js";var o,s,c=e((()=>{i(),r(),o=(e,r)=>{let i=r.args||{},a=Object.entries(i).filter(([e])=>e.startsWith(`--`)).map(([e,t])=>`${e.replace(/-state$/,``)}: ${t};`).join(`
`),o=a.length?`* {\n${a}\n}`:void 0;return t`
    ${o?t`<style>
          ${o}
        </style>`:n}
    ${e()}
  `},s=(e,t)=>{let{argTypes:n,...r}=a(e,t),i=Object.entries(n).reduce((e,[t,n])=>(t.startsWith(`--`)?e[t]={...n,control:{type:t.includes(`color`)?`color`:`text`},table:{category:`CSS Variables`}}:e[t]=n,e),{});return{...r,argTypes:i}}}));export{c as n,o as r,s as t};