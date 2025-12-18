import { css, html, LitElement, TemplateResult } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';

import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { OscdIcon } from '../icon/OscdIcon.js';
import { OscdList } from '../list/OscdList.js';
import { OscdListItem } from '../list/OscdListItem.js';
import { OscdOutlinedTextField } from '../textfield/OscdOutlinedTextField.js';

export type TreeSelection = { [name: string]: TreeSelection };

export type Path = string[];

function samePath(a: Path, b?: Path): boolean {
  if (a.length !== b?.length) {
    return false;
  }
  return a.every((x, i) => b[i] === x);
}

export type TreeNode = {
  children?: Tree;
  text?: string;
  mandatory?: boolean;
};

export type Tree = Partial<Record<string, TreeNode>>;

function depth(ts: TreeSelection): number {
  if (!ts) {
    return 0;
  }
  return 1 + Math.max(-1, ...Object.values(ts).map(sts => depth(sts)));
}

function getColumns(rows: Path[], count: number): (Path | undefined)[][] {
  return new Array(count)
    .fill(0)
    .map((_c, c) =>
      new Array(rows.length)
        .fill(0)
        .map((_r, r) =>
          c < rows[r].length ? rows[r].slice(0, c + 1) : undefined,
        ),
    );
}

const selectAllValue = '$OSCD$selectAll$89764a15-504e-48f3-93b5-c8064dd39ee7';

const placeholderCell = html`<oscd-list-item type="text"></oscd-list-item>`;

function debounce(callback: () => void, delay = 250) {
  let timeout: ReturnType<typeof setTimeout>;

  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback();
    }, delay);
  };
}

/**
 * @tag oscd-tree-grid
 * A web component for selecting parts of tree shaped data structures
 */
export class OscdTreeGrid extends ScopedElementsMixin(LitElement) {
  static scopedElements = {
    'oscd-list': OscdList,
    'oscd-icon': OscdIcon,
    'oscd-list-item': OscdListItem,
    'oscd-outlined-textfield': OscdOutlinedTextField,
  };

  /** The `Tree` to be selected from */
  @property({ type: Object })
  tree: Tree = {};

  /** Selected rows as `TreeSelection` */
  @property({ type: Object, reflect: true })
  selection: TreeSelection = {};

  /** Selected rows as `Path[]` */
  @property({ type: Array, reflect: true })
  get paths(): Path[] {
    return this.getPaths();
  }

  set paths(paths: Path[]) {
    if (!paths) {
      this.selection = {};
      return;
    }
    const selection: TreeSelection = {};
    for (const path of paths) {
      let i = selection;
      for (const name of path) {
        if (!Object.prototype.hasOwnProperty.call(i, name)) {
          i[name] = {};
        }
        i = i[name];
      }
    }
    this.selection = selection;
  }

  /** Regular expression by which to filter rows */
  @property({ type: String })
  get filter(): string {
    return this.filterUI?.value ?? '';
  }

  set filter(str: string) {
    if (!this.filterUI) {
      return;
    }
    const oldValue = this.filterUI.value;
    this.filterUI.value = str;
    this.requestUpdate('filter', oldValue);
  }

  /** Filter `TextField` label */
  @property({ type: String })
  filterLabel: string = '';

  override firstUpdated() {
    if (this.getAttribute('filter')) {
      this.filter = this.getAttribute('filter')!;
    }
  }

  @state()
  private get depth(): number {
    return depth(this.selection);
  }

  @query('oscd-outlined-textfield')
  filterUI?: OscdOutlinedTextField;

  private get filterRegex(): RegExp {
    return new RegExp(this.filter, 'u');
  }

  @query('div')
  private container?: Element;

  private collapsed = new Set<string>();

  private getPaths(maxLength?: number): Path[] {
    let paths: Path[] = Object.keys(this.selection ?? {}).map(key => [key]);

    let i = maxLength ?? this.depth - 1;
    while (i > 0) {
      i -= 1;
      paths = paths.flatMap(path => {
        let dir = this.selection;
        for (const slug of path) {
          dir = dir[slug];
        } // recursive descent
        const newPaths = Object.keys(dir).map(slug => path.concat(slug));
        return newPaths.length === 0 ? [path] : newPaths;
      });
    }

    return maxLength === undefined
      ? paths
      : paths
          .filter(path => path.length > maxLength)
          .sort((p1, p2) => p1.join(' ').localeCompare(p2.join(' ')));
  }

  private treeNode(path: Path): TreeNode {
    let { tree } = this;
    for (const slug of path.slice(0, -1)) {
      tree = tree[slug]?.children ?? {};
    }
    return tree[path[path.length - 1]] ?? {};
  }

