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

// ─── SLD Icon Comparison Stories ───

const sldActionIcons = [
  'sld_move',
  'sld_resize',
  'sld_resizeTL',
  'sld_resizeBR',
];

const sldEquipmentPairs: Array<{
  sld: string;
  existing: string;
  label: string;
}> = [
  {
    sld: 'sld_equipmentCBR',
    existing: 'circuitBreakerIcon',
    label: 'Circuit Breaker (CBR)',
  },
  {
    sld: 'sld_equipmentDIS',
    existing: 'disconnectorIcon',
    label: 'Disconnector (DIS)',
  },
  {
    sld: 'sld_equipmentCTR',
    existing: 'currentTransformerIcon',
    label: 'Current Transformer (CTR)',
  },
  {
    sld: 'sld_equipmentVTR',
    existing: 'voltageTransformerIcon',
    label: 'Voltage Transformer (VTR)',
  },
  {
    sld: 'sld_defaultEquipment',
    existing: 'generalConductingEquipmentIcon',
    label: 'General Equipment',
  },
];

const sldStructuralPairs: Array<{
  sld: string;
  existing: string;
  label: string;
}> = [
  {
    sld: 'sld_voltageLevel',
    existing: 'voltageLevelIcon',
    label: 'Voltage Level',
  },
  { sld: 'sld_bay', existing: 'bayIcon', label: 'Bay' },
];

const sldEquipmentOnly = [
  'sld_equipmentCAB',
  'sld_equipmentCAP',
  'sld_equipmentGEN',
  'sld_equipmentIFL',
  'sld_equipmentLIN',
  'sld_equipmentMOT',
  'sld_equipmentREA',
  'sld_equipmentRES',
  'sld_equipmentSAR',
  'sld_equipmentSMC',
  'sld_eqRing',
];

const sldTransformerIcons = [
  'sld_ptr1W',
  'sld_ptr2W',
  'sld_ptr3W',
  'sld_ptr1WAuto',
  'sld_ptr2WAuto',
  'sld_zigZag',
];

function renderIconCell(name: string, size: number) {
  return html`<div
    style="display: inline-flex; flex-direction: column; align-items: center; margin: 8px; min-width: 80px;"
  >
    <div style="--md-icon-size: ${size}px;">
      <oscd-scl-icon>${name}</oscd-scl-icon>
    </div>
    <div
      style="margin-top: 4px; font-size: 11px; color: #666; word-break: break-all; text-align: center; max-width: 100px;"
    >
      ${name}
    </div>
  </div>`;
}

function renderComparisonRow(
  sldName: string,
  existingName: string,
  label: string,
  size: number,
) {
  return html`<tr>
    <td style="padding: 12px; font-weight: 500;">${label}</td>
    <td style="padding: 12px; text-align: center; --md-icon-size: ${size}px;">
      <oscd-scl-icon>${sldName}</oscd-scl-icon>
      <div style="font-size: 11px; color: #666; margin-top: 4px;">
        ${sldName}
      </div>
    </td>
    <td style="padding: 12px; text-align: center; --md-icon-size: ${size}px;">
      <oscd-scl-icon>${existingName}</oscd-scl-icon>
      <div style="font-size: 11px; color: #666; margin-top: 4px;">
        ${existingName}
      </div>
    </td>
  </tr>`;
}

export const SLDIconComparison: StoryObj = {
  argTypes: {
    size: {
      options: [24, 32, 48, 64],
      control: { type: 'number' },
      description: 'Icon size for comparison.',
    },
  },
  args: { size: 48 },
  render: ({ size }: typeof args) => html`
    <style>
      h3 {
        margin: 24px 0 8px;
        color: #333;
        border-bottom: 1px solid #ddd;
        padding-bottom: 4px;
      }
      table {
        border-collapse: collapse;
        width: 100%;
        margin-bottom: 24px;
      }
      th {
        text-align: left;
        padding: 8px 12px;
        background: #f5f5f5;
        border-bottom: 2px solid #ddd;
      }
      td {
        border-bottom: 1px solid #eee;
      }
    </style>

    <h3>Equipment Icons — SLD vs Existing</h3>
    <p style="color: #666; font-size: 13px;">
      SLD icons use stroke-based line drawings optimised for single-line
      diagrams. Existing icons use filled/rounded shapes designed for navigation
      trees and lists.
    </p>
    <table>
      <tr>
        <th>Equipment</th>
        <th>SLD (new)</th>
        <th>Existing</th>
      </tr>
      ${sldEquipmentPairs.map(p =>
        renderComparisonRow(p.sld, p.existing, p.label, size),
      )}
    </table>

    <h3>Structural Icons — SLD vs Existing</h3>
    <table>
      <tr>
        <th>Element</th>
        <th>SLD (new)</th>
        <th>Existing</th>
      </tr>
      ${sldStructuralPairs.map(p =>
        renderComparisonRow(p.sld, p.existing, p.label, size),
      )}
    </table>

    <h3>Action Icons (SLD-only, no existing equivalent)</h3>
    <div style="display: flex; flex-wrap: wrap;">
      ${sldActionIcons.map(name => renderIconCell(name, size))}
    </div>

    <h3>Equipment Icons (SLD-only, no existing equivalent)</h3>
    <div style="display: flex; flex-wrap: wrap;">
      ${sldEquipmentOnly.map(name => renderIconCell(name, size))}
    </div>

    <h3>Transformer Winding Icons (SLD-only)</h3>
    <div style="display: flex; flex-wrap: wrap;">
      ${sldTransformerIcons.map(name => renderIconCell(name, size))}
    </div>

    <h3>IED Icon — SLD vs Existing (disconnect)</h3>
    <table>
      <tr>
        <th>Element</th>
        <th>SLD (new)</th>
        <th>Existing</th>
      </tr>
      ${renderComparisonRow('sld_ied', 'disconnect', 'IED / Disconnect', size)}
    </table>
  `,
};

export const SLDAllIcons: StoryObj = {
  argTypes: {
    size: {
      options: [16, 24, 32, 48, 64, 128],
      control: { type: 'number' },
      description: 'Size of the icon.',
    },
  },
  args: { size: 32 },
  render: ({ size }: typeof args) => html`
    <div>
      ${Object.keys(SCL_ICONS)
        .filter(name => name.startsWith('sld_'))
        .map(
          iconName =>
            html`<div
              style="display: inline-block; text-align: center; margin: 16px;"
            >
              <div style="--md-icon-size: ${size}px;">
                <oscd-scl-icon>${iconName}</oscd-scl-icon>
              </div>
              <div style="margin-top: 8px; font-size: 12px;">${iconName}</div>
            </div>`,
        )}
    </div>
  `,
};
