import { defineConfig } from "@pandacss/dev";

import { semanticTokens } from "@/styles";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],
  conditions: {
    osDark: process.env.STORYBOOK_DARK_MODE
      ? "[data-theme='dark']  &"
      : "@media (prefers-color-scheme: dark)",
  },

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens,
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
