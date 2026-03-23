import{x as o,i as C,E as n,a as y}from"./iframe-BEvFn4o0.js";import{g as a,s as O}from"./getStorybookHelpers-Do6kyNNH.js";import{b as I,c as E,d as T,a as k,O as M}from"./OscdListItem-qie-E2MX.js";import{m as A,_ as r,n as l,b as D,S as F,O as B}from"./list-item-styles-BdUABIkZ.js";import{a as L,O as S}from"./OscdMenuItem-BTDFb1kz.js";customElements.define("oscd-icon",I);const R={"oscd-branded-fab":{argTypes:{label:{name:"Label Text",control:{type:"text"},description:"Label text shown next to the FAB"},variant:{options:["surface","primary","secondary","tertiary"],control:{type:"select"}},icon:{name:"Icon Name",control:{type:"text"},description:"Material Icon name"}},args:{label:"Branded Fab Button",icon:"edit",variant:"primary"},meta:{render:({label:e,icon:t,...s})=>{const{template:i}=a("oscd-branded-fab");return o`
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
            ${i(s,o`<oscd-icon slot="icon">${t}</oscd-icon>`)}
          </label>
        `}}},"oscd-fab":{argTypes:{label:{name:"Label Text",control:{type:"text"},description:"Label text shown next to the FAB"},variant:{options:["surface","primary","secondary","tertiary"],control:{type:"select"}},icon:{name:"Icon Name",control:{type:"text"},description:"Material Icon name"}},args:{label:"Fab Button",icon:"edit",variant:"primary"},meta:{render:({label:e,icon:t,...s})=>{const{template:i}=a("oscd-fab");return o`
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
            ${i(s,o`<oscd-icon slot="icon">${t}</oscd-icon>`)}
          </label>
        `}}}};const N=A(C);class d extends N{get rippleDisabled(){return this.disabled||this.softDisabled}constructor(){super(),this.disabled=!1,this.softDisabled=!1,this.alwaysFocusable=!1,this.label="",this.hasIcon=!1,this.addEventListener("click",this.handleClick.bind(this))}focus(t){this.disabled&&!this.alwaysFocusable||super.focus(t)}render(){return o`
      <div class="container ${D(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `}updated(t){t.has("disabled")&&t.get("disabled")!==void 0&&this.dispatchEvent(new Event("update-focus",{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled||this.softDisabled,"has-icon":this.hasIcon}}renderContainerContent(){return o`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring" for=${this.primaryId}></md-focus-ring>
      <md-ripple
        for=${this.primaryId}
        ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `}renderOutline(){return o`<span class="outline"></span>`}renderLeadingIcon(){return o`<slot name="icon" @slotchange=${this.handleIconChange}></slot>`}renderPrimaryContent(){return o`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">
        <span class="label-text" id="label">
          ${this.label?this.label:o`<slot></slot>`}
        </span>
      </span>
      <span class="touch"></span>
    `}handleIconChange(t){const s=t.target;this.hasIcon=s.assignedElements({flatten:!0}).length>0}handleClick(t){if(this.softDisabled||this.disabled&&this.alwaysFocusable){t.stopImmediatePropagation(),t.preventDefault();return}}}d.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0};r([l({type:Boolean,reflect:!0})],d.prototype,"disabled",void 0);r([l({type:Boolean,attribute:"soft-disabled",reflect:!0})],d.prototype,"softDisabled",void 0);r([l({type:Boolean,attribute:"always-focusable"})],d.prototype,"alwaysFocusable",void 0);r([l()],d.prototype,"label",void 0);r([l({type:Boolean,reflect:!0,attribute:"has-icon"})],d.prototype,"hasIcon",void 0);class c extends d{constructor(){super(...arguments),this.elevated=!1,this.href="",this.download="",this.target=""}get primaryId(){return this.href?"link":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}getContainerClasses(){return{...super.getContainerClasses(),disabled:!this.href&&(this.disabled||this.softDisabled),elevated:this.elevated,link:!!this.href}}renderPrimaryAction(t){const{ariaLabel:s}=this;return this.href?o`
        <a
          class="primary action"
          id="link"
          aria-label=${s||n}
          href=${this.href}
          download=${this.download||n}
          target=${this.target||n}
          >${t}</a
        >
      `:o`
      <button
        class="primary action"
        id="button"
        aria-label=${s||n}
        aria-disabled=${this.softDisabled||n}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
        >${t}</button
      >
    `}renderOutline(){return this.elevated?o`<md-elevation part="elevation"></md-elevation>`:super.renderOutline()}}r([l({type:Boolean})],c.prototype,"elevated",void 0);r([l()],c.prototype,"href",void 0);r([l()],c.prototype,"download",void 0);r([l()],c.prototype,"target",void 0);const P=y`:host{--_container-height: var(--md-assist-chip-container-height, 32px);--_disabled-label-text-color: var(--md-assist-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-assist-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-assist-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-assist-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-assist-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-assist-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-assist-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-assist-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-assist-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-assist-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-assist-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-assist-chip-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-assist-chip-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-assist-chip-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-assist-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-assist-chip-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-assist-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-assist-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-assist-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-assist-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-assist-chip-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-assist-chip-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-assist-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-assist-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-assist-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-assist-chip-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_outline-color: var(--md-assist-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-assist-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-assist-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-assist-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-assist-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-assist-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-assist-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-assist-chip-icon-size, 18px);--_pressed-leading-icon-color: var(--md-assist-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-assist-chip-container-shape-start-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-assist-chip-container-shape-start-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-assist-chip-container-shape-end-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-assist-chip-container-shape-end-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-assist-chip-leading-space, 16px);--_trailing-space: var(--md-assist-chip-trailing-space, 16px);--_icon-label-space: var(--md-assist-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-assist-chip-with-leading-icon-leading-space, 8px)}@media(forced-colors: active){.link .outline{border-color:ActiveText}}
`;const Y=y`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`;const K=y`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host(:is([disabled],[soft-disabled])){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{min-width:0;padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);font-weight:var(--_label-text-weight);height:100%;line-height:var(--_label-text-line-height);overflow:hidden;user-select:none}.label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled,[aria-disabled=true]){cursor:inherit}
`,v=class v extends F(c){};v.scopedElements={"md-ripple":T,"md-focus-ring":E},v.styles=[K,Y,P];let b=v;customElements.define("oscd-assist-chip",b);const U={"oscd-assist-chip":{args:{textContent:"Assist Chip"}},"oscd-chip-set":{meta:{render:e=>{const{template:t}=a("oscd-chip-set");return t(e,o` <oscd-chip-set aria-label="Assist chips">
            <oscd-assist-chip> 'Assist chip' </oscd-assist-chip>
            <oscd-assist-chip> 'Assist chip' </oscd-assist-chip>
            <oscd-assist-chip> 'Assist chip' </oscd-assist-chip>
          </oscd-chip-set>`)}}},"oscd-filter-chip":{args:{textContent:"Filter Chip",selected:!0}},"oscd-input-chip":{args:{textContent:"Input Chip",selected:!0}},"oscd-suggestion-chip":{args:{textContent:"Suggestion Chip",selected:!0}}},z={"oscd-elevated-button":{args:{textContent:"Click Me"}},"oscd-filled-button":{args:{textContent:"Click Me"}},"oscd-filled-tonal-button":{args:{textContent:"Click Me"}},"oscd-outlined-button":{args:{textContent:"Click Me"}},"oscd-text-button":{args:{textContent:"Click Me"}}},G={"oscd-checkbox":{args:{label:"Checkbox Label","aria-label":"I am a checkbox"},argTypes:{label:{name:"Label Text",control:{type:"text"},description:"Checkbox label text"}},meta:{render:e=>{const{template:t}=a("oscd-checkbox");return o`<label>
          ${t(e,e.textContent?o` ${e.textContent} `:void 0)}
          ${e.label}
        </label>`}}}},H={"oscd-divider":{meta:{render:e=>{const{template:t}=a("oscd-divider");return o`<div
          style="width: 300px; background-color: var(--oscd-base3);"
        >
          <p style="padding: 16px;">Content above the divider</p>
          ${t(e,e.textContent?o` ${e.textContent} `:void 0)}
          <p style="padding: 16px;">Content below the divider</p>
        </div>`}}}};customElements.define("oscd-filled-button",L);customElements.define("oscd-list",k);customElements.define("oscd-list-item",M);const V={"oscd-elevation":{argTypes:{level:{name:"Elevation Level",control:{type:"number",min:0,max:5,step:1},description:"Elevation level (0-5)"}},args:{level:4},meta:{render:({level:e,...t})=>{const{template:s}=a("oscd-elevation");return o`
          <style>
            * {
              --md-elevation-level: ${e};
            }
          </style>
          <oscd-list>
            <oscd-list-item>Item 1</oscd-list-item>
            <oscd-list-item>Item 2</oscd-list-item>
            <oscd-list-item>Item 3</oscd-list-item>
            ${s(t)}
          </oscd-list>
        `}}}},{useArgs:W}=__STORYBOOK_MODULE_PREVIEW_API__,{action:j}=__STORYBOOK_MODULE_ACTIONS__,q={"oscd-dialog":{meta:{render:e=>{const[t,s]=W();return o`
          <oscd-filled-button
            @click=${()=>{s({open:!0})}}
            >Open Dialog</oscd-filled-button
          >
          
            <oscd-dialog ?open=${e.open}
                @closed=${i=>{j("dialog closed")({event:i}),s({open:!1})}}>
              <div slot="headline">Confirm Action</div>
              <div slot="content">
                Are you sure you want to proceed with this operation? This action
                cannot be undone.
              </div>
              <div slot="actions">
                <oscd-filled-button @click=${()=>s({open:!1})}
                  >Cancel</oscd-filled-button
                >
                <oscd-filled-button @click=${()=>s({open:!1})}
                  >Confirm</oscd-filled-button
                >
              </div>
            </oscd-dialog>
          </div>
        `}}}},x=o`<oscd-icon slot="start">search</oscd-icon>`,_=o`<oscd-icon slot="end">event</oscd-icon>`,J={"oscd-outlined-field":{args:{label:"Outlined Field",placeholder:"Enter text"},meta:{render:e=>{const{template:t}=a("oscd-outlined-field"),s=e.resizable?o`<textarea rows="1" ?disabled=${e.disabled}></textarea>`:o`<input ?disabled=${e.disabled} geebag />`;return t(e,o` ${e.hasStart?x:n} ${s}
          ${e.hasEnd?_:n}`)}}},"oscd-filled-field":{args:{label:"Filled Field",placeholder:"Enter text"},meta:{render:e=>{const{template:t}=a("oscd-filled-field"),s=e.resizable?o`<textarea rows="1" ?disabled=${e.disabled}></textarea>`:o`<input ?disabled=${e.disabled} />`;return t(e,o` ${e.hasStart?x:n} ${s}
          ${e.hasEnd?_:n}`)}}},"oscd-outlined-text-field":{args:{label:"Outlined Text Field",placeholder:"Enter text"},argTypes:{type:{options:["text","email","password","tel","url"],control:{type:"select"}}}}},Q={"oscd-icon":{argTypes:{textContent:{name:"Material Icon Name",control:{type:"text"},description:"Name of the Material icon to display"}},args:{textContent:"edit"},meta:{render:e=>{const{template:t}=a("oscd-icon");return t(e,e.textContent?o` ${e.textContent} `:void 0)}}}};function p(e){return{argTypes:{textContent:{name:"Material Icon Name",control:{type:"text"},description:"Name of the Material icon to display"}},args:{textContent:"settings"},meta:{render:t=>{const{template:s}=a(e);return s(t,t.textContent?o`<oscd-icon>${t.textContent}</oscd-icon>`:void 0)}}}}const X={"oscd-filled-icon-button":p("oscd-filled-icon-button"),"oscd-filled-tonal-icon-button":p("oscd-filled-tonal-icon-button"),"oscd-icon-button":p("oscd-icon-button"),"oscd-outlined-icon-button":p("oscd-outlined-icon-button")};function u(e,t){return{args:{textContent:t},meta:{render:s=>{const{template:i}=a(e);return o`
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
          ${i(s,o`<h1>${s.textContent}</h1>`)}
        `}}}}const Z={"oscd-elevated-card":u("oscd-elevated-card","Elevated Card"),"oscd-filled-card":u("oscd-filled-card","Filled Card"),"oscd-outlined-card":u("oscd-outlined-card","Outlined Card")};customElements.define("oscd-elevation",B);const ee={"oscd-list":{meta:{render:e=>{const{template:t}=a("oscd-list");return o`
          <style>
            oscd-list {
              --md-elevation-level: 3;
            }
          </style>
          ${t(e,o` <oscd-elevation></oscd-elevation>
              <oscd-list-item>Item 1</oscd-list-item>
              <oscd-list-item>Item 2</oscd-list-item>
              <oscd-list-item>Item 3</oscd-list-item>`)}
        `}}},"oscd-list-item":{args:{textContent:"List Item"},meta:{render:({textContent:e,...t})=>{const{template:s}=a("oscd-list-item");return o`
          <style>
            oscd-list-item {
              --md-elevation-level: 3;
            }
          </style>

          ${s(t,o`${e}<oscd-elevation></oscd-elevation>`)}
        `}}}};customElements.define("oscd-menu-item",S);const{useArgs:te}=__STORYBOOK_MODULE_PREVIEW_API__,oe={"oscd-menu":{args:{anchor:"menu-button","anchor-corner":void 0,"menu-corner":void 0,open:!1},meta:{render:e=>{const[t,s]=te(),{template:i}=a("oscd-menu");return o`
          <div style="position: relative;">
            ${i({...e,"[@closed]":()=>{e.open=!1}},o`<oscd-menu-item value="1">Option 1</oscd-menu-item>
                <oscd-menu-item value="2">Option 2</oscd-menu-item>
                <oscd-menu-item value="2">Option 3</oscd-menu-item>
                <oscd-menu-item value="2">Option 4</oscd-menu-item>
                <oscd-menu-item value="2">Option 5</oscd-menu-item>`)}
            <oscd-filled-button
              id="menu-button"
              @click=${()=>s({open:!e.open})}
              >Open Menu</oscd-filled-button
            >
          </div>
        `}}},"oscd-menu-item":{args:{textContent:"Menu Item"},meta:{render:({textContent:e,...t})=>{const{template:s}=a("oscd-menu-item");return o`
          <style>
            oscd-menu-item {
              --md-elevation-level: 3;
            }
          </style>

          ${s(t,o`${e}<oscd-elevation></oscd-elevation>`)}
        `}}},"oscd-sub-menu":{args:{textContent:"Sub Menu"},meta:{render:({textContent:e,...t})=>{const{template:s}=a("oscd-sub-menu");return o`
          ${s(t,o`<oscd-menu-item value="1">Option 1</oscd-menu-item>
              <oscd-menu-item value="2">Option 2</oscd-menu-item>`)}
        `}}}},se={...z,...G,...U,...q,...H,...V,...R,...J,...Q,...X,...Z,...ee,...oe};function ce({tagName:e,defaultArgs:t={},options:s={}}){const{template:i,events:ae,...f}=a(e),h=se[e]||{},g={...f.argTypes,...h?.argTypes??{}},$={...f.args,...t,...h?.args??{}},w={component:e,tags:["autodocs"],decorators:[O],parameters:{layout:"centered"},argTypes:{...s.omitTextContent?{}:{textContent:{name:"Text Content",control:{type:"text"},description:"Text content of Component"}},...g},render:m=>i(m,m.textContent?o` ${m.textContent} `:void 0),...h?.meta??{}};return{args:$,argTypes:g,meta:w,template:i}}export{c as A,d as C,Y as a,ce as g,K as s};
