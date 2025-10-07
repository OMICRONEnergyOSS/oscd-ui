import type { Meta } from '@storybook/web-components-vite';
import { html } from 'lit';

import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from './getStorybookHelpers.js';

import { withActions } from 'storybook/actions/decorator';
import { storybookOverrides } from './story-overrides/story-overrides.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getStorybookMeta<T extends { [key: string]: any }>({
  tagName,
}: {
  tagName: string;
}) {
  const { template, events, ...rest } = getStorybookHelpers<T>(tagName);
  const overrides = storybookOverrides[tagName] || {};

  const argTypes = {
    ...rest.argTypes,
    ...(overrides?.argTypes ?? {}),
  };

  const args = {
    ...rest.args,
    ...(overrides?.args ?? {}),
  };

  const meta: Meta<T & { textContent: string }> = {
    component: tagName,
    tags: ['autodocs'],

    decorators: [storybookHelperDecorator, withActions],
    parameters: {
      layout: 'centered',
      actions: {
        handles: events,
      },
    },
    argTypes: {
      textContent: {
        name: 'Text Content',
        control: { type: 'text' },
        description: 'Text content of Component',
      },
      ...argTypes,
    } as Meta<T>['argTypes'],
    args,

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
    meta,
    template, // Expose template for custom stories
  };
}

// Example usage:
// const { args, argTypes, meta } = getStorybookMeta<YourComponentType>( 'your-component-tag' );
