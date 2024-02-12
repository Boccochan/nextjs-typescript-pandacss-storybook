import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpack: (config, options) => {
    //Workaround for 'Error: EBUSY: resource busy or locked, open ...'
    if (options && options.cache) {
      options.cache.set = () => Promise.resolve({ path: "" });
    }
    return config;
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config?.resolve?.alias,
          "@": path.resolve(__dirname, "../src"),
          "#/styled-system": path.resolve(__dirname, "../styled-system"),
        },
      },
    };
  },
};
export default config;
