import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-selection-list.js';
import '../labs/card/oscd-elevated-card.js';
import {
  OscdSelectionList,
  SelectionListChangeDetail,
} from './OscdSelectionList.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import { html } from 'lit';
import { sampleDoc } from './storybook-utils.js';
import { action } from 'storybook/internal/actions';

const { args, argTypes, meta, template } = getStorybookMeta<OscdSelectionList>({
  tagName: 'oscd-selection-list',
});

export default {
  title: 'Filtering / Selection List',
  tags: ['autodocs'],
  ...meta,
  render: (argz: typeof args & { itemCount?: number }) => {
    return html` <style>
        oscd-elevated-card {
          --md-elevated-card-container-color: var(--md-sys-color-surface);
        }
        oscd-selection-list {
          padding: 7px;
        }
      </style>
      <oscd-elevated-card
        @selection-list-change=${(
          customEvent: CustomEvent<SelectionListChangeDetail>,
        ) => {
          action('selection-list-change')(
            customEvent.detail.selectedElements.map(el =>
              new XMLSerializer().serializeToString(el),
            ),
          );
        }}
      >
        ${template(argz)}
      </oscd-elevated-card>`;
  },
};

const getListItems = (includeSupportingText?: boolean) => {
  return Array.from(sampleDoc.querySelectorAll('GSEControl')).map(element => ({
    headline: element.getAttribute('name') ?? 'unknown',
    attachedElement: element,
    ...(includeSupportingText
      ? { supportingText: element.getAttribute('desc') ?? undefined }
      : {}),
  }));
};

export const SingleSelect: StoryObj = {
  argTypes: {
    ...argTypes,
  },
  args: {
    ...args,
    ['.items']: getListItems(),
    filterable: false,
  },
};

export const MultiSelect: StoryObj = {
  argTypes: {
    ...argTypes,
  },
  args: {
    ...args,
    multiselect: true,
    ['.items']: getListItems(),
    filterable: false,
  },
};

export const SingleSelectWithSupportingText: StoryObj = {
  argTypes: {
    ...argTypes,
  },
  args: {
    ...args,
    ['.items']: getListItems(true),
    filterable: true,
  },
};
