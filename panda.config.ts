import { defineConfig } from "@pandacss/dev";

import { semanticTokens } from "@/styles";

export default defineConfig({
  preflight: true,

  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  exclude: [],
  conditions: {
    osDark: process.env.STORYBOOK_DARK_MODE
      ? "[data-theme='dark']  &"
      : "@media (prefers-color-scheme: dark)",
  },

  theme: {
    extend: {
      semanticTokens,
    },
  },

  outdir: "styled-system",
});
