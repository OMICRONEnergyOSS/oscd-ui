import{i as e}from"./preload-helper-xPQekRTU.js";import{f as t,o as n,t as r}from"./lit-CCeopZMg.js";import{i,r as a}from"./iframe-DWRzknye.js";var o,s,c=e((()=>{i(),r(),o=(e,r)=>{let i=r.args||{},a=Object.entries(i).filter(([e])=>e.startsWith(`--`)).map(([e,t])=>`${e.replace(/-state$/,``)}: ${t};`).join(`
`),o=a.length?`* {\n${a}\n}`:void 0;return t`
    ${o?t`<style>
            ${o}
          </style>`:n}
    ${e()}
  `},s=(e,t)=>{let{argTypes:n,...r}=a(e,t),i=Object.entries(n).reduce((e,[t,n])=>(t.startsWith(`--`)?e[t]={...n,control:{type:t.includes(`color`)?`color`:`text`},table:{category:`CSS Variables`}}:e[t]=n,e),{});return{...r,argTypes:i}}}));export{c as n,o as r,s as t};