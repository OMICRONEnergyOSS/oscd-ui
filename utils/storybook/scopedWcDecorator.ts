import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { property } from 'lit/decorators.js';
import { LitElement, html } from 'lit';
import { DecoratorFunction } from 'storybook/internal/types';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';

const documentQuerySelectorFn = document.querySelector;

export const scopedWcDecorator: DecoratorFunction = (storyFn, context) => {
  const { scopedElements } = context.parameters;
  const storyArgs = context.args || {};

  // Generate a unique tag name to avoid redefinition errors
  const tagName = `dynamic-wrapper-${context.id}`;

  // workaround to allow wc-toolkit/storybook-helpers (template) find the component
  // it believes to be directly accessible from the document (which we're wrapping).
  document.querySelector = (selector: string) => {
    if (selector === context.component) {
      const wrapper = documentQuerySelectorFn.call(document, tagName);
      return wrapper ? wrapper.shadowRoot?.querySelector(selector) : null;
    }
    return documentQuerySelectorFn.call(document, selector);
  };

  if (!customElements.get(tagName)) {
    class DynamicWrapper extends ScopedElementsMixin(LitElement) {
      static get scopedElements() {
        return scopedElements || {};
      }

      @property({ type: Object })
      declare storyArgs: Record<string, unknown>;

      // eslint-disable-next-line class-methods-use-this
      override render() {
        return html`${storyFn()}`;
      }
    }

    customElements.define(tagName, DynamicWrapper);
  }

  return staticHtml`<${unsafeStatic(tagName)} .storyArgs=${storyArgs}></${unsafeStatic(tagName)}>`;
};
