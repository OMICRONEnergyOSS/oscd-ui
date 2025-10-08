import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';

// List of components to exclude
const colouredList = [
  'md-test-table',
  'md-navigation-drawer',
  'md-navigation-drawer-modal',
];

const materialRepoPath = '../oscd-material-web-base';
const targetSourcePath = './';

const customElementsJsonPath =
  './node_modules/@omicronenergy/oscd-material-web-base/custom-elements.json';

const generatedMarker = 'GENERATED SOURCE FILE. DO NOT MODIFY';
// Copyright block to append
const generatedComment = `
/*
 * ${generatedMarker}.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */

`;

// Copyright block to append
const omicronCopyright = `

/**
 * @license
 * Copyright 2025 Omicron Energy GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
`;

/**
 * Writes content to a file only if it contains the GENERATED SOURCE FILE comment.
 * If the file does not exist, it will be created.
 * If the file exists but does not contain the comment, it will not be overwritten.
 * @param {string} targetPath - The path to the file to write.
 * @param {string} content - The content to write to the file.
 */
function writeFileIfPermitted(targetPath: string, content: string) {
  if (!existsSync(targetPath)) {
    writeFileSync(targetPath, generatedComment + content);
    return;
  }
  const current = readFileSync(targetPath, 'utf8');
  if (current.includes(generatedMarker)) {
    writeFileSync(targetPath, generatedComment + content);
  } else {
    console.log(
      `File '${targetPath}' does not contain the required comment, so it was not updated.`,
    );
  }
}

