import type { Meta } from '@storybook/web-components-vite';
import { html } from 'lit';
// // import { DecoratorFunction } from 'storybook/internal/types';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from './getStorybookHelpers.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getStorybookMeta<T extends { [key: string]: any }>({
  tagName,
}: {
  tagName: string;
}) {
  const { args, argTypes, template, events } = getStorybookHelpers<T>(tagName);

  const meta: Meta<T> = {
    component: tagName,
    tags: ['autodocs'],

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    decorators: [storybookHelperDecorator as any],
    parameters: {
      layout: 'centered',
      actions: {
        handles: ['click', ...events],
      },
    },
    argTypes: argTypes as Meta<T>['argTypes'],
    render: argz => html` ${template(argz)} `,
  };
  return { args, argTypes, meta };
}

// Example usage:
// const { args, argTypes, meta } = getStorybookMeta<YourComponentType>( 'your-component-tag' );