  private rows(): Path[] {
    const rs = Object.keys(this.tree).map(s => [s]);
    for (let i = 0; i < this.depth; i += 1) {
      this.getPaths(i).forEach(p =>
        Object.keys(this.treeNode(p).children ?? {}).forEach(s =>
          rs.push(p.concat(s)),
        ),
      );
    }
    return rs
      .filter(
        r =>
          !rs.some(
            r2 => r2.length > r.length && r.every((s, i) => r2[i] === s),
          ),
      )
      .filter(r => this.filter === '' || r.join(' ').match(this.filterRegex))
      .map(r => {
        for (let i = r.length - 1; i > 0; i -= 1) {
          if (this.collapsed.has(JSON.stringify(r.slice(0, -i)))) {
            return r.slice(0, -i);
          }
        }
        return r;
      })
      .sort((r1, r2) => r1.join(' ').localeCompare(r2.join(' ')))
      .filter((x, i, xs) => !samePath(x, xs[i - 1]));
  }

  // eslint-disable-next-line class-methods-use-this
  private clicked(el: HTMLElement): OscdListItem {
    if (el.tagName === 'OSCD-LIST-ITEM') {
      return el as OscdListItem;
    }
    return el.parentElement as OscdListItem;
  }

  private select(parentPath: Path, clicked: string): void {
    const path = parentPath.concat([clicked]);
    const isSubPath = (p: Path) => path.every((s, i) => p[i] === s);
    if (this.paths.some(isSubPath)) {
      this.collapsed.delete(JSON.stringify(path));
      this.paths = this.paths.filter(p => !isSubPath(p)).concat([parentPath]);
    } else {
      this.paths = this.paths.concat([path]);
    }
  }

  private selectAll(clicked: OscdListItem): void {
    const items = Array.from(clicked.closest('oscd-list')!.children).slice(
      1,
    ) as OscdListItem[];

    const selected = items.some(
      item =>
        !(item as OscdListItem).hasAttribute('activated') &&
        (item as OscdListItem).type !== 'text' &&
        !(item as OscdListItem).disabled,
    );
    let newPaths = [...this.paths];
    items
      .filter(item => item.type !== 'text')
      .filter(item => !item.disabled)
      .filter(item => selected !== item.hasAttribute('activated'))
      .forEach(item => {
        const path = JSON.parse(item.dataset['path']!).concat([
          item.getAttribute('value'),
        ]) as Path;
        const isSubPath = (p: Path) => path.every((s, i) => p[i] === s);
        if (newPaths.some(isSubPath)) {
          newPaths = newPaths
            .filter(p => !isSubPath(p))
            .concat([path.slice(0, -1)]);
        } else {
          newPaths.push(path);
        }
      });
    this.paths = newPaths;
  }

  private async scrollRight(): Promise<void> {
    this.requestUpdate();
    await this.updateComplete;
    requestAnimationFrame(() => {
      if (this.container) {
        this.container.scrollLeft = 1000 * this.depth;
      }
    });
  }

  private handleSelected(event: Event): Promise<void> {
    const clicked = this.clicked(event.currentTarget as HTMLElement);
    const selectedValue = clicked.getAttribute('value')!;
    if (selectedValue === undefined || !clicked) {
      return Promise.resolve();
    }

    if (selectedValue === selectAllValue) {
      this.selectAll(clicked);
    } else {
      const path = JSON.parse(clicked.dataset['path']!) as Path;
      this.select(path, selectedValue);
    }

    return this.scrollRight();
  }

  private renderCell(path: Path, previousPath: Path = []): TemplateResult {
    const parent = path.slice(0, -1);
    const entry = path[path.length - 1];

    const activated = this.getPaths(parent.length)
      .map(p => JSON.stringify(p))
      .includes(JSON.stringify(path));
    const noninteractive = path.every((s, i) => previousPath[i] === s);

    let defaultSelected = false;
    const afterRender = (item?: Element) => {
      if (!item) {
        defaultSelected = false;
      }
      if (defaultSelected || !item) {
        return;
      }
      defaultSelected = true;
      // workaround for buggy interaction between lit-html and mwc-list-item

      //TODO: stee - activated isn't a property of OscdListItem
      // (item as OscdListItem).[activated] = activated && !noninteractive;
      if (this.treeNode(path).mandatory) {
        let dir = this.selection;
        for (const slug of path.slice(0, -1)) {
          dir = dir[slug];
        } // rec. descent
        if (dir[path[path.length - 1]]) {
          return;
        }
        dir[path[path.length - 1]] = {};
        this.requestUpdate('selection');
      }
    };

    const disabled = this.treeNode(path).mandatory;

    const collapsed = this.collapsed.has(JSON.stringify(path));
    const expandable = Object.keys(this.treeNode(path).children ?? {}).length;
    let icon = '';
    if (expandable) {
      if (activated) {
        icon = 'expand_less';
      } else {
        icon = 'expand_more';
      }
    } else if (activated) {
      icon = 'remove';
    } else {
      icon = 'add';
    }

    if (disabled) {
      if (collapsed) {
        icon = 'more_vert';
      } else {
        icon = '';
      }
    }
    if (noninteractive) {
      icon = 'subdirectory_arrow_right';
    }

    return html`<oscd-list-item
      @click="${async (evt: Event) => {
        this.handleSelected(evt);

        // send custom event with tree component
        await new Promise<void>(resolve => {
          setTimeout(resolve, 1);
        });
        if (!activated) {
          this.dispatchEvent(
            new CustomEvent('node-selected', {
              bubbles: true,
              composed: true,
              detail: {
                node: this.treeNode(path),
                path: path,
              },
            }),
          );
        }
      }}"
      value="${entry}"
      data-path=${JSON.stringify(parent)}
      ?activated=${activated}
      ?disabled=${disabled}
      ?noninteractive=${noninteractive}
      .type=${noninteractive ? 'text' : 'link'}
      style="${noninteractive ? 'opacity: 0.38' : ''}"
      ${ref(afterRender)}
      >${icon
        ? html`<oscd-icon slot="end">${icon}</oscd-icon>`
        : html``}${this.treeNode(path).text ??
      path[path.length - 1]}</oscd-list-item
    >`;
  }

