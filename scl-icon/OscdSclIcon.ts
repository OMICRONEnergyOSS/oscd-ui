/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { html, LitElement, svg, SVGTemplateResult } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import * as compare from './internal/icons/compare.js';
import * as icons from './internal/icons/icons.js';
import * as iedIcons from './internal/icons/ied-icons.js';
import * as lnode from './internal/icons/lnode.js';
import { OscdIcon } from '../icon/OscdIcon.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-scl-icon': OscdSclIcon;
  }
}

export const SCL_ICONS: Record<string, SVGTemplateResult> = {
  // From compare.ts
  elementIcon: compare.elementIcon,
  attributeIcon: compare.attributeIcon,
  contentIcon: compare.contentIcon,

  // From icons.ts
  editIcon: icons.editIcon,
  gooseIcon: icons.gooseIcon,
  reportIcon: icons.reportIcon,
  smvIcon: icons.smvIcon,
  logIcon: icons.logIcon,
  inputIcon: icons.inputIcon,
  clientIcon: icons.clientIcon,
  disconnect: icons.disconnect,
  networkConfigIcon: icons.networkConfigIcon,
  zeroLineIcon: icons.zeroLineIcon,
  voltageLevelIcon: icons.voltageLevelIcon,
  bayIcon: icons.bayIcon,
  disconnectorIcon: icons.disconnectorIcon,
  circuitBreakerIcon: icons.circuitBreakerIcon,
  currentTransformerIcon: icons.currentTransformerIcon,
  voltageTransformerIcon: icons.voltageTransformerIcon,
  earthSwitchIcon: icons.earthSwitchIcon,
  generalConductingEquipmentIcon: icons.generalConductingEquipmentIcon,
  connectivityNodeIcon: icons.connectivityNodeIcon,
  powerTransformerTwoWindingIcon: icons.powerTransformerTwoWindingIcon,
  openSCDIcon: icons.openSCDIcon,
  sizableSmvIcon: icons.sizableSmvIcon,
  sizableGooseIcon: icons.sizableGooseIcon,
  substationIcon: icons.substationIcon,
  lineIcon: icons.lineIcon,
  processIcon: icons.processIcon,
  transformerWindingIcon: icons.transformerWindingIcon,

  // From ied-icons.ts
  accessPointIcon: iedIcons.accessPointIcon,
  serverIcon: iedIcons.serverIcon,
  logicalDeviceIcon: iedIcons.logicalDeviceIcon,

  // From lnode.ts
  systemLogicalNode: lnode.systemLogicalNode,
  automationLogicalNode: lnode.automationLogicalNode,
  controlLogicalNode: lnode.controlLogicalNode,
  functionalLogicalNode: lnode.functionalLogicalNode,
  generalLogicalNode: lnode.generalLogicalNode,
  interfacingLogicalNode: lnode.interfacingLogicalNode,
  nonElectricalLogicalNode: lnode.nonElectricalLogicalNode,
  measurementLogicalNode: lnode.measurementLogicalNode,
  protectionLogicalNode: lnode.protectionLogicalNode,
  qualityLogicalNode: lnode.qualityLogicalNode,
  protectionRelatedLogicalNode: lnode.protectionRelatedLogicalNode,
  supervisionLogicalNode: lnode.supervisionLogicalNode,
  transformerLogicalNode: lnode.transformerLogicalNode,
  switchgearLogicalNode: lnode.switchgearLogicalNode,
  powerTransformerLogicalNode: lnode.powerTransformerLogicalNode,
  furtherPowerSystemEquipmentLogicalNode:
    lnode.furtherPowerSystemEquipmentLogicalNode,
  ...Object.keys(icons.pathsSVG).reduce(
    (acc, key) => {
      acc[key] = pathToSvg(key as iconType);
      return acc;
    },
    {} as Record<string, SVGTemplateResult>,
  ),
};

export type iconType =
  | 'action'
  | 'dAIcon'
  | 'dOIcon'
  | 'enumIcon'
  | 'info'
  | 'warning'
  | 'error'
  | 'reset'
  | 'reportIcon'
  | 'smvIcon'
  | 'gooseIcon'
  | 'lNIcon'
  | 'logIcon';

export type iconProperty = {
  width: number;
  height: number;
};

export const dataTypeTemplateIcons: Partial<Record<string, SVGTemplateResult>> =
  {
    DAType: pathToSvg('dAIcon'),
    DOType: pathToSvg('dOIcon'),
    EnumType: pathToSvg('enumIcon'),
    LNodeType: pathToSvg('lNIcon'),
  };

export const iconColors: { [key: string]: string } = {
  info: '--cyan',
  warning: '--yellow',
  error: '--red',
  action: '--blue',
};

export function pathToSvg(type: iconType): SVGTemplateResult {
  return svg`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 26.5 24"
    width="24"
  >
    ${icons.pathsSVG[type]}
  </svg> `;
}

// export function getFilterIcon(
//   type: iconType,
//   state: boolean,
// ): SVGTemplateResult {
//   if (type === 'reset') {
//     return svg``;
//   }
//   const height = iconProperties[type]?.height ?? 24;
//   const width = iconProperties[type]?.width ?? 24;
//   return svg`<svg
//     slot="${state ? 'onIcon' : 'offIcon'}"
//     xmlns="http://www.w3.org/2000/svg"
//     height="${height}"
//     viewBox="0 0 ${width} ${height}"
//     width="${width}"
//   >
//     ${icons.pathsSVG[type]}
//   </svg> `;
// }

/**
 * Returns an SVG template result for the given icon name.
 * @param name - The name of the icon to retrieve
 * @returns The SVG template result, or undefined if the icon doesn't exist
 */
export function toSVG(name: string): SVGTemplateResult | undefined {
  return SCL_ICONS[name];
}

/**
 * @tagname oscd-scl-icon
 * @summary SCL icon component.
 * @final
 * @suppress {visibility}
 */
export class OscdSclIcon extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'oscd-icon': OscdIcon,
    };
  }

  private _name = '';
  private _observer?: MutationObserver;

  // Read the text node (ligature-like API)
  override connectedCallback() {
    super.connectedCallback();
    this._updateName();

    // Observe changes to text content
    this._observer = new MutationObserver(() => {
      this._updateName();
    });

    this._observer.observe(this, {
      characterData: true,
      subtree: true,
      childList: true,
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._observer?.disconnect();
  }

  private _updateName() {
    const newName = (this.textContent || '').trim();
    if (newName !== this._name) {
      this._name = newName;
      this.requestUpdate();
    }
  }

  override render() {
    const svg = toSVG(this._name);
    if (!svg) {
      // Fallback: render the name for debugging (or a default icon)
      return html`<span>${this._name}</span>`;
    }
    return html`<oscd-icon>${svg}</oscd-icon>`;
  }
}
