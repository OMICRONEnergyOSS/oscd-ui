import { LitElement, css, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { useGlobals } from 'storybook/preview-api';

import { scopedWcDecorator } from '@/utils/storybook/scopedWcDecorator.js';

interface StoryIndexEntry {
  id: string;
  name: string;
  title: string;
  type: 'docs' | 'story';
  tags?: string[];
}

interface StoryIndex {
  entries: Record<string, StoryIndexEntry>;
}

interface ComponentEntry {
  docs: StoryIndexEntry;
  story: StoryIndexEntry;
  category: string;
  label: string;
}

interface ComponentSection {
  title: string;
  entries: ComponentEntry[];
}

const sectionOrder = [
  'Actions & navigation',
  'Inputs & selection',
  'Data & SCL',
  'Feedback & overlays',
  'Foundations',
  'Editors',
  'Labs',
  'Other components',
];

const categoryByTitle: Record<string, string> = {
  'Action Controls': 'Data & SCL',
  'App Bar': 'Actions & navigation',
  Buttons: 'Actions & navigation',
  Checkboxs: 'Inputs & selection',
  Chips: 'Inputs & selection',
  Dialogs: 'Feedback & overlays',
  Dividers: 'Foundations',
  Elevations: 'Foundations',
  Editors: 'Editors',
  Fabs: 'Actions & navigation',
  Feedback: 'Feedback & overlays',
  Fields: 'Inputs & selection',
  Filtering: 'Inputs & selection',
  Focus: 'Foundations',
  Icons: 'Foundations',
  Iconbuttons: 'Actions & navigation',
  Inputs: 'Inputs & selection',
  Labs: 'Labs',
  Lists: 'Data & SCL',
  Menus: 'Actions & navigation',
  'Navigation Drawer': 'Actions & navigation',
  Progress: 'Feedback & overlays',
  Radios: 'Inputs & selection',
  Ripples: 'Foundations',
  'Scl Inputs': 'Inputs & selection',
  Selects: 'Inputs & selection',
  Sliders: 'Inputs & selection',
  Switchs: 'Inputs & selection',
  Tabs: 'Actions & navigation',
  Textfields: 'Inputs & selection',
  Tree: 'Data & SCL',
  'Tree Grid': 'Data & SCL',
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isStoryIndexEntry(value: unknown): value is StoryIndexEntry {
  if (!isRecord(value)) {
    return false;
  }

  return (
    typeof value['id'] === 'string' &&
    typeof value['name'] === 'string' &&
    typeof value['title'] === 'string' &&
    (value['type'] === 'docs' || value['type'] === 'story') &&
    (value['tags'] === undefined ||
      (Array.isArray(value['tags']) &&
        value['tags'].every(tag => typeof tag === 'string')))
  );
}

function readStoryIndex(value: unknown): StoryIndex {
  if (!isRecord(value) || !isRecord(value['entries'])) {
    throw new Error('Storybook returned an invalid story index.');
  }

  const entries: Record<string, StoryIndexEntry> = {};
  for (const [id, entry] of Object.entries(value['entries'])) {
    if (!isStoryIndexEntry(entry)) {
      throw new Error('Storybook story index contains an invalid entry.');
    }
    entries[id] = entry;
  }

  return { entries };
}

function categoryFor(title: string): string {
  const group = title.split('/')[0].trim();
  return categoryByTitle[group] ?? 'Other components';
}

function createSections(index: StoryIndex): ComponentSection[] {
  const entries = Object.values(index.entries);
  const docsEntries = entries.filter(
    entry => entry.type === 'docs' && entry.tags?.includes('autodocs'),
  );
  const stories = entries.filter(entry => entry.type === 'story');
  const sections = new Map<string, ComponentEntry[]>();

  for (const docs of docsEntries) {
    const componentStories = stories.filter(
      story => story.title === docs.title,
    );
    const story =
      componentStories.find(item => item.name === 'Default') ??
      componentStories[0];
    if (!story) {
      continue;
    }

    const category = categoryFor(docs.title);
    const titleParts = docs.title.split('/');
    const component: ComponentEntry = {
      docs,
      story,
      category,
      label: titleParts[titleParts.length - 1].trim(),
    };
    const section = sections.get(category) ?? [];
    section.push(component);
    sections.set(category, section);
  }

  return [...sections.entries()]
    .map(([title, sectionEntries]) => ({
      title,
      entries: sectionEntries.sort((a, b) => a.label.localeCompare(b.label)),
    }))
    .sort(
      (a, b) => sectionOrder.indexOf(a.title) - sectionOrder.indexOf(b.title),
    );
}

function storybookUrl(path: string): string {
  const url = new URL('./', document.baseURI);
  url.searchParams.set('path', path);
  return `${url.pathname}${url.search}`;
}

function previewUrl(storyId: string, palette: string): string {
  const url = new URL('iframe.html', document.baseURI);
  url.searchParams.set('id', storyId);
  url.searchParams.set('viewMode', 'story');
  url.searchParams.set('globals', `palette:${palette}`);
  return url.href;
}

function renderEntry(entry: ComponentEntry, palette: string) {
  const docsUrl = storybookUrl(`/docs/${entry.docs.id}`);
  const storyUrl = storybookUrl(`/story/${entry.story.id}`);

  return html`<article>
    <header>
      <h3><a href=${docsUrl} target="_top">${entry.label}</a></h3>
      <span>${entry.story.name}</span>
    </header>
    <iframe
      src=${previewUrl(entry.story.id, palette)}
      title="${entry.label} — ${entry.story.name}"
      loading="lazy"
    ></iframe>
    <footer>
      <a href=${docsUrl} target="_top">Documentation</a>
      <a href=${storyUrl} target="_top">Open story</a>
    </footer>
  </article>`;
}

class ComponentCatalog extends LitElement {
  @property({ type: String })
  palette = 'solarized-light';

  @state()
  private sections: ComponentSection[] = [];

  @state()
  private loading = true;

  @state()
  private error?: string;

  override firstUpdated(): void {
    void this.loadStoryIndex();
  }

  private async loadStoryIndex(): Promise<void> {
    this.loading = true;
    this.error = undefined;

    try {
      const indexUrl = new URL('index.json', document.baseURI);
      const response = await fetch(indexUrl);
      if (!response.ok) {
        throw new Error(`Unable to load Storybook index (${response.status}).`);
      }

      this.sections = createSections(readStoryIndex(await response.json()));
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : 'Unable to load the Storybook component catalog.';
    } finally {
      this.loading = false;
    }
  }

  override render() {
    if (this.loading) {
      return html`<p role="status">Loading component catalog…</p>`;
    }

    if (this.error) {
      return html`<p role="alert">${this.error}</p>
        <button @click=${() => this.loadStoryIndex()}>Retry</button>`;
    }

    return html`
      <main>
        ${this.sections.map(
          section => html`
            <section>
              <h2>${section.title}</h2>
              <div class="grid">
                ${section.entries.map(entry =>
                  renderEntry(entry, this.palette),
                )}
              </div>
            </section>
          `,
        )}
      </main>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      padding: 24px;
    }

    section + section {
      margin-top: 32px;
    }

    h2 {
      margin: 0 0 16px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
      gap: 16px;
    }

    article {
      min-width: 0;
      overflow: hidden;
      border: 1px solid var(--md-sys-color-outline-variant, #cac4d0);
      border-radius: 12px;
      background: var(--md-sys-color-surface, #fef7ff);
    }

    header,
    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 16px;
    }

    h3 {
      margin: 0;
      font-size: 1rem;
    }

    header span {
      color: var(--md-sys-color-on-surface-variant, #49454f);
      font-size: 0.875rem;
    }

    iframe {
      display: block;
      width: 100%;
      height: 180px;
      border: 0;
      background: var(--md-sys-color-surface, #fef7ff);
    }

    a {
      color: var(--md-sys-color-primary, #6750a4);
    }

    footer {
      justify-content: flex-start;
      border-top: 1px solid var(--md-sys-color-outline-variant, #cac4d0);
    }

    @media (max-width: 599px) {
      :host {
        padding: 16px;
      }
    }
  `;
}

const meta: Meta = {
  title: 'Open SCD/Component Catalog',
  decorators: [scopedWcDecorator],
  parameters: {
    layout: 'fullscreen',
    scopedElements: {
      'oscd-component-catalog': ComponentCatalog,
    },
  },
  render: () => {
    const [globals] = useGlobals();
    const palette =
      typeof globals['palette'] === 'string'
        ? globals['palette']
        : 'solarized-light';

    return html`<oscd-component-catalog
      .palette=${palette}
    ></oscd-component-catalog>`;
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
