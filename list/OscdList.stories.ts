/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-list.js';
import { OscdList } from './OscdList.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdList>({
  tagName: 'oscd-list',
});

export default {
  title: 'Lists / List',
  tags: ['autodocs'],
  ...meta,
};

export const Default: StoryObj = {
  argTypes,
  args,
};
