import { html } from 'lit';
import type { StoryObj } from '@storybook/web-components-vite';
import { OscdOutlinedSegmentedButtonSet } from './OscdOutlinedSegmentedButtonSet.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import './oscd-outlined-segmented-button-set.js';
import '../segmentedbutton/oscd-outlined-segmented-button.js';
import '../../icon/oscd-icon.js';

const { args, argTypes, meta, template } =
  getStorybookMeta<OscdOutlinedSegmentedButtonSet>({
    tagName: 'oscd-outlined-segmented-button-set',
  });

export default {
  ...meta,
  title: 'Labs / Segmentedbuttonset / Outlined Segmented Button Set',
  tags: ['autodocs'],
  render: (argz: typeof args) => {
    return html` <div style="width:325px">
      ${template(
        argz,
        html`
          <oscd-outlined-segmented-button no-checkmark label="Start">
            <oscd-icon slot="icon">align_justify_flex_start</oscd-icon>
          </oscd-outlined-segmented-button>

          <oscd-outlined-segmented-button no-checkmark selected label="Center">
            <oscd-icon slot="icon">align_justify_center</oscd-icon>
          </oscd-outlined-segmented-button>

          <oscd-outlined-segmented-button no-checkmark label="End">
            <oscd-icon slot="icon">align_justify_flex_end</oscd-icon>
          </oscd-outlined-segmented-button>
        `,
      )}
    </div>`;
  },
};

export const Default: StoryObj = {
  argTypes,
  args,
};
