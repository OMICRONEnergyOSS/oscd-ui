import { addons } from "storybook/manager-api";
import { themes } from "storybook/theming";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: "Open SCD UI Library",
    brandUrl: "https://openscd.org",
    brandImage: "assets/oscd_logo.png",
  },
});
