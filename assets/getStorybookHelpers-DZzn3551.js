import{g as i,E as b,x as c}from"./iframe-BA_UwkOg.js";const $=(o,n)=>{const l=n.args||{},s=Object.entries(l).filter(([t])=>t.startsWith("--")).map(([t,e])=>`${t.replace(/-state$/,"")}: ${e};`).join(`
`),r=s.length?`* {
${s}
}`:void 0;return c`
    ${r?c`<style>
          ${r}
        </style>`:b}
    ${o()}
  `},g=(o,n)=>{const{argTypes:l,...s}=i(o,n),r=Object.entries(l).reduce((t,[e,a])=>(e.startsWith("--")?t[e]={...a,control:{type:e.includes("color")?"color":"text"},table:{category:"CSS Variables"}}:t[e]=a,t),{});return{...s,argTypes:r}};export{g,$ as s};
