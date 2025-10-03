import { summaryToDescriptionPlugin } from './dist/scripts/cem-summary-to-description-plugin.js';
import { cemInheritancePlugin } from '@wc-toolkit/cem-inheritance';

export default {
  globs: ['**/Oscd*.ts', '**/internal/**/*.ts'],
  exclude: [
    '**/*.stories.ts',
    '**/*.d.ts',
    '**/*.js',
    '**/*_test.ts',
    'node_modules',
    '.storybook',
    '.vscode',
    'utils',
    'theming',
  ],
  outdir: './',
  litelement: true,
  dependencies: true,
  dev: false,
  plugins: [cemInheritancePlugin({}), summaryToDescriptionPlugin()],
};
