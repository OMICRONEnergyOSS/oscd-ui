import { summaryToDescriptionPlugin } from './dist/scripts/cem-summary-to-description-plugin.js';
import { cemInheritancePlugin } from '@wc-toolkit/cem-inheritance';

export default {
  globs: ['**/Oscd*.ts', '**/internal/**/*.ts'],
  exclude: [
    '**/*.stories.ts',
    '**/*.d.ts',
    '**/*.js',
    '**/*_test.ts',
    '**/*.spec.ts',
    'node_modules',
    '.storybook',
    '.vscode',
    'utils',
    'theming',
    'scl-icon/internal/icons/**',
  ],
  outdir: './',
  litelement: true,
  dependencies: true, // Required for inheritance from third-party libraries
  dev: false,
  plugins: [
    cemInheritancePlugin({
      // Provide the path to the base package's custom-elements.json
      modulePath: 'node_modules/@omicronenergy/oscd-material-web-base/custom-elements.json',
    }),
    summaryToDescriptionPlugin(),
  ],
};
