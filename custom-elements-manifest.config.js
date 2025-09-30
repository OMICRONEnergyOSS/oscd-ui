import { summaryToDescriptionPlugin } from './scripts/cem-summary-to-description-plugin.js';

export default {
  globs: ['**/Oscd*.ts'],
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
  plugins: [summaryToDescriptionPlugin()],
};
