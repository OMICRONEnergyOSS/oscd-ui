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

const renderMixedIconItem = ({
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
    ${node.kind === 'ied'
      ? html`<oscd-icon slot="start">${kindIcon(node.kind)}</oscd-icon>`
      : ''}
    <span slot="headline">${node.label}</span>
    <span slot="supporting-text">${node.description}</span>
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

const unpinnedIcon = html`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M16.391 14.4188L16.8773 16.2406L16.2096 17.3947L13.3244 15.7253L11.3211 19.1876L10.4102 19.4307L10.1671 18.5198L12.1703 15.0576L9.28512 13.3882L9.95287 12.2341L11.7747 11.7478L14.1118 7.70854L13.5348 7.37467L14.2025 6.22059L19.9729 9.55934L19.3052 10.7134L18.7281 10.3795L16.391 14.4188ZM11.5974 13.1857L15.2328 15.2891L14.9531 14.2415L17.574 9.71179L15.2659 8.37629L12.645 12.906L11.5974 13.1857Z"
    fill="currentColor"
  />
</svg>`;

const pinnedIcon = html`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  viewBox="0 0 28 28"
  fill="none"
>
  <path
    d="M16.4379 14.5274L16.9273 16.3484L16.2615 17.5036L13.3735 15.8391L11.3761 19.3047L10.4656 19.5494L10.2209 18.6389L12.2183 15.1733L9.33034 13.5088L9.99614 12.3536L11.8171 11.8642L14.1475 7.821L13.5699 7.4881L14.2357 6.3329L20.0117 9.66194L19.3459 10.8171L18.7683 10.4842L16.4379 14.5274Z"
    fill="currentColor"
  />
</svg>`;

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

export const ToggleCustomization: StoryObj = {
  argTypes: {
    ...argTypes,
    togglePosition: {
      name: 'toggle-position',
      control: { type: 'inline-radio' },
      options: ['leading', 'trailing'],
      description: 'Placement of the expand/collapse toggle within each row.',
    },
    collapseIcon: {
      name: 'collapse-icon',
      control: { type: 'text' },
      description: 'Icon shown on the toggle when a branch is collapsed.',
    },
    expandIcon: {
      name: 'expand-icon',
      control: { type: 'text' },
      description: 'Icon shown on the toggle when a branch is expanded.',
    },
  },
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1'],
    ['.renderItem']: renderDemoItem,
    togglePosition: 'trailing',
    collapseIcon: 'chevron_right',
    expandIcon: 'expand_more',
  },
  render: argz =>
    html`<div style="max-width: 520px;">
      <oscd-tree
        toggle-position=${argz['togglePosition']}
        collapse-icon=${argz['collapseIcon']}
        expand-icon=${argz['expandIcon']}
        .data=${argz['.data']}
        .expandedIds=${argz['.expandedIds']}
        .renderItem=${argz['.renderItem']}
        @expanded-ids-changed=${handleExpansion}
      ></oscd-tree>
    </div>`,
};

export const PinnableLeaves: StoryObj = {
  argTypes,
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1', 'ld:PUB_A/AP1/LD_A'],
    ['.renderItem']: renderDemoItem,
    togglePosition: 'trailing',
    pinnedIds: ['ln:PUB_A|AP1|LD_A||TCTR|1'],
  },
  render: argz => {
    const [_, updateArgs] = useArgs();
    const pinnedIds = (argz['pinnedIds'] as string[]) ?? [];

    const togglePin = (id: string) => {
      const next = pinnedIds.includes(id)
        ? pinnedIds.filter(pinnedId => pinnedId !== id)
        : [...pinnedIds, id];
      action('pinned-ids-changed')(next);
      updateArgs({ pinnedIds: next });
    };

    return html`<div style="max-width: 520px;">
      <oscd-tree
        toggle-position=${argz['togglePosition']}
        .data=${argz['.data']}
        .expandedIds=${argz['.expandedIds']}
        .renderItem=${argz['.renderItem']}
        .renderLeafAccessory=${({
          node,
          id,
        }: TreeRenderContext<DemoTreeNode>) => {
          const pinned = pinnedIds.includes(id);
          return html`<button
            aria-label=${pinned ? `Unpin ${node.label}` : `Pin ${node.label}`}
            aria-pressed=${pinned}
            @click=${() => togglePin(id)}
          >
            <oscd-icon style="--md-icon-size: 20px;"
              >${pinned ? pinnedIcon : unpinnedIcon}</oscd-icon
            >
          </button>`;
        }}
        @expanded-ids-changed=${handleExpansion}
      ></oscd-tree>
    </div>`;
  },
};

export const AlignedLeadingIcons: StoryObj = {
  argTypes: {
    ...argTypes,
    indentStep: {
      name: '--oscd-tree-indent-step',
      control: { type: 'text' },
      description:
        'Drives both per-level indentation and the leading icon column width. Because a leading icon occupies exactly one indent step, icon-less children align their text under their iconed parent automatically. Set it large enough to hold the icon (e.g. 40px).',
    },
  },
  args: {
    ...args,
    ['.data']: sampleTree,
    ['.expandedIds']: ['ied:PUB_A', 'ap:PUB_A/AP1', 'ld:PUB_A/AP1/LD_A'],
    ['.renderItem']: renderMixedIconItem,
    togglePosition: 'trailing',
    indentStep: '40px',
  },
  render: argz =>
    html`<div style="max-width: 520px;">
      <oscd-tree
        style="--oscd-tree-indent-step: ${argz['indentStep']};"
        toggle-position=${argz['togglePosition']}
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
