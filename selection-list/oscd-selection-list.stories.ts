import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-selection-list.js';
import '../labs/card/oscd-elevated-card.js';
import { OscdSelectionList } from './OscdSelectionList.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import { html } from 'lit';
import { sampleDoc } from './storybook-utils.js';

const { args, argTypes, meta, template } = getStorybookMeta<OscdSelectionList>({
  tagName: 'oscd-selection-list',
});

export default {
  title: 'Filtering / Selection List',
  tags: ['autodocs'],
  ...meta,
  render: (argz: typeof args & { itemCount?: number }) => {
    return html` <oscd-elevated-card
      style="--md-elevated-card-container-color: var(--md-sys-color-surface); padding: 1em"
    >
      ${template(argz)}
    </oscd-elevated-card>`;
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (argTypes as any).items;

export const Default: StoryObj = {
  argTypes: {
    ...argTypes,
  },
  args: {
    ...args,
    ['.items']: Array.from(sampleDoc.querySelectorAll('GSEControl')).map(
      element => ({
        headline: element.getAttribute('name') ?? 'unknown',
        attachedElement: element,
      }),
    ),
    filterable: false,
  },
};

export const WithSupportingText: StoryObj = {
  argTypes: {
    ...argTypes,
  },
  args: {
    ...args,
    ['.items']: Array.from(sampleDoc.querySelectorAll('GSEControl')).map(
      element => ({
        headline: element.getAttribute('name') ?? 'unknown',
        supportingText: element.getAttribute('desc') ?? undefined,
        attachedElement: element,
      }),
    ),
    filterable: true,
  },
};
