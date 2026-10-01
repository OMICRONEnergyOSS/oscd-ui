import { expect } from '@open-wc/testing';

import { dataTypeTemplateIcons, SCL_ICONS, toSVG } from './scl-icons.js';

describe('SCL icon registry', () => {
  it('resolves SCL and Material icon names', () => {
    expect(toSVG('elementIcon')).to.equal(SCL_ICONS['elementIcon']);
    expect(toSVG('editIcon')).to.equal(SCL_ICONS['editIcon']);
  });

  it('returns undefined for an unknown icon', () => {
    expect(toSVG('not-an-icon')).to.be.undefined;
  });

  it('provides icons for SCL data type templates', () => {
    expect(dataTypeTemplateIcons['DAType']).to.exist;
    expect(dataTypeTemplateIcons['DOType']).to.exist;
    expect(dataTypeTemplateIcons['EnumType']).to.exist;
    expect(dataTypeTemplateIcons['LNodeType']).to.exist;
  });
});
