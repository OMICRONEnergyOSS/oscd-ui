import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-action-pane.js';
import { OscdActionPane } from './OscdActionPane.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import { html } from 'lit';

const { args, argTypes, meta } = getStorybookMeta<OscdActionPane>({
  tagName: 'oscd-action-pane',
});

export default {
  title: 'Action Controls/Action Pane',
  tags: ['autodocs'],
  ...meta,
};

export const CalculatedLevels: StoryObj = {
  argTypes,
  args,
  render: ({ label, icon }) => {
    return html`<div>
      <oscd-action-pane .label=${label} .icon=${icon} highlighted .level=${1}>
        level 1, title, custom icon, highlighted
        <oscd-icon slot="icon">delete</oscd-icon>
        <oscd-action-pane .icon=${icon} .label=${'label'} secondary>
          set level 1, icon, secondary level below the rest
          <oscd-action-pane .label=${label}>
            level 2 selected
            <oscd-action-pane
              .label=${label}
              .icon=${icon}
              secondary
              highlighted
            >
              level 3, secondary highlighted
              <oscd-action-pane> level 4 </oscd-action-pane>
            </oscd-action-pane>
          </oscd-action-pane>
          <oscd-action-pane
            .label=${label}
            .icon=${icon}
            secondary
          ></oscd-action-pane>
        </oscd-action-pane>
      </oscd-action-pane>
      <div></div>
    </div>`;
  },
};

export const DefinedLevels: StoryObj = {
  argTypes,
  args,
  render: ({ label, icon }) => {
    return html`<div>
      <oscd-action-pane .label=${label} .icon=${icon} highlighted .level=${2}>
        level 1, title, custom icon, highlighted
        <oscd-icon slot="icon">delete</oscd-icon>
        <oscd-action-pane .icon=${icon} .label=${'label'} secondary>
          level 2, icon, secondary level below the rest
          <oscd-action-pane .label=${label}>
            level 3 selected
            <oscd-action-pane
              .label=${label}
              .icon=${icon}
              secondary
              highlighted
            >
              level 4, secondary highlighted
              <oscd-action-pane> level 4 </oscd-action-pane>
            </oscd-action-pane>
          </oscd-action-pane>
          <oscd-action-pane
            .label=${label}
            .icon=${icon}
            secondary
            level="4"
          ></oscd-action-pane>
        </oscd-action-pane>
      </oscd-action-pane>
      <div></div>
    </div>`;
  },
};
