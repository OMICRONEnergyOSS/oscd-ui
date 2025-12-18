import type { StoryObj } from '@storybook/web-components-vite';
import { OscdTreeGrid } from './OscdTreeGrid.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import { sampleTree } from './sample-tree.js';

import './oscd-tree-grid.js';

const { args, argTypes, meta } = getStorybookMeta<OscdTreeGrid>({
  tagName: 'oscd-tree-grid',
});

export default {
  ...meta,
  title: 'Tree Grid / Tree Grid',
  tags: ['autodocs'],
};

const defaultArgs = {
  filter: args.filter ?? '',
  filterLabel: args.filterLabel ?? 'Filter items',
  ['.paths']: args.paths ?? [],
  ['.selection']: {},
  ['.tree']: sampleTree,
};

console.log('defaultArgs', defaultArgs);

export const Default: StoryObj = {
  argTypes,
  args: defaultArgs,
};
