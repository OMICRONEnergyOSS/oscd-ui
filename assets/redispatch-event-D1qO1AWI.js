function p(t,o){o.bubbles&&(!t.shadowRoot||o.composed)&&o.stopPropagation();const s=Reflect.construct(o.constructor,[o.type,o]),c=t.dispatchEvent(s);return c||o.preventDefault(),c}export{p as r};
