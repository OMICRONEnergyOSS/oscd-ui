/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-action-tree.js';
import { OscdActionTree } from './OscdActionTree.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const sampleData = {
  name: 'IED1',
  children: [
    {
      name: 'LD1',
      children: [
        {
          name: 'LLN0',
          children: [
            {
              name: 'Beh',
              leaf: [
                { val: 0 },
                {
                  edit: () => {
                    window.alert('SomeAlert');
                  },
                  val: 1,
                },
                { val: 4 },
              ],
            },
          ],
        },
        {
          name: 'MMXU1',
          info: 'This is a logical node for measurement',
          children: [
            {
              name: 'A',
              children: [
                {
                  name: 'phsA',
                  leaf: [
                    { val: 33.44 },
                    { val: 55.4483482345 },
                    { val: 66.44 },
                  ],
                },
                {
                  name: 'phsB',
                  leaf: [{ val: 22.44 }, { val: 66.44 }, { val: 77.44 }],
                },
                {
                  name: 'phsC',
                  leaf: [{ val: 11.44 }, { val: 33.44 }, { val: 55.44 }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'LD2',
      children: [
        {
          name: 'LLN0',
          children: [
            {
              name: 'Beh',
              leaf: [{ val: 0 }],
            },
          ],
        },
        {
          name: 'MMXU1',
          children: [
            {
              name: 'A',
              children: [
                {
                  name: 'phsA',
                  leaf: [{ val: 33.44 }, { val: 55.44 }, { val: 66.44 }],
                },
                {
                  name: 'phsB',
                  leaf: [{ val: 22.44 }, { val: 66.44 }, { val: 77.44 }],
                },
                {
                  name: 'phsC',
                  leaf: [{ val: 11.44 }, { val: 33.44 }, { val: 55.44 }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'LD3',
      children: [],
    },
  ],
};

const { args, argTypes, meta } = getStorybookMeta<OscdActionTree>({
  tagName: 'oscd-action-tree',
});

export default {
  title: 'Action Controls/Action Tree',
  tags: ['autodocs'],
  ...meta,
};

export const Default: StoryObj = {
  argTypes,
  args: {
    ...args,
    ['.data']: sampleData,
  },
};
