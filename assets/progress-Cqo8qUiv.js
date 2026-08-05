import{i as e}from"./preload-helper-xPQekRTU.js";import{b as t,f as n,h as r,u as i}from"./static-html-JNahc6jH.js";import{M as a,N as o,_ as s,f as c,h as l,j as u,m as d,p as f}from"./list-navigation-helpers-C1Ibc9kd.js";var p,m,h=e((()=>{o(),i(),s(),d(),c(),p=f(n),m=class extends p{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){let{ariaLabel:e}=this;return t`
      <div
        class="progress ${l(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${e||r}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?r:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}},a([u({type:Number})],m.prototype,`value`,void 0),a([u({type:Number})],m.prototype,`max`,void 0),a([u({type:Boolean})],m.prototype,`indeterminate`,void 0),a([u({type:Boolean,attribute:`four-color`})],m.prototype,`fourColor`,void 0)}));export{h as n,m as t};