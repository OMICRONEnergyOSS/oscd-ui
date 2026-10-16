import{i as e}from"./preload-helper-xPQekRTU.js";import{_ as t,f as n,o as r,r as i,t as a}from"./lit-CCeopZMg.js";import{_ as o,n as s,r as c,t as l}from"./lit-element-DJJrs8Rf.js";import{c as ee,i as te,l as ne,n as re,o as u,r as ie,s as d,t as ae}from"./delegate-Bci__vp_.js";import{m as oe,p as f,v as se,y as ce}from"./form-submitter-DjUx6yMM.js";import{t as p}from"./oscd-filled-button-CnvMf_VH.js";import{n as m,r as le,t as h}from"./getStorybookHelpers-BQfR0LFU.js";import{i as g,t as ue}from"./oscd-menu-item-5rhRAu0w.js";import{n as de,t as fe}from"./OscdList-DendSVyi.js";import{t as pe}from"./oscd-list-item-DHlyCCgK.js";import{g as me,v as _}from"./menu-item-styles-CvTFgOow.js";var v,he=e((()=>{a(),m(),g(),v={"oscd-branded-fab":{argTypes:{label:{name:`Label Text`,control:{type:`text`},description:`Label text shown next to the FAB`},variant:{options:[`surface`,`primary`,`secondary`,`tertiary`],control:{type:`select`}},icon:{name:`Icon Name`,control:{type:`text`},description:`Material Icon name`}},args:{label:`Branded Fab Button`,icon:`edit`,variant:`primary`},meta:{render:({label:e,icon:t,...r})=>{let{template:i}=h(`oscd-branded-fab`);return n`
          <style>
            label {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 16px;
            }
          </style>
          <label>
            <span aria-hidden="true">${e}</span>
            ${i(r,n`<oscd-icon slot="icon">${t}</oscd-icon>`)}
          </label>
        `}}},"oscd-fab":{argTypes:{label:{name:`Label Text`,control:{type:`text`},description:`Label text shown next to the FAB`},variant:{options:[`surface`,`primary`,`secondary`,`tertiary`],control:{type:`select`}},icon:{name:`Icon Name`,control:{type:`text`},description:`Material Icon name`}},args:{label:`Fab Button`,icon:`edit`,variant:`primary`},meta:{render:({label:e,icon:t,...r})=>{let{template:i}=h(`oscd-fab`);return n`
          <style>
            label {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 16px;
            }
          </style>
          <label>
            <span aria-hidden="true">${e}</span>
            ${i(r,n`<oscd-icon slot="icon">${t}</oscd-icon>`)}
          </label>
        `}}}}})),y,b,x=e((()=>{d(),a(),c(),ie(),ae(),y=re(i),b=class extends y{get rippleDisabled(){return this.disabled||this.softDisabled}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.alwaysFocusable=!1,this.label=``,this.hasIcon=!1,this.addEventListener(`click`,this.handleClick.bind(this))}focus(e){this.disabled&&!this.alwaysFocusable||super.focus(e)}render(){return n`
      <div class="container ${te(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `}updated(e){e.has(`disabled`)&&e.get(`disabled`)!==void 0&&this.dispatchEvent(new Event(`update-focus`,{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled||this.softDisabled,"has-icon":this.hasIcon}}renderContainerContent(){return n`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring" for=${this.primaryId}></md-focus-ring>
      <md-ripple
        for=${this.primaryId}
        ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `}renderOutline(){return n`<span class="outline"></span>`}renderLeadingIcon(){return n`<slot name="icon" @slotchange=${this.handleIconChange}></slot>`}renderPrimaryContent(){return n`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">
        <span class="label-text" id="label">
          ${this.label?this.label:n`<slot></slot>`}
        </span>
      </span>
      <span class="touch"></span>
    `}handleIconChange(e){let t=e.target;this.hasIcon=t.assignedElements({flatten:!0}).length>0}handleClick(e){if(this.softDisabled||this.disabled&&this.alwaysFocusable){e.stopImmediatePropagation(),e.preventDefault();return}}},b.shadowRootOptions={...i.shadowRootOptions,delegatesFocus:!0},u([o({type:Boolean,reflect:!0})],b.prototype,`disabled`,void 0),u([o({type:Boolean,attribute:`soft-disabled`,reflect:!0})],b.prototype,`softDisabled`,void 0),u([o({type:Boolean,attribute:`always-focusable`})],b.prototype,`alwaysFocusable`,void 0),u([o()],b.prototype,`label`,void 0),u([o({type:Boolean,reflect:!0,attribute:`has-icon`})],b.prototype,`hasIcon`,void 0)})),S,C=e((()=>{d(),a(),c(),x(),S=class extends b{constructor(){super(...arguments),this.elevated=!1,this.href=``,this.download=``,this.target=``}get primaryId(){return this.href?`link`:`button`}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}getContainerClasses(){return{...super.getContainerClasses(),disabled:!this.href&&(this.disabled||this.softDisabled),elevated:this.elevated,link:!!this.href}}renderPrimaryAction(e){let{ariaLabel:t}=this;return this.href?n`
        <a
          class="primary action"
          id="link"
          aria-label=${t||r}
          href=${this.href}
          download=${this.download||r}
          target=${this.target||r}
          >${e}</a
        >
      `:n`
      <button
        class="primary action"
        id="button"
        aria-label=${t||r}
        aria-disabled=${this.softDisabled||r}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
        >${e}</button
      >
    `}renderOutline(){return this.elevated?n`<md-elevation part="elevation"></md-elevation>`:super.renderOutline()}},u([o({type:Boolean})],S.prototype,`elevated`,void 0),u([o()],S.prototype,`href`,void 0),u([o()],S.prototype,`download`,void 0),u([o()],S.prototype,`target`,void 0)})),w,ge=e((()=>{a(),w=t`:host{--_container-height: var(--md-assist-chip-container-height, 32px);--_disabled-label-text-color: var(--md-assist-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-assist-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-assist-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-assist-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-assist-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-assist-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-assist-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-assist-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-assist-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-assist-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-assist-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-assist-chip-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-assist-chip-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-assist-chip-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-assist-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-assist-chip-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-assist-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-assist-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-assist-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-assist-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-assist-chip-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-assist-chip-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-assist-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-assist-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-assist-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-assist-chip-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_outline-color: var(--md-assist-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-assist-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-assist-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-assist-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-assist-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-assist-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-assist-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-assist-chip-icon-size, 18px);--_pressed-leading-icon-color: var(--md-assist-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-assist-chip-container-shape-start-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-assist-chip-container-shape-start-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-assist-chip-container-shape-end-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-assist-chip-container-shape-end-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-assist-chip-leading-space, 16px);--_trailing-space: var(--md-assist-chip-trailing-space, 16px);--_icon-label-space: var(--md-assist-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-assist-chip-with-leading-icon-leading-space, 8px)}@media(forced-colors: active){.link .outline{border-color:ActiveText}}
`})),T,E=e((()=>{a(),T=t`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`})),D,O=e((()=>{a(),D=t`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host(:is([disabled],[soft-disabled])){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{min-width:0;padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);font-weight:var(--_label-text-weight);height:100%;line-height:var(--_label-text-line-height);overflow:hidden;user-select:none}.label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled,[aria-disabled=true]){cursor:inherit}
`})),k,_e=e((()=>{oe(),ce(),C(),ge(),E(),O(),s(),k=class extends l(S){static{this.scopedElements={"md-ripple":f,"md-focus-ring":se}}static{this.styles=[D,T,w]}}})),A=e((()=>{_e(),customElements.define(`oscd-assist-chip`,k)})),j,ve=e((()=>{a(),m(),A(),j={"oscd-assist-chip":{args:{textContent:`Assist Chip`}},"oscd-chip-set":{meta:{render:e=>{let{template:t}=h(`oscd-chip-set`);return t(e,n` <oscd-chip-set aria-label="Assist chips">
            <oscd-assist-chip> 'Assist chip' </oscd-assist-chip>
            <oscd-assist-chip> 'Assist chip' </oscd-assist-chip>
            <oscd-assist-chip> 'Assist chip' </oscd-assist-chip>
          </oscd-chip-set>`)}}},"oscd-filter-chip":{args:{textContent:`Filter Chip`,selected:!0}},"oscd-input-chip":{args:{textContent:`Input Chip`,selected:!0}},"oscd-suggestion-chip":{args:{textContent:`Suggestion Chip`,selected:!0}}}})),M,ye=e((()=>{M={"oscd-elevated-button":{args:{textContent:`Click Me`}},"oscd-filled-button":{args:{textContent:`Click Me`}},"oscd-filled-tonal-button":{args:{textContent:`Click Me`}},"oscd-outlined-button":{args:{textContent:`Click Me`}},"oscd-text-button":{args:{textContent:`Click Me`}}}})),N,P=e((()=>{a(),m(),N={"oscd-checkbox":{args:{label:`Checkbox Label`,"aria-label":`I am a checkbox`},argTypes:{label:{name:`Label Text`,control:{type:`text`},description:`Checkbox label text`}},meta:{render:e=>{let{template:t}=h(`oscd-checkbox`);return n`<label>
          ${t(e,e.textContent?n` ${e.textContent} `:void 0)}
          ${e.label}
        </label>`}}}}})),F,be=e((()=>{a(),m(),F={"oscd-divider":{meta:{render:e=>{let{template:t}=h(`oscd-divider`);return n`<div
          style="width: 300px; background-color: var(--md-sys-color-surface);"
        >
          <p style="padding: 16px;">Content above the divider</p>
          ${t(e,e.textContent?n` ${e.textContent} `:void 0)}
          <p style="padding: 16px;">Content below the divider</p>
        </div>`}}}}})),I=e((()=>{de(),customElements.define(`oscd-list`,fe)})),L,xe=e((()=>{a(),m(),p(),I(),pe(),L={"oscd-elevation":{argTypes:{level:{name:`Elevation Level`,control:{type:`number`,min:0,max:5,step:1},description:`Elevation level (0-5)`}},args:{level:4},meta:{render:({level:e,...t})=>{let{template:r}=h(`oscd-elevation`);return n`
          <style>
            * {
              --md-elevation-level: ${e};
            }
          </style>
          <oscd-list>
            <oscd-list-item>Item 1</oscd-list-item>
            <oscd-list-item>Item 2</oscd-list-item>
            <oscd-list-item>Item 3</oscd-list-item>
            ${r(t)}
          </oscd-list>
        `}}}}})),R,z,B,Se=e((()=>{a(),p(),{useArgs:R}=__STORYBOOK_MODULE_PREVIEW_API__,{action:z}=__STORYBOOK_MODULE_ACTIONS__,B={"oscd-dialog":{meta:{render:e=>{let[t,r]=R();return n`
          <oscd-filled-button
            @click=${()=>{r({open:!0})}}
            >Open Dialog</oscd-filled-button
          >
          
            <oscd-dialog ?open=${e.open}
                @closed=${e=>{z(`dialog closed`)({event:e}),r({open:!1})}}>
              <div slot="headline">Confirm Action</div>
              <div slot="content">
                Are you sure you want to proceed with this operation? This action
                cannot be undone.
              </div>
              <div slot="actions">
                <oscd-filled-button @click=${()=>r({open:!1})}
                  >Cancel</oscd-filled-button
                >
                <oscd-filled-button @click=${()=>r({open:!1})}
                  >Confirm</oscd-filled-button
                >
              </div>
            </oscd-dialog>
          </div>
        `}}}}})),V,H,U,Ce=e((()=>{a(),m(),g(),V=n`<oscd-icon slot="start">search</oscd-icon>`,H=n`<oscd-icon slot="end">event</oscd-icon>`,U={"oscd-outlined-field":{args:{label:`Outlined Field`,placeholder:`Enter text`},meta:{render:e=>{let{template:t}=h(`oscd-outlined-field`),i=e.resizable?n`<textarea rows="1" ?disabled=${e.disabled}></textarea>`:n`<input ?disabled=${e.disabled} geebag />`;return t(e,n` ${e.hasStart?V:r} ${i}
          ${e.hasEnd?H:r}`)}}},"oscd-filled-field":{args:{label:`Filled Field`,placeholder:`Enter text`},meta:{render:e=>{let{template:t}=h(`oscd-filled-field`),i=e.resizable?n`<textarea rows="1" ?disabled=${e.disabled}></textarea>`:n`<input ?disabled=${e.disabled} />`;return t(e,n` ${e.hasStart?V:r} ${i}
          ${e.hasEnd?H:r}`)}}},"oscd-outlined-text-field":{args:{label:`Outlined Text Field`,placeholder:`Enter text`},argTypes:{type:{options:[`text`,`email`,`password`,`tel`,`url`],control:{type:`select`}}}}}})),W,G,we=e((()=>{a(),me(),g(),W=[`base03`,`base02`,`base01`,`base00`,`base0`,`base1`,`base2`,`base3`,`primary`,`secondary`,`error`,`warning`],G={"oscd-icon":{argTypes:{textContent:{name:`Icon name`,control:{type:`text`},description:`Material Symbols name or an SCL icon name such as gooseIcon`},"--md-icon-size":{control:{type:`number`,min:1,step:1},description:`Icon size in pixels, including automatically rendered SVGs`,table:{category:`CSS Variables`}},color:{name:`Foreground`,control:{type:`select`},options:[`inherit`,...W],description:`Palette slot used for the icon foreground, or inherit its text color`,table:{category:`Styles`}},background:{name:`Background`,control:{type:`select`},options:[`transparent`,...W],description:`Palette slot used for the icon preview background`,table:{category:`Styles`}}},args:{textContent:`edit`,"--md-icon-size":24,color:`primary`,background:`base3`},meta:{render:e=>n`
          <div
            style=${_({padding:`16px`,display:`inline-flex`,backgroundColor:W.includes(e.background)?`var(--oscd-theme-${e.background})`:`transparent`})}
          >
            <oscd-icon
              style=${_({"--md-icon-size":`${e[`--md-icon-size`]}px`,color:W.includes(e.color)?`var(--oscd-theme-${e.color})`:`inherit`})}
              >${e.textContent}</oscd-icon
            >
          </div>
        `}}}}));function K(e){return{argTypes:{textContent:{name:`Material Icon Name`,control:{type:`text`},description:`Name of the Material icon to display`}},args:{textContent:`settings`},meta:{render:t=>{let{template:r}=h(e);return r(t,t.textContent?n`<oscd-icon>${t.textContent}</oscd-icon>`:void 0)}}}}var q,Te=e((()=>{a(),m(),g(),q={"oscd-filled-icon-button":K(`oscd-filled-icon-button`),"oscd-filled-tonal-icon-button":K(`oscd-filled-tonal-icon-button`),"oscd-icon-button":K(`oscd-icon-button`),"oscd-outlined-icon-button":K(`oscd-outlined-icon-button`)}}));function J(e,t){return{args:{textContent:t},meta:{render:t=>{let{template:r}=h(e);return n`
          <style>
            ${e} {
              --md-elevation-level: 3;
              display: flex;
              align-items: center;
              justify-content: center;
              box-sizing: border-box;
              width: 300px;
              height: 200px;
            }
          </style>
          ${r(t,n`<h1>${t.textContent}</h1>`)}
        `}}}}var Y,Ee=e((()=>{a(),m(),g(),Y={"oscd-elevated-card":J(`oscd-elevated-card`,`Elevated Card`),"oscd-filled-card":J(`oscd-filled-card`,`Filled Card`),"oscd-outlined-card":J(`oscd-outlined-card`,`Outlined Card`)}})),X=e((()=>{ne(),customElements.define(`oscd-elevation`,ee)})),Z,De=e((()=>{a(),m(),X(),Z={"oscd-list":{meta:{render:e=>{let{template:t}=h(`oscd-list`);return n`
          <style>
            oscd-list {
              --md-elevation-level: 3;
            }
          </style>
          ${t(e,n` <oscd-elevation></oscd-elevation>
              <oscd-list-item>Item 1</oscd-list-item>
              <oscd-list-item>Item 2</oscd-list-item>
              <oscd-list-item>Item 3</oscd-list-item>`)}
        `}}},"oscd-list-item":{args:{textContent:`List Item`},meta:{render:({textContent:e,...t})=>{let{template:r}=h(`oscd-list-item`);return n`
          <style>
            oscd-list-item {
              --md-elevation-level: 3;
            }
          </style>

          ${r(t,n`${e}<oscd-elevation></oscd-elevation>`)}
        `}}}}})),Q,Oe=e((()=>{a(),m(),ue(),Q={"oscd-menu-item":{args:{textContent:`Menu Item`},meta:{render:({textContent:e,...t})=>{let{template:r}=h(`oscd-menu-item`);return n`
          <style>
            oscd-menu-item {
              --md-elevation-level: 3;
            }
          </style>

          ${r(t,n`${e}<oscd-elevation></oscd-elevation>`)}
        `}}},"oscd-sub-menu":{args:{textContent:`Sub Menu`},meta:{render:({textContent:e,...t})=>{let{template:r}=h(`oscd-sub-menu`);return n`
          ${r(t,n`<oscd-menu-item value="1">Option 1</oscd-menu-item>
              <oscd-menu-item value="2">Option 2</oscd-menu-item>`)}
        `}}}}})),$,ke=e((()=>{he(),ve(),ye(),P(),be(),xe(),Se(),Ce(),we(),Te(),Ee(),De(),Oe(),$={...M,...N,...j,...B,...F,...L,...v,...U,...G,...q,...Y,...Z,...Q}}));function Ae({tagName:e,defaultArgs:t={},options:r={}}){let{template:i,...a}=h(e),o=$[e]||{},s={...a.argTypes,...o?.argTypes??{}},c={...a.args,...t,...o?.args??{}},l={component:e,tags:[`autodocs`],decorators:[le],parameters:{layout:`centered`},argTypes:{...r.omitTextContent?{}:{textContent:{name:`Text Content`,control:{type:`text`},description:`Text content of Component`}},...s},render:e=>i(e,e.textContent?n` ${e.textContent} `:void 0),...o?.meta??{}};return{...a,args:c,argTypes:s,meta:l,template:i}}var je=e((()=>{a(),m(),ke()}));export{A as a,E as c,C as d,b as f,I as i,T as l,je as n,O as o,x as p,X as r,D as s,Ae as t,S as u};