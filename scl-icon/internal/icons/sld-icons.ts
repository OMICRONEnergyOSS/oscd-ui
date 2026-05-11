import { svg, SVGTemplateResult } from 'lit';

// ─── Action icons (used in SLD context menus) ───

/** Four-direction move/drag arrow — viewBox 0 96 960 960 */
export const sld_movePath = svg`<path d="M480 976 310 806l57-57 73 73V616l-205-1 73 73-58 58L80 576l169-169 57 57-72 72h206V330l-73 73-57-57 170-170 170 170-57 57-73-73v206l205 1-73-73 58-58 170 170-170 170-57-57 73-73H520l-1 205 73-73 58 58-170 170Z"/>`;

/** General resize — dots at all four corners with L-shape connectors */
export const sld_resizePath = svg`<path
  d="M120 616v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160V296H600v-80h240v240h-80ZM120 936V696h80v160h160v80H120Z"
/>`;

/** Top-left resize handle */
export const sld_resizeTLPath = svg`<path
  d="m 120,616 v -80 h 80 v 80 z m 0,-160 v -80 h 80 v 80 z m 0,-160 v -80 h 80 v 80 z m 160,0 v -80 h 80 v 80 z m 160,0 v -80 h 80 v 80 z m 320,0 H 600 V 216 H 840 Z M 120,936 V 696 h 80 v 160 z" />`;

/** Bottom-right resize handle */
export const sld_resizeBRPath = svg`<path
  d="m 440,936 v -80 h 80 v 80 z m 160,0 v -80 h 80 v 80 z m 160,0 v -80 h 80 v 80 z m 0,-160 v -80 h 80 v 80 z m 0,-160 v -80 h 80 v 80 z m 0,-160 V 296 l 80,-80 v 240 z m -640,480 80,-80 h 160 v 80 z" />`;

// ─── SLD equipment icons (simplified single-line-diagram style) ───
// These use a 0–25 viewBox with stroke-based rendering, designed for
// the SLD grid. They differ visually from the filled/rounded oscd-ui
// equipment icons which are designed for navigation/tree contexts.

export const sld_equipmentCAB = svg`<path d="M 9.4,4.2 H 15.6 L 12.5,8.3 Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="m 12.5,8.3 v 9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="m 9.4,21.3 h 6.2 l -3.1,-4.1 z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />`;

export const sld_equipmentCAP = svg`<path d="M 6.5,10.1 H 18.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M 12.5,4 V 10.1" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M 6.5,14.9 H 18.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M 12.5,14.9 V 21" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />`;

export const sld_equipmentCBR = svg`<line x1="12.5" y1="21" x2="4" y2="5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><line x1="9.5" y1="1" x2="15.5" y2="7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><line x1="9.5" y1="7" x2="15.5" y2="1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />`;

export const sld_equipmentCTR = svg`<line x1="12.5" y1="4" x2="12.5" y2="21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><circle cx="12.5" cy="12.5" r="7.5" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" />`;

export const sld_equipmentDIS = svg`<path d="M 12.5 21 L 4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M 8 4 L 17 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />`;

export const sld_equipmentGEN = svg`<path d="m 16.2,12.5 v 4.2 q -0.2,0.2 -0.6,0.6 -0.4,0.4 -1.1,0.7 -0.7,0.3 -1.8,0.3 -1.8,0 -2.9,-1.2 -1.1,-1.2 -1.1,-3.6 v -2.1 q 0,-2.4 1,-3.6 1,-1.1 2.9,-1.1 1.7,0 2.6,0.9 0.9,0.9 1,2.6 h -1.4 q -0.1,-1.1 -0.6,-1.6 -0.5,-0.6 -1.5,-0.6 -1.3,0 -1.8,0.9 -0.5,0.9 -0.5,2.6 v 2.1 q 0,1.8 0.7,2.7 0.7,0.9 1.9,0.9 1,0 1.4,-0.3 0.4,-0.3 0.6,-0.5 v -2.6 h -2.1 v -1.2 z" stroke="currentColor" fill="currentColor" stroke-width="0.3" stroke-linecap="round" />`;

export const sld_equipmentIFL = svg`<polygon points="4,4 12.5,21 21,4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" />`;

export const sld_equipmentLIN = svg`<path d="M 12.5,4 V 21" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="m 10.3,12.5 4.3,-2.5" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="m 10.3,15 4.3,-2.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />`;

