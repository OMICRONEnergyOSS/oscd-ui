import type { Meta } from '@storybook/web-components-vite';
import { html } from 'lit';

import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from './getStorybookHelpers.js';

import { storybookOverrides } from './story-overrides/story-overrides.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getStorybookMeta<T extends { [key: string]: any }>({
  tagName,
  defaultArgs = {},
  options = {},
}: {
  tagName: string;
  defaultArgs?: Partial<T>;
  options?: { omitTextContent?: boolean };
}) {
  const { template, events, ...rest } = getStorybookHelpers<T>(tagName);
  const overrides = storybookOverrides[tagName] || {};

  const argTypes = {
    ...rest.argTypes,
    ...(overrides?.argTypes ?? {}),
  };

  const args = {
    ...rest.args,
    ...defaultArgs,
    ...(overrides?.args ?? {}),
  };

  const meta: Meta<T & { textContent: string }> = {
    component: tagName,
    tags: ['autodocs'],

    decorators: [storybookHelperDecorator],
    parameters: {
      layout: 'centered',
    },
    argTypes: {
      ...(!options.omitTextContent
        ? {
            textContent: {
              name: 'Text Content',
              control: { type: 'text' },
              description: 'Text content of Component',
            },
          }
        : {}),
      ...argTypes,
    } as Meta<T>['argTypes'],

    render: argz =>
      template(
        argz,
        argz.textContent ? html` ${argz.textContent} ` : undefined,
      ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...((overrides?.meta ?? {}) as any),
  };
  return {
    args,
    argTypes,
    /*
     * Widened deliberately. Stories spread `...meta` into an untyped default
     * export, so a generic `Meta<T>` inlines `Partial<T>` into the inferred
     * type. T is the element class, which carries symbol-keyed members from the
     * material-web mixins (internals, createValidator, getFormState, ...). Those
     * unique symbols are not nameable from a story file, so declaration emit
     * fails with TS4082. Remove this cast once args are typed as the component's
     * public props rather than the element class itself.
     */
    meta: meta as Meta,
    template, // Expose template for custom stories
  };
}

// Example usage:
// const { args, argTypes, meta } = getStorybookMeta<YourComponentType>( 'your-component-tag' );
