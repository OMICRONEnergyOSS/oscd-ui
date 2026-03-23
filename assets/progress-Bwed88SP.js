import{m as s,_ as e,n as r,b as i}from"./list-item-styles-DN_WYpBH.js";import{i as n,E as a,x as l}from"./iframe-BA_UwkOg.js";const m=s(n);class t extends m{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:o}=this;return l`
      <div
        class="progress ${i(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${o||a}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?a:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}e([r({type:Number})],t.prototype,"value",void 0);e([r({type:Number})],t.prototype,"max",void 0);e([r({type:Boolean})],t.prototype,"indeterminate",void 0);e([r({type:Boolean,attribute:"four-color"})],t.prototype,"fourColor",void 0);export{t as P};