export const sld_equipmentMOT = svg`<path d="m 12.5,15.5 2.3,-7.8 h 1.4 v 9.6 h -1.1 v -3.7 l 0.1,-3.7 -2.3,7.4 h -0.9 L 9.8,9.8 9.9,13.6 v 3.7 H 8.8 V 7.7 h 1.4 z" stroke="currentColor" fill="currentColor" stroke-width="0.3" stroke-linecap="round" />`;

export const sld_equipmentREA = svg`<path d="m 4.5,12.5 h 8 V 4" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" /><path d="m 4.5,12.5 a 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 8,8 0 0 1 -8,8" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" /><path d="M 12.5,20.5 V 21" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" />`;

export const sld_equipmentRES = svg`<rect y="4" x="8.5" height="17" width="8" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" />`;

export const sld_equipmentSAR = svg`<path d="M 12.5,4 V 8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="m 12.5,21 v 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><line x1="10" y1="24.25" x2="15" y2="24.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M 11.2,8 12.5,11 13.8,8 Z" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" /><rect y="4" x="8.5" height="17" width="8" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" />`;

export const sld_equipmentSMC = svg`<path d="m 16.6,12.5 c -0.7,1.4 -1.3,2.8 -2.1,2.8 -1.5,0 -2.6,-5.6 -4.1,-5.6 -0.7,0 -1.4,1.4 -2.1,2.8" stroke="currentColor" fill="none" stroke-width="1.2" stroke-linecap="round" />`;

export const sld_equipmentVTR = svg`<circle cx="12.5" cy="9.5" r="5.25" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" /><circle cx="12.5" cy="15.5" r="5.25" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" />`;

export const sld_defaultEquipment = svg`<circle cx="12.5" cy="12.5" r="11" stroke-width="1.5" stroke="currentColor" fill="none" /><path d=" M 7.5 17.5 L 12 13 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" /><path d="M 11 7 L 10 8 C 5 13, 11 20, 17 15 L 18 14 Z" fill="currentColor" stroke="currentColor" stroke-linejoin="round" /><path d=" M 13 9 L 16 6 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" /><path d=" M 16 12 L 19 9 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />`;

export const sld_eqRing = svg`<circle cx="12.5" cy="12.5" r="8.5" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" />`;

// ─── SLD structural icons (voltage level, bay pictograms) ───

export const sld_voltageLevel = svg`<path d="M 4 4 L 12.5 21 L 21 4" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" />`;

export const sld_bay = svg`<path d="M 3 2 L 22 2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" /><path d="M 3 5 L 22 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" /><path d="M 7 2 L 7 7.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" /><path d="M 18 5 L 18 7.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" /><path d="M 5.5 8.5 L 7 11 L 7 13 L 18 13 L 18 11 L 16.5 8.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" /><path d="M 12.5 13 L 12.5 15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" /><path d="M 11 16 L 12.5 18.5 L 12.5 23" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" /><path d="M 10.5 21 L 12.5 23 L 14.5 21" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" />`;

// ─── SLD transformer winding icons ───

export const sld_ptr1W = svg`<circle fill="none" cx="12.5" cy="12.5" r="7" stroke="currentColor" stroke-width="1.1"/>`;

export const sld_ptr2W = svg`<circle fill="none" cx="12.5" cy="9.5" r="7" stroke="currentColor" stroke-width="1.4"/><circle fill="none" cx="12.5" cy="15.5" r="7" stroke="currentColor" stroke-width="1.4"/>`;

export const sld_ptr3W = svg`<circle fill="none" cx="12.5" cy="9.5" r="7" stroke="currentColor" stroke-width="1.4"/><circle fill="none" cx="15" cy="15.5" r="7" stroke="currentColor" stroke-width="1.4"/><circle fill="none" cx="10" cy="15.5" r="7" stroke="currentColor" stroke-width="1.4"/>`;

export const sld_ptr1WAuto = svg`<circle fill="none" cx="12.5" cy="12.5" r="7" stroke="currentColor" stroke-width="1.1"/><path fill="none" d="M 12.5 5.5 C 5 5.5, 4 10, 3 12.5" stroke="currentColor" stroke-width="1.1"/>`;

