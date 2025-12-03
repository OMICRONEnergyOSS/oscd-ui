/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-scl-icon.js';
import { OscdSclIcon, SCL_ICONS } from './OscdSclIcon.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import { html } from 'lit';

const { args, argTypes, meta } = getStorybookMeta<OscdSclIcon>({
  tagName: 'oscd-scl-icon',
});

export default {
  ...meta,
  title: 'Icons / SCL Icon',
  tags: ['autodocs'],
};

export const Default: StoryObj = {
  argTypes: {
    textContent: {
      options: Object.keys(SCL_ICONS),
      control: { type: 'select' },
      description: 'SCL Icon to be displayed.',
    },
    ...argTypes,
  },
  args: {
    ...args,
    textContent: args.textContent ?? 'elementIcon',
  },
  render: ({ textContent, ...argz }: typeof args) =>
    html`<div>
      <style>
        .standard {
          --md-icon-size: 24px;
        }
        .large {
          --md-icon-size: 48px;
        }
        .larger {
          --md-icon-size: 64px;
        }
        .silly {
          --md-icon-size: 128px;
        }
      </style>
      <oscd-scl-icon class="standard" ...=${argz}>${textContent}</oscd-scl-icon>
      <oscd-scl-icon class="large" ...=${argz}>${textContent}</oscd-scl-icon>
      <oscd-scl-icon class="larger" ...=${argz}>${textContent}</oscd-scl-icon>
      <oscd-scl-icon class="silly" ...=${argz}>${textContent}</oscd-scl-icon>
    </div> `,
};

export const AllIcons: StoryObj = {
  argTypes: {
    size: {
      options: [16, 24, 32, 48, 64, 128],
      control: { type: 'number' },
      description: 'Size of the icon.',
    },
  },
  args: {
    size: 24,
  },
  render: ({ size, ...argz }: typeof args) =>
    html`<div>
      <style>
        * {
          --md-icon-size: ${size}px;
        }
      </style>
      ${Object.keys(SCL_ICONS).map(
        iconName =>
          html`<div
            style="display: inline-block; text-align: center; margin: 16px;"
          >
            <oscd-scl-icon ...=${argz}>${iconName}</oscd-scl-icon>
            <div style="margin-top: 8px; font-size: 14px;">${iconName}</div>
          </div>`,
      )}
    </div> `,
};
