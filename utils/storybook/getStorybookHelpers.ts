import { getStorybookHelpers as wcToolkitGetStorybookHelpers } from '@wc-toolkit/storybook-helpers';
import type { StoryOptions, StoryHelpers } from '@wc-toolkit/storybook-helpers';

import { html } from 'lit';
import { DecoratorFunction } from 'storybook/internal/types';

/*
 * This is a Decorator/Helper utility for enriching Storybook stories with CSS variable support.
 * It allows you to define CSS variables in JSDocs, which are then included in the custom-element-manifest.json
 * which is then used to extract the CSS variables and make them available in Storybook.
 */

/*
 * The decorator injects a style block into the story that sets these CSS variables based on the args provided in the story.
 */
export const storybookHelperDecorator: DecoratorFunction = (
  storyFn,
  context,
) => {
  const args = context.args || {};

  const variableDeclarations = Object.entries(args)
    .filter(([key]) => key.startsWith('--'))
    .map(([key, value]) => `${key.replace(/-state$/, '')}: ${value};`)
    .join('\n');
  const styles = `* {\n${variableDeclarations}\n}`;
  return html`
    <style>
      ${styles}
    </style>
    ${storyFn()}
  `;
};

/*
 * The "getStorybookHelpers" is a thin wrapper around the wcToolkit's getStorybookHelpers function,
 * which adds support for CSS variables in the argTypes.
 * It modifies the argTypes to include controls for CSS variables, allowing users to change them in the Storybook UI.
 */
export const getStorybookHelpers = <T>(
  tagName: string,
  options?: StoryOptions,
): StoryHelpers<T> => {
  const { argTypes, ...rest } = wcToolkitGetStorybookHelpers<T>(
    tagName,
    options,
  );

  const updatedArgTypes = Object.entries(argTypes).reduce(
    (
      acc: Record<string, (typeof argTypes)[keyof typeof argTypes]>,
      [argTypeKey, argTypeValue],
    ) => {
      if (argTypeKey.startsWith('--')) {
        acc[argTypeKey] = {
          ...argTypeValue,
          control: { type: argTypeKey.includes('color') ? 'color' : 'text' },
          table: {
            category: 'CSS Variables',
          },
        };
      } else {
        acc[argTypeKey] = argTypeValue;
      }
      return acc;
    },
    {} as Record<string, (typeof argTypes)[keyof typeof argTypes]>,
  );
  return {
    ...rest,
    argTypes: updatedArgTypes,
  } as StoryHelpers<T>;
};
