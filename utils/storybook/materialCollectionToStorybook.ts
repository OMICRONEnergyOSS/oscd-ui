import { html } from 'lit';
import type { MaterialStoryInit } from './stories/material-collection.js';
import type { StoryObj } from '@storybook/web-components-vite';
/**
 * Converts an array of MaterialStoryInit stories into Storybook CSF exports.
 * Usage:
 *   export default { ... }
 *   export const { Story1, Story2 } = materialCollectionToStorybook(stories, { ...defaultArgs });
 */
export function materialCollectionToStorybook<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends { [name: string]: any },
>(
  stories: MaterialStoryInit<T>[],
  defaultArgs: Partial<T> = {},
): Record<string, StoryObj> {
  const exports: Record<string, StoryObj> = {};

  stories.forEach(materialStory => {
    const name = materialStory.name.replace(/\s+/g, '');
    const StoryWrapper: StoryObj = {
      render: args => {
        const result = materialStory.render(args as T);
        if (result instanceof Promise) {
          throw new Error(
            'materialStory.render must return a synchronous TemplateResult',
          );
        }
        if (materialStory.styles) {
          return html`
            <style>
              ${materialStory.styles}
            </style>
            ${result}
          `;
        }
        return result;
      },
      args: { ...defaultArgs },
    };
    if (materialStory.styles) {
      StoryWrapper.parameters = {
        styles: materialStory.styles,
      };
    }

    exports[name] = StoryWrapper as StoryObj;
  });

  return exports;
}
