import type { StoryObj } from '@storybook/web-components-vite';
import { action } from 'storybook/actions';
import './oscd-action-list.js';
import { ActionItem, OscdActionList } from './OscdActionList.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const sampleDoc = new DOMParser().parseFromString(
  `<SCL>
  <GSEControl name="gse0" desc="gseControl0"/>
  <GSEControl name="gse1" desc="gseControl1"/>
  <GSEControl name="gse2" desc="gseControl2"/>
  <GSEControl name="gse3" desc="gseControl3"/>
  <GSEControl name="gse4" desc="gseControl4"/>
  <GSEControl name="gse5" />
  <GSEControl name="gse6" desc="gseControl6"/>
  <GSEControl name="gse7" desc="gseControl7"/>
  <GSEControl name="gse8" />
  <GSEControl name="gse9" desc="gseControl9"/>
</SCL>`,
  'application/xml',
);

const { args, argTypes, meta } = getStorybookMeta<OscdActionList>({
  tagName: 'oscd-action-list',
});

export default {
  ...meta,
  title: 'Filtering / Action List',
  tags: ['autodocs'],
  argTypes: {
    ...argTypes,

    startingIcon: {
      control: {
        type: 'select',
        options: ['arrow-up', 'arrow-down', 'loading'],
      },
      description: 'Name of icon to place at start of Action Item',
    },
    endingIcon: {
      control: {
        type: 'string',
        options: ['arrow-up', 'arrow-down', 'loading'],
      },
      description: 'Name of icon to place at end of Action Item',
    },
    divider: {
      control: { type: 'boolean' },
      description: 'Add a divider at the bottom of the item',
    },
    filterGroup: {
      control: { type: 'object' },
      description: 'Specifies additional filter terms ',
    },
    primaryAction: {
      control: { type: 'boolean' },
      description: 'The action to be performed when clicking the list item',
    },
    actionsCount: {
      control: { type: 'number', min: 0, max: 4 },
      description:
        'Number of list items to render. These are additional actions for the item. The first action is visible, the rest are in a context menu.',
      defaultValue: 2,
    },
  },
};

const primaryAction = (item: ActionItem) => {
  action('primaryAction')({ item });
};

const actions = ['add', 'edit', 'delete', 'content_copy'].map(icon => ({
  icon,
  callback: (item: ActionItem) => action(`action:${icon}`)(item),
}));

const getItems = (argz: typeof args, showSupportingText?: boolean) => {
  return Array.from(sampleDoc.querySelectorAll('GSEControl')).map(element => ({
    headline: element.getAttribute('name') ?? 'unknown',
    ...(showSupportingText
      ? { supportingText: element.getAttribute('desc') }
      : {}),
    attachedElement: element,
    startingIcon: argz['startingIcon'],
    endingIcon: argz['endingIcon'],
    divider: argz['divider'] ?? true,
    filtergroup: argz['filterGroup'] ? argz['filterGroup'] : undefined,
    ...(argz['primaryAction'] ? { primaryAction } : {}),
    actions: actions.slice(0, argz['actionsCount']),
  }));
};

const defaultArgs = {
  ...args,
  primaryAction: true,
  actionsCount: 4,
  filterable: false,
};

export const Default: StoryObj = {
  argTypes,
  args: {
    ...defaultArgs,
    ['.items']: getItems(defaultArgs),
  },
};

export const WithSupportingText: StoryObj = {
  argTypes,
  args: {
    ...defaultArgs,
    ['.items']: getItems(defaultArgs, true),
  },
};
