import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,d as n,n as r,t as i}from"./lit-LihecQ0E.js";import{_ as a,r as o}from"./lit-element-CwUNoIyU.js";import{i as s,n as c,o as l,r as u,s as d,t as f}from"./delegate-l-TUd_7w.js";var p,m;function h(){return(h=e((()=>{d(),i(),o(),u(),f(),p=c(r),m=class extends p{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){let{ariaLabel:e}=this;return n`
      <div
        class="progress ${s(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${e||t}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate?t:this.value}
        >${this.renderIndicator()}</div
      >
    `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}},l([a({type:Number})],m.prototype,`value`,void 0),l([a({type:Number})],m.prototype,`max`,void 0),l([a({type:Boolean})],m.prototype,`indeterminate`,void 0),l([a({type:Boolean,attribute:`four-color`})],m.prototype,`fourColor`,void 0)})))()}export{h as n,m as t};