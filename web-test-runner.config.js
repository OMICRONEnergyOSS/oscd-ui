/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { playwrightLauncher } from '@web/test-runner-playwright';
import { polyfill } from '@web/dev-server-polyfill';

const filteredLogs = [
  'Running in dev mode',
  'Lit is in dev mode',
  'scheduled an update',
  'Multiple versions of Lit loaded',
];

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  plugins: [
    polyfill({
      scopedCustomElementRegistry: true,
    }),
  ],
  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },

  files: ['**/*spec.js', '!node_modules/'],
  browsers: [
    playwrightLauncher({
      product: 'chromium',
      // Exclude since Firefox errors with "Touch is not defined"
      // product: 'firefox',
      // Exclude since Webkit errors with "Unknown error"
      // product: 'webkit',
    }),
  ],

  /** Filter out lit dev mode logs */
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (typeof arg === 'string' && filteredLogs.some(l => arg.includes(l))) {
        return false;
      }
    }
    return true;
  },
});
