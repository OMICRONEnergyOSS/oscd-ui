/** @type { import('@storybook/html-vite').StorybookConfig } */

import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config = {
  stories: ["../**/*.mdx", "../**/*.stories.ts"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],

  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },

  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      assetsInclude: ["**/*.md"],
    });
  },
};
export default config;
