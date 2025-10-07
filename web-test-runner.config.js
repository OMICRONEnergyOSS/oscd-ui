/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { playwrightLauncher } from '@web/test-runner-playwright';
import { polyfill } from '@web/dev-server-polyfill';

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
});
