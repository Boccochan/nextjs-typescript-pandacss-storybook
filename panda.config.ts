import {
  defineConfig,
  defineGlobalStyles,
  defineKeyframes,
} from "@pandacss/dev";

import { recipes, semanticTokens } from "@/styles";

const globalCss = defineGlobalStyles({
  html: {
    lineHeight: "1.5rem",
    fontSize: "md",
    color: "body.text",
    bg: "body.bg",
  },
  "*": {
    _focusVisible: {
      outline: "outline",
    },
  },
});

// For some reasons, defineKeyframes does not work
// in the other file. So, I had to put it here.
// Something wrong...
const keyframes = defineKeyframes({
  spinner: {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  dialogOpen: {
    "0%": {
      transform: "scale(0.9)",
      opacity: 0,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1,
    },
  },
  dialogClose: {
    "0%": {
      transform: "scale(1)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(0.9)",
      opacity: 0,
    },
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
      keyframes,
    },
  },

  outdir: "styled-system",
});
