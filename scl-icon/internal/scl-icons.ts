/**
 * @license
 * Copyright 2026 OMICRON electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */

import { svg, type SVGTemplateResult } from 'lit';

import * as compare from './icons/compare.js';
import * as icons from './icons/icons.js';
import * as iedIcons from './icons/ied-icons.js';
import * as lnode from './icons/lnode.js';

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

export const SCL_ICONS: Record<string, SVGTemplateResult> = {
  elementIcon: compare.elementIcon,
  attributeIcon: compare.attributeIcon,
  contentIcon: compare.contentIcon,
  editIcon: icons.editIcon,
  gooseIcon: icons.gooseIcon,
  reportIcon: icons.reportIcon,
  smvIcon: icons.smvIcon,
  dataSetIcon: icons.dataSetIcon,
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
  accessPointIcon: iedIcons.accessPointIcon,
  serverIcon: iedIcons.serverIcon,
  logicalDeviceIcon: iedIcons.logicalDeviceIcon,
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

export function toSVG(name: string): SVGTemplateResult | undefined {
  return SCL_ICONS[name];
}
