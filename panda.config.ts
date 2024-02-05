import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

import { recipes, semanticTokens } from "@/styles";

const globalCss = defineGlobalStyles({
  html: {
    // TODO: Add default color
    lineHeight: "1.5rem",
    fontSize: "md",
  },
});

export default defineConfig({
  preflight: true,

  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  exclude: [],
  conditions: {
    //storybook-dark-mode can not change prefers-color-scheme.
    //So, we have to change data-theme by the other way. See
    //Theme decorator in .storybook/preview.tsx
    osDark: process.env.STORYBOOK_DARK_MODE
      ? "[data-theme='dark']  &"
      : "@media (prefers-color-scheme: dark)",
  },

  globalCss,

  theme: {
    extend: {
      semanticTokens,
      recipes,
    },
  },

  outdir: "styled-system",
});
