import { html } from 'lit';
import type { StoryObj } from '@storybook/web-components-vite';
import { action } from 'storybook/internal/actions';
import { useArgs } from 'storybook/preview-api';

import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';
import type {
  TreeNode,
  TreeRenderContext,
  TreeSelectionChangeEventDetail,
} from './OscdTree.js';
import { OscdTree } from './OscdTree.js';

import './oscd-tree.js';
import '../icon/oscd-icon.js';
import '../textfield/oscd-outlined-text-field.js';

type DemoTreeNode = TreeNode & {
  id?: string;
  label: string;
  description?: string;
  kind: 'ied' | 'access-point' | 'l-device' | 'logical-node';
  children?: DemoTreeNode[];
};

const { args, argTypes, meta } = getStorybookMeta<OscdTree>({
  tagName: 'oscd-tree',
});

const sampleTree: DemoTreeNode[] = [
  {
    id: 'ied:PUB_A',
    label: 'PUB_A',
    description: 'Publisher IED',
    kind: 'ied',
    children: [
      {
        id: 'ap:PUB_A/AP1',
        label: 'AP1',
        description: 'Access point',
        kind: 'access-point',
        children: [
          {
            id: 'ld:PUB_A/AP1/LD_A',
            label: 'LD_A',
            description: 'Logical device',
            kind: 'l-device',
            children: [
              {
                id: 'ln:PUB_A|AP1|LD_A||LLN0|',
                label: 'LLN0',
                description: 'Logical node zero',
                kind: 'logical-node',
                children: [],
              },
              {
                id: 'ln:PUB_A|AP1|LD_A||TCTR|1',
                label: 'TCTR1',
                description: 'Current transformer',
                kind: 'logical-node',
                children: [],
              },
              {
                id: 'ln:PUB_A|AP1|LD_A||XCBR|1',
                label: 'XCBR1',
                description: 'Circuit breaker',
                kind: 'logical-node',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ied:PUB_B',
    label: 'PUB_B',
    description: 'Publisher IED',
    kind: 'ied',
    children: [
      {
        id: 'ap:PUB_B/AP1',
        label: 'AP1',
        description: 'Access point',
        kind: 'access-point',
        children: [
          {
            id: 'ld:PUB_B/AP1/LD_B',
            label: 'LD_B',
            description: 'Logical device',
            kind: 'l-device',
            children: [
              {
                id: 'ln:PUB_B|AP1|LD_B||LLN0|',
                label: 'LLN0',
                description: 'Logical node zero',
                kind: 'logical-node',
                children: [],
              },
              {
                id: 'ln:PUB_B|AP1|LD_B||TCTR|1',
                label: 'TCTR1',
                description: 'Current transformer',
                kind: 'logical-node',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const treeWithUnknownChildren: DemoTreeNode[] = [
  ...sampleTree,
  {
    id: 'ied:REMOTE',
    label: 'REMOTE',
    description: 'Children are not loaded yet',
    kind: 'ied',
  },
];

const kindIcon = (kind: DemoTreeNode['kind']): string => {
  switch (kind) {
    case 'ied':
      return 'reportIcon';
    case 'access-point':
      return 'lan';
    case 'l-device':
      return 'dns';
    case 'logical-node':
      return 'article';
    default:
      return 'circle';
  }
};

const renderDemoItem = ({
  node,
  selected,
  active,
  disabled,
}: TreeRenderContext<DemoTreeNode>) =>
  html`<oscd-tree-item
    ?selected=${selected}
    ?active=${active}
    ?disabled=${disabled}
  >
    <oscd-icon slot="start">${kindIcon(node.kind)}</oscd-icon>
    <span slot="headline">${node.label}</span>
    <span slot="supporting-text">${node.description}</span>
  </oscd-tree-item>`;

const renderCompactItem = ({
  node,
  childrenState,
  selected,
  disabled,
}: TreeRenderContext<DemoTreeNode>) =>
  html`<oscd-tree-item ?selected=${selected} ?disabled=${disabled}>
    <span slot="headline">${node.label}</span>
    <span slot="supporting-text">${node.kind} / ${childrenState}</span>
  </oscd-tree-item>`;

const matchesFilter = (node: DemoTreeNode, filter: string): boolean => {
  const needle = filter.trim().toLowerCase();
  if (!needle) {
    return true;
  }

  return [node.label, node.description, node.kind, node.id]
    .filter((term): term is string => !!term)
    .some(term => term.toLowerCase().includes(needle));
};

const filterTree = (nodes: DemoTreeNode[], filter: string): DemoTreeNode[] => {
  const needle = filter.trim();
  if (!needle) {
    return nodes;
  }

  return nodes
    .map((node): DemoTreeNode | undefined => {
      const children = node.children
        ? filterTree(node.children, needle)
        : node.children;
      const matched = matchesFilter(node, needle);

      if (!matched && (!children || children.length === 0)) {
        return undefined;
      }

      const filteredNode: DemoTreeNode = {
        ...node,
      };

      if (node.children !== undefined) {
        filteredNode.children = children;
      }

      return filteredNode;
    })
    .filter((node): node is DemoTreeNode => !!node);
};

const handleSelection = (
  event: CustomEvent<TreeSelectionChangeEventDetail<DemoTreeNode>>,
) => {
  action('selected-ids-changed')(event.detail.selectedIds);
};

const handleExpansion = (event: CustomEvent<{ expandedIds: string[] }>) => {
  action('expanded-ids-changed')(event.detail.expandedIds);
};

export default {
  ...meta,
  title: 'Tree / Tree',
  tags: ['autodocs'],
};

export const Default: StoryObj = {
  argTypes,
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1'],
    ['.renderItem']: renderDemoItem,
  },
  render: argz =>
    html`<div style="max-width: 520px;">
      <oscd-tree
        .data=${argz['.data']}
        .expandedIds=${argz['.expandedIds']}
        .renderItem=${argz['.renderItem']}
        @expanded-ids-changed=${handleExpansion}
      ></oscd-tree>
    </div>`,
};

export const MultipleSelection: StoryObj = {
  argTypes,
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1', 'ld:PUB_A/AP1/LD_A'],
    ['.selectedIds']: ['ln:PUB_A|AP1|LD_A||TCTR|1'],
    ['.renderItem']: renderDemoItem,
    selectionMode: 'multiple',
  },
  render: argz =>
    html`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${argz['selectionMode']}
        .data=${argz['.data']}
        .expandedIds=${argz['.expandedIds']}
        .selectedIds=${argz['.selectedIds']}
        .renderItem=${argz['.renderItem']}
        .isSelectable=${(node: DemoTreeNode) => node.kind === 'logical-node'}
        @selected-ids-changed=${handleSelection}
        @expanded-ids-changed=${handleExpansion}
      ></oscd-tree>
    </div>`,
};

export const SingleSelection: StoryObj = {
  argTypes,
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1', 'ld:PUB_A/AP1/LD_A'],
    ['.selectedIds']: ['ln:PUB_A|AP1|LD_A||TCTR|1'],
    ['.renderItem']: renderDemoItem,
    selectionMode: 'single',
  },
  render: argz =>
    html`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${argz['selectionMode']}
        .data=${argz['.data']}
        .expandedIds=${argz['.expandedIds']}
        .selectedIds=${argz['.selectedIds']}
        .renderItem=${argz['.renderItem']}
        .isSelectable=${(node: DemoTreeNode) => node.kind === 'logical-node'}
        @selected-ids-changed=${handleSelection}
        @expanded-ids-changed=${handleExpansion}
      ></oscd-tree>
    </div>`,
};

export const DisabledRows: StoryObj = {
  argTypes,
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1', 'ld:PUB_A/AP1/LD_A'],
    ['.selectedIds']: ['ln:PUB_A|AP1|LD_A||TCTR|1'],
    ['.renderItem']: renderDemoItem,
    selectionMode: 'multiple',
  },
  render: argz =>
    html`<div style="max-width: 520px;">
      <oscd-tree
        selectionMode=${argz['selectionMode']}
        .data=${argz['.data']}
        .expandedIds=${argz['.expandedIds']}
        .selectedIds=${argz['.selectedIds']}
        .renderItem=${argz['.renderItem']}
        .isSelectable=${(node: DemoTreeNode) => node.kind === 'logical-node'}
        .isDisabled=${(node: DemoTreeNode) =>
          node.kind === 'logical-node' &&
          node.id !== 'ln:PUB_A|AP1|LD_A||TCTR|1'}
        @selected-ids-changed=${handleSelection}
        @expanded-ids-changed=${handleExpansion}
      ></oscd-tree>
    </div>`,
};

export const UnknownChildren: StoryObj = {
  argTypes,
  args: {
    ...args,
    ['.data']: treeWithUnknownChildren,
    ['.expandedIds']: ['ied:PUB_A'],
    ['.renderItem']: renderCompactItem,
  },
  render: argz =>
    html`<div style="max-width: 520px;">
      <oscd-tree
        .data=${argz['.data']}
        .expandedIds=${argz['.expandedIds']}
        .renderItem=${argz['.renderItem']}
        @node-expand=${(event: Event) => {
          const customEvent = event as CustomEvent<{ id: string }>;
          if (customEvent.detail.id === 'ied:REMOTE') {
            customEvent.preventDefault();
            action('lazy node-expand prevented')(customEvent.detail.id);
          }
        }}
        @expanded-ids-changed=${handleExpansion}
      ></oscd-tree>
    </div>`,
};

export const DerivedIds: StoryObj = {
  argTypes,
  args: {
    ...args,
    ['.data']: sampleTree.map(({ id: _id, ...node }) => node),
    ['.expandedIds']: ['0', '0/0'],
    ['.renderItem']: renderDemoItem,
  },
  render: argz =>
    html`<div style="max-width: 520px;">
      <oscd-tree
        .data=${argz['.data']}
        .expandedIds=${argz['.expandedIds']}
        .renderItem=${argz['.renderItem']}
        @expanded-ids-changed=${handleExpansion}
      ></oscd-tree>
    </div>`,
};

export const Filtered: StoryObj = {
  argTypes,
  args: {
    ...args,
    expandedIds: ['ied:PUB_A'],
    filter: 'TCTR',
  },
  render: argz => {
    const [_, updateArgs] = useArgs();
    const filter = String(argz['filter'] ?? '');
    const expandedIds = argz['expandedIds'] as string[];
    const filteredTree = filterTree(sampleTree, filter);

    return html`<div
      style="display: flex; flex-direction: column; gap: 12px; width: min(520px, 100%);"
    >
      <oscd-outlined-text-field
        label="Filter tree"
        .value=${filter}
        @input=${(event: Event) => {
          const input = event.target as HTMLInputElement;
          action('filter input')(input.value);
          updateArgs({ filter: input.value });
        }}
      ></oscd-outlined-text-field>
      <oscd-tree
        .data=${filteredTree}
        .expandedIds=${expandedIds}
        .renderItem=${renderDemoItem}
        @expanded-ids-changed=${(
          event: CustomEvent<{ expandedIds: string[] }>,
        ) => {
          handleExpansion(event);
          updateArgs({ expandedIds: event.detail.expandedIds });
        }}
      ></oscd-tree>
    </div>`;
  },
};