  private renderColumn(column: (Path | undefined)[]): TemplateResult {
    const items: TemplateResult[] = [];

    if (column.length === 0 || column.every(p => p === undefined)) {
      return html``;
    }
    for (let i = 0; i < column.length; i += 1) {
      const path = column[i];
      items.push(
        path ? this.renderCell(column[i]!, column[i - 1]) : placeholderCell,
      );
    }

    return html`<oscd-list
      ><oscd-list-item
        type="link"
        @click="${(evt: Event) => this.handleSelected(evt)}"
        value="${selectAllValue}"
        ><div slot="headline"></div>
        <oscd-icon slot="end">done_all</oscd-icon></oscd-list-item
      >${items}</oscd-list
    >`;
  }

  private toggleCollapse(serializedPath: string) {
    if (this.collapsed.has(serializedPath)) {
      this.collapsed.delete(serializedPath);
    } else {
      this.collapsed.add(serializedPath);
    }
    this.requestUpdate();
  }

  private renderExpandCell(path: Path): TemplateResult {
    const needle = JSON.stringify(path);
    if (!this.collapsed.has(needle) || !path.length) {
      return placeholderCell;
    }
    return html`<oscd-list-item
      type="link"
      class="filter"
      data-path="${needle}"
      @click="${(evt: Event) => {
        const clicked = this.clicked(evt.target as HTMLElement);

        const { path } = clicked.dataset;
        if (path) {
          this.toggleCollapse(path);
        }
      }}"
      ><div slot="headline"></div>
      <oscd-icon slot="end">unfold_more</oscd-icon></oscd-list-item
    >`;
  }

  private renderExpandColumn(rows: Path[]): TemplateResult {
    return html`
      <oscd-list class="expand"
        >${placeholderCell}${rows.map(p => this.renderExpandCell(p))}</oscd-list
      >
    `;
  }

  private renderCollapseCell(path: Path): TemplateResult {
    const needle = JSON.stringify(path.slice(0, -1));
    if (path.length < 2) {
      return html`
        <oscd-list-item type="text"
          ><oscd-icon style="opacity: 0" ; slot="end"
            >unfold_less</oscd-icon
          ></oscd-list-item
        >
      `;
    }
    return html`<oscd-list-item
      type="link"
      class="filter"
      data-path="${needle}"
      @click="${(evt: Event) => {
        const clicked = this.clicked(evt.target as HTMLElement);

        const { path } = clicked.dataset;
        if (path) {
          this.toggleCollapse(path);
        }
      }}"
      ><div slot="headline"></div>
      <oscd-icon slot="end">unfold_less</oscd-icon></oscd-list-item
    >`;
  }

  private renderCollapseColumn(rows: Path[]): TemplateResult {
    return html`<oscd-list class="collapse"
      >${placeholderCell}${rows.map(p => this.renderCollapseCell(p))}</oscd-list
    >`;
  }

  private renderColumns(): TemplateResult {
    const rows = this.rows();
    const columns = getColumns(rows, this.depth + 1).map(c =>
      this.renderColumn(c),
    );

    return html`${this.renderCollapseColumn(
      rows,
    )}${columns}${this.renderExpandColumn(rows)}`;
  }

  private renderFilterField() {
    return html`<oscd-outlined-textfield
      style="--oscd-outlined-text-field-container-shape: 28px;"
      icon="search"
      ${ref(elm => {
        if (!elm) {
          return;
        }
        const regExp = !!(elm as OscdOutlinedTextField).value;

        elm.querySelector('oscd-icon')!.textContent = regExp
          ? 'saved_search'
          : 'search';
      })}
      label="${this.filterLabel}"
      @input=${debounce(() => this.requestUpdate('filter'))}
    >
      <oscd-icon slot="leading-icon">search</oscd-icon>
    </oscd-outlined-textfield>`;
  }

  override render() {
    return html`${this.renderFilterField()}
      <div class="pane">${this.renderColumns()}</div>`;
  }

  static override styles = css`
    div.pane {
      display: flex;
      flex-direction: row;
      overflow: auto;
    }

    oscd-list-item.filter {
      color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));
    }
  `;
}
