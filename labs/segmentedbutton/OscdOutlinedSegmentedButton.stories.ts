import { html } from 'lit';
import type { StoryObj } from '@storybook/web-components-vite';
import { OscdOutlinedSegmentedButton } from './OscdOutlinedSegmentedButton.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import './oscd-outlined-segmented-button.js';
import '../../icon/oscd-icon.js';

const { args, argTypes, meta, template } =
  getStorybookMeta<OscdOutlinedSegmentedButton>({
    tagName: 'oscd-outlined-segmented-button',
  });

export default {
  ...meta,
  title: 'Labs / Segmentedbutton / Outlined Segmented Button',
  tags: ['autodocs'],
  render: (argz: typeof args) => {
    return template(
      argz,
      html` <oscd-icon slot="icon">align_justify_flex_start</oscd-icon> `,
    );
  },
};

export const Default: StoryObj = {
  argTypes,
  args: {
    ...args,
    noCheckmark: true,
    label: args.label || 'My Segmented Button',
  },
};
