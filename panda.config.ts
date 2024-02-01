import { defineConfig } from "@pandacss/dev";

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
      semanticTokens: {
        colors: {
          primary: {
            DEFAULT: {
              value: {
                base: "{colors.blue.400}",
                _osDark: "{colors.blue.600}",
              },
            },
            disabled: {
              value: {
                base: "{colors.blue.200}",
                _osDark: "{colors.blue.300}",
              },
            },
            hover: {
              value: {
                base: "{colors.blue.500}",
                _osDark: "{colors.blue.700}",
              },
            },
            active: {
              value: {
                base: "{colors.blue.400}",
                _osDark: "{colors.blue.600}",
              },
            },
          },
          danger: {
            DEFAULT: {
              value: {
                base: "{colors.red.400}",
                _osDark: "{colors.red.600}",
              },
            },
            disabled: {
              value: {
                base: "{colors.red.200}",
                _osDark: "{colors.red.300}",
              },
            },
            hover: {
              value: {
                base: "{colors.red.500}",
                _osDark: "{colors.red.700}",
              },
            },
            active: {
              value: {
                base: "{colors.red.400}",
                _osDark: "{colors.red.600}",
              },
            },
          },
          light: {
            DEFAULT: {
              value: {
                base: "white",
              },
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