function kebabToPascal(str: string) {
  return str
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

function capitalizeWords(str: string) {
  return str.replace(/(^\w|\s\w|-\w|\/\w)/g, m =>
    m.replace(/[-/]/, ' ').toUpperCase(),
  );
}

function pluralize(word: string) {
  // Simple pluralization: add 's' unless it already ends with 's'
  return word.endsWith('s') ? word : word + 's';
}

function modulePathToTitle(modulePath: string) {
  // Split by '/', pluralize the first segment, capitalize all words, join with ' / '
  const segments = modulePath.split('/');
  if (segments.length === 0) {
    return '';
  }
  segments[0] = pluralize(segments[0]);
  return segments
    .map(s => capitalizeWords(s.replace(/-/g, ' ')).trim())
    .join(' / ');
}

// function kebabToCamel(str: string) {
//   const pascal = kebabToPascal(str);
//   return pascal.charAt(0).toLowerCase() + pascal.slice(1);
// }

function fixImportPaths(content: string, modulePath: string) {
  // Replace ./ and ../ imports with @omicronenergy/oscd-material-web-base/...
  const fixedRelativePaths = content.replace(
    /from\s+['"](\.\/|\.\.\/)([^'"]+)['"]/g,
    (_match, dot, relPath) => {
      let base = '@omicronenergy/oscd-material-web-base/';

      if (modulePath.includes('/') && dot !== '../') {
        base += modulePath.substring(0, modulePath.lastIndexOf('/') + 1);
      }
      return `from '${base}${relPath}'`;
    },
  );
  return fixedRelativePaths.replace(
    /@material\/web\//g,
    '@omicronenergy/oscd-material-web-base/',
  );
}

function updateHeader(content: string) {
  // Find the first copyright block and append Omicron's after it
  const copyrightRegex = /\/\*\*[\s\S]*?Copyright[\s\S]*?\*\//;
  const match = content.match(copyrightRegex);
  if (match) {
    return content.replace(match[0], match[0] + '\n' + omicronCopyright.trim());
  }
  // If not found, just prepend
  return omicronCopyright.trim() + '\n' + content;
}

function updateJSDoc(jsdoc: string, newTagName: string) {
  // Remove @description, add tag name at top
  let lines = jsdoc.split('\n');
  lines = lines.filter(line => !line.includes('@description'));
  lines.splice(1, 0, ` * @tagname ${newTagName}`);
  return lines.join('\n');
}

function generateUnitTest(
  oscdClassName: string,
  oscdTagName: string,
  pascalName: string,
) {
  return `
import { expect, fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import { spy, SinonSpy } from 'sinon';

describe('${oscdClassName} side-effect free', () => {
  let defineSpy: SinonSpy;
  // let harness: ScopingTestHarness;

  beforeEach(async () => {
    // Spy on customElements.define before dynamic import
    defineSpy = spy(window.customElements, 'define');
  });

  afterEach(() => {
    // Restore the spy
    defineSpy.restore();
    // Clean up DOM
    fixtureCleanup();
  });

  it('should not call customElements.define as a side effect during import/instantiation', async () => {
    // Dynamically import the component
    const { ${oscdClassName} } = await import('./${oscdClassName}.js');

    // Instantiate the component
    const oscd${pascalName} = await fixture(
      html\`<${oscdTagName}></${oscdTagName}>\`,
      { scopedElements: { '${oscdTagName}': ${oscdClassName} } },
    );

    // Verify it's upgraded (not just a dummy tag)
    expect(oscd${pascalName}.shadowRoot).not.to.be.null;
    expect(oscd${pascalName}.constructor.name).to.equal('${oscdClassName}');

    const globallyDefinedElements = defineSpy.args
      .filter(
        ([tagName]) => !tagName.startsWith('scoped-elements-test-wrapper'),
      )
      .map(([tagName]) => tagName);

    expect(globallyDefinedElements).to.deep.equal([]);
  });
});
`;
}

function generateStorybookStory(
  storybookTitle: string,
  oscdClassName: string,
  oscdTagName: string,
  pascalName: string,
) {
  // Import path for the Oscd* component (relative to the story file)
  const importPath = `./Oscd${pascalName}.js`;

  const storyContent = `
import type { StoryObj } from '@storybook/web-components-vite';
import './${oscdTagName}.js';
import { ${oscdClassName} } from '${importPath}';
import { getStorybookMeta } from '@/utils/storybook/getStorybookMeta.js';

const { args, argTypes, meta } = getStorybookMeta<${oscdClassName}>({
  tagName: '${oscdTagName}',
});

export default {
  title: '${storybookTitle}',
  tags: ['autodocs'],
  ...meta,
};

export const Default: StoryObj = {
  argTypes,
  args,
};
`;

  return storyContent;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function processComponent(module: any) {
  const tagName = module.declarations[0].tagName; // e.g. md-elevated-button
  const className = module.declarations[0].name; // e.g. MdElevatedButton
  const modulePath = module.path.replace(/\.ts$/, ''); // e.g. button/elevated-button

  // Read original source file
  const srcPath = join(materialRepoPath, module.path);
  let content = readFileSync(srcPath, 'utf8');

  // Fix import paths
  content = fixImportPaths(content, modulePath);

  // Remove import { customElement }
  content = content.replace(
    /import\s+\{\s*customElement\s*\}\s+from\s+['"][^'"]+['"];\n?/g,
    '',
  );

  // Remove @customElement decorator
  content = content.replace(/@customElement\([^)]+\)\s*/g, '');

  // Replace class and tag names
  const oscdClassName = className.replace(/^Md/, 'Oscd');
  const oscdTagName = tagName.replace(/^md-/, 'oscd-');
  content = content.replace(new RegExp(className, 'g'), oscdClassName);
  content = content.replace(new RegExp(tagName, 'g'), oscdTagName);

  // Add ScopedElementsMixin import if not already present
  // if (!content.includes('import { ScopedElementsMixin }')) {
  //   // Find the last import statement and add the ScopedElementsMixin import after it
  //   const lastImportMatch = content.match(
  //     /import\s+[^;]+from\s+['"][^'"]+['"];[\s]*\n/g,
  //   );
  //   if (lastImportMatch) {
  //     const lastImport = lastImportMatch[lastImportMatch.length - 1];
  //     const scopedElementsImport =
  //       "import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';\n";
  //     content = content.replace(lastImport, lastImport + scopedElementsImport);
  //   }
  // }

  // // Find and modify class declaration to wrap extended class with ScopedElementsMixin
  // const classDeclarationRegex = new RegExp(
  //   `(export\\s+class\\s+${oscdClassName}\\s+extends\\s+)([^\\s{]+)(\\s*{)`,
  //   'g',
  // );
  // content = content.replace(
  //   classDeclarationRegex,
  //   (match, beforeExtends, extendedClass, afterExtends) => {
  //     // Check if ScopedElementsMixin is already applied
  //     if (extendedClass.includes('ScopedElementsMixin')) {
  //       return match; // Already wrapped, don't modify
  //     }
  //     return `${beforeExtends}ScopedElementsMixin(${extendedClass})${afterExtends}`;
  //   },
  // );

  // // Insert static scopedElements block after class declaration
  // const classBodyRegex = new RegExp(
  //   `(export\\s+class\\s+${oscdClassName}\\s+extends\\s+ScopedElementsMixin\\([^)]+\\)\\s*{)`,
  //   'g',
  // );
  // content = content.replace(classBodyRegex, match => {
  //   // Check if scopedElements is already present
  //   const classEndRegex = new RegExp(`${match}[\\s\\S]*?(?=export\\s+class|$)`);
  //   const classContent = content.match(classEndRegex);
  //   if (classContent && classContent[0].includes('static scopedElements')) {
  //     return match; // Already has scopedElements, don't modify
  //   }

  //   const scopedElementsBlock = `
  // static scopedElements = {
  //   //  "md-ripple": MdRipple,
  //   //  "md-focus-ring": MdFocusRing,
  //   //  "md-elevation": MdElevation,
  // };`;

  //   return match + scopedElementsBlock;
  // });

  // Update global HTMLElementTagNameMap
  content = content.replace(
    /interface HTMLElementTagNameMap\s*{[^}]+}/,
    `interface HTMLElementTagNameMap {
      '${oscdTagName}': ${oscdClassName};
    }`,
  );

  // Update JSDoc for the class
  const jsdocBlocks = content.match(/\/\*\*[\s\S]*?\*\//g);

  if (jsdocBlocks) {
    for (const block of jsdocBlocks) {
      if (block.includes('@final')) {
        content = content.replace(block, updateJSDoc(block, oscdTagName));
        break; // Only replace the first matching block
      }
    }
  }

  // Append Omicron copyright
  content = updateHeader(content);

  // Write Oscd* scoped component
  const pascalName = kebabToPascal(tagName.replace(/^md-/, ''));
  const scopedFileName = `Oscd${pascalName}.ts`;
  const componentTargetPath = join(targetSourcePath, dirname(modulePath));
  mkdirSync(join(componentTargetPath), { recursive: true });
  writeFileIfPermitted(join(componentTargetPath, scopedFileName), content);

  // Write oscd-* registrar component
  const registrarContent = `import { Oscd${pascalName} } from './Oscd${pascalName}.js';

customElements.define('${oscdTagName}', Oscd${pascalName});
export { Oscd${pascalName} };
`;
  writeFileIfPermitted(
    join(componentTargetPath, `${oscdTagName}.ts`),
    registrarContent,
  );

  // Write Storybook story
  const storybookTitle = modulePathToTitle(modulePath); // e.g. "Buttons"
  const storyContent = generateStorybookStory(
    storybookTitle,
    oscdClassName,
    oscdTagName,
    pascalName,
  );

  writeFileIfPermitted(
    join(componentTargetPath, `Oscd${pascalName}.stories.ts`),
    storyContent,
  );

  const unitTestContent = generateUnitTest(
    oscdClassName,
    oscdTagName,
    pascalName,
  );

  writeFileIfPermitted(
    join(componentTargetPath, `Oscd${pascalName}.spec.ts`),
    unitTestContent,
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function listExports(module: any) {
  const tagName = module.declarations[0].tagName; // e.g. md-elevated-button
  const className = module.declarations[0].name; // e.g. MdElevatedButton
  const modulePath = module.path.replace(/\.ts$/, ''); // e.g. button/elevated-button

  const oscdClassName = className.replace(/^Md/, 'Oscd');
  const oscdTagName = tagName.replace(/^md-/, 'oscd-');

  const scopedFileName = `${oscdClassName}.js`;
  const unScopedFileName = `${oscdTagName}.js`;

  const targetDir = dirname(modulePath);

  return `"./${targetDir}/${scopedFileName}": "./dist/${targetDir}/${scopedFileName}",
"./${targetDir}/${unScopedFileName}": "./dist/${targetDir}/${unScopedFileName}",`;
}

// Main
let packageJsonExports = '';
const customElements = JSON.parse(readFileSync(customElementsJsonPath, 'utf8'));
for (const module of customElements.modules) {
  if (module.kind === 'javascript-module' && module.declarations) {
    for (const decl of module.declarations) {
      if (
        decl.tagName &&
        decl.tagName.startsWith('md-') &&
        !colouredList.includes(decl.tagName)
      ) {
        processComponent(module);
        packageJsonExports += listExports(module);
      }
    }
  }
}

writeFileSync('./packageExports.json', packageJsonExports);
