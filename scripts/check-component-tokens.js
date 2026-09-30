import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const excludedDirectories = new Set([
  '.git',
  '.storybook',
  'coverage',
  'dist',
  'node_modules',
  'scripts',
]);
const excludedPaths = new Set([join('ace-editor', 'ace')]);
const excludedFiles = new Set(['oscd-md3-mappings.ts']);
const excludedSuffixes = [
  '.spec.ts',
  '.spec.js',
  '.stories.ts',
  '.stories.js',
  '.test.ts',
  '.test.js',
];
const forbiddenTokens = [
  '--oscd-theme-',
  '--oscd-base',
  '--oscd-primary',
  '--oscd-secondary',
  '--oscd-error',
  '--oscd-warning',
  '--oscd-text-font',
  '--oscd-icon-font',
  '--mdc-',
];
const violations = [];

function scanDirectory(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      const childDirectory = join(directory, entry.name);

      if (
        !excludedDirectories.has(entry.name) &&
        !excludedPaths.has(relative(root, childDirectory))
      ) {
        scanDirectory(childDirectory);
      }
      continue;
    }

    if (
      !entry.isFile() ||
      (!entry.name.endsWith('.ts') && !entry.name.endsWith('.js')) ||
      excludedFiles.has(entry.name) ||
      excludedSuffixes.some(suffix => entry.name.endsWith(suffix))
    ) {
      continue;
    }

    const filePath = join(directory, entry.name);
    const lines = readFileSync(filePath, 'utf8').split(/\r?\n/);

    lines.forEach((line, index) => {
      forbiddenTokens.forEach(token => {
        if (line.includes(token)) {
          violations.push(
            `${relative(root, filePath)}:${index + 1}: forbidden token read ${token}`,
          );
        }
      });
    });
  }
}

scanDirectory(root);

if (violations.length > 0) {
  console.error(
    `Forbidden palette or MDC token reads found in component source:\n${violations.join('\n')}`,
  );
  process.exitCode = 1;
} else {
  console.log('No forbidden palette or MDC token reads in component source.');
}
