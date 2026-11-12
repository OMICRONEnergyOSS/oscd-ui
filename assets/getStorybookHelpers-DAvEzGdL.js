import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,t as r}from"./lit-LihecQ0E.js";import{a as i,i as a}from"./iframe-B-5YUH0c.js";var o,s;function c(){return(c=e((()=>{i(),r(),o=(e,r)=>{let i=r.args||{},a=Object.entries(i).filter(([e])=>e.startsWith(`--`)).map(([e,t])=>`${e.replace(/-state$/,``)}: ${t};`).join(`
`),o=a.length?`* {\n${a}\n}`:void 0;return n`
    ${o?n`<style>
            ${o}
          </style>`:t}
    ${e()}
  `},s=(e,t)=>{let{argTypes:n,...r}=a(e,t),i=Object.entries(n).reduce((e,[t,n])=>(e[t]=t.startsWith(`--`)?{...n,control:{type:t.includes(`color`)?`color`:`text`},table:{category:`CSS Variables`}}:n,e),{});return{...r,argTypes:i}}})))()}export{c as n,o as r,s as t};