export const sld_ptr2WAuto = svg`<circle fill="none" cx="12.5" cy="9.5" r="7" stroke="currentColor" stroke-width="1.4"/><path fill="none" d="M 12.5 2.5 C 5 2.5, 4 7, 3 9.5" stroke="currentColor" stroke-width="1.4"/><circle fill="none" cx="12.5" cy="15.5" r="7" stroke="currentColor" stroke-width="1.4"/>`;

export const sld_zigZag = svg`<line x1="12.5" y1="12.5" x2="12.5" y2="9.4" stroke="currentColor" stroke-width="1.1"/><line transform="rotate(240 12.5 9.4)" x1="12.5" y1="12.5" x2="12.5" y2="9.4" stroke="currentColor" stroke-width="1.1"/><g transform="rotate(120 12.5 12.5)"><line x1="12.5" y1="12.5" x2="12.5" y2="9.4" stroke="currentColor" stroke-width="1.1"/><line transform="rotate(240 12.5 9.4)" x1="12.5" y1="12.5" x2="12.5" y2="9.4" stroke="currentColor" stroke-width="1.1"/></g><g transform="rotate(240 12.5 12.5)"><line x1="12.5" y1="12.5" x2="12.5" y2="9.4" stroke="currentColor" stroke-width="1.1"/><line transform="rotate(240 12.5 9.4)" x1="12.5" y1="12.5" x2="12.5" y2="9.4" stroke="currentColor" stroke-width="1.1"/></g>`;

// ─── SLD IED icon ───

export const sld_ied = svg`<path fill="currentColor" d="M22 9V7h-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2h2v-2h-2v-2h2v-2h-2V9zm-4 10H4V5h14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"/>`;

// ─── Wrapped full-SVG versions for SCL_ICONS registry ───

function wrapPath960(path: SVGTemplateResult): SVGTemplateResult {
  return svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">${path}</svg>`;
}

function wrapPath25(path: SVGTemplateResult): SVGTemplateResult {
  return svg`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">${path}</svg>`;
}

/** All SLD icons wrapped as complete SVGs, ready for SCL_ICONS registration. */
export const SLD_ICONS: Record<string, SVGTemplateResult> = {
  // Action icons
  sld_move: wrapPath960(sld_movePath),
  sld_resize: wrapPath960(sld_resizePath),
  sld_resizeTL: wrapPath960(sld_resizeTLPath),
  sld_resizeBR: wrapPath960(sld_resizeBRPath),

  // Equipment icons
  sld_equipmentCAB: wrapPath25(sld_equipmentCAB),
  sld_equipmentCAP: wrapPath25(sld_equipmentCAP),
  sld_equipmentCBR: wrapPath25(sld_equipmentCBR),
  sld_equipmentCTR: wrapPath25(sld_equipmentCTR),
  sld_equipmentDIS: wrapPath25(sld_equipmentDIS),
  sld_equipmentGEN: wrapPath25(sld_equipmentGEN),
  sld_equipmentIFL: wrapPath25(sld_equipmentIFL),
  sld_equipmentLIN: wrapPath25(sld_equipmentLIN),
  sld_equipmentMOT: wrapPath25(sld_equipmentMOT),
  sld_equipmentREA: wrapPath25(sld_equipmentREA),
  sld_equipmentRES: wrapPath25(sld_equipmentRES),
  sld_equipmentSAR: wrapPath25(sld_equipmentSAR),
  sld_equipmentSMC: wrapPath25(sld_equipmentSMC),
  sld_equipmentVTR: wrapPath25(sld_equipmentVTR),
  sld_defaultEquipment: wrapPath25(sld_defaultEquipment),
  sld_eqRing: wrapPath25(sld_eqRing),

  // Structural icons
  sld_voltageLevel: wrapPath25(sld_voltageLevel),
  sld_bay: wrapPath25(sld_bay),

  // Transformer winding icons
  sld_ptr1W: wrapPath25(sld_ptr1W),
  sld_ptr2W: wrapPath25(sld_ptr2W),
  sld_ptr3W: wrapPath25(sld_ptr3W),
  sld_ptr1WAuto: wrapPath25(sld_ptr1WAuto),
  sld_ptr2WAuto: wrapPath25(sld_ptr2WAuto),
  sld_zigZag: wrapPath25(sld_zigZag),

  // IED
  sld_ied: wrapPath25(sld_ied),
};
