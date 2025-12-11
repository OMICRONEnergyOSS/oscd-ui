import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-filter-button.js';
import '../labs/card/oscd-elevated-card.js';
import {
  OscdFilterButton,
  FilterButtonDialogCloseDetail,
} from './OscdFilterButton.js';
import { action } from 'storybook/actions';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import { html } from 'lit';
import { sampleDoc } from '@/selection-list/storybook-utils.js';

const { args, argTypes, meta, template } = getStorybookMeta<OscdFilterButton>({
  tagName: 'oscd-filter-button',
});

export default {
  ...meta,
  title: 'Filtering / Filter Button',
  tags: ['autodocs'],
  render: (argz: typeof args & { itemCount?: number }) => {
    return html`<div
      @filter-button-dialog-close=${(
        customEvent: CustomEvent<FilterButtonDialogCloseDetail>,
      ) => {
        action('filter-button-dialog-close')(
          customEvent.detail.selectedElements.map(el =>
            new XMLSerializer().serializeToString(el),
          ),
        );
      }}
    >
      ${template(argz)}
    </div> `;
  },
};

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
