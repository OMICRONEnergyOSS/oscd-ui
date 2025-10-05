import type {
  Meta,
  WebComponentsRenderer,
} from '@storybook/web-components-vite';
import { html } from 'lit';
import { DecoratorFunction } from 'storybook/internal/types';
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from 'utils/storybook/getStorybookHelpers.js';

type GetStorybookMetaOptions = {
  title: string;
  tag: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getStorybookMeta<T extends { [key: string]: any }>({
  title,
  tag,
}: GetStorybookMetaOptions) {
  const { args, argTypes, template, events } = getStorybookHelpers<T>(tag);

  const meta: Meta<T> = {
    title,
    component: 'oscd-menu-item',
    tags: ['autodocs'],
    decorators: [
      storybookHelperDecorator as DecoratorFunction<WebComponentsRenderer, T>,
    ],
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
// const { args, argTypes, meta } = getStorybookMeta<YourComponentType>({
//   title: 'Your/Component/Title',
//   tag: 'your-component-tag',
// });
