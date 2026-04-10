import type { StoryObj } from '@storybook/web-components-vite';
import './oscd-scl-editor.js';
import type { OscdSclEditor } from './OscdSclEditor.js';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<OscdSclEditor>({
  tagName: 'oscd-scl-editor',
});

export default {
  ...meta,
  title: 'Editors / SCL Editor',
  tags: ['autodocs'],
};

const sampleXml = `<Substation name="A1" desc="test substation">
  <VoltageLevel name="V1" desc="110kV" nomFreq="50" numPhases="3">
    <Voltage unit="V" multiplier="k">110</Voltage>
  </VoltageLevel>
</Substation>`;

export const Default: StoryObj = {
  argTypes,
  args: {
    ...args,
    value: sampleXml,
    style: 'height: 400px; width: 600px;',
  },
};

export const WithToolbar: StoryObj = {
  argTypes,
  args: {
    ...args,
    value: sampleXml,
    toolbar: true,
    style: 'height: 400px; width: 600px;',
  },
};

const invalidXml = `<Substation name="A1" desc="test substation">
  <VoltageLevel name="V1" desc="110kV"
</Substation>`;

export const InvalidXml: StoryObj = {
  argTypes,
  args: {
    ...args,
    value: invalidXml,
    style: 'height: 400px; width: 600px;',
  },
};

export const Empty: StoryObj = {
  argTypes,
  args: {
    ...args,
    style: 'height: 400px; width: 600px;',
  },
};
